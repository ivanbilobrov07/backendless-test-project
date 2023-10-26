import { FC } from "react";

import { Tab } from "../Tab";
import { StyledList } from "./TabList.styled";

import { ITab } from "../../models";

interface ITabListProps {
  tabsInfo: ITab[];
}

export const TabList: FC<ITabListProps> = ({ tabsInfo }) => {
  const sortedTabsInto = tabsInfo.sort((a, b) => a.order - b.order);

  return (
    <StyledList>
      {sortedTabsInto.map((t) => (
        <li key={t.id}>
          <Tab tab={t} />
        </li>
      ))}
    </StyledList>
  );
};
