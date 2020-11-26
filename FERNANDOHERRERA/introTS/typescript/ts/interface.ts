(()=>{
    interface Xmen {
        name:string,
        age:number,
        power?:string//opttional
    };
    const sendMission = (xmen:Xmen)=>{
        console.log(`Sending to ${xmen.name}`);
    };
    const wolverine:Xmen = {
        name:'Logan',
        age:50
    };
    sendMission(wolverine);
})();



