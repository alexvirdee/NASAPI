$(document).ready(function() {
    $("#submitDate").click(getApod); // !!!!! you just want to execute this function whem the button is clicked !!!
});

function getApod() {
    var year = $("#year").val();
    var month = $("#month").val();
    var day = $("#day").val();
    var url = 'https://api.nasa.gov/planetary/apod?date=' + year + "-" + month + "-" + day + "&api_key=zkU3VjRi4S5kfHFi8kY4v4MaURZ1LvqacyATrfxq";

    if (year != '' && month != '' && day != '') {
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            success: function(result) {
                if ("copyright" in result) {
                    $("#copyright").text("Image Credits: " + result.copyright);
                } else {
                    $("#copyright").text("Image Credits: " + "Public Domain");
                }

                $("#apod_img_id").attr("src", result.url);
                $("#apod_explanation").text(result.explanation);
                $("#apod_title").text(result.title);
            }
        });
    } else{
        $("#error").html("<div class='alert alert-danger' id='errorDate'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>The date fields cannot be empty</div>");
    }
}
