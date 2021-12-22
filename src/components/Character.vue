<template>
    <section>
        <h2><em>{{ character.name }}</em></h2>
        <div class="healthbar-wrapper">
            <div 
            class="health" 
            :style="{width: currentHealth + '%'}" 
            :class="[{'low-health': lowHealth}, {'medium-health': mediumHealth}]">
            </div>
        </div>
        <button @click="firstAttack">{{ character.attackOne }}</button>
        <button>{{ character.attackTwo }}</button>
        <button>{{ character.attackThree }}</button>
        <button>{{ character.attackFour }}</button>
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
          this.$emit('first-attack', this.character.attackOneMin, this.character.attackOneMax, this.character.id);
      }
  }
}
</script>

<style scoped>
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
    width: 20rem;
    border: 1px solid black;
    height: 2rem;
}
</style>