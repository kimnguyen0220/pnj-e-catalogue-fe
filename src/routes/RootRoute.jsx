import { Routes, BrowserRouter, Route } from "react-router-dom";
import { rootRoute } from "./root.route";
import { HomePage } from "pages";
import { PageContainer } from 'layouts';

export const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" Component={HomePage} />
        <Route path="" Component={PageContainer}>
          {rootRoute.map((item) => (
            <Route key={item.path} path={item.path} Component={item.Component} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
