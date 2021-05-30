import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';

dotenv.config();

const { ENV, PORT } = process.env;
const app  = express();


if (ENV == 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port : PORT,  hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} 

app.get('*', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <link href="assets/app.css" type="text/css"> 
      <title>My store</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="assets/app.js" type="text/javascript"></script>
    </body>
  </html>
  `);
});  

app.listen(PORT, (err) => {
  if(err) console.log(err);
  else console.log('server running in port 3005');
});