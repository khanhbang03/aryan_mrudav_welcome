// Basic interactivity: send virtual hug and handle guestbook
document.addEventListener('DOMContentLoaded', ()=>{
  const buttons = document.querySelectorAll('.btn[data-name]');
  buttons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const name = btn.dataset.name;
      // Simple friendly animation/alert
      alert(`A warm virtual hug sent to ${name} 🤗`);
    });
  });

  const form = document.getElementById('noteForm');
  const guestbook = document.getElementById('guestbook');
  const clear = document.getElementById('clear');

  function addEntry(author, text){
    const div = document.createElement('div');
    div.className = 'entry';
    div.textContent = `${author}: ${text}`;
    guestbook.prepend(div);
  }

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.name.value.trim();
    const note = form.note.value.trim();
    if(!name || !note) return;
    addEntry(name, note);
    form.reset();
    form.name.focus();
  });

  clear.addEventListener('click', ()=>{
    form.reset();
    form.name.focus();
  });
});