import Cta from '../components/cta';
import Demands from '../components/demands';
import Facts from '../components/facts';
import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import Quote from '../components/quote';
import Layout from '../components/layout';
import Text from '../components/text';
import TextHeadline from '../components/text-headline';

export default () => (
  <Layout>
    <Header
      name="Rights at Ryanair"
      navigation={[
        ['Cabin Crew', '/', true],
        ['Guardians', '/guardians'],
        ['News', '/news'],
      ]}
    />

    <Hero
      title="Time for change at Ryanair"
      image={require('../static/images/hero.jpg')}
    />

    <Demands
      title="What do we want!"
      groups={[
        {
          title: 'Economic conditions',
          items: [
            'Fair living wage',
            'Guaranteed steady income',
            'Annual leave',
            'Seniority pay'
          ]
        },

        {
          title: 'National law',
          items: [
            'Agency employment',
            'Sickness leave and pay'
          ]
        },

        {
          title: 'Codetermination',
          items: [
            'Sales',
            'Safety and Rostering',
            'Fair and supportive work culture',
            'Promotion, transfer, disciplinary processes',
          ]
        }
      ]}
    />

    <Cta
      image={require('../static/images/book-a-date.jpg')}
      title="Want to be part of change at Ryanair?"
      target="https://my-ryanair-cabin-crew-job.typeform.com/to/mkOr7o"
      label="Book a date"
    />

    <Text title="We are many!">
      <p>
        We are at every German Ryanair base. We are with Ver.di. With 2 million members Ver.di is the biggest service trade union in the world. The name Ver.di stands for Vereinte Dienstleistungsgewerkschaft – United Services Union. We, ver.di, are one union for all. We consolidate the interest of our members – and by working together empower each of us. We create unity out of diversity. 
      </p>
    </Text>

    <Quote text="Feeling like I'm a number on a spreadsheet. I am the face of the company to the millions who fly Ryanair. I deserve respect." />

    <Text title="How do we win!">
      <TextHeadline>Times are changing</TextHeadline>

      <p>
        For many years, Ryanair didn’t accept unions as negotiation partner and was not willing to negotiate Collective Labour Agreements under national law. But times are changing, and so is Ryanair.
      </p>

      <TextHeadline>Negotiations</TextHeadline>

      <p>
        Over the last few months, cabin crew across Germany and Europe started began telling their story and talking to each other about Ryanair has been moved to begin to change. It helped! Ryanair has said publicly it will recognize workers in unions and commits to negotiate collective labour agreements (CLA’s) with unions for flight crew now. And in Mai 2018 Ryanair offered ver.di a recognition agreement. Negotiations are in process.
      </p>

       <TextHeadline>Join our community</TextHeadline>

      <p>
        Organized at our union verdi, our goal is to improve working and income conditions through collective labour agreements, ensuring that Ryanair respects national law, workers rights and co-determination of workers in making decisions about workplace issues that affect all of us. And we need you for making that happen. Join our community and become a verdi member!
      </p>

       <TextHeadline>You’ll never walk alone</TextHeadline>

      <p>
         We are International, we are Cabin Crew United. We will not change Ryanair alone in Germany, to take on a multinational company we believe in a strong multinational approach.  We‘re working internationally closely with our long standing partner unions within the International Transport-Workers Federation (ITF) and European Transport-Workers Federation (ETF) which are the strongest aviation federations in Europe.
         Together with our union partners at the ETF and ITF we are running the European Network www.cabincrewunited.org This networks coordinates bases across Europa and ensures that Ryanair can´t pit one base against another.
      </p>
    </Text>

    <Quote text=" Having to pay for food and water at 35,000 feet. It’s just ridiculous." />

    <Facts
      title="Facts"
      items={[
        {
          number: '65%',
          text: `
            of Ryanair’s cabine crew say theer is too much pressure on sales targets
          `
        },

        {
          number: '65%',
          text: `
            of Ryanair’s cabine crew say theer is too much pressure on sales targets
          `
        },

        {
          number: '65%',
          text: `
            of Ryanair’s cabine crew say theer is too much pressure on sales targets
          `
        },

        {
          number: '65%',
          text: `
            of Ryanair’s cabine crew say theer is too much pressure on sales targets
          `
        },
      ]}
    />

    <Cta
      image={require('../static/images/become-member.jpg')}
      title="To help win lasting change at Ryanair"
      target="https://my-ryanair-cabin-crew-job.typeform.com/to/mkOr7o"
      label="Become a ver.di member"
    />

    <Footer title="Time to change at Ryanair" />
  </Layout>
);
