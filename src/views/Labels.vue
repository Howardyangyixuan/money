<template>
  <Layout>
    <ol class="tags">
      <li v-for="tag in tags" :key="tag"><span>{{tag}} </span>
        <Icon name="right"/>
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag">
        新建标签
      </button>
    </div>
  </Layout>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagsListModel from '@/models/TagListModel';

  tagsListModel.fetch();
  @Component
  export default class Labels extends Vue {
    name = 'Labels';
    tags = tagsListModel.data;

    createTag() {
      const name = window.prompt('请输入标签名');
      if (name) {
        const message = tagsListModel.create(name);
        if (message === 'duplicated') {
          window.alert('标签名重复了');
        } else if (message === 'success') {
          window.alert('添加成功');
        } else {
          window.alert('未知错误');
        }
      } else {
        window.alert('输入不能为空，请重新输入');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tags {
    background: white;

    > li {
      padding: 0 6px;
      @extend %outerShadow;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        color: #666;
        width: 18px;
        height: 18px;
      }
    }
  }

  .createTag {
    font-size: 16px;
    background: grey;
    color: white;
    border-radius: 4px;
    border: none;
    padding: 5px 10px;

    &-wrapper {
      padding: 15px;
    }
  }
</style>