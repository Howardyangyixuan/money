<template>
  <div>
    <layout class-prefix="layout">
      <Tags :value.sync="record.tags"/>
      <FormItem file-name="备注" placeholder="请添加备注" @update:value="onUpdateNotes" :value="record.notes"/>
      <Types :value.sync="record.type"/>
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    </layout>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Tags from '@/components/Money/Tags.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Types from '@/components/Money/Types.vue';

  @Component(
    {
      components: {
        Types, FormItem, Tags, NumberPad,
      },
      computed: {
        data() {
          return this.$store.state.recordList;
        }
      }
    }
  )
  export default class Money extends Vue {
    name = 'Money';
    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord() {
      if (!this.record.tags || this.record.tags.length === 0) {
        window.alert('请至少选择一个标签');
        return;
      }
      this.$store.commit('createRecord', this.record);
      this.record.notes = '';
    }


  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
</style>
