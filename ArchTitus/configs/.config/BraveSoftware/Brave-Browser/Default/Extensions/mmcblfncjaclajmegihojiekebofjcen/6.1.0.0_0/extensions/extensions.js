// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// @externs_url https://raw.githubusercontent.com/google/closure-compiler/master/contrib/externs/chrome_extensions.js
// ==/ClosureCompiler==


function gotAll(infoArray) {
    //clear menu
    document.getElementById("loaded").innerHTML='';
    //prepare for sorting
    for (info of infoArray) {
        info.name = info.name.trim();
    }
    //sort array
    infoArray.sort(
        sort_by(
            { //enabled first
                name: 'enabled',
                primer: function(a) {
                    return Number(a);
                },
                reverse: true
            }, 
            { //alphabetical order
                name: 'name',
                primer: function(a) {
                    return a.toUpperCase();
                },
                reverse: false
            }
        )
    );
    
      //fix theme situation: if Themes is selected, no enabled/disabled options because these can't be enabled by us
      if(localStorage['typeFilter'] == 'the'){
          document.getElementById("activeFilterMenu").style.visibility = "hidden";          
      } else {
          document.getElementById("activeFilterMenu").style.visibility = "visible"; 
      }  
    
  var isDisabled = ' ';
    var canShow = true;
    var type = 'Extension';
    var permissions = '';
    var hostpermissions = '';
    var enabledDisabled = '';
    var optionsUrl = '';
    var manageIn = '';
  //loop extensions:  
    j=0; z=0;
  for (info of infoArray) {
    //console.log(infoArray); 
    //  console.log(info.enabled);
      j++;
    enabledDisabled = '<span id="currentlyEnabled">Enabled</span>';  
    if (info.enabled == false){isDisabled=' disabled';enabledDisabled='<span id="currentlyEnabled">Disabled</span>'}
    
    canShow = true;
      //type filter
      if(localStorage['typeFilter'] == 'app' && (info.type == 'extension' || info.type == 'theme' ))canShow = false;
      if(localStorage['typeFilter'] == 'ext' && info.type != 'extension')canShow = false;
      if(localStorage['typeFilter'] == 'the' && info.type != 'theme')canShow = false;
      //activeFilter
      if(localStorage['activeFilter'] == 'enabled' && !info.enabled)canShow = false;
      if(localStorage['activeFilter'] == 'disabled' && info.enabled)canShow = false;
      //app, theme or extension
      if (info.type == 'extension') type = 'Extension'
      else if(info.type == 'theme') type = 'Theme'
      else type = 'App';
      //fix theme situation: if Themes is selected, no enabled/disabled options because these can't be enabled by us
      if(localStorage['typeFilter'] == 'the' && info.type == 'theme')canShow = true;          

      
      //prepare long texts for info panel
      permissions = '';
      if (info.permissions){
          var i=0;
          for (perm of info.permissions){
              if (i!=0) permissions += ', ';
              permissions +=perm;
              i++;
          }
      }
       hostpermissions = '';
      if (info.hostPermissions){
          var i=0;
          for (perm of info.hostPermissions){
              if (i!=0) hostpermissions += ', ';
              hostpermissions +=perm;
              i++;
          }
      } 
      optionsUrl = '';
      if (info.optionsUrl != '' && info.enabled){
         optionsUrl = '<br /><span class="info"><a href="'+info.optionsUrl+
             '" target="_blank" class="internA"><span class="info">Options&nbsp;Url:</span>&nbsp;<span class="subInfo"><i class="fa fa-cog"> </i></span></a></span>';
      }
      manageIn = '';
      if(info.type == 'theme'){
          manageIn='<br /><a href="chrome://settings/appearance" target="_blank" class="internA"><span class="info">Manage&nbsp;in&nbsp;Settings:</span>&nbsp;<span class="subInfo"><i class="fa fa-share-square"> </i></span></a>';        
     } else {
         manageIn='<br /><a href="chrome://extensions/?id='+info.id+'" target="_blank" class="internA"><span class="info">Manage&nbsp;in&nbsp;Extensions:</span>&nbsp;<span class="subInfo"><i class="fa fa-share-square"> </i></span></a>';        
      }
      //can have enabled button?
      enabledButton = '';
      if (info.type!='theme'){
          if (info.enabled){
              enabledButton = '<i class="fa fa-check-circle enableId isEnabled" id="'+info.id+'" title="Disable"> </i>&nbsp;';
          } else {
              enabledButton = '<i class="fa fa-times-circle enableId isDisabled" id="'+info.id+'" title="Enable"> </i>&nbsp;';
          }
      }

      if(canShow)
      {
        z++
        document.getElementById("loaded").innerHTML += ' <li><a class="accordion separator'+isDisabled+' "><div class="icon"><img width="24" src="'+
            getIcon(info,info.enabled)+'" class="img" ></div><b>'+info.name+'</b><br /><div class="sub subdiv"><span class="sub">Version: '+info.version+
            ' | '+enabledDisabled+' | '+type+
            '</span></div></div></a>'+
            
            '<div class="small-menu-item '+isDisabled+'">'+enabledButton+'&nbsp;<i class="fa fa-info-circle accordion2"  title="More Info"> </i>&nbsp;&nbsp;<i class="fa fa-trash uninstall"  title="Remove" id="'+info.id+'"> </i></div>'+
            '<div class="panel">'+
            '<span class="info">Description:</span>&nbsp;<span class="subInfo">'+info.description+'</span>'+
            '<br /><span class="info"><a href="'+info.homepageUrl+'" target="_blank" class="internA"><span class="info">Homepage&nbsp;Url:</span>&nbsp;<span class="subInfo"><i class="fa fa-share-square"> </i></span></a></span>'+
            '<br /><span class="info">id:</span>&nbsp;<span class="subInfo">'+info.id+'</span>'+
            '<br /><span class="info">Install&nbsp;Type:</span>&nbsp;<span class="subInfo">'+info.installType+'</span>'+
            '<br /><span class="info">May&nbsp;Disable:</span>&nbsp;<span class="subInfo">'+info.mayDisable+'</span>'+
            '<br /><span class="info">Works&nbsp;Offline:</span>&nbsp;<span class="subInfo">'+info.offlineEnabled+'</span>'+
            optionsUrl+
            '<br /><span class="info">Permissions:</span>&nbsp;<span class="subInfo">'+permissions+'</span>'+
            '<br /><span class="info">Host&nbsp;Permissions:</span>&nbsp;<span class="subInfo">'+hostpermissions+'</span>'+
            '<br /><span class="info">Type:</span>&nbsp;<span class="subInfo">'+info.type+'</span>'+
            manageIn+
                        '</div></li> ';
       }
      
      document.getElementById('loaded').focus();
      //if(canShow)console.log(info);
      
  } //end of main loop
    if (z==j) {document.getElementById("numbers").innerHTML=''+j;}
    else      {document.getElementById("numbers").innerHTML=''+z+' of '+j;}
    //add event listener for the accordion info
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            //console.log(this);
            this.classList.toggle("active");
            var panel = this.nextElementSibling.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
    //the same as above for the "i" icon, note the 1st child of the parent's - parent node line...
    var acc = document.getElementsByClassName("accordion2");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            parEnt = this.parentNode.parentNode.firstChild;
            //console.log(parEnt);
            parEnt.classList.toggle("active"); 
            var panel = parEnt.nextElementSibling.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    } 
    //remove click handlers
    var acc = document.getElementsByClassName("uninstall");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            //console.log(this.id);
                chrome.management.uninstall(this.id, {
                    showConfirmDialog: true
                });
        });
    }  
    //enable click handlers
    var acc = document.getElementsByClassName("enableId");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            parEnt = this.parentNode.parentNode.firstChild;
            if (this.classList.contains("isEnabled")){
                chrome.management.setEnabled(this.id, false);
                parEnt.className += " disabled";
                //img
                parEnt.firstChild.firstChild.src = parEnt.firstChild.firstChild.src+'?grayscale=true';
                this.classList.remove("isEnabled"); 
                this.className += " isDisabled";
                this.classList.remove("fa-check-circle"); 
                this.className += " fa-times-circle";
                //console.log(parEnt.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.firstChild.nextElementSibling);
                parEnt.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.firstChild.nextElementSibling.innerHTML = 'Disabled';
            } else {
                chrome.management.setEnabled(this.id, true);
                parEnt.classList.remove("disabled");
                //img
                parEnt.firstChild.firstChild.src = parEnt.firstChild.firstChild.src.slice(0, -15);
                this.classList.remove("isDisabled"); 
                this.className += " isEnabled";
                this.classList.remove("fa-times-circle"); 
                this.className += " fa-check-circle";                
                parEnt.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.firstChild.nextElementSibling.innerHTML = 'Enabled';
            }
        });
    }

    
    //attach event handler to all links on page to prevent chrome from forbidding them
    var acc = document.getElementsByClassName("internA");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            chrome.tabs.create({url: this.href}); 
            event.preventDefault();
        });
    }
    
}



function process(){ 
    chrome.permissions.contains({
        permissions: ['management']
      }, function(result) {
            if (result) {
              // The extension has the permissions.
                //document.getElementById("permissions").style.visibility="hidden";
                document.body.removeChild( document.getElementById("permissions") );
                document.getElementById('top').style="visibility:visible";
              chrome.management.getAll(gotAll); 
            } else {
               //error 
               document.getElementById('permissions').style="visibility:visible";  
               document.getElementById('mnu').style="min-height:30px;height:150px"; 
            }
        });

}


function manager(){

    //on 1st click, ask for permission, otherwise proceed to manager
    //https://developer.chrome.com/apps/permissions
    
    //Check the extension's current permissions
    chrome.permissions.contains({
        permissions: ['management']
      }, function(result) {
        if (result) {
          // The extension has the permissions.
             
        } else {
          // The extension doesn't have the permissions.
            document.getElementById('permissions').style="visibility:visible"; 
            document.getElementById('mnu').style="min-height:30px;height:50px";  
            chrome.permissions.request({
              permissions: ['management']
            }, function(granted) {
               // console.log(granted);
              // The callback argument will be true if the user granted the permissions.
              if (granted) {
                
                 process(); 
                  
              } else {
                //doSomethingElse();
              }
            });
        }
      });
         
}


// Returns icon URL -- closest match or any available
function getIcon(extInfo, enabled) {
    var isEnabled = '';
    if (!enabled) isEnabled = '?grayscale=true';
    if (info.icons) {
        var iconsNumber = extInfo.icons.length;
        //if only one, nothing to do:
        if(iconsNumber==1) return extInfo.icons[0].url+isEnabled;
        //search exact match
        for (var i = 0; i < iconsNumber; i++) {
            var icon = extInfo.icons[i];
            if (icon.size == 24) {
                return icon.url+isEnabled;                
            }                  
        }
               
        //search 25 - 48px
         for (var i = 0; i < iconsNumber; i++) {
            var icon = extInfo.icons[i];
            if (icon.size > 24 && icon.size < 49) {
                return icon.url+isEnabled;                
            }                  
        }
        //try smaller 16 - 23px (smaller size instead of big shrink)
         for (var i = 0; i < iconsNumber; i++) {
            var icon = extInfo.icons[i];
            if (icon.size > 15 && icon.size < 24) {
                return icon.url+isEnabled;                
            }           
        //search 49 - 72px
         for (var i = 0; i < iconsNumber; i++) {
            var icon = extInfo.icons[i];
            if (icon.size > 64 && icon.size < 73) {
                return icon.url+isEnabled;                
            }                  
        } 
               
        }
        //else return the 1st one
        return extInfo.icons[0].url+isEnabled;
    }
    return 'noIcon.png';
}


//http://stackoverflow.com/questions/6913512/how-to-sort-an-array-of-objects-by-multiple-fields
var sort_by;

(function() {
        // utility functions
        var default_cmp = function(a, b) {
                if (a == b)
                    return 0;
                return a < b ? -1 : 1;
            },
            getCmpFunc = function(primer, reverse) {
                var dfc = default_cmp, // closer in scope
                    cmp = default_cmp;
                if (primer) {
                    cmp = function(a, b) {
                        return dfc(primer(a), primer(b));
                    };
                }
                if (reverse) {
                    return function(a, b) {
                        return -1 * cmp(a, b);
                    };
                }
                return cmp;
            };

        // actual implementation
        sort_by = function() {
            var fields = [],
                n_fields = arguments.length,
                field,
                name,
                reverse,
                cmp;

            // preprocess sorting options
            for (var i = 0; i < n_fields; i++) {
                field = arguments[i];
                if (typeof field === 'string') {
                    name = field;
                    cmp = default_cmp;
                } else {
                    name = field.name;
                    cmp = getCmpFunc(field.primer, field.reverse);
                }
                fields.push({
                    name: name,
                    cmp: cmp
                });
            }

            // final comparison function
            return function(A, B) {
                var a,
                    b,
                    name,
                    result;
                for (var i = 0; i < n_fields; i++) {
                    result = 0;
                    field = fields[i];
                    name = field.name;

                    result = field.cmp(A[name], B[name]);
                    if (result !== 0)
                        break;
                }
                return result;
            };
        };
    }
    ());


function resetMenu(id){
var i,  tablinks;

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    var evt = document.getElementById(id);
    evt.className += " active"; 
    localStorage['typeFilter'] = id;
    if (!document.getElementById('permissions'))
            chrome.management.getAll(gotAll);     
}
function resetMenu2(id){
var i,  tablinks;

    tablinks = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    var evt = document.getElementById(id);
    evt.className += " active"; 
    localStorage['activeFilter'] = id;
    if(!document.getElementById('permissions'))
            chrome.management.getAll(gotAll);     
}


/*function callback(e) {
    var e = window.e || e;
    
 //   console.log(e.target.className);
    
    if (e.target.tagName !== 'A')
        return;

    // Do something
}*/

window.onload = function() {
    

    document.getElementById('extensions').addEventListener('click', function() {
        manager();
    });  
    
    document.getElementById('chromeExtManager').addEventListener('click', function() {    chrome.tabs.create({url: "chrome://extensions"});   });
    document.getElementById('helpInfo').addEventListener('click', function() {    chrome.tabs.create({url: "https://singleclickapps.com/plugins-button/extensions-help.html"});   });
    document.getElementById('chromeWebStore').addEventListener('click', function() {    chrome.tabs.create({url: "https://chrome.google.com/webstore/"});   });

    document.getElementById('all').addEventListener('click', function() {    resetMenu('all');    });  
    document.getElementById('ext').addEventListener('click', function() {    resetMenu('ext');    });  
    document.getElementById('app').addEventListener('click', function() {    resetMenu('app');    });  
    document.getElementById('the').addEventListener('click', function() {    resetMenu('the');    });  
    //if there is stored filter, load it; otherwise -- set default to 'all';
    if(localStorage['typeFilter'])
        resetMenu(localStorage['typeFilter']) 
    else 
        resetMenu('all'); 
    
    document.getElementById('both').addEventListener('click', function()    {    resetMenu2('both');     });  
    document.getElementById('disabled').addEventListener('click', function(){    resetMenu2('disabled'); });  
    document.getElementById('enabled').addEventListener('click', function() {    resetMenu2('enabled');  });  
    //if there is stored filter, load it; otherwise -- set default to 'all'
    if(localStorage['activeFilter'])
        resetMenu2(localStorage['activeFilter']) 
    else 
        resetMenu2('both');     
    
 // intercept all A elements here:   document.addEventListener('click', callback, false);
    process();
}