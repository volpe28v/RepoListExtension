// content.jsから送られてきたデータを保持する
var parsedItems = [];
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      parsedItems = request.items;
      var res = 'finish';
      sendResponse(res);
});
