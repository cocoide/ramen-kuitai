import Link from 'next/link';
import Head from './components/Layout/head';
import Header from './components/Layout/Header';


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='ja'>
            <Head />
            <body className='bg-indigo-100'>
                <Header />
                <div className='flex space-x-10'>
                    <Link href={'todos'}>TODO</Link>
                    <Link href={'/ramens'}>Ramen</Link>
                </div>
                {children}
            </body>
        </html>
    );
}