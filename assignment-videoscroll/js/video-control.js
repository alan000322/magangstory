$(document).ready(function () {
    let max_scroll = $(document).height() - $(window).height();
    // console.log(max_scroll);
    $(window).scroll(function(e) {
        let current_pos = $(document).scrollTop();
        let video = $(".video-basic").get(0);
        let videoLength = video.duration;
        // console.log(video)
        video.currentTime = current_pos / max_scroll * videoLength;
        
    })
});