const iceCream = [{name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1}, {name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1}, {name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2}, {name: 'icecream-dark', image: 'https://assets.epicurious.com/photos/55f9cfebe7f5be0c7ccb7348/2:1/w_1999,h_1000,c_limit/51187410_black-ice-licorice-ice-cream.jpg', price: 'oul'}]


const vessels = [{name: 'Waffle Cone', image: 'https://cdnimg.webstaurantstore.com/images/products/large/21513/1915192.jpg', price: 3}, {name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4}, {name: 'Sugar Cone', image: 'https://cdnimg.webstaurantstore.com/images/products/large/556773/2047285.jpg', price: 2}]

const toppings = [{name: 'Sprinkles', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1}, {name: 'Chocolate Chips', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2}, {name: 'Humus', image: 'https://www.verywellhealth.com/thmb/1zvr8JUdXNvLI5AdooeMtasdQzk=/3762x2650/filters:no_upscale():max_bytes(150000):strip_icc()/dirt-56712b855f9b586a9e0ee524.jpg', price: '3'}]

let masterList = []
let cart = []
let total = 0;


function draw(type) {
    let template = ''
    switch(type) {
        case 'iceCream':
            template = drawIceCream()
            break
        case 'vessels':
            template = drawVessels()
            break
        case 'toppings':
            template = drawToppings()
            break
        default:
            template += drawIceCream()
            template += drawVessels()
            template += drawToppings()
    }
    document.getElementById("cards").innerHTML = template
}

function drawCart() {
    cartTotal()
    template = ''
    if(cart.length!=0) {    
        template = /*html*/ `
        <div class="row justify-content-end pe-3 pt-3">
            <div class="col-6 text-start">
                <button class="btn btn-outline-secondary" onclick="purchase()">Buy</button>
            </div>
            <div class="col-6 text-end text-bottom">
                Total: $${total}
            </div>
        </div>
        `
    }
    cart.forEach((i, index) => {
        template += /*html*/`
        <div class="row justify-content-between p-3">
            <div class="col-6 text-secondary text start">
                ${i.name}
            </div>
            <div class="col-6 text-secondary text-end">
                $${i.price}
                <i class="mdi mdi-trash-can-outline selectable" onclick="removeFromCart(${index})"></i>
            </div>
            <hr>
        </div>
        `
    })

    document.getElementById('cart').innerHTML = template;
}

function purchase() {
    Swal.fire(
        'Purchase Successful!',
        'Get trashed, kid. You\'re literally bad.',
        'success'
      )
    cart.splice(0, cart.length)
    drawCart();
}

function cartTotal() {
    total = 0;
    cart.forEach(i => total += i.price)
}

function removeFromCart(index) {
    cart.splice(index, 1)
    drawCart()
}

//drawStuff region
//#region 

function drawToppings() {
    template = '';
    toppings.forEach(i => {
        template += /*html*/ `
            <div class="col-6 py-3 selectable" onclick="addToCart('${i.name}')">
                <img class="img-fit rounded-top" src="${i.image}" alt="">
                <div class="row bg-info m-0 rounded-bottom">
                    <div class="col-12 d-flex justify-content-between py-2 px-4">
                        <h3>${i.name}</h3>
                        <h3>$${i.price}</h3>
                    </div>
                </div>
            </div>
        `
    })
    return template;
}

function drawVessels() {
    template = '';
    vessels.forEach(i => {
        template += /*html*/ `
            <div class="col-6 py-3 selectable" onclick="addToCart('${i.name}')">
                <img class="img-fit rounded-top" src="${i.image}" alt="">
                <div class="row bg-info m-0 rounded-bottom">
                    <div class="col-12 d-flex justify-content-between py-2 px-4">
                        <h3>${i.name}</h3>
                        <h3>$${i.price}</h3>
                    </div>
                </div>
            </div>
        `
    })
    return template;
}

function drawIceCream() {
    template = '';
    iceCream.forEach(i => {
        template += /*html*/ `
            <div class="col-6 py-3 selectable" onclick="addToCart('${i.name}')">
                <img class="img-fit rounded-top" src="${i.image}" alt="">
                <div class="row bg-info m-0 rounded-bottom">
                    <div class="col-12 d-flex justify-content-between py-2 px-4">
                        <h3>${i.name}</h3>
                        <h3>$${i.price}</h3>
                    </div>
                </div>
            </div>
        `
    })
    return template;
}

//#endregion

function makeMaster() {
    masterList.push(...iceCream)
    masterList.push(...vessels)
    masterList.push(...toppings)
}

function addToCart(nameIn) {
    console.log(nameIn)
    cart.push(masterList.find(item => item.name == nameIn))
    // if(nameIn === "icecream-dark"){
    //     document.querySelectorAll('div').forEach(d => d.style = "background-color: black")
    // }

    if(nameIn === "icecream-dark"){
        document.getElementById('title').innerText = "It's Hot Here In Hell"
        document.getElementById('body').innerHTML = /*html*/ `
        <main class="container-fluid" style="min-height: 100vh; background-color:black"></main>
        `
     setTimeout(() => {
        while(1>0)
            window.alert('ERROR! ERROR! ERROR! YOU SOLD YOUR SOUL FOR ICE CREAM WHAT ARE YOU DOING!?!?!?')
            window.alert('I CANNOT BELIEVE YOU')
            window.alert('ERROR! ERROR! ERROR! YOU SOLD YOUR SOUL FOR ICE CREAM WHAT ARE YOU DOING!?!?!?')
            window.alert('I CANNOT BELIEVE YOU')
     }, 50);   
    }
         
    console
    drawCart();
}



makeMaster()
draw()
drawCart()