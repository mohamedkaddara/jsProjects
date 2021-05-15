class Volume{

    constructor(){
        this.audio_file = document.getElementById('audio_file');
        this.voiceRange = document.getElementById('voice');
        this.speedRange = document.getElementById('speed');
        /// rise volume
        this.voiceRange.addEventListener('change', ()=>{
            this.audio_file.volume = this.voiceRange.value/100;
        });
        /// rise speed
        this.speedRange.playbackRate = 1;
        this.speedRange.addEventListener('change', ()=>{
            this.audio_file.playbackRate = this.speedRange.value / 100;
        });


    }

}

onload = new Volume();