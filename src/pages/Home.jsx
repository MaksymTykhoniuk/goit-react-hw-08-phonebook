import { Section } from 'components/Section/Section';
import { Helmet } from 'react-helmet';

const styles = {
  container: {
    height: 300,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: '54px',
    fontWeight: 800,
    color: '#e0a96d',
  },
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Section>
        <div style={styles.container}>
          <h1 style={styles.title}>
            Contact book welcome page
            <span role="img" aria-label="Greeting icon">
              📖
            </span>
          </h1>
        </div>
      </Section>
    </>
  );
}
