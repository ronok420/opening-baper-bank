
document.getElementById('deposit-button').addEventListener('click', function () {


    const depositInput = document.getElementById('deposit-input');

    const depositAmount = depositInput.value;
    const depositA = parseFloat(depositAmount);



    //---------adding deposit amount--------//                
    const depositAdded = document.getElementById('deposit-added');

    // const depositTotal = depositAdded.innerText;
    // console.log(depositTotal);
    //depositTotal = depositAmount; thsi way not work


    // console.log(depositAdded.innerText);



    const depositAd = parseFloat(depositAdded.innerText);

    const depoCombine = depositA + depositAd;

    depositAdded.innerText = depoCombine;             //depositAmount;
    depositInput.value = '';

    //updating balance-------------------//
    const balanceAdded = document.getElementById('balanceAdded');
    const balanceAd = parseFloat(balanceAdded.innerText);
    const storeDeposit = balanceAd + depoCombine;
    balanceAdded.innerText = storeDeposit - depositAd;






})
document.getElementById('withdraw-button').addEventListener('click', function () {
    //updating balance  for withdraw  -------------------//
    const withdrawInput = document.getElementById('withdraw-input');
    //console.log(withdrawInput);

    const withdrawVlaue = parseFloat(withdrawInput.value);
    const balanceAddded2 = document.getElementById('balanceAdded');
    const balanceAd2 = parseFloat(balanceAddded2.innerText);
    //console.log(balanceAd2);
    const leftBalance = balanceAd2 - withdrawVlaue;
    balanceAddded2.innerText = leftBalance;
    withdrawInput.value = '';


    //withdraw updating ---------//

    const withdrawAmount = document.getElementById('withdrawAmount');

    const withdrawBvalue = withdrawAmount.innerText;
    const withdrawA = parseFloat(withdrawBvalue);
    withdrawAmount.innerText = withdrawVlaue + withdrawA;






})