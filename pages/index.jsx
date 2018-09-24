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
    
    <Text title="Our Strategy">

      <TextHeadline>Good wages</TextHeadline>

      <p>
        Profits are high at Ryanair. It can afford to do better for its cabin crew. Ver.di has proved at EasyJet that low-cost carriers can have good wages and working conditions for cabin crew and still be profitable. 
      </p>

      <TextHeadline>Living wage and working conditions</TextHeadline>

      <p>
        Our goal at Ryanair is to win a living wage and improve working conditions through a collective labor agreement. Those agreements ensure that Ryanair respects national law, workers rights and co-determination of workers in making decisions about workplace issues that affect them.
      </p>

      <TextHeadline>Strong multinational approach</TextHeadline>

      <p>
        To organise a multinational company like Ryanair, we believe in a strong multinational approach. We know that one base alone — and even Germany alone — can’t take on Ryanair by itself. That’s why we‘re working internationally with our partner unions within the International Transport-Workers Federation (ITF) and European Transport-Workers Federation (ETF), which are the strongest aviation federations in Europe. We unite cabin crews in more than 14 countries and together we can coordinate workers to ensure that Ryanair can’t pit one base against another.
      </p>
      
      <TextHeadline>Winning real change</TextHeadline>

      <p>
        Together, we’ll continue growing our existing network of Ryanair cabin crew at bases across Europe. And we’ll go from sharing our concerns about the company to winning real change at Ryanair. 
      </p>

    </Text>
    
     <Quote text=" There’s way too much pressure around sales targets. Cabin crew jobs should be about safety first, not sales! " />

    <Text title="Protections and Security">

      <TextHeadline>Legal rights in our Collective Labour Agreements</TextHeadline>

      <p>
        Ver.di members have important legal rights in the Collective Labor Agreements (CLAs) they negotiate with employers and then vote to approve. And they receive support when they have to enforce their rights. Non-members can only hope that the employer grants collectively agreed payments and benefits — they do not have any legal claim to them.
      </p>

      <TextHeadline>Collective agreements regulate working conditions better than many laws</TextHeadline>

      <p>
        In addition to wages, collective agreements also regulate working times, vacation entitlements, vacation bonuses and many other benefits. For example, many collective agreements include the right to 30 days of vacation on the basis of a five-day week. Without a collective agreement or equivalent employment contract, federal law applies — and vacation entitlement shrinks to a mere four weeks. Special payments such as vacation bonuses are only secured by collective agreements. This also applies to release from work in special cases.
      </p>

      <TextHeadline>Competent legal advice and representation</TextHeadline>

      <p>
        An important service offered by ver.di is the provision of legal advice. Whether labour, or social law is involved, competent advisors are available to help members. And if a legal dispute arises, legal specialists offer not only advice but also comprehensive, free-of-charge legal protection — only for members, of course. ver.di legal protection even covers representation in court, if necessary. Some unions claim to provide legal support, but there is no other cabin crew union that provides even close to the same protection and quality as ver.di.
      </p>
      
        <TextHeadline>Strike pay during industrial disputes</TextHeadline>

      <p>
        Sometimes collective bargaining grinds to a halt or employers try to force through their own point of view and a strike becomes unavoidable. As employers do not continue to pay wages during strikes or lockouts, ver.di intervenes to help its members, providing strike pay to help them avoid financial hardship.
      </p>
      
        <TextHeadline>Affordable and fair membership fee</TextHeadline>

      <p>
        Usually, the ver.di membership fee is 1 percent of your regular monthly income. This means 1 percent out of your fixed basic pay (and, if available, fixed rank allowance). If you are paid by block hours, then you multiply your block hour rate by 65 to calculate the monthly income. Those who have more, pay more — those with less money pay less. Our members subscribe 1 percent of their basic gross income to support the union and enable it to operate effectively. And the jobless pay a reduced subscription. The subscription is also tax-deductible.
      </p>

    </Text>
    

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
