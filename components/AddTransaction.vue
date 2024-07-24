<template>
    <div>
      <h1>Tambah Transaksi</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="no">No:</label>
          <input type="number" id="no" v-model="formData.no" required>
        </div>
        <div>
          <label for="tanggal">Tanggal:</label>
          <input type="number" id="tanggal" v-model="formData.tanggal" required>
        </div>
        <div>
          <label for="bulan">Bulan:</label>
          <input type="number" id="bulan" v-model="formData.bulan" required>
        </div>
        <div>
          <label for="tahun">Tahun:</label>
          <input type="number" id="tahun" v-model="formData.tahun" required>
        </div>
        <div>
          <label for="kategori">Kategori:</label>
          <input type="text" id="kategori" v-model="formData.kategori" required>
        </div>
        <div>
          <label for="tabungan">Tabungan:</label>
          <input type="text" id="tabungan" v-model="formData.tabungan" required>
        </div>
        <div>
          <label for="oleh">Oleh:</label>
          <input type="text" id="oleh" v-model="formData.oleh" required>
        </div>
        <div>
          <label for="keterangan">Keterangan:</label>
          <input type="text" id="keterangan" v-model="formData.keterangan" required>
        </div>
        <div>
          <label for="nominal">Nominal:</label>
          <input type="number" id="nominal" v-model="formData.nominal" required>
        </div>
        <button type="submit">Tambah</button>
      </form>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue';

  const formData = ref({
    no: '',
    tanggal: '',
    bulan: '',
    tahun: '',
    kategori: '',
    tabungan: '',
    oleh: '',
    keterangan: '',
    nominal: ''
  });

  const submitForm = async () => {
    try {
      const response = await $fetch('/api/add-transaction', {
        method: 'POST',
        body: formData.value,
      });
      console.log('Data berhasil ditambahkan:', response);
    } catch (error) {
      console.error('Error menambahkan data:', error);
    }
  };
  </script>
