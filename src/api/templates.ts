import axios from '../axios/index'

export const getTemplates = (params: Object) => {
  return axios.get('/api/templates', params)
}

export const getTemplateDetail = (id: string) => {
  return axios.get(`/api/templateDetail/${id}`)
}
