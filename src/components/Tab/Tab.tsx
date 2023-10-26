import { FC } from "react";

import { StyledNavLink } from "./Tab.styled";

import { ITab } from "../../models";

interface ITabProps {
  tab: ITab;
}

export const Tab: FC<ITabProps> = ({ tab }) => {
  return <StyledNavLink to={tab.id}>{tab.title}</StyledNavLink>;
};
