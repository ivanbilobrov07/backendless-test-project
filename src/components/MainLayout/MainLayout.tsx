import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { TabList } from "../TabList";
import { StyledHeader } from "./MainLayout.styled";

import { ITab } from "../../models";

const tabsData: ITab[] = [
  {
    id: "dummyTable",
    title: "Dummy Table",
    order: 1,
    path: "tabs/dummyTable.js",
  },
  {
    id: "dummyChart",
    title: "Dummy Chart",
    order: 2,
    path: "tabs/dummyChart.js",
  },
  {
    id: "dummyList",
    title: "Dummy List",
    order: 0,
    path: "tabs/dummyList.js",
  },
];

export const MainLayout: FC = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <TabList tabsInfo={tabsData} />
        </nav>
      </StyledHeader>
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </>
  );
};
