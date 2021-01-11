import Layout from "../components/Layout";
import styles from '../styles/Sobre.module.css'
const Sobre = () => (
  <Layout title="Sobre" text="Um pouquinho de minha história" sessionimage="/Sobre.png">
    
  <p className={styles.text}>Sou filho de Santarém -PA, descendente de nordestinos desbravadores da amazônia. Tenho sangue de boiadeiros, agrigultores e soldados da borracha.
  Minha família se estabeleceu na cidade de Manaus, onde obtive educação escolar, técnica e acadêmica. Criei gosto pela literatura e filosofia. Em minha adolescência fiz vários cursos técnicos onde criei apreço pelo raciocínio lógico, programação e tecnologia. Por fim, na academia, fiz o curso de Licenciatura em matemática.
  Tive a experiência de dar aulas de matemática para o ensino fundamental na região do rio Arapiuns-PA.
  Agora, por fim, encontrei-me na programação novamente e não canso de aumentar meus conhecimentos na área diariamente.</p>
  </Layout>
);

export default Sobre;