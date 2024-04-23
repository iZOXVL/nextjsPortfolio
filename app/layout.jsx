import Nav from "../components/Nav";
import Header from "../components/Header";
import Head from 'next/head'
import "./globals.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Layout({ children }) {
  return (
      <div className={inter.className}>
        <Head>
        <title>Armando VL</title>
        <link rel="shortcut icon" href="/avllogo.png" />
        </Head>
        <Nav />
        <Header />
        <main>
          {children}
        </main>
      </div>
  );
}
