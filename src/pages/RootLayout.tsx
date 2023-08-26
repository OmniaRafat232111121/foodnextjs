import React, { ReactElement } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
interface Props {
    children: ReactElement;
}
const RootLayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default RootLayout