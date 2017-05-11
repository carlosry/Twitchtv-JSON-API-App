
//n1xprhq7o7qitf55pxsatopvpzrd6r


$(document).ready(function(){
  
  var usernames = ["freecodecamp","ESL_SC2", "OgamingSC2", "cretetion", "habathcx", "RobotCaleb", "noobs2ninjas", "mightymouseufc125", "geersart", "rampageishuman", "menacebermudez","blessedmma","angieoverkill","astrogirllive"];
  
  for(var i = 0; i < usernames.length; i++){
    
    $.ajax({
      type: "GET",
      url: "https://api.twitch.tv/kraken/channels/" + usernames[i],
      headers: {
      "client-ID": "n1xprhq7o7qitf55pxsatopvpzrd6r"
      },
      success: function(data1){
        //console.log(data1);
        
        //grab properties from data1
        var name = data1.name;
        var userURL = data1.url;
        var image = data1.logo;
        var game = data1.game;
        
        //call and grab streams API
        var twitchStreamsAPI = "https://api.twitch.tv/kraken/streams/" + data1.name + "?client_id=n1xprhq7o7qitf55pxsatopvpzrd6r";

        $.getJSON(twitchStreamsAPI, function(data2){
          
          var streaming = data2.stream;
          //console.log(data2);
          
          if(streaming === null){
            $("#user").append("<a target='_blank' href='" + userURL + "'>" + name + "</a><br>");
            $("#img").append("<img src='" + image + "'><br>");
            $("#status").append("OFFLINE<br>");
            $("#game").append("N/A<br>");
            
          } else {
            $("#user").append("<a target='_blank' href='" + userURL + "'>" + name + "</a><br>");
            $("#img").append("<img src='" + image + "'><br>");
            $("#status").append("ON<br>");
            $("#game").append(game.slice(0, 22) + "<br>");
          }
      
        });
          
      },
      error: function(err){
        //alert("Error, user no longer twitching!"); 
        $("#user").append("Invalid User<br>");
        $("#status").append("Not Found<br>");
        $("#game").append("N/A<br>");
        
      }
    });
  }
});