// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {


  // use jQuery to create an HTML <span> tag
  this.$node = $('<img></img>');
  this.timeBetweenSteps = timeBetweenSteps;
  // this.moving = true;
  this.$node.attr('class', "dancer");
  this.line = false;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.step();

};


  makeDancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var that = this;
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
    that.$node.click(function(e){
      that.$node.css({'top': $("body").height() * Math.random(), 'left': $("body").width() * Math.random()});
    });
  };

  makeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //

    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  makeDancer.prototype.lineUp = function(){
    this.$node.css({top: 500});
  };