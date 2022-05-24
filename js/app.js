

function audioPlayerBox(){
// variable name start
    const audio = document.querySelector("#Audio");
    const backward = document.querySelector("#backward i");
    const play = document.querySelector("#play .uil-play-circle");
    const pause = document.querySelector("#pause .uil-pause-circle");
    const forward = document.querySelector("#forward i");
    const volume = document.querySelector(".sound_Grp span input");
    const audioRange = document.querySelector(".timer input");
    const startAudioTime = document.querySelector("#startAudioTime");
    const endAudioTime = document.querySelector("#endAudioTime");
    const musiclist__Group = document.querySelector(".musiclist__Group");
    const music_dittlis_name = document.querySelector(".music_dittlis h3");
    const music_dittlis_authName = document.querySelector(".music_dittlis small");
    const playIcon = document.querySelector("#playIcon");
    const pauseIcon = document.querySelector("#pauseIcon");
    const loopIcon = document.querySelector("#loopIcon");
    const musicBox = document.querySelector(".musicBox");

    let playdiv = play.parentNode;
    let pausediv = pause.parentNode;
    // Allaudio Array 
    const allElement = [
        {
            id: "1",
            img:  `https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
            name:  `Song one -1`,
            audio: `./audio/1.mp3`,
            auth: `Mahadi hasan`,
            duration: `0:14`
        },
        {
            id: "2",
            img:  `https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
            name:  `song -2`,
            audio: `./audio/2.mp3`,
            auth: `Mahadi`,
            duration: `0:30`
        },
        {
            id: "3",
            img:  `https://images.pexels.com/photos/1001780/pexels-photo-1001780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
            name:  `song -3`,
            audio: `./audio/3.mp3`,
            auth: `Hasan`,
            duration: `0:25`
        },
        {
            id: "4",
            img:  `https://images.pexels.com/photos/3181458/pexels-photo-3181458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
            name:  `song -4`,
            audio: `./audio/4.mp3`,
            auth: `fuzle Rabbi`,
            duration: `0:26`
        },
        {
            id: "5",
            img:  `https://images.pexels.com/photos/4840229/pexels-photo-4840229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
            name:  `song -5`,
            audio: `./audio/5.mp3`,
            auth: `hassib`,
            duration: `0:30`
        },
        {
            id: "6",
            img:  `https://images.pexels.com/photos/3250362/pexels-photo-3250362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
            name:  `song -6`,
            audio: `./audio/6.mp3`,
            auth: `Shakil`,
            duration: `0:26`
        },
        {
            id: "7",
            img:  `https://images.pexels.com/photos/1122462/pexels-photo-1122462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
            name:  `song -7`,
            audio: `./audio/7.mp3`,
            auth: `Mahadi hasan`,
            duration: `0:29`
        },
        {
            id: "8",
            img:  `https://images.pexels.com/photos/3283121/pexels-photo-3283121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
            name:  `song -8`,
            audio: `./audio/8.mp3`,
            auth: `Mahadi hasan`,
            duration: `0:28`
        },
        {
            id: "9",
            img:  `https://images.pexels.com/photos/1761282/pexels-photo-1761282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
            name:  `song -9`,
            audio: `./audio/9.mp3`,
            auth: `Mahadi hasan`,
            duration: `0:30`
        },
        {
            id: "10",
            img:  `https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
            name:  `song -10`,
            audio: `./audio/10.mp3`,
            auth: `Mahadi hasan`,
            duration: `0:19`
        },
    ];
     // audio innerHTML 
     allElement.forEach((value, index)=>{
        let content = `
            <div class="musiclists" audioRef=${index} audio= ${value.audio}>
                <div class="musiclist_img">
                    <img loading="lazy" src=${value.img} alt=${value.img}>
                </div>
                <div class="musiclist_name">
                    <p>${value.name}</p>
                    <small>${value.auth}</small>
                </div>
                <div class="musiclist_audio_hidden">
                    <audio src="./audio/8.mp3"></audio>
                </div>
                <div class="musiclist_endTime">
                    <p>${value.duration}</p>
                </div>
            </div>
        `
        musiclist__Group.innerHTML += content;
    })
    // all audio html get data
    const AllAudioList = document.querySelectorAll(".musiclists");

    // music serial counter number 
    let audio__serial__Number = 0;
    
    // play pause controler 
    let is__playing = false;

    // loop music 
    let loop = true;

// variable name end 

// function start 

    // time Formet 
        function timeFormate(getTime){
            return Math.floor(getTime / 60) + ":" + ("0" + Math.floor(getTime % 60)).slice(-2) ;
        }

    // play pause function 
        const playPause = () =>{
            if(is__playing){
                audio.pause();
                playdiv.style.display = "block";
                pausediv.style.display = "none";

                playIcon.style.display = "block";
                pauseIcon.style.display = "none";

                // update play pause varriable
                is__playing = false;
            }else{
                audio.play();
                playdiv.style.display = "none";
                pausediv.style.display = "block";

                playIcon.style.display = "none";
                pauseIcon.style.display = "block";

                // update play pause varriable
                is__playing = true;
            }
        }
    
    // display background images updata
    function bgcDisplay(allElement, audio__serial__Number = 0) {
        musicBox.style.background = `linear-gradient(90deg, rgba(0,0,0,0.4206057422969187) 0%, rgba(0,0,0,0.5214460784313726) 57%, rgba(4,4,4,0.5942752100840336) 100%),url(${allElement[audio__serial__Number].img})`;

        musicBox.style.backgroundPosition = "center";
        musicBox.style. backgroundSize = "cover";
        musicBox.style.backgroundRepeat = "no-repeat";

    }

    // Add class name "active" and Add html data music name 
        function activeClass(AllAudioList, audio__serial__Number = 0, allElement){
            // remove all class name "active"
            AllAudioList.forEach(re =>{
                re.classList.remove("active")
            });
            // current music add class name 
            AllAudioList[audio__serial__Number].classList.add("active")
            //music name add 
            music_dittlis_name.innerHTML = `${allElement[audio__serial__Number].name}`;
            music_dittlis_authName.innerHTML = `${allElement[audio__serial__Number].auth}`;

            // display background images update
            bgcDisplay(allElement, audio__serial__Number) 
            
        }

    // next music button function
        const forwardfun = () =>{
            if(audio__serial__Number === (allElement.length-1)){
                audio__serial__Number = 0;
                // audio set attribute update
                audioSetAttribute(audio__serial__Number);
                // sctive class add 
                activeClass(AllAudioList, audio__serial__Number, allElement)
            }else{
                audio__serial__Number = audio__serial__Number + 1;
                // audio set attribute update
                audioSetAttribute(audio__serial__Number);
                // sctive class add 
                activeClass(AllAudioList, audio__serial__Number, allElement)
            }
        }

    // previous music button function
        const backwardfun = () =>{
            if(audio__serial__Number === 0){
                audio__serial__Number = allElement.length-1;
                // audio set attribute update
                audioSetAttribute(audio__serial__Number);
                // active class update 
                activeClass(AllAudioList, audio__serial__Number, allElement)
            }else{
                audio__serial__Number = audio__serial__Number - 1;
                // audio set attribute update
                audioSetAttribute(audio__serial__Number);
                // active class update  
                activeClass(AllAudioList, audio__serial__Number, allElement)
            }
        }

    // audio set attribute
        audio.setAttribute("src", `${allElement[audio__serial__Number].audio}`);
        function audioSetAttribute(){
            audio.setAttribute("src", `${allElement[audio__serial__Number].audio}`);
        }

// function end 

    // privouse
        backward.addEventListener("click", backwardfun)
    // Next 
        forward.addEventListener("click", forwardfun)

    // play audio 
        play.addEventListener("click", playPause)

    // pause audio 
        pause.addEventListener("click", playPause)

    // play audio 
        playIcon.addEventListener("click", playPause)

    // pause audio 
        pauseIcon.addEventListener("click", playPause)

    // volume control 
        volume.addEventListener("change", (e)=>{
        audio.volume = e.target.value / 100;
    })
  
    // set start and end time 
        audio.addEventListener('loadedmetadata', ()=>{
        startAudioTime.innerHTML = timeFormate(audio.currentTime)
        endAudioTime.innerHTML = timeFormate(audio.duration)
        audioRange.setAttribute("max", audio.duration)
    })

    // update start time 
        audio.addEventListener('timeupdate', ()=>{
            startAudioTime.innerHTML = timeFormate(audio.currentTime);
            audioRange.value = audio.currentTime;

            if (audio.duration > 0 && !audio.paused) {
                playdiv.style.display = "none";
                pausediv.style.display = "block";

                playIcon.style.display = "none";
                pauseIcon.style.display = "block";
            } else {
                playdiv.style.display = "block";
                pausediv.style.display = "none";

                playIcon.style.display = "block";
                pauseIcon.style.display = "none";
            
            }

            if(audio.currentTime === audio.duration && loop){
                forwardfun()
            }

        })

    // seek set 
        audioRange.addEventListener("change", (e)=>{
            audio.currentTime = e.target.value
        })

    // click to audio select
        AllAudioList[audio__serial__Number].classList.add("active");
        AllAudioList.forEach((e,i)=>{
            e.addEventListener("click", function(f){
                // add active class 
                activeClass(AllAudioList, i, allElement)
                // update audio serial number 
                audio__serial__Number = i;
                // audio set attribute
                audioSetAttribute(audio__serial__Number)
            })
            
        })

    // loop updata 
        loopIcon.addEventListener("click", function(){
            loop = !loop;
            if(loop){
                loopIcon.style.background = "#d1264e";
                loopIcon.style.color = "#fff";
            }else{
                loopIcon.style.background = "#fff";
                loopIcon.style.color = "#1A1A32";
            }
        })

        // display music name set 
        music_dittlis_name.innerHTML = allElement[audio__serial__Number].name;
        // display music auth name set
        music_dittlis_authName.innerHTML = allElement[audio__serial__Number].auth;
        // display background images update 
        bgcDisplay(allElement, audio__serial__Number)



}


audioPlayerBox()
