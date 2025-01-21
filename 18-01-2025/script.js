const dataset = [
  {
    id: 1,
    name: "Mansab",
    age: 28,
    category: "Electronics",
    price: 1200,
    inStock: true,
    purchaseDate: "2024-01-01",
  },
  {
    id: 2,
    name: "Abdullah",
    age: 35,
    category: "Furniture",
    price: 300,
    inStock: false,
    purchaseDate: "2024-02-15",
  },
  {
    id: 3,
    name: "Musa",
    age: 30,
    category: "Electronics",
    price: 800,
    inStock: true,
    purchaseDate: "2024-03-05",
  },
  {
    id: 4,
    name: "Mansab",
    age: 22,
    category: "Clothing",
    price: 50,
    inStock: true,
    purchaseDate: "2024-04-10",
  },
  {
    id: 5,
    name: "Abdullah",
    age: 40,
    category: "Electronics",
    price: 500,
    inStock: true,
    purchaseDate: "2024-05-22",
  },
  {
    id: 6,
    name: "Musa",
    age: 25,
    category: "Furniture",
    price: 200,
    inStock: true,
    purchaseDate: "2024-06-30",
  },
  {
    id: 7,
    name: "Mansab",
    age: 45,
    category: "Clothing",
    price: 75,
    inStock: false,
    purchaseDate: "2024-07-11",
  },
  {
    id: 8,
    name: "Abdullah",
    age: 33,
    category: "Electronics",
    price: 1500,
    inStock: true,
    purchaseDate: "2024-08-02",
  },
  {
    id: 9,
    name: "Musa",
    age: 27,
    category: "Clothing",
    price: 60,
    inStock: true,
    purchaseDate: "2024-09-14",
  },
  {
    id: 10,
    name: "Mansab",
    age: 38,
    category: "Electronics",
    price: 950,
    inStock: false,
    purchaseDate: "2024-10-20",
  },
];

const container = document.createElement("div");
document.body.appendChild(container);

/*
1. function to return data where price is greater than 300
2. function to sum total bill of all customers
3. function to sum total bill of particular customer
4. Get all products that are available in stock
5. Get all products by category
6. Count total items in stock
7. Count total items out of stock
8. Calculate price of all products in stock
9. Calculate total price of all products out of stock
10. add a discout key to all products of price 20

*/

const renderComponent = (name, inStock, age, category, price) => {
    return `
<h1>${name} </h1>
<h1>${inStock} </h1>
<h1>${age} </h1>
<h1>${category} </h1>
<h1>${price} </h1>
    `;
};

const displayData = (arr) => {

    arr.forEach((item) => {
        const div = document.createElement("div");
        div.innerHTML = renderComponent(item.name, item.inStock, item.age, item.category, item.price)
        container.appendChild(div);
    })
}

const addDiscount = () => {
 const modifiedData = dataset.map((product) => {
    const data = {
      ...product,
      discount: 20,
    };
    return data;
 });

    return modifiedData
};

const filterByPrice = (amount) => {
  return dataset.filter((product) => product.price > amount);
};

const sumArr = (arr) => {
  let sum = 0;
  arr.forEach((product) => {
    sum += product.price;
  });
  return sum;
};

const filterStock = (arr, type) => {
  return arr.filter((product) => product.inStock === type);
};

const calculateInstock = (arr, type) => {
  return sumArr(filterStock(arr, type));
};

const calculateBillOfPerson = (name) => {
  const filterByName = dataset.filter((product) => product.name === name);
  return sumArr(filterByName);
};
