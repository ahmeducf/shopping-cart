import { Outlet } from 'react-router-dom';
import { Header } from 'features/header';

function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
