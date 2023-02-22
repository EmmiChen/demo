const {
  gateway
} = sysConfig

const obsUrl = `${gateway}/obs-base`

/**
 * CCWEB API
 * ccweb接口
 * @see http://10.0.7.30:6086/swagger-ui.html#/
 */
export default {
  // 问卷
  showQuestionnaireDetail: obsUrl + '/questionnaire/showQuestionnaireDetail',
  selectAllQuestionnaires: obsUrl + '/questionnaire/selectAllQuestionnaires',
  showQuestionnaireByDataId: obsUrl + '/questionnaire/showQuestionnaireByDataId',
  addQuestionnaireToDraft: obsUrl + '/questionnaire/addQuestionnaireToDraft',
  addQuestionnaire: obsUrl + '/questionnaire/addQuestionnaire',
  selectQuestionnaireByPage: obsUrl + '/questionnaire/selectQuestionnaireByPage',
  deleteQuestionnaires: obsUrl + '/questionnaire/deleteQuestionnaires',
  selectActivityByQuestionnaireId: obsUrl + '/questionnaire/selectActivityByQuestionnaireId',

  // 题库
  selectQuestionByPage: obsUrl + '/question/selectQuestionByPage',
  findQuestionById: obsUrl + '/question/findQuestionById',
  addQuestion: obsUrl + '/question/addQuestion',
  deleteQuestions: obsUrl + '/question/deleteQuestions',
}
