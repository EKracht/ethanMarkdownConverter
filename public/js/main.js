'use strict';

$(document).ready(init);

function init(){
  $('button').on('click', sendReq);
}

function sendReq(){
  var input = $('.input').val();

  $.ajax({
    type: "POST",
    url: "/",
    data: {string: input}
  })
  .done(function(data){
    $('.output').empty();
    var parsedData = $.parseHTML(data);
    $('.output').append(parsedData);
  })
  .fail(function(error){
  })
}