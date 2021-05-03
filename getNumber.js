
var it = 0;
var a = [];

for (let j = 2; j < process.argv.length; j++) {

    a[it] = (process.argv[j]);
    it++;

}

var number = ["Zero" ,"One", "Two" , "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

var count = 0;

for (var num = 0; a.length > num ;num++ ){

    for (var getnum = 0; a[num].length > getnum  ;getnum++){

        var get = parseInt(a[num][getnum]);
        //console.log(number[get]);
        process.stdout.write(number[get]);

    }

    if(a.length- 1 >num ) {
        process.stdout.write(",");
    }


}

