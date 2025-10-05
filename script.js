//your JS code here. If required.
const form_=document.querySelector("#ageform")
const btn=document.querySelector("#btn")
const name_=document.querySelector("#name")
const age_=document.querySelector("#age")

btn.addEventListener('click',function(e){
	 e.preventDefault();
	console.log(name,age)
	if(name.value=="" || age.value=="")
	{
	alert("Please enter valid details.")
	}
	let prom= new Promise((resolve,reject)=>{
		setTimeout(()=>{
		if(age.value>=18)
		{
		resolve(name.value);
		}
			else
		{
			reject(name.value);
		}
		},4000)
	})
	prom.then((names)=>{
		alert("Welcome, . You can vote.")
	}).catch((names)=>{
alert("Oh sorry . You aren't old enough.")
	})
})
