// SLIDER
const btns = document.querySelector('.slider-btns');
let index = 0;
const content = [
  {
    name: 'innovative',
    image: './images/desktop-image-hero-1.jpg',
    title: 'Discover innovative ways to decorate',
    txt: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
  },
  {
    name: 'globe',
    image: './images/desktop-image-hero-2.jpg',
    title: 'We are available all across the globe',
    txt: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    name: 'manufactured',
    image: './images/desktop-image-hero-3.jpg',
    title: 'Manufactured with the best materials',
    txt: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
  },
];

btns.addEventListener('click', (e) => {
  const btn = e.target.id;
  const img = document.getElementById('slider-img');
  const title = document.querySelector('.title');
  const text = document.querySelector('.text');
  if (btn === 'previous') {
    updateContent(img, title, text, -1);
  }
  if (btn === 'next') {
    updateContent(img, title, text, 1);
  }
});

const updateContent = (image, title, text, int) => {
  if (int === -1) {
    //previous
    index--;
    if (index < 0) {
      index = 2;
    }
  }
  if (int === 1) {
    //next
    index++;
    if (index > 2) {
      index = 0;
    }
  }
  image.src = content[index].image;
  title.textContent = content[index].title;
  text.textContent = content[index].txt;
};

