<template>
  <Layout>
    <ol class="tags">
      <li><span>衣 </span>
        <Icon name="right"/>
      </li>
      <li><span>食</span>
        <Icon name="right"/>
      </li>
      <li><span>住</span>
        <Icon name="right"/>
      </li>
      <li><span>行</span>
        <Icon name="right"/>
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag">
        新建标签
      </button>
    </div>
  </Layout>

</template>

<script lang="ts">
  export default {
    name: 'Labels',
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tags {
    background: white;

    > li {
      padding: 0 6px;
      @extend %outerShadow;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        color: #666;
        width: 18px;
        height: 18px;
      }
    }
  }

  .createTag {
    font-size: 16px;
    background: grey;
    color: white;
    border-radius: 4px;
    border: none;
    padding: 5px 10px;
    &-wrapper{
      padding: 15px;
    }
  }
</style>