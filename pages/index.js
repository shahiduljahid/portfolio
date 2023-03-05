import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Work from "@/components/Experience/Work";
import Projects from "@/components/Projects/Projects";
import OtherProjects from "@/components/OtherProjects/OtherProjects";
import Contact from "@/components/Contact/Contact";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head></Head>

      <main className={styles.main}>
        <Hero />
        <About />
        <Work />
        <Projects />
        <OtherProjects />
        <Contact />
      </main>
    </>
  );
}
