let select = document.querySelectorAll(".currency")
let input_currency = document.querySelector("#input_currency")
let output_currency = document.querySelector("#output_currency")

const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then(data => data.json())
  .then((data) => {
    const entries = Object.entries(data)
    // alert(`10 GBP = ${data.rates.USD} USD`);
    // console.log(entries);
    for(i=0;i<entries.length;i++){
        select[0].innerHTML += ` <option value="${entries[i][0]}">${entries[i][0]}</option>`
        select[1].innerHTML += ` <option value="${entries[i][0]}">${entries[i][0]}</option>`
    }
  });
  function convertor(){
    let input_currency_val = input_currency.value;
    if(select[0].value != select[1].value){
    // alert("Right")
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`)
  .then(val => val.json())
  .then((val) => {
    output_currency.value = Object.values(val.rates)[0]
    // alert(`10 GBP = ${data.rates.USD} USD`);
  });

  }
  else {
    alert("Please select two different Currencies")
  }
}