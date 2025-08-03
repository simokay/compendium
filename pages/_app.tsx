import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Navigation from '../components/navigation'
import Providers from '../providers';
export default function App({ Component, pageProps }: 
AppProps) {
  return (
    <div className="container mx-auto mt-8 font-serif">
      <Navigation />
      <Providers><Component {...pageProps} /></Providers>
    </div>
  );
}
