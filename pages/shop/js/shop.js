let cakes = document.querySelectorAll('.container')

cakeButton = document.querySelector('#cakes');
cakeButton.addEventListener('click', () => {
  for (let i = 0; i < cakes.length; i++) {
    let cake = cakes[i]
    if (cake.dataset.type === 'cake') {
      cake.style.display = 'flex'
    } else {
      cake.style.display = 'none'
    }
  }
})

cupCakesButton = document.querySelector('#cupcakes');
cupCakesButton.addEventListener('click', () => {
  cakes.forEach(cake => {

    if (cake.dataset.type === 'cup-cake') {
      cake.style.display = 'flex'
    } else {
      cake.style.display = 'none'
    }
  });
})




sweetButton = document.querySelector('#sweets');
sweetButton.addEventListener('click', () => {
  cakes.forEach(cake => {

    if (cake.dataset.type === 'sweet') {
      cake.style.display = 'flex'
    } else {
      cake.style.display = 'none'
    }
  });
})





doughnutsButton = document.querySelector('#doughnuts');
doughnutsButton.addEventListener('click', () => {
  cakes.forEach(cake => {

    if (cake.dataset.type === 'doughnuts') {
      cake.style.display = 'flex'
    } else {
      cake.style.display = 'none'
    }
  });
})




allButton = document.querySelector('#all');
allButton.addEventListener('click', () => {
  cakes.forEach(cake => {
    cake.style.display = 'flex'
  });
})

let input = document.querySelector('#input');
input.addEventListener('input', () => {
  let text = input.value;
  cakes.forEach(cake => {
    let nameElement = cake.querySelector('.name')
  
    
      if(nameElement.textContent.indexOf(text) !== -1) {
      cake.style.display = 'flex'
    }
    else {
      cake.style.display = 'none'
    }
  });

})