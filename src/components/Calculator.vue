<script>
import { ref } from 'vue'
let stats = {
    age: 0,
    gender: '',
    height: 0,
    weight: 0,
    waist: 0,
    hip: 0,
    hips: 0,
    wrist: 0,
    shin: 0,
    chest: 0,
    neck: 0,
    forearm: 0,
    activeCoefficient: 0,
}
stats = ref(stats)
//pw
export function brocaIndexWithAge(stats) {
    return { name: 'Индекс Брока с учетом возраста', result: stats.age < 40 ? stats.height - 110 : stats.height - 100 }
}
export function creffFormula(stats) {
    let coefficient
    if (stats.wrist < 15) {
        coefficient = 0.9
    } else if ((stats.wrist >= 15) & (stats.wrist <= 17)) {
        coefficient = 1
    } else {
        coefficient = 1.1
    }
    return { name: 'Формула Креффа', result: (stats.height - 100 + (stats.age / 10)) * 0.9 * coefficient }
}
export function brocaIndex(stats) {
    return { name: 'Индекс Брока', result: stats.gender === 'male' ? (stats.height - 100) * 0.9 : (stats.height - 100) * 0.85 }
}
export function robertCooperFormula(stats) {
    return { name: 'Формула Роберта Купера', result: stats.gender === 'male' ? stats.height * 0.713 - 58 : stats.height * 0.624 - 48.9 }
}
export function humveeFormula(stats) {
    return { name: 'Формула Хамви', result: stats.gender === 'male' ? (stats.height / 2.54 - 60) * 2.7 + 48 : (stats.height / 2.54 - 60) * 2.2 + 45.5 }
}
export function devinFormula(stats) {
    return { name: 'Формула Девина', result: stats.gender === 'male' ? (stats.height / 2.54 - 60) * 2.3 + 50 : (stats.height / 2.54 - 60) * 2.3 + 45.5 }
}
export function brocaIndexWithBuild(stats) {
    let coefficient

    if (stats.wrist < 15) {
        coefficient = 0.9
    } else if ((stats.wrist >= 15) & (stats.wrist <= 17)) {
        coefficient = 1
    } else {
        coefficient = 1.1
    }

    if (stats.height < 155) {
        return { name: 'Индекс Брока с учетом комплекции', result: (stats.height - 95) * coefficient }
    } else if ((stats.height >= 155) & (stats.height <= 175)) {
        return { name: 'Индекс Брока с учетом комплекции', result: (stats.height - 100) * coefficient }
    } else {
        return { name: 'Индекс Брока с учетом комплекции', result: (stats.height - 110) * coefficient }
    }
}
export function brocaBrugschFormula(stats) {
    if (stats.height < 165) {
        return { name: 'Формула Брока Бругша', result: (stats.height - 100) }
    } else if ((stats.height >= 165) & (stats.height <= 175)) {
        return { name: 'Формула Брока Бругша', result: (stats.height - 105) }
    } else {
        return { name: 'Формула Брока Бругша', result: (stats.height - 110) }
    }
}
export function robinsonFormula(stats) {
    return { name: 'Формула Робинсона', result: stats.gender === 'male' ? (stats.height / 2.54 - 60) * 1.9 + 52 : (stats.height / 2.54 - 60) * 1.7 + 49 }
}
export function bornhardtIndex(stats) {
    return { name: 'Индекс Борнхардта', result: stats.height * stats.chest / 240 }
}
export function lorentzFormula(stats) {
    return { name: 'Формула Лоуренса', result: stats.gender === 'male' ? stats.height - 100 - (stats.height - 150) / 4 : stats.height - 100 - (stats.height - 150) / 2 }
}
export function monnerothDumainFormula(stats) {
    return { name: 'Формула Моннерот-Думейна', result: (stats.height - 100 + (4 * stats.wrist)) / 2 }
}
export function pottonIndex(stats) {
    return { name: 'Индекс Поттона', result: stats.gender === 'male' ? stats.height - 100 - stats.height / 200 : stats.height - 100 - stats.height / 100 }
}
export function mohamedFormula(stats) {
    return { name: 'Формула Мохаммеда', result: stats.height * stats.height * 0.00225 }
}
export function millerFormula(stats) {
    return { name: 'Формула Миллера', result: stats.gender === 'male' ? ((stats.height / 2.54 - 60) * 1.41 + 56.2) : ((stats.height / 2.54 - 60) * 1.36 + 53.1) }
}
//nw
export function beckertIndex(stats) {
    if (stats.height < 165) {
        return { name: 'Индекс Беккерта', result: stats.height - 103 }
    } else if ((stats.height >= 165) & (stats.height <= 175)) {
        return { name: 'Индекс Беккерта', result: stats.height - 106 }
    } else {
        return { name: 'Индекс Беккерта', result: stats.height - 110 }
    }
}
export function tatonyaIndex(stats) {
    return { name: 'Индекс Татоня', result: stats.height - (100 + (stats.height - 100) / 20) }
}
export function ottoIndex(stats) {
    return { name: 'Индекс Отто', result: stats.gender === 'male' ? stats.height - 100 - (stats.height - 100 - 52) * 1 / 5 : stats.height - 100 - (stats.height - 100 - 52) * 2 / 5 }
}
export function breitmanIndex(stats) {
    return { name: 'Индекс Брейтмана', result: stats.height * 0.7 - 50 }
}
export function gabsIndex(stats) {
    return { name: 'Индекс Габса', result: (stats.height - 150) * 4 / 5 + 55 }
}
export function noordenIndex(stats) {
    return { name: 'Индекс Ноордена', result: stats.height * 420 / 1000 }
}
//fp
export function ymcaMethod(stats) {
    let result = stats.gender === 'male' ? (-98.42 + (4.15 * stats.waist / 2.54) - (0.082 * (stats.weight / 0.454))) / (stats.weight / 0.454) * 100 : (-76.76 + (4.15 * stats.waist / 2.54) - (0.082 * (stats.weight / 0.454))) / (stats.weight / 0.454) * 100
    return result === Infinity | result === -Infinity | isNaN(result) ? { name: 'YMCA метод', result: '-' } : { name: 'YMCA метод', result: result }
}
export function usaNavyMethod(stats) {
    let result = stats.gender === 'male' ? 495 / (1.0324 - 0.19077 * Math.log10(stats.waist - stats.neck) + 0.15456 * Math.log10(stats.height)) - 450 : 495 / (1.29579 - 0.35004 * Math.log10(stats.waist + stats.hips - stats.neck) + 0.221 * Math.log10(stats.height)) - 450
    return result === Infinity | result === -Infinity | isNaN(result) ? { name: 'Метод флота США', result: '-' } : { name: 'Метод флота США', result: result }
}
export function bmiMethod(stats) {
    try {
        let bmi = stats.weight / stats.height ** 2 * 10000
        let result = stats.gender === 'male' ? (1.2 * bmi) + (0.23 * stats.age) - (10.8 * 1) - 5.4 : (1.2 * bmi) + (0.23 * stats.age) - (10.8 * 0) - 5.4
        return result === Infinity | result === -Infinity | isNaN(result) ? { name: 'Метод ИМТ', result: '-' } : { name: 'Метод ИМТ', result: result }
    } catch (e) {
        alert('Ошибка')
    }
}
//mm
export function boraxFormula(stats) {
    return { name: 'Формула Боракса', result: stats.gender === 'male' ? 0.407 * stats.weight + 0.267 * stats.height - 19.2 : 0.252 * stats.weight + 0.473 * stats.height - 48.3 }
}
//bmr
export function ketchMcArdleFormula(stats) {
    return { name: 'Формула Кетча МакАрдла', result: stats.gender === 'male' ? 370 + 21.6 * (0.407 * stats.weight + 0.267 * stats.height - 19.2) : 370 + 21.6 * (0.252 * stats.weight + 0.473 * stats.height - 48.3) }
}
export function mifflinSangeorFormula(stats) {
    return { name: 'Формула Миффлина Санжеора', result: stats.gender === 'male' ? 10 * stats.weight + 6.25 * stats.height - 5 * stats.age + 5 : 10 * stats.weight + 6.25 * stats.height - 5 * stats.age - 161 }
}
export function harrisBenedictFormula(stats) {
    return { name: 'Формула Харриса Бенедикта', result: stats.gender === 'male' ? (5 + (10 * stats.weight) + (6.25 * stats.height) - (5 * stats.age)) * stats.activeCoefficient : ((10 * stats.weight) + (6.25 * stats.height) - (5 * stats.age) - 161) * stats.activeCoefficient }
}
//bmi
export function bmi(stats) {
    let result = stats.weight / stats.height ** 2 * 10000
    return {name: 'ИМТ', result: result === Infinity | result === -Infinity | isNaN(result) ? '-' : result}
}
</script>

<template>
</template>