<template>
  <layout>
    <div class="navBar">
      <Icon name="left"/>
      <span>
    编辑标签
      </span>
      <span class="placeholder">
      </span>
    </div>
    <div class="FormItem-wrapper">
      <FormItem file-name="标签名" placeholder="请输入标签名"/>
    </div>
    <div class='button-wrapper'>
      <Button>删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagsListModel from '@/models/tagListModel';
  import FormItem from '@/components/Money/FormItem.vue';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button, FormItem}
  })
  export default class EditLabel extends Vue {
    created() {
      const id = this.$route.params.id;
      tagsListModel.fetch();
      const tags = tagsListModel.data;
      const tag = tags.filter(t => t.id === id)[0];
      if (tag) {
        console.log(tag);
      } else {
        // this.$router.push('/404/')
        this.$router.replace('/404');
      }
    }

  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .navBar {
    padding: 0 6px;
    @extend %outerShadow;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;

    svg {
      color: #666;
      width: 18px;
      height: 18px;
    }

    .placeholder {
      width: 18px;
      height: 18px;
    }


  }
  .button-wrapper {
    margin-top: 24px;
  }
  .FormItem-wrapper {
    background: white;
    margin-top: 8px
  }
</style>