const product = [
    {
        id: 0,
        Image:'pc.jpg',
        title: 'AMD Gaming PC',
        price: 3479,
    },
    {
        id: 1,
        Image: 'monitor.599.jpeg',
        title: '24"UltraGear™ Full HD IPS gaming monitor',
        price: 599, 
    },
    {
        id: 2,
        image: 'mouse.129.jpeg',
        title: 'logitech G304 Wireless Optical Gaming Mouse',
        price: 129,
    },
    {
        id: 3,
        image: 'keybord.239.jpeg',
        title: 'Logitech Pebble Keys 2 K380s Multi-Device Bluetooth Wireless Keyboard',
        price: 239,
    }
];
const categories = [...new set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML= categories.map((item)=>
{
    var {image, title, price} = item;
    return(
       `<div class='box'>
            <div class='img-box'>
                 <img class='images' src=${image}></img>
            </div>
        <div class='bottom'></div>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+ 
        `</div>
        </div>`
    )
}).join('')

var cart=[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function displaycart(a){
    let j = 0;
    if(cart.length==0){
        document.getElementById("cartItem").innerHTML= "Your cart is empty";
    }
    else{
        document.getElementById("cartItem").innerHTML=cart.map((item)=>
        {
            var{image, title, price} = items;
            return(
                `<div class='cart-item'>
                <div class= 'row-img'>
                     <img class='rowing' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style= 'font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa fa-trash' onclinc='deElement("+(j++)+")'></i></div>"
            
            )
        }) 
    }
}