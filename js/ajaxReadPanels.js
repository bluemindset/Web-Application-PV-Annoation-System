
$(document).ready(function(){
    alert("error");
   

                    $.ajax({
                        type: 'GET',
                        dataType: 'json',
                        url: "http://localhost/solarpanels/php/test.json",
                        success:function(data){
                            $("body").append(JSON.stringify(data));
                        }
                    });
});
