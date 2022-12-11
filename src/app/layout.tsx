import Header from './@Components/@Common/Header';
import RecoilProvider from './@Components/Layouts/Providers/RecoilProvider';
import Drawer from './@Components/Drawer';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='ja'>
            <title>Ramen Review</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <link rel="icon" href="/favicon.ico" />
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