// Arrays for each topic, once card is flipped array value is 1. If array value is 1 on reload the card will be flipped.

const Dialogue_flipcheck=[0,0,0,0,0,0];
const Fiction_flipcheck=[0,0,0,0,0,0];
const logo_flipcheck=[0,0,0,0,0,0];
const math_flipcheck=[0,0,0,0,0,0];
const myth_flipcheck=[0,0,0,0,0,0];
const sports_flipcheck=[0,0,0,0,0,0];
const tb_flipcheck=[0,0,0,0,0,0,0];
const rf_flipcheck=[0,0,0,0,0,0,0];

// On loading page it will 

$("document").ready(function(){

    // Check if the value stored in memory is 1, if 1 it flips
    for(var i=0;i<Dialogue_flipcheck.length;i++)
    {
        if(localStorage.getItem("Dialogue-check"+i)==1)
            {
                $(".Dialogue-flip-card-"+(i+1)).addClass('do-flip');  
                Dialogue_flipcheck[i]=1;
            }
        if(localStorage.getItem("Fiction-check"+i)==1)
            {
                $(".Fiction-flip-card-"+(i+1)).addClass('do-flip');  
                Fiction_flipcheck[i]=1;
            }
        if(localStorage.getItem("logo-check"+i)==1)
            {
                $(".logo-flip-card-"+(i+1)).addClass('do-flip');  
                logo_flipcheck[i]=1;
            }
        if(localStorage.getItem("math-check"+i)==1)
            {
                $(".math-flip-card-"+(i+1)).addClass('do-flip');  
                math_flipcheck[i]=1;
            }
        if(localStorage.getItem("myth-check"+i)==1)
            {
                $(".myth-flip-card-"+(i+1)).addClass('do-flip'); 
                myth_flipcheck[i]=1; 
            }
        if(localStorage.getItem("sports-check"+i)==1)
            {
                $(".sports-flip-card-"+(i+1)).addClass('do-flip'); 
                sports_flipcheck[i]=1; 
            }
    }

    // tie breaker array is length 7 hence different loop
    for(var i=0;i<tb_flipcheck.length;i++)
    {
        if(localStorage.getItem("tb-check"+i)==1)
        {
            $(".tb-flip-card-"+(i+1)).addClass('do-flip');  
            tb_flipcheck[i]=1;
        }
        if(localStorage.getItem("rf-check"+i)==1)
        {
            $(".rf-flip-card-"+(i+1)).addClass('do-flip');  
            rf_flipcheck[i]=1;
        }
    }
})


/////////////////////////////////////////////////////


//For wildcard only, on pressing proceed, display text in brackets
// Starts a timer for 50 seconds to indicate end of timer
$(".dialogue-button-proceed").click(function(){
    $(".dialogue-popup-Text").text( "Identify the character and movie name based on the dialogue.");
    setTimeout(timerdialoguepopup,41000);
})

//Checks if a card is flipped or not. If value of array is 0 means not flipped.
// Flips card, changes value to 1, as this is wild card opens popup after 10 seconds ie 10000 milliseconds.
$(".Dialogue-flip-card-1").click(function(){
    if(Dialogue_flipcheck[0]==0)
    {
        $(".Dialogue-flip-card-1").addClass('do-flip');
        Dialogue_flipcheck[0]=1;
        setTimeout(timerdialoguepopup,28000);
    }

    // If already flipped it will change value to 0 and reset to default
    else{
        $(".Dialogue-flip-card-1").removeClass('do-flip');
        Dialogue_flipcheck[0]=0;
    }

    //Store the value finally in memory
    localStorage.setItem("Dialogue-check0",Dialogue_flipcheck[0]);
}) 

// For non wildcard timer depends on hp, 1 hp questions are 20s, 2 hp are 35s and 3 hp are 50s, wildcard by default is 50s
$(".Dialogue-flip-card-2").click(function(){
    if(Dialogue_flipcheck[1]==0)
    {
        $(".Dialogue-flip-card-2").addClass('do-flip');
        Dialogue_flipcheck[1]=1;
        setTimeout(timerdialoguepopup,25000);
    }
    else{
        $(".Dialogue-flip-card-2").removeClass('do-flip');
        Dialogue_flipcheck[1]=0;
    }
    localStorage.setItem("Dialogue-check1",Dialogue_flipcheck[1]);
}) 

$(".Dialogue-flip-card-3").click(function(){
    if(Dialogue_flipcheck[2]==0)
    {
        $(".Dialogue-flip-card-3").addClass('do-flip');
        Dialogue_flipcheck[2]=1;
        setTimeout(timerdialoguepopup,43000);
    }
    else{
        $(".Dialogue-flip-card-3").removeClass('do-flip');
        Dialogue_flipcheck[2]=0;
    }
    localStorage.setItem("Dialogue-check2",Dialogue_flipcheck[2]);
}) 

$(".Dialogue-flip-card-4").click(function(){
    if(Dialogue_flipcheck[3]==0)
    {
        $(".Dialogue-flip-card-4").addClass('do-flip');
        Dialogue_flipcheck[3]=1;
        setTimeout(function(){
            $(".dialogue-popup").addClass("open-popup");
        },5000);
    }
    else{
        $(".Dialogue-flip-card-4").removeClass('do-flip');
        Dialogue_flipcheck[3]=0;
    }
    localStorage.setItem("Dialogue-check3",Dialogue_flipcheck[3]);
}) 

$(".Dialogue-flip-card-5").click(function(){
    if(Dialogue_flipcheck[4]==0)
    {
        $(".Dialogue-flip-card-5").addClass('do-flip');
        Dialogue_flipcheck[4]=1;
        setTimeout(timerdialoguepopup,57000);
    }
    else{
        $(".Dialogue-flip-card-5").removeClass('do-flip');
        Dialogue_flipcheck[4]=0;
    }
    localStorage.setItem("Dialogue-check4",Dialogue_flipcheck[4]);
}) 

$(".Dialogue-flip-card-6").click(function(){
    if(Dialogue_flipcheck[5]==0)
    {
        $(".Dialogue-flip-card-6").addClass('do-flip');
        Dialogue_flipcheck[5]=1;
        setTimeout(timerdialoguepopup,68000);
    }
    else{
        $(".Dialogue-flip-card-6").removeClass('do-flip');
        Dialogue_flipcheck[5]=0;
    }
    localStorage.setItem("Dialogue-check5",Dialogue_flipcheck[5]);
}) 


///////////////////////////////////////////////////////////////////////////////////////////////////////

$(".Fiction-button-proceed").click(function(){
    $(".Fiction-popup-Text").text("What is the name of the baby in the first Ice Age movie?");
    setTimeout(timerFictionpopup,50000);
})


$(".Fiction-flip-card-1").click(function(){
    if(Fiction_flipcheck[0]==0)
    {
        $(".Fiction-flip-card-1").addClass('do-flip');
        Fiction_flipcheck[0]=1;
        setTimeout(timerFictionpopup,20000);
    }
    else{
        $(".Fiction-flip-card-1").removeClass('do-flip');
        Fiction_flipcheck[0]=0;
    }
    localStorage.setItem("Fiction-check0",Fiction_flipcheck[0]);
}) 

$(".Fiction-flip-card-2").click(function(){
    if(Fiction_flipcheck[1]==0)
    {
        $(".Fiction-flip-card-2").addClass('do-flip');
        Fiction_flipcheck[1]=1;
        setTimeout(timerFictionpopup,20000);
    }
    else{
        $(".Fiction-flip-card-2").removeClass('do-flip');
        Fiction_flipcheck[1]=0;
    }
    localStorage.setItem("Fiction-check1",Fiction_flipcheck[1]);
}) 

$(".Fiction-flip-card-3").click(function(){
    if(Fiction_flipcheck[2]==0)
    {
        $(".Fiction-flip-card-3").addClass('do-flip');
        Fiction_flipcheck[2]=1;
        setTimeout(timerFictionpopup,35000);
    }
    else{
        $(".Fiction-flip-card-3").removeClass('do-flip');
        Fiction_flipcheck[2]=0;
    }
    localStorage.setItem("Fiction-check2",Fiction_flipcheck[2]);
}) 

$(".Fiction-flip-card-4").click(function(){
    if(Fiction_flipcheck[3]==0)
    {
        $(".Fiction-flip-card-4").addClass('do-flip');
        Fiction_flipcheck[3]=1;
        setTimeout(timerFictionpopup,35000);
    }
    else{
        $(".Fiction-flip-card-4").removeClass('do-flip');
        Fiction_flipcheck[3]=0;
    }
    localStorage.setItem("Fiction-check3",Fiction_flipcheck[3]);
}) 

$(".Fiction-flip-card-5").click(function(){
    if(Fiction_flipcheck[4]==0)
    {
        $(".Fiction-flip-card-5").addClass('do-flip');
        Fiction_flipcheck[4]=1;
        setTimeout(function(){
            $(".Fiction-popup").addClass("open-popup");
        },5000);
    }
    else{
        $(".Fiction-flip-card-5").removeClass('do-flip');
        Fiction_flipcheck[4]=0;
    }
    localStorage.setItem("Fiction-check4",Fiction_flipcheck[4]);
}) 

$(".Fiction-flip-card-6").click(function(){
    if(Fiction_flipcheck[5]==0)
    {
        $(".Fiction-flip-card-6").addClass('do-flip');
        Fiction_flipcheck[5]=1;
        setTimeout(timerFictionpopup,50000);
    }
    else{
        $(".Fiction-flip-card-6").removeClass('do-flip');
        Fiction_flipcheck[5]=0;
    }
    localStorage.setItem("Fiction-check5",Fiction_flipcheck[5]);
}) 


//////////////////////////////////////////////////////////////////////////////

$(".logo-button-proceed").click(function(){
    $(".logo-popup-text").html('<img src="/MPL/docs/Images/dg.jpg" class="logo-answer"></img>');
    setTimeout(timerlogopopup,50000);
})

$(".logo-flip-card-1").click(function(){
    if(logo_flipcheck[0]==0)
    {
        $(".logo-flip-card-1").addClass('do-flip');
        logo_flipcheck[0]=1;
        setTimeout(timerlogopopup,20000);
    }
    else{
        $(".logo-flip-card-1").removeClass('do-flip');
        logo_flipcheck[0]=0;
    }
    localStorage.setItem("logo-check0",logo_flipcheck[0]);
}) 

$(".logo-flip-card-2").click(function(){
    if(logo_flipcheck[1]==0)
    {
        $(".logo-flip-card-2").addClass('do-flip');
        logo_flipcheck[1]=1;
        setTimeout(timerlogopopup,20000);
    }
    else{
        $(".logo-flip-card-2").removeClass('do-flip');
        logo_flipcheck[1]=0;
    }
    localStorage.setItem("logo-check1",logo_flipcheck[1]);
}) 

$(".logo-flip-card-3").click(function(){
    if(logo_flipcheck[2]==0)
    {
        $(".logo-flip-card-3").addClass('do-flip');
        logo_flipcheck[2]=1;
        setTimeout(timerlogopopup,35000);
    }
    else{
        $(".logo-flip-card-3").removeClass('do-flip');
        logo_flipcheck[2]=0;
    }
    localStorage.setItem("logo-check2",logo_flipcheck[2]);
}) 

$(".logo-flip-card-4").click(function(){
    if(logo_flipcheck[3]==0)
    {
        $(".logo-flip-card-4").addClass('do-flip');
        logo_flipcheck[3]=1;
        setTimeout(timerlogopopup,35000);
    }
    else{
        $(".logo-flip-card-4").removeClass('do-flip');
        logo_flipcheck[3]=0;
    }
    localStorage.setItem("logo-check3",logo_flipcheck[3]);
}) 

$(".logo-flip-card-5").click(function(){
    if(logo_flipcheck[4]==0)
    {
        $(".logo-flip-card-5").addClass('do-flip');
        logo_flipcheck[4]=1;
        setTimeout(timerlogopopup,50000);
    }
    else{
        $(".logo-flip-card-5").removeClass('do-flip');
        logo_flipcheck[4]=0;
    }
    localStorage.setItem("logo-check4",logo_flipcheck[4]);
}) 

$(".logo-flip-card-6").click(function(){
    if(logo_flipcheck[5]==0)
    {
        $(".logo-flip-card-6").addClass('do-flip');
        logo_flipcheck[5]=1;
        setTimeout(function(){
            $(".logo-popup").addClass("open-popup");
        },5000);
    }
    else{
        $(".logo-flip-card-6").removeClass('do-flip');
        logo_flipcheck[5]=0;
    }
    localStorage.setItem("logo-check5",logo_flipcheck[5]);
}) 


////////////////////////////////////////////////////////////////////////////////////////

$(".math-button-proceed").click(function(){
    $(".math-popup-text").text('Which Indian mathematician is known for his contributions to number theory and is often referred to as the "Man who knew Infinity"?');
    setTimeout(timermathpopup,20000);
})

$(".math-flip-card-1").click(function(){
    if(math_flipcheck[0]==0)
    {
        $(".math-flip-card-1").addClass('do-flip');
        math_flipcheck[0]=1;
        setTimeout(function(){
            $(".math-popup").addClass("open-popup");
        },5000);
    }
    else{
        $(".math-flip-card-1").removeClass('do-flip');
        math_flipcheck[0]=0;
    }
    localStorage.setItem("math-check0",math_flipcheck[0]);
}) 

$(".math-flip-card-2").click(function(){
    if(math_flipcheck[1]==0)
    {
        $(".math-flip-card-2").addClass('do-flip');
        math_flipcheck[1]=1;
        setTimeout(timermathpopup,20000);
    }
    else{
        $(".math-flip-card-2").removeClass('do-flip');
        math_flipcheck[1]=0;
    }
    localStorage.setItem("math-check1",math_flipcheck[1]);
}) 

$(".math-flip-card-3").click(function(){
    if(math_flipcheck[2]==0)
    {
        $(".math-flip-card-3").addClass('do-flip');
        math_flipcheck[2]=1;
        setTimeout(timermathpopup,35000);
    }
    else{
        $(".math-flip-card-3").removeClass('do-flip');
        math_flipcheck[2]=0;
    }
    localStorage.setItem("math-check2",math_flipcheck[2]);
}) 

$(".math-flip-card-4").click(function(){
    if(math_flipcheck[3]==0)
    {
        $(".math-flip-card-4").addClass('do-flip');
        math_flipcheck[3]=1;
        setTimeout(timermathpopup,35000);
    }
    else{
        $(".math-flip-card-4").removeClass('do-flip');
        math_flipcheck[3]=0;
    }
    localStorage.setItem("math-check3",math_flipcheck[3]);
}) 

$(".math-flip-card-5").click(function(){
    if(math_flipcheck[4]==0)
    {
        $(".math-flip-card-5").addClass('do-flip');
        math_flipcheck[4]=1;
        setTimeout(timermathpopup,50000);
    }
    else{
        $(".math-flip-card-5").removeClass('do-flip');
        math_flipcheck[4]=0;
    }
    localStorage.setItem("math-check4",math_flipcheck[4]);
}) 

$(".math-flip-card-6").click(function(){
    if(math_flipcheck[5]==0)
    {
        $(".math-flip-card-6").addClass('do-flip');
        math_flipcheck[5]=1;
        setTimeout(timermathpopup,50000);
    }
    else{
        $(".math-flip-card-6").removeClass('do-flip');
        math_flipcheck[5]=0;
    }
    localStorage.setItem("math-check5",math_flipcheck[5]);
}) 


///////////////////////////////////////////////////////////////////////////////////////////////////////

$(".myth-button-proceed").click(function(){
    $(".myth-popup-text").text("Who was the eldest son of Ravana?");
    setTimeout(timermythpopup,35000);
})

$(".myth-flip-card-1").click(function(){
    if(myth_flipcheck[0]==0)
    {
        $(".myth-flip-card-1").addClass('do-flip');
        myth_flipcheck[0]=1;
        setTimeout(timermythpopup,20000);
    }
    else{
        $(".myth-flip-card-1").removeClass('do-flip');
        myth_flipcheck[0]=0;
    }
    localStorage.setItem("myth-check0",myth_flipcheck[0]);
}) 

$(".myth-flip-card-2").click(function(){
    if(myth_flipcheck[1]==0)
    {
        $(".myth-flip-card-2").addClass('do-flip');
        myth_flipcheck[1]=1;
        setTimeout(timermythpopup,20000);
    }
    else{
        $(".myth-flip-card-2").removeClass('do-flip');
        myth_flipcheck[1]=0;
    }
    localStorage.setItem("myth-check1",myth_flipcheck[1]);
}) 

$(".myth-flip-card-3").click(function(){
    if(myth_flipcheck[2]==0)
    {
        $(".myth-flip-card-3").addClass('do-flip');
        myth_flipcheck[2]=1;
        setTimeout(function(){
            $(".myth-popup").addClass("open-popup");
        },5000);
    }
    else{
        $(".myth-flip-card-3").removeClass('do-flip');
        myth_flipcheck[2]=0;
    }
    localStorage.setItem("myth-check2",myth_flipcheck[2]);
}) 

$(".myth-flip-card-4").click(function(){
    if(myth_flipcheck[3]==0)
    {
        $(".myth-flip-card-4").addClass('do-flip');
        myth_flipcheck[3]=1;
        setTimeout(timermythpopup,35000);
    }
    else{
        $(".myth-flip-card-4").removeClass('do-flip');
        myth_flipcheck[3]=0;
    }
    localStorage.setItem("myth-check3",myth_flipcheck[3]);
}) 

$(".myth-flip-card-5").click(function(){
    if(myth_flipcheck[4]==0)
    {
        $(".myth-flip-card-5").addClass('do-flip');
        myth_flipcheck[4]=1;
        setTimeout(timermythpopup,50000);
    }
    else{
        $(".myth-flip-card-5").removeClass('do-flip');
        myth_flipcheck[4]=0;
    }
    localStorage.setItem("myth-check4",myth_flipcheck[4]);
}) 

$(".myth-flip-card-6").click(function(){
    if(myth_flipcheck[5]==0)
    {
        $(".myth-flip-card-6").addClass('do-flip');
        myth_flipcheck[5]=1;
        setTimeout(timermythpopup,50000);
    }
    else{
        $(".myth-flip-card-6").removeClass('do-flip');
        myth_flipcheck[5]=0;
    }
    localStorage.setItem("myth-check5",myth_flipcheck[5]);
}) 

///////////////////////////////////////////////////////////////////////

$(".sports-button-proceed").click(function(){
    $(".sports-popup-text").text(" Which NBA player scored 81 points in a single game?");
    setTimeout(timersportspopup,20000);
})


$(".sports-flip-card-1").click(function(){
    if(sports_flipcheck[0]==0)
    {
        $(".sports-flip-card-1").addClass('do-flip');
        sports_flipcheck[0]=1;
        setTimeout(timersportspopup,20000);
    }
    else{
        $(".sports-flip-card-1").removeClass('do-flip');
        sports_flipcheck[0]=0;
    }
    localStorage.setItem("sports-check0",sports_flipcheck[0]);
}) 

$(".sports-flip-card-2").click(function(){
    if(sports_flipcheck[1]==0)
    {
        $(".sports-flip-card-2").addClass('do-flip');
        sports_flipcheck[1]=1;
        setTimeout(function(){
            $(".sports-popup").addClass("open-popup");
        },5000);
    }
    else{
        $(".sports-flip-card-2").removeClass('do-flip');
        sports_flipcheck[1]=0;
    }
    localStorage.setItem("sports-check1",sports_flipcheck[1]);
}) 

$(".sports-flip-card-3").click(function(){
    if(sports_flipcheck[2]==0)
    {
        $(".sports-flip-card-3").addClass('do-flip');
        sports_flipcheck[2]=1;
        setTimeout(timersportspopup,35000);
    }
    else{
        $(".sports-flip-card-3").removeClass('do-flip');
        sports_flipcheck[2]=0;
    }
    localStorage.setItem("sports-check2",sports_flipcheck[2]);
}) 

$(".sports-flip-card-4").click(function(){
    if(sports_flipcheck[3]==0)
    {
        $(".sports-flip-card-4").addClass('do-flip');
        sports_flipcheck[3]=1;
        setTimeout(timersportspopup,35000);
    }
    else{
        $(".sports-flip-card-4").removeClass('do-flip');
        sports_flipcheck[3]=0;
    }
    localStorage.setItem("sports-check3",sports_flipcheck[3]);
}) 

$(".sports-flip-card-5").click(function(){
    if(sports_flipcheck[4]==0)
    {
        $(".sports-flip-card-5").addClass('do-flip');
        sports_flipcheck[4]=1;
        setTimeout(timersportspopup,50000);
    }
    else{
        $(".sports-flip-card-5").removeClass('do-flip');
        sports_flipcheck[4]=0;
    }
    localStorage.setItem("sports-check4",sports_flipcheck[4]);
}) 

$(".sports-flip-card-6").click(function(){
    if(sports_flipcheck[5]==0)
    {
        $(".sports-flip-card-6").addClass('do-flip');
        sports_flipcheck[5]=1;
        setTimeout(timersportspopup,50000);
    }
    else{
        $(".sports-flip-card-6").removeClass('do-flip');
        sports_flipcheck[5]=0;
    }
    localStorage.setItem("sports-check5",sports_flipcheck[5]);
}) 



//////////////////////////////////////////////////////////////////////////////

// Tiebreakers are 50 seconds
$(".tb-flip-card-1").click(function(){
    if(tb_flipcheck[0]==0)
    {
        $(".tb-flip-card-1").addClass('do-flip');
        tb_flipcheck[0]=1;
        setTimeout(timertbpopup,50000);
    }
    else{
        $(".tb-flip-card-1").removeClass('do-flip');
        tb_flipcheck[0]=0;
    }
    localStorage.setItem("tb-check0",tb_flipcheck[0]);
}) 

$(".tb-flip-card-2").click(function(){
    if(tb_flipcheck[1]==0)
    {
        $(".tb-flip-card-2").addClass('do-flip');
        tb_flipcheck[1]=1;
        setTimeout(timertbpopup,50000);
    }
    else{
        $(".tb-flip-card-2").removeClass('do-flip');
        tb_flipcheck[1]=0;
    }
    localStorage.setItem("tb-check1",tb_flipcheck[1]);
}) 

$(".tb-flip-card-3").click(function(){
    if(tb_flipcheck[2]==0)
    {
        $(".tb-flip-card-3").addClass('do-flip');
        tb_flipcheck[2]=1;
        setTimeout(timertbpopup,50000);
    }
    else{
        $(".tb-flip-card-3").removeClass('do-flip');
        tb_flipcheck[2]=0;
    }
    localStorage.setItem("tb-check2",tb_flipcheck[2]);
}) 

$(".tb-flip-card-4").click(function(){
    if(tb_flipcheck[3]==0)
    {
        $(".tb-flip-card-4").addClass('do-flip');
        tb_flipcheck[3]=1;
        setTimeout(timertbpopup,50000);
    }
    else{
        $(".tb-flip-card-4").removeClass('do-flip');
        tb_flipcheck[3]=0;
    }
    localStorage.setItem("tb-check3",tb_flipcheck[3]);
}) 

$(".tb-flip-card-5").click(function(){
    if(tb_flipcheck[4]==0)
    {
        $(".tb-flip-card-5").addClass('do-flip');
        tb_flipcheck[4]=1;
        setTimeout(timertbpopup,50000);
    }
    else{
        $(".tb-flip-card-5").removeClass('do-flip');
        tb_flipcheck[4]=0;
    }
    localStorage.setItem("tb-check4",tb_flipcheck[4]);
}) 

$(".tb-flip-card-6").click(function(){
    if(tb_flipcheck[5]==0)
    {
        $(".tb-flip-card-6").addClass('do-flip');
        tb_flipcheck[5]=1;
        setTimeout(timertbpopup,50000);
    }
    else{
        $(".tb-flip-card-6").removeClass('do-flip');
        tb_flipcheck[5]=0;
    }
    localStorage.setItem("tb-check5",tb_flipcheck[5]);
}) 

$(".tb-flip-card-7").click(function(){
    if(tb_flipcheck[6]==0)
    {
        $(".tb-flip-card-7").addClass('do-flip');
        tb_flipcheck[6]=1;
        setTimeout(timertbpopup,50000);
    }
    else{
        $(".tb-flip-card-7").removeClass('do-flip');
        tb_flipcheck[6]=0;
    }
    localStorage.setItem("tb-check6",tb_flipcheck[6]);
}) 

///////////////////////////////////////////////////////////////////////////////////////

// Rapid fires by default are 10 seconds
$(".rf-flip-card-1").click(function(){
    if(rf_flipcheck[0]==0)
    {
        $(".rf-flip-card-1").addClass('do-flip');
        rf_flipcheck[0]=1;
        setTimeout(timerrfpopup,15000);
    }
    else{
        $(".rf-flip-card-1").removeClass('do-flip');
        rf_flipcheck[0]=0;
    }
    localStorage.setItem("rf-check0",rf_flipcheck[0]);
}) 

$(".rf-flip-card-2").click(function(){
    if(rf_flipcheck[1]==0)
    {
        $(".rf-flip-card-2").addClass('do-flip');
        rf_flipcheck[1]=1;
        setTimeout(timerrfpopup,15000);
    }
    else{
        $(".rf-flip-card-2").removeClass('do-flip');
        rf_flipcheck[1]=0;
    }
    localStorage.setItem("rf-check1",rf_flipcheck[1]);
}) 

$(".rf-flip-card-3").click(function(){
    if(rf_flipcheck[2]==0)
    {
        $(".rf-flip-card-3").addClass('do-flip');
        rf_flipcheck[2]=1;
        setTimeout(timerrfpopup,15000);
    }
    else{
        $(".rf-flip-card-3").removeClass('do-flip');
        rf_flipcheck[2]=0;
    }
    localStorage.setItem("rf-check2",rf_flipcheck[2]);
}) 

$(".rf-flip-card-4").click(function(){
    if(rf_flipcheck[3]==0)
    {
        $(".rf-flip-card-4").addClass('do-flip');
        rf_flipcheck[3]=1;
        setTimeout(timerrfpopup,15000);
    }
    else{
        $(".rf-flip-card-4").removeClass('do-flip');
        rf_flipcheck[3]=0;
    }
    localStorage.setItem("rf-check3",rf_flipcheck[3]);
}) 

$(".rf-flip-card-5").click(function(){
    if(rf_flipcheck[4]==0)
    {
        $(".rf-flip-card-5").addClass('do-flip');
        rf_flipcheck[4]=1;
        setTimeout(timerrfpopup,15000);
    }
    else{
        $(".rf-flip-card-5").removeClass('do-flip');
        rf_flipcheck[4]=0;
    }
    localStorage.setItem("rf-check4",rf_flipcheck[4]);
}) 

$(".rf-flip-card-6").click(function(){
    if(rf_flipcheck[5]==0)
    {
        $(".rf-flip-card-6").addClass('do-flip');
        rf_flipcheck[5]=1;
        setTimeout(timerrfpopup,15000);
    }
    else{
        $(".rf-flip-card-6").removeClass('do-flip');
        rf_flipcheck[5]=0;
    }
    localStorage.setItem("rf-check5",rf_flipcheck[5]);
}) 

$(".rf-flip-card-7").click(function(){
    if(rf_flipcheck[6]==0)
    {
        $(".rf-flip-card-7").addClass('do-flip');
        rf_flipcheck[6]=1;
        setTimeout(timerrfpopup,15000);
    }
    else{
        $(".rf-flip-card-7").removeClass('do-flip');
        rf_flipcheck[6]=0;
    }
    localStorage.setItem("rf-check6",rf_flipcheck[6]);
}) 

///////////////////////////////////////////////////////////////////////////////////

// Timer function to be called to open the popup 

function timerFictionpopup(){
    $(".Fiction-Timer-Popup").addClass("open-popup");
    // Clicking button closes popup
    $(".Fiction-Timer-submit").click(function(){
        $(".Fiction-Timer-Popup").removeClass("open-popup");
    })
}

function timerdialoguepopup(){
    $(".Dialogue-Timer-Popup").addClass("open-popup");
    $(".Dialogue-timer-submit").click(function(){
        $(".Dialogue-Timer-Popup").removeClass("open-popup");
    })
}

function timerlogopopup(){
    $(".logo-timer-popup").addClass("open-popup");
    $(".logo-timer-submit").click(function(){
        $(".logo-timer-popup").removeClass("open-popup");
    })
}

function timermathpopup(){
    $(".math-timer-popup").addClass("open-popup");
    $(".math-timer-submit").click(function(){
        $(".math-timer-popup").removeClass("open-popup");
    })
}

function timersportspopup(){
    $(".sports-timer-popup").addClass("open-popup");
    $(".sports-timer-submit").click(function(){
        $(".sports-timer-popup").removeClass("open-popup");
    })
}

function timermythpopup(){
    $(".myth-timer-popup").addClass("open-popup");
    $(".myth-timer-submit").click(function(){
        $(".myth-timer-popup").removeClass("open-popup");
    })
}

function timertbpopup(){
    $(".tb-timer-popup").addClass("open-popup");
    $(".tb-timer-submit").click(function(){
        $(".tb-timer-popup").removeClass("open-popup");
    })
}

function timerrfpopup(){
    $(".rf-timer-popup").addClass("open-popup");
    $(".rf-timer-submit").click(function(){
        $(".rf-timer-popup").removeClass("open-popup");
    })
}