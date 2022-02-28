//API-JSON parsing via jsCode

//1.Creating request object
var request = new XMLHttpRequest();

//2.Open my request connection
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');

//3.Send a request
request.send();

//4.Data after response
request.onload = function(){
    var data = JSON.parse(this.response);
    // for(i in data){
    //     console.log(data[i].name)
    // }
    data.forEach(name)
    function name(arr){
        console.log(arr.name)
    }
}
