/* arrays de zapatos */

const menShoes = [
  {
    id: 1,
    img: "images/men/zapatos-hombres-1.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 2,
    img: "images/men/zapatos-hombres-2.jpg",
    description: "Atque velit facere id sit? Cumque velit laboriosam accusamus, quibusdam quisquam at doloribus illo tenetur dolore."
  },
  {
    id: 3,
    img: "images/men/zapatos-hombres-3.jpg",
    description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently."
  },
  {
    id: 4,
    img: "images/men/zapatos-hombres-4.jpg",
    description: "with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
]


const womenShoes = [
  {
    id: 1,
    img: "images/women/zapatos-mujer-1.jpg",
    description: "free from repetition, injected humour, or non-characteristic words etc."
  },
  {
    id: 2,
    img: "images/women/zapatos-mujer-2.jpg",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
  },
  {
    id: 3,
    img: "images/women/zapatos-mujer-3.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 4,
    img: "images/women/zapatos-mujer-4.jpg",
    description: "accompanied by English versions from the 1914 translation by H. Rackham."
  }
]

/* añadiendo los datos en men */

const men = document.getElementById('men-section');

menShoes.map((data) => {

  let divChild = document.createElement('div');
  divChild.className = 'card-body'

  let p = document.createElement('p')
  p.className = 'card-text'
  p.textContent = data.description

  let img = document.createElement('img')
  img.className = 'card-img-top'
  img.src = data.img

  let div = document.createElement('div');
  div.className = 'col-sm-6 col-md-3 card'

  divChild.appendChild(p);
  div.appendChild(img);
  div.appendChild(divChild);

  men.appendChild(div);
})


/* añadiendo los datos en women */

const women = document.getElementById('women-section');

womenShoes.map((data) => {

  let divChild = document.createElement('div');
  divChild.className = 'card-body'

  let p = document.createElement('p');
  p.className = 'card-text'
  p.textContent = data.description

  let img = document.createElement('img');
  img.className = 'card-img-top'
  img.src = data.img

  let div = document.createElement('div');
  div.className = 'col-sm-6 col-md-3 card'

  divChild.appendChild(p);
  div.appendChild(img);
  div.appendChild(divChild);

  women.appendChild(div)

})

/* cambio de clases dark mode */

const darkLightButton = document.getElementById('dark-light-button');
const darkLightIcon = document.getElementById('dark-light-icon');
const cartIcon = document.getElementById('cart-icon');

let navItems = document.getElementsByClassName('nav-items');
navItems = [...navItems]

console.log(navItems);

const infoNav = document.getElementById('info-nav');

const containerFluid = document.getElementById('container-fluid');

const shoesTitle = document.getElementsByClassName('shoes-title');
const listShoesTitle = [...shoesTitle]

let card = document.getElementsByClassName('card');
card = [...card]

const moreButton = document.getElementById('more-button');

const cotizacion = document.getElementById('cotizacion');


darkLightButton.addEventListener('click', () => {
  if (darkLightButton.className == 'bi bi-toggle-off') {

    darkLightButton.className = 'bi bi-toggle-on'
    darkLightButton.style.color = 'white'

    navItems.map(items => {
      items.style.color = 'white'
    })
    
    infoNav.style.border = 'var(--bordes) solid 1px'
    infoNav.style.borderTop = 'none'
    
    darkLightIcon.className = 'bi bi-moon-fill'
    darkLightIcon.style.color = 'white'
    
    containerFluid.className = 'container-fluid dark-mode'
    
    cartIcon.style.color = 'white'
    
    shoesTitle[0].style.background = 'transparent'
    shoesTitle[0].style.color = 'white'
    shoesTitle[0].style.border = 'solid 1px var(--bordes)'
    shoesTitle[0].style.borderLeft = 'none'
    shoesTitle[0].style.borderRight = 'none'
    shoesTitle[1].style.background = 'transparent'
    shoesTitle[1].style.color = 'white'
    shoesTitle[1].style.border = 'solid 1px var(--bordes)'
    shoesTitle[1].style.borderLeft = 'none'
    shoesTitle[1].style.borderRight = 'none'
    
    card.map((card)=>{
      card.style.background = 'var(--bg-dark-mode)'
      card.style.color = 'white'
      card.style.boxShadow = 'none'
      card.style.border = 'var(--bordes) solid 1px'
    })
    
    moreButton.style.background = 'white'
    moreButton.style.color = 'black'
    
    cotizacion.style.color = 'white'
    cotizacion.style.borderRadius = '5px'
    
    
  } else if (darkLightButton.className == 'bi bi-toggle-on') {
    
    darkLightButton.className = 'bi bi-toggle-off'
    darkLightButton.style.color = 'black'
    
    navItems.map(items => {
      items.style.color = 'black'
    })

    infoNav.style.border = 'black solid 1px'
    infoNav.style.borderTop = 'none'

    darkLightIcon.className = 'bi bi-brightness-high'
    darkLightIcon.style.color = 'black'
    
    containerFluid.className = 'container-fluid'
    
    cartIcon.style.color = 'black'
    
    shoesTitle[0].style.background = 'black'
    shoesTitle[0].style.color = 'white'
    shoesTitle[1].style.background = 'black'
    shoesTitle[1].style.color = 'white'
    
    card.map((card)=>{
      card.style.background = 'none'
      card.style.color = 'black'
      card.style.boxShadow = '0 0 3px 0'
      card.style.border = 'none'
    })
    
    moreButton.style.background = 'var(--black)'
    moreButton.style.color = 'white'
    
    
    cotizacion.style.color = 'black'
    cotizacion.style.borderRadius = '0'
  }
})
