<script setup>
import { ref } from 'vue'
import { boraxFormula } from './Calculator.vue'

let stats = ref({
    gender: 'male',
    height: '',
    weight: '',
})
stats = stats.value
let results = ref([])


function calculate() {
    results.value = []
    results.value.push(boraxFormula(stats))
    results.value.map(r => r.result = r.result.toFixed(2))
}
</script>

<template>
    <div class="params">
        <div class="gender">
            <input class="paramGenderInput" type="radio" id="male" value="male" checked v-model="stats.gender" />
            <label for="male">Мужчина</label>
        </div>
        <div class="gender">
            <input class="paramGenderInput" type="radio" id="female" value="female" v-model="stats.gender" />
            <label for="female">Женщина</label>
        </div>
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