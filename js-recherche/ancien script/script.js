var jsonData;

$.getJSON("http://127.0.0.1:8000/api/formations?page=1",function(data){
    jsonData = data;
    console.log(jsonData);
});