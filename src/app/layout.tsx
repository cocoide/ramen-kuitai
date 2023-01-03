import Header from './@Components/@Header';
import RecoilProvider from './@Components/Providers/RecoilProvider';
import NextAuthProvider from './@Components/Providers/NextauthProvider';
import CircleLoading from './@Components/Animations/CircleLoading';
import { Suspense } from 'react';
import FooterNavi from './@Components/Button/FooterNavi';
import LoginModal from './@Components/Modals/LoginModal/index';

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
            <body className='bg-white'>
                {/* bg-[#e4e2df] */}
                <NextAuthProvider>
                    <Suspense fallback={<CircleLoading />}>
                        <RecoilProvider>
                            <Header />
                            {children}
                            <div className="inline-block md:hidden">
                                <FooterNavi />
                            </div>
                            <LoginModal />
                        </RecoilProvider>
                    </Suspense>
                </NextAuthProvider>
            </body>
        </html>
    );
}