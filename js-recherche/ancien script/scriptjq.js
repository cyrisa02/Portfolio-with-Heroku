$.getJSON("http://127.0.0.1:8000/api/formations?page=1",function(data)
{
    //console.log(data);
    $(data).each(function(i, formation){
        $('#form').append($("<tr>")
        .append($("<td>").append(formation.title))
        .append($("<td>").append(formation.id)));
    });
})
.done(function(){
    alert("Completed");
})
.fail(function(e){
    console.log('error:');
    console.error(e);
})
.always(function(){
    alert("always runs");
});
