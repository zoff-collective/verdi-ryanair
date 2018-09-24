import Head from 'next/head';

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
    <Head>
      <title>Time for change at Ryanair</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header
      name="Rights at Ryanair"
      href="https://verkehr.verdi.de/branchen/luftverkehr/fluggesellschaften/ryanair"
      navigation={[['Cabin Crew', '/', true], ['Guardians', '/guardians'], ['News', '/news']]}
    />

    <Hero title="Time for change at Ryanair" image={require('../static/images/hero.jpg')} />
    
     <Text title="Cabin crew">
      <p>
        Cabin crew at Ryanair are joining together in ver.di to demand Ryanair change in Germany and across Europe. By uniting in ver.di, cabin crew at Ryanair are joining the largest and most powerful aviation union in Germany. Ver.di is the only union with a proven track record of winning real cabin crew victories at low-cost carriers.
        In the last three weeks cabin crew at all bases were surveyed by union activist about their priorities concerning the negotiations with Ryanair. The list below is the overview of the main concerns by Cabin crew. Now cabin crew from all bases in Germany participated in the survey.
      </p>
    </Text>

    <Demands
      title="What do we want!"
      groups={[
        {
          title: 'Economic Conditions',
          items: [
            'Fair living wage',
            'Guaranteed steady income',
            'Annual leave',
            'Seniority pay'
          ]
        },

        {
          title: 'National Law',
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
            'Promotion, transfer, disciplinary processes'
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

    <Quote
      text={`
        Feeling like I'm a number on a spreadsheet. I am the face of the
        company to the millions who fly Ryanair. I deserve respect.
      `}
    />

    <Text title="Making change">
      
      <TextHeadline>Demands for improvements</TextHeadline>
      
      <p>
        Our cabin colleagues at Ryanair have united in ver.di, and they’ve already started to make demands for improvements. For years, Ryanair had refused to negotiate Collective Labour Agreements (CLAs) with union workers. But after flight crew started organising in ver.di, Ryanair publicly said it would recognize workers in unions and has commited to negotiate CLAs.
      </p>
      
      <TextHeadline>Assemblies</TextHeadline>
      
      <p>
        Now Ryanair cabin crew are building on the momentum of the flight crew organising. Over the last few months, cabin crew in Germany and across Europe have begun talking to each other about uniting in ver.di. We’re holding assemblies where cabin crew come together to talk about the change we need and how to win it.
      </p>
      
       <TextHeadline>Strikes</TextHeadline>
      
      <p>
        And on the 12th of september cabin crew organized in ver.di decided to join the pilots at Ryanair for the first strike of cabin crew and pilots in Germany. The strike grounded 150 planes in Germany. Now we hope that the company moves, so that we can reach an agreement in Germany. On the same time we are sure that every step on the negotiation table is a reflection of the strength of the union on the bases. Thats why we will strengthen the network of organization of the cabin crew at each of the bases in Germany.
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
          number: '40%',
          text: `
            of Ryanair’s cabine crew feel stresses about getting sick
          `
        },

        {
          number: '65%',
          text: `
            of Ryanair’s cabine crew say theer is too much pressure on sales targets
          `
        },

        {
          number: '40%',
          text: `
            of Ryanair’s cabine crew feel stresses about getting sick
          `
        }
      ]}
    />

    <Text title="How do we win!">
      <TextHeadline>Times are changing</TextHeadline>

       <TextHeadline>Organising</TextHeadline>
      
      <p>
        A decade ago, EasyJet workers faced many of the problems we do now. But by organising in ver.di, they won a living wage and better working conditions. Today ver.di has members at EasyJet and other low-cost carriers like Eurowings.
      </p>

      <TextHeadline>Winning standard-setting agreements</TextHeadline>

      <p>
        Ver.di is the only union with real experience with low-cost carriers. Unlike other cabin crew unions, ver.di is not a Lufthansa-only union in disguise. We have experience winning standard-setting agreements for cabin crew at low-cost carriers.
      </p>

    </Text>

    <Quote text=" There’s way too much pressure around sales targets. Cabin crew jobs should be about safety first, not sales! " />

    <Text title="How does it work?">

      <TextHeadline>Ver.di</TextHeadline>

      <p>
        Ver.di is the only German civil aviation union. We organise all people working in the civil aviation industry, from cockpit to cabin crews and from airport to ground-handling workers. We have 3,000 collective labor agreements in civil aviation alone that ensure our members have good working conditions and a living wage. Our many thousand cabin crew members have achieved collective agreements at EasyJet, Eurowings, TUIfly, Lufthansa, European Air Transport and many other carriers.
      </p>

      <TextHeadline>Unity is strength!</TextHeadline>

      <p>
        We also unite other service workers, and with 2 million members overall ver.di is the biggest service trade union in the world.
        The name ver.di stands for Vereinte Dienstleistungsgewerkschaft – United Services Union.
        We, ver.di, are one union for all. We consolidate the interest of all our members — and by working together empower each one of us.
        We create unity out of diversity. And in unity is strength!
      </p>

      <TextHeadline>Laws to protect worker rights</TextHeadline>

      <p>
        We are a powerful voice for workers both on and off the job. We win collective labour agreements, we help create and advise works council elected by all employees, and we protect each worker’s individual rights by giving legal aid and advice.
        We also inform the public about the importance of unions, and we fight at the local, national and regional level for laws to protect worker rights.
      </p>

    </Text>

    <Cta
      image={require('../static/images/become-member.jpg')}
      title="Want to win improvements with your co-workers in ver.di?"
      target="https://mitgliedwerden.verdi.de/beitritt/verdi"
      label="Become a ver.di member"
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
