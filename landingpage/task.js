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




