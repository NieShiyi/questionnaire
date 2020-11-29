<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout>
      <a-layout-sider width="200">
        <a-input-search
          v-model:keyWord="data.keyWord"
          placeholder="输入模板关键字"
          @search="onSearch"
        />
        <a-menu
          mode="inline"
          v-model:selectedKeys="data.selectedKeys"
          v-model:openKeys="data.openKeys"
        >
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
      <a-layout-content class="content">
        <h5 class="title">大学生恋爱观调查</h5>
        <p class="info">该问卷模板共20题，模板问题预览如下</p>
        <article class="questions">
          <p>1. 你的年级是?</p>
          <p>2. 你的性别是?</p>
          <p>3. 你每个月的生活费用是多少元？</p>
          <p>4. 你的生活费用来源是？</p>
          <p>5. 你现在的感情状况是？</p>
          <p>6. 你曾经或现在的恋爱时长是多长时间？（X日/X个月/X年）</p>
          <p>7. 恋爱时的每月花费是多少元？</p>
          <p>8. 你恋爱时通常会消费在哪些方面？</p>
          <p>9. 你的父母会给你一定的恋爱花销费用吗？</p>
          <p>10. 你觉得自己会因为恋爱消费而导致生活紧张吗？</p>
          <p>11. 你认为金钱会影响恋人之间的关系吗？</p>
          <p>12. 你觉得恋爱中AA制消费怎么样？</p>
          <p>13. 你认为以下哪种说法更符合你的恋爱消费观？</p>
          <p>16. 根据第15题，选择该地区的原因是？</p>
          <p>17. 你对另一半的身高要求具体是多少m？（数值）</p>
          <p>18. 你能接受另一半的恋爱次数最多是多少次？（数值）</p>
          <p>19. 你认为大学期间情侣每天在一起多长时间合适？（X个小时）</p>
          <p>20. 你觉得恋爱与婚姻有什么关系？</p>
        </article>
        <a href="javascipt:void(0)" class="btn">使用该模板创建问卷</a>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { reactive } from 'vue'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from '@ant-design/icons-vue'
export default {
  name: 'Templates',
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined
  },
  setup () {
    const data = reactive({
      keyWord: '',
      selectedKeys: ['1'],
      openKeys: ['sub1']
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
.ant-layout-sider {
  background-color: #fff;
  .ant-input-search {
    /* width: 160px;
    margin: 15px auto; */
    margin: 15px auto 10px;
    display: block;
    width: 90%;
    height: 32px;
    /deep/ .ant-input {
      width: 88%;
    }
    /deep/ .ant-input-suffix {
      display: inline-block;
    }
  }
  .ant-input-affix-wrapper::before {
    content: "";
  }
}
.content {
  background: #fff;
  padding: 20px;
  margin: 15px;
  position: relative;
  .title {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }
  .info {
    margin: 15px 0;
  }
  .questions {
    /* height: calc(100% - 170px); */
    height: calc(100vh - 386px);
    overflow-y: scroll;
    margin-bottom: 20px;
    > p {
      margin: 5px 0;
      color: #666;
    }
  }
  .btn {
    width: 200px;
    height: 54px;
    margin: 0 auto;
    background-color: var(--main);
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 54px;
  }
}
</style>
