var app = app || {};

(function(a) {
    /*function getAllPlaces(options){
    httpRequest.getJSON(app.servicesBaseUrl  + "places")
    .then(function(places){
    ret
    });
    }*/
    function postPlace() {

        var startDate = document.getElementById("datetimepickerstart");
        var endDate = document.getElementById("datetimepickerend");
        var title = document.getElementById("titleinput");
        var location = navigator.geolocation.getCurrentPosition(onSuccess, onError);

        var place = null;

        function onSuccess(position) {
            place = {
                "startTime": startDate.value,
                "endTime": endDate.value,
                "longitude": position.coords.longitude,
                "latitude": position.coords.latitude,
                "title": title.value
            }

            if (place.startTime.toString() >= place.endTime) {
                navigator.notification.alert("End date should be later than start.");
            }
            else if (place.title.length < 1) {
                navigator.notification.alert("Title should be at least 1 character.");
            }
            else {
                httpRequest.postJSON(app.servicesBaseUrl + "places", JSON.stringify(place)).then(function (data) {
                    navigator.notification.vibrate(1000);
                    clearFields();
                }, function (e) {
                    navigator.notification.alert("Add New Place Failed.");
                })
            }
        }

        function onError(error) {
            alert('code: ' + error.code + '\n' +
                    'message: ' + error.message + '\n');
        }

    };

    function clearFields() {
        var startDate = document.getElementById("datetimepickerstart").value = "";
        var endDate = document.getElementById("datetimepickerend").value = "";
        var title = document.getElementById("titleinput").value = "";
    }
    
    var viewModel = kendo.observable({
        postPlace: postPlace,
        clearFields: clearFields
    });
    
    function init(e) {
        kendo.bind(e.view.element, viewModel);
    }   
    
    a.places = {
        init: init
    };
}(app));