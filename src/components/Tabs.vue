<template>
  <div>
    <ul class="tabs" :class="{[classPrefix+'-tab']:classPrefix}">
      <li @click="select(item)" v-for=
        "item in dataSource" :key="item.value"
          :class="{[classPrefix+'-item']:classPrefix,selected:value === item.value}">
        {{item.text}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  type dataSourceItem = {
    text: string;
    value: string;
  }

  @Component
  export default class Tabs extends Vue {
    @Prop() dataSource!: dataSourceItem[];
    @Prop(String) readonly value: string | undefined;
    @Prop(String) classPrefix?: string;

    select(item: dataSourceItem) {
      let idx = -1;
      for (let i = 0; i < this.dataSource.length; i++) {
        if (item.value === this.dataSource[i].value) {
          idx = i;
          break;
        }
      }
      if (idx === -1) {
        throw new Error('value is unknown');
      }
      this.$emit('update:value', item.value);
    }

  }
</script>

<style lang="scss" scoped>
  .tabs {
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
</style>