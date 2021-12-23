<template>
    <div class="button-row">
    <button @click="attackHandler(character.attackOneMin, character.attackOneMax)">{{ character.attackOne }}</button>
    <button>{{ character.attackTwo }}</button>
    </div>
    <div class="button-row">
    <button>{{ character.attackThree }}</button>
    <button>{{ character.attackFour }}</button>
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