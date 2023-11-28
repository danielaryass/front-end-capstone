import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`min-h-screen flex flex-col ${inter.className}`}>
        <Navbar />
        <div className='flex-grow'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}