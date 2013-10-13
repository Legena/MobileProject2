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
            console.log(JSON.stringify(place));

            httpRequest.postJSON(app.servicesBaseUrl + "places", JSON.stringify(place)).then(function (data) {
                console.log(data);
                navigator.notification.vibrate(1000);
            }, function (e) {
                console.log(e);
            })
        }

        function onError(error) {
            alert('code: ' + error.code + '\n' +
                    'message: ' + error.message + '\n');
        }

    };

    function clearFields() {
        var startDate = document.getElementById("datetimepickerstart").value = new Date();
        var endDate = document.getElementById("datetimepickerend").value = new Date();
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