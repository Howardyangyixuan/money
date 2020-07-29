<template>
  <div>
    <layout class-prefix="layout">
      {{record}}
      <Tags :data-source.sync='tags' @update:value="onUpdateTags"/>
      <Notes @update:value="onUpdateNotes"/>
      <Types @update:value="onUpdateType"/>
      <NumberPad @update:value="onUpdateAmount"/>
    </layout>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
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
    record: Record = {tags: [], notes: '', type: '-', amount: 0};

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onUpdateType(value: string) {
      this.record.type = value;
    }

    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
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
