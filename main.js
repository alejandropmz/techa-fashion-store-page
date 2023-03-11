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
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 3,
    img: "images/men/zapatos-hombres-3.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 4,
    img: "images/men/zapatos-hombres-4.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
  }
]


const womenShoes = [
  {
    id: 1,
    img: "images/women/zapatos-mujer-1.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 2,
    img: "images/women/zapatos-mujer-2.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 3,
    img: "images/women/zapatos-mujer-3.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 4,
    img: "images/women/zapatos-mujer-4.jpg",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
  }
]

/* añadiendo los datos en men */

const men = document.getElementById('men-section');

menShoes.map((data) => {
  let p = document.createElement('p')
  p.className = 'card-text'
  p.textContent = data.description

  let divChild = document.createElement('div');
  divChild.className = 'card-body'

  let img = document.createElement('img')
  img.className = 'card-img-top'
  img.src = data.img

  let div = document.createElement('div');
  div.className = 'col-sm-6 col-md-3 card"'

  divChild.appendChild(p);
  div.appendChild(img);
  div.appendChild(divChild);

  men.appendChild(div);
})
