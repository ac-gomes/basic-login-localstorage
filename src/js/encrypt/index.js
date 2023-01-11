function preLoad(...args){
    args.map(fn => {
        if(fn instanceof Function){
           console.log(fn instanceof Function)
           fn()

        }
    })

};

function helooA(){
    console.log('olá A')
};
function helooB(){
    console.log('olá B')
};
function helooC(){
    console.log('olá C')
};

preLoad(helooA,helooB,helooC)