import axios from 'axios'
import { API_KEY } from 'configs/common'

class Api {
  constructor() {
    this.baseURL = `https://api.nytimes.com/svc/`
  }

  get(url) {
    const options = {
      method: 'GET',
      baseURL: this.baseURL,
      url: `${url}?api-key=${API_KEY}`,
      timeout: 60000,
    }

    return new Promise((resolve, reject) => {
      axios
        .request(options)
        .then(result => {
          resolve(result.data.response)
        })
        .catch(error => {
          //Handle common error here
          reject(error)
        })
    })
  }
}

export default new Api()
