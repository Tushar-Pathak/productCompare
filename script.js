(function() {
  document.addEventListener("DOMContentLoaded", function() {
    const elems = document.querySelectorAll("select");
    const instances = M.FormSelect.init(elems, {});
  });

  document.addEventListener("DOMContentLoaded", function() {
    const elems = document.querySelectorAll(".materialboxed");
    const instances = M.Materialbox.init(elems, {});
  });

  document.addEventListener("DOMContentLoaded", function() {
    const elems = document.querySelectorAll(".tooltipped");
    const instances = M.Tooltip.init(elems, {});
  });
})();
