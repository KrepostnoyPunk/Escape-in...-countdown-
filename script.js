const dayEl=document.getElementById('day')
const hourEl=document.getElementById('hour')
const minuteEl=document.getElementById('minute')
const secondEl=document.getElementById('second')

const escapeDateTime=new Date('April 30, 2024 00:00:00').getTime()
//console.log(escapeDate);

updateCountdown()

function updateCountdown(){
    const now=new Date().getTime()
    //console.log(now);
    const gap=escapeDateTime-now
    //console.log(gap);
    const second=1000
    const minute=second*60
    const hour=minute*60
    const day=hour*24

    const d=Math.floor(gap/day)
    //console.log(d);
    const h=Math.floor((gap%day) / hour)
    //console.log(h);
    const m=Math.floor((gap%hour) / minute)
    //console.log(m);
    const s=Math.floor((gap%minute) / second)
    //console.log(s);
    dayEl.innerText=d
    hourEl.innerText=h
    minuteEl.innerText=m
    secondEl.innerText=s
    setTimeout(updateCountdown, 1000)
}