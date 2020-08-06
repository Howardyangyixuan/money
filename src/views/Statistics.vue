<template>
  <Layout>
    <!--    <Types :value.sync="record.type"/>-->
    <Types class-prefix="type" :value.sync="record.type"/>
  </Layout>
</template>

<script lang="ts">
  import Types from '@/components/Money/Types.vue';
  import {Component} from 'vue-property-decorator';
  import Vue from 'vue';

  @Component({
    components: {Types},
  })
  export default class extends Vue {
    name = 'Statistics';
    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};
  }
</script>

<style lang="scss" scoped>
  ::v-deep .type-item {
    background: white;

    &.selected {
      background: #c4c4c4;

      &::after {
        display: none;
      }

    }
  }
</style>