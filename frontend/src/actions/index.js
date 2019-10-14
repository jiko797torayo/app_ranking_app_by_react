import axios from 'axios'

export const READ_COUNTRIES = 'READ_COUNTRIES'

const ROOT_URL = 'http://localhost:3001/api/v1'

export const readCountries = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/countries`)
  dispatch({ type: READ_COUNTRIES, response })
}