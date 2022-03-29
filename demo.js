function checkwheather(){
    var request = new XMLHttpRequest()
    var city = document.getElementById("city").value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68d7e8b5cb223e32931dce1f8c4e41a6`
    request.open('GET', url);

    request.onload=function(){
        var result = JSON.parse(this.response)
        console.log(result.main.temp);
        document.getElementById("tempature").value=result.main.temp
       

        // console.log(result)  
    }
    request.send()
}