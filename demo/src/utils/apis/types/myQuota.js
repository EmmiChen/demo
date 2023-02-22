const {
  gateway,
} = sysConfig

const pre = `${gateway}/obs-bussiness`

/**
 * 我的配额
 * @see http://10.0.7.68:6094/swagger-ui.html#/
 */

export default {
  autoExtract: pre + '/myQuota/autoExtract', // 自动抽取
  extractQuota: pre + '/myQuota/extractQuota', // 抽取配额
  openIsAutoExtract: pre + '/myQuota/openIsAutoExtract', // 开启自动抽取
  selectMyQuotaList: pre + '/myQuota/selectMyQuotaList', // 我的配额列表
  isCanExtractNext: pre + '/myQuota/isCanExtractNext', // 判断是否可以进行抽取下一条数据
  reloadUnCallNumById: pre + '/myQuota/reloadUnCallNumById', // 校准未外呼数据
}
