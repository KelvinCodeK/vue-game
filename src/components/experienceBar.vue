<template>
    <div class="healthbar-wrapper">
            <div 
            class="health" 
            :style="{width: experience + '%'}" >
            </div>
        </div>
</template>

<script>

export default ({
    name: 'experienceBar',
    props: ['experience'],
})
</script>

<style scoped>
.health {
    background-color: blue;
    height: 100%;
    width: 10%;
}

.healthbar-wrapper {
    width: calc( 50px + 25vmin);
    height: calc( 5px + 1vmin);
    border: 2px solid black;
}
</style>