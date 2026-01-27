const columns = document.querySelectorAll(".comparison-scroll .col-md-4");
let activeColumn = document.querySelector(
  ".comparison-scroll .col-md-4.is-active",
);

function setActiveColumn(column) {
  columns.forEach((col) => {
    col.classList.remove("is-active");
  });

  column.classList.add("is-active");
}

columns.forEach((column) => {
  column.addEventListener("mouseenter", () => {
    setActiveColumn(column);
  });

  column.addEventListener("mouseleave", () => {
    if (activeColumn) {
      setActiveColumn(activeColumn);
    } else {
      column.classList.remove("is-active");
    }
  });

  column.addEventListener("click", () => {
    activeColumn = column;
    setActiveColumn(column);
  });
});

document.querySelectorAll(".js-scroll").forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    e.preventDefault();

    const offcanvas = document.querySelector(".offcanvas.show");
    if (offcanvas) {
      bootstrap.Offcanvas.getInstance(offcanvas).hide();
    }

    setTimeout(() => {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }, 300);
  });
});
