<script setup>
import { ref } from 'vue'
import { brocaIndexWithAge, creffFormula, brocaIndex, robertCooperFormula, humveeFormula, devinFormula, brocaIndexWithBuild, brocaBrugschFormula, robinsonFormula, bornhardtIndex, lorentzFormula, monnerothDumainFormula, pottonIndex, mohamedFormula, millerFormula } from './Calculator.vue'

let stats = ref({
    age: '',
    gender: 'male',
    height: '',
    wrist: '',
    chest: '',
})
stats = stats.value
let results = ref([])

function calculate() {
    results.value = []
    results.value.push(brocaIndexWithAge(stats), creffFormula(stats), brocaIndex(stats), robertCooperFormula(stats), humveeFormula(stats), devinFormula(stats), brocaIndexWithBuild(stats), brocaBrugschFormula(stats), robinsonFormula(stats), bornhardtIndex(stats), lorentzFormula(stats), monnerothDumainFormula(stats), pottonIndex(stats), mohamedFormula(stats), millerFormula(stats))
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
        <input class="paramInput" placeholder="Возраст" v-model="stats.age" type="text">
        <input class="paramInput" placeholder="Рост" v-model="stats.height" type="text">
        <input class="paramInput" placeholder="Обхват запястья" v-model="stats.wrist" type="text">
        <input class="paramInput" placeholder="Обхват груди" v-model="stats.chest" type="text">
    </div>
    <button @click="calculate()" class="calculate">Вычислить</button>
    <div class="results">
        <div v-for="result of results" class="result">
            <div class="name">{{ result.name }}</div>
            <div class="value">{{ result.result }}</div>
        </div>
    </div>
</template>