import Header from '../../components/header';
import Layout from '../../components/layout';
import News from '../../components/news';
import withRSS from '../../components/withRSS';

export default withRSS(
  'https://verkehr.verdi.de/themen/nachrichten/rss',
  ({ items }) => (
    <Layout>
      <Header
        name="Rights at Ryanair"
        href="https://verkehr.verdi.de/branchen/luftverkehr/fluggesellschaften/ryanair"
        navigation={[
          ['Cabin Crew', '/'],
          ['Guardians', '/guardians'],
          ['News', '/news', true],
        ]}
      />

      {items && <News title="Latest News" items={items} />}
    </Layout>
  )
);
