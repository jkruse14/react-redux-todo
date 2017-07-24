import React from 'react'
import {connect} from 'react-redux'
import Filter from '../Filters/Filter.js'
import { MODAL_TYPES, openModal } from '../Modals/ModalsActions'
import { Button, MenuItem, Nav, NavDropdown, NavItem } from 'react-bootstrap'
import { setVisibilityFilter, VISIBILITY_FILTERS } from '../Filters/FiltersActions'


const {ADD_TODO} = MODAL_TYPES;

let FiltersBar = ({ dispatch, onAddTodoClick, onFilterSelect, next_id }) => {
  let title = 'Select Filter'
  let filters = []
  function handleAddToDoClick(e) {
    e.preventDefault();
    onAddTodoClick(next_id);
  }

  function handleFilterSelect(eventKey, e) {
    e.preventDefault();
    onFilterSelect(eventKey)
  }

  function getFilterLabel(filter){
    return filter.toLowerCase().replace(/_/g, ' ')
  }

  filters = Object.keys(VISIBILITY_FILTERS).map(function(filter, index){
    return (
        <MenuItem key={filter} eventKey={VISIBILITY_FILTERS[filter]}>
          <Filter filter={VISIBILITY_FILTERS[filter]}>
            {getFilterLabel(VISIBILITY_FILTERS[filter])}
          </Filter>
        </MenuItem>
    )
  })

  return (
    <Nav bsStyle='pills'>
      <NavItem>
        <Button id='show-addtodo-modal'
                bsStyle='primary'
                onClick={handleAddToDoClick}>Add ToDo</Button>
      </NavItem>
      <NavDropdown title={title} id='filter-dropdown' onSelect={handleFilterSelect}>
        {filters}
      </NavDropdown>
    </Nav>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    next_id: state.next_id
  }
}

function mapDispatchToProps(dispatch,ownProps) {
  return {
    onAddTodoClick: () => {
      dispatch(openModal({type: ADD_TODO}))
    },
    onFilterSelect: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

FiltersBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersBar)

export default FiltersBar;
