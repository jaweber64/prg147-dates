/**
 * Created by jaWeber on 9/10/16.
 */

var $ = function (id) {
    return document.getElementById(id);
};

var today = new Date();
var month = today.getMonth() + 1;  //0 is january
var year = today.getFullYear();
var marriedmonths = 0;
var marriedyears = 0;

$("todayis").innerHTML = today.toDateString();


function dayMsg() {
    var dateStatement = "";
    var todayIs = today.getDay();

    switch (todayIs)
    {
        case 0:
        case 6:
            dateStatement = "The weekend is here!  It's time for a beer!";
            break;
        case 1:
            dateStatement = "Marvelous, Mellow Monday!";
            break;
        case 2:
            dateStatement = "Terrific (Tired of homework) Tuesday!";
            break;
        case 3:
            dateStatement = "Wacky, Wonderful Wednesday!!";
            break;
        case 4:
            dateStatement = "Thumbs up, throroughly thrilling, Thursday!";
            break;
        case 5:
            dateStatement = "Fun, Fabulous, Fantastic Friday!";
            break;
        default:
            dateStatement = "Error, we shouldn't be here!";
    }
    document.getElementById("thisday").innerHTML = dateStatement;
} // end of function dayMsg()


function daysToEmptyNest() {
    var dday = new Date("08/20/2017");
    $("lukeleaves").innerHTML = dday.toDateString();

    if (today < dday) {
        var timeDiff = Math.abs(dday.getTime() - today.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        $("daysleft").innerHTML = diffDays;
    }
    else {
        $("daysleft").innerHTML = "Congrats! Your youngest is already at college! You ARE empty nesters!"
    }
} // end of function daysToEmptyNest()


function calculate(){
    //var today = new Date(("today").value);
    var anniversary = $("datemarried").value;

    var amonth = (parseInt(anniversary.substring(0,2)));
    var ayear = (parseInt(anniversary.substring(6,10)));

    if (amonth > month) {
        marriedyears = year - ayear -1;
        marriedmonths = 12 - amonth + month;
    }
    else {
        marriedyears = year - ayear;
        marriedmonths = month - amonth;
    }

    $("married").value = "You have been married " + marriedyears + " years and " + marriedmonths + " months!";
} // end of function calculate()


window.onload = function()
{
    dayMsg();
    daysToEmptyNest();
    $("datemarried").value="mm/dd/yyyy";
    $("submit").onclick = calculate;
    /*
    setTheDate();
*/
}