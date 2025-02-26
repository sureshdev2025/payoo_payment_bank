document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();

    const pinNumber = document.getElementById('cashout-pin').value;
    const pin = parseInt(pinNumber);
    const cashoutAmount = document.getElementById('cashout-amount').value;
    const amount = parseFloat(cashoutAmount);

    const mainBalance = document.getElementById('main-balance').innerText;
    const balance = parseFloat(mainBalance);

    if(pin === 1234){
        const sum = balance - amount;
        document.getElementById('main-balance').innerText = sum;
        alert('Cash out successful...');
    }else{
        alert('Incorrect pin! Please enter the correct pin.');
    }
})