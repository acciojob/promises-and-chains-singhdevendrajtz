//your JS code here. If required.
const form_=document.querySelector("#ageform")
const btn=document.querySelector("#btn")
const name_=document.querySelector("#name")
const age_=document.querySelector("#age")

btn.addEventListener('click',function(e){
	 e.preventDefault();
	const name = name_.value.trim();
  const age = parseInt(age_.value, 10);

	  // Validate that inputs are not empty
  if (name === '' || isNaN(age)) {
    alert('Please enter valid details');
    return;
  }

  // Create and return a new Promise
  const userPromise = new Promise((resolve, reject) => {
    // Check age after a 4-second delay
    setTimeout(() => {
      if (age >= 18) {
        resolve(name); // Resolve with the user's name
      } else {
        reject(name); // Reject with the user's name
      }
    }, 4000); // 4-second delay
  });

  // Handle the promise result using .then() and .catch()
  userPromise.then((userName) => {
    alert(`Welcome, ${userName}. You can vote.`);
  }).catch((userName) => {
    alert(`Oh sorry ${userName}. You aren't old enough.`);
  });
});