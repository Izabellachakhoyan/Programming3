let LivingCreature = require("./LivingCreature")
module.exports = class Frog extends LivingCreature{
    constructor(x,y){
   super(x,y)
        this.energy = 10
        this.directions = [ ];
    }


    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }



    chooseCell(char){
        this.getNewCoordinates()
        return super.chooseCell(char)

   }


     mul(){
         let emptyCell = this.chooseCell(0)
         let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

            if(newCell){
                 let newX = newCell[0]
                 let newY = newCell[1]

                 matrix[newY][newX]  = 2

                 let fr = new Frog(newX,newY)

                 frogArr.push(fr)


            }
     }


     eat(){
        let emptyCell = this.chooseCell(1)
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

           if(newCell ){
               this.energy += 5
            let newX = newCell[0]
            let newY = newCell[1]

                   for(let i in butterflyArr){
                            if(newX == butterflyArr[i].x  && newY == butterflyArr[i].y){
                                      butterflyArr.splice(i,1)
                            }
                   }

                   matrix[newY][newX] = 2
                   matrix[this.y][this.x] = 0


                   this.x = newX
                   this.y = newY

                   if(this.energy > 30){
                        this.mul()
                   }

           }else{
               this.move()
           }
     }

     move(){
        let emptyCell = this.chooseCell(0)
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

            if(newCell){
                let newX = newCell[0]
                let newY = newCell[1]

                matrix[newY][newX] = 2
                matrix[this.y][this.x] = 0
                
                this.x = newX
                this.y = newY

                this.energy--

                if(this.energy < 0){
                    this.die ()
                }
            }
     }


     die(){
         matrix[this.y][this.x] = 0

           for(let i in frogArr){
                    if(this.x == frogArr[i].x && this.y == frogArr[i].y) {
                              frogArr.splice(i,1)
                    }
           }
     }
     
 

}