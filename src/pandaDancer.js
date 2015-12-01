var pandaDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.step();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.attr('src', 'images/panda.gif');

 

};

  pandaDancer.prototype = Object.create(makeDancer.prototype);
  pandaDancer.prototype.constructor = pandaDancer;

  pandaDancer.prototype.step = function() {

    makeDancer.prototype.step.call(this);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
   
    this.$node.animate({ "top": "-=50px" }, "slow" );
    this.$node.animate({ "top": "+=50px" }, "slow" );
  
  };

