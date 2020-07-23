<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
<!--      <Icon name="money_backup"/>-->
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels"/>
<!--      <Icon name="labels_backup"/>-->
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
<!--      <Icon name="statistics_backup"/>-->
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try { importAll(require.context('../assets/icons', true, /\.svg$/)); } catch (error) { console.log(error); }
  // import money from '@/assets/icons/money_backup.svg';
  // import labels from '@/assets/icons/labels_backup.svg';

  // console.log(money);
  // console.log(labels)
  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  nav {
    @extend %outerShadow;
    font-size: 14px;
    padding-top: 5px;
    flex-direction: row;
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
        height: 5.5vh;
        width: 5.5vh;
      }

    }

    > .item.selected {
      color: $color-highlight
    }
  }

</style>