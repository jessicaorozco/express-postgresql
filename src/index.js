const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 3000;
// errors
const { logErrors, errorHandler, boomErrorHanddler} = require('./middleware/error.handler');
const validatorHandler = require('./middleware/validator.handler');
// Routes
app.use( require('./routes/indexRoute'));
app.use( require('./routes/productList'));
app.use( require('./routes/usersRoute'));

const whiteList = ['http://localhost:8080']
const options = {
  origin: (origin, callback) => {
    if(whiteList.includes(origin || !origin)){
      callback(null, true);
    }else{
      callback(new Error('No permited'))
    }
  }
}


// Middleware
app.use(cors(options));
app.use(express.json());
// app.use(logErrors);
// app.use(boomErrorHanddler);
// app.use(errorHandler);
// app.use(validatorHandler);


app.listen(port, () => {
  console.log(`server in port ${port}`)
});
