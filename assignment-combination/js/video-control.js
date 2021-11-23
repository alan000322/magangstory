$(document).ready(function () {
    let max_scroll = $(document).height() - $(window).height();
    // console.log(max_scroll);
    $(window).scroll(function (e) {
        let current_pos = $(document).scrollTop();
        let video = $(".video-basic").get(0);
        let videoLength = video.duration;
        // console.log(video)
        video.currentTime = current_pos / max_scroll * videoLength;
        //if 
        // console.log()
        // console.log(current_pos)
        if ( current_pos > $(".intro2").offset().top ) {
            // console.log($(video))
            $("video").removeClass(".video-basic");
        }
    })
    // while (document.readyState != "complete") {
    // //     $(".loading").addClass("loading");
    // //     console.log('hi')
    // // }
    // console.log('complete!!!!!')
    // $(".loading").removeClass("loading");
});

