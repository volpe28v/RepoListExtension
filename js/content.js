// リポジトリタブからリポジトリ名をスクレイピング
var repo_name = location.pathname.split('?')[0].split('/')[1];
var repo_url = "https://github.com/" + repo_name + "?tab=repositories";
$.get(repo_url, function(data) {
  var $data = $(data);
  var repos = $data.find(".repolist-name a");
  console.log(repos);

  var items = $.map((repos),
                  function(elem, i) {
                    var url = $(elem).attr("href");
                    var name = $(elem).text();
                      return {url: url, name: name};
                  });


  chrome.runtime.sendMessage({"items": items,},
                           function(response) {
                                console.log('message sent');
                           });
});

