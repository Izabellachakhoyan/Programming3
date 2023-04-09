class Fox extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 5
        this.directions = []
    }


    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char) {
        this.getNewCoordinates()
        return super.chooseCell(char)

        

    }


    mul() {
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 3

            let fx = new Fox(newX, newY)

            foxArr.push(fx)


        }
    }


    eat() {
        let emptyCell = this.chooseCell(2)
        let newCell = random(emptyCell)

        if (newCell) {
            this.energy += 8
            let newX = newCell[0]
            let newY = newCell[1]

          

            for (let i in frogArr) {
                if (newX == frogArr[i].x && newY == frogArr[i].y) {
                    frogArr.splice(i, 1)
                }
            }


            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY

            if (this.energy > 30) {
                this.mul()
            }

        } else {
            this.move()
        }
    }


    move(){
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

            if(newCell){
                let newX = newCell[0]
                let newY = newCell[1]

                matrix[newY][newX] = 3
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

          for(let i in foxArr){
                   if(this.x == foxArr[i].x && this.y == foxArr[i].y) {
                             foxArr.splice(i,1)
                   }
          }
    }


}


