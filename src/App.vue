<template>
  <div>
    <!-- op de character props kan je een index toevoegen die uit een data property komt wann characters worden gekozen / toegewezen -->
    <!-- vue devtools is buggy. console loggen blijft het meest betrouwbaar -->
   <h1>{{ totalHealth }}</h1>
   <!-- friendly en enemy componenten maken -->
    <character  class="your-char">
    <template v-slot:buttons>
    <buttons />
    </template>
    <template v-slot:experienceBar>
      <experience-bar />
    </template>
    </character>
    <enemy class="opponent" />
    <character-select />
  </div>
</template>

<script>
import Character from './components/Character.vue';
import Enemy from './components/Enemy.vue';
import Buttons from './components/UI/Buttons.vue';
import characterSelect from './components/characterSelect.vue';
import experienceBar from './components/experienceBar.vue';
// Experience atc toevoegen met een localstorage
// critical hit calculator
// toch yourchar en opponent componenten. Buttons zijn niet nodig bij opponent
 // computed properties zijn lazy loaded. Je moet ze dus ergens op de pagina referencen om het goed door te krijgen en dingen te laten gebeuren o.b.v[]
export default {
  name: 'App',
  components: {
    'character': Character,
    'enemy': Enemy,
    'buttons': Buttons,
    'character-select': characterSelect,
    'experience-bar': experienceBar
  },
  computed: {
    totalHealth() {
      return this.$store.getters.totalhealth;
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
