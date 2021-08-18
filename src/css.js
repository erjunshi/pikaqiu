const string=`.skin *{margin: 0;padding: 0;box-sizing: border-box;}
    .skin *::after,.skin *::before{box-sizing: border-box;}

.skin{
    background-color: #fee433;
    height: 100vh;
    position: relative;
}
.nose{
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    top: 150px;
    margin-left: -10px;
}
@keyframes wave {
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    animation: wave 300ms infinite linear;
}
.eye{
    border: 2px solid black;
    width: 64px;
    height: 64px;
    background: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    top: 100px;
}
.eye.left{
    right: 50%;
    transform: translateX(-100px);
}
.eye.right{
    left: 50%;
    transform: translateX(100px);
}
.eye::before{
    content: '';
    display: block;
    border: 3px solid #000;
    background: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position:relative;
    left: 6px;
    top: 1px;
}

.face{
    border: 2px solid black;
    width: 70px;
    height: 70px;
    background: #ff0000;
    border-radius: 50%;
    position: absolute;
    top: 260px;
}
.face.left {
    right: 50%;
    margin-right: 150px;
}
.face.right{
    left: 50%;
    margin-left: 150px;
}
.mouth.up{
    width: 80px;
    height: 25px;
    position:relative;
    top: -5px;
    left: 50%;
    background: #fde348;
    border: 1px solid black;
    z-index: 1;
}
.mouth.up.lip.left{
    /*right:50%;*/
    border: 2px solid black;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
    position:absolute;
    margin-left: -80px;

}
.mouth.up.lip.right{
    border: 2px solid black;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
    position:absolute;
    margin-left:3px;
}
.mouth{
    width: 200px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 200px;
    margin-left: -100px;
    /*border: 1px solid red;*/
    /*background:  #9b000a;*/
}
.mouth .down{
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
    /*border: 1px solid black;*/
    /*background:  #9b000a;*/
}
.mouth .down .yuan1{
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    width: 200px;
    height: 300px;
    background: #ff485f;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}
`
export default string