import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const AppPage = lazy(() => import('src/pages/dashboard'));
export const DocPage = lazy(() => import('src/pages/docupload'));
export const ArticleUploadPage = lazy(() => import('src/pages/articleupload'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const BulkPage = lazy(() => import('src/pages/bulkupload'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const SendAddressPage = lazy(() => import('src/pages/sendaddress'));
export const RecieverPage = lazy(() => import('src/pages/recieveaddress'));
export const PiecePage = lazy(() => import('src/pages/piecedetail'));
export const ConsignPage = lazy(() => import('src/pages/conigndetail'));
export const DecPage = lazy(() => import('src/pages/declaration'));
export const RecPage = lazy(() => import('src/pages/reciept'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <AppPage />, index: true },
        { path: 'articleupload', element: <ArticleUploadPage /> },
        { path: 'bulkupload', element: <BulkPage /> },
        { path: 'docupload', element: <DocPage /> },
        { path: 'sendaddress', element: <SendAddressPage /> },
        { path: 'recieveaddress', element: <RecieverPage /> },
        { path: 'piecedetails', element: <PiecePage /> },
        { path: 'consigndetails', element: <ConsignPage /> },
        { path: 'declaration', element: <DecPage /> },
        { path: 'reciept', element: <RecPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
