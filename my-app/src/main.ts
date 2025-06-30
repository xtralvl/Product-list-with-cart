import './mobile.scss';

const addToCartButtons = document.getElementsByClassName('add-to-cart');

// CHANGES ADD TO CART BUTTON TO INCREMENT BUTTON AND VICA VERSA //
function buttonChanger() {

    [...addToCartButtons].forEach(addToCartButton => {
        const addToCartButtonAsHtml = addToCartButton as HTMLElement;

        addToCartButtonAsHtml.addEventListener('click', () => {
            const container = addToCartButtonAsHtml.closest('.img-and-button-container');
            const quantityControllerButton = container?.querySelector('.quantity-controller') as HTMLElement;
            if (!container) {
                return;
            };
            addToCartButtonAsHtml.style.display = 'none';
            quantityControllerButton.style.display ='flex';


            // === QUANTITY CONTROLLER === //

                const quantity = quantityControllerButton.querySelector('.quantity') as HTMLElement;
                const decrease = quantityControllerButton.querySelector('.decrease');
                const increase = quantityControllerButton.querySelector('.increase');

                let currentQuantity = 1;

                quantity.innerText = `${currentQuantity}`;

                decrease?.addEventListener('click', () => {
                    currentQuantity -= 1 ;
                    quantity.innerText = `${currentQuantity}`;

                    if (currentQuantity < 1) {
                        addToCartButtonAsHtml.style.display = '';
                        quantityControllerButton.style.display = '';
                    }
                });

                increase?.addEventListener('click', () => {
                    currentQuantity += 1;
                    quantity.innerText = `${currentQuantity}`;
                }); 
        })
    })    
}
buttonChanger(); 




