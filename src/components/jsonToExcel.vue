<template>
    <vue3-json-excel :json-data="jsonData" :fields="fields">
        <button class="btn">点击下载</button>
    </vue3-json-excel>
</template>
<script setup lang="ts">
import { ref } from "vue"
const jsonData = ref([
{
    数学:"20",
    语文:"30",
}
])
const fields = {
    数学: "数学",
    语文: "语文"
}
</script>
<style lang="css">
.btn {
    margin: 0;
    line-height: 1;
    font-family: inherit;
    padding: 10px 14px;
    display: inline-flex;
    font-size: 14px;
    border-radius: 4px;
    color: #333639;
    border: 1px solid #e0e0e6;
    background-color: #0000;
    white-space: nowrap;
    outline: none;
    justify-content: center;
    user-select: none;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    background-color: #18a058;
    color: white;
}

.btn:hover {
    border-color: #18a058;
}
</style>