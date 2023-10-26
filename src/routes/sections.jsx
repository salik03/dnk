import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const AppPage = lazy(() => import('src/pages/dashboard'));
export const DocPage = lazy(() => import('src/pages/docupload'));
export const ArticleUploadPage = lazy(() => import('src/pages/articleupload'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const BulkPage = lazy(() => import('src/pages/bulkupload'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const NewArtPage = lazy(() => import('src/pages/newarticle'));
export const NewArtPage2 = lazy(() => import('src/pages/newarticle2'));

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
        { path: 'newarticle', element: <NewArtPage /> },
        { path: 'newarticle2', element: <NewArtPage2 /> },
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
