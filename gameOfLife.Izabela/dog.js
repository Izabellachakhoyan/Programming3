class Dog extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 10
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

    chooseCell(char, char1) {
        this.getNewCoordinates()
        return super.chooseCell(char, char1)

    }


    mul() {
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 4

            let dg = new Dog(newX, newY)

            dogArr.push(dg)


        }
    }


    eat() {
        let emptyCell = this.chooseCell(1, 2)
        let newCell = random(emptyCell)

        if (newCell) {
            this.energy += 10
            let newX = newCell[0]
            let newY = newCell[1]

            
            for (let i in foxArr) {
                if (newX == foxArr[i].x && newY == foxArr[i].y) {
                    foxArr.splice(i, 1)
                }
            }


            matrix[newY][newX] = 4
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

                matrix[newY][newX] = 4
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

          for(let i in dogArr){
                   if(this.x == dogArr[i].x && this.y == dogArr[i].y) {
                             dogArr.splice(i,1)
                   }
          }
    }


}
