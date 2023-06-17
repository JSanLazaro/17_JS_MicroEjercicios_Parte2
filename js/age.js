let form = document.licenseForm;
function printName(){
   console.log(form.wr_name.value); 
}
let age = form.wrAge;
age.addEventListener("change",(ev)=>{
    if(age.value>=18){
        alert("puedes conducir");
    }else{
        console.log("no puedes conducir");
    }
})
