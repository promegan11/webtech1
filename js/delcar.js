$(document).ready(() => {
    getManufacturers();

    $("form").on('submit', (e) => {
        e.preventDefault();
        let id = $("form").find("select[name='manufacturer']").val();
        if (confirm("Biztosan törlölni szeretné a kijelölt autót? ")) {
            $.ajax({
                url: 'https://webtechcars.herokuapp.com/api/cars/' + id,
                type: "DELETE",
                success: () => {
                    window.alert("Sikeresen törlésre került a kijelölt autó")
                    $('#content').load("delcar.html")
                }
            })
        }
    })
})

function getManufacturers() {
    $("select").children().remove();
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", (data) => {
        $.each(data, (key, value) => {
            $('#cardetails').append("<tr>");
            $.each(value, (key, value) => {
                $('#cardetails').append("<td>" + key + ": " + value + "</td>");
            })
            $('#cardetails').append("</tr>");
            $("select").append("<option value=" + value._id + ">" + value.name + "</option>");
        })
    })
}