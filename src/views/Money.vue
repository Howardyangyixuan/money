<template>
  <div>
    <layout class-prefix="layout">
      <Tags :data-source='tags'/>
      <Notes/>
      <Types/>
      <NumberPad/>
    </layout>
  </div>

</template>

<script lang="ts">
  import NumberPad from '@/components/Morney/NumberPad.vue';
  import Tags from '@/components/Morney/Tags.vue';
  import Notes from '@/components/Morney/Notes.vue';
  import Types from '@/components/Morney/Types.vue';

  export default {
    name: 'Money',
    components: {Types, Notes, Tags, NumberPad},
    data() {
      return {
        tags: ['衣', '食', '住', '行','piao']
      };
    }
  };
</script>

<style lang="scss">
  .layout-content {
    /*border: 30px solid red;*/
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
</style>
