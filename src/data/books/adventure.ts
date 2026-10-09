import type { Book } from '../types'

export const adventure: Book[] = [
  {
    id: 'the-travels-of-marco-polo',
    title: 'The Travels of Marco Polo',
    author: 'Marco Polo',
    year: 'c. 1300',
    category: 'adventure',
    tagline: 'A Venetian merchant describes the court of Kublai Khan, and Europe barely believes him.',
    about:
      'Marco Polo left Venice at seventeen and was away for twenty-four years, most of them in the service of the Mongol emperor of China. His account, dictated in a prison cell, gave Europeans their first detailed picture of Asia.',
    whoFor: [
      'Lovers of travel and exploration',
      'Readers interested in the Silk Road and medieval China',
      'Anyone curious about a book that inspired Columbus',
    ],
    aboutAuthor:
      'Marco Polo was a merchant from Venice. Captured in a sea battle with Genoa in 1298, he dictated his story to a fellow prisoner who was a writer of romances.',
    cover: { bg: '#8a3324', ink: '#f7ecd4', accent: '#f0c05a', motif: 'chevrons' },
    ideas: [
      {
        title: 'A book born in prison',
        body: [
          'Polo set out in 1271 with his father and uncle, who had already been to the court of the great Khan and were returning with letters from the pope. He came home in 1295, a stranger in odd clothes.',
          'Three years later he was a prisoner of war in Genoa. His cellmate, an author of tales about King Arthur, wrote down his recollections. The result was called a Description of the World.',
        ],
      },
      {
        title: 'The road east',
        body: [
          'The journey took three and a half years. They crossed Persia, climbed over the high Pamir plateau, which Polo says is so cold that fire burns less brightly, and skirted the desert of Lop.',
          'There, he reports, travelers who fall behind at night hear spirits calling their names and are led astray. At last they reached the summer palace of Kublai Khan at Shangdu, the Xanadu of later poetry.',
        ],
      },
      {
        title: 'At the court of the Khan',
        body: [
          'Polo says the emperor took a liking to him and sent him on missions across the empire for seventeen years. He describes the palace and the capital, the site of modern Beijing, in admiring detail.',
          'What impresses him most is the organization. Money is made of paper and accepted everywhere. Couriers ride between post stations set at regular intervals. Black stones dug from the hills burn like wood. Grain is stored against famine.',
        ],
      },
      {
        title: 'Cities and marvels',
        body: [
          'The greatest city of all is Quinsai, modern Hangzhou, which he calls the finest and noblest in the world, with canals and, he claims, twelve thousand bridges.',
          'He passes on reports of an island called Cipangu, Japan, where the palace is roofed with gold. On the voyage home by way of Sumatra and India, he sees a unicorn and is disappointed. It is an ugly beast that wallows in mud. He had met a rhinoceros.',
        ],
      },
      {
        title: 'Did he tell the truth?',
        body: [
          'His neighbors nicknamed him the man of the millions, for his big numbers. He never mentions tea, chopsticks or the Great Wall, and some scholars have wondered whether he reached China at all.',
          'Most historians think he did, since much of what he says has been confirmed. On his deathbed, urged to withdraw his tall tales, he is said to have answered that he had not told half of what he saw. Columbus sailed with a copy.',
        ],
      },
    ],
    takeaway:
      'The world is larger and stranger than the stories we grow up with. Polo\'s book shows the value of going to look, and the difficulty of being believed afterward.',
  },
  {
    id: 'south',
    title: 'South',
    author: 'Ernest Shackleton',
    year: '1919',
    category: 'adventure',
    tagline: 'The expedition that failed completely and became the greatest survival story ever told.',
    about:
      'Shackleton set out to cross Antarctica on foot. His ship was crushed by ice before he could land. What followed was two years on drifting floes, in open boats and across unmapped mountains, at the end of which he brought every man of his party home alive.',
    whoFor: [
      'Readers who love true stories of survival',
      'Leaders looking for an example of holding a team together',
      'Anyone who needs a reminder of what people can endure',
    ],
    aboutAuthor:
      'Sir Ernest Shackleton was an Anglo-Irish explorer who led three British expeditions to the Antarctic. He died on a fourth, in 1922.',
    cover: { bg: '#dfeaf0', ink: '#14293a', accent: '#2b6c8f', motif: 'waves' },
    ideas: [
      {
        title: 'Caught in the ice',
        body: [
          'The ship Endurance sailed from the island of South Georgia in December 1914 with twenty-eight men. The plan was to land on the Weddell Sea coast and march across the continent by way of the Pole.',
          'The pack ice that year was unusually heavy. In January 1915, within sight of land, the ship froze fast. She drifted helplessly with the ice for ten months, through the darkness of the polar winter.',
        ],
      },
      {
        title: 'A new goal',
        body: [
          'In October the pressure of the floes crushed the hull. The men moved onto the ice with three lifeboats and what stores they could save, and a month later watched the ship go down.',
          'Shackleton told them simply that ship and stores were gone, so now they would go home. From that moment his purpose was to get everyone out alive. He kept strict routines, shared the worst duties and watched closely for failing spirits.',
        ],
      },
      {
        title: 'Elephant Island',
        body: [
          'They camped on the floes for five more months, drifting north. When the ice finally broke up beneath them in April 1916, they took to the boats.',
          'After a week of cold, thirst and seasickness they landed on Elephant Island, the first solid ground under their feet in sixteen months. But it was a bare rock that no ship ever visited. Nobody would look for them there.',
        ],
      },
      {
        title: 'Eight hundred miles in an open boat',
        body: [
          'Shackleton chose five men and set out in the largest lifeboat, twenty-two feet long, for the whaling stations of South Georgia, eight hundred miles away across the stormiest sea on Earth.',
          'The voyage took sixteen days. The navigator managed to sight the sun only a handful of times. Once Shackleton mistook a white line on the horizon for clearing sky. It was the crest of a gigantic wave, which nearly swamped them.',
        ],
      },
      {
        title: 'Over the mountains',
        body: [
          'They landed on the uninhabited side of the island. With two companions, a length of rope and screws from the boat fixed in their boots, Shackleton crossed its unmapped glaciers and peaks in thirty-six hours.',
          'They walked into the whaling station unrecognizable. It then took four attempts to reach Elephant Island through the ice. On the thirtieth of August 1916 he counted the figures on the beach. All were there.',
        ],
      },
    ],
    takeaway:
      'When the original aim becomes impossible, choose a new one and commit to it entirely. Shackleton\'s achievement was not exploration. It was refusing to lose a single person in his charge.',
  },
  {
    id: 'the-worst-journey-in-the-world',
    title: 'The Worst Journey in the World',
    author: 'Apsley Cherry-Garrard',
    year: '1922',
    category: 'adventure',
    tagline: 'A survivor of Scott\'s last expedition tells what it cost, and why they went.',
    about:
      'Cherry-Garrard was among the youngest members of Captain Scott\'s expedition to the South Pole. He took part in a midwinter trek for penguin eggs that nearly killed him, and later helped to find the bodies of Scott and his companions. His book is the masterpiece of polar writing.',
    whoFor: [
      'Readers of exploration and endurance stories',
      'Anyone interested in the race to the South Pole',
      'People who wonder why humans attempt such things',
    ],
    aboutAuthor:
      'Apsley Cherry-Garrard was an English explorer who joined the Terra Nova expedition at twenty-four as assistant zoologist. He suffered for the rest of his life from what he had seen.',
    cover: { bg: '#0e2433', ink: '#eef2f0', accent: '#9ad1e3', motif: 'horizon' },
    ideas: [
      {
        title: 'The cleanest way of having a bad time',
        body: [
          'The book begins with a sentence that sets its tone. Polar exploration is at once the cleanest and most isolated way of having a bad time which has been devised.',
          'Cherry-Garrard was short-sighted and had no qualifications. He was taken on because he was willing and had offered money. He describes his companions with love, and tries to explain to people at home what it was really like.',
        ],
      },
      {
        title: 'The winter journey',
        body: [
          'In the middle of the Antarctic winter of 1911, three men set out to walk some sixty miles to a colony of emperor penguins, the only time their eggs could be collected. Scientists hoped the embryos would show how birds evolved.',
          'They traveled in total darkness. The temperature fell to seventy-seven degrees below zero Fahrenheit. Their sweat froze inside their clothes, and Cherry-Garrard\'s teeth chattered so violently that they shattered.',
        ],
      },
      {
        title: 'The tent is gone',
        body: [
          'At the rookery they built a stone hut. A hurricane blew their tent away and then tore off the roof. They lay in their sleeping bags under the drifting snow for two days, singing hymns and waiting to die.',
          'When the wind dropped they found the tent, by a miracle, half a mile off. They hauled themselves home with three eggs after five weeks. The others, he says, never once lost their tempers or said a hasty word.',
        ],
      },
      {
        title: 'The Pole',
        body: [
          'That summer Scott and four others reached the South Pole and found a Norwegian flag. Amundsen had been there a month earlier. All five died on the way back.',
          'One collapsed. Another, crippled by frostbite, walked out into a blizzard so as not to slow the rest, saying that he might be some time. Scott and the last two died in their tent, eleven miles from a depot of food and fuel.',
        ],
      },
      {
        title: 'What was it for?',
        body: [
          'Cherry-Garrard had waited at that depot with a dog team and turned back. He could not have known how close they were, and it haunted him always. He was in the party that found the tent the next spring.',
          'When he delivered the eggs to the museum in London, a clerk barely looked up. Yet he ends in defense of the effort. If you march your winter journeys, he writes, you will have your reward, so long as all you want is a penguin\'s egg.',
        ],
      },
    ],
    takeaway:
      'Some things are worth doing for knowledge alone, even at terrible cost. Cherry-Garrard shows that how people treat each other under extreme hardship is the real measure of an expedition.',
  },
  {
    id: 'two-years-before-the-mast',
    title: 'Two Years Before the Mast',
    author: 'Richard Henry Dana Jr.',
    year: '1840',
    category: 'adventure',
    tagline: 'A Harvard student signs on as a common sailor and tells the truth about life at sea.',
    about:
      'Troubled by failing eyesight, Dana left college and shipped out from Boston to California around Cape Horn. His plain account of a sailor\'s daily work, hardships and treatment was the first of its kind and became a classic of American literature.',
    whoFor: [
      'Lovers of sea stories',
      'Readers interested in California before the Gold Rush',
      'Anyone curious about working life in the age of sail',
    ],
    aboutAuthor:
      'Richard Henry Dana Junior became a lawyer after his voyage, specializing in the rights of seamen, and was active in the movement against slavery.',
    cover: { bg: '#1c3f5f', ink: '#f3edda', accent: '#f2c14e', motif: 'chevrons' },
    ideas: [
      {
        title: 'From the lecture hall to the forecastle',
        body: [
          'An attack of measles had so weakened Dana\'s eyes that he could not read. In 1834, at nineteen, he decided on a complete change and signed on to a small trading ship as an ordinary seaman.',
          'To sail before the mast meant living in the cramped forecastle with the crew, not aft with the officers. He set out to describe that life as it really was, since every earlier sea book had been written from the quarterdeck.',
        ],
      },
      {
        title: 'A sailor\'s work is never done',
        body: [
          'Dana learns that a ship is like a lady\'s watch, always out of repair. The men stand watches day and night, and between them they tar, scrape, mend and splice. Food is salt beef and hard biscuit.',
          'He quotes the sailor\'s version of the commandment. Six days shalt thou labor and do all thou art able, and on the seventh, scrub the decks and scrape the cable.',
        ],
      },
      {
        title: 'California in 1835',
        body: [
          'After five months they reach the coast of California, then a thinly settled province of Mexico. The trade is in cattle hides, which the sailors call California banknotes.',
          'The men carry the stiff hides on their heads through the surf and spend months curing them on the beach. Dana describes the missions, the fine horsemanship of the people and the great empty bay of San Francisco, which he predicts will one day be a center of prosperity.',
        ],
      },
      {
        title: 'The flogging',
        body: [
          'The captain, in a rage, has two men tied up and flogged, one of them merely for asking why the other was being beaten. If you want to know what I flog you for, he shouts, I\'ll tell you. It\'s because I like to do it.',
          'Dana watches, sick and powerless. A sailor had no protection. He vows that if he ever has the means, he will do something to redress the grievances of the class of men with whom he has lived.',
        ],
      },
      {
        title: 'Around the Horn in winter',
        body: [
          'The voyage home takes them round Cape Horn in the worst season, among icebergs and gales, with sails frozen stiff as boards. Scurvy breaks out, and the sick recover almost at once when another ship gives them fresh onions and potatoes.',
          'Dana kept his vow. He became a lawyer for seamen and wrote a handbook of their rights. His book, published just before gold was found, became the guide every newcomer to California carried.',
        ],
      },
    ],
    takeaway:
      'To understand how people live, do their work alongside them. Dana\'s honest record of hardship and injustice changed how sailors were treated, and it preserves a California that vanished within a decade.',
  },
  {
    id: 'sailing-alone-around-the-world',
    title: 'Sailing Alone Around the World',
    author: 'Joshua Slocum',
    year: '1900',
    category: 'adventure',
    tagline: 'A retired sea captain rebuilds an old oyster boat and becomes the first to circle the globe solo.',
    about:
      'With the age of sail ending and no ship to command, Joshua Slocum set out at fifty-one in a sloop he had rebuilt himself. Three years and forty-six thousand miles later he sailed back into port. His dry, good-humored account is a favorite of every sailor.',
    whoFor: [
      'Sailors and armchair voyagers',
      'People starting something new later in life',
      'Readers who enjoy self-reliance told with a light touch',
    ],
    aboutAuthor:
      'Joshua Slocum was born in Nova Scotia and spent his life at sea, rising to command large sailing ships. In 1909 he set out alone once more and was never seen again.',
    cover: { bg: '#f1ead6', ink: '#1d3140', accent: '#2a7f9e', motif: 'waves' },
    ideas: [
      {
        title: 'An old boat in a field',
        body: [
          'A friend offered Slocum a ship that, he added, wanted some repairs. It turned out to be an ancient oyster sloop called the Spray, propped up in a pasture and thought fit only for breaking up.',
          'Slocum felled an oak for a new keel and rebuilt her plank by plank over thirteen months, at a cost of a little over five hundred and fifty dollars. Neighbors asked whether it would pay.',
        ],
      },
      {
        title: 'Setting out',
        body: [
          'He left Boston in April 1895. He first crossed the Atlantic to Gibraltar, intending to go through the Mediterranean. Warned of pirates there, and after being chased by one, he turned round and sailed back across to South America.',
          'His navigation equipment was modest. His only timepiece was a cheap tin clock, which he had to boil to keep it going. He found his position by measuring the angle between the Moon and the stars.',
        ],
      },
      {
        title: 'A boat that steered herself',
        body: [
          'Slocum discovered that with her sails properly set and the wheel lashed, the Spray would hold a course for days. He read, cooked and slept while she sailed.',
          'On one stretch of twenty-three days across the Indian Ocean, covering twenty-seven hundred miles, he says he spent no more than three hours at the helm. Many refused to believe it until others built copies of the boat.',
        ],
      },
      {
        title: 'The Strait of Magellan',
        body: [
          'The hardest part was at the tip of South America, where gales drove him back and he had to pass through the strait twice. The local people had a reputation for raiding lone vessels.',
          'A friend had given him a bag of carpet tacks. Each night he scattered them on deck, points up, and went to sleep. Around midnight he was woken by howls as barefoot visitors leapt overboard.',
        ],
      },
      {
        title: 'Alone, and not lonely',
        body: [
          'Early in the voyage, ill from eating plums and cheese, he saw a tall figure at the wheel who introduced himself as the pilot of one of Columbus\'s ships and promised to steer through the night. He thanked him in the morning.',
          'He was welcomed in Samoa, Australia and South Africa, where he met a president who insisted the world was flat. He reached home in June 1898 and was hardly noticed, because a war had begun. He had never learned to swim.',
        ],
      },
    ],
    takeaway:
      'Skill, patience and a well-prepared boat can take one person anywhere. Slocum shows that it is never too late to attempt something no one has done, and that it helps to keep a sense of humor.',
  },
  {
    id: 'the-south-pole',
    title: 'The South Pole',
    author: 'Roald Amundsen',
    year: '1912',
    category: 'adventure',
    tagline: 'How the Norwegians won the race to the Pole, and made it look easy.',
    about:
      'Roald Amundsen was the first person to reach the South Pole, arriving five weeks ahead of the British party under Scott. His matter-of-fact account explains the planning, the dogs and the skis that got five men there and back without serious mishap.',
    whoFor: [
      'Readers interested in polar exploration',
      'Planners, project managers and anyone who values preparation',
      'People who want the winner\'s side of a famous story',
    ],
    aboutAuthor:
      'Roald Amundsen was a Norwegian explorer who was also the first to sail through the Northwest Passage. He disappeared in 1928 on a flight to rescue another explorer in the Arctic.',
    cover: { bg: '#b31b1b', ink: '#f5f1e6', accent: '#1f3a6e', motif: 'ziggurat' },
    ideas: [
      {
        title: 'A change of plan',
        body: [
          'Amundsen had borrowed a famous ship and raised money to drift across the Arctic to the North Pole. Then, in 1909, two Americans each claimed to have reached it. His reason for going had vanished.',
          'He secretly decided to go south instead. He told his crew only when they reached the island of Madeira, and sent a short telegram to Scott informing him that the ship was proceeding to the Antarctic.',
        ],
      },
      {
        title: 'Learning from the Arctic peoples',
        body: [
          'Years earlier, wintering in the Canadian Arctic, Amundsen had lived among the Inuit and studied how they stayed alive. He adopted their loose fur clothing and their way of driving dogs.',
          'He chose men who were expert skiers and dog handlers. Scott, by contrast, put his faith in ponies, motor sledges and hauling by hand. For Amundsen the choice of transport was the whole question.',
        ],
      },
      {
        title: 'Preparation',
        body: [
          'He set up his base on a floating ice shelf at the Bay of Whales, which others thought risky. It put him sixty miles closer to the Pole than Scott.',
          'Before winter his men carried tons of supplies south and laid depots. They marked each one with a line of flags stretching for miles to either side, so that it could not be missed in fog. During the dark months they shaved every possible ounce from the sledges.',
        ],
      },
      {
        title: 'The dash',
        body: [
          'A first start in September was too early. The cold drove them back, and a quarrel followed. They left again in October 1911, five men with four sledges and fifty-two dogs.',
          'They found a new route up a steep glacier onto the polar plateau. There, as planned from the outset, they shot twenty-four dogs to feed the remaining dogs and themselves. They named the place the Butcher\'s Shop. On the fourteenth of December they planted their flag at the Pole.',
        ],
      },
      {
        title: 'Luck, people call it',
        body: [
          'They left a small tent with a letter for Scott and were back at base in ninety-nine days, having put on weight. The whole account is so calm that readers have underrated what was done.',
          'Amundsen gives his own explanation. Victory awaits him who has everything in order. People call it luck. Defeat is certain for him who has neglected to take the necessary precautions in time, and that is called bad luck.',
        ],
      },
    ],
    takeaway:
      'Success in a dangerous undertaking is mostly decided beforehand. Learn from those who know the conditions, choose the right tools, build in margins and keep your objective simple.',
  },
  {
    id: 'the-journals-of-lewis-and-clark',
    title: 'The Journals of Lewis and Clark',
    author: 'Meriwether Lewis & William Clark',
    year: '1814',
    category: 'adventure',
    tagline: 'Across a continent and back: the day-by-day record of America\'s great expedition.',
    about:
      'In 1804 President Jefferson sent two army officers and a small party to explore the land the United States had just bought from France and to find a route to the Pacific. Their journals record two and a half years of rivers, mountains, hunger and first meetings.',
    whoFor: [
      'Readers who love exploration and the outdoors',
      'Anyone interested in the history of the American West',
      'People curious about encounters between very different cultures',
    ],
    aboutAuthor:
      'Meriwether Lewis had been private secretary to President Jefferson. William Clark was an experienced frontier soldier and mapmaker. They shared command as equals.',
    cover: { bg: '#3f5d3a', ink: '#f4eeda', accent: '#e2a94b', motif: 'tree' },
    ideas: [
      {
        title: 'The president\'s instructions',
        body: [
          'Jefferson wanted to know whether the Missouri and some western river offered a practical water route across the continent for trade. He also wanted maps, and descriptions of the plants, animals, soils and peoples.',
          'About thirty-three people left the frontier town of Saint Louis in May 1804, dragging a heavy boat upstream against the current. The captains wrote almost every day, in vivid and wildly inconsistent spelling.',
        ],
      },
      {
        title: 'Sacagawea',
        body: [
          'They spent the first winter among the Mandan people in what is now North Dakota. There they hired a French trader as interpreter, along with his young Shoshone wife, Sacagawea, who had just given birth.',
          'She carried her baby the whole way. She found edible roots, rescued instruments and papers when a boat capsized, and by her mere presence reassured strangers. A woman with a party of men, Clark noted, is a token of peace.',
        ],
      },
      {
        title: 'No easy passage',
        body: [
          'The hoped-for short crossing between the rivers did not exist. Instead they met the Rocky Mountains, range behind range. They needed horses, and only the Shoshone had them.',
          'By an extraordinary chance the chief they met was Sacagawea\'s brother. Even with horses, the crossing through early snow nearly starved them, and they ate some of their animals. The Nez Perce people fed them and showed them how to make canoes.',
        ],
      },
      {
        title: 'Ocean in view',
        body: [
          'In November 1805 Clark wrote that the ocean was in view and added, O, the joy. They spent a wet winter on the coast, where it rained on all but twelve days.',
          'When the captains had to decide where to build their winter fort, they put it to a vote of the whole party. The vote included Sacagawea and York, a Black man whom Clark held as a slave.',
        ],
      },
      {
        title: 'What they brought back, and what followed',
        body: [
          'They returned in September 1806, long given up for dead, having lost only one man, to an illness no doctor of the time could have cured. They described well over a hundred animals and nearly two hundred plants new to science.',
          'The expedition survived largely through the generosity of the nations it met. Its maps then opened the way to the settlement that dispossessed them. York was not freed for years afterward, and Lewis died three years later, probably by his own hand.',
        ],
      },
    ],
    takeaway:
      'Careful observation and written records turn a journey into knowledge. The journals also show how much explorers depend on the people already living in the lands they claim to discover.',
  },
  {
    id: 'around-the-world-in-seventy-two-days',
    title: 'Around the World in Seventy-Two Days',
    author: 'Nellie Bly',
    year: '1890',
    category: 'adventure',
    tagline: 'A young reporter sets out to beat a fictional record, with one small bag.',
    about:
      'In 1889 a twenty-five-year-old journalist persuaded her newspaper to send her around the globe faster than the hero of Jules Verne\'s novel. Traveling alone by steamship and train, she became the most famous woman in America.',
    whoFor: [
      'Travelers, especially those who pack light',
      'Readers who enjoy stories of women defying expectations',
      'Anyone interested in the great age of newspapers',
    ],
    aboutAuthor:
      'Nellie Bly was the pen name of Elizabeth Cochran, an American reporter who had earlier feigned insanity to expose conditions inside a New York asylum.',
    cover: { bg: '#264653', ink: '#f4efdc', accent: '#e76f51', motif: 'clock' },
    ideas: [
      {
        title: 'The pitch',
        body: [
          'Bly proposed the trip to her editor at a New York newspaper. He replied that it was impossible. A woman would need a protector and a dozen trunks, and no one but a man could do it.',
          'Very well, she answered. Start the man, and I will start the same day for some other newspaper and beat him. A year later, on two days\' notice, they sent her.',
        ],
      },
      {
        title: 'One bag',
        body: [
          'To avoid delays at customs and missed connections, she resolved to carry only what she could hold in one hand. She had a single sturdy dress made, wore an overcoat and took a small leather bag sixteen inches wide.',
          'Into it went underclothes, slippers, writing materials and a jar of cold cream. She declined to carry a revolver. If she behaved properly, she reasoned, she would always find someone ready to protect her.',
        ],
      },
      {
        title: 'Meeting Jules Verne',
        body: [
          'She left New Jersey on the fourteenth of November 1889 and was promptly seasick. In France she risked her schedule with a detour to visit the author whose story she was racing.',
          'Verne showed her the map on which he had traced his hero\'s route and wished her well. If she managed it in seventy-nine days, he said, he would applaud with both hands. Then she dashed for the mail train to Italy.',
        ],
      },
      {
        title: 'A rival, and the long way home',
        body: [
          'She went on by ship through the Suez Canal to Ceylon, Singapore, where she bought a monkey, and Hong Kong. There she learned that a rival magazine had sent another young woman around the world in the opposite direction to beat her.',
          'A storm slowed her crossing of the Pacific. In San Francisco she found the railway blocked by snow, so her newspaper hired a special train that raced across the continent while crowds cheered at every station.',
        ],
      },
      {
        title: 'Home',
        body: [
          'She stepped onto the platform in New Jersey on the twenty-fifth of January 1890. Her time was seventy-two days, six hours and eleven minutes. Nearly a million readers had entered the newspaper\'s contest to guess it.',
          'The book shares some prejudices of its day about the peoples she passed among. Its lasting interest is the proof she gave that a woman could go anywhere alone, and that the planet had become small enough to circle in a season.',
        ],
      },
    ],
    takeaway:
      'Do not accept that a thing is impossible merely because nobody like you has done it. Travel light, decide quickly and keep moving.',
  },
  {
    id: 'the-travels-of-ibn-battuta',
    title: 'The Travels of Ibn Battuta',
    author: 'Ibn Battuta',
    year: '1355',
    category: 'adventure',
    tagline: 'He left home for a pilgrimage and kept going for twenty-nine years.',
    about:
      'A young Moroccan scholar set out for Mecca in 1325 and ended up visiting almost the entire Muslim world and beyond, from West Africa to China. His dictated memoir is the fullest portrait we have of the fourteenth-century world.',
    whoFor: [
      'Lovers of travel writing',
      'Readers interested in medieval Africa, the Middle East and Asia',
      'Anyone who knows Marco Polo and not his greater rival',
    ],
    aboutAuthor:
      'Ibn Battuta was a legal scholar born in Tangier. On his return the sultan of Morocco ordered a court writer to record his travels in a book known as the Rihla, the Journey.',
    cover: { bg: '#1e5a4c', ink: '#f5eeda', accent: '#f2b84b', motif: 'sun' },
    ideas: [
      {
        title: 'Leaving home alone',
        body: [
          'At twenty-one, Ibn Battuta left Tangier to make the pilgrimage to Mecca. He set out alone, he says, with no companion to cheer the way, swayed by an overmastering impulse, and parted from his parents with sorrow.',
          'He did not see Morocco again for twenty-four years. By the time he stopped he had covered some seventy-five thousand miles, about three times the distance attributed to Marco Polo.',
        ],
      },
      {
        title: 'A world held together by faith and law',
        body: [
          'He made it a rule never, if he could help it, to travel the same road twice. What made such wandering possible was the unity of the Islamic world.',
          'As a trained judge he was welcome wherever there were Muslims. Rulers gave him posts, gifts and wives. Religious lodges fed and housed him. From Mali to Sumatra, people shared a faith, a law and a language of learning.',
        ],
      },
      {
        title: 'The sultan of Delhi',
        body: [
          'He spent about eight years in India as a judge at the court of Sultan Muhammad ibn Tughluq, a man he describes as, of all people, the fondest of making gifts and of shedding blood.',
          'His gate was never without some poor man being enriched or some living man being executed. Ibn Battuta fell under suspicion and feared for his life. He escaped when the sultan abruptly appointed him ambassador to China, a mission that began with a robbery and a shipwreck.',
        ],
      },
      {
        title: 'Islands, China and the plague',
        body: [
          'He served as a judge in the Maldive Islands, where he tried without success to make the women cover themselves. He climbed the holy mountain of Ceylon and sailed on to the Chinese port of Quanzhou.',
          'He admired the safety of the roads, the paper money and the porcelain, and felt ill at ease among people of another faith. Traveling home through Syria in 1348, he met the Black Death and reports two thousand deaths a day in Damascus.',
        ],
      },
      {
        title: 'Across the Sahara',
        body: [
          'Even then he was not finished. He visited Muslim Spain and then joined a caravan across the Sahara to the empire of Mali. He praises its justice and the security of travelers, and grumbles about its customs and the meanness of the king\'s gift.',
          'Scholars doubt some sections, especially on China, and parts were borrowed from earlier writers. No other single witness, though, saw so much of the world of his century.',
        ],
      },
    ],
    takeaway:
      'Curiosity and a useful skill can carry a person across the whole world. Ibn Battuta\'s journey reveals how connected Africa, Asia and Europe already were, centuries before the voyages usually credited with joining them.',
  },
  {
    id: 'the-innocents-abroad',
    title: 'The Innocents Abroad',
    author: 'Mark Twain',
    year: '1869',
    category: 'adventure',
    tagline: 'America\'s funniest writer joins the first package tour and refuses to be impressed.',
    about:
      'In 1867 Mark Twain sailed with a shipload of pious, prosperous Americans on a pleasure cruise to Europe and the Holy Land, sending humorous reports to a newspaper. The book he made of them sold more copies in his lifetime than any of his novels.',
    whoFor: [
      'Travelers who have ever felt underwhelmed by a famous sight',
      'Fans of Mark Twain',
      'Anyone who enjoys watching tourists, including themselves',
    ],
    aboutAuthor:
      'Mark Twain was the pen name of Samuel Clemens, an American writer and lecturer, the author of The Adventures of Tom Sawyer and Adventures of Huckleberry Finn.',
    cover: { bg: '#f2e2b8', ink: '#2a2018', accent: '#2f6f8f', motif: 'horizon' },
    ideas: [
      {
        title: 'The first pleasure cruise',
        body: [
          'The excursion was advertised as a great pleasure trip to the Old World on a chartered steamship. Twain persuaded a California newspaper to pay his fare in return for letters.',
          'His fellow passengers turned out to be mostly elderly and devout. He had expected dancing, and got prayer meetings. He decided to describe what an ordinary American would really see with his own eyes, and not what the guidebooks said he ought to.',
        ],
      },
      {
        title: 'Refusing to gush',
        body: [
          'Twain grows weary of old masters. After miles of darkened paintings of saints and martyrs, he confesses that he often prefers the bright copies being made beside them.',
          'In Italy he hears so much about one great artist that he begins to credit him with everything. He designed the church, the lake and the Leaning Tower. I never felt so fervently thankful, Twain writes, as when I learned that Michelangelo was dead.',
        ],
      },
      {
        title: 'Tormenting the guides',
        body: [
          'He and his friends call every guide by the same name and devise a game. Whatever marvel they are shown, they look blank and ask an idiotic question.',
          'Presented with a letter written by Columbus himself, they criticize the handwriting. Shown a bust, and then an Egyptian mummy, they inquire gravely: is he dead? The guides are reduced to despair.',
        ],
      },
      {
        title: 'His own countrymen',
        body: [
          'Twain is hardest on the Americans. They chip fragments off monuments for souvenirs, speak loudly in bad French and quarrel over points of piety while behaving selfishly.',
          'He is equally sharp about sacred relics. He has seen, he reckons, enough pieces of the true cross to build a ship, and a keg of the nails. In the Holy Land the famous places seem to him small, dusty and nothing like the pictures of his childhood.',
        ],
      },
      {
        title: 'What travel is for',
        body: [
          'Not everything is mocked. The Sphinx moves him to some of his finest writing, and Venice by moonlight and the gardens of Versailles win his praise.',
          'He ends with a much-quoted claim: travel is fatal to prejudice, bigotry and narrow-mindedness. He does not always live up to it, and the book contains slighting remarks about several peoples. But it gave American writing its irreverent voice.',
        ],
      },
    ],
    takeaway:
      'See things for yourself and say honestly what you thought of them. Twain shows that reverence on command is worthless, and that the tourist is usually the most interesting exhibit.',
  },
]
