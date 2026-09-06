// Inline YouTube player — plays inside the container, no modal
$(function() {
    var $playButtons = $('.request-loader');

    $playButtons.on('click', function() {
        var $btn = $(this);
        var videoUrl = $btn.attr('data-video');
        if (!videoUrl) return;

        var $container = $btn.closest('.project-video-container');

        // If already playing, toggle off
        if ($container.hasClass('is-playing')) {
            $container.find('.inline-yt-player').remove();
            $container.removeClass('is-playing');
            return;
        }

        // Close any other playing videos first
        $('.project-video-container.is-playing').each(function() {
            $(this).find('.inline-yt-player').remove();
            $(this).removeClass('is-playing');
        });

        // Create inline iframe
        var iframe = $('<iframe>', {
            src: videoUrl + '?autoplay=1&rel=0&modestbranding=1',
            class: 'inline-yt-player',
            allow: 'autoplay; encrypted-media',
            allowfullscreen: true,
            title: 'Video Player'
        });

        $container.append(iframe);
        $container.addClass('is-playing');
    });
});
