import Layout from "../components/Layout";
import styles from '../styles/Servicos.module.css'
const Servicos = () => (
  <Layout title="Serviços" text="Temos uma proposta para colocar sua empresa na internet" sessionimage="/Servicos.png">
    <div className={styles.children}>
      <div>
      <h3>Produtos</h3>
      <ul>
        <li>Sites Pessoais</li>
        <li>Sites Comerciais</li>
        <li>Aplicações Web</li>
        <li>Blogs</li>
      </ul>
      </div>
      
      <div>
      <h3>Funcionalidades</h3>
      <ul>
        <li>Responsividade</li>
        <li>Otimização CEO</li>
        <li>Performance</li>
        <li>Hospedagem</li>
      </ul>
      </div>
     
      <div>
      <h3>Tecnologias</h3>
      <ul>
        <li>Html, Css</li>
        <li>Javascript</li>
        <li>React JS</li>
        <li>Next JS</li>
      </ul>
      </div>
      
    </div>
    
  </Layout>
);

export default Servicos;