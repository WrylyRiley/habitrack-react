import axios from 'axios'

function RBRoute () {
  return axios.create({
    baseURL: 'http://localhost:3000/'
  })
}

export default RBRoute
