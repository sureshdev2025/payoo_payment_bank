document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const amountOfMoney = parseFloat(amount);
    
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);

    const mainBalance = document.getElementById('main-balance').innerText;
    const balance = parseFloat(mainBalance);
    
    if(convertedPin === 1234){
        const sum = balance + amountOfMoney;
        document.getElementById('main-balance').innerText = sum;
    }else console.log('Incorrect pin number! Please enter the correct pin.');
})