import Head from 'next/head';
import Image from 'next/image';
import { FaMoon, FaSun } from 'react-icons/fa';

import { Icon, useColorMode } from '@chakra-ui/react';

import ExpSection from '../components/exp-section';
import Footer from '../components/footer';
import Header from '../components/header';
import ProjectsSection from '../components/projects-section';
import TechnologiesSection from '../components/technologies-section';
import FloatMenu from '../components/ui/float-menu';
import WelcomeSection from '../components/welcome-section';
import styles from '../styles/Home.module.css';

import type { NextPage } from 'next';
const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuItems = [
    {
      icon: colorMode === 'dark' ? <Icon as={FaSun} /> : <Icon as={FaMoon} />,
      onClick: toggleColorMode,
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Si&apos;s profile</title>
        <meta name='description' content='This is the profile' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <FloatMenu items={menuItems} />
      <Header />

      <main className={styles.main}>
        <WelcomeSection />
        <ProjectsSection />
        <ExpSection />
        <TechnologiesSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
