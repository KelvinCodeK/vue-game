<template>
    <div class="button-row">
    <button :disabled="character.disableButtons" @click="attackHandler('one')">{{ character.attackOne }}</button>
    <button :disabled="character.disableButtons" @click="attackHandler('two')">{{ character.attackTwo }}</button>
    </div>
    <div class="button-row">
    <button :disabled="character.disableButtons" @click="attackHandler('three')">{{ character.attackThree }}</button>
    <button :disabled="character.disableButtons" @click="attackHandler('four')">{{ character.attackFour }}</button>
    </div>
</template>

<script>

export default({
    name: 'Buttons',
    methods: {
        attackHandler(value) {
            this.$store.commit('attackHandlerMethod', {attack: value});
        }
    },
    computed: {
        character() {
          return this.$store.getters.character;
        }
    }
})
</script>

<style scoped>

.button-row {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
}
</style>