
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

WORKS.addEventListener('click', () =>
{ WORKS.querySelectorAll('div').forEach(el => el.classList.remove('works-border'));
  event.target.classList.toggle('works-border');}
);





const BUTTON = document.querySelector("#btn");
const CLOSE_BUTTON = document.querySelector("#close-btn");

function validateEmail(EMAIL) {
   var pattern  = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
   return pattern.test(EMAIL);
 }
BUTTON.addEventListener('click', (e) =>{
  e.preventDefault();
   NAME = document.querySelector("#name").value.toString();
   EMAIL = document.querySelector('#email').value.toString();
   SUBJECT = document.querySelector("#subject").value.toString();
   DESCRIBE = document.querySelector("#describe").value.toString();

   RESULT1 = 'The letter was sent';
   RESULT2 = '';
   RESULT3 = '';

  if(NAME != '' && validateEmail(EMAIL))
  {
    if (SUBJECT === "") RESULT2 = RESULT2 + 'No subject';
    else RESULT2 = RESULT2 + SUBJECT;

    if (DESCRIBE === "") RESULT3 = RESULT3 +'No description';
    else RESULT3 = RESULT3 + DESCRIBE;

    document.querySelector("#result1").innerText = RESULT1;
    document.querySelector("#result2").innerText = RESULT2;
    document.querySelector("#result3").innerText = RESULT3;

    document.querySelector("#message-block").classList.remove('hidden');
  }
})

CLOSE_BUTTON.addEventListener('click', () =>{
  document.querySelector("#message-block").classList.add('hidden');
  document.querySelector('form').reset();
})
