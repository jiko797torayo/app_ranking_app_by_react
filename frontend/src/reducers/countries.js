import _ from 'lodash'
import { READ_COUNTRIES } from '../actions'

export default (countries = {}, action) => {
  switch (action.type) {
    case READ_COUNTRIES:
      console.log(action)
      return _.mapKeys(action.response.data, 'id')
    default:
      return countries
  }
}