//your JS code here. If required.
const form_=document.querySelector("#ageform")
const btn=document.querySelector("#btn")
const name_=document.querySelector("#name")
const age_=document.querySelector("#age")
const name=age_.value;
const age=age_.value;

btn.addEventListener('click',function(e){
	console.log(name,age)
	if(name=="" || age=="")
	{
	alert("Please enter valid details.")
	}
	let prom= new Promise((resolve,reject)=>{
		setTimeout(()=>{
		if(age>=18)
		{
		resolve(name);
		}
			else
		{
			reject(name);
		}
		},4000)
	})
	prom.then((names)=>{
		alert("Welcome, . You can vote.")
	}).catch((names)=>{
alert("Oh sorry . You aren't old enough.")
	})
})
