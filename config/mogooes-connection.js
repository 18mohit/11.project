const mongooes = require('mongoose');

mongooes
.connect('mongodb://127.0.0.1:27017/project')
.then(function(){
    console.log('connected');
})
.catch(function(err){
    console.log(err);
})

module.exports = mongooes.connection;