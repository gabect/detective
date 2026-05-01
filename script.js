(function () {
  const fields = document.querySelectorAll('[data-save]');
  if (fields.length) {
    fields.forEach((field) => {
      const key = 'detective_' + field.getAttribute('data-save');
      const saved = localStorage.getItem(key);
      if (saved) field.value = saved;
      field.addEventListener('input', () => {
        localStorage.setItem(key, field.value);
      });
    });
  }

  const printBtn = document.getElementById('printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }
})();
