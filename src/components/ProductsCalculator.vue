<script setup>
import { products } from '../data/products.vue'
import { ref, computed } from 'vue'
let prods = products
products.value.map(function (current) {
    current.quantity = '';
    current.price = '';
})
const selectedItem = ref('');
const cart = ref([]);

const filteredItems = computed(() => {
    if (selectedItem.value) {
        return products.value.filter(item => item.name.toLowerCase().includes(selectedItem.value.toLowerCase()));
    } else {
        return 0;
    }
});

const totalProteins = computed(() => {
    return cart.value.reduce((acc, item) => acc + (item.proteins * item.quantity / 100), 0).toFixed(1);
});

const totalFats = computed(() => {
    return cart.value.reduce((acc, item) => acc + (item.fats * item.quantity / 100), 0).toFixed(1);
});

const totalCarbohydrates = computed(() => {
    return cart.value.reduce((acc, item) => acc + (item.carbohydrates * item.quantity / 100), 0).toFixed(1);
});

const totalCalories = computed(() => {
    return cart.value.reduce((acc, item) => acc + (item.calories * item.quantity / 100), 0).toFixed(1);
});

const totalPrice = computed(() => {
    return cart.value.reduce((acc, item) => acc + (item.price * item.quantity / 100), 0).toFixed(1);
});

function filterItems() {
    // Метод для фильтрации товаров
}

function updateCart(item) {
    if (item.quantity > 0 && !cart.value.includes(item)) {
        cart.value.push(item);
    } else if (item.quantity === 0 && cart.value.includes(item)) {
        const indexToRemove = cart.value.findIndex(cartItem => cartItem.name === item.name);
        cart.value.splice(indexToRemove, 1);
    }
}

function subtractFromCart(item) {
    if (item.quantity > 0 && cart.value.includes(item)) {
        item.quantity = '';
        if (item.quantity === 0) {
            const indexToRemove = cart.value.findIndex(cartItem => cartItem.name === item.name);
            cart.value.splice(indexToRemove, 1);
        }
    }
}
</script>
<template>
    <div class="text-gray-700">
        <input v-model="selectedItem" @input="filterItems" class="paramInput" placeholder="Название продукта" />
        <div class="grid grid-cols-3 gap-[20px] gap-y-[50px] justify-center items-center mt-[10px] mb-[50px] text-center">
            <div>Белки
                <div class="total">{{ totalProteins }}</div>
            </div>
            <div>Жиры
                <div class="total">{{ totalFats }}</div>
            </div>
            <div>Углеводы
                <div class="total">{{ totalCarbohydrates }}</div>
            </div>
            <div>Калорийность
                <div class="total">{{ totalCalories }}</div>
            </div>
            <div>Цена
                <div class="total">{{ totalPrice }}</div>
            </div>
        </div>
        <ul v-if="filteredItems.length > 0">
            <div
                class="grid grid-cols-[40%,15%,15%,15%,15%] border-b-[1px] border-b-gray-700 justify-center items-center text-center">
                <div class="">Продукт</div>
                <div class="">Б</div>
                <div class="">Ж</div>
                <div class="">У</div>
                <div class="">Кал-сть</div>
            </div>
            <li v-for="item in filteredItems" :key="item.name" class="border-b-[1px] border-b-gray-500">
                <div class="grid grid-cols-[40%,15%,15%,15%,15%] justify-center items-center text-center">
                    <div class="">{{ item.name }}</div>
                    <div class="">{{ item.proteins }}</div>
                    <div class="">{{ item.fats }}</div>
                    <div class="">{{ item.carbohydrates }}</div>
                    <div class="">{{ item.calories }}</div>
                </div>
                <div class="grid grid-cols-[50%,50%] gap-[5px] mt-[10px]">
                    <input class="w-[100%] border-[1px] border-gray-500 rounded-[25px] h-[100px] px-[10px] box-border" placeholder="Количество, г" type="number" v-model="item.quantity" @input="updateCart(item)" />
                    <input class="w-[100%] border-[1px] border-gray-500 rounded-[25px] h-[100px] px-[10px] box-border" placeholder="Цена за 100г" type="number" v-model="item.price" @input="updateCart(item)" />
                </div>
                <button @click="subtractFromCart(item)" class="border-[1px] border-gray-500 rounded-[100%] w-[80px] h-[80px] bg-gradient-to-r text-gray-700 active:bg-gray-500 my-[10px]">-</button>
            </li>
        </ul>
        <div v-if="cart.length > 0" class="border-[1px] border-gray-500 rounded-[25px] p-[20px]">
            <div v-for="product of cart" class="flex items-center justify-between">
                <div class="">{{ product.name }} - {{ product.quantity }}г </div>
                <button @click="subtractFromCart(product)" class="border-[1px] border-gray-500 rounded-[100%] w-[50px] h-[50px] bg-gradient-to-r text-gray-700 active:bg-gray-500 my-[10px] flex justify-center items-center">-</button>
            </div>
        </div>
    </div>
</template>