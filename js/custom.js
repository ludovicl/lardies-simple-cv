/**
 * Created by ludovicl on 27/12/2015.
 */

$(document).on('click','a.modal-link', function() {
    console.log($('#myModal img'))
    console.log('lol')
    $('#myModal img').attr('src', $(this).attr('data-img-url'));
});

$(document).on('click', '.panel div.clickable', function () {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});

$(document).ready(function () {
    $('.panel div.clickable').click();
});

