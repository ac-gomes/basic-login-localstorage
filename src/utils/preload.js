function preLoad(...args){
  args.map(fn => {
      if(fn instanceof Function){
         fn()
      }
  })

};

export default preLoad;