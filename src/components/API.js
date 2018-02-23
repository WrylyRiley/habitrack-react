import axios from 'axios'

function APIEndpoint () {
  return axios.create({
    baseURL: 'http://localhost:3001'
  })
}

export default {
  fetchPosts () {
    return APIEndpoint().get('posts')
  },
  addPost (params) {
    // console.log(params)
    return APIEndpoint().post('posts', params)
  },
  changePost (params, deleteFlag) {
    if (deleteFlag) {
      return APIEndpoint().delete('posts/' + params._id)
    } else {
      return APIEndpoint().put('posts/' + params._id, params)
    }
  }
}
