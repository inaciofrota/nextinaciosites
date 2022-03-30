import Layout from "../components/Layout";

const Contato = () => (
  <Layout title="Contato" text="Mande uma mensagem" sessionimage="/Contato.png">
    <div className={styles.children}>
      <a href="https://web.whatsapp.com/send?phone=5593991315355" target="_blanck">Whatsapps</a>
    </div>

  </Layout>
);

export default Contato;