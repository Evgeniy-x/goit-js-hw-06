const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const listImgEl = document.querySelector('.gallery');
listImgEl.style.display = 'flex';
listImgEl.style.gap = '30px';

const galeryListCreate = images.map(({url, alt}) =>
`<li><img src='${url}' alt='${alt}' style='height: 200px'></li>`
);

listImgEl.insertAdjacentHTML('beforeend', galeryListCreate.join(''));



// const galeryList = images.map(image => {
//   const link = document.createElement('li');

//   const img = document.createElement('img');
//   img.src = image.url;
//   img.alt = image.alt;
//   img.style.height = '200px';

//   link.insertAdjacentHTML('beforeend', img);
//   return link
// });

