import React from 'react';
import { connect } from 'react-redux';

import { setSortBy } from '../actions/sort-by';
import {ButtonToolbar,DropdownButton,MenuItem}from 'react-bootstrap';

const Sorter = ({ content, sortBy, onSelectSortBy }) => {


  const getValueFromParams = ({ [content]: { type, order }}) => `${type}-${order}`;
  const getParamsFromValue = (value) => value.split('-');

  const BUTTONS = ['Sort By'];

  function renderDropdownButton(title) {
    return (
        <DropdownButton bsStyle='default' title={title} 
          value={getValueFromParams(sortBy)} onSelect={(event) => onSelectSortBy(content)(...getParamsFromValue(event))}>
          <MenuItem eventKey="voteScore-descending">Score:High-Low</MenuItem>
          <MenuItem eventKey="voteScore-ascending">Score:Low-High</MenuItem>
          <MenuItem eventKey="timestamp-descending">Date:New-Old</MenuItem>
          <MenuItem eventKey="timestamp-ascending">Date:Old-New</MenuItem>
        </DropdownButton>
    );
  }

  return (
    <div className='sorter'>      
      <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
    </div>
  )
}

const mapStateToProps = ({ sortBy }) => ({
  sortBy
})

const mapDispatchToProps = (dispatch) => ({
  onSelectSortBy: (content) => (type, order) => dispatch(setSortBy(content, type, order))  
})

export default connect(mapStateToProps, mapDispatchToProps)(Sorter);