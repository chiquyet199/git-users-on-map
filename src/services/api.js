import axios from 'axios'

class Api {
  constructor() {
    this.baseURL = `https://api.github.com/`
  }

  get(url) {
    const options = {
      method: 'GET',
      url: `${url}`,
      timeout: 60000,
    }
    if (url.indexOf('http://') < 0 || url.indexOf('https://') < 0) {
      options.baseURL = this.baseURL
    }

    return new Promise((resolve, reject) => {
      axios
        .request(options)
        .then(resolve)
        .catch(error => {
          //Handle common error here
          reject(error)
        })
    })
  }
}

export default new Api()
