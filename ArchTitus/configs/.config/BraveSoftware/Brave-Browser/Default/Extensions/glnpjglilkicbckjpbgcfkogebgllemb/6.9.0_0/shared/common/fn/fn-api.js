!function fnApiIIFE(){var o=Okta.Constants,c=Okta.BrowserUtil,u=Okta._okta.omit,p=Okta.fn.base.timestamp,e=Okta.fn.api={},t="/api/internal/enduser/home",n="/api/v1/users/me/home/tabs?expand=items%2Citems.resource",r="/api/internal/enduser/recently-used-apps",i="/api/enduser/v1";e.prependPath=function(e){return"/api/plugin/2"+e},e.prependEndUserPath=function(e){return i+e},e.getEndUserHomeUri=function(){return t},e.getRecentlyUsedAppsUri=function(){return r},e.getSelfServiceSiteInfo=function(e){return e&&e.orgSettings&&e.orgSettings.pluginRunOnAppSignupEnabled?"/self-service-site-maps":"/hashed-self-service-sites"},e.getCheckPluginFirstPartyAppUri=function(){return e.prependPath("/check-plugin-session?check_fpa=true")},e.getToSettings=function(e,t){var n=-1==e.indexOf("?")?"?":"&";return{type:"get",url:e+n+"plugin_version="+(t.backgroundVersion+"-"+t.contentVersion),headers:{Accept:"application/json;charset=utf-8"}}},e.postToSettings=function(e,t){return{type:"post",url:e,data:t,headers:{Accept:"application/json;charset=utf-8"}}},e.getTabsPathInfo=function(e){return e.orgSettings&&e.orgSettings.pluginPopoverQuickAccessAppsEnabled?n+"&type=all":n},e.isEnduserHomeValid=function(e){return!!e&&!!e.userId&&!!e.orgId},e.postToPendoTrackEventSettings=function(e,t,n,r){var i=t.timestamp||p(),s=u(t,"timestamp"),a={type:"track",event:e,visitorId:n.userId,accountId:n.orgId,timestamp:i,properties:s,context:{userAgent:c.getUserAgent(),title:"okta-plugin"}};return{type:"post",url:r?o.PendoEventTrackUrlDebug:o.PendoEventTrackUrl,data:JSON.stringify(a),headers:{"content-type":"application/json","x-pendo-integration-key":"cc0bda8c-c34a-4b91-5719-634058959cf0"}}},e.setSessionData=function(e,t){return e&&(e.idx?t["X-Okta-Idx-Session-Jwe"]=e.idx:(t["X-Session-Id"]=e.sid,t["X-Device-Token"]=e.DT)),t},e.setAuthData=function(e,t){return e&&e.access_token&&(t.Authorization="Bearer "+e.access_token.accessToken),t},e.createApiForAccount=function(e,t){var n=new Okta.Storage(e);return n.readMultiAccount().then(function(){return n.setCurrentAccountIndex(t),new Okta.Api(e,n)})}}();