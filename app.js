let password = "";
 let passwords = [];
 let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let charUpperCase = '';
 
  

function create(){
   let use = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*-";
let passLength = parseInt(document.getElementById('passLen').value);
console.log(passLength);
  if(isNaN(passLength)){
    alert("That's not a number");
    reset();
  }
  else if(passLength < 10){
    alert("Password must be longer or equal to 10 characters!");
    reset();
  }else{
    for(let j = 0; j < passLength; j++){
      let randUpper = Math.floor(Math.random() * passLength);
      charUpperCase = upper.substring(randUpper,randUpper+1);
     for(let i = 0; i < passLength; i++){
        let random = Math.floor(Math.random() * ((use.length)));
  
        password += use.substring(random, random + 1);
     }
   //  password = password.replace(/[a-z]/, charUpperCase);
  
     passwords.push([password]);
     password = "";
  
      document.getElementById("data").innerHTML += `
      ${passwords[j]}`;
    }
  
    document.getElementById('passLen').value = "";
    passwords = [];
    
  }
}

function reset(){
 /*  let c = document.getElementById("data");
  c.innerHTML = '';
  password = "";
 passwords = [];
 charUpperCase = '';document.getElementById('passLen').value = ""; */
 location.reload();
}

