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
