import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navbar from './Navbar';
import { Wrapper } from './styles/Layout';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Wrapper>{children}</Wrapper>
      </QueryClientProvider>
    </>
  );
};
export default Layout;
