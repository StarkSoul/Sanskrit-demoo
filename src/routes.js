/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
// import Notifications from "views/Notifications.js";
// import Icons from "views/Icons.js";
// import Typography from "views/Typography.js";
// import TableList from "views/TableList.js";
// import Maps from "views/Maps.js";
// //import Upgrade from "views/Upgrade.js";
// import UserPage from "views/UserPage.js";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design-2_ruler-pencil",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/Class1",
    name: "CLASS 1",
    icon: "design-2_ruler-pencil",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Class 2",
    icon: "design-2_ruler-pencil",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Class 3",
    icon: "design-2_ruler-pencil",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Class 4",
    icon: "design-2_ruler-pencil",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "class 5",
    icon: "design-2_ruler-pencil",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/extended-tables",
    name: "Class 6",
    icon: "design-2_ruler-pencil",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Class 7",
    icon: "design-2_ruler-pencil",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/Class8",
    name: "Class 8",
    icon: "design-2_ruler-pencil",
    component: Dashboard,
    layout: "/admin",
  },
];
export default dashRoutes;
