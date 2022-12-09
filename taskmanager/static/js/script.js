console.log("Connected")

document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "select"}
    });

    // selector initialization
    let selector = document.querySelectorAll('select');
    M.FormSelect.init(selector);

    // collapsible initialization
    var collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);

  });