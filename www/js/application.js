$( document ).ready(function() {
      getJsonData();

      //alert("dom ready")
});


function getJsonData(){
  
      $.getJSON("data/mlb.json", function(result){

    console.log(result.sports[0].leagues[0].events);

    result.sports[0].leagues[0].events[0].venues[0].city

    //   alert(result.sports[0].leagues[0].events[0].competitions[0].competitors[0].team.name)

      /*For loop to display all events in a loop*/
      for(var i=0;i<result.sports[0].leagues[0].events.length;i++){
     
      /*Teams*/
      var team1Name=result.sports[0].leagues[0].events[i].competitions[0].competitors[0].team.location+' '+result.sports[0].leagues[0].events[i].competitions[0].competitors[0].team.name;
      var team2Name=result.sports[0].leagues[0].events[i].competitions[0].competitors[1].team.location+' '+result.sports[0].leagues[0].events[i].competitions[0].competitors[1].team.name;
      var team1WinLoss='('+result.sports[0].leagues[0].events[i].competitions[0].competitors[0].team.record.wins+"-"+result.sports[0].leagues[0].events[i].competitions[0].competitors[0].team.record.losses+')';
      var team2WinLoss='('+result.sports[0].leagues[0].events[i].competitions[0].competitors[1].team.record.wins+"-"+result.sports[0].leagues[0].events[i].competitions[0].competitors[1].team.record.losses+')';
      var team1ColorName=result.sports[0].leagues[0].events[i].competitions[0].competitors[0].team.color;
      var team2ColorName=result.sports[0].leagues[0].events[i].competitions[0].competitors[1].team.color;

      /*Score*/
      var homeTeamScore=result.sports[0].leagues[0].events[i].competitions[0].competitors[0].score;
      var awayTeamScore=result.sports[0].leagues[0].events[i].competitions[0].competitors[1].score;


      /*Pitchers*/
      var homeStartingPitcher=result.sports[0].leagues[0].events[i].competitions[0].stats.homeStartingPitcher.athlete.firstName+' '+result.sports[0].leagues[0].events[i].competitions[0].stats.homeStartingPitcher.athlete.lastName;
      var awayStartingPitcher=result.sports[0].leagues[0].events[i].competitions[0].stats.awayStartingPitcher.athlete.firstName+' '+result.sports[0].leagues[0].events[i].competitions[0].stats.awayStartingPitcher.athlete.lastName;
      var homePitcherLink=result.sports[0].leagues[0].events[i].competitions[0].stats.homeStartingPitcher.athlete.links.web.href;
      var awayPitcherLink=result.sports[0].leagues[0].events[i].competitions[0].stats.awayStartingPitcher.athlete.links.web.href;


      /*Umpires*/
      var firstBaseUmpire=result.sports[0].leagues[0].events[i].competitions[0].stats.officials.firstBaseUmpire;
      var secondBaseUmpire=result.sports[0].leagues[0].events[i].competitions[0].stats.officials.secondBaseUmpire;
      var thirdBaseUmpire=result.sports[0].leagues[0].events[i].competitions[0].stats.officials.thirdBaseUmpire;
      var homeUmpire=result.sports[0].leagues[0].events[i].competitions[0].stats.officials.homeUmpire;

    // console.log(result.sports[0].leagues[0].events[i].competitions[0].status.description)

      /*Links*/
      var eventsLink=result.sports[0].leagues[0].events[i].links.api.events.href;
      var newsLink=result.sports[0].leagues[0].events[i].links.api.news.href;
      var notesLink=result.sports[0].leagues[0].events[i].links.api.notes.href;
      var nowLink=result.sports[0].leagues[0].events[i].links.api.now.href;


      /*If statement. if the status of the game is final, then we will display the following links*/
      if(result.sports[0].leagues[0].events[i].competitions[0].status.description=="FINAL"){

      /*Web*/
      var recap=result.sports[0].leagues[0].events[i].links.web.recap.href;
      var boxscoreButton=result.sports[0].leagues[0].events[i].links.web.boxscore.href;
      var liveUpdateButton=result.sports[0].leagues[0].events[i].links.web.liveUpdate.href;
      var playByPlayButton=result.sports[0].leagues[0].events[i].links.web.playByPlay.href;
      var conversationButton=result.sports[0].leagues[0].events[i].links.web.conversation.href;

      /*Mobile*/
      var recapMobile=result.sports[0].leagues[0].events[i].links.mobile.recap.href;
      var boxscoreMobile=result.sports[0].leagues[0].events[i].links.mobile.boxscore.href;
      var liveUpdateMobile=result.sports[0].leagues[0].events[i].links.mobile.liveUpdate.href;
      /*Display of the links in html from the condition statement above*/
      var linksStr='<div class="col-sm-2"><td><b>Links</b><br><a href="'+eventsLink+'">Events</a> <a href="'+newsLink+'">News</a> <a href="'+notesLink+'">Notes</a> <a href="'+nowLink+'">Now</a> <br><b>Web</b><br><a href="'+recap+'" class="btn btn-info" role="button">Recap</a><a href="'+playByPlayButton+'" class="btn btn-info" role="button">Play-by-Play</a><br><a href="'+boxscoreButton+'" class="btn btn-info" role="button">Boxscore</a><a href="'+conversationButton+'" class="btn btn-info" role="button">Conversation</a><br><a href="http://espn.go.com/mlb/recap?gameId=350506120&ex_cid=espnapi_internal" class="btn btn-info" role="button">Live update</a><br><b>Mobile</b><br><a href="'+recapMobile+'" class="btn btn-info" role="button">Recap</a><a href="'+boxscoreMobile+'" class="btn btn-info" role="button">Boxscore</a><a href="'+liveUpdateMobile+'" class="btn btn-info" role="button">Live update</a></td></div>'
  
      /*Else if the status of the game is in progress, then display the following links*/
     }else if(result.sports[0].leagues[0].events[i].competitions[0].status.description=="IN PROGRESS"){
     
      /*Web*/
      var boxscoreButton=result.sports[0].leagues[0].events[i].links.web.boxscore.href;
      var liveUpdateButton=result.sports[0].leagues[0].events[i].links.web.liveUpdate.href;
      var playByPlayButton=result.sports[0].leagues[0].events[i].links.web.playByPlay.href;
      var conversationButton=result.sports[0].leagues[0].events[i].links.web.conversation.href;

      /*Mobile*/
      var boxscoreMobile=result.sports[0].leagues[0].events[i].links.mobile.boxscore.href;
      var liveUpdateMobile=result.sports[0].leagues[0].events[i].links.mobile.liveUpdate.href;
      /*Display of the links in html from the condition statement above*/
      var linksStr='<div class="col-sm-2"><td><b>Links</b><br><a href="'+eventsLink+'">Events</a> <a href="'+newsLink+'">News</a> <a href="'+notesLink+'">Notes</a> <a href="'+nowLink+'">Now</a> <br><b>Web</b><br><a href="'+playByPlayButton+'" class="btn btn-info" role="button">Play-by-Play</a><br><a href="'+boxscoreButton+'" class="btn btn-info" role="button">Boxscore</a><a href="'+conversationButton+'" class="btn btn-info" role="button">Conversation</a><br><a href="http://espn.go.com/mlb/recap?gameId=350506120&ex_cid=espnapi_internal" class="btn btn-info" role="button">Live update</a><br><b>Mobile</b><br><a href="'+boxscoreMobile+'" class="btn btn-info" role="button">Boxscore</a><a href="'+liveUpdateMobile+'" class="btn btn-info" role="button">Live update</a></td></div>'
     
     /*Else if the status of the game to be scheduled a different day, then display the following links*/
     }else if(result.sports[0].leagues[0].events[i].competitions[0].status.description=="SCHEDULED"){
       
      /*Pickcenter button*/
      var webPickCenterStr =result.sports[0].leagues[0].events[i].links.web.pickcenter.href;

      console.log(result.sports[0].leagues[0].events[i].links.web);
      //var webPreviewStr=result.sports[0].leagues[0].events[i].links.web.preview.href;
     // var webTicketsStr = result.sports[0].leagues[0].events[i].links.web.tickets.href
     /*Web conversation button*/
      var webConverstation = result.sports[0].leagues[0].events[i].links.web.conversation.href;

      /*Mobile*/
      var mobPickCenterStr =result.sports[0].leagues[0].events[i].links.mobile.pickcenter.href;
     // var mobPreviewStr=result.sports[0].leagues[0].events[i].links.mobile.preview.href;
     // var mobTicketsStr = result.sports[0].leagues[0].events[i].links.mobile.tickets.href;
     /*Display of the links in html from the condition statement above*/
    var linksStr='<div class="col-sm-2"><td><b>Links</b><br><a href="'+eventsLink+'">Events</a> <a href="'+newsLink+'">News</a> <a href="'+notesLink+'">Notes</a> <a href="'+nowLink+'">Now</a> <br><b>Web</b><br><a href="'+webPickCenterStr+'" class="btn btn-info" role="button">Pick Center</a><br><a href="'+webConverstation+'" class="btn btn-info" role="button">Conversation</a><br><b>Mobile</b><br><a href="'+mobPickCenterStr+'" class="btn btn-info" role="button">Pick Center</a></div>'
  }

    /*Teams details*/
    var teamStr ='<div class="container-fluid"><div class="row"><div class="col-sm-2"><td id="result"><br><img src="'+result.sports[0].leagues[0].events[i].competitions[0].competitors[0].team.imageIcon+'" alt="Logo" ><br><font color="'+team1ColorName+'">'+team1Name+'</font><br>'+team1WinLoss+'<br><img src="'+result.sports[0].leagues[0].events[i].competitions[0].competitors[1].team.imageIcon+'" alt="Logo" ><br><font color="'+team2ColorName+'">'+team2Name+'</font><br>'+team2WinLoss+'</td></div>'
    /*Pitchers details*/
    var pitcherDetailsStr='<div class="col-sm-1"><b> Pitchers: </b><br> <br><td> <b>Home </b><br> <a href="'+homePitcherLink+'">'+homeStartingPitcher+' </a><br> <br><b> Away </b> <br><a href="'+awayPitcherLink+'">'+awayStartingPitcher+'</a><br> </td></div>';
    /*Staduim details*/
    var stadiumStr='<div class="col-sm-2"> <b>'+result.sports[0].leagues[0].events[i].venues[0].name+'</b> <br> '+result.sports[0].leagues[0].events[i].venues[0].city+', '+result.sports[0].leagues[0].events[i].venues[0].state+'<img src="'+result.sports[0].leagues[0].events[i].venues[0].images.day.medium.href+'" alt="Nationals Park" ></div>';


      /*Status of the game with conditions applied*/
        if(result.sports[0].leagues[0].events[i].competitions[0].status.detail=="Final"){
          var resultStr= '<div class="col-sm-1"><tr><td><b>Final</b></td><br><br><br><td>'+homeTeamScore+'</td><br><br><br><br><br><td>'+awayTeamScore+'</td></tr><br></table></div>'
     
          }else if(result.sports[0].leagues[0].events[i].competitions[0].status.detail=="Bot 2nd"){

            
           resultStr='<div class="col-sm-1"><tr><td><b>Bot 2nd - In Progress</b></td><br><br><br><td>'+homeTeamScore+'</td><br><br><br><br<br><td>'+awayTeamScore+'</td></tr><br></table></div>';
       

        }else if(result.sports[0].leagues[0].events[i].competitions[0].status.detail=="Top 4th"){

          resultStr='<div class="col-sm-1"><tr><td><b>Top 4th - In Progress</b></td><br><br><br><td>'+homeTeamScore+'</td><br><br><br><br<br><td>'+awayTeamScore+'</td></tr><br></table></div>';
     

        }else{
 
                var startDate =String(result.sports[0].leagues[0].events[i].competitions[0].status.detail).substring(0,10)

             
              resultStr='<div class="col-sm-1"><tr><td><b>'+startDate+'</b></td></table></div>';
     
        }

      
        /*Check if umpire is empty = true; dont display anything.*/
        if ($.isEmptyObject(result.sports[0].leagues[0].events[i].competitions[0].stats.officials)){

          umpiresStr='<div class="col-sm-2"><b> Umpires: </b></div>';
  
        }else{
         
              umpiresStr='<div class="col-sm-2"><b> Umpires: </b><br><br>First Base - '+firstBaseUmpire+' <br>Second Base - '+secondBaseUmpire+'<br>Third Base - '+thirdBaseUmpire+'<br>Home - '+homeUmpire+'<br></div>';
        }
       
        /*Output.Appending all vars in sequence*/
     $("#mainContainer").append(teamStr+resultStr+pitcherDetailsStr+umpiresStr+linksStr+stadiumStr);

    }

    }); 

}





    

  


































    //  competitors

    //  console.log(result.sports[0].leagues[0].events[0].competitions[0].competitors[0].team.record.wins);

        //  alert(result.sports[0].leagues[0].events[0].competitions[0].competitors[0].team.name);
     /* for(var i = 0;i<result.sports[0].leagues[0].events.length;i++){

     var teamSName = '<div class="container-fluid"><div class="row"><div class="col-sm-2"><td id="result">Final<br>'+result.sports[0].leagues[0].events[i].competitions[0].competitors[0].team.name+'<br>('+result.sports[0].leagues[0].events[i].competitions[0].competitors[0].record.wins+'-'+result.sports[0].leagues[0].events[i].competitions[0].competitors[0].record.losses+')<br>'+result.sports[0].leagues[0].events[i].competitions[0].competitors[1].team.name+'<br>(13-15)</td></div>'
     var score = '<div class="col-sm-1"><table border="1"><tr><td><b>R</b></td><td><b>H</b></td><td><b>E</b></td></tr><tr><td>7</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>0</td></tr></table></div>'

    var pitcherDetails = '<div class="col-sm-2"><td>Win<br><a href="http://espn.go.com/mlb/player/_/id/28976/max-scherzer?ex_cid=espnapi_internal">Max Scherzer</a><br>Loss<br><a href="http://espn.go.com/mlb/player/_/id/31079/tom-koehler?ex_cid=espnapi_internal">Tom Koehler</a><br>Save<br><a href="http://espn.go.com/mlb/player/_/id/30534/drew-storen?ex_cid=espnapi_internal">Drew Storen</a></td> </div>'
    var vanueDetails = '<div class="col-sm-2"> Nationals Park <br> Washington D.C<img src="assets/img/nationals_park.jpg" alt="Nationals Park" ></div></div></div>'

    var mainStr = teamSName+score+pitcherDetails+vanueDetails;

    $("#mainContainer").append(mainStr);

       }*/
