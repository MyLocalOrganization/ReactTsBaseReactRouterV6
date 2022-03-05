import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";

import { Suspense } from "react";
import { routes, IRoute } from "../../routes/routes";
import logo from '../../logo.svg';

export const Navigation = () => {

    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {
                                routes.map((route: IRoute) => (
                                    <li key={route.to}>
                                        <NavLink
                                            to={route.to}
                                            className={({ isActive }) => isActive
                                                ? 'nav-active'
                                                : ''}>
                                            {route.name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map((route: IRoute) => (
                                <Route key={route.to} path={route.path} element={<route.Component />} />
                            ))
                        }
                        <Route
                            path="/*"
                            element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
                </div>

            </BrowserRouter>
        </Suspense>

    )
}
