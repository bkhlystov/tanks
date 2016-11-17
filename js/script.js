/**
 * Created by Дом on 06.10.2016.
 */

var o=1;
var t=1;
var array = [];
//var array = document.querySelectorAll('nav>div');
var pole=[];
var namber;
//for(var j=0; j<26;j++) {
//    pole[j] = [];
//    for (var q = 0; q < 26; q++) {
//        pole[j][q] = 0;
//
//    }
//}

function Map () {
    var map1 = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 3, 3, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 3, 3, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2],
            [3, 3, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 3, 3],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 5, 5, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 5, 5, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
         map2 = [
            [0,0,0,0,0,0,3,3,2,2,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,3,3,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0],
            [0,0,2,2,0,0,3,3,0,0,0,0,0,0,2,2,0,0,2,2,0,0,2,2,0,0],
            [0,0,2,2,0,0,3,3,0,0,0,0,0,0,2,2,0,0,2,2,0,0,2,2,0,0],
            [0,0,2,2,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2,2,3,3,2,2,0,0],
            [0,0,2,2,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2,2,3,3,2,2,0,0],
            [0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0],
            [0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0],
            [4,4,0,0,0,0,2,2,0,0,0,0,3,3,0,0,0,0,2,2,4,4,2,2,3,3],
            [4,4,0,0,0,0,2,2,0,0,0,0,3,3,0,0,0,0,2,2,4,4,2,2,3,3],
            [4,4,4,4,0,0,0,0,0,0,2,2,0,0,0,0,3,3,0,0,4,4,0,0,0,0],
            [4,4,4,4,0,0,0,0,0,0,2,2,0,0,0,0,3,3,0,0,4,4,0,0,0,0],
            [0,0,2,2,2,2,2,2,4,4,4,4,4,4,3,3,0,0,0,0,4,4,2,2,0,0],
            [0,0,2,2,2,2,2,2,4,4,4,4,4,4,3,3,0,0,0,0,4,4,2,2,0,0],
            [0,0,0,0,0,0,3,3,4,4,2,2,0,0,2,2,0,0,2,2,0,0,2,2,0,0],
            [0,0,0,0,0,0,3,3,4,4,2,2,0,0,2,2,0,0,2,2,0,0,2,2,0,0],
            [3,3,2,2,0,0,3,3,0,0,2,2,0,0,2,2,0,0,0,0,0,0,2,2,0,0],
            [3,3,2,2,0,0,3,3,0,0,2,2,0,0,2,2,0,0,0,0,0,0,2,2,0,0],
            [0,0,2,2,0,0,2,2,0,0,2,2,2,2,2,2,0,0,2,2,3,3,2,2,0,0],
            [0,0,2,2,0,0,2,2,0,0,2,2,2,2,2,2,0,0,2,2,3,3,2,2,0,0],
            [0,0,2,2,0,0,2,2,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0],
            [0,0,2,2,0,0,2,2,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0],
            [0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,2,0,0],
            [0,0,2,2,0,0,0,0,0,0,0,2,2,2,2,0,0,0,2,2,0,0,2,2,0,0],
            [2,0,2,2,0,0,2,2,11,11,0,2,5,5,2,0,0,0,2,2,2,2,2,2,0,2],
            [2,0,2,2,0,0,2,2,11,11,0,2,5,5,2,0,0,0,2,2,2,2,2,2,0,2]
        ],
        map3 = [
            [0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 2, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 3, 3, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 3, 3, 2, 2, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0],
            [4, 4, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 4, 4, 0, 0, 0, 0],
            [4, 4, 0, 0, 0, 0, 2, 2, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 2, 2, 4, 4, 2, 2, 0, 0],
            [4, 4, 4, 4, 0, 0, 0, 0, 0, 2, 2, 3, 3, 0, 0, 3, 3, 0, 0, 4, 4, 4, 2, 2, 0, 0],
            [4, 4, 4, 4, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 3, 3, 0, 0, 4, 4, 4, 2, 2, 0, 0],
            [0, 0, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 3, 3, 0, 0, 0, 0, 4, 4, 4, 2, 2, 0, 0],
            [0, 0, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 3, 3, 0, 0, 0, 0, 4, 4, 4, 2, 2, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 3, 4, 4, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 4, 4, 2, 2, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 3, 4, 4, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 4, 4, 2, 2, 0, 0],
            [3, 3, 2, 2, 0, 0, 3, 3, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
            [3, 3, 2, 2, 0, 0, 3, 3, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 3, 3, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 3, 3, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 2, 5, 5, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0],
            [0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 2, 5, 5, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0]
        ];
    this.get =  function (a) {
        switch(a) {
            case 1:
                return map1;
                break;
            case 2:
                return map2;
                break;
            case 3:
                return map3;
                break;
            default:
                return ('Error. Chose your map, only 1 or 2 or 3')
        };
    },


        this.set = function setMap(b, mapNext){
            switch(b) {
                case 1:
                    map1 = mapNext;
                    break;
                case 2:
                    map2 = mapNext;
                    break;
                case 3:
                    map3 = mapNext;
                    break;
                default:
                    return ('Error. Chose your map, only 1 or 2 or 3')
            };
        }
}


var maps = new Map();




document.onkeydown = function(event){
    var keyCode;
    if (window.event.keyCode){
        keycode = window.event.keyCode; // IE
    }
    if(keycode==38){            //Top
        move('top', 1, 0);
    }else if(keycode==39){      //Right
        move('right', 1, 0);
    }else if(keycode==37){      //left
        move('left', 1, 0);
    }else if(keycode==40){      //Down
        move('down', 1, 0);
    }else if(keycode==32){      //Fire
        bum();
    }
};


//pole[24][5]=11;// tank
//pole[24][6]=11;// tank
//pole[25][5]=11;// tank
//pole[25][6]=11;// tank

//pole[24][12]=5;///orel
//pole[24][13]=5;///orel
//pole[25][12]=5;///orel
//pole[25][13]=5;///orel
//
//pole[14][13]=4;//less
//pole[20][3]=3;///metall
//pole[20][13]=2;///wall

//shot
//up ('tankUp1 bulletUp bullet')
//Right ('tankRight1 bulletRight bullet')
//Down ('tankDown1 bulletDown bullet')
//Left ('tankLeft1 bulletLeft bullet')
//11-u
//12-r
//13-d
//14-l

function check(argument, arg1) {
    var flag = false;
    if (argument == "left") {
        outer: for (var i = 0; i < 26; i++) {
            for (var h = 0; h < 26; h++) {
                if (arr[i][h] == arg1+"4") {
                    if ((arr[i][h - 1] == 0 && arr[i + 1][h - 1] == 0) || (arr[i][h - 1] == 4 && arr[i + 1][h - 1] == 4) || (arr[i][h - 1] == 4 && arr[i + 1][h - 1] == 0) || (arr[i][h - 1] == 0 && arr[i + 1][h - 1] == 4)) {
                        flag = true;
                        break outer;
                    }
                    else {
                        flag = false;
                        break outer;
                    }
                }
            }
        }
    }
    if (argument == "right") {
       outer:  for (var i = 0; i < 26; i++) {
            for (var h = 0; h < 26; h++) {
                if (arr[i][h] ==  arg1+"2") {
                    if ((arr[i][h + 2] == 0 && arr[i + 1][h + 2] == 0) || (arr[i][h + 2] == 4 && arr[i + 1][h + 2] == 4) || (arr[i][h + 2] == 4 && arr[i + 1][h + 2] == 0) || (arr[i][h + 2] == 0 && arr[i + 1][h + 2] == 4)) {
                        flag = true;
                        break outer;
                    }
                    else {
                        flag = false;
                        break outer;
                    }
                }
            }
        }
    }
    if (argument == "down") {
        outer: for (var i = 0; i < 26; i++) {
            for (var h = 0; h < 26; h++) {
                if (arr[i][h] ==  arg1+"3") {
                    if(i<24){
                        if ((arr[i + 2][h] == 0 && arr[i + 2][h + 1] == 0) || (arr[i + 2][h] == 4 && arr[i + 2][h + 1] == 4) || (arr[i + 2][h] == 4 && arr[i + 2][h + 1] == 0) || (arr[i + 2][h] == 0 && arr[i + 2][h + 1] == 4)) {
                            flag = true;
                            break outer;
                            }
                        else {
                            flag = false;
                            break outer;
                        }
                    }
                }
            }
        }
    }
    if (argument == "top") {
       outer: for (var i = 0; i < 26; i++) {
            for (var h = 0; h < 26; h++) {
                if (arr[i][h] ==  arg1+"1") {
                    if(i!=0){
                        if ((arr[i - 1][h] == 0 && arr[i - 1][h + 1] == 0) || (arr[i - 1][h] == 4 && arr[i - 1][h + 1] == 4) || (arr[i - 1][h] == 4 && arr[i - 1][h + 1] == 0) || (arr[i - 1][h] == 0 && arr[i - 1][h + 1] == 4)) {
                        flag = true;
                        break outer;
                        }
                    else {
                        flag = false;
                        break outer;
                            }
                        }
                    }
                }

            }
        }
        return flag;
    }







   

    draw();
 
    var n=[];    
    var a2_1 = [];
    var a2_2 = [];
    var a1_1 = [];
    var a1_2 = [];
    for(var w = 0; w<4; w++)
        {n[w];
        a2_1[w]=0;
        a2_2[w]=0;
        a1_1[w]=0;
        a1_2[w]=0;}

    
    function move(arg, arg1, w) {
        arr = maps.get(2);
        if (arg == "top" && check("top", arg1) && n[w] == arg1+"1") {
            outer: for (var i = 0; i < 26; i++) {
                for (var j = 0; j < 26; j++) {
                    if (String(arr[i][j])[0] == arg1) {
                        arr[i + 1][j] = a2_1[w];
                        arr[i + 1][j + 1] = a2_2[w];
                        a2_1[w] = a1_1[w];
                        a2_2[w] = a1_2[w];
                        a1_1[w] = arr[i - 1][j]; //вдруг лес
                        a1_2[w] = arr[i - 1][j + 1]; //вдруг лес
                        arr[i - 1][j] = arg1+"1";
                        arr[i - 1][j + 1] =arg1+"1";
                        break outer;
                    }
                }
            }
        }
        if (arg == "right" && check("right", arg1) && n[w] == arg1+"2") {
            outer: for (var i = 0; i < 26; i++) {
                for (var j = 0; j < 26; j++) {
                    if (String(arr[i][j])[0] == arg1) {
                        arr[i][j] = a1_1[w];
                        arr[i + 1][j] = a2_1[w];
                        a1_1[w] = a1_2[w];
                        a2_1[w] = a2_2[w];
                        a1_2[w] = arr[i][j + 2];
                        a2_2[w] = arr[i + 1][j + 2]; //вдруг лес
                        arr[i][j + 2] = arg1+"2";
                        arr[i + 1][j + 2] = arg1+"2";
                        arr[i][j + 2] = arg1+"2";
                        arr[i + 1][j + 2] = arg1+"2";
                        break outer;
                    }
                }
            }
        }
        if (arg == "down" && check("down", arg1) && n[w] == arg1+"3") {
            outer: for (var i = 0; i < 26; i++) {
                for (var j = 0; j < 26; j++) {
                    if (String(arr[i][j])[0] == arg1) {
                        arr[i][j] = a1_1[w];
                        arr[i][j + 1] = a1_2[w];
                        a1_1[w] = a2_1[w];
                        a1_2[w] = a2_2[w];
                        a2_1[w] = arr[i + 2][j];  //вдруг лес
                        a2_2[w] = arr[i + 2][j + 1];
                        arr[i + 2][j] = arg1+"3";
                        arr[i + 2][j + 1] = arg1+"3";
                        break outer;
                    }
                }
            }
        }
        if (arg == "left" && check("left", arg1) && n[w] == arg1+"4") {
            outer: for (var i = 0; i < 26; i++) {
                for (var j = 0; j < 26; j++) {
                    if (String(arr[i][j])[0] == arg1) {
                        arr[i][j + 1] = a1_2[w];
                        arr[i + 1][j + 1] = a2_2[w];
                        a1_2[w] = a1_1[w];
                        a2_2[w] = a2_1[w];
                        a1_1[w] = arr[i][j - 1];
                        a2_1[w] = arr[i + 1][j - 1] //вдруг лес
                        arr[i][j - 1] = arg1+"4";
                        arr[i + 1][j - 1] = arg1+"4";
                        break outer;
                    }
                }
            }
        }
        if (arg == "top") {     //смена направления
            n[w] = arg1+"1";
        }
        if (arg == "right") {
            n[w] = arg1+"2";
        }
        if (arg == "down") {
            n[w] = arg1+"3";
        }
        if (arg == "left") {
            n[w] = arg1+"4";
        }
        for (var i = 0; i < 26; i++) {
            for (var j = 0; j < 26; j++) {
                if (String(arr[i][j])[0] == arg1) {
                    arr[i][j] = n[w];
                }
            }
        }
    maps.set(2,arr);
    draw();    
    }




// пуля

function bum(){
    var a1 = 0,
        a2 = 0,
        b1 = 0,
        b2 = 0,
        v = 0,
        a = 0,
        b = 0,
        g = 0,
        dir = 0,
        arr = maps.get(2);

        function find_tank(){
            v: for(i = 0; i<26; i++){
                for(j = 0; j<26; j++){
                    switch (arr[i][j]){
                        case 11, "11":
                            a = i;
                            b = j;
                            dir = 11;
                            break v;
                        break
                        case 12, "12":
                            a = i;
                            b = j;
                            dir = 12;
                            break v;
                        break
                        case 13, "13":
                            a = i;
                            b = j;
                            dir = 13;
                            break v;
                        break
                        case 14, "14":
                            a = i;
                            b = j;
                            dir = 14;
                            break v;
                        break
                    }
                }
            }
        }

        find_tank()
//top
        if(dir == 11){ 
          v2:  for(a=a-1; a>=0; a--){
            if((arr[a][b] == 2)||(arr[a][b+1] == 2)){
                if(arr[a][b] == 2){
                    arr[a][b] =0; 
                }
                if(arr[a][b+1] == 2){
                    arr[a][b+1] =0;
                }
                break v2;
            }
                if((arr[a][b] == 3) || (arr[a][b+1] == 3)){
                    break v2;
                }
            }
        }else if(dir ==13){
//down
            v2: for(a; a<=26; a++){
                    if((arr[a][b] == 2)||(arr[a][b+1] == 2)){
                        if(arr[a][b]==2){
                            arr[a][b]=0;
                        }
                        if(arr[a][b+1]==2){
                            arr[a][b+1]=0;
                        }
                        break v2;
                    }
                    if((arr[a][b] == 3) || (arr[a][b+1] == 3)){
                        break v2;
                    }
                }
            
        }else if(dir == 14){
//left
            v2: for(b; b>=0; b--){
                    if((arr[a][b] == 2) || (arr[a+1][b] == 2)) {
                        if(arr[a][b]==2){
                            arr[a][b]=0;
                        }
                        if(arr[a+1][b]==2){
                            arr[a+1][b]=0;
                        }
                        break v2;
                    }
                    if((arr[a][b] == 3) || (arr[a+1][b] == 3)){
                        break v2;
                    }
              
            }
        }else if(dir == 12){

//right
            v2: for(b; b<26; b++){
                    if((arr[a][b] == 2) || (arr[a+1][b] == 2)){
                        if(arr[a][b]==2){
                            arr[a][b]=0;
                        }
                        if(arr[a+1][b]==2){
                            arr[a+1][b]=0;
                        }
                        break v2;
                    }
                    if((arr[a][b] == 3) || (arr[a+1][b] == 3)){
                        break v2;
                    }
        
            }
        }
        maps.set(2,arr);
        draw();
}






function draw() {
    var o=1;
    var t=1, b1=1, b2=1, b3=1;
    var i=0;
    pole = maps.get(2);
    var nav = document.querySelector('nav');
    var array = document.querySelectorAll('nav>div');
    for (var y = 0; y < 26; y++) {
        array[y] = [];


        for (var num = 0; num < 26; num++) {

            array[y][num] = array[i++];


            if (pole[y][num] == 2) {
                array[y][num].className = 'brickWall';
                nav.appendChild(array[y][num]);
            }
            if (pole[y][num] == 3) {
                array[y][num].className = 'steelWall';
                nav.appendChild(array[y][num]);
            }
            if (pole[y][num] == 4) {
                array[y][num].className = 'trees';
                nav.appendChild(array[y][num]);
            }
            if (pole[y][num] == 11) {
                array[y][num].className = 'tankUp' + t;
                nav.appendChild(array[y][num]);

                t++;
            } 
            if (pole[y][num] == 12) {
                array[y][num].className = 'tankRight' + t;
                nav.appendChild(array[y][num]);
                t++
            } 
            if (pole[y][num] == 13) {
                array[y][num].className = 'tankDown' + t;
                nav.appendChild(array[y][num]);
                t++
            } 
            if (pole[y][num] == 14) {
                array[y][num].className = 'tankLeft' + t;
                nav.appendChild(array[y][num]);
                t++
            }
            if (pole[y][num] == 5) {
                array[y][num].className = 'base' + o;
                nav.appendChild(array[y][num]);
                o++
            }
            if (pole[y][num] == 0) {
                array[y][num].className = 'zero';
                nav.appendChild(array[y][num]);
            }
             if (pole[y][num] == 71) {
                array[y][num].className = 'BotUp' + b1;
                nav.appendChild(array[y][num]);
                b1++;
            }
            if (pole[y][num] == 72) {
                array[y][num].className = 'BotRight' + b1;
                nav.appendChild(array[y][num]);
                b1++;
            }
            if (pole[y][num] == 73) {
                array[y][num].className = 'BotDown' + b1;
                nav.appendChild(array[y][num]);
                b1++;
            }
            if (pole[y][num] == 74) {
                array[y][num].className = 'BotLeft' + b1;
                nav.appendChild(array[y][num]);
                b1++;
            }
            if (pole[y][num] == 81) {
                array[y][num].className = 'BotUp' + b2;
                nav.appendChild(array[y][num]);
                b2++;
            }
            if (pole[y][num] == 82) {
                array[y][num].className = 'BotRight' + b2;
                nav.appendChild(array[y][num]);
                b2++;
            }
            if (pole[y][num] == 83) {
                array[y][num].className = 'BotDown' + b2;
                nav.appendChild(array[y][num]);
                b2++;
            }
            if (pole[y][num] == 84) {
                array[y][num].className = 'BotLeft' + b2;
                nav.appendChild(array[y][num]);
                b2++;
            }
            if (pole[y][num] == 91) {
                array[y][num].className = 'BotUp' + b3;
                nav.appendChild(array[y][num]);
                b3++;
            }
            if (pole[y][num] == 92) {
                array[y][num].className = 'BotRight' + b3;
                nav.appendChild(array[y][num]);
                b3++;
            }
            if (pole[y][num] == 93) {
                array[y][num].className = 'BotDown' + b3;
                nav.appendChild(array[y][num]);
                b3++;
            }
            if (pole[y][num] == 94) {
                array[y][num].className = 'BotLeft' + b3;
                nav.appendChild(array[y][num]);
                b3++;
            }
        }
    }
    namber = document.querySelectorAll('div');
}

//боты
function GoBot(pos, arg1, w){
        var tmp;
        var sides = ['top', 'right', 'down', 'left'];
        var c = setInterval(function(){
          tmp=sides[Math.floor(Math.random() * sides.length)];  
    //tmp = sides[randomInteger(0, 3)];
},2000);
        arr = maps.get(2);
        arr[0][pos] = arg1+"1";
        arr[0][pos+1] =arg1+"1";
        arr[1][pos] = arg1+"1";
        arr[1][pos+1] = arg1+"1";
        maps.set(2, arr);
        draw();
        this.go = setInterval(function() {
                switch (tmp) {
                    case 'top':
                        move('top', arg1, w);
                        break;
                    case 'right':
                        move('right', arg1, w);
                        break;
                    case 'down':
                        move('down', arg1, w);
                        break;
                    case 'left':
                        move('left', arg1, w);
                        break;
            } 
        },500);
}

var pos1 = {
    x: 0
};
var pos2 = {
    x: 12
};
var pos3 = {
    x: 24
};
var enemy1 = {};
var enemy2 = {};
var enemy3 = {};


enemy1.go = new GoBot(pos1.x, 7, 1);
enemy2.go = new GoBot(pos2.x, 8, 2);
enemy3.go = new GoBot(pos3.x, 9, 3);


