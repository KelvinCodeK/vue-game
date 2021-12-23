<template>
  <div>
<!-- op de character props kan je een index toevoegen die uit een data property komt wann characters worden gekozen / toegewezen -->
    <character @first-attack="attackHandler" 
    :character="yourCharacter" 
    :currentHealth="yourHealthBar"
    class="your-char"
    />
    <character @first-attack="attackHandler" 
    :character="opponent" 
    :currentHealth="opponentHealthBar"
    class="opponent"
    />
  </div>
</template>

<script>
import Character from './components/Character.vue'
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
      yourCharacter: {
        name: 'charizard',
        attackOne: 'swipe',
        attackOneMin: 5,
        attackOneMax: 10,
        attackTwo: 'lash',
        attackThree: 'flame dance',
        attackFour: 'boulder',
      },
      opponent: {
        name: 'bulbazor',
        attackOne: 'root',
        attackOneMin: 15,
        attackOneMax: 20,
        attackTwo: 'leaf lash',
        attackThree: 'rubble',
        attackFour: 'dash',
      }
    }
  },
  components: {
    'character': Character
  },
  methods: {
    attackHandler(min, max) {
      const value = attackCalculator(min, max);
      if(this.opponentHealthBar - value <= 0) {
        this.opponentHealthBar = 0;
      }
      else {
        this.opponentHealthBar -= value;
      }
      // const opponentAttack = '';
      const rndm = Math.floor(Math.random() * (4 - 1 + 1) + 1);
      console.log(rndm);
      let opponentAttackValue;
      // this valt buiten de switch
      const that = this;
      switch(rndm) {
          case 1:
          opponentAttackValue = attackCalculator(that.opponent.attackOneMin, that.opponent.attackOneMax);
          break;
        case 2:
          opponentAttackValue = attackCalculator(that.opponent.attackOneMin, that.opponent.attackOneMax);
          break;
        case 3:
          opponentAttackValue = attackCalculator(that.opponent.attackOneMin, that.opponent.attackOneMax);
          break;
        case 4:
          opponentAttackValue = attackCalculator(that.opponent.attackOneMin, that.opponent.attackOneMax);
          break;   
      }
      console.log(opponentAttackValue);
      if(this.yourHealthBar - opponentAttackValue <= 0) {
        this.yourHealthBar = 0;
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
