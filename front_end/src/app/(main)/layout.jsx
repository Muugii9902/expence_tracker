"use client";

import { useContext, useEffect } from "react";
import { UserContext } from "../context/user-context";
import { useRouter } from "next/navigation";
import { Header } from "../components/header/header";
import { DashboardContextProvider } from "../context/dashboard-context";
import { RecordContextProvider } from "../context/record-context";

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
    <DashboardContextProvider>
      <RecordContextProvider>
        <Header user={user} logOut={logOut} />
        {children}
      </RecordContextProvider>
    </DashboardContextProvider>
  );
};

export default Layout;
