$(document).ready(function() {
    $('.btn.white').click(function() {
        var data = $('#hiroshima').val();
        $.post('hiroshima', {
            data: data
        }, function(data) {
            $('#nagasaki').val(data)
            $('#nagasaki').removeClass('red-text');
            $('#nagasaki').addClass('white-text');
        })
    })
    $('.btn.red').click(function() {
        var data = $('#hiroshima').val();
        $.post('nagasaki', {
            data: data
        }, function(data) {
            if (data.err) {
                $('#nagasaki').removeClass('white-text');
                $('#nagasaki').addClass('red-text');
                $('#nagasaki').val(data.err);
            } else {

                $('#nagasaki').val(data);


            }

        })
    })
})
