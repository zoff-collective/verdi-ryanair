import 'isomorphic-fetch';

import { Component } from 'react';
import { DOMParser } from 'xmldom';
import xmltojson from 'xmltojson';

const xmlStringToJSON = str => {
  xmltojson.stringToXML = string =>
        new DOMParser().parseFromString(string, 'text/xml');

  return xmltojson.parseString(str);
};

const getItems = json => json.rss[0].channel[0].item;

export default (source, Child) => {
  return class extends Component {
    static async getInitialProps() {
      const res = await fetch(source);
      const str = await res.text();
      const obj = xmlStringToJSON(str);
      const items = getItems(obj);

      return { items };
    }

    render() {
        return <Child {...this.props}/>
    }
  }
};
