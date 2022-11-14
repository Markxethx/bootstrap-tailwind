
//navigation bar
const toggle = document.getElementById("toggle");
const navigation = document.getElementById("navigation");
const shadow = document.getElementById("shadow")

window.addEventListener("resize", function() {
    if (screen.width <= 768) {
      shadow.classList.remove("shadow")
      navigation.classList.remove("hide")
    } else if (screen.width >= 768) {
      navigation.classList.remove("hide")
      shadow.classList.add("shadow")
    }
})

toggle.addEventListener("click", function() {
  navigation.classList.toggle("hide")
})

// carousel Images
const images = document.querySelectorAll(".images")
images.forEach((e) => {
  fetch("https://aws.random.cat/meow")
  .then(res => res.json())
  .then(data => {
    console.log(data.file.width)
    e.innerHTML = `<img src=${data.file} alt="random cat" class="object-cover w-full h-full" />`
  })
});
// const randomImg = Math.floor(Math.random() * 100)
