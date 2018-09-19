import Cta from '../components/cta';
import Demands from '../components/demands';
import Header from '../components/header';
import Hero from '../components/hero';
import Quote from '../components/quote';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <Header name="Cabin crew united" />

    <Hero title="Time for change at Ryanair" />

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
      title="Book a date"
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      target="https://my-ryanair-cabin-crew-job.typeform.com/to/mkOr7o"
      label="Book a date"
    />

    <Quote text="We are a global federation of unions working to improve the lives of aviation and transport sector workers like you." />
  </Layout>
);
