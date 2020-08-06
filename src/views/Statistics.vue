<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="types" :value.sync="record.type"/>
    <Tabs class-prefix="interval" :data-source="intervals" :value.sync="interval.value"/>
    <div>
      <ol>
        <li v-for="(group,idx) in result" :key="idx">
          <h3 class="title">{{group.title}}</h3>
          <ol>
            <li class="record" v-for="item in group.items" :key="item.id">
              <span> {{tagString(item.tags)}} </span>
              <span class="notes">{{item.notes}}</span>
              <span class="amount">¥{{item.amount}}</span>
            </li>

          </ol>
        </li>
      </ol>
    </div>
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
  export default class Statistics extends Vue {
    name = 'Statistics';
    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};
    interval = {text: '按天', value: 'day'};
    types = [{text: '支出', value: '-'}, {text: '收入', value: '+'}];
    intervals = [{text: '按天', value: 'day'}, {text: '按月', value: 'mouth'}, {text: '按年', value: 'year'}];

    tagString(tags: string[]) {
      return tags.length === 0 ? '无' : tags.join();
    }

    get recordList() {
      return this.$store.state.recordList;
    }

    get result() {
      const {recordList} = this;
      type HashTableValue = { title: string; items: RecordItem[] }
      const hashTable: { [key: string]: HashTableValue } = {};
      for (let i = 0; i < recordList.length; i++) {
        const [date, time] = (recordList[i].createdAt.split('T'));
        hashTable[date] = hashTable[date] || {title: date, items: []};
        hashTable[date].items.push(recordList[i]);
      }
      console.log(hashTable);
      return hashTable;
    }
  }
</script>

<style lang="scss" scoped>
  %item {
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .notes {
    margin-left: 8px;
    margin-right: auto;
    color: #999;
    text-align: left;
  }

  .amount {
    margin-left: 8px;
  }

  .title {
    @extend %item;
  }

  .record {
    @extend %item;
    background: white;
  }

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