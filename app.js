const http    = require( 'http' );
const fs      = require( 'fs' );
const express = require( 'express' );

const app    = express();

const routesLibrary = require( './routes/library' );

app.use( routesLibrary );

app.listen( 3000 );