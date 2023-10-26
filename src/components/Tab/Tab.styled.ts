import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 15px 30px;

  &:hover,
  &:active {
    background-color: #ffa500;
  }

  transition: background-color 250ms ease-in;
`;
