"use client";

import { useContext, useEffect } from "react";
import { UserContext } from "../context/user-context";
import { useRouter } from "next/navigation";
import { Header } from "../components/header/header";
import { DashboardProvider } from "../context/dashboard-context";
import { RecordProvider } from "../context/record-context";

const Layout = ({ children }) => {
  const { user, fetchUserData } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    fetchUserData();
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <DashboardProvider>
      <RecordProvider>
        <Header user={user} logOut={logOut} />
        {children}
      </RecordProvider>
    </DashboardProvider>
  );
};

export default Layout;
