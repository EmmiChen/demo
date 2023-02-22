import Vue from 'vue'
import regexRule from './regex'
import validator from './validator'

Vue.mixin(validator)

Vue.prototype.$rule = regexRule
