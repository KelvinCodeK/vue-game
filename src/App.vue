<template>
  <div>
<!-- op de character props kan je een index toevoegen die uit een data property komt wann characters worden gekozen / toegewezen -->
    <character  
    :character="yourCharacter" 
    :currentHealth="yourHealthBar"
    class="your-char"
    >
    <buttons 
    :character="yourCharacter" 
    :disabled="disableButtons"
    ></buttons>
    </character>
    <character
    :character="opponent" 
    :currentHealth="opponentHealthBar"
    class="opponent"
    />
  </div>
</template>

<script>
import Character from './components/Character.vue';
import Buttons from './components/UI/Buttons.vue';
// Experience atc toevoegen met een localstorage
// critical hit calculator
// toch yourchar en opponent componenten. Buttons zijn niet nodig bij opponent

const attackCalculator = (min, max) => {
return Math.floor(Math.random() * (max - min  + 1) + min);
}

export default {
  name: 'App',
  data() {
    return {
      yourHealthBar: 100,
      opponentHealthBar: 100,
      disableButtons: false,
      yourCharacter: {
        dead: false,
        name: 'charizard',
        attackOne: 'swipe',
        attackOneMin: 5,
        attackOneMax: 10,
        attackTwo: 'lash',
        attackTwoMin: 15,
        attackTwoMax: 20,
        attackThree: 'flame dance',
        attackThreeMin: 10,
        attackThreeMax: 15,
        attackFour: 'boulder',
        attackFourMin: 8,
        attackFourMax: 13,
      },
      opponent: {
        dead: false,
        name: 'bulbazor',
        attackOne: 'root',
        attackOneMin: 5,
        attackOneMax: 10,
        attackTwo: 'leaf lash',
        attackTwoMin: 15,
        attackTwoMax: 20,
        attackThree: 'rubble',
        attackThreeMin: 5,
        attackThreeMax: 10,
        attackFour: 'dash',
        attackFourMin: 7,
        attackFourMax: 12
      }
    }
  },
  // Zorg dat je in de provide een methode doorstuurt. Niet de functie zelf in provide zet
    provide() {
    return {
      attackHandler: this.attackHandlerMethod
    }
  },
  components: {
    'character': Character,
    'buttons': Buttons
  },

  methods: {
    attackHandlerMethod(min, max) {
      const value = attackCalculator(min, max);
      if(this.opponentHealthBar - value <= 0) {
        this.opponentHealthBar = 0;
        this.opponent.dead = true;
        this.disableButtons = true;
        return;
      }
      else {
        this.opponentHealthBar -= value;
      }
      // const opponentAttack = '';
      const rndm = Math.floor(Math.random() * (4 - 1 + 1) + 1);
      let opponentAttackValue;
      const that = this;
      switch(rndm) {
          case 1:
          opponentAttackValue = attackCalculator(that.opponent.attackOneMin, that.opponent.attackOneMax);
          break;
        case 2:
          opponentAttackValue = attackCalculator(that.opponent.attackTwoMin, that.opponent.attackTwoMax);
          break;
        case 3:
          opponentAttackValue = attackCalculator(that.opponent.attackThreeMin, that.opponent.attackThreeMax);
          break;
        case 4:
          opponentAttackValue = attackCalculator(that.opponent.attackFourMin, that.opponent.attackFourMax);
          break;   
      }
      if(this.yourHealthBar - opponentAttackValue <= 0) {
        this.yourHealthBar = 0;
        this.yourCharacter.dead = true;
        this.disableButtons = true;
        return;
      }
      else {
        this.yourHealthBar -= opponentAttackValue;
      }
    }
  }
}
</script>

<style>
.your-char {
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 5em;
}

.opponent {
  position: absolute;
  right: 0;
  top: 0;
  margin: 5em;
}

body {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
