import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute.jsx";
import LayoutLoader from "./components/layout/Loaders.jsx";
import AdminLogin from "./pages/Admin/AdminLogin.jsx";
import Dashboard from "./pages/Admin/Dashboard.jsx";


const Home = lazy(() => import("./pages/Home.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Chat = lazy(() => import("./pages/Chat.jsx"));
const Group = lazy(() => import("./pages/Group.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

let user = true;

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<LayoutLoader />}>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/groups" element={<Group />} />
        </Route>
        <Route
          path="/login"
          element={
            <ProtectRoute user={!user} redirect="/">
              <Login />
            </ProtectRoute>
          }
        />
        <Route path="/admin" element={<AdminLogin/>}></Route>
        <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
