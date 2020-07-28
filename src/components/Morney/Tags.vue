<template>
  <div class="tags">
    <div class="current">
      <ul>
        <li>衣</li>
        <li>食1</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行i12</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    </div>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Tags'
  };
</script>

<style lang="scss" scoped>
  .tags {
    flex-grow: 1;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    margin: 16px;

    > .current {
      overflow: scroll;
      max-height: 16vh;

      > ul {
        display: flex;
        /*flex-direction: column-reverse;*/
        /*justify-content:left;*/
        flex-wrap: wrap-reverse;
        overflow: scroll;
      }

      > ul > li {
        background: grey;
        $h: 3.6vh;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        color: white;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 4px;
      }
    }

    > .new {
      padding-top: 2.4vh;

      button {
        background: transparent;
        color: #999;
        border: none;
        border-bottom: 1px solid;

      }
    }
  }

</style>