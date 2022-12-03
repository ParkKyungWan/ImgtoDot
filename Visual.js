import {Picture} from './picture.js';

export class Visual{
    constructor() {

        this.picture = new Picture("./img/sample.jpg" );
        this.pixels = [];

        this.radius = 5;
    }
    
    resize( stageWidth, stageHeight ){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        
        this.pixels = this.picture.getPixels( this.radius , this.stageWidth, this.stageHeight );
    }

    animate( ctx ){
        
        for( let i = 0 ; i < this.pixels.length; i++ ){

            let item = this.pixels[i];

            
            ctx.beginPath();
            ctx.fillStyle = `rgb( ${item.color[0]}, ${item.color[1]}, ${item.color[2]} )`;
            ctx.moveTo(item.x + this.radius*2 ,item.y + this.radius);
            ctx.arc( item.x + this.radius,
                item.y + this.radius,
                this.radius,
                0, 
                2*Math.PI, 
            false);
            ctx.fill();


        }


    }


}