<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels"/>
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
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
  nav {
    font-size: 14px;
    flex-direction: row;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    /*border: 1px solid red;*/
    display: flex;
    justify-content: space-around;

    > .item {
      padding: 2px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .icon {
        height: 32px;
        width: 32px;
      }

    }

    > .item.selected {
      color: grey
    }
  }

</style>