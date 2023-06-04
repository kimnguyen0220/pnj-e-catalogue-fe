import { Routes, BrowserRouter, Route } from "react-router-dom";
import { rootRoute } from "./root.route";
import { PageContainer, HomePage } from "pages";
export const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" Component={HomePage} />
        <Route path="" Component={PageContainer}>
          {rootRoute.map((item) => (
            <Route path={item.path} Component={item.Component} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
