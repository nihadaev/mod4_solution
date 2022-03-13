let names = ["Jack","Nihad","John","Thomas","Arthur"]

for(let i=0;i<names.length; i++){
    let test= names[i].split("");
    if(test[0]== "j" || test[0]== "J"){
        console.log("Goodbye" + " " + "J" + names[i]);
    } else{
        console.log("Hello" + " " + names[i]);
    }
}

