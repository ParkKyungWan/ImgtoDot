import {Visual} from './Visual.js';
class App {
    constructor() {

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);

        this.Visual = new Visual();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));

    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth ;
        this.canvas.height = this.stageHeight ;
        
        this.Visual.resize(this.stageWidth, this.stageHeight);

    }


    animate(t) {
        this.Visual.animate( this.ctx );
        requestAnimationFrame( this.animate.bind(this));
    }
}

window.onload = () => {
    new App();
}