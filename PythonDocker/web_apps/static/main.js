$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('#btn-predict').hide();
    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#btn-predict').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#myfile").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
         readURL(this);
    });    

});