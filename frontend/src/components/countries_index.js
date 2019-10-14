import React, { Component } from 'react'
import { connect } from 'react-redux'
import { readCountries } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'

class CountriesIndex extends Component {
  componentDidMount() {
    this.props.readCountries()
  }

  renderCountries() {
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
          {this.renderCountries()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({ countries: state.countries })
const mapDispatchToProps = ({ readCountries })

export default connect(mapStateToProps, mapDispatchToProps)(CountriesIndex)