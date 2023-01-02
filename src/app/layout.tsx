import Header from './@Components/@Header';
import RecoilProvider from './@Components/Providers/RecoilProvider';
import NextAuthProvider from './@Components/Providers/NextauthProvider';
import CircleLoading from './@Components/Animations/CircleLoading';
import Drawer from './@Components/@Header/Drawer';
import { Suspense } from 'react';
import FooterNavi from './@Components/Button/FooterNavi';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <html lang='ja'>
            <title>Ramen Review</title>
            <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" name="viewport" />
            <link rel="icon" href="/ramen-orange.svg" />
            <body className='bg-gray-100'>
                {/* bg-[#e4e2df] */}
                <NextAuthProvider>
                    <Suspense fallback={<CircleLoading />}>
                        <RecoilProvider>
                            <Header />
                            <Drawer />
                            <div className='flex space-x-10'>
                            </div>
                            {children}
                            <div className="inline-block md">
                                <FooterNavi />
                            </div>
                        </RecoilProvider>
                    </Suspense>
                </NextAuthProvider>
            </body>
        </html>
    );
}