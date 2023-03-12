function Solve(e){document.getElementById("res").value+=e}
function Result(){var num1=document.getElementById("res").value,num2=eval(num1);document.getElementById("res").value=num2}
function Clear(){document.getElementById("res").value=""}function Back()
{var e=document.getElementById("res");e.value=e.value.slice(0,-1)}
//used minifier to reduce the file size from 481b to 318b
