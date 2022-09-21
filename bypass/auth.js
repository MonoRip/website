var blacklistednames = [''] 
function crash(){
    while(true){while(true){while(true){while(true){while(true){while(true){window.location.reload(true)}}}}}}
}
function authenticate(name){
alert("you have been authenticcated")
}
var inpname = prompt("Name(this is your real name)")
for(i in blacklistednames){
    if(inpname.toLowerCase() == i.toLowerCase()){
        crash();
    }
}
authenticate(inpname);
