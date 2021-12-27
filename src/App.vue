<template>
  <div>
<!-- op de character props kan je een index toevoegen die uit een data property komt wann characters worden gekozen / toegewezen -->
   <!-- vue devtools is buggy. console loggen blijft het meest betrouwbaar -->
   <h1>{{ totalHealth }}</h1>
    <character  
    :character="yourCharacter[selectedCharacter]" 
    :currentHealth="yourCharacter[selectedCharacter].healthbar"
    class="your-char"
    >
    <template v-slot:buttons>
    <buttons 
    :character="yourCharacter[selectedCharacter]"
    ></buttons>
    </template>
    <template v-slot:experienceBar>
      <experience-bar
      :experience="yourCharacter[selectedCharacter].experience"></experience-bar>
      </template>
    </character>
    <character
    :character="opponent[currentOpponent]" 
    :currentHealth="opponent[currentOpponent].healthbar"
    class="opponent"
    />
    <character-select @selected-char="selectedHandler" :character="yourCharacter" >
    </character-select>
  </div>
</template>

<script>
import Character from './components/Character.vue';
import Buttons from './components/UI/Buttons.vue';
import characterSelect from './components/characterSelect.vue';
import experienceBar from './components/experienceBar.vue';
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
      selectedCharacter: 0,
      currentOpponent: 0,
      yourCharacter: [{
        dead: false,
        disableButtons: false,
        healthbar: 100,
        number: 0,
        experience: 10,
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
      {
        dead: false,
        disableButtons: false,
        healthbar: 100,
        number: 1,
        experience: 0,
        name: 'pikachu',
        attackOne: 'swipe',
        attackOneMin: 5,
        attackOneMax: 10,
        attackTwo: 'electric bolt',
        attackTwoMin: 15,
        attackTwoMax: 20,
        attackThree: 'flame dance',
        attackThreeMin: 10,
        attackThreeMax: 15,
        attackFour: 'boulder',
        attackFourMin: 8,
        attackFourMax: 13,
      },],
      opponent: [
        {
        dead: false,
        healthbar: 100,
        number: 0,
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
      },
      {
        dead: false,
        healthbar: 100,
        number: 1,
        name: 'charmendar',
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
      ]
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
    'buttons': Buttons,
    'character-select': characterSelect,
    'experience-bar': experienceBar
  },

  methods: {
    selectedHandler(nr) {
      this.selectedCharacter = nr;
    },
    attackHandlerMethod(min, max) {
      const value = attackCalculator(min, max);
      if(this.opponent[this.currentOpponent].healthbar - value <= 0) {
        this.opponent[this.currentOpponent].healthbar = 0;
        this.opponent[this.currentOpponent].dead = true;
        this.yourCharacter[this.selectedCharacter].experience += 20;
      if(this.opponent[this.currentOpponent + 1]) {
          setTimeout(() => {
          this.currentOpponent++;
          this.opponent[this.currentOpponent].healthbar = 100;
        }, 2000);
        }
        else {
          alert('End of combat');
        }
        return;
      }
      else {
        this.opponent[this.currentOpponent].healthbar -= value;
      }
      // const opponentAttack = '';
      const rndm = Math.floor(Math.random() * (4 - 1 + 1) + 1);
      let opponentAttackValue;
      const that = this;
      switch(rndm) {
          case 1:
          opponentAttackValue = attackCalculator(that.opponent[0].attackOneMin, that.opponent[0].attackOneMax);
          break;
        case 2:
          opponentAttackValue = attackCalculator(that.opponent[0].attackTwoMin, that.opponent[0].attackTwoMax);
          break;
        case 3:
          opponentAttackValue = attackCalculator(that.opponent[0].attackThreeMin, that.opponent[0].attackThreeMax);
          break;
        case 4:
          opponentAttackValue = attackCalculator(that.opponent[0].attackFourMin, that.opponent[0].attackFourMax);
          break;   
      }
      if(this.yourCharacter[this.selectedCharacter].healthbar - opponentAttackValue <= 0) {
        this.yourCharacter[this.selectedCharacter].healthbar = 0;
        this.yourCharacter[0].dead = true;
        this.yourCharacter[this.selectedCharacter].disableButtons = true;
        return;
      }
      else {
        this.yourCharacter[this.selectedCharacter].healthbar -= opponentAttackValue;
      }
    }
  },
  // computed properties zijn lazy loaded. Je moet ze dus ergens op de pagina referencen om het goed door te krijgen en dingen te laten gebeuren o.b.v
  computed: {
    totalHealth() {
      let total = 0;
      let x;
      for(x in this.yourCharacter) {
        total += this.yourCharacter[x].healthbar;
      }
      if(total > 0) {
        return total;
      }
      else {
        alert('you lost');
        return 0;
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

button {
    font-size: calc(5px + 1.1vmin);
    font-weight: bold;
    cursor: pointer;
    background-color: white;
    border-radius: 5px;
    padding: 5px;
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
