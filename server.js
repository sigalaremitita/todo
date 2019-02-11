var express= require('express');
var app = express();
var PORT =process.env.PORT || 3000;

var todo= [{
    id:1,
 descriptio: 'meet mon for lunch',
 completed: false
},
{
    id:2,
    descriptio: 'mgo to the market',
    completed: false
},
{
    id:3,
descriptio: 'i am a king',
completed: true}];


app.get('/', function(req, res){
    res.send('totdo api');
});
app.get('/todos', function(req, res){
  res.json(todo);
});
 app.get('/todos/:id', function(req,res){
     
    var todoId= req.params.id;
    var match;
    todo.forEach(function(tod) {
        if (todoId==tod.id) {
           match =tod;
        }
    });
     if(match){
         res.json(match);
     }else{res.status(404).send();}
     
     res.send('asking '+ req.params.id);
 });
app.listen(PORT, function(){
    console.log('express listening on port'+ PORT );    
});