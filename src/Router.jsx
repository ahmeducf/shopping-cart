import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root, Home, About, Products, Product, Checkout, Error } from 'pages';

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
        },
        { path: 'products/:id', element: <Product /> },
        { path: 'checkout', element: <Checkout /> },
        { path: '*', element: <Error /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
