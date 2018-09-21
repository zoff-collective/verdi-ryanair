import Cta from '../components/cta';
import Demands from '../components/demands';
import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import Quote from '../components/quote';
import Layout from '../components/layout';
import Text from '../components/text';

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
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
        ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
        ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
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
