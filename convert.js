document.getElementById('convert').onclick= function(){
    change()
}
function change(){
    const c = 23000
let val = document.getElementById('val').value
let cur1 = document.getElementById('cur1').value
let cur2 = document.getElementById('cur2').value
let result

if ( cur1 ==="VND" && cur2==="USD") {
 result = val / c
    document.getElementById("result").innerHTML = result + "$";
}
else if ( cur1==="USD" && cur2==="VND"){
    result = val * c
    document.getElementById("result").innerHTML = result + "Đ";
}

else if (cur1==="VND" && cur2==="VND"){
    alert("choose the right currency")
}
else if(cur1 ==="USD" && cur2==="USD"){
    alert("choose the right currency")
}

}


