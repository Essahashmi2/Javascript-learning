console.log('hello')
var illegalname = "1num";
var sillylegalname = "$_";
var namethatcontainskeyword1 = "newvar";
var namethatcontainskeyword2 = "alertme";
document.write("The rules for naming variables are that you cannnot start a variable name with a number so no names like " + illegalname + ", there can be no spaces within the name and the variable name cannot be any keyword with a special meaning to Javascript like alert and var, however they can contain these words, so names like "  +  namethatcontainskeyword1 + " and " + namethatcontainskeyword2  + " are perfectly legal. The only legal symbols are $ and _, so one legal but stupid variable name is " + sillylegalname); 