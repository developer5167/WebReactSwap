import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./GlobalState";

export function RestrictDashboardRoute({
  children,
}: {
  children: React.ReactElement;
}) {
  const localStorageData = Cookies.get("user");
  const { logOut,login } = useAuth();
  if (!localStorageData) {
    logOut();
    return <Navigate to="/login" />;
  }
  return children;
}
