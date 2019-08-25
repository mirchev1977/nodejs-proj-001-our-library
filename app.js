const express    = require( 'express' );
const bodyParser = require( 'body-parser' );
const utilities  = require( './utilities' );

utilities.rewriteFile( './data/books_templ.txt', './data/books.txt' );

const app     = express();

const routesLibrary = require( './routes/library' );
const routesAdmin   = require( './routes/admin'   );

app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( routesLibrary );
app.use( routesAdmin   );

app.listen(  process.env.PORT || 3000 );
