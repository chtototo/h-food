<script setup>
import { ref } from 'vue'
import { beckertIndex, tatonyaIndex, ottoIndex, breitmanIndex, gabsIndex, noordenIndex } from './Calculator.vue'

let stats = ref({
    gender: 'male',
    height: '',
})
stats = stats.value
let results = ref([])


function calculate() {
    results.value = []
    results.value.push(beckertIndex(stats), tatonyaIndex(stats), ottoIndex(stats), breitmanIndex(stats), gabsIndex(stats), noordenIndex(stats))
    results.value.push({ name: 'Средний результат', result: (results.value.map(r => r.result).reduce((acc, number) => acc + number, 0) / results.value.length) })
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
    </div>
    <button @click="calculate()" class="calculate">Вычислить</button>
    <div class="results">
        <div v-for="result of results" class="result">
            <div class="name">{{ result.name }}</div>
            <div class="value">{{ result.result }}</div>
        </div>
    </div>
</template>