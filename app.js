const express = require( 'express' );
const bodyParser = require( 'body-parser' ); //inx_001
const app     = express();

const routesLibrary = require( './routes/library' );
const routesAdmin   = require( './routes/admin'   );

app.use( bodyParser.urlencoded( { extended: false } ) ); //inx_002
app.use( routesLibrary );
app.use( routesAdmin   ); //inx_003

app.listen( 3000 );