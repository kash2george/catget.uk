function toggleTheme() {
  document.body.classList.toggle("dark");
}

const products = [
  {
    title: "Felix Cat Food (12-pack)",
    img: "https://m.media-amazon.com/images/I/71+6fTXU8vL._AC_SL1500_.jpg",
    desc: "One of the most loved wet cat foods – full of flavor and trusted by cat parents worldwide.",
    link: "https://www.amazon.se/dp/B0CGLQRRHR?tag=catgetstore-21"
  },
  {
    title: "Interactive Laser Toy",
    img: "https://m.media-amazon.com/images/I/61vW8uZ2y+L._AC_SL1500_.jpg",
    desc: "Keep your cat active and happy with this fun and safe automatic laser toy!",
    link: "https://www.amazon.se?&linkCode=ll2&tag=catgetstore-21&linkId=da924bb79274a6e148a4daee591c6153&language=en_GB&ref_=as_li_ss_tl"
  }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <h2>${product.title}</h2>
    <img src="${product.img}" alt="${product.title}" />
    <p>${product.desc}</p>
    <a href="${product.link}" target="_blank" class="btn">Buy Now</a>
  `;
  productList.appendChild(div);
});
