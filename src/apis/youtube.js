import axios from 'axios'

const KEY = 'AIzaSyBTpQGID2JFdM1AusSthTXNMwP64jGpcFE'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
