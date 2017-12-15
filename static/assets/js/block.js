$('#mining_form').submit(function(event) {
    event.preventDefault();
    // 送信ボタンを取得
    //var $button = $form.find('button');
    $.ajax({
        url: '/mine', //$form.attr('action'),
        type: $(this).attr('method'),
        data: $(this).serialize(),
        beforeSend: function(xhr, settings) {
            $('#submit_mining').attr('disabled', true);
        },
        complete: function(xhr, textStatus) {
            $('#submit_mining').attr('disabled', false);
        },
        success: function(result, textStatus, xhr) {
            $('#mining').append('<p>You success!! You get 100 Mercury.</p>');
        },
        error: function(xhr, textStatus, error) {
            $('#mining').append('<p>You failed!! fxxk you!!!</p>');
        }
    });
});

$('#send_form').submit(function(event) {
    event.preventDefault();
    // 送信ボタンを取得
    //var $button = $form.find('button');
    $.ajax({
        url: '/transactions/new', //$form.attr('action'),
        type: $(this).attr('method'),
        data: $(this).serialize(),
        beforeSend: function(xhr, settings) {
            $('#submit_send').attr('disabled', true);
        },
        complete: function(xhr, textStatus) {
            $('#submit_send').attr('disabled', false);
        },
        success: function(result, textStatus, xhr) {
            $('#send').append('<p>You success!!</p>');
        },
        error: function(xhr, textStatus, error) {
            $('#send').append('<p>You failed!! fxxk you!!!</p>');
        }
    });
});

$('#you_have_form').submit(function(event) {
    event.preventDefault();
    // 送信ボタンを取得
    //var $button = $form.find('button');
    $.ajax({
        url: '/money', //$form.attr('action'),
        type: $(this).attr('method'),
        data: $(this).serialize(),
        beforeSend: function(xhr, settings) {
            $('#submit_you_have').attr('disabled', true);
        },
        complete: function(xhr, textStatus) {
            $('#submit_you_have').attr('disabled', false);
        },
        success: function(result, textStatus, xhr) {
            $('#you_have').append('<p>' + result['name'] + ' have ' + result['money'] + ' Mercurys.</p>');
        },
        error: function(xhr, textStatus, error) {
            $('#you_have').append('<p>You failed!! fxxk you!!!</p>');
        }
    });
});

