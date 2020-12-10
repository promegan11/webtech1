$(document).ready(() => {
    getManufacturers();

    $("form").on('submit', (e) => {
        e.preventDefault();

        let id = $("form").find("select[name='manufacturer']").val();
        if (confirm("Biztosan törlölni szeretné a kijelölt gyártót? ")) {
            $.ajax({
                url: 'https://webtechcars.herokuapp.com/api/manufacturers/' + id,
                type: "DELETE",
                cors: true,
                crossDomain: true,
                head: {"Access-Control-Allow-Origin": "*"},
                contentType: "application/json",
                success: () => {
                    window.alert("Sikeresen törlésre került a kijelölt gyártó")
                    $('#content').load("delmanufacturer.html")
                }

            })
        }
    })
})

function getManufacturers() {
    $("select").children().remove();
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", (data) => {
        $.each(data, (key, value) => {

            $('#manufacturerdetails').append("<tr>");
            $.each(value, (key, value) => {
                $('#manufacturerdetails').append("<td>"+key+": " +value+"</td>");
            })
            $('#manufacturerdetails').append("</tr>");
            $("select").append("<option value=" + value._id + ">" + value.name + "</option>");
        })
    })
}
