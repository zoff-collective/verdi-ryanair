import Footer from '../../components/footer';
import Guardians from '../../components/guardians';
import Header from '../../components/header';
import Layout from '../../components/layout';
import Text from '../../components/text';
import TextHeadline from '../../components/text-headline';

export default () => (
  <Layout>
    <Header
      name="Rights at Ryanair"
      navigation={[
        ['Members', '/'],
        ['Guardians', '/guardians', true],
        ['Press', '/press'],
      ]}
    />

    <Text
      title="Guardians"
    >
      <TextHeadline>How it all started</TextHeadline>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
    </Text>

    <Guardians
      people={[
        {
          name: 'Bettina Wilhelm',
          role: 'Landesbeauftragte und Mitglied des Aufsichtsrats des Flughafens Bremen',
          quote: `
            Ich bin die Patin für die ver.di-Tarifkomission bei Ryanair, weil
            Tarifverträge dafür sorgen, dass die Leistung von Beschaäftigten
            angemessen, transparent und verlässlich bewertet und entlohnt wird.
          `
        },

        {
          name: 'Bettina Wilhelm',
          role: 'Landesbeauftragte und Mitglied des Aufsichtsrats des Flughafens Bremen',
          quote: `
            Ich bin die Patin für die ver.di-Tarifkomission bei Ryanair, weil
            Tarifverträge dafür sorgen, dass die Leistung von Beschaäftigten
            angemessen, transparent und verlässlich bewertet und entlohnt wird.
          `
        },

        {
          name: 'Bettina Wilhelm',
          role: 'Landesbeauftragte und Mitglied des Aufsichtsrats des Flughafens Bremen',
          quote: `
            Ich bin die Patin für die ver.di-Tarifkomission bei Ryanair, weil
            Tarifverträge dafür sorgen, dass die Leistung von Beschaäftigten
            angemessen, transparent und verlässlich bewertet und entlohnt wird.
          `
        }
      ]}
    />

    <Footer title="Time to change at Ryanair" />
  </Layout>
);
