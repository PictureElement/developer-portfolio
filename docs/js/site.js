// Run a function when the DOM is ready
$(document).ready(function() {

  // Smooth scrolling
  document.querySelectorAll('.smooth-scroll').forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      });
    });
  });

  // Hamburger button
  $('#hamburgerBtn').click(function(e) {
    e.preventDefault();
    $('#tableOfContents').slideToggle("slow"); 
  });

  // Parallax scrolling effect & Back to top
  $(window).scroll(function() {
    // Parallax
    var scrollTop = $(this).scrollTop();
    $("#parallax").css("top", -(scrollTop * 0.5) + "px");
    // Back to top
    let backToTopOffset = 2000;
    if (scrollTop > backToTopOffset && window.innerWidth < 1115) {
      $('#backToTop').fadeIn();
    }
    else {
      $('#backToTop').fadeOut();
    }
  });

  // About me (View toggle)
  $('#aboutMe p').slice(0, 2).show();
  $('#aboutViewToggle').click(function(e) {
    e.preventDefault();
    if ($("#aboutMe p:hidden").length != 0) {
      $('#aboutMe p').css('text-align', 'left');
      $("#aboutMe p:hidden").fadeIn(0);
      $(this).html('View less <i class="fas fa-chevron-up"></i>');
    }
    else {
      $("#aboutMe p").slice(2).fadeOut(0);
      $('#aboutMe p').css('text-align', 'center');
      $(this).html('View more <i class="fas fa-chevron-down"></i>');
    }
  });

  // Portfolio (View toggle)
  $('.project').slice(0, 6).show();
  $('#portfolioViewToggle').click(function(e) {
    e.preventDefault();
    if ($(".project:hidden").length > 0) {
      $(".project:hidden").fadeIn(0);
      $(this).html('View less <i class="fas fa-chevron-up"></i>');
    }
    else {
      $(".project").slice(6).fadeOut(0);
      $(this).html('View more <i class="fas fa-chevron-down"></i>');
    }
  });

  // Online courses (View toggle)
  $('.online-course-card').slice(0, 2).show();
  $('#onlineCoursesViewToggle').click(function(e) {
    e.preventDefault();
    if ($(".online-course-card:hidden").length != 0) {
      $(".online-course-card:hidden").fadeIn(0);
      $(this).html('View less <i class="fas fa-chevron-up"></i>');
    }
    else {
      $(".online-course-card").slice(2).fadeOut(0);
      $(this).html('View more <i class="fas fa-chevron-down"></i>');
    }
  });

  // Initialize tooltips
  $('.tooltipped').tooltip({exitDelay: 0});

  // Skill chart
  // Initialize echarts instance
  var myChart = echarts.init(document.getElementById("skillChart"));

  // Chart data
  var data = [{
    name: 'HTML',
    children: [{
      name: 'HTML5 Semantics',
      value: 1
    }, {
      name: 'HTML5 Canvas',
      value: 1
    }, {
      name: 'Foundation for Emails 2',
      value: 1
    }, {
      name: 'W3C markup val. svc.',
      value: 1
    }]
  }, {
    name: 'CSS',
    children: [{
      name: 'Bootstrap',
      value: 1
    }, {
      name: 'Bulma',
      value: 1
    }, {
      name: 'Materialize',
      value: 1
    }, {
      name: 'Sass',
      value: 1
    }, {
      name: 'Animate.css',
      value: 1
    }, {
      name: 'W3C CSS val. svc.',
      value: 1
    }, {
      name: 'Hover.css',
      value: 1
    }]
  }, {
    name: 'JavaScript',
    children: [{
      name: 'jQuery',
      value: 1
    }, {
      name: 'Grunt',
      value: 1
    }, {
      name: 'ECharts',
      value: 1
    }, {
      name: 'ScrollReveal',
      value: 1
    }, {
      name: 'lazysizes',
      value: 1
    }, {
      name: 'SweetAlert',
      value: 1
    }]
  }, {
    name: 'Essential',
    children: [{
      name: 'Git',
      value: 1
    }, {
      name: 'GitHub',
      value: 1
    }, {
      name: 'Linux',
      value: 1
    }, {
      name: 'Visual Studio Code',
      value: 1
    }, {
      name: 'Sublime Text',
      value: 1
    }, {
      name: 'Chrome DevTools',
      value: 1
    }, {
      name: 'Office Applications',
      value: 1
    }]
  }, {
    name: 'Other',
    children: [{
      name: 'WordPress',
      value: 1
    }, {
      name: 'C/C++',
      value: 1
    }, {
      name: 'Bash',
      value: 1
    }, {
      name: 'PageSpeed Insights',
      value: 1
    }, {
      name: 'Cloudinary',
      value: 1
    }, {
      name: 'ngrok',
      value: 1
    }, {
      name: 'Formspree',
      value: 1
    }]
  }, {
    name: 'Design',
    children: [{
      name: 'Adobe Photoshop',
      value: 1
    }, {
      name: 'Google Fonts',
      value: 1
    }, {
      name: 'Font Awesome',
      value: 1
    }, {
      name: 'Adobe Color CC',
      value: 1
    }, {
      name: 'Font Pair',
      value: 1
    }]
  }, {
    name: 'Languages',
    children: [{
      name: 'Greek',
      value: 1
    }, {
      name: 'English',
      value: 1
    }]
  }];

  // Chart configuration
  var chartOptions = {
    baseOption: {
      series: {
        type: 'sunburst',
        data: data,
        //radius: [0, '100%'],
        levels: [
          {
            // Blank setting for data mining
          },
          {
            // The most inside level
            r0: '0',
            r: '40%'
            /*
            itemStyle: {
                color: 'red'
            },
            label: {
                color: 'blue'
            }
            */
          },
          {
            // The second level
            r0: '40%',
            r: '45%',
            itemStyle: {
              //shadowBlur: 80,
              //shadowColor: '#212121'
              borderWidth: 3
            },
            label: {
              //align: 'right'
              position: 'outside',
              textShadowBlur: 3,
              textShadowColor: '#212529',
              color: '#212529'
            }
          }
        ]
      }
    },
    media: [
      {
        query: {
          minWidth: 273 // 320
        },
        option: {
          textStyle: {
            fontSize: 8.5
          }
        }
      },
      {
        query: {
          minWidth: 291 // 340
        },
        option: {
          textStyle: {
            fontSize: 9
          }
        }
      },
      {
        query: {
          minWidth: 318 // 370
        },
        option: {
          textStyle: {
            fontSize: 10
          }
        }
      },
      {
        query: {
          minWidth: 349 // 405
        },
        option: {
          textStyle: {
            fontSize: 11
          }
        }
      },
      {
        query: {
          minWidth: 376 // 435
        },
        option: {
          textStyle: {
            fontSize: 12
          }
        }
      },
      {
        query: {
          minWidth: 408 // 470
        },
        option: {
          textStyle: {
            fontSize: 13
          }
        }
      },
      {
        query: {
          minWidth: 435 // 500
        },
        option: {
          textStyle: {
            fontSize: 14
          }
        }
      },
      {
        query: {
          minWidth: 471 // 540
        },
        option: {
          textStyle: {
            fontSize: 15
          }
        }
      },
      {
        query: {
          minWidth: 498 // 570
        },
        option: {
          textStyle: {
            fontSize: 16
          }
        }
      }
    ]
  };

  // Use configuration item and data specified to show chart
  myChart.setOption(chartOptions);

});

// Run a function when the page is fully loaded including graphics (images)
$(window).on('load', function() {
  $('#preloader').fadeOut();
  
  document.querySelector('#logo').classList.add("animated", "slideInDown");
  document.querySelector('#menuWrapper').classList.add("animated", "slideInDown");
  document.querySelector('#profile').classList.add("animated", "slideInUp");

  // DOM elements
  var elements = document.querySelectorAll('.animate');
  
  var observer;

  var ObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0
  }

  // Create an intersection observer
  var observer = new IntersectionObserver(handleIntersect, ObserverOptions);

  elements.forEach(element => {
    element.style.opacity = "0";
    observer.observe(element);
  });

  function handleIntersect(entries, observer) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.opacity = "1";
        entry.target.classList.add('animated', 'slideInUp');
        observer.unobserve(entry.target);
      }
    });
  }
});