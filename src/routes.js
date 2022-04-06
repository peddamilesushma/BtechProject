import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import DashboardApp from './pages/DashboardApp';
import History from './pages/history';
import Details from './pages/Details';
import { lazy } from 'react';
import Loadable from './loadable';
const AskConfirmationBeforeSave = Loadable(lazy(() => import('./pages/Table')));

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <AskConfirmationBeforeSave /> },
        { path: 'history', element: <History /> },
        { path: 'details', element: <Details /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
