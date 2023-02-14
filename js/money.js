

document.getElementById('btn-deposit').addEventListener('click', function (){
    
    const newDepositAmount = getInputFieldValueById('deposit-amount');
    
    const previousDepositTotal = getElementValueById('deposit');
    
    const NewDepositTotal = previousDepositTotal+newDepositAmount;

    setElementValueByID('deposit', NewDepositTotal);


    const previousBalanceTotal = getElementValueById('total');
    const NewBalanceTotal = previousBalanceTotal + newDepositAmount;
    setElementValueByID('total', NewBalanceTotal);

    

})

document.getElementById('btn-withdraw').addEventListener('click', function (){
    const newWithdrawAmount = getInputFieldValueById('withdraw-amount');
    const previousWithdrawTotal = getElementValueById('withdraw');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setElementValueByID ('withdraw', newWithdrawTotal);

    const previousBalanceTotal = getElementValueById('total');
    const NewBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setElementValueByID('total', NewBalanceTotal);
})