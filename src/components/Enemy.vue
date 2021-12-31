<template>
    <section>
        <header>
        <h2 :class="{dead: enemy.dead}">{{ enemy.name }}</h2>
        </header>
        <div class="healthbar-wrapper">
            <div 
            class="health" 
            :style="{width: enemyHealth + '%'}" 
            :class="[{'low-health': enemyLowHealth}, {'medium-health': enemyMediumHealth}]">
            </div>
        </div>
    </section>

</template>

<script>
export default {
  name: 'Enemy',
  computed: {
      enemy() {
          return this.$store.getters.enemy;
      },
      enemyHealth() {
          return this.$store.getters.enemyHealth;
      },
      enemyMediumHealth() {
          return this.$store.getters.enemyMediumHealth;
      },
      enemyLowHealth() {
          return this.$store.getters.enemyLowHealth;
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