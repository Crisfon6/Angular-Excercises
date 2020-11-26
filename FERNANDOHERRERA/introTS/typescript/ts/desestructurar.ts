(function(){
    const avenger= {
        "name": 'IronMan',
        "power":'Genius'
    };
    
    const extract = ({name,power}:any)=>{
        console.log(name);
        console.log(power);
    }
    extract(avenger);
    
    const avengers:string[] = ['Thor','Ironman','Spiderman'];
    const [thor,ironman,spider] = avengers;
    console.log(thor);
})();



