(function () {
    'use strict';

    /* ---------- code section for menu color change on scroll ---------- */

    $(document).scroll(function () {
        if ($(this).scrollTop() < $('#main-nav').height()) {
            $('#main-nav').css({
                'background-color': 'transparent',
                'box-shadow': 'none'
            });
        } else {
            $('#main-nav').css({
                'background-color': '#FFFFFF',
                'box-shadow': '2px 0 5px rgba(0, 0, 0, 0.5)'
            });
        }
    });

    /* ---------- code section for menu color change on scroll END ---------- */


    /* ---------- code section for fetching and displaying instagram videos ---------- */

    // execute on page load
    displayInstagramVideos(API_DETAILS.api, 0);

    // recursive function that gets the APi tag data, filters for videos, displays and 
    // then runs again to fectch the next batch of paginated data... till the total video count is 10,
    // or there is no more data
    function displayInstagramVideos(api, count) {

        getInstagramApiData(api)
            .then(filterForVideos)
            .catch(handleError);

        function filterForVideos(res) {
            console.log('start');

            $.each(res.data, function (index, data) {
                console.log(count);
                if (data.type === 'video') {
                    addVideoToPage(data, count);
                    count++;
                }
                // checks if the next batch of paginated data is needed to complete 10 videos, if so runs again with new next_url
                if ((index + 1) === res.data.length && count < 10 && res.pagination.next_url) {
                    console.log('entered');
                    displayInstagramVideos(res.pagination.next_url, count);
                }

                // ensures number of videos doesn't exceed 10
                return count < 10;
            });
            console.log(res);
        }

        function handleError(error) {
            console.log(error.responseJSON.meta.error_message);
        }
    }

    function getInstagramApiData(api) {
        return $.getJSON(api);
    }

    function addVideoToPage(data, count) {
        console.log(data);
        var videoContainer = $('.video-container').eq(count);
        videoContainer.find('.vid video')
            .attr('src', data.videos.standard_resolution.url)
            .attr('poster', data.images.standard_resolution.url)
            .prop('controls', true);
        videoContainer.find('.details .User-name')
            .text(data.user.full_name)
            .attr('href', data.link);
        videoContainer.find('.details .profile-pic').attr('src', data.user.profile_picture);
        videoContainer.find('.details .video-caption').text(data.caption.text);
        videoContainer.find('.details .comment-button').text('comment').attr('href', data.link);
    }

    /* ---------- code section for fetchind and displaying instagram videos END ---------- */

}());