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
    var backToTopOffset = 2000;
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
      name: 'HTML5',
      children: [{
        name: 'Semantics',
        value: 1
      }, {
        name: 'PWAs',
        value: 1
      }, {
        name: 'Canvas API',
        value: 1
      }, {
        name: 'Intersection Observer API',
        value: 1
      }, {
        name: 'Web Workers API',
        value: 1
      }, {
        name: 'requestAnimationFrame',
        value: 1
      }, {
        name: 'Ajax',
        value: 1
      }, {
        name: 'Flexible Box Layout',
        value: 1
      }, {
        name: 'CSS Transitions',
        value: 1
      }, {
        name: 'CSS Animations',
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
        name: 'Hover.css',
        value: 1
      }]
    }, {
      name: 'JS',
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
        name: 'Lazysizes',
        value: 1
      }, {
        name: 'SweetAlert',
        value: 1
      }]
    }, {
      name: 'Essent.',
      children: [{
        name: 'Git',
        value: 1
      }, {
        name: 'GitHub',
        value: 1
      }, {
        name: 'Linux Command Line',
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
        name: 'Adobe Photoshop',
        value: 1
      }, {
        name: 'Office Suite',
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
        name: 'Lighthouse',
        value: 1
      }, {
        name: 'Responsive Bp.',
        value: 1
      }, {
        name: 'TinyPNG',
        value: 1
      }, {
        name: 'W3C Markup Validator',
        value: 1
      }, {
        name: 'W3C CSS Validator',
        value: 1
      }, {
        name: 'Freedcamp',
        value: 1
      }, {
        name: 'Foundation for Emails 2',
        value: 1
      }, {
        name: 'Cloudinary',
        value: 1
      }, {
        name: 'Ngrok',
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
        name: 'Flaticon',
        value: 1
      }, {
        name: 'Shutterstock',
        value: 1
      }, {
        name: 'Pexels',
        value: 1
      }, {
        name: 'Unsplash',
        value: 1
      }, {
        name: 'Adobe Color CC',
        value: 1
      }]
    }
  ];

  // Chart configuration
  var chartOptions = {
    baseOption: {
      series: {
        type: 'sunburst',
        data: data,
        levels: [
          {
            // Blank
          },
          {
            // 1st level
            r0: '0',
            r: '40%',
            label: {
                color: '#000',
                align: 'center'
            }
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
            fontSize: 6.5
          }
        }
      },
      {
        query: {
          minWidth: 286 // 335
        },
        option: {
          textStyle: {
            fontSize: 7
          }
        }
      },
      {
        query: {
          minWidth: 304 // 355
        },
        option: {
          textStyle: {
            fontSize: 7.5
          }
        }
      },
      {
        query: {
          minWidth: 322 // 375
        },
        option: {
          textStyle: {
            fontSize: 8
          }
        }
      },
      {
        query: {
          minWidth: 345 // 400
        },
        option: {
          textStyle: {
            fontSize: 8.5
          }
        }
      },
      {
        query: {
          minWidth: 363 // 420
        },
        option: {
          textStyle: {
            fontSize: 9
          }
        }
      },
      {
        query: {
          minWidth: 381 // 440
        },
        option: {
          textStyle: {
            fontSize: 9.5
          }
        }
      },
      {
        query: {
          minWidth: 399 // 460
        },
        option: {
          textStyle: {
            fontSize: 10
          }
        }
      },
      {
        query: {
          minWidth: 417 // 480
        },
        option: {
          textStyle: {
            fontSize: 10.5
          }
        }
      },
      {
        query: {
          minWidth: 439 // 505
        },
        option: {
          textStyle: {
            fontSize: 11
          }
        }
      },
      {
        query: {
          minWidth: 457 // 525
        },
        option: {
          textStyle: {
            fontSize: 11.5
          }
        }
      },
      {
        query: {
          minWidth: 475 // 545
        },
        option: {
          textStyle: {
            fontSize: 12
          }
        }
      },
      {
        query: {
          minWidth: 475 // 565
        },
        option: {
          textStyle: {
            fontSize: 12.5
          }
        }
      },
      {
        query: {
          minWidth: 516 // 590
        },
        option: {
          textStyle: {
            fontSize: 13
          }
        }
      },
      {
        query: {
          minWidth: 529 // 605
        },
        option: {
          textStyle: {
            fontSize: 13.5
          }
        }
      },
      {
        query: {
          minWidth: 538 // 615
        },
        option: {
          textStyle: {
            fontSize: 14
          }
        }
      },
      {
        query: {
          minWidth: 552 // 630
        },
        option: {
          textStyle: {
            fontSize: 14.5
          }
        }
      },
      {
        query: {
          minWidth: 561 // 640
        },
        option: {
          textStyle: {
            fontSize: 15
          }
        }
      },
      {
        query: {
          minWidth: 574 // 655
        },
        option: {
          textStyle: {
            fontSize: 15.5
          }
        }
      },
      {
        query: {
          minWidth: 583 // 665
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

  elements.forEach(function(element) {
    element.style.opacity = "0";
    observer.observe(element);
  });

  function handleIntersect(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.style.opacity = "1";
        entry.target.classList.add('animated', 'slideInUp');
        observer.unobserve(entry.target);
      }
    });
  }
});
