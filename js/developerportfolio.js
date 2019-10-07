// Run a function when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  
  // Parallax
  var parallax = document.getElementById('parallax');
  M.Parallax.init(parallax);

  // Tooltips
  var tooltips = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(tooltips);

  // Animated text
  var characters = document.querySelectorAll('.lead__body-name span');

  var delay = 0;
  var step = 100;
  characters.forEach(function(character) {
    setTimeout(function() {
      character.classList.add('animated', 'bounceIn');
    }, delay);
    delay += step;
  });

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

    // Navbar
    var navbarNav = document.getElementById('navbarNav');
    var navbarToggler = document.getElementById('navbarToggler');

    navbarToggler.addEventListener('click', function() {
      navbarNav.classList.toggle('show');
      if (this.getAttribute('aria-expanded') === 'true') {
        this.setAttribute('aria-expanded', 'false');
      } else {
        this.setAttribute('aria-expanded', 'true');
      }
    });

});