const http = require( 'http' );
const fs   = require( 'fs' );

const server = http.createServer( ( req, res ) => {
    fs.writeFile( './data/users', 'Pesho Atanasov Peshev', ( err ) => {
        if ( err ) {
            debugger;
        }

        debugger;
    } );

    res.write( '<h1>Hello World</h1>' );
    res.end();
} );

server.listen( 3000 );