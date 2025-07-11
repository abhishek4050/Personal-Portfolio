const baseURL = "https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json"
let dropDowns = document.querySelectorAll('.dropDown select');
let button = document.querySelector("form button");
let fromCURR = document.querySelector(".from select");
let toCURR = document.querySelector(".to select");
let msg = document.querySelector(".msg");

for(let select of  dropDowns){
    for(currCode in countryList){
    newOption= document.createElement('option');
    newOption.innerText = currCode;
    newOption.value = currCode;
    if(select.name==="From" && currCode==="USD"){
        newOption.selected = true;
    }
    else if(select.name==="To" && currCode==="INR"){
        newOption.selected = true;
    }
    select.append(newOption);
}

select.addEventListener('change', (evt)=>{
    changeFlag(evt.target);
})
}

// getting exchange rate
//need to access toCURR value or exchange rate from the data or api
const getExchangeRate=async ()=>{
      let amount = document.querySelector(".amount input");
    let amtVal=amount.value;
    if((amtVal==="" || amtVal<1) || (amtVal>="A" && amtVal<="Z" || amtVal>="a" && amtVal<="z")){
    amtVal=1;
    amount.value=1;
}
let url=`https://2024-03-06.currency-api.pages.dev/v1/currencies/${fromCURR.value.toLowerCase()}.json`
let response=await fetch(url);
let data= await response.json();
let rate = data[fromCURR.value.toLowerCase()[toCURR.value.toLowerCase()]];
let finalRate = amtVal*rate;
msg.innerText= `${amtVal} ${fromCURR.value} = ${finalRate} ${toCURR.value}`
}


const changeFlag = (element)=>{
    let currCode=element.value;
    let countryCode = countryList[currCode];
    let newSRC=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector('img');
    img.src=newSRC;
}
button.addEventListener('click', (evt)=>{
    evt.preventDefault();
    getExchangeRate();
});
window.addEventListener("load",()=>{
    getExchangeRate();
})


//https://2024-03-06.currency-api.pages.dev/v1/currencies