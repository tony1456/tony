//Promise封装函数
function PromiseAjax(option){
return new Promise(function(resolve,reject){
if(window.XMLHttpRequest){
var xhr=new XMLHttpRequest();	
}else{
var xhr=ActiveXObject('Microsoft'.'XMLHTTP');	
}
if(option.type=='get'||optiion.type=='GET'){
xhr.open(option.type,option.url+'?'+option.data+'&_='+new Date().getTime(),true);
xhr.send(null);	
}else if(option.type=='post'||option.type=='POST'){
xhr.open(option.type,option.url,true);
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send(option.data);	
}else{
alert('目前只支持get和post请求方式');	
}
xhr.onreadystatechange=function(){
if(xhr.readyState==4){
if(xhr.status==200){
resolve(xhr.responseText);	
}else{
reject(xhr.status);	
}	
}	
}	
})	
}