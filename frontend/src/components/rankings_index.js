import React, { Component } from 'react'
import { connect } from 'react-redux'
import { readRankings } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'

class RankingsIndex extends Component {
  componentDidMount() {
    this.props.readRankings()
  }

  renderRankings() {
    console.log(this.props)
    return _.map(this.props.countries, country => (
      <tr key={country.id}>
        <td>{country.id}</td>
        <td>
          <Link to="/">
            {country.name}
          </Link>
        </td>
        <td>{country.code}</td>
      </tr>
    ))
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRankings()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({ rankings: state.rankings[0], countries: state.rankings[1] })
const mapDispatchToProps = ({ readRankings })

export default connect(mapStateToProps, mapDispatchToProps)(RankingsIndex)