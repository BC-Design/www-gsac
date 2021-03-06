var options = {
  valueNames: [ 'title', 'description', 'lab', 'areas', 'applicants', 'compensation', 'hours', 'skills', 'start', 'duration' ]
};

var contentList = new List('content-list', options);

$('#search-reset').click(function() {
  $('#search-field').val('');
  contentList.filter();
  contentList.search();
  return false;
});

$('#filter-freshman').click(function() {
  contentList.filter(function(item) {
    if (item.values().applicants.indexOf("Freshman") > -1) {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-sophomore').click(function() {
  contentList.filter(function(item) {
    if (item.values().applicants.indexOf("Sophomore") > -1) {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-junior').click(function() {
  contentList.filter(function(item) {
    if (item.values().applicants.indexOf("Junior") > -1) {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-senior').click(function() {
  contentList.filter(function(item) {
    if (item.values().applicants.indexOf("Senior") > -1) {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-video').click(function() {
  contentList.filter(function(item) {
    if (item.values().format == "Video") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-photo').click(function() {
  contentList.filter(function(item) {
    if (item.values().format == "Photo") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-literature').click(function() {
  contentList.filter(function(item) {
    if (item.values().format == "Literature") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-review').click(function() {
  contentList.filter(function(item) {
    if (item.values().format == "Review") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});


$('#filter-finance').click(function() {
  contentList.filter(function(item) {
    if (item.values().category == "Finance") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-education').click(function() {
  contentList.filter(function(item) {
    if (item.values().category == "Education") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});


$('#filter-technology').click(function() {
  contentList.filter(function(item) {
    if (item.values().category == "Technology") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-science').click(function() {
  contentList.filter(function(item) {
    if (item.values().category == "Science") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-fun').click(function() {
  contentList.filter(function(item) {
    if (item.values().category == "Fun") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});
