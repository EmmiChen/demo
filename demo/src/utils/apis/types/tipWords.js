const {
  gateway,
} = sysConfig

const pre = `${gateway}/obs-base`

/**
 * 话术配置
 * @see http://10.0.7.106:6094/swagger-ui.html#/
 */
export default {
  // 话术配置
  saveVerbalTrick: pre + '/verbalTrick/saveVerbalTrick', // 保存话术
  findVerbalTrick: pre + '/verbalTrick/findVerbalTrick', // 查看话术
}
