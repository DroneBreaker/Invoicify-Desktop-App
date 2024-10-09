<template>
    <button class="btn">
        {{ buttonTitle }}
    </button>
</template>

<script setup>
/**
 *  IMPORTS
*/
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

    defineProps({
        buttonTitle: {
            type: String,
            required: true,
        },

        location: {
            type: String,
            required: true,
        }
    })
</script>

<style lang="css" scoped>
.btn {
    border-radius: 10px;
    height: 45px;
    width: 140px;
    cursor: pointer;
    margin-right: 10px;
}

.btn:hover {
    background-color: #011b05;
    color: white;
}
</style>