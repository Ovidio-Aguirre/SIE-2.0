document.addEventListener('DOMContentLoaded', () => {
    const salesForm = document.getElementById('sales-form');
    const salesBody = document.getElementById('sales-body');
    const totalIncomeSpan = document.getElementById('total-income');

    let totalIncome = 0;

    salesForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const product = document.getElementById('product').value;
        const price = parseFloat(document.getElementById('price').value);
        const quantity = parseInt(document.getElementById('quantity').value);
        const income = price * quantity;

        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${product}</td>
            <td>${price.toFixed(2)}</td>
            <td>${quantity}</td>
            <td>${income.toFixed(2)}</td>
            <td><button class="delete-button">Eliminar</button></td>
        `;

        salesBody.appendChild(newRow);

        totalIncome += income;
        totalIncomeSpan.textContent = totalIncome.toFixed(2);

        salesForm.reset();

        newRow.querySelector('.delete-button').addEventListener('click', () => {
            totalIncome -= income;
            totalIncomeSpan.textContent = totalIncome.toFixed(2);
            salesBody.removeChild(newRow);
        });
    });
});

// Función para retroceder una página en el historial del navegador
function goBack() {
    window.history.back();
}