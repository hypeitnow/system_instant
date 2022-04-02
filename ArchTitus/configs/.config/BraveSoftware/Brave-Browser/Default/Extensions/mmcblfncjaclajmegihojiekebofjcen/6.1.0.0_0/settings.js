// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// @externs_url https://raw.githubusercontent.com/google/closure-compiler/master/contrib/externs/chrome_extensions.js
// ==/ClosureCompiler==

var ownBitmap;
var storedCanvas = document.createElement('canvas');
var ownIconSelected = false;
var rightMnuId = null;
var settings;

function rightMnuOnOff() {
 
	if (settings.addToMnu && rightMnuId==null) {
		
		rightMnuId = chrome.contextMenus.create({
			"title" : "Plugins",
			"type" : "normal",
			"contexts" : ["page", "frame", "selection", "link", "editable", "image", "video", "audio"],
            id: 'menu1', // you'll use this in the handler function to identify this context menu item
		});
	//don't use "onClick()" handler above because it requires persistent script (useless resource usage), use addListener instead (below) 	
        //submenus
            chrome.contextMenus.create({
              title: "Global Content Settings",
              parentId: "menu1",
              contexts:["page", "frame", "selection", "link", "editable", "image", "video", "audio"],
                id: "globalMnuSet1"
            });
            chrome.contextMenus.create({
              title: "Allow/Block on Current Site",
              parentId: "menu1",
              contexts:["page", "frame", "selection", "link", "editable", "image", "video", "audio"],
                id: "currSiteAllBlock1"
            });          
            chrome.contextMenus.create({
              title: "Components List",
              parentId: "menu1",
              contexts:["page", "frame", "selection", "link", "editable", "image", "video", "audio"],
                id: "compMnuSet1"
            }); 
            chrome.contextMenus.create({
              title: "Chrome Cleaner",
              parentId: "menu1",
              contexts:["page", "frame", "selection", "link", "editable", "image", "video", "audio"],
                id: "cleanerMnuSet1"
            });        
	}
	if (!settings.addToMnu && rightMnuId!=null) {	
		
        chrome.contextMenus.remove("compMnuSet1");
        chrome.contextMenus.remove("currSiteAllBlock1");
        chrome.contextMenus.remove("cleanerMnuSet1");
        chrome.contextMenus.remove("globalMnuSet1");
        
        chrome.contextMenus.remove(rightMnuId);
		rightMnuId = null;	
	}
}

//listener for context menu clicks:
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    var href='';
    	 settings = JSON.parse(window.localStorage.buttonSettings);

    if (info.menuItemId === "globalMnuSet1") { // here's where you'll need the ID
        // do something
        href='chrome://settings/content';
    }
    else if (info.menuItemId === "compMnuSet1") { // here's where you'll need the ID
        // do something
        href='chrome://components';
    }
    else if (info.menuItemId === "cleanerMnuSet1") { // here's where you'll need the ID
        // do something
        href='chrome://settings/clearBrowserData';
    }    
    else if (info.menuItemId === "currSiteAllBlock1") { // here's where you'll need the ID
        // do something
        siteSettings();
        return;
    }    
    
     if(settings.openInNewTab){
             chrome.tabs.create({ url: href }, function(tab) {window.close();});
        } else {
            chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
                chrome.tabs.update({ url: href }, function(tab) {window.close();});

            });
        }
    
});




function saveSettings() {
	 settings = JSON.parse(window.localStorage.buttonSettings);
	settings.addToMnu = document.getElementById("addToMnu").checked;
	settings.openInNewTab = document.getElementById("openInNewTab").checked;

    //update icon
        settings.nudeIcon = document.getElementById("nudeIcon").checked;
    settings.greenIcon = document.getElementById("greenIcon").checked;
    settings.orangeIcon = document.getElementById("orangeIcon").checked;
    settings.redIcon = document.getElementById("redIcon").checked;
    settings.defaultIcon = document.getElementById("defaultIcon").checked;
    settings.ownIcon = document.getElementById("ownIcon").checked;
    if(settings.ownIcon && ownIconSelected)settings.storedCanvas = storedCanvas.toDataURL("image/png");
    
    if (settings.nudeIcon)
        chrome.browserAction.setIcon({path:"nude.png"})
    else if (settings.greenIcon)
        chrome.browserAction.setIcon({path:"green.png"})   
    else if (settings.orangeIcon)
        chrome.browserAction.setIcon({path:"orange.png"})   
    else if (settings.redIcon)
        chrome.browserAction.setIcon({path:"red.png"})   
    else if (settings.ownIcon && settings.storedCanvas!=null)chrome.browserAction.setIcon({imageData:ownBitmap})      
    else
		chrome.browserAction.setIcon({path:"icon.png"});
    
    window.localStorage.buttonSettings = JSON.stringify(settings);
	
    //wake background page:
    //not working anymore:
    //https://stackoverflow.com/questions/54181734/chrome-extension-message-passing-unchecked-runtime-lasterror-could-not-establi/54686484#54686484
	/*chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
      //console.log(response);
        
        //execute init command on background page:

	chrome.extension.getBackgroundPage().startOrRefresh();
    });*/
    
    //sorry, for just to make it working, lets use guud old dirthy copy-paste...
    
    rightMnuOnOff();
    
}


window.onload = function() {

	 settings = JSON.parse(window.localStorage.buttonSettings);
    
    if (!window.localStorage.buttonSettings) {
		window.localStorage.buttonSettings = JSON.stringify({ "defaultIcon": true, "addToMnu": false, "openInNewTab": true });
	}
    settings = JSON.parse(window.localStorage.buttonSettings);    

	document.getElementById("addToMnu").checked = settings.addToMnu;
	document.getElementById("openInNewTab").checked = settings.openInNewTab;
	
	document.getElementById("addToMnu").onclick = function() { saveSettings(); }; 
	document.getElementById("openInNewTab").onclick = function() { saveSettings(); };

   document.getElementById("nudeIcon").checked = settings.nudeIcon;
    document.getElementById("greenIcon").checked = settings.greenIcon;
    document.getElementById("orangeIcon").checked = settings.orangeIcon;
    document.getElementById("redIcon").checked = settings.redIcon;
    document.getElementById("defaultIcon").checked = settings.defaultIcon;
    document.getElementById("ownIcon").checked = settings.ownIcon;

    
    //default icon by default ;-)
    if (!settings.nudeIcon &&!settings.greenIcon &&!settings.orangeIcon &&!settings.redIcon &&!settings.defaultIcon &&!settings.ownIcon )document.getElementById("defaultIcon").checked = true;
    
    document.getElementById("nudeIcon").onclick = function() { saveSettings(); };
    document.getElementById("greenIcon").onclick = function() { saveSettings(); };
    document.getElementById("orangeIcon").onclick = function() { saveSettings(); };
    document.getElementById("redIcon").onclick = function() { saveSettings(); };
    document.getElementById("defaultIcon").onclick = function() { saveSettings(); };
    document.getElementById("ownIcon").onclick = function() { saveSettings(); };
 
 document.getElementById("errorMessage").innerHTML='';
    
    //load custom icon, if set
    if (settings.storedCanvas!=null){
        var img = new Image();
        img.onload = function(){
            var canvas = document.createElement('canvas');
                                canvas.width = img.width;
                                canvas.height = img.height;

                                var context = canvas.getContext('2d');
                                   context.drawImage(img, 0, 0);             
                                // ...draw to the canvas...
                                var imageData = context.getImageData(0, 0, 19, 19);
            if(img.width>19 || img.width>19)document.getElementById("errorMessage").innerHTML='Image is '+img.width+'x'+img.height+' pixels. Only the top/left 19x19 pixels are used!';
                                    
            if (settings.ownIcon)chrome.browserAction.setIcon({imageData:imageData});
                                    ownBitmap = imageData;
                        storedCanvas = canvas;
        };
        img.setAttribute("src", settings.storedCanvas);
        document.getElementById('destination').appendChild(img);
        
    }
    


document.getElementById('upload-file').addEventListener('change', function() {
	var file;
	var destination = document.getElementById('destination');
	destination.innerHTML = '';

		file = this.files[0];
		if(file.type.indexOf('image') != -1) { // Very primitive "validation"

			var reader = new FileReader();

			reader.onload = function(e) {
				var img = new Image();
                
                    img.onload = function(){
                
                                var canvas = document.createElement('canvas');
                                canvas.width = img.width;
                                canvas.height = img.height;

                                var context = canvas.getContext('2d');
                                   context.drawImage(img, 0, 0);             
                                // ...draw to the canvas...
                                var imageData = context.getImageData(0, 0, 19, 19);
                               //show error if large image
                        document.getElementById("errorMessage").innerHTML='';
                            if(img.width>19 || img.width>19)document.getElementById("errorMessage").innerHTML='Image is '+img.width+'x'+img.height+' pixels. Only the top/left 19x19 pixels are used!';
                        
                        ownBitmap = imageData;
                        storedCanvas = canvas;
                        saveSettings();
                            
                    };
                
                img.src = e.target.result; // File contents here

                destination.appendChild(img);
			
			 };
                reader.readAsDataURL(file);
           document.getElementById("ownIcon").checked=true;
            ownIconSelected=true;
		} else {
            //not an image?
            destination.innerHTML = 'Wrong File...';
            document.getElementById("errorMessage").innerHTML='';
        }
	
});
}