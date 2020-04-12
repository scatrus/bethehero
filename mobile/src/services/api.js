import axios from 'axios'

export default axios.create({
   baseURL: 'http://192.168.10.101:5555'//ip do server
})
