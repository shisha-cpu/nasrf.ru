/*личный кабинет*/
;(function () {
    if ($('.lk').length > 0) {
        var awaitUpdate = 0;

        $('body').on('click', '.lk-block-right-dialog .item', function () {
            $('.lk-block-right-dialog .item').removeClass('active');
            $('.lk-block-right-chat').addClass('active');
            $(this).addClass('active');
            var data = $(this).data('id');
            if ($('input[name=ADMIN]').val() == 'N') {
                $('input[name=CONSULTANT]').val(data);
                $('.lk-block-right-chat .top-img img').prop('src', $(this).data('img'));
                $('.lk-block-right-chat .top-text li:first-child').text($(this).data('name'));
                $('.lk-block-right-chat .top-text li:last-child').text($(this).data('title'));
            } else {
                $('input[name=ID_USER]').val(data);
            }

            updateChat(0, true);
        });

        $('.lk-block-right-chat .backClick').click(function () {
            $('.lk-block-right-dialog .item').removeClass('active');
            $('.lk-block-right-chat').removeClass('active');
        });

        $('.myInfo').click(function () {
            $('.lk-block-left').toggleClass('active');
        });

        $('.lk-block-left .backClick').click(function () {
            $('.lk-block-left ').removeClass('active');
        });

        $('#chatSend img').click(function () {
            $('#file').click();
        });
        $('#file').change(function (event) {
            // Когда происходит изменение элементов управления, значит появились новые файлы
            var i = 0,
                files = this.files,
                len = files.length;

            for (; i < len; i++) {
                $('input[name=MESSAGE]').val(files[i].name);
                console.log("Filename: " + files[i].name);
                console.log("Type: " + files[i].type);
                console.log("Size: " + files[i].size + " bytes");
            }
        });
        $('.top-block-task').click(function () {
            var active = $('input[name=DISABLED]').val();
            var data = $('#chatSend').serialize();
            if (active == 'Y') {
                $('.top-block-task-text').text('Продолжить выполнение');
                $('.lk-block-right-dialog .active').append('<div class="mess red">!</div>');
                $('input[name=DISABLED]').val('N')
            } else {
                $('.top-block-task-text').text('Отложить задачу');
                $('.lk-block-right-dialog .active .mess.red').remove();
                $('input[name=DISABLED]').val('Y')
            }

            $.ajax({
                url: '/ajax/lk/chat/disableChat.php',
                type: 'post',
                data: data,
                dataType: 'json',
                success: function (json) {
                },
                error: function (json) {
                    console.log(json);
                }
            });

        });
        $('#chatSend').submit(function () {
            var that = $(this);
            var file = $('#sendFile');
            formData = new FormData(file.get(0)); // создаем новый экземпляр объекта и передаем ему нашу форму (*)

            console.log(formData);

            $.ajax({
                url: '/ajax/lk/loadFile.php',
                type: 'post',
                contentType: false, // важно - убираем форматирование данных по умолчанию
                processData: false, // важно - убираем преобразование строк по умолчанию
                data: formData,
                dataType: 'json',
                success: function (json) {
                    $('#sendFile').trigger('reset');
                    console.log(json);

                    that.find('input[name=FILE]').val(json);
                    var data = that.serialize();

                    $.ajax({
                        url: '/ajax/lk/chat/sendMessage.php',
                        type: 'post',
                        data: data,
                        dataType: 'json',
                        success: function (json) {
                            that.trigger('reset');
                            updateChat(1, true);
                        },
                        error: function (json) {
                            console.log(json);
                        }
                    });

                },
                error: function (json) {
                    console.log(json);
                }
            });
            return false;
        });

        function updateChat(update, scroll) {
            awaitUpdate = 1;
            var data = $('#chatSend').serialize();
            $.ajax({
                url: '/ajax/lk/chat/updateChat.php',
                type: 'post',
                data: data,
                dataType: 'json',
                success: function (json) {
                    // console.log(json);
                    $('.bottom-window').empty();

                    json.forEach(function (e) {
                        var activeClass = '';
                        var dialogItem = $('.lk-block-right-dialog .item[data-id=' + e.USER.ID + ']');
                        if (e.MESSAGE_LIST) {
                            var chat = '';
                            e.MESSAGE_LIST.forEach(function (mes) {
                                var position = 'left';
                                if ($('input[name=CURRENT_ID_USER]').val() == mes.ID) {
                                    position = 'right';
                                } else {
                                    position = 'left';
                                }

                                chat += ' <div class="item item-' + position + '">\n';

                                if (mes.FILE && mes.FILE.CONTENT_TYPE.indexOf('image') < 0) {
                                    chat += '  <a href="' + mes.FILE.SRC + '" target="_blank" download="" class="file">\n' +
                                        '                    <div class="file-text">\n' +
                                        '                      <ul>\n';

                                    chat += '                        <li>' + mes.TEXT + '</li>\n';

                                    chat += '                        <li>(' + mes.FILE.SIZE + ' КБ)</li>\n' +
                                        '                      </ul>\n' +
                                        '                    </div> \n' +
                                        '                    <div class="file-img">\n' +
                                        '                      <img src="/bitrix/templates/NAS/img/lk/file.png" alt="">\n' +
                                        '                    </div>\n' +
                                        '                  </a>';
                                } else if (mes.FILE && mes.FILE.CONTENT_TYPE.indexOf('image') <= 0) {
                                    chat += '   <a href="' + mes.FILE.SRC + '" class="item-img"><img src="' + mes.FILE.SRC + '" alt=""></a>';
                                } else {
                                    if (mes.TEXT.indexOf('http') >= 0) {
                                        chat += '                        <li><a href="'+mes.TEXT+'">' + mes.TEXT + '</a></li>\n';
                                    } else {
                                        chat += '                  <div class="text">' + mes.TEXT + '</div>\n';
                                    }
                                }


                                chat += '                  <div class="time">' + mes.TIME + '</div>\n' +
                                    '                </div>';

                                $('.lk-block-right-chat .top-text li:first-child').text(e.USER.NAME + ' ' + e.USER.LAST_NAME);
                                $('.lk-block-right-chat .top-text li:last-child').text(e.USER.TITLE);
                                $('.lk-block-right-chat .top-img img').prop('src', e.USER.PERSONAL_PHOTO);

                            });

                            if ($('input[name=ADMIN]').val() != 'N') {
                                $('input[name=ID_USER]').val(e.USER.ID);
                            }
                            $('.bottom-window').append(chat);
                            if (scroll) {
                                var heightChat = document.querySelector(".bottom-window").scrollHeight;
                                $('.bottom-window').scrollTop(heightChat);
                            }
                            activeClass = 'active';
                        }
                        //обновление диалога
                        var dialog = '';

                        if (dialogItem.length <= 0) {
                            dialog += '  <div class="item ' + activeClass + '" data-id="' + e.USER.ID + '" data-name="' + e.USER.NAME + ' ' + e.USER.LAST_NAME + '" data-title="' + e.USER.TITLE + '">\n';
                        }

                        dialog += ' <div class="text">\n';

                        if ($('input[name=ADMIN]').val() == 'Y') {
                            dialog += '                                    <div class="title">' + e.USER.NAME + ' ' + e.USER.LAST_NAME + '<span>/' + e.DIALOG.TIME + '</span></div>\n';
                        } else {
                            dialog += '                                    <div class="title">' + e.USER.TITLE + '<span>/' + e.DIALOG.TIME + '</span></div>\n';
                        }
                        if(e.DIALOG.TEXT .length > 50){
                            e.DIALOG.TEXT = e.DIALOG.TEXT.substring(0,50)+'...';
                        }
                        dialog += '                <p>' + e.DIALOG.TEXT + '</p>\n' +
                            '              </div>\n';
                        if (e.ACTIVE == 'Y') {
                            if (e.PROPERTY_NOT_READ_VALUE > 0 && e.PROPERTY_ANCHOR_VALUE == $('input[name=CURRENT_ID_USER]').val() && !dialogItem.hasClass('active')) {
                                dialog += '              <div class="mess green">+' + e.PROPERTY_NOT_READ_VALUE + '</div>';
                            }
                            $('.top-block-task-text').text('Отложить задачу');
                            $('input[name=DISABLED]').val('Y');
                        } else {
                            dialog += '              <div class="mess red">!</div>';
                            $('.top-block-task-text').text('Продолжить выполнение');
                            $('input[name=DISABLED]').val('N');
                        }

                        if (dialogItem.length <= 0) {
                            dialog += '                            </div>';
                            $('.lk-block-right-dialog').append(dialog);
                        } else {
                            dialogItem.empty().append(dialog);
                        }

                    });

                    awaitUpdate = 0;
                    if (update == 1) {
                        setTimeout(function () {
                            updateChat(1);
                        }, 3000);
                    }
                },
                error: function (json) {
                    console.log(json);
                }
            });
            return false;
        }

        updateChat(1, true);

        var user = function User() {
        };

        $('.editing.edit').click(function () {
            user.oldPhoto = $('.lk-block-left img').attr('src');
            user.name = $('.lk-block-left input[name=NAME]').val();
            user.title = $('.lk-block-left input[name=TITLE]').val();
            user.city = $('.lk-block-left input[name=CITY]').val();
            user.birthday = $('.lk-block-left input[name=PERSONAL_BIRTHDAY]').val();
            user.phone = $('.lk-block-left input[name=PERSONAL_PHONE]').val();
            user.email = $('.lk-block-left input[name=EMAIL]').val();

            $('.lk-block-left').addClass('active');
            $('.lk-block-left input').prop('readonly', false);
        });
        $('.editing.save').click(function (e) {
            e.preventDefault();
            $('.lk-block-left').removeClass('active');
            $('.lk-block-left input').prop('readonly', true);
            var that = $('.editProfile');
            var file = $('#sendPhoto');
            formData = new FormData(file.get(0)); // создаем новый экземпляр объекта и передаем ему нашу форму (*)

            console.log(formData);

            $.ajax({
                url: '/ajax/lk/loadFile.php',
                type: 'post',
                contentType: false, // важно - убираем форматирование данных по умолчанию
                processData: false, // важно - убираем преобразование строк по умолчанию
                data: formData,
                dataType: 'json',
                success: function (json) {
                    console.log(json);

                    that.find('input[name=PERSONAL_PHOTO]').val(json);
                    var data = that.serialize();
                    console.log(data);

                    $.ajax({
                        url: '/ajax/lk/editProfile.php',
                        type: 'post',
                        data: data,
                        dataType: 'json',
                        success: function (json) {
                            console.log(json);
                        },
                        error: function (json) {
                            console.log(json);
                        }
                    });

                },
                error: function (json) {
                    console.log(json);
                }
            });
            return false;
        });
        $('.editing.photo').click(function () {
            $('#photo').click();
        });
        $('.editing.reset').click(function () {
            $('.lk-block-left img').attr('src', user.oldPhoto);
            $('.lk-block-left input[name=NAME]').val(user.name);
            $('.lk-block-left input[name=TITLE]').val(user.title);
            $('.lk-block-left input[name=CITY]').val(user.city);
            $('.lk-block-left input[name=PERSONAL_BIRTHDAY]').val(user.birthday);
            $('.lk-block-left input[name=PERSONAL_PHONE]').val(user.phone);
            $('.lk-block-left input[name=EMAIL]').val(user.email);
            $('.lk-block-left').removeClass('active');
            $('.lk-block-left input').prop('readonly', true);
        });
        $('#photo').change(function (e) {
            var files = e.target.files;
            for (var i = 0, f; f = files[i]; i++) {
                if (!f.type.match('image.*')) continue;
                var fr = new FileReader();
                fr.onload = (function (theFile) {
                    return function (e) {
                        $('.lk-block-left img').attr('src', e.target.result);
                    };
                })(f);

                fr.readAsDataURL(f);
            }
        });
        $('.bottom-window').each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: '.item-img', // the selector for gallery item
                type: 'image',
                gallery: {
                    enabled:true
                }
            });
        });
    }

    //формы
    $('.logIn').submit(function () {
        var that = $(this);
        var data = $(this).serialize(); //данные из формы преобразуються в нужный формат для отправки

        $.ajax({
            type: 'post',//метод post или get
            url: '/ajax/lk/forms/logIn.php',//путь к обработчику
            data: data,//данные
            dataType: 'json',//тип возращаемого значения html или json. Если нужно вернуть верстку то html, если просто массив с данными или сообщение то json
            success: function (e) {//если все прошло без ошибок
                //тут можно делать все что угодно с данными от обработчика
                if (e.STATUS == 'TRUE') {
                    location.href = '/';
                } else {
                    that.find('.note').text(e.MESSAGE);
                }
            },
            error: function (e) {//если были ошибки при отправки или в обработчике
                console.log(e);//e - это то что мы получаем от обработчика
                console.log(false);
            }
        });
        return false;
    });
    $('.signIn').submit(function () {
        if ($('input[name=PASS]').val() == $('input[name=CHECK_PASS]').val()) {
            var that = $(this);
            var data = that.serialize(); //данные из формы преобразуються в нужный формат для отправки

            $.ajax({
                type: 'post',//метод post или get
                url: '/ajax/lk/forms/signIn.php',//путь к обработчику
                data: data,//данные
                dataType: 'json',//тип возращаемого значения html или json. Если нужно вернуть верстку то html, если просто массив с данными или сообщение то json
                success: function (e) {//если все прошло без ошибок
                    //тут можно делать все что угодно с данными от обработчика
                    if (e.STATUS == 'TRUE') {
                        $('.note').text('Спасибо за регистрацию!');
                        location.href = '/';
                    } else {
                        that.find('.note').text(e.MESSAGE);
                    }
                },
                error: function (e) {//если были ошибки при отправки или в обработчике
                    console.log(e);//e - это то что мы получаем от обработчика
                    console.log(false);
                }
            });
        } else {
            $('.note').text('Пароли не совпадают!');
        }

        return false;
    });
    $('.forgot').submit(function () {
        var that = $(this);
        var data = $(this).serialize(); //данные из формы преобразуються в нужный формат для отправки

        $.ajax({
            type: 'post',//метод post или get
            url: '/ajax/lk/forms/forgot.php',//путь к обработчику
            data: data,//данные
            dataType: 'json',//тип возращаемого значения html или json. Если нужно вернуть верстку то html, если просто массив с данными или сообщение то json
            success: function (e) {//если все прошло без ошибок
                //тут можно делать все что угодно с данными от обработчика
                that.find('.note').text(e);

            },
            error: function (e) {//если были ошибки при отправки или в обработчике
                console.log(e);//e - это то что мы получаем от обработчика
                console.log(false);
            }
        });

        return false;
    });

})();