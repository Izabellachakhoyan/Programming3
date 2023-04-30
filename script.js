var socket = io()

var side = 30

function setup() {
        createCanvas(25 * side, 25 * side)
}
socket.on("Winter", function (data) {
    weath = data;
})
socket.on("Summer", function (data) {
    weath = data;
})
socket.on("Spring", function (data) {
    weath = data;
})
socket.on("Autumn", function (data) {
    weath = data;
})
 var weath = "spring";

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
                }
                 else if (matrix[y][x] == 0) {
                    if (weath == "spring") {
                        fill("darkgreen");
                    }
                    else if (weath == "summer") {
                        fill("#79a83b");
                    }
                    else if (weath == "autumn") {
                        fill("#ff8453");
                    }
                    if (weath == "winter") {
                        fill("#ffffff");
                    }
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


}


socket.on('send matrix',nkarox)

function Winter() {
    socket.emit("winter");
}
function Summer() {
    socket.emit("summer");
}
function Spring() {
    socket.emit("spring");
}
function Autumn() {
    socket.emit("autumn");
}
function AddButterfly(){
    socket.emit("addButterfly");
}
function AddFrog(){
    socket.emit("addFrog");
}
function KillAll(){
    socket.emit("killAll");
}
function AddFox(){
    socket.emit("addFox");
}
function AddDog(){
    socket.emit("addDog");
}
function AddLion(){
    socket.emit("addLion");
}
function AddDragon(){
    socket.emit("addDragon");

}

