export { data } from './support-founds';

const supportItemsEl = document.querySelector('.support-list');

const makeSupporItems = supportArr.map(({ title, url, img }, idx) =>
`<div class="swiper-slide">
<a class="swiper__link" target="_blank" rel="nofollow"
    href=${url}>
    <p class="swiper__number">01</p>
    <img class="swiper__baner" srcset=${img} type="image/png"
        alt=${title} />
</a>
</div>`

//       `<div class="support-item">
//   <a class="wiper-slide" href=${url}>
//     <span class="support-number">${addLeadingZero(idx + 1)}</span>
//     <img
//       class="swiper-slide"
//       srcset=${img}
//       src=${img}
//       alt=${title}
//     />
//   </a>
// </div>`
  )
  .join('');

supportItemsEl.insertAdjacentHTML('beforeend', makeSupporItems);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

// console.log(Foundation )

// const local = document.querySelector('.button')
// local.addEventListener('click, onlocal')

// function onlocal(evt){
//     localStorage.setItem('local', 'on local')
// }