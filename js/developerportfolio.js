// Run a function when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  
  // Parallax
  var parallax = document.getElementById('parallax');
  M.Parallax.init(parallax);

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
});