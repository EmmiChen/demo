/**
 * 获取页面权限和验证权限的方法集合
 * 1.配置路由参数 meta增加getFuncId，用布尔值表示是否需要通过接口取得权限集合，不配置就是不需要
 * 2.公共方法，进入页面前如果to.meta.getFuncId为true就走这个getFuncId方法来获取权限集合并保存到缓存
 * 3.页面使用，已挂在在Vue原型链，使用this.$checkFuncId(code),传递页面路径和需要判断的code来返回布尔值
 * 判断该页面是否有add权限例子
 * this.$checkFuncId('add')
 */
import router from '@/router'
import axios from 'axios'

const siteCode = '211113'

/**
 * 获取权限的方法
 * @param {string} href route配置的路径
 * @param {string} code 实际使用的权限code，详情页可能使用列表页权限
 * @param {function} callback 回调方法
 */
export const getFuncId = (href, code, callback) => {
  const getFuncId = JSON.parse(sessionStorage.getItem(`getFuncId-${siteCode}`) || '{}')
  axios.post(sysConfig.gateway + `/hrm/accountApi/accessible/getFuncId?href=/%23${code || href}&siteCode=${siteCode}`).then((res) => {
    getFuncId[href] = res
    sessionStorage.setItem(`getFuncId-${siteCode}`, JSON.stringify(getFuncId))
    callback && callback()
  }).catch(() => {
    callback && callback()
  })
}

/**
 * 判断是否有权限
 * 需要在进入页面前缓存页面的权限集合并记录缓存
 * 通过此方法进行权限验证
 * @param {string|number} code 权限编码
 * @returns {boolean} 是否有权限
 */
export const checkFuncId = (code) => {
  // 获取缓存中的权限集合，此值在进行页面前已缓存
  const getFuncId = JSON.parse(sessionStorage.getItem(`getFuncId-${siteCode}`) || '{}')
  const path = router.currentRoute.path
  // 获取缓存中的权限集合，此值在进行页面前已缓存
  const funIds = getFuncId[path] || []
  // console.log('页面权限集合', funIds, '查询编码', code, '查询结果', funIds.includes(code))
  return funIds.includes(code)
}
