import { Routes, BrowserRouter, Route } from "react-router-dom";
import { rootRoute } from "./root.route";
import { HomePage } from "pages";
import { PageContainer } from 'layouts';

export const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={HomePage} />
        <Route path="store" Component={PageContainer}>
          {rootRoute.map((item) => (
            <Route key={item.path} path={item.path} Component={item.Component} />
          ))}
        </Route>
      </Routes>
   </BrowserRouter>
  );
};
