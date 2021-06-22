<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout>
      <a-layout-sider>
        <a-input-search
          v-model:keyWord="data.keyWord"
          placeholder="输入模板关键字"
          @search="onSearch"
        />
        <a-menu
          mode="inline"
          v-model:selectedKeys="selectedKeys"
          v-model:openKeys="data.openKeys"
          @click="onMenuItemClick"
        >
          <a-sub-menu v-for="menu in data.templates" :key="menu.id">
            <template #title>
              <span>{{ menu.name }}</span>
            </template>
            <a-menu-item v-for="item in menu.surveyQuestionnaireList" :key="item.id">{{
              item.title
            }}</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout-content class="content">
        <h5 class="title">{{ data.templateDetail.title }}</h5>
        <p class="info">
          该问卷模板共{{ data.templateDetail.total}}题，模板问题预览如下
        </p>
        <article class="questions">
          <p v-for="item in data.templateDetail.surveyQuestionOptionList" :key="item.id">
            {{ item.sort }}. {{ item.title }}
          </p>
        </article>
        <a href="javascipt:void(0)" class="btn">使用该模板创建问卷</a>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { reactive, computed } from 'vue'
import { getTemplates, getTemplateDetail } from '../../api/templates'
// TODO
// interface IReqTemplates{
//    keyWord: string
// }
// interface IRTemplates {
//   code: number;
//   msg: string;
//   data: any;
// }
interface ITemplatesData {
  templates: object[],
  templateId: string,
  // templateDetail: {
  //   id: string,
  //   name: string,
  //   description: string,
  //   total: number,
  //   questions: object[]
  // },
  templateDetail: object,
  keyWord: string,
  openKeys: string[]
}

export default {
  name: 'Templates',
  components: {},
  setup () {
    const data:ITemplatesData = reactive({
      templates: [],
      templateId: '',
      templateDetail: {},
      keyWord: '',
      openKeys: []
    })

    // return a ref object, but can not revise the value manually
    const selectedKeys = computed(() => [data.templateId])

    // 请求可以写在onBeforeMount lifecycle hook 中,也可以在这里直接调用
    // 请求-获取所有模板菜单 TODO
    const getTemplatesReq = () => {
      getTemplates({ keyWord: data.keyWord }).then((res: any) => {
        // console.log(res)
        // const result = res.data.data
        if (res && res.length) {
          data.templates = res
          const menu = res[0]
          if (menu && menu.surveyQuestionnaireList && menu.surveyQuestionnaireList.length) {
            data.templateId = menu.surveyQuestionnaireList[0].id
            data.openKeys = [menu.id]
            getTemplateDetailReq()
          }
        }
      })
    }

    // 请求-获取某个模板详情
    const getTemplateDetailReq = () => {
      getTemplateDetail(data.templateId).then((res: any) => {
        if (res) {
          data.templateDetail = res
        }
      })
    }

    // 按关键字搜索模板
    const onSearch = (keyWord: string) => {
      if (keyWord !== data.keyWord) {
        data.keyWord = keyWord
        getTemplatesReq()
      }
    }

    // 点击菜单
    const onMenuItemClick = ({ item, key, keyPath }: any) => {
      if (key !== data.templateId) {
        data.templateId = key
        getTemplateDetailReq()
      }
    }

    // 初始请求调用
    getTemplatesReq()

    return {
      data,
      selectedKeys,
      onSearch,
      onMenuItemClick
    }
  }
}
</script>

<style lang="postcss" scoped>
/* TODO */
.ant-layout-sider {
  width: 3000px !important;
  flex: 0 0 300px !important;
  max-width: none !important;
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
    height: calc(100vh - 362px);
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
