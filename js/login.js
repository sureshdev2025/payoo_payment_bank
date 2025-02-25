
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;

    // login condition
    const pinNumber = document.getElementById('pin-number').value;
    const pin = parseInt(pinNumber);
    console.log(typeof pin);
    if(accountNumber.length === 11){
        if(pin === 1234){
            window.location.href='./main.html';
        }else {
            console.log('Invalid pin.');
        }
    }else{
        console.log('Invalid account number.');
    }
});