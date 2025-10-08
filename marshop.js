const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchBtn');
const productList = Array.from(document.querySelectorAll('.card'));

console.log(productList);

function searchProduct() {
  const searchValue = searchInput.value.toLowerCase().trim();

  const filteredProduct = productList.filter(product => {
    const productName = product.getAttribute('data-name').toLowerCase().trim();
    return productName.includes(searchValue);
  });
  productList.forEach(product => product.style.display = 'none');
  filteredProduct.forEach(product => product.style.display = 'block');
}

searchInput.addEventListener('input', searchProduct);

searchButton.addEventListener('click', searchProduct);
