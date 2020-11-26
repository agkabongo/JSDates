
var months = ['January', 'February','March','April','May','June','July', 'August', 'September','October','November','December'];


   
    var x = document.createElement('div');
    x.className = 'container'
    document.body.appendChild(x)


    var d = new Date();
    var current = d.toLocaleString('fr-FR', {timeZone: 'Europe/Brussels'})
     var american = d.toLocaleString('en-US', { timeZone: 'America/Anchorage' })
     var iceland = d.toLocaleString('en-US', { timeZone : 'Iceland'})
     
    /*
    var year = d.setUTCFullYear();
    var month = months[d.setUTCMonth()];
    var day = d.setUTCDate();
    var hrs = d.getUTCHours();
    var min = d.getUTCMinutes();
    var sec = d.getUTCSeconds();*/
    x.innerHTML = 'Brussels - ' + current + '<br>' + 'Anchorage - ' + american + '<br>' + 'Reykjavik - ' + iceland
 
    /*x.innerHTML = day + ' ' + month + ' '+ year + ' ' + hrs + " : " + min + " : " + sec;*/