<template>
  <div>
    <layout class-prefix="layout">
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
      <div>
        <label class="notes">
          <span class="name">备注</span>
          <input type="text" placeholder="请输入备注">
        </label>
      </div>
      <div>
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
      <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="ok">OK</button>
          <button class="zero">0</button>
          <button>.</button>
        </div>
      </div>
    </layout>
  </div>

</template>

<script lang="ts">
  import Layout from '@/views/Layout.vue';

  export default {
    name: 'Money',
    components: {Layout},
  };
</script>

<style lang="scss">
  .layout-content {
    /*border: 30px solid red;*/
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

  }

</style>
<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

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

  .notes {
    display: flex;
    align-items: center;
    font-size: 14px;
    background: #f5f5f5;
    padding-left: 16px;

    .name {
      padding-right: 2.3vh;
    }

    input {
      height: 5vh;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }

  .types {
    background: #c4c4c4;
    display: flex;
    font-size: 3.5vh;

    > li {
      width: 50%;
      height: 10vh;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }

  .numberPad {
    .output {
      @extend %clearFix;
      @extend %innerShadow;
      font-size: 5.4vh;
      font-family: Consolas, monospace;
      /*padding: 9px 16px;*/
      padding: 1.35vh 16px;
      text-align: right;
    }

    .buttons {
      @extend %clearFix;

      > button {
        font-size: 3vh;
        $h:10vh;
        $w:25%;
        width: $w;
        height: $h;
        float: left;
        background: transparent;
        border: none;

        &.ok {
          height: $h*2;
          float: right;
        }

        &.zero {
          width: $w*2;
        }

        $bg: #f2f2f2;

        &:nth-child(1) {
          background: $bg;
        }

        &:nth-child(2), &:nth-child(5) {
          background: darken($bg, 4%);
        }

        &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: darken($bg, 4*2%);
        }

        &:nth-child(4), &:nth-child(7), &:nth-child(10) {
          background: darken($bg, 4*3%);
        }

        &:nth-child(8), &:nth-child(11), &:nth-child(13) {
          background: darken($bg, 4*4%);
        }

        &:nth-child(14) {
          background: darken($bg, 4*5%);
        }

        &:nth-child(12) {
          background: darken($bg, 4*6%);
        }
      }
    }
  }
</style>