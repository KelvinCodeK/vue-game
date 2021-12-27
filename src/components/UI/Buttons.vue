<template>
    <div class="button-row">
    <button :disabled="character.disableButtons" @click="attackHandler(character.attackOneMin, character.attackOneMax)">{{ character.attackOne }}</button>
    <button :disabled="character.disableButtons" @click="attackHandler(character.attackTwoMin, character.attackTwoMax)">{{ character.attackTwo }}</button>
    </div>
    <div class="button-row">
    <button :disabled="character.disableButtons" @click="attackHandler(character.attackThreeMin, character.attackThreeMax)">{{ character.attackThree }}</button>
    <button :disabled="character.disableButtons" @click="attackHandler(character.attackFourMin, character.attackFourMax)">{{ character.attackFour }}</button>
    </div>
</template>

<script>

export default({
    name: 'Buttons',
    props: ['character'],
    inject: ['attackHandler']
})
</script>

<style scoped>

.button-row {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
}
</style>