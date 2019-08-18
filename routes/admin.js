const fs      = require( 'fs' );
const express = require( 'express' );
const router  = express.Router();

//inx_004
router.get( '/new-book', ( req, res ) => {
    res.write( '<h1>New Book</h1>' );
    res.write( '<form action="/new-book" method="POST" >' );
    res.write( '<input type="text" name="bookName" placeholder="Book Name" />' );
    res.write( '<button type="submit">Enter Book</button>' );
    res.write( '</form>' );
    res.write( '<div><a href="/">Home</a></div>' );
    res.send();
} );

//inx_005
router.post( '/new-book', ( req, res ) => {
    fs.appendFile( './data/books.txt', `\n${req.body.bookName}`, ( err ) => {
        if ( err ) {
            debugger;
        }

        res.redirect( '/all-books' ); //inx_006
    } );
} );

module.exports = router;