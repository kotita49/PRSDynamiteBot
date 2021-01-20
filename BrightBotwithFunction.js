class Bot {
    
    makeMove(gamestate) {              
        let toBeReturned1 = ['R', 'S', 'P', 'D'];
        let dynamite = 0
        let arounds = gamestate.rounds
        let returnValue1=''

        gamestate.rounds.forEach(function (element) {
            if (element.p1 = 'D') {
                dynamite += 1
            }
        })

        if (dynamite >= 100) {
            toBeReturned1.pop()
        }

            
        
        // if(arounds.length>4){lastMove = arounds[arounds.length - 4].p2
        //     for (let i = 1; i < 4; i++) {
        //         if ( arounds[arounds.length - i].p2 === lastMove) {
            if(arounds.length>4){
            let lastMove = arounds[arounds.length-1].p2;
            let secondLastMove = arounds[arounds.length-2].p2;
        let thirdLastMove = arounds[arounds.length-3].p2;
        let fourthLastMove = arounds[arounds.length-4].p2;
        if(lastMove==secondLastMove&&lastMove==thirdLastMove&&lastMove==fourthLastMove){
                    returnValue1 = this.counterAttack(lastMove)
                                }
                            }
            
        
       
         
       
       else if(arounds.length>0 && arounds[arounds.length-1].p2==='D'){
            returnValue1='W'
        }            
     else if( gamestate.rounds.length<100)
        {returnValue1= 'D'}
        

        else{
        returnValue1 = toBeReturned1[Math.floor(Math.random() * toBeReturned1.length)];}
        console.log(returnValue1);
        return returnValue1;
    
    }
    counterAttack(lastMove) {
        let returnValue1 ="";   
        if(lastMove==="R"){
    returnValue1 = "P"
    } else if(lastMove ==="P"){
    returnValue1 = "S"
    }else if(lastMove === "S"){
    returnValue1 = "R"
    }
    
    return returnValue1;
    
    
        
     }

     
}


module.exports = new Bot();