<template>
  <div>
    <layout class-prefix="layout">
      <Tags :data-source.sync='tags' @update:value="onUpdateTags"/>
      <Notes @update:value="onUpdateNotes"/>
      <!--      <Types :value='record.type' @update:value="onUpdateType"/>-->
      <Types :value.sync="record.type"/>
      <!--      <NumberPad @update:value="onUpdateAmount"/>-->
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    </layout>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import NumberPad from '@/components/Morney/NumberPad.vue';
  import Tags from '@/components/Morney/Tags.vue';
  import Notes from '@/components/Morney/Notes.vue';
  import Types from '@/components/Morney/Types.vue';

  //数据迁移的思路
  // const version = window.localStorage.getItem('version' || '0');
  // if (version === '0.0.1') {
  //   recordList.forEach(record => {
  //     record.createdAt = new Date(2020, 0, 1);
  //   });
  //   window.localStorage.setItem('recordList', JSON.stringify(recordList));
  // }
  // window.localStorage.setItem('version', '0.0.2');
  type Record = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: Date;
  }
  @Component(
    {
      components: {
        Types, Notes, Tags, NumberPad,
      },
    }
  )
  export default class Money extends Vue {
    name = 'Money';
    tags = ['衣', '食', '住', '行', 'piao'];
    recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    record: Record = {tags: [], notes: '', type: '-', amount: 0};

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    // onUpdateType(value: string) {
    //   this.record.type = value;
    // }

    // onUpdateAmount(value: string) {
    //   this.record.amount = parseFloat(value);
    // }

    saveRecord() {
      const recordCopy: Record = JSON.parse(JSON.stringify(this.record));
      recordCopy.createdAt = new Date();
      this.recordList.push(recordCopy);
    }

    @Watch('recordList')
    onRecordListChange() {
      window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
    }
  }
</script>

<style lang="scss">
  .layout-content {
    /*border: 30px solid red;*/
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
</style>
