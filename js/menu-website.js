/**
 * Created by 749 on 2018/04/03.
 */
$(document).ready(function () {

    $(document).on('click','.show_menu', function () {

        $(".side_navigation").css('width',"250px");
    });

    $(document).on('click','.closebtn', function () {

        $(".side_navigation").css('width',"0px");
    });
});
