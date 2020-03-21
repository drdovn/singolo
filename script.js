
document.addEventListener ('scroll', myScroll);

function myScroll(eve){
  const curPos = window.scrollY;
  const anchors = document.querySelectorAll("section");
  const links = document.querySelectorAll("#menu li a");

  anchors.forEach((el) => {
    if (el.offsetTop <= curPos && (el.offsetTop+el.offsetHeight) > curPos) {
      links.forEach((a) =>{
        a.classList.remove('active');
        if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
          a.classList.add('active');
        }
      })
    }
  });
};

const SCREEN_HOR = document.querySelector('.phone.horizontal');
const SCREEN_VER = document.querySelector('.phone.vertical');

SCREEN_HOR.addEventListener('click', () => SCREEN_HOR.firstElementChild.classList.toggle("off-background-hor"));
SCREEN_VER.addEventListener('click', () => SCREEN_VER.firstElementChild.classList.toggle("off-background-vert"));



const WORKS = document.querySelector(".all-work-container");

WORKS.addEventListener('click', (event) =>
{ WORKS.querySelectorAll('div').forEach(el => el.classList.remove('works-border'));
  event.target.classList.toggle('works-border');}
);
