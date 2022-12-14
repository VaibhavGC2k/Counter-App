let add_btn = document.getElementById('add_num');
let rem_btn = document.getElementById('rem_num');
let val = document.getElementById('disp').value = 0;

add_btn.addEventListener('click',onclick1=()=>{
    val = val+1;
    document.getElementById('disp').innerHTML = val;
    if(val > 0){
        document.getElementById('disp').style.color = 'rgb(41, 98, 6)';
    }
    else if(val == 0){
        document.getElementById('disp').style.color = 'black';
    }
})

rem_btn.addEventListener('click',onclick2=()=>{
    val = val-1;
    document.getElementById('disp').innerHTML = val;
    if(val < 0){
        document.getElementById('disp').style.color = 'red';
    }
    else if(val == 0){
        document.getElementById('disp').style.color = 'black';
    }
})