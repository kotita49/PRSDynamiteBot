class Bot {

    makeMove(gamestate) {
        let toBeReturned1 = ['R', 'S', 'P', 'D'];
        let dynamite = 0
        let arounds = gamestate.rounds
        let returnValue1 = ''
        let opponentFirstThrow =''
        
        gamestate.rounds.forEach(function (element) {
            if (element.p1 = 'D') {
                dynamite += 1
            }
        })

        if (dynamite >= 100) {
            toBeReturned1.pop()
        }

    
        if(arounds.length>4){opponentFirstThrow = arounds[arounds.length - 4].p2
        for (let i = 1; i < 4; i++) {
            if ( arounds[arounds.length - i].p2 === opponentFirstThrow) {
                if (opponentFirstThrow === 'S') { returnValue1 = 'R' }
                if (opponentFirstThrow === 'R') { returnValue1 = 'P' }
                if (opponentFirstThrow === 'P') { returnValue1 = 'S' }
            }
        }
        }

        else if (arounds.length > 0 && arounds[arounds.length - 1].p2 === 'D') {
            returnValue1 = 'W'
        }


        // else if(arounds.length>4 && arounds[arounds.length-1].p2 === 'R' && arounds[arounds.length-2].p2 === 'R' &&
        //  arounds[arounds.length-3].p2=== 'R' && arounds[arounds.length-4].p2==='R' ){
        //     returnValue1 ='P'
        // }

        // else if(arounds.length>4 && arounds[arounds.length-1].p2 === 'P' && arounds[arounds.length-2].p2 === 'P' &&
        //  arounds[arounds.length-3].p2=== 'P' && arounds[arounds.length-4].p2==='P' ){
        //     returnValue1 ='S'
        // }

        // else if(arounds.length>4 && arounds[arounds.length-1].p2 === 'S' && arounds[arounds.length-2].p2 === 'S' &&
        //  arounds[arounds.length-3].p2=== 'S' && arounds[arounds.length-4].p2==='S' ){
        //     returnValue1 ='R'
        // }

        else if (gamestate.rounds.length < 100) {
             returnValue1 = 'D'
        }

        else  {
            returnValue1 = toBeReturned1[Math.floor(Math.random() * toBeReturned1.length)];
        }

               return returnValue1;

    }
}


module.exports = new Bot();
