const http = require('http');       //importamos http para servicios web

http.createServer( ( req, res ) => {

    //res.writeHead( 200, { 'Content-Type': 'application/json'});     //detallamos el tipo de respuesta en el head
    res.setHeader( 'Content-Disposition', 'attachment; filename=lista.csv');    // csv tipo de archivo de descarga
    res.writeHead( 200, { 'Content-Type': 'application/csv'});  // se aplica el tipo de archivo csv

    //crear dataos de una lista
    res.write('id, nombre\n');        // le mando un proceso el res (response)
    res.write('1, Fernando\n');        // le mando un proceso el res (response)
    res.write('2, Raul\n');        // le mando un proceso el res (response)
    res.write('3, Juan\n');        // le mando un proceso el res (response)
    
    res.end();                      //debo indicar que temino
})
.listen(8080);      //puerto a escuchar

console.log('Escuchando el puerto', 8080);