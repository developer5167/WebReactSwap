import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./GlobalState";

export function RestrictLoginRoute({
  children,
}: {
  children: React.ReactElement;
}) {
  const localStorageData = Cookies.get("user");
  const { login } = useAuth();
  if (localStorageData) {
    login();
    return <Navigate to="/dashboard" />;
  }
  return children;
}
