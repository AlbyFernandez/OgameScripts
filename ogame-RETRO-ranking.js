// ==UserScript==
// @name        ogame retro ranking
// @namespace   ogame retro ranking
// @include     http://ogame1304.de/game/index.php*
// @version     1
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_xmlhttpRequest
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==


(function ()
 {


  $("#content table tbody th:nth-child(6) a").each(function( index, element ) {
    var onmouseover = $(element).attr('onmouseover');

    if(onmouseover) {
    var start_pos = onmouseover.indexOf('ranked ') + 7;
    var end_pos = onmouseover.indexOf('</td></tr><th><table>',start_pos);
    var text_to_get = onmouseover.substring(start_pos,end_pos);
      
    var res = text_to_get.split("return"); 
    var res2 = res[0].split(" ");
    console.log(res2[0]);
      if(res2[0] != "") {
       var top = parseInt(res2[0]);
        if (top == 0) {
           //$(element).append("<span style=\"color:black; font-size:9px\">#" + top + "</span>");
        }
         else if (top < 10) {
           $(element).append("<span style=\"color:#FEFC5C; font-size:9px\">#" + top + "</span>");
        }
        else if (top < 100) {
           $(element).append("<span style=\"color:yellow; font-size:9px\">#" + top + "</span>");
        }
        else if (top < 800) {
           $(element).append("<span style=\"color:gold; font-size:9px\">#" + top + "</span>");
        }
        else if (top < 1500) {
           $(element).append("<span style=\"color:orange; font-size:9px\">#" + top + "</span>");
        }
        else if (top < 2500) {
           $(element).append("<span style=\"color:#E77000; font-size:9px\">#" + top + "</span>");
        }
         else if (top < 4000) {
           $(element).append("<span style=\"color:LawnGreen; font-size:9px\">#" + top + "</span>");
        }
        else if (top < 6000) {
           $(element).append("<span style=\"color:green; font-size:9px\">#" + top + "</span>");
        }
        else {
          $(element).append("<span style=\"color:gray; font-size:9px\">#" + top + "</span>");
        }
      }
    }
  });
   
   
   
   $("#content table tbody th:nth-child(7) a").each(function( index, element ) {
    var onmouseover = $(element).attr('onmouseover');

    if(onmouseover) {
    var start_pos = onmouseover.indexOf('ranked ') + 7;
    var end_pos = onmouseover.indexOf('</td></tr><th><table>',start_pos);
    var text_to_get = onmouseover.substring(start_pos,end_pos);
      
    var res = text_to_get.split("return"); 
    var res2 = res[0].split(" ");
    console.log(res2[0]);
      if(res2[0] != "") {
       var top = parseInt(res2[0]);
        if (top == 0) {
           //$(element).append("<span style=\"color:black; font-size:9px\">#" + top + "</span>");
        }
         else if (top < 1) {
           $(element).append("<span style=\"color:#FEFC5C; font-size:9px\">#" + top + "</span>");
        }
        else if (top < 5) {
           $(element).append("<span style=\"color:yellow; font-size:9px\">#" + top + "</span>");
        }
        else if (top < 8) {
           $(element).append("<span style=\"color:gold; font-size:9px\">#" + top + "</span>");
        }
        else if (top < 15) {
           $(element).append("<span style=\"color:orange; font-size:9px\">#" + top + "</span>");
        }
        else if (top < 25) {
           $(element).append("<span style=\"color:#E77000; font-size:9px\">#" + top + "</span>");
        }
         else if (top < 40) {
           $(element).append("<span style=\"color:LawnGreen; font-size:9px\">#" + top + "</span>");
        }
        else if (top < 60) {
           $(element).append("<span style=\"color:green; font-size:9px\">#" + top + "</span>");
        }
        else {
          $(element).append("<span style=\"color:gray; font-size:9px\">#" + top + "</span>");
        }
      }
    }
  });
  
   }) ();
