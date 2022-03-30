import Layout from "../components/Layout";
import styles from '../styles/Contato.module.css'


const Contato = () => (
  <Layout title="Contato" text="Escolha um aplicativo para contato" sessionimage="/Contato.png">
    <div className={styles.children}>
      <a href="https://web.whatsapp.com/send?phone=5593991315355" target="_blanck">
         <img src="whatsapp-logo-icone.png" alt='whatsapp' width='60' height='60'/>
      </a>
    </div>

  </Layout>
);

export default Contato;