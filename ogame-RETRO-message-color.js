// ==UserScript==
// @name        ogame retro message color
// @namespace   ogame retro message color
// @include     http://ogame1304.de/game/index.php?page=messages*
// @version     1
// @grant       none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @author       AlbyFernandez
// ==/UserScript==
(function ()
 {
  

 $('#content tr.header table tbody tr td[colspan]:nth-child(2)').each(function( index, element ) {
   //console.log($(element).text());
   var str = $(element).text();    
   if (str.indexOf("informs you:") > -1) {
    $(element).css("background-color","green");
   }
   if (str.indexOf("A foreign fleet from planet") > -1) {
    $(element).css("color","orange");
   }
 });
  
$('#content tr.header table tbody tr th:nth-child(3) a').each(function( index, element ) {
   //console.log($(element).text());
   $(element).parent().css("background-color","blue").css("color","lime"); 

 });
  
  $('#content tr.header table tbody tr th:nth-child(4) a span').each(function( index, element ) {
    if ($(element).text().indexOf("(V:0,A:0)") > -1) {
    $(element).css("color","gray");
   }

 });
  
  
  }) ();
