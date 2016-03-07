/**
 * Created by jd on 2015/5/29.
 */
function MusicBtn(options) {
    this.id = options.id;
    this.src = options.src;
    this.classOn = options.classOn;
    this.classOff = options.classOff;
    this.isPlaying = 0;
    this.bgm;
    this.init();
}

MusicBtn.prototype = {

    init: function () {
        //查找是否存在id
        if(document.getElementById(this.id)){
            document.body.removeChild(document.getElementById(this.id));
            this.init();
        }else if(this.src==""||this.id==''){
            alert('条件不完整')
        }else{
            //创建musicBtn
            var musicDiv = document.createElement('div');
            musicDiv.id = this.id;
            musicDiv.className = "" + this.classOn + "";
            document.body.appendChild(musicDiv);

            this.bgm = new Audio();

            this.bgm.setAttribute('src', '' + this.src + '');
            this.bgm.setAttribute('loop', 'loop');
            this.bgm.play();
            var isPlaying = 0;
            console.log(this.bgm);
            !function (bgm) {
                $("#" + bgm.id + "").click(function () {
                    if ($(this).attr('class') == "" + bgm.classOn + "") {
                        bgm.isPlaying = 0;
                        bgm.stop();
                        $(this).removeClass("" + bgm.classOn + "").addClass("" + bgm.classOff + "");
                    } else {
                        bgm.play();
                        bgm.isPlaying = 1;
                        $(this).removeClass("" + bgm.classOff + "").addClass("" + bgm.classOn + "");
                    }
                });
            }(this)

        }
    },
    play: function () {
        this.bgm.play();
    },
    stop: function () {
        this.bgm.pause();
    }

};

