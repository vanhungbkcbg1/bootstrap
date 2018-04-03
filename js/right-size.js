/**
 * Created by 749 on 2018/04/03.
 */
$(document).ready(function () {

    $(document).on('click','.show_side', function () {

        $(".fix_side").css('width',"250px");
    });

    $(document).on('click','.closebtn', function () {

        $(".fix_side").css('width',"0px");
    });
});
