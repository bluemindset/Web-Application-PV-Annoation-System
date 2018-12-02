

$(document).ready(function() {
    $("#submit").click(function(){
        $.ajax({
            url: "text.php",
            type: "POST",
            data: {
                amount: $("#amount").val(),
                firstName: $("#firstName").val(),
                lastName: $("#lastName").val(),
                email: $("#email").val()
            },
            dataType: "JSON",
            success: function (jsonStr) {
                $("#result").text(JSON.stringify(jsonStr));
            }
        });
    });
});


