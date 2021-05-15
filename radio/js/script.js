class Player{

    constructor(){

        let heightOfMain = document.getElementById('player');
        heightOfMain.style.height = `${screen.height}px`; 
        if(screen.width < 500){
            heightOfMain.style.width = `${screen.width}px`;
        }
        let heightDiv = document.getElementById('content');
        heightDiv.style.height = `${screen.height - 300}px`;
    }

}
onload = new Player();

//// calss buttons

class Audio_player{
    constructor(){
        this.audio_file = document.getElementById('audio_file');
        this.title_audio = document.getElementById('title_radio');
        this.play_pause_btn = document.getElementById('play-pause');
        this.isPlay;
        /// next , back btns
        this.next = document.getElementById('next');
        this.back = document.getElementById('back');
        /// end next , back btns
        this.play_pause_btn.addEventListener('click', ()=>{
            this.play_pause();
        });
        this.play_pause();
        /// audio arrays
        this.radio_name = ['chaine.une القناة الأولى', 'HIT RADIO', 'COREY GRAY/ALEXI BLUE', 'POP/ROCK'];
        this.radio_sources = ['https://ch1.ice.infomaniak.ch/ch1-32.aac', 'http://hitradio-maroc.ice.infomaniak.ch/hitradio-maroc-128.mp3'
        , 'http://cover2.ice.infomaniak.ch/cover2-128.mp3', 'http://poprock.ice.infomaniak.ch/poprock-128.mp3'];
        this.source = 0;

        this.setResouce();
        this.next.addEventListener('click', ()=>{
            this.nextAudio();
            this.setResouce()
            this.audio_file.play();
            this.isPlay = true;
            this.play_pause_btn.innerHTML = '<i class="fas fa-pause"></i>';
        });
        this.back.addEventListener('click', ()=>{
            this.prevAudio();
            this.setResouce()
            this.audio_file.play();
            this.isPlay = true;
            this.play_pause_btn.innerHTML = '<i class="fas fa-pause"></i>'
        });
    }
    /// end of constructor
    /********************************************/
    /// set resource function()
    setResouce(){
        if(localStorage.getItem('save-position') != null){
            this.source = localStorage.getItem('save-position');
        }
        this.audio_file.src = `${this.radio_sources[this.source]}`;
        this.title_audio.innerHTML = `${this.radio_name[this.source]}`;
    }
    /// next and prev functions()
    nextAudio(){
        if(this.source <  this.radio_sources.length - 1){
            this.source++;
        }else{
            this.source = 0;
        }
        localStorage.setItem('save-position', this.source);
    }
    prevAudio(){
        if(this.source >  0){
            this.source--;
        }else{
            this.source = this.radio_sources.length - 1;
        }
        localStorage.setItem('save-position', this.source);
    }
    /// end next and prev functions()

    /// play pause function()
    play_pause(){
        if(this.isPlay == false){
            this.audio_file.play();
            this.isPlay = true;
            this.play_pause_btn.innerHTML = '<i class="fas fa-pause"></i>';
        }else{
            this.audio_file.pause();
            this.isPlay = false;
            this.play_pause_btn.innerHTML = '<i class="fas fa-play"></i>';
        }
    }
    /// end play pause function()
}

onload = new Audio_player();












