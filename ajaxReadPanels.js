
$(document).ready(function(){
    alert("error");
   

                    $.ajax({
                        type: 'GET',
                        dataType: 'json',
                        url: "http://localhost/solarpanels/php/readpanels.php",
                        success:function(data){ 
                            var datastr = JSON.stringify(data) 
                            var allPanels = JSON.parse(datastr);
                            for (var key in allPanels) {
                                if (allPanels.hasOwnProperty(key)) {
                                  var panel  = allPanels[key];
                                  console.log(panel[0].Name);
                                }
                            }
                        }
                        
                    });
});
