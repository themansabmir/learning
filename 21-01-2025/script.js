const tbody = document.getElementById("tbody-container")
const apiPath = "https://dummyjson.com/products";


const fetchData = async () => {

    const jsonData = await fetch(apiPath)
    const data = await jsonData.json()
    return data
}



const paginate = (page, limit) => {
    const start = (page - 1) * limit
    const end = start + limit
    return data.slice(start, end);
}


const displayProducts = async () => {


    const {products , limit, skip} = await fetchData();

    products.forEach((element, i) => {
        const {
          id,
          title,
          description,
          price,
          weight,
          category,
          stock,
          images,
          reviews,
        } = element;

        const productRow = document.createElement("tr");
        tbody.appendChild(productRow);
        productRow.innerHTML = `
      <td>${i+1}</td>
      <td>${title}</td>
            <td>${price}</td>
            <td>${category}</td>
            <td>${description}</td>
            <td>${weight}</td>
            <td>${stock}</td>
            <td>${reviews.length}</td>
            <td>
            <button> View More</button>
            </td>
        `;

    });


    const totalPages = Math.ceil(products.length / 5)

    const arr = []
    for (let i = 0; i < totalPages; i++) {
        arr.push(i + 1)
    }

    const paginationContainer = document.getElementById("page-container");

    arr.forEach(elem => {
        const btn = document.createElement('button')
        paginationContainer.appendChild(btn)
        btn.innerText = elem
        btn.addEventListener('click', () => {
            paginate(elem, 5)
        })

    })



}



displayProducts( )