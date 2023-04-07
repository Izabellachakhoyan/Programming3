class Dragon {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 25
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
        let found = []


        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i])
                }
            }

          
        }


        return found

    }


    mul() {
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 6

            let dr = new Dragon(newX, newY)

            dragonArr.push(dr)


        }
    }


    eat() {
        let emptyCell = this.chooseCell(5)
        let newCell = random(emptyCell)

        if (newCell) {
            this.energy += 14
            let newX = newCell[0]
            let newY = newCell[1]

            
            for (let i in lionArr) {
                if (newX == lionArr[i].x && newY == lionArr[i].y) {
                    lionArr.splice(i, 1)
                }
            }


            matrix[newY][newX] = 6
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

                matrix[newY][newX] = 6
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

          for(let i in dragonArr){
                   if(this.x == dragonArr[i].x && this.y == dragonArr[i].y) {
                             dragonArr.splice(i,1)
                   }
          }
    }


}
