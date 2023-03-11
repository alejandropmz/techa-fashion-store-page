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