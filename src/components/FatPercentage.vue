<script setup>
import { ref } from 'vue'
import { ymcaMethod, usaNavyMethod, bmiMethod } from './Calculator.vue'

let stats = ref({
    age: '',
    gender: 'male',
    height: '',
    weight: '',
    waist: '',
    hip: '',
    hips: '',
    wrist: '',
    shin: '',
    neck: '',
    forearm: '',
})
stats = stats.value
let results = ref([])


function calculate() {
    try {
        results.value = []
        results.value.push(ymcaMethod(stats), usaNavyMethod(stats), bmiMethod(stats))
        let middle = (results.value.map(r => r.result).reduce((acc, number) => acc + number, 0) / results.value.length)
        results.value.push({ name: 'Среднее значение', result: isNaN(middle) ? '-' : middle })
        results.value.map(r => r.result = r.result.toFixed(2))
    } catch {
    }
}
</script>

<template>
    <div class="params">
        <div class="gender">
            <input class="paramGenderInput" type="radio" id="male" checked value="male" v-model="stats.gender" />
            <label for="male">Мужчина</label>
        </div>
        <div class="gender">
            <input class="paramGenderInput" type="radio" id="female" value="female" v-model="stats.gender" />
            <label for="female">Женщина</label>
        </div>
        <input class="paramInput" placeholder="Возраст" v-model="stats.age" type="text">
        <input class="paramInput" placeholder="Рост" v-model="stats.height" type="text">
        <input class="paramInput" placeholder="Обхват запястья" v-model="stats.wrist" type="text">
        <input class="paramInput" placeholder="Обхват шеи" v-model="stats.neck" type="text">
        <input class="paramInput" placeholder="Обхват предплечья" v-model="stats.forearm" type="text">
        <input class="paramInput" placeholder="Обхват бедра" v-model="stats.hip" type="text">
        <input class="paramInput" placeholder="Обхват бедер" v-model="stats.hips" type="text">
        <input class="paramInput" placeholder="Обхват голени" v-model="stats.shin" type="text">
        <input class="paramInput" placeholder="Обхват талии" v-model="stats.waist" type="text">
    </div>
    <button @click="calculate()" class="calculate">Вычислить</button>
    <div class="results">
        <div v-for="result of results" class="result">
            <div class="name">{{ result.name }}</div>
            <div class="value">{{ result.result }}</div>
        </div>
    </div>
</template>