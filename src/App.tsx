import React from "react";
import { Routes, Route } from "react-router-dom";

import { MainLayout } from "./components/MainLayout/MainLayout";

const DummyListPage = React.lazy(
  () => import("./pages/DummyListPage/DummyListPage")
);
const DummyTablePage = React.lazy(
  () => import("./pages/DummyTablePage/DummyTablePage")
);
const DummyChartPage = React.lazy(
  () => import("./pages/DummyChartPage/DummyChartPage")
);

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DummyListPage />} />
          <Route path="dummyList" element={<DummyListPage />} />
          <Route path="dummyTable" element={<DummyTablePage />} />
          <Route path="dummyChart" element={<DummyChartPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
