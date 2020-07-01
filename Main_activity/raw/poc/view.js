let fs = require("fs"); // requires the "fs" module
let path = require("path"); //requires the "path" module

// checkwhether file or directory
function checkWhetherFile(src) {
    return fs.lstatSync(src).isFile()
}

//To getContent of any folder
function getContent(src){
    return fs.readdirSync(src);
}

// function for View As Flat Files
function viewAsFlatFiles(src,toprint){
    //checkwhether file or directory
    //file
    if(checkWhetherFile(src)==true){
        console.log(toprint+" *");
    }else{
        //directory
        //print
        console.log(toprint);
        //get childrens
        let childNames = getContent(src);
        for(let i=0;i<childNames.length;i++){
            let childPath = path.join(src,childNames[i]);
            let cToprint = path.join(toprint,childNames[i]);
            viewAsFlatFiles(childPath,cToprint);
        }
    }
}

//function for View As Tree
function viewAsTree(src,indent){
    //checkwhether file or directory
    //file
    if(checkWhetherFile(src)==true){
        console.log(indent+path.basename(src)+" *");
    }else{
        //directory
        //print
        console.log(indent+path.basename(src));
        //get childrens
        let childNames = getContent(src);
        for(let i = 0; i<childNames.length; i++){
            let childPath = path.join(src,childNames[i]);
            viewAsTree(childPath,indent+"__");
        }
    }
}

//let src = process.argv[2];
//viewAsFlatFiles(src,path.basename(src));
//viewAsTree(src,"");