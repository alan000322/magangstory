$(function () {
    let max_scroll = $(".height-scroll").height() - $(window).height();
    let img_top = $(".horimg").offset().top;
    let max_move = $(".horimg").width() - $(window).width();
    // < imgw
    console.log(max_scroll)
    $(window).scroll(function () {
        let current_pos = $(window).scrollTop(); //計算螢幕上緣目前位置
        console.log(current_pos, img_top, max_scroll)
        if (current_pos > img_top && current_pos - img_top < max_scroll) {
            // let leftBorder = current_pos / max_scroll * max_move * (-1); //map: 實際上能scroll的距離比例 * winw
            let leftBorder = -1 * max_move * ((current_pos - img_top) / max_scroll);
            $(".horimg").css("left", leftBorder);
            console.log(leftBorder,"=", max_move,"*", current_pos,"+", img_top, "/", max_scroll)
        }
        

        //$("scrollperc").html(parseInt(current_pos / max_scroll * 100));
    });
});


