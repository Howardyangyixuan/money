<template>
  <div class="tags">
    <div class="current">
      <ul>
        <li v-for="tag in dataSource" :key="tag"
            :class="{selected: selectedTags.indexOf(tag)>=0}" @click="toggle(tag)">{{tag}}
        </li>
      </ul>
    </div>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    @Prop(Array) dataSource: string[] | undefined;
    selectedTags: string[] = [];

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
    }
  }
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

    > .current::-webkit-scrollbar {
      display: none;
    }

    > .current {
      overflow: scroll;
      max-height: 16vh;

      > ul {
        display: flex;
        /*flex-direction: column-reverse;*/
        /*justify-content:left;*/
        flex-wrap: wrap-reverse;
        /*overflow: scroll;*/
      }

      > ul > li {
        $bg: #d9d9d9;
        background: $bg;
        $h: 3.6vh;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        color: black;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 4px;

        &.selected {
          background: darken($bg, 50%);
          color: white;
        }
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