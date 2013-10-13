var app = app || {};

(function() {
    
    document.addEventListener("deviceready", function() {
        //app.servicesBaseUrl = "http://localhost:62354/api/";
        app.servicesBaseUrl = "http://nowwhat-1.apphb.com/api/";

        window.addEventListener("batterylow", onBatteryLow, false);
        var kendoApp = new kendo.mobile.Application(document.body);
    });

    function onBatteryLow(info) {
        alert("Battery Level Low " + info.level + "%");
    }
}());