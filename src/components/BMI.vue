<script setup>
import { ref } from 'vue'
import { bmi } from './Calculator.vue'

let stats = ref({
    height: '',
    weight: '',
})
stats = stats.value
let results = ref([])


function calculate() {
    results.value = []
    results.value.push(bmi(stats))
    results.value.map(r => r.result = r.result === '-' ? r.result : r.result.toFixed(2))
}
</script>

<template>
    <div class="params">
        <input class="paramInput" placeholder="Рост" v-model="stats.height" type="text">
        <input class="paramInput" placeholder="Вес" v-model="stats.weight" type="text">
    </div>
    <button @click="calculate()" class="calculate">Вычислить</button>
    <div class="results">
        <div v-for="result of results" class="result">
            <div class="name">{{ result.name }}</div>
            <div class="value">{{ result.result }}</div>
        </div>
    </div>
</template>