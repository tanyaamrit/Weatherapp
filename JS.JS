const wrapper =document.querySelector(".wrapper"),
const apikey ="3265874a2c77ae4a04bb96236a642d2f";
inputPart=wrapper.querySelector(".input-part"),
infoTxt=wrapper.querySelector(".info-txt"),
inputField=inputPart.querySelector("input");
locationBtn = inputPart.querySelector("input");
inputField.addEventListener("keyup" , e=>{
    if(e.key=="Enter" && inputField.value!=""){
        requestApi(inputField.value);
    }
});
locationBtn.addEventListener("click",()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess,onError);


    }else
    {
        alert("Your browser noy support geolocation api");

    }
});
function onSuccess(position)
{
    const{latitude, longitude}=position.coords;
    let api=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`
    console.log(position);
}
function onError(error)
{
    infoTxt.innerText=error.message;
    infoTxt.classList.add("error");
}

function requestApi(city){
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    infoTxt.innerText="Getting weather details";
    infoTxt.classList.add("pending")
    fetch(api).then(response => (response.json()).then(result => weatherDetails(result)));

}





function weatherDetails(info){
    console.log(info);

}

