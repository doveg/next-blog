import 'tailwindcss/tailwind.css';
import Header from '../component/Header';
import Footer from '../component/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen">
      <Header />

      <div className="min-h-84% max-w-3xl mx-auto ">
        {/*Component*/}
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  );
}
