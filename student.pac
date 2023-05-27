//WS PAC Generator 1A @dummies development

function FindProxyForURL(url,host) {

if (shExpMatch(host, "10.*")) {return "DIRECT";}
if (shExpMatch(host, "192.168.*")) {return "DIRECT";}
var regexpr = /:\/\/172\.[1-3][0-9]\.*/

if(regexpr.test(host)) {return "DIRECT";}


var regexpr = /:\/\/2[23][4-9]\.*/

if(regexpr.test(host)) {return "DIRECT";}

if (isPlainHostName(host)) {return "DIRECT";}

if (shExpMatch(host, "*.10.30.73.133*")) {return "DIRECT";}

return "DIRECT";
}
