<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="types" :value.sync="record.type"/>
<!--    <Tabs class-prefix="interval" :data-source="intervals" :value.sync="interval.value"/>-->
    <div>
      <ol v-if="groupList.length>0">
        <li v-for="group in groupList" :key="group.title">
          <h3 class="title"><span>{{beautify(group.title)}}</span><span>总计：¥{{group.total}}</span></h3>
          <ol>
            <li class="record" v-for="item in group.items" :key="item.id">
              <span> {{tagString(item.tags)}} </span>
              <span class="notes">{{item.notes}}</span>
              <span class="amount">¥{{item.amount}}</span>
            </li>
          </ol>
        </li>
      </ol>
      <div v-else class="noResult">尚未添加相关记录</div>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Types from '@/components/Money/Types.vue';
  import {Component} from 'vue-property-decorator';
  import Vue from 'vue';
  import Tabs from '@/components/Tabs.vue';
  import dayjs from 'dayjs';
  import clone from '@/lib/clone';

  console.log(dayjs().format());
  @Component({
    components: {Tabs, Types},
  })
  export default class Statistics extends Vue {
    name = 'Statistics';
    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};
    interval = {text: '按天', value: 'day'};
    types = [{text: '支出', value: '-'}, {text: '收入', value: '+'}];
    intervals = [{text: '按天', value: 'day'}, {text: '按月', value: 'mouth'}, {text: '按年', value: 'year'}];

    beautify(title: string) {
      const time = dayjs(title);
      const now = dayjs();
      if (time.isSame(now, 'day')) {
        return '今天';
      } else if (time.isSame(dayjs(now).subtract(1, 'day'), 'day')) {
        return '昨天';
      } else if (time.isSame(dayjs(now).subtract(2, 'day'), 'day')) {
        return '前天';
      } else if (time.isSame(dayjs(now), 'year')) {
        return time.format('M月D日');
      } else {
        return time.format('YYYY年M月D日');
      }
    }

    tagString(tags: string[]) {
      return tags.length === 0 ? '无' : tags.join();
    }

    get recordList() {
      return this.$store.state.recordList;
    }

    get groupList() {
      const {recordList} = this;
      if (recordList.length === 0) return [];
      const newList = clone(recordList).filter((r: RecordItem) => r.type === this.record.type).sort((a: RecordItem, b: RecordItem) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
      if (newList.length === 0) return [];
      const result = [{title: newList[0].createdAt, items: [newList[0]], total: newList[0].amount}];
      let total = 0;
      for (let i = 1; i < newList.length; i++) {
        const cur = newList[i];
        const now = dayjs(cur.createdAt);
        const last = dayjs(newList[i - 1].createdAt);
        total += cur.amount;
        if (now.isSame(last, 'day')) {
          result[result.length - 1].items.push(newList[i]);
          result[result.length - 1].total += newList[i].amount;
        } else {
          result.push({title: newList[i].createdAt, items: [newList[i]], total: newList[i].amount});
        }
      }
      return result;
    }
  }
</script>

<style lang="scss" scoped>
  .noResult{
    padding:16px;
  }
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