<template>
  <div>
    <h1>Data from Google Sheets</h1>
    <ul>
      <li v-for="(row, index) in sheetData" :key="index">{{ row.join(', ') }}</li>
    </ul>

    <AddTransaction />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const sheetData = ref([]);

onMounted(async () => {
  try {
    const response = await $fetch('/api/sheets');
    console.log(response.data);
    sheetData.value = response.data;
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
  }
});
</script>
