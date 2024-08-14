import Header from '../components/header';
import Footer from '../components/footer'
import Contact from '../components/contact';

const ContactPage = () => {
  return (
    <section>
      <Header page='contact'/>
      <Contact />
      <Footer page='contact'/>
    </section>
  );
};

export default ContactPage;