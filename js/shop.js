// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]


// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) cartList.push(products[i])
    }
    /*     const product = products.find((e) => e.id === id)
        cartList.push(product) */
    // 2. Add found product to the cartList array
    generateCart()
}

// Exercise 2
function cleanCart() {
    cartList = [] 
    cart = []
    total = 0
    printCart()
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = 0
    for (let i = 0; i < cart.length; i++) {
        const existAplicatedDiscount = cart[i].subtotalWithDiscount
        existAplicatedDiscount ? total += cart[i].subtotalWithDiscount : total += cart[i].subtotal
    }
}

// Exercise 4
function generateCart() {
    cart = []
    // Using the "cartlist" array that contains all the items in the shopping cart,
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    for (let i = 0; i < cartList.length; i++) {
        const product = cartList[i]
        const productExist = cart.find((e) => e.id === product.id)
        if (!productExist) {
            product.quantity = 1
            product.subtotal = product.price
            cart.push(product)

        } else  {
            product.quantity += 1
            product.subtotal += product.price
        }
    }
    calculateTotal()
    applyPromotionsCart()
    printCart();
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i < cart.length; i++) {
        const existDiscount = cart[i].offer
        if (existDiscount) {
            const activateDiscount = cart[i].quantity >= cart[i].offer.number
            const existAplicatedDiscount = cart[i].subtotalWithDiscount

            if (activateDiscount) {
                const percent = cart[i].offer.percent / 100
                const valueDiscount = (cart[i].subtotal * percent).toFixed(2)
                cart[i].subtotalWithDiscount = cart[i].subtotal - valueDiscount
            }
            
            if (existAplicatedDiscount && !activateDiscount) {
                delete(cart[i].subtotalWithDiscount)            
            }
        }
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let htmlCart = ''
    let counterProduct = 0
    cart.forEach(e => {
        htmlCart +=
            `<tr id="trashDelete${e.id}">
                <th scope="row">${e.name}</th>
                <td>$${e.price}</td>
                <td>${e.quantity}</td>
                <td>$${e.subtotal}</td>
                <td>${e.subtotalWithDiscount?'$' + e.subtotalWithDiscount:''}</td>
                <td>
                    <img class="btn"  onclick="removeFromCart(${e.id})" src="images/trash.svg" alt="trashIcon">
                </td>
            </tr>`
        counterProduct += e.quantity
    });
    const totalDecimal = total % 1 !== 0
    if (totalDecimal) total = total.toFixed(2)

    document.getElementById('cart_list').innerHTML = htmlCart
    document.getElementById('count_product').innerHTML = counterProduct
    document.getElementById('total_price').innerHTML = total
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            let product = {...products[i]}
            const productExist = cart.find((e) => e.id === product.id)
            if (!productExist) {
                product.quantity = 1
                product.subtotal = product.price
                cart.push(product)

            } 
            if (productExist) {
                productExist.quantity += 1
                productExist.subtotal += productExist.price
            }
        }
    }
    applyPromotionsCart()
    calculateTotal()
    printCart();
}

// Exercise 8
function removeFromCart(id) {
    const productDeleted = cart.find((e) => e.id === id)
    productDeleted.quantity--
    if (productDeleted.quantity === 0) {
        const eliminateProductCart = cart.indexOf(productDeleted)
        cart.splice(eliminateProductCart, 1)
    }

    productDeleted.subtotal -= productDeleted.price
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cartList array
applyPromotionsCart()
calculateTotal()
printCart()
}

function open_modal() {
    printCart();
}