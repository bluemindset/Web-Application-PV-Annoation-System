
/*On page load get the encaspulated json from the readpanels and 
create markers to insert the data inside*/

$(document).ready(function(){
    $("#loginButton").click(function(){
                $.ajax({
                        type: 'GET',
                        dataType: 'json',
                        async: false,
                        url: "http://localhost/solar/php/readuser.php",
                        success:function(data){
                             var datastr = JSON.stringify(data);
                                var allUsers = JSON.parse(datastr);
                                for (var key in allUsers) {
                                    if (allUsers.hasOwnProperty(key)) {
                                      var users  = allUsers[key];
                                      for(var i=0;i<users.length;i++)
                                      {                                           

                                        if(users[i].UserName=== $("#username").val())
                                            {
                                                $.ajax({
                                                    type:'POST',
                                                    async : false,
                                                    url: "http://localhost/solar/php/passevaluate.php",
                                                    data: { Hash: users[i].HashedP,
                                                            Pass:  $("#password").val()
                                                         },
                                                    success: function(result)
                                                    {         
                                                        $valid = JSON.stringify(result);
                                                        $valid_par=JSON.parse($valid);
                                                        alert($valid_par);
                                                        if ($valid_par === "true")
                                                        {
                                                            window.location.href = "http://localhost/solar/";
                                                            document.location.reload();
                                                        }
                                                        else if($valid_par==="blocked")
                                                            alert("blocked site,too many attempts");
                                                        else
                                                            alert("You have entered wrong password");

                                                    }
                            
                                            });
                                        }   
                                    }
                                }
                            }
                },
            });
        });
    });