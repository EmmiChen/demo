/**
 * 输出项目基础信息
 * @param {string} key 字段
 * @param {string} value 对应值
 */
function log (key, value) {
  const css = 'padding: 0 6px; color: #fff;'
  console.log(
    `%c${key}%c${value}`, // Console Message
    `${css}border-radius: 3px 0 0 3px; background: #606060;`,
    `${css}border-radius: 0 3px 3px 0; background: #409EFF;`,
  )
}

const logInfo = (Platform) => {
  log('Platform', Platform)
  log('Version', document.querySelector('meta[name=app-version]').content)
  log('BuildTime', document.querySelector('meta[name=app-build-time]').content)
}

logInfo('obs-bussiness')
