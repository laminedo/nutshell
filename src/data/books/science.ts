import type { Book } from '../types'

export const science: Book[] = [
  {
    id: 'relativity',
    title: 'Relativity',
    author: 'Albert Einstein',
    year: '1916',
    category: 'nature',
    tagline: 'Einstein explains his own theory to the general reader, with trains and clocks.',
    about:
      'A year after completing the general theory, Einstein wrote this short book for readers without advanced mathematics. Using everyday pictures, he shows why time and space are not what common sense assumes, and why gravity is the shape of space itself.',
    whoFor: [
      'Curious readers who want relativity from its author',
      'Anyone who likes thought experiments',
      'People who wonder what the famous equation means',
    ],
    aboutAuthor:
      'Albert Einstein was a German-born physicist who published the special theory of relativity in 1905 and the general theory in 1915. He won the Nobel Prize in 1921.',
    cover: { bg: '#0f1c3f', ink: '#f1eee0', accent: '#f6c945', motif: 'rings' },
    ideas: [
      {
        title: 'Two simple principles',
        body: [
          'The special theory rests on two statements. First, the laws of physics are the same for every observer moving at a steady speed in a straight line. A passenger in a smooth train cannot tell by any experiment that the train is moving.',
          'Second, light travels at the same speed for all such observers, however fast they or the source are moving. Each statement seems reasonable. Together they contradict everyday ideas about time.',
        ],
      },
      {
        title: 'Simultaneity is relative',
        body: [
          'Einstein imagines lightning striking both ends of a moving train. A person standing on the embankment, halfway between the strikes, sees the two flashes at the same moment and calls them simultaneous.',
          'A passenger at the middle of the train is moving toward one flash and away from the other, and sees one first. Neither is wrong. Events that are simultaneous for one observer are not for another, and so time itself must be relative.',
        ],
      },
      {
        title: 'Moving clocks and the famous equation',
        body: [
          'It follows that a moving clock runs slow compared with one at rest, and a moving ruler is shortened in the direction of travel. The effects are tiny at ordinary speeds and enormous near the speed of light, which nothing can exceed.',
          'A further consequence is that mass and energy are the same thing in different forms. A small amount of mass corresponds to a huge amount of energy, the mass multiplied by the speed of light squared.',
        ],
      },
      {
        title: 'Gravity and acceleration are equivalent',
        body: [
          'The general theory begins with another picture. A man is in a closed chest far out in space, being pulled upward by a rope at a steady acceleration. He feels his feet pressed to the floor, and dropped objects fall.',
          'He has no way to tell this from standing in a chest at rest on the Earth. Einstein concludes that gravity and acceleration are equivalent. It also follows that a beam of light crossing the chest would appear to bend.',
        ],
      },
      {
        title: 'Curved space',
        body: [
          'In the full theory, matter curves space and time around it, and other bodies follow the straightest available paths through that curved geometry. What we call the force of gravity is this curvature.',
          'The theory explained a small, long-known oddity in the orbit of Mercury and predicted that starlight would bend near the Sun. Astronomers confirmed the bending during an eclipse in 1919. Today satellite navigation depends on its corrections.',
        ],
      },
    ],
    takeaway:
      'Time and space are not a fixed stage. They depend on motion and are bent by matter. Einstein reached this by taking two simple principles seriously and following them wherever they led.',
  },
  {
    id: 'dialogue-concerning-the-two-chief-world-systems',
    title: 'Dialogue Concerning the Two Chief World Systems',
    author: 'Galileo Galilei',
    year: '1632',
    category: 'nature',
    tagline: 'The witty debate about whether the Earth moves that put its author on trial.',
    about:
      'Galileo presented the case for a Sun-centered universe as a four-day conversation among three friends in Venice. Written in lively Italian for ordinary readers, it was a triumph of persuasion, and it led to his condemnation by the Inquisition.',
    whoFor: [
      'Anyone interested in the clash between evidence and authority',
      'Readers who enjoy science explained through argument',
      'People curious about what Galileo actually wrote',
    ],
    aboutAuthor:
      'Galileo Galilei was an Italian mathematician, physicist and astronomer. He was among the first to turn a telescope on the sky and is often called the father of modern science.',
    cover: { bg: '#2a2140', ink: '#f2ecda', accent: '#f0b429', motif: 'clock' },
    ideas: [
      {
        title: 'Three voices',
        body: [
          'The book has three speakers. Salviati argues for the system of Copernicus, in which the Earth circles the Sun. Simplicio defends the traditional view of Aristotle and Ptolemy that the Earth stands still at the center.',
          'Sagredo is an intelligent, open-minded host who asks the questions a reader would. Galileo wrote in Italian, not the Latin of scholars, because he wanted everyone to be able to follow.',
        ],
      },
      {
        title: 'The heavens are not perfect',
        body: [
          'The old philosophy held that everything beyond the Moon was flawless and unchanging. Galileo had looked through his telescope and seen otherwise.',
          'The Moon has mountains and valleys. The Sun has dark spots that move across it. Venus shows phases like the Moon, which is only possible if it goes around the Sun, and Jupiter has moons of its own. The Earth is not the only center of motion.',
        ],
      },
      {
        title: 'Why we do not feel the Earth move',
        body: [
          'The strongest objection was common sense. If the Earth were spinning, birds and clouds would be left behind, and a stone dropped from a tower would land far to the west.',
          'Salviati asks his friends to imagine a cabin below decks on a large ship. Butterflies fly, water drips into a bowl and a ball tossed between friends behaves in exactly the same way whether the ship is at rest or sailing smoothly. Shared motion cannot be felt.',
        ],
      },
      {
        title: 'A mistaken proof',
        body: [
          'Galileo wanted a physical proof that the Earth moves and believed he had found it in the tides. He argued that the seas slosh back and forth because of the planet\'s combined spinning and orbiting.',
          'He was wrong, and he dismissed the correct idea that the Moon is responsible as astrological fancy. The episode is a useful reminder that even the greatest scientists can fall in love with a bad argument.',
        ],
      },
      {
        title: 'The trial',
        body: [
          'The Church had allowed him to discuss the Copernican view only as a hypothesis. The book made it obvious which side had won, and the pope found one of his own favorite arguments placed in the mouth of Simplicio.',
          'In 1633 Galileo, nearly seventy, was made to kneel and renounce the motion of the Earth, and spent the rest of his life under house arrest. The book stayed on the list of forbidden works for two centuries.',
        ],
      },
    ],
    takeaway:
      'Look for yourself, and test what you are told against observation. Galileo showed that ordinary experience can be consistent with a moving Earth, and paid for insisting that evidence outranks authority.',
  },
  {
    id: 'principia',
    title: 'Principia',
    author: 'Isaac Newton',
    year: '1687',
    category: 'nature',
    tagline: 'Three laws and one force that explain the fall of an apple and the path of the Moon.',
    about:
      'In the Mathematical Principles of Natural Philosophy, Newton set out the laws of motion and universal gravitation and used them to explain the movements of planets, moons, comets and tides. It is probably the most important scientific book ever written.',
    whoFor: [
      'Anyone who wants to know what Newton actually achieved',
      'Readers interested in how science explains much with little',
      'Students who met the three laws at school and want the bigger picture',
    ],
    aboutAuthor:
      'Isaac Newton was an English mathematician and physicist who also invented calculus and made fundamental discoveries about light. He later ran the Royal Mint.',
    cover: { bg: '#1a2a3a', ink: '#f3efe0', accent: '#d65a31', motif: 'gap' },
    ideas: [
      {
        title: 'A question from Halley',
        body: [
          'In 1684 the astronomer Edmond Halley visited Newton in Cambridge and asked what path a planet would follow if the Sun attracted it with a force that weakened with the square of the distance.',
          'An ellipse, Newton answered at once. He had calculated it years before and mislaid the paper. Halley persuaded him to write the whole theory out, and paid for the printing himself.',
        ],
      },
      {
        title: 'The three laws of motion',
        body: [
          'First, a body stays at rest or keeps moving in a straight line at constant speed unless a force acts on it. Motion needs no cause. Only a change in motion does.',
          'Second, the change in motion is proportional to the force applied and happens in its direction. Third, to every action there is an equal and opposite reaction. With these three statements all of mechanics can be built.',
        ],
      },
      {
        title: 'Universal gravitation',
        body: [
          'Newton proposed that every body in the universe attracts every other with a force proportional to their masses and weaker with the square of the distance between them.',
          'He showed that the force holding the Moon in its orbit is the same force that makes an apple fall. The Moon is constantly falling toward the Earth and constantly missing it. For the first time, one law covered both the heavens and the ground.',
        ],
      },
      {
        title: 'What it explained',
        body: [
          'From these principles Newton derived the laws of planetary motion that Kepler had found by observation. He explained the tides as the pull of the Moon and the Sun on the oceans.',
          'He showed that comets follow orbits like planets, predicted that the Earth is slightly flattened at the poles, and accounted for the slow wobble of its axis. Each success was a calculation, not a guess.',
        ],
      },
      {
        title: 'Rules of reasoning',
        body: [
          'Newton set out rules for science. Admit no more causes than are needed to explain the appearances. Assign the same effects to the same causes. Treat conclusions drawn from observation as true until new observations correct them.',
          'He did not claim to know what gravity is, only how it behaves. I frame no hypotheses, he wrote. His system stood for more than two centuries until Einstein refined it, and it is still used to send spacecraft to the planets.',
        ],
      },
    ],
    takeaway:
      'A few precise laws, expressed in mathematics and checked against observation, can account for an astonishing range of things. Newton also showed that it is honest to describe how nature works without pretending to know why.',
  },
  {
    id: 'the-descent-of-man',
    title: 'The Descent of Man',
    author: 'Charles Darwin',
    year: '1871',
    category: 'nature',
    tagline: 'Twelve years after the Origin, Darwin finally applies evolution to us.',
    about:
      'In his earlier book Darwin had said only that light would be thrown on the origin of humankind. Here he sets out the evidence that humans descend from earlier animals, argues that our minds and morals evolved too, and introduces the theory of sexual selection.',
    whoFor: [
      'Readers who want to see how Darwin argued for human evolution',
      'Anyone interested in the evolutionary roots of morality',
      'People curious about peacocks\' tails and other puzzles of nature',
    ],
    aboutAuthor:
      'Charles Darwin was an English naturalist and the author of On the Origin of Species. He spent most of his life working at his home in Kent.',
    cover: { bg: '#3a2f25', ink: '#f3ead6', accent: '#8fbc5a', motif: 'tree' },
    ideas: [
      {
        title: 'The evidence of the body',
        body: [
          'Darwin starts with anatomy. Bone for bone, muscle for muscle, the human frame is built on the same plan as that of other mammals. A human embryo at an early stage can hardly be told from that of a dog.',
          'We carry leftovers with no present use: the tailbone, the appendix, the muscles that once moved our ears. He suggests that our earliest ancestors lived in Africa, because our nearest relatives, the gorilla and chimpanzee, live there.',
        ],
      },
      {
        title: 'A difference of degree',
        body: [
          'The harder question was the mind. Darwin argues that other animals show curiosity, memory, attention, affection, jealousy and the beginnings of reason. A dog dreams. An ape uses a stone to crack a nut.',
          'The gap between human and animal mental powers is immense, he grants, but it is a difference of degree and not of kind. Nothing in it requires a separate act of creation.',
        ],
      },
      {
        title: 'Where morality comes from',
        body: [
          'Darwin considers the moral sense the most important distinction of humankind. He derives it from the social instincts found in many animals, joined to memory and reflection.',
          'A tribe whose members were ready to help and defend one another would prevail over other tribes. As reason grows, sympathy widens from family to nation, then to all peoples and at last to all living creatures.',
        ],
      },
      {
        title: 'Sexual selection',
        body: [
          'More than half the book concerns a second mechanism of evolution. Some traits do not help an animal survive. They help it win a mate.',
          'Males compete with one another, which gives antlers and tusks. And females choose, which gives bright plumage, song and the peacock\'s tail. Darwin\'s idea that female preference could drive evolution was doubted for a century and is now well supported.',
        ],
      },
      {
        title: 'Strengths and blind spots',
        body: [
          'Darwin insisted that all human groups belong to one species with a common origin, and he hated slavery. But he shared prejudices of his age about a hierarchy of races and about the intellectual abilities of women, and they mar parts of the book.',
          'His conclusion is balanced. Humanity may be excused some pride at having risen so far, he writes, but with all our noble qualities we still bear in our bodily frame the indelible stamp of our lowly origin.',
        ],
      },
    ],
    takeaway:
      'We are part of the animal kingdom in body and in mind. Darwin argues that even conscience and sympathy have natural roots, and that knowing where we came from takes nothing away from what we can become.',
  },
  {
    id: 'the-voyage-of-the-beagle',
    title: 'The Voyage of the Beagle',
    author: 'Charles Darwin',
    year: '1839',
    category: 'nature',
    tagline: 'A young naturalist sails around the world and comes home with the makings of a revolution.',
    about:
      'Darwin was twenty-two when he joined a survey ship as its unpaid naturalist. His journal of the five-year voyage is a classic of travel writing, full of earthquakes, fossils, rainforests and tortoises, and of the observations that later became his theory.',
    whoFor: [
      'Lovers of travel and nature writing',
      'Anyone curious about how Darwin became Darwin',
      'Readers who like science as an adventure',
    ],
    aboutAuthor:
      'Charles Darwin was an English naturalist. He never left Britain again after the voyage, and drew on its notes and specimens for the rest of his career.',
    cover: { bg: '#1f5066', ink: '#f4efdd', accent: '#f2a541', motif: 'horizon' },
    ideas: [
      {
        title: 'A seasick naturalist',
        body: [
          'The Beagle left England in December 1831 to chart the coasts of South America. Darwin was seasick for much of the next five years, and escaped inland whenever the ship was at anchor.',
          'He rode with gauchos across the plains, climbed in the Andes and collected everything: rocks, beetles, birds, bones. He says the voyage taught him the habits of energetic industry and concentrated attention.',
        ],
      },
      {
        title: 'The Earth is still changing',
        body: [
          'In 1835 he lived through a violent earthquake in Chile. Afterward he found beds of mussels stranded several feet above the tide line. The land had risen in a moment.',
          'High in the mountains he found fossil seashells. He had been reading a new book arguing that small causes acting over vast time shaped the Earth, and here was the proof. He also dug up the bones of giant extinct sloths and armadillos that resembled the smaller living ones.',
        ],
      },
      {
        title: 'The Galápagos',
        body: [
          'The ship spent five weeks among these volcanic islands. The official in charge mentioned that he could tell which island a tortoise came from by the shape of its shell. Darwin noticed that the mockingbirds also differed from island to island.',
          'He collected a group of small finches with strikingly different beaks. In a later edition he wrote that one might fancy a single species had been taken and modified for different ends. It is the nearest the book comes to stating his theory.',
        ],
      },
      {
        title: 'Coral reefs',
        body: [
          'Before he had even seen one, Darwin worked out how ring-shaped coral islands form. Coral grows only in shallow water. If a volcanic island slowly sinks, the reef around it keeps growing upward.',
          'In the end the island vanishes and only the ring remains, enclosing a lagoon. Deep drilling confirmed the explanation more than a century later. It was his first great theory and shows his habit of reasoning from slow, steady causes.',
        ],
      },
      {
        title: 'People and wonder',
        body: [
          'Darwin was as observant of humans as of animals. In Brazil he was sickened by slavery and quarreled with the captain over it. He thanks God that he will never again visit a slave country.',
          'What stays with him most is the tropical forest, which fills him with a wonder close to worship. He ends by advising every young naturalist to travel. It teaches good-humored patience, he says, and shows how many kind people there are in the world.',
        ],
      },
    ],
    takeaway:
      'Great ideas often begin as patient noticing. Darwin went looking at everything with open curiosity, wrote it all down, and only years later understood what he had seen.',
  },
  {
    id: 'experiments-on-plant-hybridization',
    title: 'Experiments on Plant Hybridization',
    author: 'Gregor Mendel',
    year: '1866',
    category: 'nature',
    tagline: 'A monk, a garden of peas and the discovery of the laws of heredity.',
    about:
      'Over eight years Gregor Mendel bred and counted thousands of pea plants in a monastery garden. His short paper revealed that traits are inherited as separate units following simple mathematical rules. It was ignored for thirty-four years and then founded the science of genetics.',
    whoFor: [
      'Anyone curious about how inheritance works',
      'Readers who admire simple, decisive experiments',
      'People interested in overlooked discoveries',
    ],
    aboutAuthor:
      'Gregor Mendel was an Augustinian friar at a monastery in Brno, in what is now the Czech Republic. He later became its abbot and gave up research for administration.',
    cover: { bg: '#e7edd8', ink: '#22301c', accent: '#5c9a3a', motif: 'dots' },
    ideas: [
      {
        title: 'A well-designed experiment',
        body: [
          'Earlier breeders had crossed plants and described the muddle that resulted. Mendel did three things differently. He chose the garden pea, which normally fertilizes itself and can be crossed by hand.',
          'He studied seven traits that each come in two clear forms, such as round or wrinkled seeds and tall or short stems. And he counted every offspring, across several generations, in about twenty-eight thousand plants.',
        ],
      },
      {
        title: 'One form hides the other',
        body: [
          'When he crossed a pure tall variety with a pure short one, the offspring were not medium. Every one was tall. The same happened with each of the seven traits.',
          'Mendel called the form that appeared dominant and the one that vanished recessive. Inheritance, he saw, is not a blending like the mixing of paints. Something is passed on whole even when it does not show.',
        ],
      },
      {
        title: 'Three to one',
        body: [
          'He then let the hybrid plants fertilize themselves. In the next generation the hidden form reappeared, unchanged, in one plant out of four. Among more than seven thousand seeds, round outnumbered wrinkled by almost exactly three to one.',
          'Mendel explained this by supposing that each plant carries two factors for each trait, one from each parent, and passes on only one of them, chosen at random. Those factors are what we now call genes.',
        ],
      },
      {
        title: 'Traits are inherited independently',
        body: [
          'Next he followed two traits at once, for example seed shape and seed color. The four possible combinations appeared in a ratio of nine to three to three to one.',
          'That is exactly what the arithmetic predicts if each trait is passed on without regard to the other. We now know that this holds only for genes on different chromosomes, which happened to be true of the traits he chose.',
        ],
      },
      {
        title: 'Ignored, then rediscovered',
        body: [
          'Mendel read his paper to a local scientific society in 1865 and published it the next year. Almost no one noticed. Biologists were not used to mathematics, and he was an unknown friar.',
          'In 1900, sixteen years after his death, three botanists independently found the same laws and then found his paper. A later statistician noted that his numbers are almost too good, which is still debated. The laws themselves have never been in doubt.',
        ],
      },
    ],
    takeaway:
      'Choose a simple system, change one thing at a time and count. Mendel showed that behind the confusing variety of living things lie units of heredity that obey the laws of chance.',
  },
  {
    id: 'novum-organum',
    title: 'Novum Organum',
    author: 'Francis Bacon',
    year: '1620',
    category: 'nature',
    tagline: 'A new instrument for the mind: the manifesto of the scientific method.',
    about:
      'Francis Bacon believed that two thousand years of philosophy had produced much argument and little useful knowledge. In a series of numbered aphorisms he proposed a new method based on observation and experiment, and warned of the habits of mind that lead us astray.',
    whoFor: [
      'Anyone interested in how to think more clearly',
      'Readers curious about the origins of modern science',
      'People who want an early catalog of cognitive biases',
    ],
    aboutAuthor:
      'Francis Bacon was an English lawyer, statesman and philosopher who rose to be Lord Chancellor before falling from office in a bribery scandal.',
    cover: { bg: '#243028', ink: '#f2edda', accent: '#d9a441', motif: 'chevrons' },
    ideas: [
      {
        title: 'A new instrument',
        body: [
          'The title answers Aristotle, whose works on logic were known as the instrument. Bacon argues that the old logic can only arrange what is already believed. It cannot discover anything.',
          'The title page of his book shows a ship sailing out past the pillars that marked the edge of the ancient world. Just as explorers had found new continents, he thought, a new method could find new knowledge.',
        ],
      },
      {
        title: 'Knowledge is power',
        body: [
          'Human knowledge and human power, Bacon says, come to the same thing, because where the cause is unknown the effect cannot be produced.',
          'Nature, to be commanded, must be obeyed. We can make her work for us only by first learning her rules through humble observation. The purpose of science, for Bacon, is practical: the relief of the human condition.',
        ],
      },
      {
        title: 'The four idols',
        body: [
          'Before the mind can learn, it must be cleared of false notions, which he calls idols. The idols of the tribe belong to human nature itself. We see more order than exists and notice the cases that confirm our beliefs while overlooking those that do not.',
          'The idols of the cave are each individual\'s private prejudices. The idols of the marketplace come from the loose use of words. The idols of the theater are grand philosophical systems accepted on authority, like so many stage plays.',
        ],
      },
      {
        title: 'Induction done properly',
        body: [
          'Bacon\'s method is to collect instances systematically. To study heat, list the cases where it is present, the similar cases where it is absent, and the cases where it varies in degree. Then look for what is always there when heat is.',
          'He insists on moving step by step from particular facts to modest generalizations, and on prizing the negative instance. One clear counterexample outweighs any number of confirmations.',
        ],
      },
      {
        title: 'Ants, spiders and bees',
        body: [
          'Bacon sums up with a famous image. Mere experimenters are like ants, who only collect and use. Pure reasoners are like spiders, who spin webs out of their own substance.',
          'The true scientist is like the bee, which gathers material from the flowers and then transforms it by a power of its own. Bacon underrated mathematics and bold hypotheses, but the scientific societies of the next generation took him as their patron.',
        ],
      },
    ],
    takeaway:
      'The mind is not a clear mirror. To learn anything real we must know our own biases, look at the evidence in an orderly way, and care more about the case that contradicts us than the many that agree.',
  },
  {
    id: 'on-the-revolutions-of-the-heavenly-spheres',
    title: 'On the Revolutions of the Heavenly Spheres',
    author: 'Nicolaus Copernicus',
    year: '1543',
    category: 'nature',
    tagline: 'The book that moved the Earth from the center of the universe.',
    about:
      'For fourteen centuries astronomers placed a motionless Earth at the center of everything. A Polish church official worked out in detail a system with the Sun at the center, and published it only as he lay dying. It began the Scientific Revolution.',
    whoFor: [
      'Readers interested in the great turning points of thought',
      'Anyone curious how a correct idea can take so long to win',
      'Stargazers who want to know why planets seem to move backward',
    ],
    aboutAuthor:
      'Nicolaus Copernicus was a canon of the cathedral at Frombork in Poland. He was also trained in medicine and law, and pursued astronomy in his spare time.',
    cover: { bg: '#10243a', ink: '#f2eedd', accent: '#f4b942', motif: 'sun' },
    ideas: [
      {
        title: 'A system that had become a monster',
        body: [
          'The astronomy of Ptolemy could predict planetary positions, but only with a tangle of circles upon circles, each planet needing its own special devices.',
          'Copernicus complains that astronomers were like an artist who takes a hand from one model and a head from another, so that the result is a monster and not a man. He wanted a system whose parts fitted together.',
        ],
      },
      {
        title: 'The Sun in the middle',
        body: [
          'His proposal was simple to state. The Sun stands near the center. The Earth is one of the planets. It spins on its axis once a day, which is why the sky seems to turn, and circles the Sun once a year.',
          'The Earth\'s axis is tilted, and that produces the seasons. Only the Moon really goes around the Earth.',
        ],
      },
      {
        title: 'What it explains',
        body: [
          'Planets sometimes halt and move backward against the stars. In the old system this needed extra circles. For Copernicus it is an illusion that arises when the faster-moving Earth overtakes a slower planet.',
          'His scheme also fixes the order of the planets by the time each takes to orbit, from Mercury out to Saturn, and explains why Mercury and Venus never stray far from the Sun. Things that had been arbitrary now followed from one arrangement.',
        ],
      },
      {
        title: 'A much larger universe',
        body: [
          'There was an obvious objection. If the Earth travels in a huge circle, the stars ought to appear to shift during the year, and they do not.',
          'Copernicus drew the bold conclusion that the stars must be immensely far away, so far that the Earth\'s whole orbit is like a point by comparison. The universe was vastly bigger than anyone had imagined.',
        ],
      },
      {
        title: 'A cautious revolution',
        body: [
          'He kept the manuscript for some thirty years, fearing ridicule. A young mathematician finally persuaded him to print it, and the story goes that he saw a finished copy on the day he died.',
          'An unsigned preface, added without his consent, said the theory was only a convenient way to calculate. His system still used perfect circles and was no more accurate than the old one. The physical proof came later, from Kepler, Galileo and Newton.',
        ],
      },
    ],
    takeaway:
      'Sometimes the way forward is to question the one thing everybody takes for granted. Copernicus chose the explanation that made the whole picture coherent, even though it contradicted the evidence of the senses.',
  },
  {
    id: 'the-chemical-history-of-a-candle',
    title: 'The Chemical History of a Candle',
    author: 'Michael Faraday',
    year: '1861',
    category: 'nature',
    tagline: 'Six lectures for children that turn a burning candle into a tour of chemistry.',
    about:
      'One of the greatest experimental scientists gave a series of Christmas lectures for young people at the Royal Institution in London. Starting from an ordinary candle, he leads his audience to combustion, the composition of water and air, and the chemistry of their own breathing.',
    whoFor: [
      'Curious readers of any age',
      'Teachers looking for a model of how to explain',
      'Anyone who wants to see how much lies hidden in an everyday object',
    ],
    aboutAuthor:
      'Michael Faraday was an English scientist who discovered the principles behind the electric motor and generator. A blacksmith\'s son, he began as a bookbinder\'s apprentice and taught himself science.',
    cover: { bg: '#2b2a26', ink: '#f6efdc', accent: '#f6a623', motif: 'sprout' },
    ideas: [
      {
        title: 'An open door to science',
        body: [
          'Faraday tells his young audience that there is no better and no more open door into the study of nature than the physical phenomena of a candle. Almost every law of the universe is touched on by it.',
          'He does not merely tell them things. He does everything in front of them, and urges them to try the experiments at home. A good question, he suggests, is always: what is the cause, and why does it happen?',
        ],
      },
      {
        title: 'How a candle feeds itself',
        body: [
          'The heat of the flame melts the wax at the top into a little cup of liquid, kept in shape by the cool air rising around it. The liquid climbs the wick by the same attraction that draws water up into a towel.',
          'At the top it turns to vapor, and it is the vapor that burns. Faraday proves it by blowing a candle out and relighting it from several inches away, by setting fire to the trail of smoke.',
        ],
      },
      {
        title: 'Why a flame is bright',
        body: [
          'A flame is hollow. Burning takes place only at its surface, where the vapor meets the air. Hold a sheet of paper across it for a moment and it scorches in a ring.',
          'The light comes from tiny solid particles of carbon, glowing white-hot before they burn away. If they escape unburned they are soot. A flame with no solid particles in it, like that of pure hydrogen, gives heat and almost no light.',
        ],
      },
      {
        title: 'What burning produces',
        body: [
          'Faraday holds a cold vessel over the flame and it mists over. A candle makes water. By taking water apart he shows that it consists of hydrogen and oxygen, and so the wax must contain hydrogen.',
          'The other product is an invisible, heavy gas that turns clear limewater milky. It is carbon dioxide, made from the carbon in the wax and the oxygen of the air. Without a supply of air the candle goes out.',
        ],
      },
      {
        title: 'The candle within us',
        body: [
          'In the last lecture he breathes through a tube into limewater, and it turns milky too. We take in oxygen and give out carbon dioxide. Our bodies burn food slowly, as the candle burns wax, to keep us warm and moving.',
          'Plants take up what animals breathe out and return the oxygen. Faraday closes with a wish for his listeners: that in their generation they may be fit to be compared to a candle, and shine as lights to those around them.',
        ],
      },
    ],
    takeaway:
      'Look closely at any ordinary thing and ask why, and it will lead you into the deepest questions. Faraday shows that science is not a list of facts. It is the habit of testing ideas with your own eyes and hands.',
  },
  {
    id: 'euclids-elements',
    title: 'The Elements',
    author: 'Euclid',
    year: 'c. 300 BCE',
    category: 'nature',
    tagline: 'The most successful textbook in history, and the model of how to prove something.',
    about:
      'Euclid gathered the mathematics of the Greek world into thirteen books that begin with a handful of simple assumptions and build, step by logical step, to hundreds of results. For two thousand years it was how educated people learned to reason.',
    whoFor: [
      'Anyone who wants to understand what a proof is',
      'Readers interested in the foundations of mathematics and logic',
      'People who struggled with school geometry and wonder what the point was',
    ],
    aboutAuthor:
      'Euclid taught in Alexandria in Egypt around 300 BCE. Almost nothing is known about his life.',
    cover: { bg: '#f1ecdc', ink: '#1f2933', accent: '#2f6fb0', motif: 'ziggurat' },
    ideas: [
      {
        title: 'Start from almost nothing',
        body: [
          'The Elements opens with definitions, such as that a point is that which has no part, and with ten assumptions so plain that no one would dispute them. Things equal to the same thing are equal to each other. A straight line can be drawn between any two points.',
          'Everything else must be derived from these. Nothing may be assumed because it looks true in a diagram. This idea, that knowledge can be organized as a chain from first principles, is the book\'s deepest legacy.',
        ],
      },
      {
        title: 'One step at a time',
        body: [
          'The first proposition shows how to construct a triangle with three equal sides, using only a straightedge and compasses. Each later proposition may use only the assumptions and what has already been proved.',
          'By the end of the first book this patient method reaches the theorem of Pythagoras: in a right-angled triangle, the square on the longest side equals the sum of the squares on the other two. The proof ends with the phrase that became famous: which was to be demonstrated.',
        ],
      },
      {
        title: 'Numbers as well as shapes',
        body: [
          'The Elements is not only geometry. It contains a method for finding the largest number that divides two given numbers, which is still taught and is among the oldest procedures in continuous use.',
          'It also proves that the prime numbers never end. Suppose there were a largest prime. Multiply all the primes together and add one. The result is divisible by none of them, so there must be another. The argument takes a few lines and has never been improved.',
        ],
      },
      {
        title: 'The troublesome fifth postulate',
        body: [
          'One of Euclid\'s assumptions is much less obvious than the rest. It amounts to saying that through a point not on a line, exactly one parallel line can be drawn.',
          'For two thousand years mathematicians tried to prove it from the others and failed. In the nineteenth century several of them realized why: you can deny it and get perfectly consistent geometries of curved space. Einstein later used one to describe gravity.',
        ],
      },
      {
        title: 'A training for the mind',
        body: [
          'Only the Bible has gone through more editions. When a king asked for an easier way to learn the subject, Euclid is said to have answered that there is no royal road to geometry.',
          'Abraham Lincoln worked through the first six books as an adult in order to learn what it means to demonstrate something. Philosophers and the authors of constitutions borrowed its form, starting from truths held to be self-evident.',
        ],
      },
    ],
    takeaway:
      'State your assumptions, take nothing else for granted and move by steps anyone can check. Euclid\'s lasting gift is not any single theorem. It is a standard for what counts as knowing.',
  },
]
