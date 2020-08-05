<template>
  <div>
    {{data}}
    <layout class-prefix="layout">
      <Tags/>
      <FormItem file-name="备注" placeholder="请添加备注" @update:value="onUpdateNotes"/>
      <!--      <Types :value='record.type' @update:value="onUpdateType"/>-->
      <Types :value.sync="record.type"/>
      <!--      <NumberPad @update:value="onUpdateAmount"/>-->
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
          return this.$store.state.data;
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
      this.$store.commit('create', this.record);
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
