/*
Name: Kaleb Israel
Date: 03/13/15
Assignment: Week #2 :: { Homework } - DEVELOP Duel #2
 */

// self-executing function
(function(){
    console.log("Fight!");
    //players [name,dmg,hlth]
    var player1=["Kombat Man",20,100];
    var player2=["Kratos",20,100];
    //round counter
    var round=0;
    function fight(){
        //fight function
        alert(player1[0]+":"+player1[2]+" Fight! "+player2[0]+":"+player2[2]);
        for (var i = 0; i < 10; i++){
            //set minimum dmg (half)
            var minDmg1=player1[1]*.5;
            var minDmg2=player2[1]*.5;
            //calc random dmg
            var randomDmg1=Math.floor(Math.random()*(player1[1]-minDmg1)+minDmg1);
            var randomDmg2=Math.floor(Math.random()*(player2[1]-minDmg2)+minDmg2);
            //subtract dmg from health
            player1[2]-=randomDmg1;
            player2[2]-=randomDmg2;
            //log health
            console.log(player1[0]+":"+player1[2]+" "+player2[0]+":"+player2[2]);
            //check if someone won
            var result=winnerCheck();
            //log result
            console.log(result);
            //if no one won
            if (result==="Next Round!"){
                //next round
                round++;
                //alert user
                alert(player1[0]+":"+player1[2]+" Round "+round+" over "+player2[0]+":"+player2[2]);
            //else (winner)
            } else{
                //alert of winner
                alert(result);
                break;
            };
        };
    };
    function winnerCheck(){
        //check winner
        var result="Next Round!";
        //check health
        if (player1[2]<1 && player2[2]<1){
            result="You Both Die. :,(";
        } else if(player1[2]<1){
            result=player2[0]+" is the Winner!"
        } else if(player2[2]<1){
            result=player1[0]+" is the Winner!"
        };
        return result;
    }
    /*The program gets started below  */
    fight();
})();