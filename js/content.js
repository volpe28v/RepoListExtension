// リポジトリタブからリポジトリ名をスクレイピング
var repo_name = location.pathname.split('?')[0].split('/')[1];
var repo_url = "https://github.com/" + repo_name + "?tab=repositories";
$.get(repo_url, function(data) {
  var $data = $(data);
  var repos = $data.find(".repolist").children("li");

  // リポジトリ情報を抜き出す
  var items = $.map((repos),function(repo, i) {
    var title = $(repo).find(".repolist-name a");
    var url = $(title).attr("href");
    var name = $(title).text();
    var star = Number($(repo).find(".stargazers").text().replace(",",''));
    return {url: url, name: name, star: star};
  });

  chrome.runtime.sendMessage({"items": items,},function(response) {
    console.log('message sent');
  });
});

