// Load google analytics
/* jshint ignore:start */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
/* jshint ignore:end */
// Send current page data
(function(Hiof, undefined) {

    $(function() {
        let sCourseName = null;
        let sTemp;
        ga('create', 'UA-2034265-5', 'auto');
        try {
            sTemp = window.location.pathname.match(/\/courses\/(\d+)/);
            sCourseName = $("#section-tabs-header").text().trim().replace(/\n.*/, '').replace(/\s+/g, ' ').trim();
            if (sTemp[1]) // Only set for Courses
            {
                ga('set', 'dimension1', sTemp[1]);
                ga('set', 'dimension2', sCourseName);
            }
        } catch (err) {}
        ga('send', 'pageview');

    });

})(window.Hiof = window.Hiof || {});
