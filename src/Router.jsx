import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, About, Products, Product, Checkout, NotFound } from 'pages';

function Router() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/products', element: <Products /> },
    { path: '/products/:id', element: <Product /> },
    { path: '/checkout', element: <Checkout /> },
    { path: '*', element: <NotFound /> },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
