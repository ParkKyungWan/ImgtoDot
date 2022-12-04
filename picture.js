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

        this.file = document.querySelector('#uploaded-img');
        this.file.addEventListener('change', () => {
            this.img.src = URL.createObjectURL(this.file.files[0]);
            this.ctx.drawImage( this.img, 0, 0, this.canvas.width, this.canvas.height );
            const data = this.ctx.getImageData( this.canvas.width/3 , this.canvas.height/3 , 1, 1 ).data;
            
            for(let i = 0 ; i < 3 ; i++ ){
                if( data[i]>200 ){
                    data[i] -= 55; //너무 밝은색이면 보정
                }
            }
            document.body.style.background = `linear-gradient( rgb( ${data[0]}, ${data[1]}, ${data[2]} ) , black)`
        });

        
    }
    getPixels( radius, stageWidth, stageHeight){
        
        this.canvas.width = stageWidth;
        this.canvas.height = stageHeight;

        const pixels = [];

        let i = 0 ; 
        let pixel;

        
        this.ctx.drawImage( this.img, 0, 0, this.canvas.width, this.canvas.height );

        for( let height = 0; height < stageHeight ; height += radius*2) {

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

    setPicture(src){
        this.img.src = src;
    }

}