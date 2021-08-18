// 模块化,其实就是导入
import string from './css.js'

const player={
    id:undefined,
    time:100,
    ui:{
        demo :document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    events:{
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    n:1,
    init:()=>{
        player.ui.demo.innerText=string.substr(0,player.n)
        player.ui.demo2.innerHTML=string.substr(0,player.n)
        player.play()
        player.bindEvents()
    },
    bindEvents:()=>{
        // const events= {
        //     '#btnPause': player.pause,
        //     '#btnPlay': player.play,
        //     '#btnSlow': player.slow,
        //     '#btnNormal': player.normal,
        //     '#btnFast': player.fast
        //     }
            for(let key in player.events){
                // const value = hashTable[key]
                // document.querySelector(key).onclick=value
                if(player.events.hasOwnProperty(key)) {
                    const value = player.events[key]
                    document.querySelector(key).onclick = player[value]
                }
            }
        },

    //     document.querySelector('#btnPause').onclick=player.pause
    //     document.querySelector('#btnPlay').onclick=player.play
    //     document.querySelector('#btnSlow').onclick= player.slow
    //     document.querySelector('#btnNormal').onclick= player.normal
    //     document.querySelector('#btnFast').onclick=player.fast
    // },

    run:()=>{
        player.n+=1
        if(player.n>string.length){
            window.clearInterval(player.id)
            return
        }

        console.log(player.n+':'+string.substr(0,player.n))
        player.ui.demo.innerText=string.substr(0,player.n)
        player.ui.demo2.innerHTML=string.substr(0,player.n)
        player.ui.demo.scrollTop=player.ui.demo.scrollHeight
    },
    play:()=>{
        // return setInterval(player.run,time)
        player.id=setInterval(player.run,player.time)
    },
    pause:()=>{
        window.clearInterval(player.id)
    },
    slow:()=>{
        player.pause()
        player.time=200
        player.play()
    },
    normal:()=>{
        player.pause()
        player.time=100
        player.play()
    },
    fast:()=>{
        player.pause()
        player.time=0
        player.play()
    }
}

player.init()

/***
const run=()=>{
    n+=1
    if(n>string.length){
    window.clearInterval(id)
    return
    }
    console.log(n+':'+string.substr(0,n))
    demo.innerText=string.substr(0,n)
    demo2.innerHTML=string.substr(0,n)
    demo.scrollTop=demo.scrollHeight
}

const play=()=>{
    return setInterval(run,time)
}
const pause=()=>{
    window.clearInterval(id)
}
const slow=()=>{
    pause()
    time=300
    id=play()
}
const normal=()=>{
    pause()
    time=100
    id=play()
}
const fast=()=>{
    pause()
    time=0
    id=play()
}
 ***/




