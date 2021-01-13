import Layout from "../components/Layout";
import styles from '../styles/Portfolio.module.css'
import Iframe from 'react-iframe'
const Portfolio = () => (
  <Layout title="Portfólio" text="Sites e aplicações web já desenvolvidos" sessionimage="/Portfolio.png" >


      <div className={styles.children}>

     
      <div className={styles.session}>
        <h3 className={styles.titleh3}>Sites</h3>
        <div className={styles.site}>
          <Iframe src="https://redencaorock.com.br" scrolling="no" height="200" width="300" title="redenção"></Iframe>
          <a href="https://redencaorock.com.br" target="_blanck" >Rendenção
          </a>
        </div>
      </div>
    
      <div className={styles.session}>
        <h3 className={styles.titleh3}>GitHub</h3>
        <p>Aplicações web</p>
      </div>
      </div>
  </Layout>
);

export default Portfolio;