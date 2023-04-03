//use local storage to manage cart data
//for single item
/*
const addToDb = id =>{
    const quantity = localStorage.getItem(id);
    if(quantity){
        // console.log("already exist");
        // const newQty = parseInt(quantity) +1;
        const newQty = +(quantity) +1;

        localStorage.setItem(id,newQty)
    }
    else {
        localStorage.setItem(id,1)
    }
};
*/
//multiple data
const addToDb = id => {
    let shoppingCart;
    // get stored shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart= JSON.parse(storedCart);
    }else{
        shoppingCart={};
    }
    // add quantity
    const qty = shoppingCart[id];
    if(qty){
        const newQty = qty + 1;
        shoppingCart[id]=newQty;
    }else {
        shoppingCart[id]=1;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
}
export {addToDb};