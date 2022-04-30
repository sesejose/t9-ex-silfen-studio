const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "http://sesejose.com/kea/wp_silfen/wp-json/wp/v2/bag?_embed" + id;

console.log("url");

fetch(url)
  .then((response) => {
    if (!response.ok) {
    }
    return response.json();
  })
  .then((data) => {
    showBag(data);
  });

function showBag(bag) {
  console.log(bag);
  console.log("bag");

  document.querySelector(".name").textContent = bag.title.rendered;
  document.querySelector(".price").textContent = bag.price;

  document.querySelector(".bag-image img").src =
    bag._embedded["wp:featuredmedia"][0].source_url;
}