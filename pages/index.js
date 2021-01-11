import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
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

        <div className={styles.grid}>
        <Link href="/servicos">
          <a className={styles.card}>
            <h3>Serviços &rarr;</h3>
            <p>Nossos serviços e produtos para o seu site</p>
          </a>
        </Link>

        <Link href="/sobre">
          <a className={styles.card}>
            <h3>Sobre &rarr;</h3>
            <p>Aqui descrevo um pouco de minha história e formação</p>
          </a>
        </Link>
        <Link href="/portfolio">
          <a className={styles.card}>
            <h3>Portfólio &rarr;</h3>
            <p>Confira aqui alguns projetos que tenho desenvolvido</p>
          </a>
        </Link>
          
        <Link href="/contato">
          <a className={styles.card}>
            <h3>Contato &rarr;</h3>
            <p>Conte-nos como quer seu site e faremos a proposta perfeita para você</p>
          </a>
        </Link>
        
        </div>
      </main>

      <footer className={styles.footer}>&copy; {new Date().getFullYear()} Inácio Sites</footer>
    </div>
  )
}
