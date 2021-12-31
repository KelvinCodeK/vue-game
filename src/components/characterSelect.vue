<template>
<section>
      <h3>Choose your character</h3>
    <ul>
        <li v-for="item in characters" :key="item.name"> <button @click="selectedChar(item.number)">{{ item.name }}</button></li>
    </ul>
    </section>
</template>

<script>

export default ({
    name: 'characterSelect',
    methods: {
        selectedChar(nr) {
            this.$store.commit('selectedHandler', nr);
        }
    },
    computed: {
         characters() {
          return this.$store.getters.characters;
      },
    }
})
</script>

<style scoped>
section {
    border: 1px solid black;
    width: calc( 50px + 25vmin);
    height: calc( 25px + 15vmin);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: grey;
    z-index: 1;
} 

.active {
    color: green; 
}

h3 {
    color: white;
}

ul {
  list-style: none;
  display:flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>