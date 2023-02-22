<template>
  <uTabs :tabs="tabs">
    <template v-slot="scope">
      <list :active="scope.active" />
    </template>
  </uTabs>
</template>
<script>
import list from './tabs/list'

export default {
  name: 'singleTab-demo',
  data () {
    return {
      tabs: [
        {
          name: '基础列表',
          key: 'tab1'
        },
        {
          name: '批量操作',
          key: 'tab2'
        },
        {
          name: '左右结构',
          key: 'tab3'
        },
        {
          name: '列表排序',
          key: 'tab4'
        },
      ],
    }
  },
  components: {
    list,
  },
}
</script>
