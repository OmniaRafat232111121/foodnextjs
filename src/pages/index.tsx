
import { Inter } from 'next/font/google'

import type { Metadata } from "next";
import Hero from '@/components/Hero';
import RootLayout from './RootLayout';
import { Children } from 'react';
import Featured from '@/components/Featured';
import Services from '@/components/Services';
import Menu from '@/components/Menu';
import FoodSurvey from '@/components/Survey';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Food Restaurant",
    description: "Best food",
};
export default function Home() {
    return (
        <main>
            <Hero />
            <Featured />
            <Services />
            <Menu />
            <FoodSurvey />

        </main>
    )
}


