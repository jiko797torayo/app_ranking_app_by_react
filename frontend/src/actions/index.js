import axios from 'axios'

export const READ_RANKINGS = 'READ_RANKINGS'

const ROOT_URL = 'http://localhost:3001/api/v1'

export const readRankings = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/rankings`)
  dispatch({ type: READ_RANKINGS, response })
}