<template>
    <div class="button-row">
    <button :disabled="disabled" @click="attackHandler(character.attackOneMin, character.attackOneMax)">{{ character.attackOne }}</button>
    <button :disabled="disabled" @click="attackHandler(character.attackTwoMin, character.attackTwoMax)">{{ character.attackTwo }}</button>
    </div>
    <div class="button-row">
    <button :disabled="disabled" @click="attackHandler(character.attackThreeMin, character.attackThreeMax)">{{ character.attackThree }}</button>
    <button :disabled="disabled" @click="attackHandler(character.attackFourMin, character.attackFourMax)">{{ character.attackFour }}</button>
    </div>
</template>

<script>

export default({
    name: 'Buttons',
    props: ['character', 'disabled'],
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