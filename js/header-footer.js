{
// headerの読み込み
  function header(rootDir){
    $.ajax({
        url: rootDir + "include/header.html",  // 読み込むHTMLファイル
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); //header.htmlの{$root}を置換
            document.write(html);
        }
    });
  }

// footerの読み込み
  function footer(rootDir){
    $.ajax({
        url: rootDir + "include/footer.html", // 読み込むHTMLファイル
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); //footer.htmlの{$root}を置換
            document.write(html);
        }
    });
  }

}
