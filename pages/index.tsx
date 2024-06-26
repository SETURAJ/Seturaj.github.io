import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AboutMe from '../components/aboutMe'
import Navbar from '../components/navbar'
import Description from '../components/description'
import Experience from '../components/experience'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Footer from '../components/footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    AOS.init({
      mirror: true,
      anchorPlacement: 'top-bottom',
      duration: 1000,
    });
  }, [])
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="preload" as="image" href="/profile_pic.webp" />
        <meta name="google-site-verification" content="db3Jm0LzFNjidddxajNLZTks7p5zACWOyczV7QyZvKg" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.content}>
          <AboutMe />
          <Description />
          {/* <Education /> */}
          <Experience />
          <Skills />
          <Projects />
         {/* <Contact />*/}
          <Footer />
        </div>
      </main>
    </>
  )
}
