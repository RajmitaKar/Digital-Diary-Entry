let save = [];

function saveEntry() {
  const date = document.getElementById('entrydate').value;
  const title = document.getElementById('entrytitle').value;
  const text = document.getElementById('entertext').value;

  if (title && text) {
    const entry = {
      date: date || 'No Date',
      title: title.trim(),
      text: text.trim()
    };

    save.push(entry);
    alert('✅ Diary entry saved!');

    // Clear the fields after saving
    document.getElementById('entrydate').value = '';
    document.getElementById('entrytitle').value = '';
    document.getElementById('entertext').value = '';
  } else {
    alert('⚠️ Please fill in both the title and thoughts before saving.');
  }
}
function applyMoodTheme() {
  const mood = document.getElementById('mood').value;
  const body = document.body;

  switch (mood) {
    case 'happy':
       body.style.backgroundColor = '#ffffff'; 
      body.style.backgroundImage = "url('happy2.gif')";
      break;
    case 'sad':
      body.style.backgroundColor = '#030303ff'; // light steel blue
      body.style.backgroundImage = "url('sad.gif')";
      break;
    case 'angry':
         body.style.backgroundColor = '#030303ff';
         body.style.backgroundImage = "url('angry.gif')";
       // light coral
      break;
    case 'calm':
      body.style.backgroundColor = '#ffffff'; // light cyan
      body.style.backgroundImage = "url('peaceful.gif')";
      break;
    case 'love':
       body.style.backgroundColor = '#ffffff';
       body.style.backgroundImage = "url('inlove.gif')";
      break;
    default:
      body.style.backgroundColor = '#ffffff'; // white
  }
}