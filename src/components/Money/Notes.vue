<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <!--      <input type="text" :value='value' @input="value = $event.target.value" placeholder="请输入备注">-->
      <input type="text" v-model="value">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue {
    value = '';

    @Watch('value')
    onValueChange(value: string) {
      this.$emit('update:value', value);
    }

  }
</script>

<style lang="scss" scoped>

  .notes {
    display: flex;
    align-items: center;
    font-size: 14px;
    background: #f5f5f5;
    padding-left: 16px;

    .name {
      padding-right: 2.3vh;
    }

    input {
      height: 5vh;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }

</style>