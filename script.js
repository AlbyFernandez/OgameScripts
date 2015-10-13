// ==UserScript==
// @name        AlbyFernandez/OgameSelectAllOnCC
// @namespace   AlbyFernandez/OgameSelectAllOnCC
// @description selecciona automaticamente todos en mensajes
// @include     http://s*-es.ogame.gameforge.com/game/index.php?page=messages*
// @version     1
// @grant       none
// ==/UserScript==

(function () {
  
  $(document).ajaxComplete(function(event,request, settings){
   $("#select2.select2-hidden-accessible").val(["200"]);
    $(".select2-selection__rendered").append(
    '<li title="Todos los jugadores" class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">×</span>Todos los jugadores</li>'
      );
});

  })();
