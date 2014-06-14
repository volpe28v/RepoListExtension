var parsedItems = chrome.extension.getBackgroundPage().parsedItems;
var base_url = "https://github.com";

// Popupにリストを生成する
$(document).ready(function() {
  $('#repo_count').html(parsedItems.length + " ").append($('<span>').html("repos"));

  parsedItems.forEach(function(item){
    $("#list").append(
      $('<tr>').append(
        $('<td>').html(item.star).addClass("star")).append(
        $('<td>').addClass("title").attr("nowrap",'').append(
          $('<a/>').attr("href", base_url + item.url).attr("target","_blank").html(item.name)
          )
        )
      )
  });
});
