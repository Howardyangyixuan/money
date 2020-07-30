<template>
  <div>
    <layout class-prefix="layout">
      {{record}}
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

  type Record = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
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
    recordList: Record[] = [];
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
      const recordCopy = JSON.parse(JSON.stringify(this.record))
      this.recordList.push(recordCopy);
      console.log(recordCopy);
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
