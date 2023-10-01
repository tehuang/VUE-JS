<script setup>
    import { ref } from 'vue';
    let text=ref("Main content");
    let change=function(){
      text.value="New Content";
    };
</script>
<template>
  <main>
    <div @click="change">{{ text }}</div>
  </main>
</template>

<style scoped>
    main{padding: 10px;background-color: #dddddd;}
</style>
