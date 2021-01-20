class Bot {
       makeMove(gamestate) {
                  gamestate["rounds"][0]["pl1"]
                  let rounds = gamestate.rounds;
                  let dynamiteThrow =0;
                  for(let i = 0; i<rounds.length; i++){
                                            if(rounds[i].pl1=="D"){
                          dynamiteThrow++;
                      }
                  }
            if(dynamiteThrow<100){
                return "D";
            }else{
        return 'W';
    }
}
}
module.exports = new Bot();
