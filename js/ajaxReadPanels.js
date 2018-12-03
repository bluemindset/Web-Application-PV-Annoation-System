
$(document).ready(function(){
    alert("error");
   

                    $.ajax({
                        type: 'GET',
                        dataType: 'json',
                        url: "http://localhost/solarpanels/php/readpanels.php",
                        success:function(data){
                            $("body").append(JSON.stringify(data));
                        }
                    });
});
