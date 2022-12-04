import {Picture} from './picture.js';

export class Visual{
    constructor() {

        this.picture = new Picture("./img/sample.jpg" );
        this.picture.img.onload = () =>{
            this.pixels = this.getPixels();
        }

        this.pixels = [];

        this.radius = 25;

        this.slider = document.querySelector('.radius-bar');
        this.slider.oninput = ( () => {
            this.radius = this.slider.value ;
            this.pixels = this.getPixels();
        } ).bind(this)


    }
    
    resize( stageWidth, stageHeight ){
        
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        
        this.pixels = this.getPixels();

        
    }

    getPixels(){
        return this.picture.getPixels( this.radius , this.stageWidth, this.stageHeight );
    }

    draw( ctx ){
        
        ctx.clearRect( 0, 0, this.stageWidth, this.stageHeight )
        
        ctx.fillStyle = "black";
        ctx.fillRect( 0, 0, this.stageWidth, this.stageHeight )

        ctx.strokeStyle = "rgba(0, 0, 0, 0.7 )";
        for( let i = 0 ; i < this.pixels.length; i++ ){

            let item = this.pixels[i];

            
            ctx.beginPath();
            ctx.fillStyle = `rgb( ${item.color[0]}, ${item.color[1]}, ${item.color[2]} )`;
            ctx.arc( item.x + this.radius*1,
                item.y + this.radius*1 ,
                this.radius,
                0, 
                2*Math.PI, 
            false);
            ctx.fill();
            ctx.stroke();


        }


    }



}