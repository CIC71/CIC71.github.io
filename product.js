// Preferiti: salvataggio e aggiornamento visivo
function getPreferiti() {
  return JSON.parse(localStorage.getItem("preferiti")) || [];
}

function setPreferiti(preferiti) {
  localStorage.setItem("preferiti", JSON.stringify(preferiti));
}

function togglePreferito(id) {
  let preferiti = getPreferiti();
  const index = preferiti.indexOf(id);

  if (index === -1) {
    preferiti.push(id); // Aggiungi
  } else {
    preferiti.splice(index, 1); // Rimuovi
  }

  setPreferiti(preferiti);
  aggiornaCuori();
}

function aggiornaCuori() {
  const preferiti = getPreferiti();

  document.querySelectorAll('[id^="cuore-"]').forEach(btn => {
    const id = parseInt(btn.id.replace("cuore-", ""));
    if (preferiti.includes(id)) {
      btn.classList.add("text-red-600");
      btn.classList.remove("text-gray-400");
    } else {
      btn.classList.add("text-gray-400");
      btn.classList.remove("text-red-600");
    }
  });
}

document.addEventListener("DOMContentLoaded", aggiornaCuori);


function mostraFeedback(messaggio) {
  const feedback = document.createElement("div");
  feedback.textContent = messaggio;
  feedback.className = "fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50 transition-opacity duration-300";
  document.body.appendChild(feedback);

  setTimeout(() => {
    feedback.classList.add("opacity-0");
    setTimeout(() => feedback.remove(), 300);
  }, 2000);
}

