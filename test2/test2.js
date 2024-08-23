
const observer = new IntersectionObserver((entries)=>{
  if(entries[0].isIntersecting){
    entries[0].target.classList.add("visible")
  }else{
    entries[0].target.classList.remove("visible")
  }
}, {
  threshold: .5
});

const $content = document.querySelector("#content3");

observer.observe($content);