<template>
  <layout>
    <div class="navBar">
      <router-link to="/labels" class="item" active-class="selected">
        <Icon @click="goBack" name="left"/>
      </router-link>
      <span>
    编辑标签
      </span>
      <span class="placeholder">
      </span>
    </div>
    <div class="FormItem-wrapper">
      <FormItem :value="tag.name" @update:value="update" file-name="标签名" placeholder="请输入标签名"/>
    </div>
    <div class='button-wrapper'>
      <Button @click.native="remove">删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import FormItem from '@/components/Money/FormItem.vue';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button, FormItem}

  })
  export default class EditLabel extends Vue {
    tag?: Tag = undefined;

    created() {
      const id = this.$route.params.id;
      this.$store.commit('fetchTags');
      const tags = this.$store.state.tagList;
      const tag = tags.filter((t: { id: string }) => t.id === id)[0];
      if (tag) {
        this.tag = tag;
      } else {
        // this.$router.push('/404/')
        this.$router.replace('/404');
      }
    }

    update(name: string) {
      if (this.tag) {
        const id = this.tag.id;
        this.$store.commit('updateTag', {id, name});
      }
    }

    remove() {
      if (this.tag) this.$store.commit('removeTag', this.tag.id);
      this.$router.replace('/labels');
    }

    goBack() {
      this.$router.replace('/labels');

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