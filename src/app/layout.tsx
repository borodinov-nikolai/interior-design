import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import '../shared/styles/global.scss'
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import localFont from 'next/font/local'

const roboto = Roboto({
  subsets:['latin'], 
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto'
}
);
const elMessiri = localFont({
  src: '../../public/fonts/ElMessiri-VariableFont_wght.ttf',
  display: 'swap',
  variable: '--font-ElMessiri'
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${elMessiri.variable}`}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
