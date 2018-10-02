import Head from 'next/head';

import Footer from '../../components/footer';
import Guardians from '../../components/guardians';
import Header from '../../components/header';
import Layout from '../../components/layout';
import Text from '../../components/text';
import TextHeadline from '../../components/text-headline';

export default () => (
  <Layout>
    <Head>
      <title>Guardians - Time for change at Ryanair</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header
      name="Rights at Ryanair"
      href="https://verkehr.verdi.de/branchen/luftverkehr/fluggesellschaften/ryanair"
      navigation={[['Cabin Crew', '/'], ['Guardians', '/guardians', true], ['News', '/news']]}
      facebookLink="https://www.facebook.com/Verdi-Cabin-Crew-United-Germany-475233959645901/"
    />

    <Text title="Guardians">
      <TextHeadline>Arbeitsbedingungen bei Ryanair</TextHeadline>

      <p>
        Im August 2018 haben die deutschlandweiten ver.di Mitglieder beim Kabinenpersonal Ryanairs
        ihre Tarifkommission gewählt. Die 9 mutigen Kollegen und Kolleginen sind an den Flughäfen
        Berlin, Frankfurt, Düsseldorf, Bremen und Köln stationiert. Das Ziel der in ver.di
        organisierten Beschäftigten ist, per Tarifvertrag existenzsichernde und
        gesundheitserhaltende Arbeitsbedingungen bei Ryanair in Deutschland einzuführen.
      </p>

      <TextHeadline>Einschüchterung, Schikane und Kündigungen</TextHeadline>

      <p>
        Gewerkschaftliche Organisierung wurde lange offiziell vom Management „untersagt“ und
        solidarische Aktionen, wie etwa zuletzt mit den streikenden Beschäftigten bei Ryanair in
        Südeuropa, mit starker Einschüchterung beantwortet. Aufgrund von Erfahrungen und der
        Historie bei Ryanair kann daher nicht ausgeschlossen werden, dass es zu Einschüchterung,
        Schikane und sogar Kündigungen gegenüber Mitgliedern der Tarifkommission kommen könnte.
      </p>

      <TextHeadline>"Guardians"</TextHeadline>

      <p>
        Eine Reihe von zivilgesellschaftlichen Paten und Patinnen stehen deshalb gemeinsam mit
        ver.di dafür ein, dass Ryanair die grundgesetzlich festgeschriebenen Koalitionsfreiheit
        einhält. Sie beobachten das Unternehmen hinsichtlich eines unbehinderten Ablaufs der
        Tarifverhandlungen nach nationalem und europäischem Recht. Und stehen dafür ein, dass die
        Gewerkschaftsaktivisten und Aktivistinnen keinerlei Nachteile durch ihren Einsatz für Würde
        und Gerechtigkeit erfahren.
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
            Ich bin Patin für ver.di Tarifkommission bei Ryanair, weil schnell faire Arbeitsbedingungen für Flugbegleiter*innen geschaffen werden müssen.
          `
        },

        {
          name: 'Thorsten Schäfer-Gümbel',
          role: 'Stellvertretender SPD-Bundesvorsitzender',
          quote: `
            Ich unterstütze die Gewerkschaften bei ihren Tarifverhandlungen mit Ryanair, weil Löhne und Arbeitsbedingungen bei uns nicht einseitig festgelegt sondern zwischen den Tarifparteien fair ausgehandelt werden. Die Geltendmachung von Arbeitnehmerinteressen ist geschützt, der Zusammenschluss in Gewerkschaften und Verbänden und der Arbeitskampf haben hier Verfassungsrang. Auch Unternehmen wie Ryanair, die Dumpinglöhne, prekäre Beschäftigung und Druck auf Arbeitnehmerinnen und Arbeitnehmer zum Geschäftsmodell gemacht haben, müssen wissen: Die SPD ist in dieser Frage nicht neutral sondern klar auf der Seite der Beschäftigten.
          `
        },

        {
          name: 'Bernd Riexinger',
          role: 'Stellvertretender SPD-Bundesvorsitzender',
          quote: `
            Ich unterstütze die Gewerkschaften bei ihren Tarifverhandlungen mit Ryanair, weil Löhne und Arbeitsbedingungen bei uns nicht einseitig festgelegt sondern zwischen den Tarifparteien fair ausgehandelt werden. Die Geltendmachung von Arbeitnehmerinteressen ist geschützt, der Zusammenschluss in Gewerkschaften und Verbänden und der Arbeitskampf haben hier Verfassungsrang. Auch Unternehmen wie Ryanair, die Dumpinglöhne, prekäre Beschäftigung und Druck auf Arbeitnehmerinnen und Arbeitnehmer zum Geschäftsmodell gemacht haben, müssen wissen: Die SPD ist in dieser Frage nicht neutral sondern klar auf der Seite der Beschäftigten.
          `
        },

        {
          name: 'Arno Klare',
          role: 'Vorsitzender der Partei DIE LINKE',
          quote: `
            Die Kabinenbeschäftigten von Ryanair sind mutige Heldinnen und Helden. Sie nehmen den Kampf mit einem schier übermächtigen Konzern auf und streben einen Tarifvertrag an. Ich drücke ihnen die Daumen! Ihr Engagement nutzt allen Beschäftigten in Deutschland. Es kann nicht angehen, dass internationale Konzerne ihre Profite durch Lohndumping auf dem Rücken der Beschäftigten machen. Nur ein Tarifvertrag kann nachhaltige Verbesserungen und gleichwertige Arbeitsbedingungen für alle Flugbegleiterinnen und Flugbegleiter bei Ryanair in Deutschland sicherstellen!
          `
        },

        {
          name: 'Peter Feldmann',
          role: 'Oberbürgermeister von Frankfurt',
          quote: `
            Tarifverträge, die zwischen Gewerkschaften und Arbeitgeber auf Augenhöhe verhandelt werden, sind Basis für gute Arbeitsbedingungen für jeden Arbeitnehmer und Grundlage für den Erfolg unsers Wirtschaftsmodells. Deshalb freue ich mich, dass Ryanair zu Tarifverhandlungen bereit ist. Hoffentlich gehören prekäre Beschäftigung und Dumpinglöhne endlich der Vergangenheit an.
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
            Ich bin Patin für die ver.di-Tarifkommission bei Ryanair, weil faire Arbeitsbedingungen und Einkommen bei Ryanair längst überfällig sind. Gemeinsam mit anderen Gewerkschaften in ganz Europa wollen wir gute Tarifverträge durchsetzen.
          `
        },

        {
          name: 'Mehdi Nazem Schariflou',
          role:
            'Aufsichtsratsmitglied Fraport, stellv Aufsichtsratsvorsitzender, Betriebsratsvorsitzender der Firma Frasec am Frankfurter Flughafen',
          quote: `
              Ich bin Pate für die die ver.di Tarifkommission, weil gute Arbeit auch gerechte Bezahlung verdient.
          `
        },

        {
          name: 'Quadeer Rana',
          role: 'Oberbürgermeister von Frankfurt',
          quote: `
            Tarifverträge, die zwischen Gewerkschaften und Arbeitgeber auf Augenhöhe verhandelt werden, sind Basis für gute Arbeitsbedingungen für jeden Arbeitnehmer und Grundlage für den Erfolg unsers Wirtschaftsmodells. Deshalb freue ich mich, dass Ryanair zu Tarifverhandlungen bereit ist. Hoffentlich gehören prekäre Beschäftigung und Dumpinglöhne endlich der Vergangenheit an.
          `
        },

        {
          name: 'Andreas Rimkus',
          role: 'MdB | SPD-Bundestagsfraktion',
          quote: `
            Ich bin Pate für die Tarifkommission bei Ryanair, weil wir uns Dumping im Luftverkehr mit Sicherheit nicht leisten können und wollen!
          `
        },

        {
          name: 'Claudia Amier',
          role: 'Oberbürgermeister von Frankfurt',
          quote: `
            Tarifverträge, die zwischen Gewerkschaften und Arbeitgeber auf Augenhöhe verhandelt werden, sind Basis für gute Arbeitsbedingungen für jeden Arbeitnehmer und Grundlage für den Erfolg unsers Wirtschaftsmodells. Deshalb freue ich mich, dass Ryanair zu Tarifverhandlungen bereit ist. Hoffentlich gehören prekäre Beschäftigung und Dumpinglöhne endlich der Vergangenheit an.
          `
        },

        {
          name: 'Devrim Arslan',
          role:
            'Betriebsratsvorsitzender der Fraground GmbH und Mitglied im Aufsichtsrat der Fraport und Fraground GmbH Flughafen Frankfurt',
          quote: `
            Ich bin Pate für die ver.di-Tarifkommission bei Ryanair, weil die Würde des Menschen unantastbar ist. Tarifverträge sind der Grundstein für einen fairen Arbeitsmarkt und sorgen für gerechte Arbeitsbedingungen.
          `
        },

        {
          name: 'Oliver Krischer',
          role: 'MdB, Bundestagsfraktion Bündnis 90/Die Grünen',
          quote: `
            Ich bin Pate für die ver.di-Tarifkommission bei Ryanair, weil ich finde, auch in der Luftverkehrsbranche müssen überall faire Arbeitsbedingungen herrschen.
          `
        },

        {
          name: 'Petra Pollmann',
          role:
            'Betriebsrätin bei der Flughafen Düsseldorf GmbH und Sprecherin der ver.di Vertrauensleute am Flughafen Düsseldorf',
          quote: `
            Ich bin Patin für die ver.di Tarifkommission bei Ryanair weil Tarifverträge faire Arbeitsbedingungen herstellen. Das Modell Ryanair wirkt seit Jahren auf die gesamte Branche. Mit den Verhandlungen werden die Beschäftigten erstmals auf Augenhöhe wahrgenommen.
          `
        },

        {
          name: 'Janine Wissler',
          role: 'Fraktionsvorsitzende DIE LINKE im Hessischen Landtag und stv. Parteivorsitzende',
          quote: `
            Ich bin Patin, weil ich solidarisch bin mit den Beschäftigten bei Ryanair und den anderen Fluglinien. Ryanair bedroht durch Lohndumping und seinen Umgang mit den Beschäftigten die Standards in der ganzen Luftverkehrsbranche. Deshalb muss endlich ein vernünftiger Tarifvertrag her.
          `
        },

        {
          name: 'Pascal Meiser',
          role: 'MdB, Fraktion DIE LINKE',
          quote: `
            Ich bin Pate für die ver.di Tarifkommission bei Ryanair, weil das Management endlich begreifen muss, dass wir ihm genau auf die Finger schauen, wie es sich gegenüber dem Kabinenpersonal verhält. Das rücksichtslose Profitemachen auf dem Rücken der Beschäftigten muss endlich aufhören.
          `
        },

        {
          name: 'Beate Müller-Gemmeke',
          role: 'MdB, Fraktion Bündnis 90/Die Grünen',
          quote: `
            Ich bin Patin für die ver.di Tarifkommission bei Ryanair, denn diese mutigen Beschäftigten haben Respekt, Anerkennung und Solidarität verdient. Sie brauchen Unterstützung bei ihrem Kampf für einen Tarifvertrag, für gute Löhne und gute Arbeitsbedingungen. Es muss Schluss sein mit Lohndumping. Auch Einschüchterung darf es nicht weiter geben. Ich wünsche den Beschäftigten einen langen Atem und viel Erfolg.
          `
        },

        {
          name: 'Norbert Schmitt',
          role: 'Abgeordneter des Hessischen Landtags',
          quote: `
            Immer mehr wird darüber bekannt, wie unfair und entwürdigend das Kabinenpersonal von Ryanair behandelt wird. Das entsetzt mich und deshalb habe ich mich entschlossen Pate zu werden. Um zu zeigen, dass die mutigen Mitarbeiterinnen und Mitarbeiter, die gegen eine solche Behandlung protestieren, nicht alleine stehen und Solidarität verdient haben. Mit den Ryanair-Beschäftigten muss endlich fair umgegangenen und das eigentlich selbstverständliche Recht auf ungehinderte Tarifverhandlungen muss voll und ganz anerkannt werden. Einschüchterungen und Schikanen dürfen keinen Platz haben. Die Beschäftigten brauchen endlich eine angemessene Bezahlung und ordentliche Arbeitsbedingen.
          `
        },

        {
          name: 'Nancy Faeser',
          role: 'Generalssekretärin der SPD in Hessen',
          quote: `
            Ich bin Patin bei der ver.di Tarifkommission für Ryan Air, weil Tarifverträge eine wichtige Basis für faire Arbeitsbedingungen und Einkommen sind. Beides ist bei Ryan Air dringend notwendig.
          `
        },

        {
          name: 'Dietmar Woidke',
          role: 'SPD Vorsitzender in Brandenburg',
          quote: `
            Wer mit deutschen Flugpassagieren viel Geld verdient, muss seine Beschäftigten auch nach deutschen Standards bezahlen. Für die Beschäftigten muss auch unser Arbeitsrecht gelten. Sie müssen die Möglichkeit haben, dafür zu kämpfen, notfalls auch zu streiken.
          `
        },
        
        {
          name: 'Uwe Schmidt',
          role: 'MdB, SPD-Bundestagsfraktion',
          quote: `
            Als stellvertretender Bundesvorsitzender der Arbeitsgemeinschaft für Arbeitnehmerfragen in der SPD stehe ich klar und deutlich an der Seite der Beschäftigten von Ryanair. Ich verurteile das Geschäftsmodell von Ryanair, das auf Dumpinglöhne und prekäre Beschäftigung beruht sowie massiven Druck auf die Arbeitnehmerinnen und Arbeitnehmer ausübt. Aus diesem Grund bin ich Pate für die ver.di-Tarifkommission bei Ryanair und fordere: Play fair, Ryanair!
          `
        },
        
         {
          name: 'Hubertus Heil',
          role: 'Bundesminister für Arbeit und Soziales',
          quote: `
            Ich bin Pate für Tarifkommissionsmitglied Laura Mele aus Berlin, weil die deutsche Verfassung das Streikrecht garantiert und dafür sorgt, dass Arbeitnehmerinnen und Arbeitnehmer ohne Drangsalierungen für ihre Interessen eintreten können.
          `
        }
        
      ]}
    />

    <Footer
      title="Time to change at Ryanair"
      links={[
        ['Imprint', 'https://www.verdi.de/impressum'],
        ['Contact', 'https://verkehr.verdi.de/kontakt'],
        [
          'Data protection',
          'https://www.verdi.de/impressum/++co++1e7cc50a-2b44-11e3-af58-52540059119e'
        ]
      ]}
    />
  </Layout>
);
