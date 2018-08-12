/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function(){
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost', // string com o endereço do servidor
            27017, //porta de conexão
            {}
        ),
        {}
    );

    return db;
}

module.exports = function(){
    return connMongoDB;
}