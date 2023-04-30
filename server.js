var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs')


app.use(express.static("."));

app.get('/', function (req, res){
    res.redirect('index.html');
});

server.listen(3000,function(){
    console.log("server is run")
});

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

matrix = matrixGenerator(25, 17,7,4, 2,6,8)

io.sockets.emit('send matrix', matrix)

butterflyArr = []
frogArr = []
foxArr = []
dogArr = []
lionArr = []
dragonArr = []


Butterfly = require("./butterfly")
Frog = require("./frog")
Fox = require("./fox")
Dog = require("./dog")
Lion = require("./lion")
Dragon = require("./dragon")

function createObject(){
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
io.sockets.emit('send matrix', matrix)

}


function game(){
        for (let i in butterflyArr) {
                butterflyArr[i].mul()
        }


        for(let i in frogArr){
                frogArr[i].eat()
        }

     

        for(let i in foxArr){
                foxArr[i].eat()
        }

        for(let i in dogArr){
                dogArr[i].eat()
        }

        for(let i in lionArr){
                lionArr[i].eat()
        }
        for(let i in dragonArr){
                dragonArr[i].eat()
        }

        io.sockets.emit('send matrix', matrix)
}

setInterval(game,400)

var weath;

function Winter() {
    weath = "winter";
    io.sockets.emit('Winter', weath);
}

function Summer() {
    weath = "summer";
    io.sockets.emit('Summer', weath);
}

function Spring() {
    weath = "spring";
    io.sockets.emit('Spring', weath);
}
function Autumn() {
    weath = "autumn";
    io.sockets.emit('Autumn', weath);
}

function Kill() {
        butterflyArr = [];
        frogArr = [];
        foxArr = [];
        dogArr = [];
        lionArr = [];
        dragonArr = [];
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                matrix[y][x] = 0;
            }
        }
        io.sockets.emit("send matrix", matrix);
    }
    function AddButterfly() {
        for (var i = 0; i < 7; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 1;
                var butterfly = new Butterfly(x, y);
                butterflyArr.push(butterfly);
            }
        }
        io.sockets.emit("send matrix", matrix);
    }
    function AddFrog() {
       for (var i = 0; i < 7; i++){
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
                    if (matrix[y][x] == 0) {
                        matrix[y][x] = 2;
                        var fr = new Frog(x, y);
                        frogArr.push(fr);
                    }
                }

        io.sockets.emit("send matrix", matrix);
    }
    function AddFox() {
        for (var i = 0; i < 7; i++){
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 3;
               var fx = new Fox(x, y);
                foxArr.push(fx);
            }
        }
        io.sockets.emit("send matrix", matrix);
    }
    function AddDog() {
        for (var i = 0; i < 7; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 4;
                var dg = new Dog(x, y);
                dogArr.push(dg);
            }
        }
        io.sockets.emit("send matrix", matrix);
    }
    
    function AddLion() {
        for (var i = 0; i < 7; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 5;
                var ln = new Lion(x, y);
              lionArr.push(ln);
            }
        }
        io.sockets.emit("send matrix", matrix);
    }
    
    function AddDragon() {
        for (var i = 0; i < 7; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 6;
                var dg = new Dragon(x, y);
                dragonArr.push(dg);
            }
        }
        io.sockets.emit("send matrix", matrix);
    }
    
    
    


io.on('connection',function(socket){
        createObject();
    socket.on("spring", Spring);
    socket.on("summer", Summer);
    socket.on("autumn", Autumn);
    socket.on("winter", Winter);
    socket.on("addButterfly", AddButterfly);
    socket.on("addFrog", AddFrog);
    socket.on("killAll", Kill);
    socket.on("addFox", AddFox);
    socket.on("addDog", AddDog);
    socket.on("addLion", AddLion);
    socket.on("addDragon", AddDragon);
})




var statistics = {}

setInterval(function(){
        statistics.butterfly = butterflyArr.length
        statistics.frog = frogArr.length
        statistics.fox = foxArr.length
        statistics.dog = dogArr.length
        statistics.lion = lionArr.length
        statistics.dragon = dragonArr.length

        fs.writeFile("statistics.json",JSON.stringify(statistics),function(){
                console.log("statistics");
       })
},1000)