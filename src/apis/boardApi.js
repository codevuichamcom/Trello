import axiosClient from './axiosClient.js'

class BoardApi {
  getBoardColumns = (params) => {
    const url = '/boardColumns'
    return axiosClient.get(url, { params })
  }
  getAllCardsByBoardColumId = (boardColumnId, params) => {
    const url = `/boardColumns/${boardColumnId}/cards`
    return axiosClient.get(url, { params })
  }
  update = (boardColumnId, params) => {
    const url = `/boardColumns/${boardColumnId}`
    return axiosClient.patch(url, params)
  }
}
const boardApi = new BoardApi()
export default boardApi
