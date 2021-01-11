import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

Router.onRouteChangeStart = url => {
  console.log(url);
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ title, text, sessionimage, children }) => (
  <div className={styles.container}>
    <Head>
      
    </Head>
    <main className={styles.main}>
      <h1 className={styles.title}>
          Inácio Frota
      </h1>

        <p className={styles.description}>
          Desenvolvedor web Freelancer
        </p>
        <div className={styles.menu}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/servicos">
            <a>Serviços</a>
          </Link>
          <Link href="/sobre">
            <a>Sobre</a>
          </Link>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
          <Link href="/contato">
            <a>Contato</a>
          </Link>
        </div>
        <div className={styles.grid}>
          <h2 className={styles.titleh2}>{title}</h2>
          <div className={styles.content}>
            <p className={styles.text}>{text}</p>
            <Image className={styles.image}
              src={sessionimage}
              alt="My Image"
              width={200}
              height={200}
            />
          </div>
          {children}
        </div>
    </main>

    <footer className={styles.footer}>&copy; {new Date().getFullYear()}Inácio Sites</footer>
     
    </div>

)
export default Layout