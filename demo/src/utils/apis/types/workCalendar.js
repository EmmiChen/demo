const {
  gateway,
} = sysConfig

const pre = `${gateway}/obs-base`

/**
 * 工作日历管理
 * @see http://10.0.7.106:6094/swagger-ui.html#/
 */
export default {
  // 工作日历管理 Work Calendar Controller
  getWorkCalendarSetting: pre + '/workCalendar/getWorkCalendarSetting/', // 获取日历配置
  saveWorkCalendarSetting: pre + '/workCalendar/saveWorkCalendarSetting', // 保存日历配置
  saveWorkCalendar: pre + '/workCalendar/saveWorkCalendar', // 设置为工作日/非工作日
  viewWorkCalendar: pre + '/workCalendar/viewWorkCalendar', // 工作日历查看
}
