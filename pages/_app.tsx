import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SEO from "@bradgarropy/next-seo"
import { useState, useEffect } from 'react';
import Loading from '../components/loading';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log(isloading);
  }, [isloading])


  const exitanimate = {
    animate: {
      transition: {
        delay: 10,
        duration: 10,
        when: "afterChildren"
      }
    }
  }

  return <>
    <SEO
      title="Seturaj Matroja"
      description="Software Developer living in Canada."
      keywords={["setu","seturaj","seturaj's portfolio", "setu's portfolio", "portfolio", "seturaj matroja", "matroja seturaj", "SETURAJ Github", "portfolio websites", "top portfolio websites", "best portfolio websites", "best portfolio", "seturaj portfolio", "best portfolio design", "portfolio design", "portfolio design ideas",]}
      icon="/logoS.jpg"
    />
    <AnimatePresence>
      {
        isloading ? <Loading setIsLoading={setIsLoading} />
          : <Component {...pageProps} />
      }
    </AnimatePresence>
  </>
}
