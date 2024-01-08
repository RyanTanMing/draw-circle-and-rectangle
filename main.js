x=0
y=0
draw_circle=""
draw_rect=""
sr=window.webkitSpeechRecognition
r=new sr()
function start() {
    document.getElementById("status").innerHTML="System is listening,please speak"
    r.start()
}
r.onresult=function (event) {
    console.log(event)
    content=event.results[0][0].transcript
    document.getElementById("status").innerHTML="The speech has been recognised as: "+content
    //if (content.toLowerCase().trim()=="circle.")
    if (content.toLowerCase().includes("circle"))
    {
        console.log("inside")
        x=Math.floor(Math.random()*700)
        y-Math.floor(Math.random()*500)
        document.getElementById("status").innerHTML="Started drawing circle"
        draw_circle="set"
    }
    if (content.toLowerCase().includes("rectangle")) {
        x=Math.floor(Math.random()*700)
        y-Math.floor(Math.random()*500)
        document.getElementById("status").innerHTML="Started drawing rectangle"
        draw_rect="set"
    }
}
function setup() {
    canvas=createCanvas(900,600)
}
function draw() {
    if (draw_circle=="set") {
        radius=Math.floor(Math.random()*200)
        console.log("circle")
        circle(x,y,radius)
        document.getElementById("status").innerHTML="Circle has been drawn"
        draw_circle=""
    }
    if (draw_rect=="set") {
        console.log("rect")
        h=Math.floor(Math.random()*200)
        w=Math.floor(Math.random()*200)
        rect(x,y,w,h)
        document.getElementById("status").innerHTML="Rectangle has been drawn"
        draw_rect=""
    }
}