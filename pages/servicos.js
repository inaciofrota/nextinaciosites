import Layout from "../components/Layout";
import styles from '../styles/Servicos.module.css'
const Servicos = () => (
  <Layout title="Serviços" text="Temos uma proposta para colocar sua empresa na internet" sessionimage="/Servicos.png">
    <div className={styles.children}>
      <ul>
        <li>Sites Pessoais</li>
        <li>Sites Comerciais</li>
        <li>Blog</li>
        <li>Responsividade</li>
        <li>SEO</li>
      </ul>
    </div>
    
  </Layout>
);

export default Servicos;