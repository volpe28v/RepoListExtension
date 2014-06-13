var parsedItems = chrome.extension.getBackgroundPage().parsedItems;
var base_url = "https://github.com";

// Popupにリストを生成する
$(document).ready(function() {
  parsedItems.forEach(function(item){
    $("#list").append(
      $('<li/>').append(
        $('<a/>').attr("href", base_url + item.url).attr("target","_blank").html(item.name)
        )
      );
  });
});
