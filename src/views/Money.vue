<template>
  <div>
    <layout class-prefix="layout">
      <Tags/>
      <Notes/>
      <Types/>
      <NumberPad/>
    </layout>
  </div>

</template>

<script lang="ts">
  import Layout from '@/views/Layout.vue';
  import NumberPad from '@/components/Morney/NumberPad.vue';
  import Tags from '@/components/Morney/Tags.vue';
  import Notes from '@/components/Morney/Notes.vue';
  import Types from '@/components/Morney/Types.vue';

  export default {
    name: 'Money',
    components: {Types, Notes, Tags, NumberPad, Layout},
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
