<template>
    <section>
        <header>
        <h2 :class="{dead: character.dead, animated: animation}">{{ character.name }}</h2>
        </header>
        <div class="healthbar-wrapper">
            <div 
            class="health" 
            :style="{width: currentHealth + '%'}" 
            :class="[{'low-health': characterLowHealth}, {'medium-health': characterMediumHealth}]">
            </div>
        </div>
        <slot name="buttons"></slot>
        <slot name="experienceBar"></slot>
    </section>

</template>

<script>
export default {
  name: 'Character',
  computed: {
      character() {
          return this.$store.getters.character;
      },
      currentHealth() {
          return this.$store.getters.currentHealth;
      },
      animation() {
          return this.$store.getters.animation;
      },
      characterMediumHealth() {
          return this.$store.getters.characterMediumHealth;
      },
      characterLowHealth() {
          return this.$store.getters.characterLowHealth;
      }
  },
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

.animated {
    animation: slide 0.3s ease-out;
}

@keyframes slide{
    0% {

    }

    50% {
        transform: translate(20px , -15px);
    }

    100% {

     }
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
.dead {
    color: red;
}
</style>