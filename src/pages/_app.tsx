import RootLayout from '@/pages/RootLayout'
import '../app/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="font-Poppins ">
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </div>

    )
}