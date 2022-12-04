export class Corner{
    constructor(){
        
        this.img = new Image();
        this.img.src = './img/arrow.png';

        this.x = 0;
        this.y = 0;

        this.canvas = document.querySelector('canvas');

        this.corner = document.querySelector('.corner')
    
        window.addEventListener("mousemove", (e) => {

            const x = e.clientX;
            const y = e.clientY;

            const maxX = document.body.clientWidth;
            const maxY = document.body.clientHeight;

            if( this.holding){
                const canvasWidth = x - (maxX - x);
                this.canvas.style.width = `${canvasWidth}px`;
                this.resize();
            }

        }, false);

        this.canvas.addEventListener("mousemove", (e)=>{
            
            const x = e.clientX;
            const y = e.clientY;
            const isHover =  this.isHover( x, y );

            if( isHover ){
                document.body.style.cursor = "pointer";
            }else{
                document.body.style.cursor = "";
            }
            

        })

        this.holding = false; 

        this.corner.addEventListener("mousedown", (e) => {
            this.holding = true;
        }, false);

        
        window.addEventListener("mouseup", (e) => {
            this.holding = false;
            this.resize();
        }, false);

    }


    resize(){

        let w = this.canvas.offsetWidth;

        const min = document.body.clientWidth/3
        const max = document.body.clientWidth/10*7.5
        if( this.canvas.offsetWidth < min ){
            this.canvas.style.width = `${min}px`;
            w = min;

        }else if ( this.canvas.offsetWidth > max){
            this.canvas.style.width = `${max}px`;
            w = max;
        }

        const maxX = document.body.clientWidth;
        const maxY = document.body.clientHeight;

        const left = (maxX - w)/2;
        const top =  maxY/2-this.canvas.offsetHeight/1.8 ;
        this.canvas.style.left = `${left}px`;
        this.canvas.style.top = `${top}px`;

        const cornerRight = left-50;
        const cornerBtm = maxY/2-this.canvas.offsetHeight/2.2;
        this.corner.style.right = `${cornerRight}px`;
        this.corner.style.bottom = `${cornerBtm }px`;

    }
    

   isHover( x, y ){
        if ( 
            Math.abs(x-this.x) < 20 &&
            Math.abs(y-this.y) < 20 
        ){return true;}
        else{return false;}
   }
}