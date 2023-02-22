<template>
  <uTabs :tabs="tabs">
    <template v-slot="scope">
      <component :is="scope.active" />
    </template>
  </uTabs>
</template>
<script>
import tab1 from './tabs/tab1'
import tab2 from './tabs/tab2'
import tab3 from './tabs/tab3'
import tab4 from './tabs/tab4'

export default {
  name: 'page-demo',
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
    tab1,
    tab2,
    tab3,
    tab4,
  },
}
</script>
