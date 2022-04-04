const p = document.getElementById('paragraph');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');

function button1(){
  p.innerHTML = 'fgdfgdfgd'
}

b1.addEventListener("click", button1);

function button2(){
  p.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, explicabo eum? Quas vitae natus quibusdam quam ad. Quae, temporibus vero neque corrupti repudiandae, expedita maiores reiciendis, aperiam molestias quaerat libero.'
}

b2.addEventListener("click", button2);

////////////////

const numb = document.getElementById('numb');
const b3 = document.querySelector('.b3')

let num = 0;

function button3(){
  num++;
  numb.textContent = num;
}

b3.addEventListener("click", button3);

////////////////

const text = document.getElementById('text');

function funcOver(){
  text.innerHTML = 'second text. adipisicing elit. Quasi, explicabo'
}

function funcOut(){
  text.innerHTML = 'first text. Lorem ipsum dolor sit amet.';
}

text.addEventListener('mouseover', funcOver);
text.addEventListener('mouseout', funcOut);


////////////////

const text2 = document.getElementById('text_2');

function func1(){
  text2.style.color = 'red'
}

function func2(){
  text2.style.background = 'blue'
}

text2.addEventListener('click', func1);
text2.addEventListener('dblclick', func2);
