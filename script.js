document.addEventListener('DOMContentLoaded', function() {
    const quantities = document.querySelectorAll('.quantity');
    const minusButtons = document.querySelectorAll('.minus');
    const plusButtons = document.querySelectorAll('.plus');
    const orderButton = document.getElementById('orderButton');
    const orderModal = document.getElementById('orderModal');
    const closeModal = document.querySelector('.close');
    const orderDetails = document.querySelector('.order-details');
    
    minusButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const quantity = parseInt(quantities[index].textContent);
            if (quantity > 0) {
                quantities[index].textContent = quantity - 1;
            }
        });
    });

    plusButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const quantity = parseInt(quantities[index].textContent);
            quantities[index].textContent = quantity + 1;
        });
    });

    orderButton.addEventListener('click', () => {
        const orderSummary = [];
        quantities.forEach((quantity, index) => {
            if (parseInt(quantity.textContent) > 0) {
                orderSummary.push(`Блюдо ${index + 1}: ${quantity.textContent} шт.`);
            }
        });
        
        if (orderSummary.length > 0) {
            orderDetails.textContent = orderSummary.join(', ');
            orderModal.style.display = 'block';
        } else {
            alert('Выберите хотя бы одно блюдо.');
        }
    });

    closeModal.addEventListener('click', () => {
        orderModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == orderModal) {
            orderModal.style.display = 'none';
        }
    });
});
