const { axiosIntstance } = require("@/service/http/axios.service");


const fetcher = (url) => axiosIntstance.get(url).then(resp => resp?.data)
export default fetcher