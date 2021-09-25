//get element in dom....

const currencyOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');


//fetch exchange rates and update the dom..

function calculate (){
    //get the currency code to currency 1 and currency 2
    const currency_One = currencyOne.value
    const currency_Two = currencyTwo.value
    // console.log(currency_One,currency_Two);

    //send request to exchangeRate API for conversions..
    fetch(`https://v6.exchangerate-api.com/v6/3ec5cf8e0c1c81e5896bb3db/pair/${currency_One}/${currency_Two}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);

        const conRate = data.conversion_rate;

        // console.log(conRate);

        rate.innerText = Math.floor(conRate);

        //update currency two amount
        currencyTwo.value = (currency_One.value * conRate).toFixed(2) 

    })
}

//event lisrtners
//recalculate exchandege rates when currency one rates
currencyOne.addEventListener('change',calculate);
//recalculate exchandege amount when currency one amount changes
amountOne.addEventListener('input',calculate);
//recalculate exchandege rates when currency two rates
currencyTwo.addEventListener('change',calculate);
//recalculate exchandege amount when currency two amount changes
amountTwo.addEventListener('input',calculate);

//excute calculate function on page load..

calculate();