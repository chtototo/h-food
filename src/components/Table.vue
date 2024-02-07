<script setup>
import { products } from '../data/products.vue'
import { onBeforeUpdate, ref } from 'vue'

let prods = products

function sortByField(field) {
    prods = products.value.sort((a, b) => a[field] > b[field] ? 1 : -1)
}

let search = ref('')
onBeforeUpdate(() => {
    if (search.value != '') {
        prods = products.value.filter(p => p.name.toLowerCase().includes(search.value.toLowerCase()))
    } else {
        prods = products
    }
})
</script>
<template>
    <div class="w-[100%]">
        <input v-model="search" type="text" placeholder="Название продукта"
            class="h-[50px] w-[100%] mb-[20px] border-[1px] box-border border-gray-500 appearance-none rounded-[35px] bg-white px-[15px]">
        <div class="flex w-[100%] justify-around mb-[50px]">
            <button @click="sortByField('name')" class="sortButton">abc</button>
            <button @click="sortByField('proteins')" class="sortButton">б</button>
            <button @click="sortByField('fats')" class="sortButton">ж</button>
            <button @click="sortByField('carbohydrates')" class="sortButton">у</button>
            <button @click="sortByField('calories')" class="sortButton">к</button>
        </div>
        <div class="">
            <div class="w-[100%] text-gray-700 grid grid-cols-[40%,15%,15%,15%,15%] text-center border-b-[1px] border-gray-500">
                <div class="">Продукт</div>
                <div class="">Б</div>
                <div class="">Ж</div>
                <div class="">У</div>
                <div class="">Кал-сть</div>
            </div>
            <div v-for="product of prods"
                class="w-[100%] text-gray-700 grid grid-cols-[40%,15%,15%,15%,15%] text-center border-b-[1px] border-gray-500 items-center h-[100px]">
                <div class="">{{ product.name }}</div>
                <div class="">{{ product.proteins }}</div>
                <div class="">{{ product.fats }}</div>
                <div class="">{{ product.carbohydrates }}</div>
                <div class="">{{ product.calories }}</div>
            </div>
        </div>
    </div>
</template>