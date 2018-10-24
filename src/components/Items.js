import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Button } from './Shared'
import Item from './Item'

const List = styled.ul`
  list-style: none;
`

class Items extends React.Component {
  state = { show: 'All' }

  toggleFilter = (show) => {
    this.setState({ show })
  }

  ledgerValue = () => {
    const { ledger } = this.props
    return ledger.reduce( (total, entry) => {
      const amt = parseFloat(entry.amt)
      if (entry.entry_type === 'Debit')
        return total - amt
      return total + amt
    }, 0)
  }

  filterList = () => {
    const { items } = this.props
    const { show } = this.state
    switch(show) {
      case 'Want':
        return items.filter( i => i.item_type === 'Want' )
      case 'Need':
        return items.filter( i => i.item_type === 'Need' )
      case 'Affordable':
        const total = this.ledgerValue()
        return items.filter( i => i.cost <= total )
      default:
        return items
    }
  }

  render() {
    return (
      <Fragment>
        {
          [
            'All',
            'Affordable',
            'Want',
            'Need',
          ].map( (text) => 
            <Button 
              key={text} 
              onClick={ () => this.toggleFilter(text) }
            >
              {text}
            </Button>
          )
        }
        <List>
          { this.filterList().map( (item) => <Item key={item.id} {...item} /> ) }
        </List>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    items: state.items,
    ledger: state.ledger,
  }
}

export default connect(mapStateToProps)(Items)
