let time = 3600;

setInterval(()=>{
    let h = Math.floor(time/3600);
    let m = Math.floor((time%3600)/60);
    let s = time%60;

    document.getElementById("h").innerText = String(h).padStart(2,'0');
    document.getElementById("m").innerText = String(m).padStart(2,'0');
    document.getElementById("s").innerText = String(s).padStart(2,'0');

    if(time>0) time--;
},1000);