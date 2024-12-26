//scripts
const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

//window loading reset
window.addEventListener("load",() => {
  degree.value="";
  celsiusField.innerHTML="";
})

convertBtn.addEventListener("click",(e)  =>{
    e.preventDefault();
    convertTocelsius();

    //add loading feature
    convertBtn.innerHTML = "<span><i class='fa fa-spinner fa-spin'></i>converting..</span>";
   setTimeout(() => {
      convertBtn.innerHTML="<span>convert</span>";
   }, 1000);
})

function convertTocelsius(){
    let inputValue = degree.value;

    if (isNaN(inputValue) || inputValue === "") {
        celsiusField.innerHTML = "Please enter a valid number.";
        return;
      }
      
      inputValue = parseFloat(inputValue);

      if (tempType.value === "Kelvin" && inputValue < 0) {
        celsiusField.innerHTML = "Kelvin temperature must be greater than or equal to 0.";
        return;
    }  

    console.log("Input value:", inputValue); // Check input value
    console.log("Selected type:", tempType.value); // Check selected type

    setTimeout(() => {
        if(tempType.value === "fahrenheit"){
            const fahrenheitTocelsius = (inputValue -32)*(5/9);  
            console.log("Fahrenheit to celsius:", fahrenheitTocelsius);   
            celsiusField.innerHTML = `${fahrenheitTocelsius.toFixed(3)} °c`;
        }
        else if(tempType.value === "Kelvin"){
            const KelvinTocelsius = inputValue -273.15;
            console.log("Kelvin to Celsius:", KelvinTocelsius); 
            celsiusField.innerHTML = `${KelvinTocelsius.toFixed(3)} °c`;
        }
    }, 1200);  //yayyyy!!!
}
