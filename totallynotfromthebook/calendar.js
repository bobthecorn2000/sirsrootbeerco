"use strict";

const getMonthText = currentMonth => {
	if (currentMonth === 0) { return "January"; }
	else if (currentMonth === 1) { return "February"; }
	else if (currentMonth === 2) { return "March"; }
	else if (currentMonth === 3) { return "April"; }
	else if (currentMonth === 4) { return "May"; }
	else if (currentMonth === 5) { return "June"; }
	else if (currentMonth === 6) { return "July"; }
	else if (currentMonth === 7) { return "August"; }
	else if (currentMonth === 8) { return "September"; }
	else if (currentMonth === 9) { return "October"; }
	else if (currentMonth === 10) { return "November"; }
	else if (currentMonth === 11) { return "December"; }
};

const getLastDayofMonth = currentMonth => {
 let currentdate = new Date();
 currentdate.setMonth(currentMonth + 1);
    currentdate.setDate(0);
    return currentdate.getDate();
};

$(document).ready(function(){
const today = new Date();
    const thisMonth = today.getMonth();
    
    $("#month_year").text( `${getMonthText(thisMonth)} ${today.getFullYear()}` );
	
    const lastDayofMonth = getLastDayofMonth(thisMonth);
    
    let rows = $("#calendar").html();
    
     for (var i = 0; i < lastDayofMonth; i++) {
        today.setDate(i + 1);
        const date = today.getDate();
         const day = today.getDay();
       if (date === 1 || day === 0) { 
            rows += "<tr>"; 
        }
         let newline = 0;
        if (date === 1 ) { 
            while (newline < day) {
                rows += "<td></td>"; 
                newline++;
            }
            
     }
         rows += `<td>${date} + closed</td>`;
         if (date === lastDayofMonth) { 
            newline = day;
            while (newline < 6) {
                rows += "<td></td>"; 
                newline++;
            }
        }
         if (date === lastDayofMonth || day === 6) { 
            rows += "</tr>"; 
        }
         
     }
    $("#calendar").html(rows);
});