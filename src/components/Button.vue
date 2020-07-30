<template>
  <button class="button">
    <slot/>
  </button>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Button extends Vue {
  }
</script>

<style lang="scss" scoped>
  .button {
    font-size: 16px;
    background: grey;
    color: white;
    border-radius: 4px;
    border: none;
    padding: 5px 10px;
  }
</style>