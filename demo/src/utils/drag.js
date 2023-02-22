/**
 * 设置指定绝对定位元素的拖拽效果
 * @param {*} elP 拖拽的绝对定位元素
 * @param {*} ev 鼠标
 * @param {Boolean} flag 是否拖动自己
 */
const onmousedown = (elP, ev, flag) => {
  const el = flag ? elP.parentNode : elP.parentNode.parentNode
  // 调整鼠标样式，提示可拖拽
  el.style.cursor = 'move'
  // 记录鼠标的位置和元素的差值
  const sX = ev.clientX - el.offsetLeft
  const sY = ev.clientY - el.offsetTop
  // 设置初始偏移量
  let left = ''
  let top = ''
  // 鼠标点击并拖动
  document.onmousemove = (ev) => {
    // 对比偏移量，仅变更时调整样式
    if (left !== ev.clientX - sX + 'px') {
      left = ev.clientX - sX + 'px'
      el.style.left = left
    }
    if (top !== ev.clientY - sY + 'px') {
      top = ev.clientY - sY + 'px'
      el.style.top = top
    }
  }
  // 鼠标释放
  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null
    el.style.cursor = 'default' // 恢复默认鼠标样式
  }
}

// 弹窗拖拽指令，饿了么弹窗定制版本
export const drag = {
  inserted: (el) => {
    el.onmousedown = (ev) => onmousedown(el, ev)
  }
}

// 默认拖拽指令
export const dragDefault = {
  inserted: (el) => {
    el.onmousedown = (ev) => onmousedown(el, ev, true)
  }
}
