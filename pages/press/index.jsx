import Header from '../../components/header';
import Layout from '../../components/layout';

export default () => (
  <Layout>
    <Header
      name="Rights at Ryanair"
      navigation={[
        ['Members', '/'],
        ['Guardians', '/guardians'],
        ['Press', '/press', true],
      ]}
    />
  </Layout>
);
