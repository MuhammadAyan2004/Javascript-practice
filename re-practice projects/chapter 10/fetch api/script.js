async function weather() {
    
    const response = await fetch('https://goweather.herokuapp.com/weather/Ny');
    if(response.status === 404){
        console.log("invalid input");
    }else{
        let data = await response.json()
        console.log(data);
    }
}
weather()
// api.then((response)=>{
//     return response.json()
// }).then((response)=>{
//     console.log(response);
// })
