const images = document.querySelectorAll("[data-img]")


function preloadImage (img){
  const src=img.getAttribute("data-img");
  if(!src){
    return;
  }
  const class_set="visible";
  img.src=src;
  img.classList.add(class_set);
}

const imgOptions = {
  threshold: 1,
  rootmargin:"0px 0px 50px 0px"
};
const imgObserver = new IntersectionObserver((entries,imgObserver) => {
entries.forEach(entry => {
  if(!entry.isIntersecting){
    return;
  }else{
    preloadImage(entry.target);
    imgObserver.unobserve(entry.target);
  }
})
},imgOptions);

images.forEach(picture =>{
  imgObserver.observe(picture);
});