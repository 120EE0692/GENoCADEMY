import React from "react"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    return (isAuthenticated ? <div>{children}<Outlet /></div> : <Navigate to="/login" />);
}

const ProtectedRouteEducator = ({ children }) => {
    const isJoinAsEducator = localStorage.getItem("isJoinAsEducator");

    return (isJoinAsEducator) ? <> {children}<Outlet /></> : <Navigate to="/dashboard" />
}

export { ProtectedRoute, ProtectedRouteEducator }