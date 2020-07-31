<template>
  <div>
    <layout class-prefix="layout">
      <Tags :data-source.sync='tags' @update:value="onUpdateTags"/>
      <FormItem file-name="备注" placeholder="请添加备注"  @update:value="onUpdateNotes"/>
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
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Tags from '@/components/Money/Tags.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Types from '@/components/Money/Types.vue';
  import recodeListModel from '@/models/recodeListModel';
  import tagListModel from '@/models/tagListModel';
  @Component(
    {
      components: {
        Types, FormItem, Tags, NumberPad,
      },
    }
  )
  export default class Money extends Vue {
    name = 'Money'
    tags: {id: string;name: string}[]= tagListModel.fetch()
    recordList: RecordItem[] = recodeListModel.fetch()
    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

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
      const recordCopy: RecordItem = recodeListModel.clone(this.record);
      recordCopy.createdAt = new Date();
      this.recordList.push(recordCopy);
    }

    @Watch('recordList')
    onRecordListChange() {
      recodeListModel.save(this.recordList);
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
