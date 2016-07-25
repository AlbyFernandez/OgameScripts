// ==UserScript==
// @name        ogame retro new inactive noticer
// @namespace   ogame retro new inactive noticer
// @include     http://ogame1304.de/game/index.php*
// @version     1
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_xmlhttpRequest
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @author AlbyFernandez
// ==/UserScript==


(function ()
 {


  $("#content table tbody th:nth-child(6) a span.inactive").each(function( index, element ) {
    var playername = $(element).text();
    if (localStorage.getItem(playername + "-known-inactive") == null ||localStorage.getItem(playername + "-known-inactive") == false) {
            
           $(element).css("color","violet");
           $(element).parent().parent().append("<span onclick=\"localStorage.setItem('"+playername +"-known-inactive', true)\" style=\"cursor: pointer;\">*unmark*</span>");
           ;
         
		   } 
    
   
  });
   
   
  
  
   }) ();
