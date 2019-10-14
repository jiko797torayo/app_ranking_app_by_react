import _ from 'lodash'
import { READ_RANKINGS } from '../actions'

export default (rankings = {}, action) => {
  switch (action.type) {
    case READ_RANKINGS:
      return _.map(action.response.data)
    default:
      return rankings
  }
}