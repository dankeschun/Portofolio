import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <div className={styles.contactInfo}>
        <p>
          <strong>School Email:</strong> <a href="mailto:bernard.fabian@binus.ac.id">bernard.fabian@binus.ac.id</a>
        </p>
        <p>
          <strong>Personal Email:</strong> <a href="mailto:brnrdfabian@gmail.com">brnrdfabian@gmail.com</a>
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:+1234567890">+62 821 1579 5799</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
