$(document).ready(function () {
    $(document).on("keypress", function(e) {
        if (e.which == 13) {
            let url = ``;
            async function mynews() {
                let responce = await fetch(url);
                let data = await responce.json();
                console.log(data);
            }
            mynews();
        }
    });
});