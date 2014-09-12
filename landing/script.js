if (window.innerWidth === 0) {
    window.innerWidth = parent.innerWidth;
    window.innerHeight = parent.innerHeight;
} //
// More involved example of a newtonian gravity
//
Physics(function (world) {

    var viewWidth = window.innerWidth,
        viewHeight = window.innerHeight
        // bounds of the window
        ,
        viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight),
        edgeBounce, renderer;

    // create a renderer
    renderer = Physics.renderer('canvas', {
        el: 'viewport',
        width: viewWidth,
        height: viewHeight
    });

    // add the renderer
    world.add(renderer);
    // render on each step
    world.on('step', function () {
        world.render();
    });

    // constrain objects to these bounds
    edgeBounce = Physics.behavior('edge-collision-detection', {
        aabb: viewportBounds,
        restitution: 0.99,
        cof: 0.8
    });

    // resize events
    window.addEventListener('resize', function () {

        viewWidth = window.innerWidth;
        viewHeight = window.innerHeight;

        renderer.el.width = viewWidth;
        renderer.el.height = viewHeight;

        viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight);
        // update the boundaries
        edgeBounce.setAABB(viewportBounds);

    }, true);

    // create some bodies
    var logos = [];

    for (var i = 0, l = 180; i < l; ++i) {

        logos.push(
        Physics.body('circle', {
            x: Math.random() * (viewWidth - 10) + 10,
            y: Math.random() * (viewHeight - 10) + 10,
            mass: 1,
            radius: 6,
            vx: Math.random() * 0.01 - 0.005,
            vy: Math.random() * 0.01 - 0.005,
            restitution: 0.99,
            styles: {
                fillStyle: '#d3d3d3'
            }
        }));
    }
    // logos.view = new Image();
    // logos.view.src = 'clear.png';
    // add things to world
    world.add(logos);

    // add some fun interaction
    var attractor = Physics.behavior('attractor', {
        order: 0,
        strength: .002
    });
    world.on({
        'interact:poke': function (pos) {
            attractor.position(pos);
            world.add(attractor);
        },
        'interact:move': function (pos) {
            attractor.position(pos);
        },
        'interact:release': function () {
            world.remove(attractor);
        }
    });

    // add things to the world
    world.add([
    Physics.behavior('interactive', {
        el: renderer.el
    }), Physics.behavior('newtonian', {
        strength: .01
    }), Physics.behavior('sweep-prune'), Physics.behavior('body-collision-detection', {
        checkAll: false
    }), Physics.behavior('body-impulse-response'), edgeBounce]);

    // subscribe to ticker to advance the simulation
    Physics.util.ticker.on(function (time) {
        world.step(time);
    });

    // start the ticker
    Physics.util.ticker.start();
});