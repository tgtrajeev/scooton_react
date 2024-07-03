import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// home pages  & dashboard
//import Dashboard from "./pages/dashboard";
const Dashboard = lazy(() => import("./pages/dashboard"));

const Login = lazy(() => import("./pages/auth/login"));
const Register = lazy(() => import("./pages/auth/register"));
const ForgotPass = lazy(() => import("./pages/auth/forgot-password"));
const Error = lazy(() => import("./pages/404"));

import Layout from "./layout/Layout";



// chart page
const AppexChartPage = lazy(() => import("./pages/chart/appex-chart"));
const ChartJs = lazy(() => import("./pages/chart/chartjs"));
const Recharts = lazy(() => import("./pages/chart/recharts"));

// map page
const MapPage = lazy(() => import("./pages/map"));


// utility pages
const InvoicePage = lazy(() => import("./pages/utility/invoice"));
const InvoiceAddPage = lazy(() => import("./pages/utility/invoice-add"));
const InvoicePreviewPage = lazy(() =>
  import("./pages/utility/invoice-preview")
);
const InvoiceEditPage = lazy(() => import("./pages/utility/invoice-edit"));
const PricingPage = lazy(() => import("./pages/utility/pricing"));

// const Settings = lazy(() => import("./pages/utility/settings"));
const Profile = lazy(() => import("./pages/utility/profile"));
const IconPage = lazy(() => import("./pages/icons"));
const NotificationPage = lazy(() => import("./pages/utility/notifications"));



import Loading from "@/components/Loading";
import UserList from "./pages/users/user-list";
import ServiceAreaList from "./pages/service-area/service-area-list";
import AddServiceArea from "./pages/service-area/add-service-area";
import RoleList from "./pages/role/role-list";
import AddRole from "./pages/role/add-role";
import PromocodeList from "./pages/promocode/promocode-list";
import AllRiders from "./pages/riders/all-riders";
import RegisteredRiders from "./pages/riders/registered-rider";
import NonRegisteredRiders from "./pages/riders/non-registered-riders";
import OnRoleRiders from "./pages/riders/on-role-riders";
function App() {
  return (
    <main className="App  relative">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
        
        <Route
          path="/register"
          element={
            <Suspense fallback={<Loading />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <Suspense fallback={<Loading />}>
              <ForgotPass />
            </Suspense>
          }
        />
        <Route path="/*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
         
          
          <Route path="appex-chart" element={<AppexChartPage />} />
          <Route path="chartjs" element={<ChartJs />} />
          <Route path="recharts" element={<Recharts />} />
          <Route path="map" element={<MapPage />} />
          
          <Route path="invoice" element={<InvoicePage />} />
          <Route path="invoice-add" element={<InvoiceAddPage />} />
          <Route path="invoice-preview" element={<InvoicePreviewPage />} />
          <Route path="invoice-edit" element={<InvoiceEditPage />} />
          <Route path="pricing" element={<PricingPage />} />
          
          <Route path="profile" element={<Profile />} />
         
          <Route path="notifications" element={<NotificationPage />} />

          <Route path="user-list" element={<UserList />} />
          <Route path="service-area-list" element={<ServiceAreaList />} />
          <Route path="add-service-area" element={<AddServiceArea />} />
          <Route path="role-list" element={<RoleList />} />
          <Route path="add-role" element={<AddRole />} />
          <Route path="promocode-list" element={<PromocodeList />} />
          <Route path="all-riders" element={<AllRiders />} />
          <Route path="registered-riders" element={<RegisteredRiders />} />
          <Route path="non-registered-riders" element={<NonRegisteredRiders />} />
          <Route path="on-role-riders" element={<OnRoleRiders />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
        <Route
          path="/404"
          element={
            <Suspense fallback={<Loading />}>
              <Error />
            </Suspense>
          }
        />
        
      </Routes>
    </main>
  );
}

export default App;
