<template>
  <div class="nav">
    <router-link to="/money">记账</router-link>
    <Icon name="money"/>
    <router-link to="/labels">标签</router-link>
    <Icon name="labels"/>
    <router-link to="/statistics">统计</router-link>
    <Icon name="statistics"/>
  </div>
</template>

<script lang="ts">
  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try { importAll(require.context('../assets/icons', true, /\.svg$/)); } catch (error) { console.log(error); }
  // import money from '@/assets/icons/money.svg';
  // import labels from '@/assets/icons/labels.svg';

  // console.log(money);
  // console.log(labels)
  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  .nav {
    border: 1px solid red;
  }
</style>