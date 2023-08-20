import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Root,
  Home,
  About,
  Products,
  Product,
  Checkout,
  NotFound,
} from 'pages';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        {
          path: 'products',
          element: <Products />,
          children: [{ path: ':id', element: <Product /> }],
        },
        { path: 'checkout', element: <Checkout /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
