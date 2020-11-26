(function(){
    function activate(
        who:string,
        moment?:string,
        boom:string='batcar'
        ){
            if(moment){

                console.log(`${who} on ${boom} ${moment}`);
            }else{
                console.log(`${who} on ${boom}`);
            }

}
activate("Batman");
})();



