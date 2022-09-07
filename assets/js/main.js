 $(function () {

            var fadeElem = $('.fade-scroll');

            $(document).on('scroll', function () {
                var currScrollPos = $(document).scrollTop();

                fadeElem.each(function () {
                    var $this = $(this),
                        elemOffsetTop = $this.offset().top;
                    if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos - elemOffsetTop) / 400);
                });
            });

        });