<SCRIPT language = javascript>

function choice () {
  var t = document.getElementById("search-engine");
  var choice_default = s.options[s.selectedIndex].value;

  if (search-engine == "Google") {
    document.getElementById('search-box').action = "http://www.google.com/search";
  }
  else if (search-engine == "DuckDuckGo") {
    document.getElementById('search-box').action = "https://duckduckgo.com/?q";
  }
}
