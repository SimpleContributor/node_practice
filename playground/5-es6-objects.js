const name = 'Caleb';
const userAge = 26;

const user = {
    name,
    age: userAge,
    location: 'Albuquerque'
}


const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const { label, stock } = product
// console.log(label);
// console.log(stock);

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)
