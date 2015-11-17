/**
 * Created by yangfeiloveG on 15/10/20.
 */

var http = require("http");

var server = http.createServer( function(request,response){

    response.write("end response");
    response.write("afsdfasdf");
    response.end();

});
