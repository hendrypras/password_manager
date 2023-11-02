import axios from 'axios'

export const callAPI = async ({ endpoint, method, headers, params, data }) => {
  const baseURL = import.meta.env.VITE_BASE_URL_SERVER
  const option = {
    baseURL,
    url: endpoint,
    method,
    headers,
    params,
    data,
  }
  const response = await axios(option)
  return response?.data
}
