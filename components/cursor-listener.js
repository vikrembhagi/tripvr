AFRAME.registerComponent('cursor-listener', {
    init: function() {
        this.el.addEventListener('mouseenter', function(evt) {
            var chi = this.children;
            for (var x = 0; x <= chi.length - 1; x++) {
                chi[x].setAttribute('visible', 'true');
            }
        });

        this.el.addEventListener('mouseleave', function(evt) {
            var chi = this.children;
            for (var x = 0; x <= chi.length - 1; x++) {
                chi[x].setAttribute('visible', 'false');
            }

        });
    }
});