import Head from 'next/head';

import Footer from '../../components/footer';
import Header from '../../components/header';
import Layout from '../../components/layout';
import News from '../../components/news';
import withRSS from '../../components/withRSS';

export default withRSS('https://verkehr.verdi.de/themen/nachrichten/rss', ({ items }) => (
  <Layout>
    <Head>
      <title>News - Time for change at Ryanair</title>
    </Head>

    <Header
      name="Rights at Ryanair"
      href="https://verkehr.verdi.de/branchen/luftverkehr/fluggesellschaften/ryanair"
      navigation={[['Cabin Crew', '/'], ['Guardians', '/guardians'], ['News', '/news', true]]}
    />

    {items && <News title="Latest News" items={items} />}

    <Footer
      title="Time to change at Ryanair"
      links={[['Imprint', ''], ['Contact', ''], ['Data protection', '']]}
    />
  </Layout>
));
