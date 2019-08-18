//inx_002
const fs      = require( 'fs' );
const express = require( 'express' );
const router  = express.Router();

//inx_004
router.get( '/', ( req, res, next ) => {
    res.write( '<h1>Welcome to our library!</h1>' ); //inx_005
    res.write( '<div><a href="/all-books">All Books</a></div>' );
    res.send();
} );

const fileReader = ( file ) => {
    const promise = new Promise( ( resolve, reject ) => {
        fs.readFile( file, 'utf-8', ( err, data ) => {
            if ( err ) {
                reject( err );
            }
            const books = data.split( /\n/ );
            const lis = books.map( book => `<li>${book}</li>` ).join( '' );
            const html = `<ul>${lis}</ul>`;

            resolve( html ); //inx_009
        } ); 
    } );

    return promise;
};

//inx_006
router.get( '/all-books', ( req, res, next ) => {
    res.write( '<h1>All Books</h1>' ); //inx_007
    fileReader( './data/books.txt' ).then( books => {
        res.write( books ); //inx_008
        res.write( '<div><a href="/">Home</a></div>' );
        res.send();
    } ).catch( err => {
        debugger;
    } );

} );

module.exports = router;