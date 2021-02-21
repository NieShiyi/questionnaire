import axios from '../axios/index'

export const getTemplates = (params: Object) => {
  return axios.get('/questionnaire/templates', params)
}

export const getTemplateDetail = (id: string) => {
  return axios.get(`/questionnaire/templateDetail/${id}`)
}
