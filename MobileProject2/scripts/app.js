var app = app || {};

(function() {
    
    document.addEventListener("deviceready", function() {
        //app.servicesBaseUrl = "http://localhost:62354/api/";
        app.servicesBaseUrl = "http://localhost:10258/api/";
        
        var kendoApp = new kendo.mobile.Application(document.body);
    });    
}());