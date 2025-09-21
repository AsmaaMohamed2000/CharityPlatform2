const cop = document.querySelectorAll(".cop");
const ok = document.querySelectorAll(".ok");

cop.forEach(e => {
  e.addEventListener("click", () => {
    e.nextElementSibling.style.display = 'inline-block';
  });
});

ok.forEach(e => {
  e.addEventListener("click", () => {
    const spnId = e.getAttribute('data-id'); // assuming data-id is like "spn1"
    const spnElement = document.querySelector('.spn' + spnId); // e.g., class="spn spn1"
    if (spnElement) {
      spnElement.style.display = 'none';
    }
  });
});
let bar=document.querySelectorAll('.progress-bar')
bar.forEach((e)=>{
  let width=25
  e.style.transition='none'
let time=setInterval(() => {
  width+=25
  e.style.width=width+'%'
  e.setAttribute('aria-valuenow',`${width}`)
  if (width==100){
    clearInterval(time)
  }
},1000)
})




