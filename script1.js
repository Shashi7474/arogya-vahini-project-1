function generatePlan(){

let subjects=document.getElementById("subjects").value.split(",");
let examDate=new Date(document.getElementById("examDate").value);
let hours=document.getElementById("hours").value;

let today=new Date();

let days=Math.ceil((examDate-today)/(1000*60*60*24));

let planDiv=document.getElementById("plan");
planDiv.innerHTML="";

if(days<=0){
planDiv.innerHTML="Exam date invalid!";
return;
}

for(let i=1;i<=days;i++){

let subject=subjects[i % subjects.length];

let p=document.createElement("p");

p.innerHTML="Day "+i+": Study "+subject+" for "+hours+" hours";

planDiv.appendChild(p);

}

}