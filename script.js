const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json"
const dropdown= document.querySelectorAll(".dropdown select");
let btn= document.querySelector(" form button");
const fromcurr= document.querySelector(".from select");
const tocurr=document.querySelector(".to select");
let msg=document.querySelector(".msg");
/*for(let select of dropdown){
    for(let currcode in countrylist){
        let newoption = document.createElement("option");
        newoption.innerText=currcode;
        newoption.value=currcode;
        if(select.name==="from" && currcode==="USD"){
            newoption.selected="selected"
        }
        else if(select.name==="to" && currcode==="INR")
        {
            newoption.selected="selected";
        }
        select.append(newoption);
          }
          select.addEventListener("change",(evt)=>{
            updateflag(evt.target);

          })
}
const updateflag=(element)=>{
let currcode= element.value;
}*/
btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amount= document.querySelector(".amount input");
    let amvalue= amount.value;
   if(amvalue===""||amvalue<1){
    amvalue=1;
    amount.value="1";
   }
    let finalam= amvalue*80;
    msg.innerText=finalam;

  /* const URL='BASE_URL/fromcurr.value.toLowercase()/tocurr.value.toLowercase().json';
   let response= await fetch(URL);
   let data= await response.json();
   let rate=dara[tocurr.value.toLowecase()];
   console.log(rate);*/
   
});