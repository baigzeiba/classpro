var userModel=require('../models/Users');

exports.getUser=function(){
    
           
    return userModel.users;
}



exports.getUser=function(id){
    for(var i=0;i<userModel.users.length;i++)
    {
        if(userModel.users[i].id==id)
           
    return userModel.users[i];
}
}


exports.compareAuth=function(username,password )
{
 for(var i=0; i<userModel.users.length;i++)
 {
     if(userModel.users[i].username==username && userModel.users[i].password==password)
 {
  return userModel.users[i];
   // return true; 
 }
 }
 return false;   
    
}

exports.postLogin=function(request,response ){
    //console.log(request.body);
    //console.log(request.body.email);
    //console.log(request.body.password);
    
    var result=users.compareAuth(request.body.email,request.body.password);
if   (result)
{
    response.send("login successfull ...hi "+result.name); 
}
    else 
    {
       response.send("failed");  
    }
   
}