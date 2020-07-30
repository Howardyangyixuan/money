<template>
  <layout>
    <div class="tag">
      <Icon name="left"/>
      <span>
    编辑标签
      </span>
    </div>
    <Notes file-name="标签名" placeholder="请输入标签名"/>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagsListModel from '@/models/tagListModel';
  import Notes from '@/components/Money/Notes.vue';

  @Component({
    components: {Notes}
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

  .tag {
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
</style>