import Layout from "../components/Layout";
import styles from '../styles/Portfolio.module.css'
const Portfolio = () => (
  <Layout title="Portfólio" text="Sites e aplicações web já desenvolvidos" sessionimage="/Portfolio.png" >
    <div className="children">

   
      <div className={styles.session}>
        <h3 className={styles.titleh3}>Sites</h3>
        <div className={styles.site}>
          <iframe src="https://redencaorock.com.br" scrolling="no" height="200"  width="350" title="redenção"></iframe>
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