
window.addEventListener("load", () => {
    calculateCartPriceAllItems();

    // //! set items to LocalStorage
    // localStorage.setItem("taxRate", taxRate);
    // localStorage.setItem("shippingPrice", shippingPrice);
    // localStorage.setItem("shippingFreePrice", shippingFreePrice);

    // //! set items to sessionStorage
    // sessionStorage.setItem("taxRate", taxRate);
    // sessionStorage.setItem("shippingPrice", shippingPrice);
    // sessionStorage.setItem("shippingFreePrice", shippingFreePrice);
});

const productsDiv = document.querySelector('.products-panel');

productsDiv.addEventListener('click', (event) => {

if (event.target.className=="fa-solid fa-minus")
{     
    if (event.target.parentElement.querySelector(".quantity").innerText > 1){

        event.target.parentElement.querySelector(".quantity").innerText --;
        calculateProductPriceWithoutTax(event.target);
        calculateCartPriceAllItems();

        
    }
    else {
        (confirm(`${event.target.parentElement.parentElement.querySelector("h2").innerText} will be removed`)) && (event.target.parentElement.parentElement.parentElement.remove());
        calculateCartPriceAllItems();

    }
   }
else if (event.target.classList.contains("fa-plus"))
// else if (event.target.className=="fa-solid fa-plus")
{ 
     //  event.target.parentElement.querySelector(".quantity").innerText ++;

     event.target.previousElementSibling.innerText ++;
     calculateProductPriceWithoutTax(event.target);
     calculateCartPriceAllItems();

 }
 else if((event.target.className=="remove-button") && (confirm(`${event.target.parentElement.parentElement.querySelector("h2").innerText} will be removed`))){

    event.target.parentElement.parentElement.parentElement.remove();
    calculateCartPriceAllItems();

 }
});


const calculateProductPriceWithoutTax = (target) =>{

    const productInfoDiv = target.parentElement.parentElement;
    const productPrice = productInfoDiv.querySelector(".product-price strong").innerText;
    const quantity = productInfoDiv.querySelector(".quantity").innerText;
    const productTotalDiv = productInfoDiv.querySelector(".total-price");
    productTotalDiv.innerText = `${ (productPrice * quantity).toFixed(2)}`
}

const calculateCartPriceAllItems = () =>{
    const productsTotalPricesDivs = document.querySelectorAll(".total-price");
    let subtotal = 0;
    productsTotalPricesDivs.forEach(div =>{
        subtotal += parseFloat(div.innerText); 
        console.log(subtotal);
    }
    );



    const taxPrice = subtotal * 0.18;
    const shippingPrice = subtotal * 0.05;

    document.querySelector("#sub-total").lastElementChild.innerText = subtotal.toFixed(2);
    document.querySelector("#tax-total").lastElementChild.innerText = taxPrice.toFixed(2);
    document.querySelector("#shipping-price").children[1].innerText = shippingPrice.toFixed(2);
    document.querySelector("#basket-total").lastElementChild.innerText = (subtotal + taxPrice + shippingPrice).toFixed(2);

}





