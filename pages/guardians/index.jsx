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
          role: 'Landesfrauenbeauftragte und Mitglied des Aufsichtsrats des Flughafens Bremen',
          quote: `
            Ich bin Patin für die ver.di-Tarifkommission bei Ryanair, weil Tarifverträge dafür sorgen, dass die Leistung von Beschäftigten angemessen, transparent und verlässlich bewertet und entlohnt wird.
          `
        },

        {
          name: 'Frank Bsirkse',
          role: 'Vorsitzender der Gewerkschaft ver.di',
          quote: `
            Ich bin Pate für die ver.di-Tarifkommission bei Ryanair, weil sich Arbeitnehmer/innen mit Tarifverträgen besser stellen und die Kolleg/innen bei Ryanair das auch verdient haben.
          `
        },

        {
          name: 'Cansel Kiziltepe',
          role: 'Mitglied des Deutschen Bundestages',
          quote: `
            Ich bin Patin für ver.di Tarifkommission bei Ryanair, weil schnell faire Arbeitsbedingungen für Flugbegleiter*innen geschaffen werden müssen..
          `
        },
         {
          name: 'Thorsten Schäfer-Gümbel',
          role: 'Stellvertretender SPD-Bundesvorsitzender',
          quote: `
            Ich unterstütze die Gewerkschaften bei ihren Tarifverhandlungen mit Ryanair, weil Löhne und Arbeitsbedingungen bei uns nicht einseitig festgelegt sondern zwischen den Tarifparteien fair ausgehandelt werden. Die Geltendmachung von Arbeitnehmerinteressen ist geschützt, der Zusammenschluss in Gewerkschaften und Verbänden und der Arbeitskampf haben hier Verfassungsrang. Auch Unternehmen wie Ryanair, die Dumpinglöhne, prekäre Beschäftigung und Druck auf Arbeitnehmerinnen und Arbeitnehmer zum Geschäftsmodell gemacht haben, müssen wissen: Die SPD ist in dieser Frage nicht neutral sondern klar auf der Seite der Beschäftigten.          `
        },
      ]}
    />

    <Footer title="Time to change at Ryanair" />
  </Layout>
);
