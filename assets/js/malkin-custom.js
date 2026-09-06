// Override banner video with Sam Malkin's video
function initBannerVideo() {
    const $el = $("#banner-video-background");
    if (!$el.length) return;
    const videoId = "rsmVhOY2AMg";
    new YT.Player($el.attr("id"), {
        videoId: videoId,
        playerVars: {
            autoplay: 1, controls: 0, mute: 1, loop: 1,
            playlist: videoId, rel: 0, modestbranding: 1,
            iv_load_policy: 3, origin: window.location.origin
        },
        events: {
            onReady: (e) => e.target.playVideo(),
            onStateChange: (e) => { if (e.data === YT.PlayerState.ENDED) e.target.playVideo(); }
        }
    });
}
