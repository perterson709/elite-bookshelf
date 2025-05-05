const books = [
  { title: "Quantum Computation", category: "Quantum", summary: "The gold standard of quantum algorithms.", link: "#" },
  { title: "Superintelligence", category: "AI", summary: "Masterpiece on AGI future risks.", link: "#" },
  { title: "The Body Keeps the Score", category: "Psych", summary: "Trauma, neuroplasticity, and recovery.", link: "#" },
  { title: "Deep Learning", category: "AI", summary: "MIT-level neural networks explained.", link: "#" },
  { title: "Sapiens", category: "Anthro", summary: "A sweeping view of human evolution.", link: "#" },
  { title: "The Feynman Lectures", category: "Physics", summary: "Legendary physics clarity by Feynman.", link: "#" }
];

const container = document.getElementById("bookshelf");
const searchInput = document.getElementById("searchInput");
const toggle = document.getElementById("darkModeToggle");

function renderBooks(filter = "") {
  container.innerHTML = "";
  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(filter.toLowerCase()) ||
    book.category.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(book => {
    const div = document.createElement("div");
    div.className = "book";
    div.innerHTML = `
      <h2>${book.title}</h2>
      <p><strong>Category:</strong> ${book.category}</p>
      <p>${book.summary}</p>
      <a href="${book.link}" target="_blank">Read</a>
    `;
    container.appendChild(div);
  });
}

searchInput.addEventListener("input", e => {
  renderBooks(e.target.value);
});

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

renderBooks();
