const express = require( 'express' );
const app     = express();

const routesLibrary = require( './routes/library' ); //inx_001

app.use( routesLibrary ); //inx_003

app.listen( 3000 );