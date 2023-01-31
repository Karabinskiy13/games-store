import React, { FC, ReactNode } from 'react';

import NavBar from '../NavBar/NavBar';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

export default Layout;
