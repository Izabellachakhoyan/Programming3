function matrixGenerator(matrixSize, butterfly,frog,fox,dog,lion,dragon) {
        var matrix = []
        ////  matrix սարքելու հատված
        for (let i = 0; i < matrixSize; i++) {
                matrix.push([])
                for (let j = 0; j < matrixSize; j++) {
                        matrix[i].push(0)
                }
        }

        // 1 -եր այսինքն խոտեր քցելու հատված մատռիքսում
        for (let i = 0; i < butterfly; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 1
        }
         //GrassEater 2

         for (let i = 0; i < frog; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 2
        }
        //3 fox


        for (let i = 0; i < fox; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 3
        }
      //4 dog
        for (let i = 0; i < dog; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 4
        } 
        //5 lion
        for (let i = 0; i < lion; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 5
                //6 dragon
        }for (let i = 0; i < dragon; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 6
        }
       
       
        return matrix
}

let matrix = matrixGenerator(25, 17,7,4, 2,6,8)
let side = 30
///օբյեկտներ պահելու զանգվածներ
var butterflyArr = []
var frogArr = []
var foxArr = []
var dogArr = []
var lionArr = []
var dragonArr = []


function setup() {
        frameRate(15)
        createCanvas(matrix[0].length * side, matrix.length * side)
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                let butterfly = new Butterfly(x, y)

                                butterflyArr.push(butterfly)


                        } else if(matrix[y][x] == 2){
                             let fr = new  Frog(x,y)
                             frogArr.push(fr)
                        }else if(matrix[y][x] ==  3){
                             let fx = new Fox(x,y)
                             foxArr.push(fx)
                        }else if(matrix[y][x] ==  4){
                                let dg = new Dog(x,y)
                                dogArr.push(dg)
                        }else if(matrix[y][x] ==  5){
                                let ln = new Lion(x,y)
                                lionArr.push(ln)
                        }else if(matrix[y][x] ==  6){
                                let dr = new Dragon(x,y)
                                dragonArr.push(dr)
                        }


                }
        }

}


function draw() {

        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
    
                var tobot = side - side * 0.1
                textSize(tobot)
    
    
                if (matrix[y][x] == 1) {
                    fill("blue")
                    rect(x * side, y * side, side, side)
                    text("🦋", x * side, y * side + tobot)
                } else if (matrix[y][x] == 2) {
                    fill("green")
                    rect(x * side, y * side, side, side)
                    text("🐸", x * side, y * side + tobot)
                } else if (matrix[y][x] == 0) {
                    fill("#ACD8FF")
                    rect(x * side, y * side, side, side)
                    
    
                } else if (matrix[y][x] == 3) {
    
                    fill("orange")
                    rect(x * side, y * side, side, side)
                    text("🦊", x * side, y * side + tobot)
                }
                else if (matrix[y][x] == 4) {
                    fill("#brown")
                    rect(x * side, y * side, side, side)
                    text("🐶", x * side, y * side + tobot)
                }
                else if (matrix[y][x] == 5) {
                    fill("yellow")
                    rect(x * side, y * side, side, side)
                    text("🦁", x * side, y * side + tobot)
                } else if (matrix[y][x] == 6) {
    
                    fill("#bf9e13")
                    rect(x * side, y * side, side, side)
                    text("🐉", x * side, y * side + tobot)
                }
        }
}


                for (let i in butterflyArr) {
                        butterflyArr[i].mul()
                }


                for(let i in frogArr){
                        frogArr[i].eat()
                }

             

                for(let i in foxArr){
                        foxArr[i].eat()
                }
console.log(dragonArr.length);
                for(let i in dogArr){
                        dogArr[i].eat()
                }

                for(let i in lionArr){
                        lionArr[i].eat()
                }
                for(let i in dragonArr){
                        dragonArr[i].eat()
                }
       


}
