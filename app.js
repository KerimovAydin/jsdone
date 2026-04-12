$(document).ready(function () {

    $('h2').click(function (e) {
        e.preventDefault();
        $('h2').html(1234567);
    })

    console.log($('input').val());

    $(document).on("keypress", function(e) {
        if (e.which == 13) {
            let url = `https://apidemo-wine.vercel.app/api/news`;
            async function mynews() {
                let responce = await fetch(url);
                let data = await responce.json();
                console.log(data);
            }
            mynews();
        }
    });
});