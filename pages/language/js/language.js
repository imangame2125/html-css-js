const languages = [
  {
    language: 'Persian',
    sayHi: 'salam',
    sayHowAreYou: 'chetori'
  },

  {
    language: 'Engeland',
    sayHi: 'Hi',
    sayHowAreYou: 'How are you'
  },


  {
    language: 'spanish',
    sayHi: 'Hola',
    sayHowAreYou: 'como'
  },
]

const input = document.createElement('input')
const button = document.createElement('button')
const text = document.createElement('p')
const textPasokh = document.createElement('p')
document.body.appendChild(input)
document.body.appendChild(button)
button.textContent = 'Click'
document.body.appendChild(text)

document.body.appendChild(textPasokh)

button.addEventListener('click', () => {
 
  let inputValue = input.value.toLowerCase();
 
  let found = false;

  let selectedLanguage = languages.find((item) => {
    if (item.sayHi.toLowerCase() === inputValue) {
      return true;
    }
    else {
      return false;
    }
  })



  if (selectedLanguage !== undefined) {
    text.textContent = selectedLanguage.language;
  }
  else {
    text.textContent = 'Invalid';
  }
  let selectedHowAreYou = languages.find((item) => {
    if (item.sayHi.toLocaleLowerCase() === inputValue) {
      return true
    } else {
      return false
    }
  })
  if (selectedHowAreYou !== undefined) {
    textPasokh.textContent = selectedHowAreYou.sayHowAreYou
  } else {
    textPasokh.textContent = 'invalid'
  }




})
const myMind = [
  {
    name: 'Ali',
    age: 20,
    height: 187,
    weight: 80,
    country: 'Iran',
    interest: 'football, basketBall,Tv,news'
  },
  {
    name: 'john',
    age: 30,
    height: 180,
    weight: 120,
    country: 'Engelnad',
    interest: 'basketBall,Tv,news'
  },
  {
    name: 'Jenifer',
    age: 40,
    height: 170,
    weight: 50,
    country: 'America',
    interest: 'football,Tv,news'
  },
  {
    name: 'Demir',
    age: 50,
    height: 165,
    weight: 85,
    country: 'Turkie',
    interest: 'football,news'
  },
  {
    name: 'Abdolah',
    age: 28,
    height: 190,
    weight: 110,
    country: 'Ghatar',
    interest: 'football, basketBall,'
  },

]

const myInput = document.createElement('input');
document.body.appendChild(myInput);
const myButton = document.createElement('button');
const myPayam = document.createElement('p')
document.body.appendChild(myButton)
document.body.appendChild(myPayam)
myButton.textContent = 'click'


myButton.addEventListener('click', () => {
  let inputValue2 = myInput.value.toLowerCase()
  let myFind = myMind.findIndex((item) => {
    if (inputValue2 === item.name.toLowerCase()) {
      return true
    } else {
      return false
    }
  })

  console.log(myMind[myFind]);


})