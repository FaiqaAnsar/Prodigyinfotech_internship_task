var typed = new Typed(".text", {
 strings:["Frontend Developer" ,"Backend Developer" ,"Graphic Designer" ,"Android App Developer"],
 typeSpeed:100,
 backSpeed:100,
 backDelay:1000,
 loop:true
});

// circle skills ///////////////////////
const circle=document.querySelectorAll('.circle');
circle.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent  = Math.floor((dots*marked)/100);
    var points = "";
    var rotate = 360/dots;

    for(let i=0 ; i<dots ;i++){
        points+= `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i=0; i<percent; i++){
        pointsMarked[i].classList.add('marked')
    }    
});

var mixer = mixitup('.portfolio-gallary');


let menuLi =document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97< section[len].offsetTop){}
    menuLi.forEach(sec=> sec.classList.add("active"));
}
 
activeMenu();
window.addEventListener("scroll", activeMenu);



const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY>50)

});


const togglebtn = document.querySelector('.toggle_btn')
const togglebtnIcon = document.querySelector('.toggle_btn i')
const dropdown= document.querySelector('.dropdown')

togglebtn.onclick = function(){
  dropdown.classList.toggle('open')
  const isopen=dropdown.classList.contains('open')
  togglebtnIcon.classList=isopen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}


