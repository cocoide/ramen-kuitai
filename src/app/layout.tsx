import Link from 'next/link';
import Head from './@Components/Layout/head';
import Header from './Header';
import RecoilProvider from './@Components/Layout/Providers/RecoilProvider';
import Drawer from './@Components/Drawer';


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='ja'>
            <Head />
            <body className='bg-orange-50'>
                <RecoilProvider>
                <Header />
                    <Drawer />
                <div className='flex space-x-10'>
                </div>
                {children}
                </RecoilProvider>
            </body>
        </html>
    );
}