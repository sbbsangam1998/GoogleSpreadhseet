function myFunction() {
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange('A34:A34').setValue("Button clicked")
  
}
function Reset() {
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange('A34:A34').setValue("")
}

function Calculate(){
  var row1 = 35;
   var col1= 1;
   var row2 = 35;
   var col2 = 2;


var value1 = SpreadsheetApp.getActiveSheet().getRange(row1, col1).getValue();
var value2 = SpreadsheetApp.getActiveSheet().getRange(row2, col2).getValue();
var value3=value1+value2
 SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange('A34:A34').setValue(value3)
}
