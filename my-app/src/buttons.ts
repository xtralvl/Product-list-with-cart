import './mobile.scss';

const addToCartButtons = document.querySelectorAll('.add-to-cart');

let cartQuantity = {};

addToCartButtons.forEach((button) => {



    const addToCartButton = button as HTMLElement;
    const container = addToCartButton.closest('.img-and-button-container')!;
    const quantityController = container.querySelector('.quantity-controller') as HTMLElement;
    const quantityText = quantityController.querySelector('.quantity') as HTMLElement;
    const carQuantityNumber = document.querySelector('.cart-quantity-number') as HTMLElement;
    const emptyCartImage = document.getElementById('empty-cart-image') as HTMLElement;
    const emptyCartParagraph = document.getElementById('empty-cart-paragraph') as HTMLElement;

    const decreaseBtn = quantityController.querySelector('.decrease')!;
    const increaseBtn = quantityController.querySelector('.increase')!;

    button.addEventListener('click', () => {
        const product = container.querySelector('.product');
        if (!product) return;

        const productId = product.getAttribute('data-product-id');
        console.log(productId);
        

    })



    let quantity = 1;


    addToCartButton.addEventListener('click', () => {
        quantity = 1;
        

        quantityText.innerText = `${quantity}`;
        carQuantityNumber.innerText = `${cartQuantity}`;

        addToCartButton.style.display = 'none';
        quantityController.style.display = 'flex';
        emptyCartParagraph.style.display = 'none';
        emptyCartImage.style.display = 'none';

    });

    increaseBtn.addEventListener('click', () => {
        quantity ++;

        quantityText.innerText = `${quantity}`;
        carQuantityNumber.innerText = `${cartQuantity}`;
    });

    decreaseBtn.addEventListener('click', () => {
        if (quantity > 1) {

            quantity --;

            quantityText.innerText = `${quantity}`;
            carQuantityNumber.innerText = `${cartQuantity}`;

        } else {
            quantity = 0;

            quantityText.innerText = `${quantity}`;
            carQuantityNumber.innerText = `${quantity}`;

            quantityController.style.display = 'none';
            addToCartButton.style.display = '';
            emptyCartParagraph.style.display = '';
            emptyCartImage.style.display = '';

        }
    });
});






