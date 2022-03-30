import Layout from "../components/Layout";
import styles from '../styles/Contato.module.css'


const Contato = () => (
  <Layout title="Contato" text="Escolha um aplicativo para contato" sessionimage="/Contato.png">
    <div className={styles.children}>
      <div className={styles.session}>
        <a href="https://wa.me/send?phone=5593991315355" target="_blanck">
           <img src="whatsapp-logo-icone.png" alt='whatsapp' width='60' height='60'/>
        </a>
      </div>
      <div className={styles.session}>
        <a href="https://t.me/Inac1o" target="_blanck">
           <img src="telegram.png" alt='telegram' width='60' height='60'/>
        </a>
      </div>
    </div>

  </Layout>
);

export default Contato;