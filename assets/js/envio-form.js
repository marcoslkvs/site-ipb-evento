$("#form-inscription").on('submit', function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var mail = $("#mail").val();
    var city = $("#city").val();
    var phone = $("#phone").val();
    var age = $("#age").val();

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfkZ5L_vXn-98KjntA9xF2Dal5xRycglyRQrZ0x4HqLCZ1YjA/formResponse",
        data: {
            "entry.1008563448": name,
            'entry.1274403812': mail,
            'entry.67419885': age,
            'entry.995219127': city,
            'entry.1382265177': phone
        },
        type: "POST",
        dataType: "xml",
        statusCode: 
        {
            0: function () {
                $("input").val("");
                iziToast.success({
                    title: 'Sucesso!',
                    message: 'Sua inscrição foi feita com sucesso! Em breve retornaremos!',
                    position: 'bottomRight',
                });
            }
        },
        200: function () {
            $("input").val("");
            iziToast.success({
                title: 'Sucesso!',
                message: 'Sua inscrição foi feita com sucesso! Em breve retornaremos!',
                position: 'bottomRight',
            });
        }
    }
    );
});	