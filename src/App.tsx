import { FC, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { MainLayout } from "./components/MainLayout/MainLayout";

const DummyListPage = lazy(() => import("./pages/DummyListPage/DummyListPage"));
const DummyTablePage = lazy(
  () => import("./pages/DummyTablePage/DummyTablePage")
);
const DummyChartPage = lazy(
  () => import("./pages/DummyChartPage/DummyChartPage")
);

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<DummyListPage />} />
        <Route path="dummyList" element={<DummyListPage />} />
        <Route path="dummyTable" element={<DummyTablePage />} />
        <Route path="dummyChart" element={<DummyChartPage />} />
      </Route>
    </Routes>
  );
};

export default App;
