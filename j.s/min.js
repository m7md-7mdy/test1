
function  NewQuote() {
    var addData = [" “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ", " “You only live once, but if you do it right, once is enough.” ", " “Be yourself; everyone else is already taken.” ", " “So many books, so little time.” ", " “Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend” "];

    var lastdata = [" ― Albert Einstein ", " ― Mae West ", " ― Oscar Wilde ", " ― Frank Zappa ", " ― Albert Camus "];

    var container = Math.floor(Math.random() * lastdata.length);

    document.getElementById("demo-1").innerHTML = addData[container];

    document.getElementById("demo-2").innerHTML = lastdata[container];
}
