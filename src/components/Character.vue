<template>
    <section>
        <header>
        <h2><em>{{ character.name }}</em></h2>
        </header>
        <div class="healthbar-wrapper">
            <div 
            class="health" 
            :style="{width: currentHealth + '%'}" 
            :class="[{'low-health': lowHealth}, {'medium-health': mediumHealth}]">
            </div>
        </div>
        <div class="button-row">
        <button @click="firstAttack">{{ character.attackOne }}</button>
        <button>{{ character.attackTwo }}</button>
        </div>
        <div class="button-row">
        <button>{{ character.attackThree }}</button>
        <button>{{ character.attackFour }}</button>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Character',
  props: ['character', 'currentHealth'],
  data() {
      return {
          mediumHealth: false,
          lowHealth: false
      }
  },
  watch: {
      currentHealth(value) {
          if( value > 20 && value <= 50 ) {
              this.mediumHealth = true;
          }
          else if(value <= 20) {
              this.lowHealth = true;
          }
      }
  },
  methods: {
      firstAttack() {
          this.$emit('first-attack', this.character.attackOneMin, this.character.attackOneMax);
      }
  }
}
</script>

<style scoped>
section {
    border: 1px solid black;
    width: calc( 100px + 50vmin);
    height: calc( 50px + 30vmin);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.button-row {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
}

.health {
    background-color: green;
    height: 100%;
    width: 100%;
}
.medium-health {
    background-color: orange;
}
/* .low-health moet onder .health komen te staan. anders wordt de class niet doorgevoerd */
.low-health {
    background-color: red;
}
.healthbar-wrapper {
    width: calc( 50px + 25vmin);
    height: calc( 10px + 2vmin);
    border: 2px solid black;
}
</style>