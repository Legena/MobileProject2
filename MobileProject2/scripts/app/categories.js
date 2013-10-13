/// <reference path="../../kendo/js/kendo.all.min.js" />
var app = app || {};

(function(a) {
    var viewModel = kendo.observable({
        categories:[],
        selectedCategory:null,
        change:onCategoryChanged
    });
    
    function init(e) {
        kendo.bind(e.view.element, viewModel);
        
        //httpRequest.getJSON("http://localhost:62354/api/" + "categories")
        httpRequest.getJSON(app.servicesBaseUrl + "places")
        .then(function (categories) {
            viewModel.set("categories", categories);            
        });        
    }
    
    function onCategoryChanged(e) {             
        console.log(e.sender._selectedValue);
        
        httpRequest.getJSON(app.servicesBaseUrl  + "places/" + e.sender._selectedValue)
        .then(function(category) {
            viewModel.set("selectedCategory", category);
            console.log(category);
            watchID = navigator.compass.watchHeading(onSuccess, onError, { frequency: 50 });
        });

        function onSuccess(heading) {
            $('#mapimage').css('transform', 'rotate(' + ( heading.magneticHeading) + 'deg)');
        }

        function onError(compassError) {
            alert('Compass error: ' + compassError.code);
        }
    }
    
    a.categories = {
        init:init          
    };
}(app));