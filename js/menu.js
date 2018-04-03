/**
 * Created by 749 on 2018/04/03.
 */
$(document).ready(function () {

    $(document).on('click','.show_menu', function () {

        $("header nav ul").slideToggle();
    });
});
