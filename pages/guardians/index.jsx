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
          `
        },

         {
          name: 'Bernd Riexinger',
          role: 'Stellvertretender SPD-Bundesvorsitzender',
          quote: `
            Ich unterstütze die Gewerkschaften bei ihren Tarifverhandlungen mit Ryanair, weil Löhne und Arbeitsbedingungen bei uns nicht einseitig festgelegt sondern zwischen den Tarifparteien fair ausgehandelt werden. Die Geltendmachung von Arbeitnehmerinteressen ist geschützt, der Zusammenschluss in Gewerkschaften und Verbänden und der Arbeitskampf haben hier Verfassungsrang. Auch Unternehmen wie Ryanair, die Dumpinglöhne, prekäre Beschäftigung und Druck auf Arbeitnehmerinnen und Arbeitnehmer zum Geschäftsmodell gemacht haben, müssen wissen: Die SPD ist in dieser Frage nicht neutral sondern klar auf der Seite der Beschäftigten.          `
          `
        },
        
         {
          name: 'Arno Klare',
          role: 'Vorsitzender der Partei DIE LINKE',
          quote: `
            Die Kabinenbeschäftigten von Ryanair sind mutige Heldinnen und Helden. Sie nehmen den Kampf mit einem schier übermächtigen Konzern auf und streben einen Tarifvertrag an. Ich drücke ihnen die Daumen! Ihr Engagement nutzt allen Beschäftigten in Deutschland. Es kann nicht angehen, dass internationale Konzerne ihre Profite durch Lohndumping auf dem Rücken der Beschäftigten machen. Nur ein Tarifvertrag kann nachhaltige Verbesserungen und gleichwertige Arbeitsbedingungen für alle Flugbegleiterinnen und Flugbegleiter bei Ryanair in Deutschland sicherstellen!        },
          `
        },
        
         {
          name: 'Peter Feldmann',
          role: 'Oberbürgermeister von Frankfurt',
          quote: `
            Tarifverträge, die zwischen Gewerkschaften und Arbeitgeber auf Augenhöhe verhandelt werden, sind Basis für gute Arbeitsbedingungen für jeden Arbeitnehmer und Grundlage für den Erfolg unsers Wirtschaftsmodells. Deshalb freue ich mich, dass Ryanair zu Tarifverhandlungen bereit ist. Hoffentlich gehören prekäre Beschäftigung und Dumpinglöhne endlich der Vergangenheit an.        },
              `
        },
        
         {
          name: 'Hakan Bölükmese',
          role: 'ver.di VL Sprecher Fraport und Mitglied im Aufsichtsrat Fraport',
          quote: `
            Ich bin Pate für die ver.di-Tarifkommission bei Ryanair, weil die Kollegen und Kolleginnen schon längst bessere Arbeits- und Tarifbedingungen verdiENT haben.
              `
        },
        
         {
          name: 'Behrad Ghofrani',
          role: 'Betriebsratsvorsitzender WISAG, Flughafen Frankfurt',
          quote: `
            Ich bin Pate für die ver.di-Tarifkommission bei Ryanair, weil wir die führende Low Coast Airline abfertigen am Flughafen Frankfurt, daher kenne ich die Folgen für unsere Kollegen aus den Bodenverkehrsdiensten sehr gut.
              `
        },
        
         {
          name: 'Christine Behle',
          role: 'Bundesvorstand der Gewerkschaft ver.di',
          quote: `
            Ich bin Patin für die ver.di-Tarifkommission bei Ryanair, weil faire Arbeitsbedingungen und Einkommen bei Ryanair längst überfällig sind. Gemeinsam mit anderen Gewerkschaften in ganz Europa wollen wir gute Tarifverträge durchsetzen              `
                `
         },
        
         {
          name: 'Mehdi Nazem Schariflou',
          role: 'Betriebsratsvorsitzender der Firma Fracares am Flughafen Frankfurt',
          quote: `
            Ich bin Pate für die ver.di Tarifkommission bei Ryanair, weil ich an gelebte Solidarität und daran glaube, dass jeder seinen „Gerechten Lohn“ verdient hat!              `
        },
        
         {
          name: 'Peter Feldmann',
          role: 'Oberbürgermeister von Frankfurt',
          quote: `
            Tarifverträge, die zwischen Gewerkschaften und Arbeitgeber auf Augenhöhe verhandelt werden, sind Basis für gute Arbeitsbedingungen für jeden Arbeitnehmer und Grundlage für den Erfolg unsers Wirtschaftsmodells. Deshalb freue ich mich, dass Ryanair zu Tarifverhandlungen bereit ist. Hoffentlich gehören prekäre Beschäftigung und Dumpinglöhne endlich der Vergangenheit an.        },
              `
        },
      
         {
          name: 'Peter Feldmann',
          role: 'Oberbürgermeister von Frankfurt',
          quote: `
            Tarifverträge, die zwischen Gewerkschaften und Arbeitgeber auf Augenhöhe verhandelt werden, sind Basis für gute Arbeitsbedingungen für jeden Arbeitnehmer und Grundlage für den Erfolg unsers Wirtschaftsmodells. Deshalb freue ich mich, dass Ryanair zu Tarifverhandlungen bereit ist. Hoffentlich gehören prekäre Beschäftigung und Dumpinglöhne endlich der Vergangenheit an.        },
              `
        },
      
         {
          name: 'Peter Feldmann',
          role: 'Oberbürgermeister von Frankfurt',
          quote: `
            Tarifverträge, die zwischen Gewerkschaften und Arbeitgeber auf Augenhöhe verhandelt werden, sind Basis für gute Arbeitsbedingungen für jeden Arbeitnehmer und Grundlage für den Erfolg unsers Wirtschaftsmodells. Deshalb freue ich mich, dass Ryanair zu Tarifverhandlungen bereit ist. Hoffentlich gehören prekäre Beschäftigung und Dumpinglöhne endlich der Vergangenheit an.        },
              `
        },
      
         {
          name: 'Peter Feldmann',
          role: 'Oberbürgermeister von Frankfurt',
          quote: `
            Tarifverträge, die zwischen Gewerkschaften und Arbeitgeber auf Augenhöhe verhandelt werden, sind Basis für gute Arbeitsbedingungen für jeden Arbeitnehmer und Grundlage für den Erfolg unsers Wirtschaftsmodells. Deshalb freue ich mich, dass Ryanair zu Tarifverhandlungen bereit ist. Hoffentlich gehören prekäre Beschäftigung und Dumpinglöhne endlich der Vergangenheit an.        },
              `
        },
      
         {
          name: 'Peter Feldmann',
          role: 'Oberbürgermeister von Frankfurt',
          quote: `
            Tarifverträge, die zwischen Gewerkschaften und Arbeitgeber auf Augenhöhe verhandelt werden, sind Basis für gute Arbeitsbedingungen für jeden Arbeitnehmer und Grundlage für den Erfolg unsers Wirtschaftsmodells. Deshalb freue ich mich, dass Ryanair zu Tarifverhandlungen bereit ist. Hoffentlich gehören prekäre Beschäftigung und Dumpinglöhne endlich der Vergangenheit an.        },
              `
        },
      
         {
          name: 'Peter Feldmann',
          role: 'Oberbürgermeister von Frankfurt',
          quote: `
            Tarifverträge, die zwischen Gewerkschaften und Arbeitgeber auf Augenhöhe verhandelt werden, sind Basis für gute Arbeitsbedingungen für jeden Arbeitnehmer und Grundlage für den Erfolg unsers Wirtschaftsmodells. Deshalb freue ich mich, dass Ryanair zu Tarifverhandlungen bereit ist. Hoffentlich gehören prekäre Beschäftigung und Dumpinglöhne endlich der Vergangenheit an.        },
              `
        },
      
         {
          name: 'Peter Feldmann',
          role: 'Oberbürgermeister von Frankfurt',
          quote: `
            Tarifverträge, die zwischen Gewerkschaften und Arbeitgeber auf Augenhöhe verhandelt werden, sind Basis für gute Arbeitsbedingungen für jeden Arbeitnehmer und Grundlage für den Erfolg unsers Wirtschaftsmodells. Deshalb freue ich mich, dass Ryanair zu Tarifverhandlungen bereit ist. Hoffentlich gehören prekäre Beschäftigung und Dumpinglöhne endlich der Vergangenheit an.        },
              `
        },
      
         {
          name: 'Peter Feldmann',
          role: 'Oberbürgermeister von Frankfurt',
          quote: `
            Tarifverträge, die zwischen Gewerkschaften und Arbeitgeber auf Augenhöhe verhandelt werden, sind Basis für gute Arbeitsbedingungen für jeden Arbeitnehmer und Grundlage für den Erfolg unsers Wirtschaftsmodells. Deshalb freue ich mich, dass Ryanair zu Tarifverhandlungen bereit ist. Hoffentlich gehören prekäre Beschäftigung und Dumpinglöhne endlich der Vergangenheit an.        },
              `
        },
      
         {
          name: 'Peter Feldmann',
          role: 'Oberbürgermeister von Frankfurt',
          quote: `
            Tarifverträge, die zwischen Gewerkschaften und Arbeitgeber auf Augenhöhe verhandelt werden, sind Basis für gute Arbeitsbedingungen für jeden Arbeitnehmer und Grundlage für den Erfolg unsers Wirtschaftsmodells. Deshalb freue ich mich, dass Ryanair zu Tarifverhandlungen bereit ist. Hoffentlich gehören prekäre Beschäftigung und Dumpinglöhne endlich der Vergangenheit an.        },
              `
        },
      
        ]}
    />

    <Footer title="Time to change at Ryanair" />
  </Layout>
);
