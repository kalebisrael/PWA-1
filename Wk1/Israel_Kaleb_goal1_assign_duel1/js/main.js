/*
Name: Kaleb Israel
Date: 03/07/15
Assignment: Week #1 :: { Homework } - ANALYZE Duel #1
 */

// self-executing function
(function(){
    console.log("Fight!");
    //player names
    var playerOneName="Kombat Man";
    var playerTwoName="Kratos";
    //player dmg
    var player1Damage=20;
    var player2Damage=20;
    //player health
    var playerOneHealth=100;
    var playerTwoHealth=100;
    //round counter
    var round=0;
    function fight(){
        //fight function
        alert(playerOneName+":"+playerOneHealth+" Fight! "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++){
            //set minimum dmg (half)
            var minDmg1=player1Damage*.5;
            var minDmg2=player2Damage*.5;
            //calc random dmg
            var randomDmg1=Math.floor(Math.random()*(player1Damage-minDmg1)+minDmg1);
            var randomDmg2=Math.floor(Math.random()*(player2Damage-minDmg2)+minDmg2);
            //subtract dmg from health
            playerOneHealth-=randomDmg1;
            playerTwoHealth-=randomDmg2;
            //log health
            console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);
            //check if someone won
            var result=winnerCheck();
            //log result
            console.log(result);
            //if no one won
            if (result==="Next Round!"){
                //next round
                round++;
                //alert user
                alert(playerOneName+":"+playerOneHealth+" Round "+round+" over "+playerTwoName+":"+playerTwoHealth);
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
        if (playerOneHealth<1 && playerTwoHealth<1){
            result="You Both Die. :,(";
        } else if(playerOneHealth<1){
            result=playerTwoName+" is the Winner!"
        } else if(playerTwoHealth<1){
            result=playerOneName+" is the Winner!"
        };
        return result;
    }
    /*The program gets started below  */
    fight();
})();