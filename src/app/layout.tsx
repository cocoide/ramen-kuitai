import "styles/globals.css";
import Header from './@Components/@Header';
import RecoilProvider from './@Components/Providers/RecoilProvider';
import NextAuthProvider from './@Components/Providers/NextauthProvider';
import CircleLoading from './@Components/Animations/CircleLoading';
import { Suspense } from 'react';
import LoginModal from './@Components/Modals/LoginModal/index';
// import FooterNavi from './@Components/Button/FooterNavi';

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
                <NextAuthProvider>
                    <Suspense fallback={<CircleLoading />}>
                        <RecoilProvider>
                            <Header />
                            {children}
                            <LoginModal />
                            {/* <FooterNavi /> */}
                        </RecoilProvider>
                    </Suspense>
                </NextAuthProvider>
            </body>
        </html>
    );
}