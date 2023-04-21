var socket = io()

var side = 30
///օբյեկտներ պահելու զանգվածներ



function setup() {
        createCanvas(25 * side, 25 * side)


}


function nkarox(matrix) {

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
