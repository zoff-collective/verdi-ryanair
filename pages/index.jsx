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

    <Text title="Membership">
      <p>Individual Protections and Security that ver.di cabin crew members benefit from….</p>

      <TextHeadline>Legal rights derived from collective agreements</TextHeadline>

      <p>
        ver.di members employed in companies subject to collective agreements enjoy the protection
        offered by such agreements. And they receive support when they have to enforce their rights.
        Non-members can only hope that the employer grants collectively agreed payments – they do
        not have any legal claim to them.
      </p>

      <TextHeadline>Competent legal advice and representation</TextHeadline>

      <p>
        An important service offered by ver.di is the provision of legal advice. Whether labour, or
        social law is involved, competent advisors are available to help members. And if a legal
        dispute arises, legal specialists offer not only advice but also comprehensive,
        free-of-charge legal protection – only for members, of course. ver.di legal protection even
        covers representation in court, if necessary. Some unions claim to provide legal support,
        but there is no other Cabin Crew Union, which provides even close to the same protection and
        quality as ver.di
      </p>

      <TextHeadline>Strike pay during industrial disputes</TextHeadline>

      <p>
        Sometimes collective bargaining grinds to a halt or employers try to force through their own
        point of view and industrial action becomes unavoidable. As employers do not continue to pay
        wages during strikes or lockouts, ver.di intervenes to help its members, providing strike
        pay to help them avoid financial hardship.
      </p>

      <TextHeadline>Membership fee is 1% of your regular monthly income.</TextHeadline>

      <p>
        This means out of your fixed basic pay (and, if available, fixed rank allowance). If you are
        paid by block hours only than you have to multiply your block hour rate with 65 for
        calculating the monthly income. Those who have more, pay more – those with less money pay
        less. Our members subscribe one percent of their basic gross income to support the union and
        enable it to operate effectively. And the jobless pay a reduced subscription. The
        subscription is also tax-deductible.
      </p>
    </Text>

    <Cta
      image={require('../static/images/become-member.jpg')}
      title="To help win lasting change at Ryanair"
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
