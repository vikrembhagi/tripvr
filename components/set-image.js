/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('set-image', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string', default:false},
    clicked:{type:'boolean'},
    obj:{type:'string'},
    dur: {type: 'number', default: 300}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    var objName = data.obj;

    this.setupFadeAnimation();

    //Set position of other hotspots after one is selected
    el.addEventListener(data.on, function () {
      // Fade out image.
      data.target.emit('set-image-fade');
      // Wait for fade to complete.
      setTimeout(function () {
        // Set image.
        data.target.setAttribute('material', 'src', data.src);
        console.log("Changing Image to " +data.src)

        // get object id for clicked item
        //var objectClicked = document.getElementById(objName);
        //collect All Hotspots
        var allHotSpots = document.getElementsByClassName("hotspot");

        for (var i=0; i<allHotSpots.length; i++)
        {
          console.log("Found hotspots "+ i+ " "+allHotSpots[i].id);
          document.getElementById(allHotSpots[i].id).setAttribute('change-position','clicked', objName);
        }
        

      }, data.dur);


    });
    
  },

  update:function(){
    console.log("CLICKECKEDICKEICC");

  },

  /**
   * Setup fade-in + fade-out.
   */
  setupFadeAnimation: function () {
    var data = this.data;
    var targetEl = this.data.target;

    // Only set up once.
    if (targetEl.dataset.setImageFadeSetup) { return; }
    targetEl.dataset.setImageFadeSetup = true;


    // Create animation.
    targetEl.setAttribute('animation__fade', {
      property: 'material.color',
      startEvents: 'set-image-fade',
      dir: 'alternate',
      dur: data.dur,
      from: '#FFF',
      to: '#000'
    });
    
  }

});
