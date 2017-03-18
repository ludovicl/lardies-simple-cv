/**
 * Created by ludovicl on 27/12/2015.
 */

$(document).on('click','a.modal-link', function() {
    $('#detailModal img').attr('src', $(this).attr('data-img-url'));
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

$(document).ready(function () {
    var url = window.location;
    $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
    $('ul.nav a').filter(function() {
        return this.href == url;
    }).parent().addClass('active');
});


function get_windows_size(){
    var size = 'md';

    if ($(window).width() < 992) {
        size = 'xs';
    }
    return size;
}
