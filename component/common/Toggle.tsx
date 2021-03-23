import React from 'react';
import { UncontrolledCollapse, NavLink} from 'reactstrap';

export const Toggle = () => (
  <div>
    <NavLink id="toggler" href="#">link</NavLink>
    <UncontrolledCollapse toggler="#toggler">
      <li>test</li>
    </UncontrolledCollapse>
  </div>
);
