import axiosClient from './axiosClient.js'

class CardApi {
  getAllCardsByBoardColumId = (boardColumnId, params) => {
    const url = `/cards?boardColumnId=${boardColumnId}`
    return axiosClient.get(url, { params })
  }
}
const carddApi = new CardApi()
export default carddApi
