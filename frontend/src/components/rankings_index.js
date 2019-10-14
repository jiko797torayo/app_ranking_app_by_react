import React, { Component } from 'react'
import { connect } from 'react-redux'
import { readRankings } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

class RankingsIndex extends Component {
  componentDidMount() {
    this.props.readRankings()
  }

  renderRankings() {
    return _.map(this.props.countries, country => (
      <TableRow key={country.id}>
        <TableRowColumn>{country.id}</TableRowColumn>
        <TableRowColumn>
          <Link to="/">
            {country.name}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{country.code}</TableRowColumn>
      </TableRow>
    ))
}

  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Code</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.renderRankings()}
        </TableBody>
      </Table>
    )
  }
}

const mapStateToProps = state => ({ rankings: state.rankings[0], countries: state.rankings[1] })
const mapDispatchToProps = ({ readRankings })

export default connect(mapStateToProps, mapDispatchToProps)(RankingsIndex)