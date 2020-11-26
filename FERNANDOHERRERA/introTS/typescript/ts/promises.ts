(()=>{
    const retirarMoney = (amountRetiro:number):Promise<number>=>{
        let actualmoney =1000;
        return new Promise((resolve,reject)=>{
            if(actualmoney<amountRetiro){
                reject('No found')
            }else{
                actualmoney -= amountRetiro;
                resolve(actualmoney);
            }

        })
    }


   retirarMoney(20)
    .then(amountActual=>console.log(amountActual))
    .catch(console.warn);
})();



