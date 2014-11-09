(function(window, ko){
    function Viewmodel(){
        var self = this;

        this.animateObject = ko.observable(true);

        this.animations = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp", "bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig", "flip", "flipInX", "flipInY", "flipOutX", "flipOutY", "lightSpeedIn", "lightSpeedOut", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight", "hinge", "rollIn", "rollOut", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp", "zoomOut", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp"];

        this.animationEntrance = ko.observable('zoomIn');
        this.animationExit = ko.observable('zoomOut');

        this.animation = ko.computed(function(){
            return [ this.animationEntrance(), this.animationExit() ];
        }, this);

        this.toggleState = function(){
            this.animateObject(!this.animateObject());
        }
    };

    ko.applyBindings(new Viewmodel());
})(this, ko);
