const FILMS = [
  {
    id: "sherlock-jr",
    title: "Sherlock Jr.",
    year: 1924,
    runtime: "45 min",
    people: "Buster Keaton",
    art: "art-door",
    blurb: "A movie projectionist dreams he can step into the picture and solve the case. Short, clever, and built on movie magic."
  },
  {
    id: "the-general",
    title: "The General",
    year: 1926,
    runtime: "78 min",
    people: "Buster Keaton",
    art: "art-train",
    blurb: "A railroad engineer and his locomotive chase through the Civil War. Famous for real trains and huge practical gags."
  },
  {
    id: "steamboat",
    title: "Steamboat Bill, Jr.",
    year: 1928,
    runtime: "70 min",
    people: "Buster Keaton",
    art: "art-house",
    blurb: "A storm, a steamboat, and the house-front that falls around Keaton — one of the most famous shots in comedy."
  },
  {
    id: "safety-last",
    title: "Safety Last!",
    year: 1923,
    runtime: "70 min",
    people: "Harold Lloyd",
    art: "art-clock",
    blurb: "A clerk climbs a department-store clock tower to get ahead. The hanging-clock image became comedy history."
  },
  {
    id: "the-kid",
    title: "The Kid",
    year: 1921,
    runtime: "68 min",
    people: "Charlie Chaplin",
    art: "art-creek",
    blurb: "Chaplin’s tramp looks after a foundling. Sweet, funny, and one of the first features to mix slapstick with heart."
  },
  {
    id: "one-week",
    title: "One Week",
    year: 1920,
    runtime: "19 min",
    people: "Buster Keaton",
    art: "art-general",
    blurb: "Newlyweds build a mail-order house. Everything goes sideways, including the house itself."
  }
];

const screens = {
  home: document.getElementById("screen-home"),
  search: document.getElementById("screen-search"),
  list: document.getElementById("screen-list"),
  detail: document.getElementById("screen-detail")
};

const listKey = "lumen-list";
let lastScreen = "home";

function getList() {
  try { return JSON.parse(localStorage.getItem(listKey) || "[]"); }
  catch { return []; }
}

function setList(ids) {
  localStorage.setItem(listKey, JSON.stringify(ids));
}

function show(name) {
  Object.values(screens).forEach((el) => el.classList.remove("active"));
  screens[name].classList.add("active");
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === name);
  });
}

function filmCard(film) {
  return `<button class="card" data-id="${film.id}">
    <div class="card-art ${film.art}"></div>
  </button>`;
}

function resultRow(film) {
  return `<button class="result" data-id="${film.id}">
    <div class="thumb card-art ${film.art}"></div>
    <div>
      <h4>${film.title}</h4>
      <p>${film.year} · ${film.runtime} · ${film.people}</p>
    </div>
  </button>`;
}

function openFilm(id) {
  const film = FILMS.find((f) => f.id === id);
  if (!film) return;
  lastScreen = document.querySelector(".screen.active").id.replace("screen-", "");
  if (lastScreen === "detail") lastScreen = "home";
  const saved = getList().includes(film.id);
  document.getElementById("detail").innerHTML = `
    <article class="detail">
      <div class="detail-art ${film.art}"></div>
      <h2>${film.title}</h2>
      <p>${film.year} · ${film.runtime} · ${film.people}</p>
      <p style="margin-top:12px">${film.blurb}</p>
      <button class="btn" id="saveBtn">${saved ? "Remove from list" : "Add to list"}</button>
    </article>`;
  document.getElementById("saveBtn").onclick = () => {
    const ids = getList();
    const next = ids.includes(film.id) ? ids.filter((x) => x !== film.id) : [...ids, film.id];
    setList(next);
    openFilm(film.id);
  };
  show("detail");
}

function renderHome() {
  document.getElementById("comic-row").innerHTML = FILMS.map(filmCard).join("");
}

function renderSearch(term = "") {
  const q = term.trim().toLowerCase();
  const hits = FILMS.filter((f) =>
    `${f.title} ${f.year} ${f.people} ${f.blurb}`.toLowerCase().includes(q)
  );
  document.getElementById("search-results").innerHTML = hits.map(resultRow).join("") || `<p class="muted">No matches.</p>`;
}

function renderList() {
  const ids = getList();
  const items = FILMS.filter((f) => ids.includes(f.id));
  document.getElementById("list-empty").style.display = items.length ? "none" : "block";
  document.getElementById("list-results").innerHTML = items.map(resultRow).join("");
}

document.getElementById("comic-row").addEventListener("click", (e) => {
  const card = e.target.closest("[data-id]");
  if (card) openFilm(card.dataset.id);
});

document.querySelector(".hero").addEventListener("click", () => openFilm("sherlock-jr"));

document.getElementById("q").addEventListener("input", (e) => renderSearch(e.target.value));

document.getElementById("list-results").addEventListener("click", (e) => {
  const row = e.target.closest("[data-id]");
  if (row) openFilm(row.dataset.id);
});

document.getElementById("search-results").addEventListener("click", (e) => {
  const row = e.target.closest("[data-id]");
  if (row) openFilm(row.dataset.id);
});

document.getElementById("backBtn").onclick = () => {
  if (lastScreen === "list") renderList();
  show(lastScreen === "detail" ? "home" : lastScreen);
};

document.getElementById("searchToggle").onclick = () => {
  show("search");
  document.getElementById("q").focus();
};

document.querySelectorAll(".tab").forEach((tab) => {
  tab.onclick = () => {
    const name = tab.dataset.tab;
    if (name === "search") renderSearch(document.getElementById("q").value);
    if (name === "list") renderList();
    show(name);
  };
});

renderHome();
renderSearch();
renderList();
