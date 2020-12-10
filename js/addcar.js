$(document).ready(function () {

    $('#addcar').on('submit', function (submit) {

        var carSchema = {
            name: $('#name').val(),
            consumption: $('#consumption').val(),
            color: $('#color').val(),
            manufacturer: $('#manufacturer').val(),
            avaiable: $('#avaiable').val(),
            year: $('#year').val(),
            horsepower: $('#horsepower').val()
        };
        submit.preventDefault();
        if(confirm("Biztosan hozzá szeretné adni ezt az autót?")) {
            jQuery.ajax({
                type: "post",
                url: 'https://webtechcars.herokuapp.com/api/cars',
                data: JSON.stringify(carSchema),
                contentType: "application/json",
                success: function () {
                    window.alert("Sikeresen feltöltésre került a megadott autó");
                    $('#content').load("carform.html")
                }
            });
        }
    })
})