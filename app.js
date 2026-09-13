const FILMS = [
  {
    id: "sherlock-jr",
    title: "Sherlock Jr.",
    year: 1924,
    runtime: "45 min",
    people: "Buster Keaton",
    art: "art-door",
    collection: "comic",
    blurb: "A movie projectionist dreams he can step into the picture and solve the case. Short, clever, and built on movie magic."
  },
  {
    id: "the-general",
    title: "The General",
    year: 1926,
    runtime: "78 min",
    people: "Buster Keaton",
    art: "art-train",
    collection: "comic",
    blurb: "A railroad engineer and his locomotive chase through the countryside. Famous for real trains and huge practical gags."
  },
  {
    id: "steamboat",
    title: "Steamboat Bill, Jr.",
    year: 1928,
    runtime: "70 min",
    people: "Buster Keaton",
    art: "art-house",
    collection: "comic",
    blurb: "A storm, a steamboat, and the house-front that falls around Keaton — one of the most famous shots in comedy."
  },
  {
    id: "safety-last",
    title: "Safety Last!",
    year: 1923,
    runtime: "70 min",
    people: "Harold Lloyd",
    art: "art-clock",
    collection: "comic",
    blurb: "A clerk climbs a department-store clock tower to get ahead. The hanging-clock image became comedy history."
  },
  {
    id: "the-kid",
    title: "The Kid",
    year: 1921,
    runtime: "68 min",
    people: "Charlie Chaplin",
    art: "art-creek",
    collection: "comic",
    blurb: "Chaplin’s tramp looks after a foundling. Sweet, funny, and one of the first features to mix slapstick with heart."
  },
  {
    id: "one-week",
    title: "One Week",
    year: 1920,
    runtime: "19 min",
    people: "Buster Keaton",
    art: "art-general",
    collection: "comic",
    blurb: "Newlyweds build a mail-order house. Everything goes sideways, including the house itself."
  },
  {
    id: "gold-rush",
    title: "The Gold Rush",
    year: 1925,
    runtime: "95 min",
    people: "Charlie Chaplin",
    art: "art-gold",
    collection: "comic",
    blurb: "A hopeful prospector looks for gold in the Klondike and finds friendship, dance-hall music, and a cabin on a cliff."
  },
  {
    id: "navigator",
    title: "The Navigator",
    year: 1924,
    runtime: "59 min",
    people: "Buster Keaton",
    art: "art-boat",
    collection: "comic",
    blurb: "Two people adrift on an empty ocean liner invent breakfast, boats, and bravery one gag at a time."
  },
  {
    id: "freshman",
    title: "The Freshman",
    year: 1925,
    runtime: "76 min",
    people: "Harold Lloyd",
    art: "art-field",
    collection: "comic",
    blurb: "A new college student wants to be the most popular kid on campus and ends up on the football field."
  },
  {
    id: "seven-chances",
    title: "Seven Chances",
    year: 1925,
    runtime: "56 min",
    people: "Buster Keaton",
    art: "art-city",
    collection: "comic",
    blurb: "A deadline, a mix-up, and a hillside of rolling boulders. Keaton turns a race against the clock into a chase."
  },
  {
    id: "cops",
    title: "Cops",
    year: 1922,
    runtime: "18 min",
    people: "Buster Keaton",
    art: "art-city",
    collection: "comic",
    blurb: "A short city chase packed with ladders, wagons, and perfect timing."
  },
  {
    id: "thief-bagdad",
    title: "The Thief of Bagdad",
    year: 1924,
    runtime: "155 min",
    people: "Douglas Fairbanks",
    art: "art-moon",
    collection: "adventure",
    blurb: "A clever thief seeks a flying carpet, a crystal ball, and the courage to become a hero."
  },
  {
    id: "zorro",
    title: "The Mark of Zorro",
    year: 1920,
    runtime: "90 min",
    people: "Douglas Fairbanks",
    art: "art-sword",
    collection: "adventure",
    blurb: "A smiling swordsman leaves his mark and helps a town that needs a champion."
  },
  {
    id: "trip-moon",
    title: "A Trip to the Moon",
    year: 1902,
    runtime: "13 min",
    people: "Georges Méliès",
    art: "art-moon",
    collection: "adventure",
    blurb: "Professors fire a cannon-shell at the Moon and land in a dream of stars, caves, and stage magic."
  },
  {
    id: "hospitality",
    title: "Our Hospitality",
    year: 1923,
    runtime: "73 min",
    people: "Buster Keaton",
    art: "art-house",
    collection: "adventure",
    blurb: "A train trip south, old family rules, and a waterfall rescue. Keaton’s quietest adventure still surprises."
  },
  {
    id: "cameraman",
    title: "The Cameraman",
    year: 1928,
    runtime: "76 min",
    people: "Buster Keaton",
    art: "art-door",
    collection: "adventure",
    blurb: "A tintype photographer tries newsreels, a baseball park, and a city full of pictures."
  },
  {
    id: "speedy",
    title: "Speedy",
    year: 1928,
    runtime: "86 min",
    people: "Harold Lloyd",
    art: "art-city",
    collection: "adventure",
    blurb: "A New York odd-job dreamer helps save the last horse-drawn streetcar."
  },
  {
    id: "lantern-express",
    title: "The Lantern Express",
    year: "AI story",
    runtime: "6 min read",
    people: "Lumen Tales",
    art: "art-lantern",
    collection: "story",
    blurb: "At dusk a wooden train appears only for kids who carry a kind light. Mina boards with a cracked lantern and learns the express runs on shared glow: every passenger adds a spark, and the last station is always home."
  },
  {
    id: "clockwork-forest",
    title: "Clockwork Forest",
    year: "AI story",
    runtime: "7 min read",
    people: "Lumen Tales",
    art: "art-forest",
    collection: "story",
    blurb: "Trees tick like clocks and lost minutes hide under moss. Rowan follows a brass bird to a clearing where time has jammed. Winding the great oak one honest turn sends every missing hour back where it belongs."
  },
  {
    id: "moonlight-mechanic",
    title: "Moonlight Mechanic",
    year: "AI story",
    runtime: "5 min read",
    people: "Lumen Tales",
    art: "art-moon",
    collection: "story",
    blurb: "The Moon’s smile slips sideways. A shy repair kid named Sol climbs a ladder of starlight with a tiny wrench, tightens one silver bolt, and the night looks right again."
  },
  {
    id: "paper-airship",
    title: "The Paper Airship",
    year: "AI story",
    runtime: "6 min read",
    people: "Lumen Tales",
    art: "art-paper",
    collection: "story",
    blurb: "Folded from homework and hope, an airship lifts two friends over their town. They deliver lost library books to the right windows before the breeze asks the paper to rest."
  },
  {
    id: "silver-map",
    title: "The Silver Map",
    year: "AI story",
    runtime: "8 min read",
    people: "Lumen Tales",
    art: "art-map",
    collection: "story",
    blurb: "A map drawn in moonlight only shows places you have been brave. Tess draws her first line after helping a neighbor, and a new street appears that leads to a hidden garden."
  },
  {
    id: "quiet-orchestra",
    title: "The Quiet Orchestra",
    year: "AI story",
    runtime: "5 min read",
    people: "Lumen Tales",
    art: "art-orchestra",
    collection: "story",
    blurb: "Instruments wake at midnight but play only if someone listens kindly. A boy who cannot sleep conducts with a wooden spoon, and the town dreams in the same gentle key."
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
  const label = film.collection === "story" ? (saved ? "Remove from list" : "Save story") : (saved ? "Remove from list" : "Add to list");
  document.getElementById("detail").innerHTML = `
    <article class="detail">
      <div class="detail-art ${film.art}"></div>
      <h2>${film.title}</h2>
      <p>${film.year} · ${film.runtime} · ${film.people}</p>
      <p style="margin-top:12px">${film.blurb}</p>
      <button class="btn" id="saveBtn">${label}</button>
    </article>`;
  document.getElementById("saveBtn").onclick = () => {
    const ids = getList();
    const next = ids.includes(film.id) ? ids.filter((x) => x !== film.id) : [...ids, film.id];
    setList(next);
    openFilm(film.id);
  };
  show("detail");
}

function rowBy(collection) {
  return FILMS.filter((f) => f.collection === collection).map(filmCard).join("");
}

function renderHome() {
  document.getElementById("comic-row").innerHTML = rowBy("comic");
  const adventure = document.getElementById("adventure-row");
  const stories = document.getElementById("story-row");
  if (adventure) adventure.innerHTML = rowBy("adventure");
  if (stories) stories.innerHTML = rowBy("story");
}

function renderSearch(term = "") {
  const q = term.trim().toLowerCase();
  const hits = FILMS.filter((f) =>
    `${f.title} ${f.year} ${f.people} ${f.blurb} ${f.collection}`.toLowerCase().includes(q)
  );
  document.getElementById("search-results").innerHTML = hits.map(resultRow).join("") || `<p class="muted">No matches.</p>`;
}

function renderList() {
  const ids = getList();
  const items = FILMS.filter((f) => ids.includes(f.id));
  document.getElementById("list-empty").style.display = items.length ? "none" : "block";
  document.getElementById("list-results").innerHTML = items.map(resultRow).join("");
}

function bindRow(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("click", (e) => {
    const card = e.target.closest("[data-id]");
    if (card) openFilm(card.dataset.id);
  });
}

bindRow("comic-row");
bindRow("adventure-row");
bindRow("story-row");

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
