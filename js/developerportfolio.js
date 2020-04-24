$(document).ready(function(){

  // Make top bar react to user's scroll
  var topBar = document.querySelector(".top-bar");
  var headroom  = new Headroom(topBar);
  headroom.init();

  // Parallax
  var parallax = document.getElementById('parallax');
  M.Parallax.init(parallax);

  // Init AOS
  AOS.init();

  // Chart
  var dom = document.getElementById('skillsChart');
  var skillsChart = echarts.init(dom, 'light', {renderer: 'canvas'});
  skillsChart.showLoading();
  var data;
  var option;

  function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }
  
  function json(response) {
    return response.json();
  }

  fetch('js/config/data.json')
    .then(status)
    .then(json)
    .then(function(response) {
      console.log('Request succeeded with JSON response', response);
      data = response;
      return fetch('js/config/option.json');
    })
    .then(status)
    .then(json)
    .then(function(response) {
      option = response;
      option.baseOption.series.data = data;
      console.log('Request succeeded with JSON response', response);
      skillsChart.hideLoading();
      skillsChart.setOption(option, true);
      // Resize chart, when window size changes
      window.onresize = function() {
        skillsChart.resize();
      };
    })
    .catch(function(error) {
      console.log('Request failed', error);
    });

  // Sidenav
  var sidenav = document.getElementById('sidenav');
  M.Sidenav.init(sidenav);
    
  // Show more/less projects
  $('#showMoreProjects').click(function () {
    if ($('.projects-section__row-wrapper').hasClass('collapse')) {
      $('.projects-section__row-wrapper').removeClass('collapse');
      $(this).html('<i class="fas fa-chevron-up"></i> Show less');
    } else {
      $('.projects-section__row-wrapper').addClass('collapse');
      $(this).html('<i class="fas fa-chevron-down"></i> Show more');
    }
  });

  // Show more/less experience
  $('#showMoreExperience').click(function () {
    if ($('.timeline').hasClass('collapse')) {
      $('.timeline').removeClass('collapse');
      $(this).html('<i class="fas fa-chevron-up"></i> Show less');
    } else {
      $('.timeline').addClass('collapse');
      $(this).html('<i class="fas fa-chevron-down"></i> Show more');
    }
  });

  // Scrollspy
  var elems = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(elems, {scrollOffset: 0});
});
