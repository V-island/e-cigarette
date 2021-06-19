import $ from 'jquery'

var Navbar = {
  headerHover: function headerHover() {
    var $listPar = $('.nav-wrapper .nav'),
      $moveEl, $moveShow,
      $headerNavList = $('.nav-wrapper .nav>.navitem', '#header'),
      $movesEl = $('.nav-wrapper .nav>.jsMoveEl', '#header'),
      $choiseItem = $('.nav-wrapper .nav>.navitem>.active', '#header').closest('.navitem');
      
    if ($movesEl.length) $movesEl.remove()
    if (!$choiseItem.length) return;

    function getWidth(el) {
      return $(el).width();
    }

    function getPos(el) {
      return $(el).position();
    }

    (function createMoveEl() {
      $moveEl = $('<li class="jsMoveEl"><span></span></li>').appendTo('.nav-wrapper .nav');
      $moveShow = $moveEl.find('span');

      $listPar.css('position', 'relative');
      if (!$choiseItem.length) return;
      $moveEl.css({
        position: 'absolute',
        left: getPos($choiseItem).left,
        bottom: '0',
        width: getWidth($choiseItem),
        height: '2px',
        'z-index': -1
      });
      $moveShow.css({

        position: 'absolute',
        left: '0',
        right: 0,
        top: '0',
        margin: 'auto',
        width: '100%',
        height: '2px',
        'background-color': '#2882e8',
        'z-index': -1
      });
    })();

    $headerNavList.on('mouseenter', function () {
      var _this = this,
        $subNav = $(this).find('.subnav:not(:animated)');

      if ($subNav[0]) {
        $subNav.slideDown(200);
        $moveEl.stop().animate({

          width: getWidth(_this),
          left: getPos(_this).left,
          opacity: 0
        });
      } else {
        $moveEl.stop().animate({
          width: getWidth(_this),
          left: getPos(_this).left,
          opacity: 1
        });
      }
      $moveShow.stop().animate({
        width: '100%',
        opacity: '1'
      });
    });

    $headerNavList.on('mouseleave', function () {
      var $subNav = $(this).find('.subnav');
      if ($subNav.length) {
        $subNav.slideUp();
      }
    });

    $listPar.on('mouseleave', function () {
      $moveEl.stop().animate({
        width: getWidth($choiseItem),
        left: getPos($choiseItem).left
      });
    });
  },
  parallax: function parallax(el) {
    if (!$(el).length) return;
    var top = $(el).offset().top;
    $(window).scroll(function () {
      $(el).css('position', 'fixed');
      $(el).css('top', function () {
        return (top - 1 * $(document).scrollTop() / 4);
      })
    });
  }
};

export default Navbar