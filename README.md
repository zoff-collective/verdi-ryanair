## Development

### Install dependencies

`npm install`

### Static export

The website is built using next.js, so it can be rendered server-side and exported
into static html files. In order to do so, please run:

`npm run export`

This will create a new folder `/dist` at which you point your webserver to serve
the content. If you deploy the site on netlify, this is the folder, which you
have to point your domain settings to.

### Development mode

`npm run dev`

### Lint files

`npm run lint`
