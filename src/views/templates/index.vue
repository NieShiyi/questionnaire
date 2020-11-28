<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout class="content">
      <a-layout-sider width="200">
        <a-input-search v-model:keyWord="data.keyWord" placeholder="输入模板关键字" @search="onSearch" />
        <a-menu mode="inline" v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" :style="{ height: '100%', borderRight: 0 }">
          <a-sub-menu key="sub1">
            <template #title>
              <span><user-outlined />subnav 1</span>
            </template>
            <a-menu-item key="1">option1</a-menu-item>
            <a-menu-item key="2">option2</a-menu-item>
            <a-menu-item key="3">option3</a-menu-item>
            <a-menu-item key="4">option4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span><laptop-outlined />subnav 2</span>
            </template>
            <a-menu-item key="5">option5</a-menu-item>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <span><notification-outlined />subnav 3</span>
            </template>
            <a-menu-item key="9">option9</a-menu-item>
            <a-menu-item key="10">option10</a-menu-item>
            <a-menu-item key="11">option11</a-menu-item>
            <a-menu-item key="12">option12</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"> Content </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { reactive } from 'vue'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue'
export default {
  name: 'Templates',
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined
  },
  setup () {
    const data = reactive({
      keyWord: ''
    })

    // 按关键字搜索模板
    const onSearch = (keyWord: string) => {
      if (keyWord !== data.keyWord) {
        console.log('keyWord', keyWord)
      }
    }

    return {
      data,
      onSearch
    }
  }
}
</script>

<style lang="postcss" scoped>
.header {
}
.content {
  .ant-layout-sider {
    background-color: #fff;
    .ant-input-search {
      width: 160px;
      margin: 15px auto;
    }
    .ant-input-affix-wrapper:hover,
    .ant-input-affix-wrapper:focus,
    .ant-input-affix-wrapper-focused {
      border-color: #5ccab0;
      box-shadow: rgba(21, 195, 154, 0.24) 0px 0px 0px 2px;
    }
  }
  .ant-layout {
    padding: 15px;
  }
}
</style>
