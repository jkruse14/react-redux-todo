import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from './FiltersActions'

let Filter = ({active, children, onClick}) => {
  if(active) {
    return <span>{children}</span>
  }

  return (
    <span onClick={e => {
                          e.preventDefault();
                          onClick();
                        }}>
        {children}
    </span>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

Filter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default Filter
