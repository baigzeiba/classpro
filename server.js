
var express= require('express');
var hbs=require('hbs');
var path=require('path');
var bodyParser=require('body-Parser');
//user model
var usersController=require('./controllers/users');


var app=express(); //creates express server

app.set('views',path.join(__dirname,'views'));
        
app.set('view engine','html');
app.engine('html',hbs.__express);
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended:false
    })
);

app.use(express.static('public'));

//routes
app.get('/',function(request,response){
            
  
    response.render('index',{
        title:"home",
                             user:user.getUsers

 });
});

app.get('/users/:id',function(request,response){
   var user=users.getUser(request.params.id);
    response.render('profile',{ //render allows to send data 
        title:"user profile",
                             user:user

 });
});


app.get('/login',function(request,response){
    //console.log(users.getUsers());//debugging
    response.render('login',{  //sendfile only send d file..html page  
      title:'login'
        });

 });










app.get('/aboutus',function(request,response)
        {
    response.render('aboutus',{    
      title:'about us'
        });
             });


app.get('/signup',function(request,response)
        {
    response.render('signup',{   
      title:'signup'
        });
 });

app.post('/login', usersControllers.postLogin);
app.listen(3000);//listen at port
