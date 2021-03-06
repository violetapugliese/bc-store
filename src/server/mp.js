const express = require('express');
const app = express();
const bodyParser = require('body-parser');



// SDK de Mercado Pago
const mercadopago = require('mercadopago');

//middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Agrega credenciales
mercadopago.configure({
  access_token:
    'APP_USR-6623451607855904-111502-1f258ab308efb0fb26345a2912a3cfa5-672708410',
});

//routes
app.post('/test', (req, res) => {
  // Crea un objeto de preferencia

  let preference = {
    items: [ { 
      title: req.body.title,
      unit_price: parseInt(req.body.price),
      quantity: 1,
     } ],
     back_urls: {
      success: "http://localhost:3000",
      failure: "http://www.failure.com",
      pending: "http://www.pending.com"
  },
    auto_return: "approved",
  }

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.redirect(response.body.init_point);
    })
    .catch(function (error) {
      console.log(error);
    });
});

//server

app.listen(3030, () => {
  console.log('Server on port 3030 MP');
});
