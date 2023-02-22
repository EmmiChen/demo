<template>
  <el-form v-bind="$props" ref="formModel">
    <slot name="start"></slot>
    <el-form-item :prop="prop || key" :label="label" v-for="{
      label,
      key,
      prop,
      placeholder,
      maxlength = 30,
      type,
      list,
      dateType,
      desc,
      isRange,
      className,
      filterable = false, // select框条件搜索
      showAllLevels = false, // 级联
      checkStrictly = true, // 级联选择
      // select的change事件拓展
      change = () => {},
      clearable = true,
      multiple = false,
      valueFormatDate = 'yyyy-MM-dd',
      valueFormatTime = 'HH:mm:ss',
      format,
      valueType, // 输入的限制，是否为只是数字和字母
      assignRole = '',
      width = '240px',
      disabledDate, // 限制天数
      sameMonth, // 日期范围选择仅同月
      showAll = false, // 项目编号是否展示全部
      shortcuts, // 日期范围选择快捷方式
      pickerOptions, // 日期范围选择配置项
      status = '1', // 项目编号状态，默认启用1
      labelWidth, // label宽度
      props, // 级联拓展参数
    } in options" :label-width="labelWidth" :key="key">
      <template v-if="type === 'slot'">
        <slot :name="key"></slot>
      </template>
      <template v-if="!type || type === 'input'">
        <el-input :type="dateType || 'text'" :placeholder="placeholder" clearable v-model.trim="model[key]" :maxlength="maxlength" @input="judgeValueType(key,valueType)"></el-input>
      </template>
      <!--项目+业务+项目编号-->
      <template v-if="type === 'proSort'">
        <proSort :showAll="showAll" :proSort="model['businessType'] + model['proSort']" :assignRole="assignRole" :status="status" :isDraft="isDraft" @change="changeProSort" :props="props" />
      </template>
      <template v-if="type === 'radio'">
        <el-radio-group v-model="model[key]">
          <el-radio v-for="{
            value,
            label,
          } in list || radioList" :key="value" :label="value">{{label}}</el-radio>
        </el-radio-group>
      </template>
      <template v-if="type === 'select'">
        <el-select v-model="model[key]" :filterable="filterable" :clearable="clearable" :placeholder="placeholder" @change="change" :multiple='multiple' collapse-tags>
          <el-option
            v-for="{
              value,
              label,
            } in list"
            :key="value"
            :label="label"
            :value="value">
          </el-option>
        </el-select>
      </template>
      <template v-if="type === 'checkbox'">
        <el-checkbox-group v-model="model[key]">
          <el-checkbox v-for="{
              value,
              label
            } in list"
            :key="value"
            :label="value">{{label}}</el-checkbox>
        </el-checkbox-group>
      </template>
      <template v-if="type === 'switch'">
        <el-switch
          v-model="model[key]"
          :name="label">
        </el-switch>
        <span class="switch-desc">{{desc}}</span>
      </template>
      <template v-if="type === 'date'">
        <el-date-picker
          :format="format"
          :style="{ width }"
          :value-format="valueFormatDate"
          v-model="model[key]"
          :type="dateType"
          :placeholder="placeholder">
        </el-date-picker>
      </template>
      <template v-if="type === 'time'">
        <el-time-picker
          :value-format="valueFormatTime"
          v-model="model[key]"
          :is-range="isRange"
          :class="className"
          :placeholder="placeholder">
        </el-time-picker>
      </template>
      <template v-if="type === 'range'">
        <el-input
          v-model.trim="model[key.split(',')[0]]"
          style="width:85px;"
          @input="judgeValueType(key.split(',')[0], 'number')"
          clearable
        ></el-input>
        <span>~</span>
        <el-input
          v-model.trim="model[key.split(',')[1]]"
          style="width:85px;"
          @input="judgeValueType(key.split(',')[1], 'number')"
          clearable
        ></el-input>
      </template>
      <template v-if="type === 'cascader'">
        <el-cascader
          :options="list"
          v-model="dataRangeArray[key]"
          :show-all-levels="showAllLevels"
          :props="{ checkStrictly }"
          :clearable="clearable"
          @change="handleRangeChange($event, key)"
        ></el-cascader>
      </template>
      <!--日期范围-->
      <template v-if="type === 'daterange'">
        <el-date-picker
          :format="format"
          :style="{ width }"
          value-format="yyyy-MM-dd"
          type="daterange"
          v-model="dataRangeArray[key]"
          :pickerOptions="pickerOptions || pickerOptionsConfig(disabledDate, sameMonth, shortcuts)"
          :clearable="clearable"
          :placeholder="placeholder"
          @change="handleRangeChange($event, key)">
        </el-date-picker>
      </template>
      <!-- longruhao -->
      <template v-if="type === 'dateranges'">
        <el-date-picker
          :format="format"
          :style="{ width }"
          value-format="yyyy-MM-dd"
          type="daterange"
          align="right"
          v-model="dataRangeArray[key]"
          :picker-options="pickerOptionsFast"
          :clearable="clearable"
          :placeholder="placeholder"
          @change="handleRangeChange($event, key)">
        </el-date-picker>
      </template>
      <template v-if="type === 'datetimerange'">
        <el-date-picker
          :format="format"
          value-format="yyyy-MM-dd HH:mm:ss"
          type="datetimerange"
          :default-time="['00:00:00', '23:59:59']"
          v-model="dataRangeArray[key]"
          :pickerOptions="pickerOptions || pickerOptionsConfig(disabledDate, sameMonth, shortcuts)"
          :placeholder="placeholder"
          style="width:360px;"
          @change="handleRangeChange($event, key)">
        </el-date-picker>
      </template>
      <!-- jichen -->
      <template v-if="type === 'autocomplete'">
        <el-autocomplete style="width: 240px" :debounce="10" :clearable="clearable" placeholder="请选择" v-model="model[key]" @focus="getCardList(list)" :fetch-suggestions="getFilterCardList">
        </el-autocomplete>
      </template>
    </el-form-item>
    <slot name="end"></slot>
    <el-form-item>
      <slot name="button-left"></slot>
      <!--按钮操作，默认使用查询和重置-->
      <slot name="submit-btn">
        <el-button type="primary" :size="size" @click="searchData" v-if="buttonText">{{buttonText}}</el-button>
        <slot name="submit-sort"></slot>
        <el-button plain :size="size" @click="resetForm" v-if="resetText">{{resetText}}</el-button>
      </slot>
      <slot name="button-right"></slot>
    </el-form-item>
    <slot name="right"></slot>
  </el-form>
</template>
<script>
export default {
  name: 'uForm',
  props: {
    // 表单配置信息，用于渲染表单结构
    options: {
      type: Array
    },
    // 表单中左侧按钮名称
    buttonText: {
      type: String,
      default: '查询'
    },
    // 表单重置按钮名称
    resetText: {
      type: String,
      default: '重置'
    },
    /**
     * 使用v-bind="$props"继承el-form默认props
     * 二次封装组件中统一赋值
     * @see https://element.eleme.cn/#/zh-CN/component/form
     */
    // 表格信息对象
    model: {
      type: Object,
    },
    // label宽度
    'label-width': {
      type: String,
    },
    // label位置
    'label-position': {
      type: String,
      default: 'right'
    },
    // 单行表单
    inline: {
      type: Boolean,
      default: true,
    },
    // 尺寸
    size: {
      type: String,
      default: 'small'
    },
    // 验证规则
    rules: {
      type: Object,
    },
    // 项目编号是否草稿，默认1，0为草稿
    isDraft: {
      type: String
    },
  },
  data () {
    return {
      // 日期时间范围组件需要的数组暂存
      dataRangeArray: {},
      // 默认的radio可选项目
      radioList: [
        {
          value: '1',
          label: '是'
        },
        {
          value: '0',
          label: '否'
        },
      ],
      timePicked: '',
      dataRangeArrayDefault: {},
      // 带快捷方式日期, longruhao
      pickerOptionsFast: {
        shortcuts: [
          {
            text: '近30天',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '近60天',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 60)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '近90天',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          },
        ]
      }
    }
  },
  created () {
    const today = this.DateFormat(new Date())
    const todayTime = this.DateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss')
    const beforeToday = this.DateFormat(new Date(new Date() - 1000 * 60 * 60 * 24 * 30))
    this.options.forEach(i => {
      const {
        type,
        defaultToday,
        key,
        dateType,
        beforeAmonth,
      } = i

      // 获取三十一天前日期
      if (beforeAmonth && type === 'daterange') {
        const [a, b] = key.split(',')
        this.model[a] = beforeToday
        this.model[b] = today
        this.$set(this.dataRangeArray, key, [beforeToday, today])
        this.$set(this.dataRangeArrayDefault, key, [beforeToday, today])
      }
      // 日期范围，如果有默认值需要进行设置
      if (defaultToday && ['daterange', 'datetimerange'].includes(type)) {
        const defaultTime = type === 'daterange' ? today : todayTime
        const [a, b] = key.split(',')
        // 默认当天，根据业务需求只会默认当天
        this.model[a] = defaultTime
        this.model[b] = defaultTime
        this.$set(this.dataRangeArray, key, [defaultTime, defaultTime])
        this.$set(this.dataRangeArrayDefault, key, [defaultTime, defaultTime])
        // 日期范围，如果有默认值需要进行设置
        if (defaultToday && type === 'date') {
          const defaultTime = dateType === 'date' ? today : todayTime
          // 默认当天，根据业务需求只会默认当天
          this.model[key] = defaultTime
        }
      }
    })
  },
  methods: {
    /**
     * 时间区间限制
     * @param {Boolean} sameMonth 日期范围选择仅同月,默认false
     * @param {Number} length 前后n天可选
     * @param {*} shortcus 配置快捷方式
     */
    pickerOptionsConfig (length, sameMonth = false, shortcuts) {
      const queryMaxDuration = 3600 * 1000 * 24 * Number(length - 1)
      return {
        /**
         * 不可选时间
         * @param {date} time 时间
         */
        disabledDate: (time) => {
          if (!length) return false
          if (this.timePicked) {
            // 是否相同月份
            const isSameMonth = this.timePicked.getMonth() === time.getMonth()
            const max = new Date(this.timePicked.getTime() + queryMaxDuration)
            const min = new Date(this.timePicked.getTime() - queryMaxDuration)
            // 当选择了1个时间点，计算可选时间范围
            return sameMonth ? !isSameMonth : (time.getTime() > max.getTime() || time.getTime() < min.getTime())
          } else {
            return false
          }
        },
        /**
         * 选择第一个时间点时记录
         * @param {object} time 时间对象，第一个点是minDate
         */
        onPick: (time) => {
          if (time.minDate) {
            this.timePicked = time.maxDate ? '' : time.minDate
          } else {
            this.timePicked = ''
          }
        },
        shortcuts
      }
    },
    /**
     * 重置表单
     * 如果有列表，当前页重置为1，每页条数重置为第一种
     */
    resetForm (flag = true) {
      // 如果重置时参数重有业务类型，手动重置
      if (flag && (this.model.businessType || this.model.proSort)) {
        this.model.businessType = ''
        this.model.proSort = ''
      }
      this.$refs.formModel.resetFields()
      // 增加重置事件，用于页面特殊字段的重置
      this.$emit('resetForm')
      const range = this.options.filter(i => i.type === 'range')
      // 特殊处理范围
      if (range.length) {
        const keys = range.map(i => i.key.split(','))
        keys.forEach(([a, b]) => {
          this.model[a] = ''
          this.model[b] = ''
        })
      }
      // 范围
      Object.keys(this.dataRangeArray).forEach(i => {
        this.handleRangeChange(this.dataRangeArrayDefault[i] || '', i)
      })
      this.dataRangeArray = JSON.parse(JSON.stringify(this.dataRangeArrayDefault))
      this.$nextTick(() => {
        this.$emit('change', { page: 1, reset: true })
      })
    },
    /**
     * 验证通过
     */
    searchData () {
      this.$refs.formModel.validate((valid) => {
        if (valid) {
          this.$emit('change', { page: 1 })
        } else {
          this.$message.error('表单填写不正确')
          return false
        }
      })
    },
    /**
     * 表单验证
     */
    getData (callback) {
      this.$refs.formModel.validate((valid) => {
        if (valid) {
          callback && callback()
        } else {
          this.$message.error('表单填写不正确')
          return false
        }
      })
    },
    /**
     * 验证单个字段
     */
    validateField (item) {
      this.$refs.formModel.validateField(item)
    },
    /**
     * 范围数组
     * @param {*} val 组件返回的值
     * @param {string} key 范围key值，','分隔
     */
    handleRangeChange (val, key) {
      const keys = key.split(',')
      keys.forEach((i, index) => {
        this.model[i] = val && val.length ? val[index] : ''
      })
    },
    /**
     * 更新项目类型
     */
    changeProSort (data) {
      Object.assign(this.model, data)
    },
    /**
     * 限制输入框只输入内容
     * @param {string} key 输入框绑定值的键
     * @param {string} valueType 限制输入的类型
     */
    judgeValueType (key, valueType) {
      switch (valueType) {
        case 'number': {
          this.model[key] = this.model[key].replace(/[^\d]/g, '')
          break
        }
        case 'numberAndLetter': {
          this.model[key] = this.model[key].replace(/[\W]/g, '')
          break
        }
        default: { return this.model[key] }
      }
    },
    // jichen 切勿删除
    // 用于获取数据列表
    getCardList (val) {
      this.cardList = val
    },
    // 用于filter搜索数据
    getFilterCardList (val, cb) {
      setTimeout(() => {
        let filterCardList = []
        if (val) {
          this.cardList.map((item) => {
            if (item.value.indexOf(val) > -1) {
              filterCardList.push({
                value: item.value
              })
            }
          })
        } else {
          filterCardList = this.cardList
        }
        cb(filterCardList)
      }, 200)
    }
  },
}
</script>
<style scoped>
.switch-desc {
  margin-left: 10px;
  display: inline-block;
  color: #999;
}
</style>
