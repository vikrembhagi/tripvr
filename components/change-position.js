/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('change-position', {
    schema: {
        clicked: { type: 'string' }
    },

    init: function() {


    },

    update: function() {
        var selected = this.data.clicked;

        if (selected != "") {
            console.log("CLICKECK" + "On change-Position");

        }

        if (selected == "One") {
            //Setting clicked hotspot as invisible (may not want this when additional info is availaible)
            // document.getElementById("One").setAttribute('visible','false');

            //Setting other element's rotation and position. Toggle visible.
            document.getElementById("Two").setAttribute('visible', 'true');
            // document.getElementById("Two").setAttribute('position','0 0 0');


        }

        if (selected == "Two") {
            // document.getElementById("Two").setAttribute('visible','false');

            document.getElementById("One").setAttribute('visible', 'true');
            //document.getElementById("One").setAttribute('position','0 0 0');
        }

    }



});