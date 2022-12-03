export class Picture{
    constructor(src){

        this.canvas = document.createElement('canvas');

        // for show this canvas 

        /*
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = '0';
        this.canvas.style.top = '0';
        this.canvas.style.position = 'absolute';
        document.body.appendChild(this.canvas);  */

        this.ctx = this.canvas.getContext('2d');

        this.img = new Image(); 
        this.img.src = src;


    }
    getPixels( radius, stageWidth, stageHeight){
        
        this.canvas.width = stageWidth;
        this.canvas.height = stageHeight;

        const pixels = [];

        let i = 0 ; 
        let pixel;

        this.draw();

        for( let height = 0; height < stageHeight; height += radius*2) {

            for (let width = 0; width < stageWidth; width += radius*2 ) {
                
                pixel = {
                    x: width,
                    y: height,
                    color: this.ctx.getImageData( width, height, 1, 1 ).data,
                };

                pixels.push( pixel );
            }
        }
        return pixels;
    }

    draw(){
        this.ctx.drawImage( this.img, 0, 0, this.canvas.width, this.canvas.height );
    }
}