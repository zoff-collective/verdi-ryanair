import Cta from '../components/cta';
import Demands from '../components/demands';
import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import Quote from '../components/quote';
import Layout from '../components/layout';
import Text from '../components/text';
import TextHeadline from '../../components/text-headline';

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

    <Quote text="We are a global federation of unions working to improve the lives of aviation and transport sector workers like you." />

    <Text title="We are many!">
            
      <p>
        We are at every German Ryanair base. We are with Ver.di. With 2 million members Ver.di is the biggest service trade union in the world. The name Ver.di stands for Vereinte Dienstleistungsgewerkschaft – United Services Union. We, ver.di, are one union for all. We consolidate the interest of our members – and by working together empower each of us. We create unity out of diversity. 
      </p>

      <Quote text=" Having to pay for food and water at 35,000 feet.  It’s just ridiculous." />
      
       <Text title="How do we win!">
      
       <TextHeadline>Times are changing</TextHeadline>
      
      <p>
        For many years, Ryanair didn’t accept unions as negotiation partner and was not willing to negotiate Collective Labour Agreements under national law. But times are changing, and so is Ryanair.
      </p>
            
    </Text>

    <Cta
      image={require('../static/images/become-member.jpg')}
      title="To help win lasting change at Ryanair"
      target="https://my-ryanair-cabin-crew-job.typeform.com/to/mkOr7o"
      label="Become a ver.di member"
    />

    <Footer title="Time to change at Ryanair" />
  </Layout>
);
