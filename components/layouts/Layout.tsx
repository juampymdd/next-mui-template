import  Head  from 'next/head';
import { FC } from 'react';
import { Navbar } from '../ui';

interface LayoutProps {
  children: React.ReactNode
}

export const Layout:FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>NextJS + TypeScript + Material UI</title>
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: '20px 50px'}}>
        { children }
      </main>
    </>
  )
}
