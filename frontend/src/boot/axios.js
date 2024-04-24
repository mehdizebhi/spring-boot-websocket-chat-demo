import { boot } from 'quasar/wrappers'
import axios from 'axios'
import createApi from '../api/api'

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = createApi()
})
