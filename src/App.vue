<template>
<!-- op de character props kan je een index toevoegen die uit een data property komt wann characters worden gekozen / toegewezen -->
    <character @first-attack="attackHandler" 
    :characterContent="characterContent" 
    :currentHealth="yourHealthBar"/>
</template>

<script>
import Character from './components/Character.vue'
// Experience atc toevoegen met een localstorage
// critical hit calculator

const attackCalculator = (min, max) => {
return Math.floor(Math.random() * (max - min  + 1) + min);
}

export default {
  name: 'App',
  data() {
    return {
      yourHealthBar: 100,
      opponentHealthBar: 100,
      characterContent: {
        name: 'charizard',
        attackOne: 'swipe',
        attackTwo: 'lash',
        attackThree: 'flame dance',
        attackFour: 'boulder',
      }
    }
  },
  components: {
    'character': Character
  },
  methods: {
    attackHandler(min, max) {
      const value = attackCalculator(min, max);
      if(this.yourHealthBar - value <= 0) {
        this.yourHealthBar = 0;
      }
      else {
        this.yourHealthBar -= value;
      }
    }
  }
}
</script>

<style>
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
