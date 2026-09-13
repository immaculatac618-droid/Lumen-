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
  { id: "circus", title: "The Circus", year: 1928, runtime: "70 min", people: "Charlie Chaplin", art: "art-field", collection: "comic", archiveId: "TheCircus1928", blurb: "A tramp stumbles into a circus and becomes the act people came to see." },
  { id: "immigrants", title: "The Immigrant", year: 1917, runtime: "24 min", people: "Charlie Chaplin", art: "art-boat", collection: "comic", archiveId: "TheImmigrant1917", blurb: "A short voyage, a rolling dining room, and Chaplin’s gentlest shipboard gags." },
  { id: "dogs-life", title: "A Dog’s Life", year: 1918, runtime: "33 min", people: "Charlie Chaplin", art: "art-creek", collection: "comic", archiveId: "ADogsLife1918", blurb: "A tramp and a stray team up. Funny, warm, and full of small rescues." },
  { id: "pawnshop", title: "The Pawnshop", year: 1916, runtime: "25 min", people: "Charlie Chaplin", art: "art-gold", collection: "comic", archiveId: "ThePawnshop1916", blurb: "Chaplin as a clerk who treats every object like a puzzle and every customer like a scene partner." },
  { id: "rink", title: "The Rink", year: 1916, runtime: "24 min", people: "Charlie Chaplin", art: "art-city", collection: "comic", archiveId: "TheRink1916", blurb: "Waiter by day, roller-skater by lunch break. The floor never stands a chance." },
  { id: "easy-street", title: "Easy Street", year: 1917, runtime: "23 min", people: "Charlie Chaplin", art: "art-city", collection: "comic", archiveId: "EasyStreet1917", blurb: "A new policeman tries to keep a rough street kind. Short and famous." },
  { id: "shoulder-arms", title: "Shoulder Arms", year: 1918, runtime: "36 min", people: "Charlie Chaplin", art: "art-field", collection: "comic", archiveId: "ShoulderArms1918", blurb: "A dream of camp life and clever disguises, told as wartime comedy without the grim parts up front." },
  { id: "playhouse", title: "The Playhouse", year: 1921, runtime: "22 min", people: "Buster Keaton", art: "art-door", collection: "comic", archiveId: "ThePlayhouse1921", blurb: "Keaton plays a whole theater company by himself. Stage magic stacked on stage magic." },
  { id: "boat", title: "The Boat", year: 1921, runtime: "26 min", people: "Buster Keaton", art: "art-boat", collection: "comic", archiveId: "TheBoat1921", blurb: "A homemade boat named Damfino meets the ocean. The ocean wins, politely." },
  { id: "goat", title: "The Goat", year: 1921, runtime: "23 min", people: "Buster Keaton", art: "art-city", collection: "comic", archiveId: "TheGoat1921", blurb: "A wanted poster mix-up sends Keaton running through town at full speed." },
  { id: "neighbors", title: "Neighbors", year: 1920, runtime: "18 min", people: "Buster Keaton", art: "art-house", collection: "comic", archiveId: "Neighbors1920", blurb: "Two families, a fence, and a clothesline that works like a circus ride." },
  { id: "scarecrow", title: "The Scarecrow", year: 1920, runtime: "19 min", people: "Buster Keaton", art: "art-field", collection: "comic", archiveId: "TheScarecrow1920", blurb: "A gadget house, a clever dinner table, and a chase through the fields." },
  { id: "electric-house", title: "The Electric House", year: 1922, runtime: "22 min", people: "Buster Keaton", art: "art-house", collection: "comic", archiveId: "TheElectricHouse1922", blurb: "Keaton wires a mansion. The stairs, pool, and dinner all get opinions." },
  { id: "balloonatic", title: "The Balloonatic", year: 1923, runtime: "22 min", people: "Buster Keaton", art: "art-snow", collection: "comic", archiveId: "TheBalloonatic1923", blurb: "A balloon, a wilderness trip, and camping that does not go by the book." },
  { id: "three-ages", title: "Three Ages", year: 1923, runtime: "63 min", people: "Buster Keaton", art: "art-gold", collection: "comic", archiveId: "ThreeAges1923", blurb: "The same love story told in the Stone Age, Rome, and modern times." },
  { id: "go-west", title: "Go West", year: 1925, runtime: "69 min", people: "Buster Keaton", art: "art-field", collection: "comic", archiveId: "GoWest1925", blurb: "A city kid on a ranch makes friends with a cow named Brown Eyes." },
  { id: "battling-butler", title: "Battling Butler", year: 1926, runtime: "77 min", people: "Buster Keaton", art: "art-city", collection: "comic", archiveId: "BattlingButler1926", blurb: "A mix-up turns a quiet fellow into a supposed boxing champ." },
  { id: "college", title: "College", year: 1927, runtime: "66 min", people: "Buster Keaton", art: "art-field", collection: "comic", archiveId: "College1927", blurb: "A bookish student tries every sport to impress the campus." },
  { id: "girl-shy", title: "Girl Shy", year: 1924, runtime: "82 min", people: "Harold Lloyd", art: "art-paper", collection: "comic", archiveId: "GirlShy1924", blurb: "A shy tailor writes a book and races across town in a famous final chase." },
  { id: "grandmas-boy", title: "Grandma’s Boy", year: 1922, runtime: "60 min", people: "Harold Lloyd", art: "art-house", collection: "comic", archiveId: "GrandmasBoy1922", blurb: "A timid grandson borrows courage from a family story and a lucky charm." },
  { id: "why-worry", title: "Why Worry?", year: 1923, runtime: "63 min", people: "Harold Lloyd", art: "art-gold", collection: "comic", archiveId: "WhyWorry1923", blurb: "A wealthy hypochondriac finds himself in a comic revolution and a new backbone." },
  { id: "hot-water", title: "Hot Water", year: 1924, runtime: "60 min", people: "Harold Lloyd", art: "art-city", collection: "comic", archiveId: "HotWater1924", blurb: "A new car, a turkey, and a family visit that will not stay seated." },
  { id: "kid-brother", title: "The Kid Brother", year: 1927, runtime: "82 min", people: "Harold Lloyd", art: "art-house", collection: "comic", archiveId: "TheKidBrother1927", blurb: "The smallest son of a sheriff family gets his own night to be useful." },
  { id: "never-weaken", title: "Never Weaken", year: 1921, runtime: "19 min", people: "Harold Lloyd", art: "art-clock", collection: "comic", archiveId: "NeverWeaken1921", blurb: "A short city comedy that climbs out onto high steel beams." },
  { id: "high-dizzy", title: "High and Dizzy", year: 1920, runtime: "27 min", people: "Harold Lloyd", art: "art-clock", collection: "comic", archiveId: "HighandDizzy1920", blurb: "Sleepwalking on a hotel ledge. Look down only if you like heights." },
  { id: "robin-hood", title: "Robin Hood", year: 1922, runtime: "143 min", people: "Douglas Fairbanks", art: "art-forest", collection: "adventure", archiveId: "RobinHood1922", blurb: "Sherwood Forest on a giant castle set. Fairbanks swings through a legend." },
  { id: "three-musketeers", title: "The Three Musketeers", year: 1921, runtime: "119 min", people: "Douglas Fairbanks", art: "art-sword", collection: "adventure", archiveId: "TheThreeMusketeers1921", blurb: "D’Artagnan arrives in Paris with a sword, a grin, and too much energy." },
  { id: "don-q", title: "Don Q, Son of Zorro", year: 1925, runtime: "111 min", people: "Douglas Fairbanks", art: "art-sword", collection: "adventure", archiveId: "DonQSonofZorro", blurb: "Zorro’s son in Spain, with a whip, a hat, and a family reputation." },
  { id: "black-pirate", title: "The Black Pirate", year: 1926, runtime: "94 min", people: "Douglas Fairbanks", art: "art-boat", collection: "adventure", archiveId: "TheBlackPirate1926", blurb: "Early color pirate adventure: sails, swordplay, and a slide down a canvas." },
  { id: "lost-world", title: "The Lost World", year: 1925, runtime: "106 min", people: "Harry O. Hoyt", art: "art-forest", collection: "adventure", archiveId: "TheLostWorld1925", blurb: "Explorers find living dinosaurs. Stop-motion wonders from the 1920s." },
  { id: "peter-pan", title: "Peter Pan", year: 1924, runtime: "105 min", people: "Herbert Brenon", art: "art-moon", collection: "adventure", archiveId: "PeterPan1924", blurb: "The first big-screen Peter Pan. London windows, pirate ship, and flight." },
  { id: "wizard-oz-25", title: "The Wizard of Oz", year: 1925, runtime: "95 min", people: "Larry Semon", art: "art-gold", collection: "adventure", archiveId: "TheWizardofOz1925", blurb: "A silent Oz with farmhands, a scarecrow, and a trip that is more slapstick than ruby slippers." },
  { id: "tarzan-apes", title: "Tarzan of the Apes", year: 1918, runtime: "73 min", people: "Scott Sidney", art: "art-forest", collection: "adventure", archiveId: "TarzanOfTheApes1918", blurb: "The first Tarzan feature. Jungle sets, title cards, and a boy raised far from town." },
  { id: "iron-horse", title: "The Iron Horse", year: 1924, runtime: "150 min", people: "John Ford", art: "art-train", collection: "adventure", archiveId: "TheIronHorse1924", blurb: "Building the transcontinental railroad, Ford-style: rails, plains, and big skies." },
  { id: "covered-wagon", title: "The Covered Wagon", year: 1923, runtime: "98 min", people: "James Cruze", art: "art-field", collection: "adventure", archiveId: "TheCoveredWagon1923", blurb: "A wagon train west. Dust, rivers, and one of the first huge Westerns." },
  { id: "metropolis", title: "Metropolis", year: 1927, runtime: "148 min", people: "Fritz Lang", art: "art-city", collection: "adventure", archiveId: "Metropolis1927", blurb: "A city of towers and machines. Famous science-fiction images from silent Germany." },
  { id: "wings", title: "Wings", year: 1927, runtime: "144 min", people: "William A. Wellman", art: "art-snow", collection: "adventure", archiveId: "Wings1927", blurb: "Friendship and early aviation. The first Best Picture winner, still about flying." },
  { id: "nanook", title: "Nanook of the North", year: 1922, runtime: "79 min", people: "Robert J. Flaherty", art: "art-snow", collection: "wonder", archiveId: "NanookOfTheNorth", blurb: "An early documentary of Inuit family life in the Arctic. Quiet, famous, and full of snow." },
  { id: "great-train", title: "The Great Train Robbery", year: 1903, runtime: "12 min", people: "Edwin S. Porter", art: "art-train", collection: "wonder", archiveId: "TheGreatTrainRobbery1903", blurb: "Twelve minutes that taught movies how a chase works." },
  { id: "impossible-voyage", title: "The Impossible Voyage", year: 1904, runtime: "24 min", people: "Georges Méliès", art: "art-moon", collection: "wonder", archiveId: "TheImpossibleVoyage1904", blurb: "A wild trip across the sun and under the sea, painted like a storybook." },
  { id: "kingdom-fairies", title: "The Kingdom of the Fairies", year: 1903, runtime: "16 min", people: "Georges Méliès", art: "art-orchestra", collection: "wonder", archiveId: "TheKingdomOfTheFairies", blurb: "Stage magic, underwater palaces, and Méliès at his most fairy-tale." },
  { id: "conquest-pole", title: "The Conquest of the Pole", year: 1912, runtime: "30 min", people: "Georges Méliès", art: "art-snow", collection: "wonder", archiveId: "TheConquestOfThePole", blurb: "Explorers, a giant, and handmade snow. Méliès goes north." },
  { id: "alice-1915", title: "Alice in Wonderland", year: 1915, runtime: "52 min", people: "W. W. Young", art: "art-forest", collection: "wonder", archiveId: "AliceInWonderland1915", blurb: "An early Wonderland with real gardens, costumes, and title-card riddles." },
  { id: "poor-little-rich", title: "The Poor Little Rich Girl", year: 1917, runtime: "65 min", people: "Maurice Tourneur", art: "art-house", collection: "wonder", archiveId: "PoorLittleRichGirl1917", blurb: "Mary Pickford as a lonely child in a big house who dreams her way toward friends." },
  { id: "pollyanna", title: "Pollyanna", year: 1920, runtime: "58 min", people: "Paul Powell", art: "art-field", collection: "wonder", archiveId: "Pollyanna1920", blurb: "Pickford plays the glad girl who talks a town into looking for good news." },
  { id: "little-lord", title: "Little Lord Fauntleroy", year: 1921, runtime: "112 min", people: "Alfred E. Green", art: "art-gold", collection: "wonder", archiveId: "LittleLordFauntleroy1921", blurb: "An American boy inherits an English title and softens a grouchy estate." },
  { id: "daddy-long", title: "Daddy-Long-Legs", year: 1919, runtime: "85 min", people: "Marshall Neilan", art: "art-paper", collection: "wonder", archiveId: "DaddyLongLegs1919", blurb: "An orphan writes letters to a mysterious helper and grows up on hope and jokes." },
  { id: "oz-1910", title: "The Wonderful Wizard of Oz", year: 1910, runtime: "13 min", people: "Otis Turner", art: "art-gold", collection: "wonder", archiveId: "WonderfulWizardOfOz1910", blurb: "A very early Oz short. Scarecrow, Tin Man, and a tornado of stage tricks." },
  { id: "cinderella-1914", title: "Cinderella", year: 1914, runtime: "52 min", people: "James Kirkwood", art: "art-lantern", collection: "wonder", archiveId: "Cinderella1914Pickford", blurb: "Mary Pickford’s Cinderella: kitchen ashes, a ball, and a slipper that fits." },
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
  const wonder = document.getElementById("wonder-row");
  if (wonder) wonder.innerHTML = rowBy("wonder");
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
bindRow("wonder-row");
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
