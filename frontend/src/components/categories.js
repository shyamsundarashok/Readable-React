import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Nav,NavItem}from 'react-bootstrap';

import { capitalizeFirst } from '../utils/helper';

const Categories = ({ location, categories }) => (
  <div className='sidebar-section'>
    <div className='sidebar-section-header '>
      <h4>Categories</h4>
    </div>
    <div className='sidebar-section-content'>
      <Nav bsStyle="pills" stacked>
        {categories.map((category, index) => (
          <NavItem eventKey={index} key={index} href={`/categories/${category.name}`}>
            {capitalizeFirst(category.name)}
          </NavItem>         
        ))}
      </Nav>
    </div>
  </div>
)

const mapStateToProps = ({ categories }) => ({
  categories
})

export default withRouter(connect(mapStateToProps)(Categories));