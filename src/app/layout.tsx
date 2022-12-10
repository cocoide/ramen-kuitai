import Link from 'next/link';
import Head from './Components/Layout/head';
import Header from './Components/Layout/Header';


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='ja'>
            <Head />
            <body className='bg-orange-50'>
                <Header />
                <div className='flex space-x-10'>
                </div>
                {children}
            </body>
        </html>
    );
}