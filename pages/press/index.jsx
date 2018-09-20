import 'isomorphic-fetch';

import { DOMParser } from 'xmldom';
import xmltojson from 'xmltojson';

import Header from '../../components/header';
import Layout from '../../components/layout';

import { Component } from 'react';

const SOURCE = 'https://verkehr.verdi.de/themen/nachrichten/rss';

const withNews = (source, Child) => {
  return class extends Component {
    static async getInitialProps() {
      const res = await fetch(source);
      const str = await res.text();

      xmltojson.stringToXML = string =>
        new DOMParser().parseFromString(string, 'text/xml');

      return { news: xmltojson.parseString(str) };
    }

    render() {
        return <Child {...this.props}/>
    }
  }
};

export default withNews(SOURCE, ({ news }) => (
  <Layout>
    <Header
      name="Rights at Ryanair"
      navigation={[
        ['Members', '/'],
        ['Guardians', '/guardians'],
        ['Press', '/press', true],
      ]}
    />

    {news.rss[0].channel[0].item.map(({ title, description, link, date }) => (
      <div>
        <small>{date[0]._text}</small>
        <h3>{title[0]._text}</h3>
        <p>{description[0]._text}</p>
        <a href={link[0]._text}>Weiterlesen</a>
      </div>
    ))}
  </Layout>
));
