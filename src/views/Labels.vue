<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
        <span>{{tag.name}} </span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click.native="createTag"> 新建标签</Button>
    </div>
  </Layout>

</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import TagHelper from '@/mixins/TagHelper';
  import {mixins} from 'vue-class-component';

  @Component({
    components: {Button},
    computed: {
      tags() {
        return this.$store.state.tagList;
      }
    }
  })
  export default class Labels extends mixins(TagHelper) {
    name = 'Labels';
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tags {
    background: white;

    > .tag {
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