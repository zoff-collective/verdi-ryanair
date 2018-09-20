import 'isomorphic-fetch';

import { DOMParser } from 'xmldom';
import xmltojson from 'xmltojson';

import Header from '../../components/header';
import Layout from '../../components/layout';
import News from '../../components/news';

import { Component } from 'react';

const SOURCE = 'https://verkehr.verdi.de/themen/nachrichten/rss';

const xmlStringToJSON = str => {
  xmltojson.stringToXML = string =>
        new DOMParser().parseFromString(string, 'text/xml');

  return xmltojson.parseString(str);
};

const getItems = json => json.rss[0].channel[0].item;

const withNews = (source, Child) => {
  return class extends Component {
    static async getInitialProps() {
      const res = await fetch(source);
      const str = await res.text();
      const obj = xmlStringToJSON(str);
      const news = getItems(obj);

      return { news };
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

    {news && <News title="Latest News" items={news} />}
  </Layout>
));
