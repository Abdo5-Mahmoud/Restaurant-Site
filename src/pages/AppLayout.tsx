import { Outlet } from "react-router-dom";
import { lazy } from "react";

const Footer = lazy(() => import("../components/Footer"));
const Nav = lazy(() => import("../components/Nav"));

const AppLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};
export default AppLayout;
