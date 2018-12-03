
$(document).ready(function(){
    alert("error");
   

                    $.ajax({
                        type: 'GET',
                        dataType: 'json',
                        url: '/solarpanels/php/readpanels',
                        success:function(data){
                         alert(data);
                        }
                    });
});
