
function onRequest(info, tab) {
	var selection = info.selectionText;
//do something with the selection
  var serviceCall = 'https://www.google.com/#q=' + selection;
  chrome.tabs.create({url: serviceCall});
};

function onTranslate(info, tab) {
	var selection = info.selectionText;
//do something with the selection
  var serviceCall = 'https://translate.google.com/?q=' + selection;
  chrome.tabs.create({url: serviceCall});
};

chrome.contextMenus.create({
	id: "google_search",
	title: "Search with Google",
	"contexts":["selection"],
	"onclick" : onRequest
});

chrome.contextMenus.create({
	id: "google_translate",
	title: "Translate with Google",
	"contexts":["selection"],
	"onclick" : onTranslate
});

