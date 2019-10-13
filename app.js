const FirstName = document.getElementById('firstname');
const SecondName = document.getElementById('secondname');
const LastName = document.getElementById('lastname');
const Age = document.getElementById('age');
const Description = document.getElementById('description');
const Photo = document.getElementById('photo');

const ApiUrl = 'https://localhost:5001/'

//const apiResponse = async url =>{
  //  const response = await fetch(url);
    // const data = response.json()
    // console.log


    let getsimpsonsData = async ()=> {
        const response = await fetch(`${ApiUrl}simpsons/character/2`);
        const simpsons = await response.json();
        console.log(simpsons);
        const {firstName, secondName, lastName, age, description} = simpsons;
        const photo = simpsons;
        
        FirstName.innerText = firstName;
        SecondName.innerText = secondName;
        LastName.innerText = lastName;
        Age.innerText = age;
        Description.innerText = description;
        Photo.src = photo;
    
    };
    
    getsimpsonsData();