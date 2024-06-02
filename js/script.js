// init Isotope
var $grid = $('.collection-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFiterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
  });
  var filterBtns = $('.filter-button-group').find('button');
  function resetFiterBtns(){
    filterBtns.each(function(){
      $(this).removeClass('active-filter-btn');
    });
  }