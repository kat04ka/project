document.addEventListener("DOMContentLoaded", () => {
  const columns = document.querySelectorAll(".comparison-scroll .col-md-4");
  let activeColumn = document.querySelector(
    ".comparison-scroll .col-md-4.is-active"
  );

  const isDesktop = () => window.matchMedia("(min-width: 1200px)").matches;

  function setActiveColumn(column) {
    columns.forEach(col => col.classList.remove("is-active"));
    column.classList.add("is-active");
  }

  columns.forEach(column => {

    column.addEventListener("click", () => {
      activeColumn = column;
      setActiveColumn(column);
    });

    column.addEventListener("mouseenter", () => {
      if (!isDesktop()) return;
      setActiveColumn(column);
    });

    column.addEventListener("mouseleave", () => {
      if (!isDesktop()) return;

      if (activeColumn) {
        setActiveColumn(activeColumn);
      } else {
        column.classList.remove("is-active");
      }
    });
  });
});
