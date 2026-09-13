const FILMS = [
  { id: "sherlock-jr", title: "Sherlock Jr.", year: 1924, runtime: "45 min", people: "Buster Keaton", art: "art-door", collection: "comic", archiveId: "sherlockjr1924_201909", blurb: "A movie projectionist dreams he can step into the picture and solve the case. Short, clever, and built on movie magic." },
  { id: "the-general", title: "The General", year: 1926, runtime: "78 min", people: "Buster Keaton", art: "art-train", collection: "comic", archiveId: "BusterKeatonTheGeneral1926", blurb: "A railroad engineer and his locomotive chase through the countryside. Famous for real trains and huge practical gags." },
  { id: "steamboat", title: "Steamboat Bill, Jr.", year: 1928, runtime: "70 min", people: "Buster Keaton", art: "art-house", collection: "comic", archiveId: "steamboat-bill-jr.-1928-by-buster-keaton", blurb: "A storm, a steamboat, and the house-front that falls around Keaton — one of the most famous shots in comedy." },
  { id: "safety-last", title: "Safety Last!", year: 1923, runtime: "70 min", people: "Harold Lloyd", art: "art-clock", collection: "comic", archiveId: "safety-last-1923", blurb: "A clerk climbs a department-store clock tower to get ahead. The hanging-clock image became comedy history." },
  { id: "the-kid", title: "The Kid", year: 1921, runtime: "68 min", people: "Charlie Chaplin", art: "art-creek", collection: "comic", archiveId: "TheKid1921CharlieChaplin", blurb: "Chaplin’s tramp looks after a foundling. Sweet, funny, and one of the first features to mix slapstick with heart." },
  { id: "one-week", title: "One Week", year: 1920, runtime: "19 min", people: "Buster Keaton", art: "art-general", collection: "comic", archiveId: "OneWeek", blurb: "Newlyweds build a mail-order house. Everything goes sideways, including the house itself." },
  { id: "gold-rush", title: "The Gold Rush", year: 1925, runtime: "95 min", people: "Charlie Chaplin", art: "art-gold", collection: "comic", archiveId: "TheGoldRush", blurb: "A hopeful prospector looks for gold in the Klondike and finds friendship, dance-hall music, and a cabin on a cliff." },
  { id: "navigator", title: "The Navigator", year: 1924, runtime: "59 min", people: "Buster Keaton", art: "art-boat", collection: "comic", archiveId: "TheNavigator1924", blurb: "Two people adrift on an empty ocean liner invent breakfast, boats, and bravery one gag at a time." },
  { id: "freshman", title: "The Freshman", year: 1925, runtime: "76 min", people: "Harold Lloyd", art: "art-field", collection: "comic", archiveId: "TheFreshman1925", blurb: "A new college student wants to be the most popular kid on campus and ends up on the football field." },
  { id: "seven-chances", title: "Seven Chances", year: 1925, runtime: "56 min", people: "Buster Keaton", art: "art-city", collection: "comic", archiveId: "SevenChances", blurb: "A deadline, a mix-up, and a hillside of rolling boulders. Keaton turns a race against the clock into a chase." },
  { id: "cops", title: "Cops", year: 1922, runtime: "18 min", people: "Buster Keaton", art: "art-city", collection: "comic", archiveId: "Cops1922", blurb: "A short city chase packed with ladders, wagons, and perfect timing." },
  { id: "thief-bagdad", title: "The Thief of Bagdad", year: 1924, runtime: "155 min", people: "Douglas Fairbanks", art: "art-moon", collection: "adventure", archiveId: "TheThiefOfBagdad1924", blurb: "A clever thief seeks a flying carpet, a crystal ball, and the courage to become a hero." },
  { id: "zorro", title: "The Mark of Zorro", year: 1920, runtime: "90 min", people: "Douglas Fairbanks", art: "art-sword", collection: "adventure", archiveId: "TheMarkOfZorro1920", blurb: "A smiling swordsman leaves his mark and helps a town that needs a champion." },
  { id: "trip-moon", title: "A Trip to the Moon", year: 1902, runtime: "13 min", people: "Georges Méliès", art: "art-moon", collection: "adventure", archiveId: "le-voyage-dans-la-lune-1902-georges-melies", blurb: "Professors fire a cannon-shell at the Moon and land in a dream of stars, caves, and stage magic." },
  { id: "hospitality", title: "Our Hospitality", year: 1923, runtime: "73 min", people: "Buster Keaton", art: "art-house", collection: "adventure", archiveId: "OurHospitality", blurb: "A train trip south, old family rules, and a waterfall rescue. Keaton’s quietest adventure still surprises." },
  { id: "cameraman", title: "The Cameraman", year: 1928, runtime: "76 min", people: "Buster Keaton", art: "art-door", collection: "adventure", archiveId: "TheCameraman1928", blurb: "A tintype photographer tries newsreels, a baseball park, and a city full of pictures." },
  { id: "speedy", title: "Speedy", year: 1928, runtime: "86 min", people: "Harold Lloyd", art: "art-city", collection: "adventure", archiveId: "Speedy1928", blurb: "A New York odd-job dreamer helps save the last horse-drawn streetcar." },
  { id: "lantern-express", title: "The Lantern Express", year: "AI story", runtime: "12 min read", people: "Lumen Tales", art: "art-lantern", collection: "story", blurb: "Mina kept a lantern on the windowsill even though the glass was cracked and the flame was only a coin of gold. She told herself it was for moths and late homework. Really it was for the train.\n\nEvery dusk the Lantern Express appeared at the end of Willow Street, quiet as a held breath. It was made of dark wood and brass, and it stopped only for children who carried a kind light. Mina had watched it for weeks. Tonight she lifted her lantern, stepped onto the platform of packed earth, and the door folded open like a book.\n\nInside, seats glowed with other small lamps: a jam-jar candle, a bike light wrapped in yellow paper, a shell that shone as if it remembered the sun. A conductor in a too-big coat nodded at Mina’s cracked glass. “Light is light,” he said. “We run on what people are willing to share.”\n\nThe train rolled through hills that were not on any map Mina knew. Stations had names like Last Kind Word and The Place You Almost Gave Up. At each stop someone boarded with a dim lamp. Mina learned the rule by watching. If you hid your flame, the car grew colder. If you held it out, even a little, every other lantern brightened.\n\nA boy sat across from her with a lantern so faint it looked empty. “I used mine up,” he whispered. Mina did not know how to fix that, so she set her cracked lantern on the floor between them. The coin of gold became a small sun. The boy’s lamp caught, shy at first, then steady.\n\nNear midnight the Express climbed a ridge of clouds. The conductor walked the aisle collecting sparks in a glass cup. “Last station is always home,” he said. “But home is easier to find when the cup is full.” Mina added a spark. It did not make her lantern weaker. It made the rails shine.\n\nWhen Willow Street returned, the wooden train faded like steam. Mina’s lantern was still cracked. The flame, though, sat taller. She left it on the sill for whoever might need a platform tomorrow, and she slept as if the whole house were traveling quietly toward morning." },
  { id: "clockwork-forest", title: "Clockwork Forest", year: "AI story", runtime: "13 min read", people: "Lumen Tales", art: "art-forest", collection: "story", blurb: "Rowan noticed first that lunch lasted too long and recess ended too soon. Then the kitchen clock began skipping. Then the school bell rang in the middle of a sentence. Time, in their town, had started to wander.\n\nAt the edge of the fields stood the Clockwork Forest, where bark grew in rings like watch faces and leaves clicked when the wind passed through. Grown-ups said not to follow the ticking. Rowan followed it anyway, because a brass bird the size of a fist kept landing on the fence and pointing with its beak.\n\nUnder the trees, minutes hid like beetles. Rowan found a lost quarter-hour under moss, a whole Tuesday tucked in a hollow log, and a recess that had rolled into a stream and was trying to float home. The brass bird hopped ahead until the ticking stopped.\n\nIn a clearing stood the Great Oak. Its trunk was a tower of gears. One large key stuck out of the bark, frozen halfway through a turn. “It jammed when people stopped keeping promises,” said a voice from the branches. It was only the forest, speaking the way old clocks speak: patient, a little dry.\n\nRowan put both hands on the key. It would not move for force. It moved when Rowan thought of true things: the homework finished after dinner, the apology given to a friend, the walk home taken with a younger cousin. The key turned one honest click. Gears shivered. The lost minutes stood up from the moss and hurried back toward town like bright insects.\n\nThe brass bird became still, then ordinary, then a pinecone. Rowan walked out of the forest with oak-dust on their sleeves. At home the kitchen clock agreed with the sun. Recess was the right length. Lunch did not last forever, which Rowan decided was fair.\n\nThat night Rowan wound the small clock by the bed and whispered thank you to the trees. Far away, the Great Oak kept a steady tock, holding every hour in its proper pocket." },
  { id: "moonlight-mechanic", title: "Moonlight Mechanic", year: "AI story", runtime: "11 min read", people: "Lumen Tales", art: "art-moon", collection: "story", blurb: "Sol was the sort of kid who fixed things other people did not notice: a loose chair-leg, a backpack zipper, the squeak in the library cart. So when the Moon’s smile slipped sideways, Sol was the first to frown at the sky.\n\nIt happened on a Tuesday. The Moon looked like a plate that had been bumped. Shadows in the yard pointed the wrong way. Cats complained. Sol packed a tiny wrench, a handkerchief, and a sandwich, then waited on the roof.\n\nA ladder of starlight lowered itself with a polite creak, as if it had been hoping someone small would come. Sol climbed. Space, up close, smelled like cold metal and oranges. The Moon was a workshop the size of a town, full of silver bolts and quiet machinery that made tides and night-lights and the feeling of almost-sleep.\n\nA hatch on the smile hung open. One bolt, no bigger than a button, had backed out and was rolling in a shallow crater like a lost coin. Sol sat down, ate half the sandwich so their hands would be steady, and fitted the wrench.\n\nRighty-tighty, Sol whispered, the way Granddad had taught. The bolt turned. The smile lined up. Across the dark, Earth’s oceans settled into their old rhythm. Sol tightened one extra quarter-turn, then stopped, because too tight is also a kind of broken.\n\nOn the way down, stars brushed Sol’s sleeves like friendly moths. The ladder pulled itself back into the sky. In the yard the shadows pointed home. Sol left the wrench on the windowsill in case the Moon needed a mechanic again.\n\nThe next night the smile was straight. Sol slept hard and dreamed of a whole toolbox orbiting quietly, each tool labeled with a job: tides, dreams, the silver edge of clouds. In the morning the sandwich crust was still in a pocket, proof that some repairs are real." },
  { id: "paper-airship", title: "The Paper Airship", year: "AI story", runtime: "12 min read", people: "Lumen Tales", art: "art-paper", collection: "story", blurb: "Irie folded the first panel from a math worksheet. Sam added a page from a story that had already been loved twice. Together they made an airship the size of a kitchen table, taped at the seams with patience and a little too much stickiness.\n\n“It won’t fly,” said Sam, who liked facts.\n\n“It might,” said Irie, who liked try-again.\n\nThey carried it to the hill behind the library. The breeze checked the paper, found it honest, and lifted the ship as if it had been waiting for homework to become useful. Irie and Sam scrambled into the basket—really a laundry hamper—and the town shrank to a map of roofs.\n\nBelow them, the librarian stood in the doorway with a crate of books that had missed their houses. “If you’re going that way,” she called, not looking surprised enough. They lowered a ribbon. She clipped the crate on.\n\nThe airship drifted from window to window. A book about whales landed on a porch where a kid had been waiting. A book of jokes tapped a glass until a grandmother opened it and laughed at the first page. A cookbook found a kitchen that had been serving the same soup for a week.\n\nWind grew tired near the water tower. The paper began to soften. “We should land,” Sam said. Irie nodded. They steered for the library lawn and touched down so gently the daisies barely noticed.\n\nThe ship sighed into a pile of pages. Irie stacked them. Sam smoothed the tape. The librarian brought two cups of cocoa and stamped each worksheet RETURNED, which made no sense and also felt correct.\n\nThat night Irie put one folded corner on the desk. “For next time,” she said. Sam, who liked facts, admitted a new one: paper can hold a town if two friends hold the other side." },
  { id: "silver-map", title: "The Silver Map", year: "AI story", runtime: "14 min read", people: "Lumen Tales", art: "art-map", collection: "story", blurb: "Tess found the map in a tin of buttons. It looked blank in daylight. Under the moon it showed streets in thin silver, but only the streets Tess had already walked with courage.\n\nThe first night it showed her house, the corner store, and the short path to school. That was all. Tess was insulted. She had been plenty of places.\n\n“Brave is different from far,” said her brother, who was reading on the stairs and pretending not to be interested.\n\nThe next afternoon Tess helped Mr. Cole carry groceries up three flights because the elevator was sulking. It was not a quest. It was heavy bags and a slow joke about tomatoes. That night a new line appeared on the map: a narrow lane behind the apartments, ending in a gate Tess had never seen.\n\nShe went. The gate opened on a garden no taller than her shoulder, hidden between buildings, growing mint and volunteer sunflowers. A painted sign said FOR WHOEVER BROUGHT THE BAGS. Tess sat on an upturned bucket and ate a mint leaf. The map, in her pocket, warmed like a small animal.\n\nMore lines came after small brave things: speaking up when a teammate was left out, going back to pay for a pencil she had forgotten, sitting with the new kid at lunch without making a speech about it. The silver streets knit together until they made a city inside the city.\n\nOn the last night of the month the map drew a square in the garden and labeled it YOU ARE HERE, which Tess already knew, and also YOU CAN GO FARTHER, which she decided was an invitation, not a test.\n\nShe left the tin of buttons on the garden wall with a note: Maps work better when shared. In the morning the tin was empty except for one button shaped like a moon. The map still showed her streets. It had room, now, for someone else’s." },
  { id: "quiet-orchestra", title: "The Quiet Orchestra", year: "AI story", runtime: "12 min read", people: "Lumen Tales", art: "art-orchestra", collection: "story", blurb: "Eli could not sleep, which was how he heard the instruments wake. It started with a single violin note from the music room at school, traveling across the dark field as if the night were a hallway.\n\nHe took a wooden spoon from the kitchen, because a spoon is a kind of baton if you believe it is, and he walked to the school. The door was unlocked in the way of places that want a conductor.\n\nChairs had arranged themselves. The tuba breathed like a large kind dog. Recorders lined up with surprising dignity. The piano lid lifted an inch and waited.\n\nEli had been told he was not musical. He could not read the forest of notes. He could, however, listen. He raised the spoon. The orchestra watched him the way shy kids watch a kind teacher.\n\nHe did not demand a march. He asked, by moving slowly, for a lullaby. The instruments played only while he listened kindly. If he got impatient, the sound thinned. If he smiled at the triangle for trying, the triangle found a true ping.\n\nThe music slipped out the windows and into open bedrooms. Dogs stopped barking. A baby who had been practicing a protest chose instead to yawn. Eli’s own eyelids grew heavy, which was the point.\n\nAt the last measure he whispered, “Thank you,” and the chairs scuffed back into ordinary piles. He left the spoon on the piano, a promise and a joke.\n\nHome again, Eli slept. In the morning the music teacher found the spoon and a single drop of dew on the piano keys. She did not ask questions. She began class with a soft note and watched the room grow quieter, which is sometimes how an orchestra starts." }
];

const screens = {
  home: document.getElementById("screen-home"),
  search: document.getElementById("screen-search"),
  list: document.getElementById("screen-list"),
  detail: document.getElementById("screen-detail"),
  player: document.getElementById("screen-player")
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
  Object.values(screens).forEach((el) => { if (el) el.classList.remove("active"); });
  if (screens[name]) screens[name].classList.add("active");
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

function playFilm(film) {
  document.getElementById("player-title").textContent = film.title;
  document.getElementById("player-frame").src = `https://archive.org/embed/${film.archiveId}`;
  show("player");
}

function openFilm(id) {
  const film = FILMS.find((f) => f.id === id);
  if (!film) return;
  lastScreen = document.querySelector(".screen.active").id.replace("screen-", "");
  if (lastScreen === "detail" || lastScreen === "player") lastScreen = "home";
  const saved = getList().includes(film.id);
  const label = film.collection === "story" ? (saved ? "Remove from list" : "Save story") : (saved ? "Remove from list" : "Add to list");
  const watch = film.archiveId
    ? `<button class="btn" id="watchBtn">Watch in app</button>`
    : "";
  document.getElementById("detail").innerHTML = `
    <article class="detail">
      <div class="detail-art ${film.art}"></div>
      <h2>${film.title}</h2>
      <p>${film.year} · ${film.runtime} · ${film.people}</p>
      ${film.blurb.split("\n\n").map((p) => `<p>${p}</p>`).join("")}
      ${watch}
      <button class="btn" id="saveBtn">${label}</button>
    </article>`;
  const watchBtn = document.getElementById("watchBtn");
  if (watchBtn) watchBtn.onclick = () => playFilm(film);
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

document.getElementById("playerBack").onclick = () => show("detail");

document.getElementById("searchToggle").onclick = () => {
  show("search");
  document.getElementById("q").focus();
};

document.querySelectorAll(".tab").forEach((tab) => {
  tab.onclick = () => {
    const name = tab.dataset.tab;
    if (name === "search") renderSearch(document.getElementById("q").value);
    if (name === "list") renderList();
    const frame = document.getElementById("player-frame");
    if (frame) frame.src = "";
    show(name);
  };
});

renderHome();
renderSearch();
renderList();
