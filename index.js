const columns = document.querySelectorAll('.comparison-scroll .col-md-4');
  let activeColumn = document.querySelector('.comparison-scroll .col-md-4.is-active');

  function setActiveColumn(column) {
    columns.forEach(col => {
      col.classList.remove('is-active');
    });

    column.classList.add('is-active');
  }

  columns.forEach(column => {

    // hover — временно активируем
    column.addEventListener('mouseenter', () => {
      setActiveColumn(column);
    });

    // mouseleave — возвращаем зафиксированную
    column.addEventListener('mouseleave', () => {
      if (activeColumn) {
        setActiveColumn(activeColumn);
      } else {
        column.classList.remove('is-active');
      }
    });

    // click — фиксируем
    column.addEventListener('click', () => {
      activeColumn = column;
      setActiveColumn(column);
    });

  });
