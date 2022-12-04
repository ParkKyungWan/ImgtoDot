import {Visual} from './Visual.js';
import {Corner} from './corner.js';

class App {
    constructor() {

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);

        this.Visual = new Visual();
        this.corner = new Corner();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));

        

    }

    resize(){
        this.stageWidth = document.body.clientWidth/10*7.5;
        this.stageHeight = document.body.clientHeight/10*7.5 ;

        this.canvas.width = this.stageWidth ;
        this.canvas.height = this.stageHeight ;
        
        this.Visual.resize(this.stageWidth, this.stageHeight);
        this.corner.resize();

    }


    animate(t) {
        this.Visual.draw( this.ctx );
        requestAnimationFrame( this.animate.bind(this));
    }
}

window.onload = () => {
    new App();
}