<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="types" :value.sync="record.type"/>
    <Tabs class-prefix="interval" :data-source="intervals" :value.sync="interval.value"/>
  </Layout>
</template>

<script lang="ts">
  import Types from '@/components/Money/Types.vue';
  import {Component} from 'vue-property-decorator';
  import Vue from 'vue';
  import Tabs from '@/components/Tabs.vue';

  @Component({
    components: {Tabs, Types},
  })
  export default class extends Vue {
    name = 'Statistics';
    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};
    interval = {text: '按天', value: 'day'};
    types = [{text: '支出', value: '-'}, {text: '收入', value: '+'}];
    intervals = [{text: '按天', value: 'day'}, {text: '按月', value: 'mouth'}, {text: '按年', value: 'year'}];
  }
</script>

<style lang="scss" scoped>
  ::v-deep li.interval-item {
    height: 40px;
  }

  ::v-deep .type-item, {
    background: white;

    &.selected {
      background: #c4c4c4;

      &::after {
        display: none;
      }

    }
  }
</style>