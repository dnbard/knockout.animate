(function(window, ko){
    function Viewmodel(){
        var self = this;

        this.animateObject = ko.observable(true);
        this.animation = ko.observableArray(['zoomIn', 'zoomOut']);

        setInterval(function(){
            self.animateObject(!self.animateObject());
        }, 2000);
    };

    ko.applyBindings(new Viewmodel());
})(this, ko);
