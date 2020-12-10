$(document).ready(function (){
    $.getJSON("https://webtechcars.herokuapp.com/api/cars",function (data){
        var table= $("#carTable");
        $.each(data,function (key,value){
            var row = $('<tr></tr>');

            $.each(value,function (key,value){

                if (key!="_id") {

                    $(row).append($('<td>' + value + '</td>'));
                }
            })

            $(table).append(row);

        })

    })
});