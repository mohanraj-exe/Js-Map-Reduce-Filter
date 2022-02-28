//API-JSON parsing via jsCode

//1.Creating request object
var request = new XMLHttpRequest();

//2.Open my request connection
request.open('GET','http://api.countrylayer.com/v2/all?access_key=03f19c1e988e80c619638def72b42751');

//3.Send a request
request.send();

//4.Data after response
request.onload = function(){
    var data = JSON.parse(this.response);
    var res = data.filter(ele => ele.region == "Asia")
    console.log(res)
}
