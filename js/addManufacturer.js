$( document ).ready(function() {
    document.querySelector("#date").value = new Date().toISOString().substr(0, 10);
    $(function () {
        $('#addmenu').on('submit', function (submit) {
            let Schema = {
                name: $('#name').val(),
                country: $('#country').val(),
                founded: $('#date').val()
            };
            submit.preventDefault();
            if(confirm("Biztosan hozzá szeretné adni ezt a gyártót?")) {
                $.ajax({
                    url: 'https://webtechcars.herokuapp.com/api/manufacturers',
                    type: "post",
                    contentType: "application/json",
                    data: JSON.stringify(Schema),
                    success: function () {
                        window.alert("Sikeresen feltöltésre került a megadott gyártó");
                        $('#content').load("manufacturerform.html");
                    }
                })
            }
        });
    });
})