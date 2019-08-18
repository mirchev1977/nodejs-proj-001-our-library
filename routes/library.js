const fs         = require( 'fs' );
const express    = require( 'express' );
const router  = express.Router();

router.get( '/', ( req, res, next ) => {
    res.write( '<h1>Welcome to our library!</h1>' );
    res.write( '<div><a href="/all-books">All Books</a></div>' );
    res.write( '<div><a href="/new-book">New Book</a></div>' );
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

            resolve( html );
        } ); 
    } );

    return promise;
};

router.get( '/all-books', ( req, res, next ) => {
    res.write( '<h1>All Books</h1>' );
    fileReader( './data/books.txt' ).then( books => {
        res.write( books );
        res.write( '<div><a href="/">Home</a></div>' );
        res.send();
    } ).catch( err => {
        debugger;
    } );

} );

module.exports = router;