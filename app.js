//inx_001
const http = require( 'http' );
const fs   = require( 'fs' );

        //inx_002
const server = http.createServer( ( req, res ) => {
                                    //inx_004
    fs.writeFile( './data/users', 'Pesho Atanasov Peshev', ( err ) => {
        if ( err ) {
            debugger;
        }

        debugger;
    } );

    res.write( '<h1>Hello World</h1>' );
    res.end();
} );

        //inx_003
server.listen( 3000 );