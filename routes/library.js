const fs         = require( 'fs' );
const express    = require( 'express' );
const router  = express.Router();

router.get( '/', ( req, res, next ) => {
    res.write( '<h1>Welcome to our library!</h1>' );
    res.write( '<div><a href="/all-books">All Books</a></div>' );
    res.write( '<div><a href="/new-book">New Book</a></div>' );
    res.send();
} );

const fileReader = ( file, sortBooks ) => {
    const promise = new Promise( ( resolve, reject ) => {
        fs.readFile( file, 'utf-8', ( err, data ) => {
            if ( err ) {
                reject( err );
            }
            let books = data.split( /\n/ );
            if ( sortBooks === 'DESC' ) {
                books.sort( (  a, b ) => {
                    return b.localeCompare( a );
                }  );
            } else {
                books.sort( (  a, b ) => {
                    return a.localeCompare( b );
                }  );
            }

            books = books.filter( liEl => { if ( liEl ) { return liEl; } } );

            const lis = books.map( book => `<li>${book}</li>` ).join( '' );
            const html = `<ul>${lis}</ul>`;

            resolve( html );
        } ); 
    } );

    return promise;
};

router.get( '/all-books', ( req, res, next ) => {
    res.write( '<h1>All Books</h1>' );
    res.write( '<p><a href="/all-books?sort=asc">Sort ASC</a>' );
    res.write( '<br /><a href="/all-books?sort=desc">Sort DESC</a></p>' );

    let sortBooks = 'ASC';
    if ( req.query[ 'sort' ] && req.query[ 'sort' ] === 'desc' ) {
        sortBooks = 'DESC';
    }

    fileReader( './data/books.txt', sortBooks ).then( books => {
        res.write( books );
        res.write( '<div><a href="/">Home</a></div>' );
        res.send();
    } ).catch( err => {
        debugger;
    } );

} );

module.exports = router;
