<script setup>
import { ref } from 'vue'
import { ketchMcArdleFormula, mifflinSangeorFormula, harrisBenedictFormula } from './Calculator.vue'

let stats = ref({
    age: '',
    gender: 'male',
    height: '',
    weight: '',
    activeCoefficient: 1.2,
})
stats = stats.value
let results = ref([])


function calculate() {
    results.value = []
    results.value.push(ketchMcArdleFormula(stats), mifflinSangeorFormula(stats), harrisBenedictFormula(stats))
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
        <input class="paramInput" placeholder="Вес" v-model="stats.weight" type="text">
        <div class="active">
            <input class="paramActiveInput" type="radio" id="sit" value="1.2" checked v-model="stats.activeCoefficient" />
            <label for="male">Сидячий образ жизни</label>
        </div>
        <div class="active">
            <input class="paramActiveInput" type="radio" id="some" value="1.375" v-model="stats.activeCoefficient" />
            <label for="female">Умеренная активность (занятия 1-3 раза в неделю)</label>
        </div>
        <div class="active">
            <input class="paramActiveInput" type="radio" id="normal" value="1.55" v-model="stats.activeCoefficient" />
            <label for="male">Средняя активность (занятия 3-5 раз в неделю)</label>
        </div>
        <div class="active">
            <input class="paramActiveInput" type="radio" id="active" value="1.725" v-model="stats.activeCoefficient" />
            <label for="female">Активный образ жизни (интенсивные нагрузки, занятия 6-7 раз в неделю)</label>
        </div>
        <div class="active">
            <input class="paramActiveInput" type="radio" id="veryActive" value="1.9" v-model="stats.activeCoefficient" />
            <label for="male">Очень активный образ жизни (спорстмены, занятия 6-7 раз в неделю)</label>
        </div>
    </div>
    <button @click="calculate()" class="calculate">Вычислить</button>
    <div class="results">
        <div v-for="result of results" class="result">
            <div class="name">{{ result.name }}</div>
            <div class="value">{{ result.result }}</div>
        </div>
    </div>
</template>