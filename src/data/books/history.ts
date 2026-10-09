import type { Book } from '../types'

export const history: Book[] = [
  {
    id: 'the-histories',
    title: 'The Histories',
    author: 'Herodotus',
    year: 'c. 430 BCE',
    category: 'history',
    tagline: 'The first work of history, by a traveler who could not resist a good story.',
    about:
      'Herodotus set out to explain why the Greeks and the Persians went to war. Along the way he described every land and custom he could learn about, and in doing so invented a new kind of writing: the investigation of the human past.',
    whoFor: [
      'Readers who like history told as stories',
      'Anyone curious about how different peoples live',
      'Fans of Thermopylae and Marathon who want the original account',
    ],
    aboutAuthor:
      'Herodotus was a Greek from Halicarnassus, in what is now Turkey. He traveled widely around the Mediterranean and has been called both the father of history and the father of lies.',
    cover: { bg: '#1d4e6b', ink: '#f4ecd8', accent: '#e8b04b', motif: 'columns' },
    ideas: [
      {
        title: 'History begins as inquiry',
        body: [
          'The Greek word for his project, historia, simply means inquiry. Herodotus says he writes so that the deeds of Greeks and foreigners alike will not be forgotten, and to show why they fought each other.',
          'His method is to travel, ask and compare. He reports what he was told even when he doubts it, and often says so. My duty is to record what people say, he remarks, but I am not obliged to believe it.',
        ],
      },
      {
        title: 'Call no one happy until the end',
        body: [
          'King Croesus of Lydia, the richest man alive, asks the Athenian sage Solon who is the happiest of men and expects to be named. Solon names obscure people who lived well and died well, and says no life can be judged until it is over.',
          'Croesus later asks an oracle whether to attack Persia and is told he will destroy a great empire. He does, and it is his own. Fortune is unstable, and Herodotus returns to that lesson throughout.',
        ],
      },
      {
        title: 'Custom is king',
        body: [
          'The Persian king Darius asks some Greeks what payment would persuade them to eat their dead fathers. They are horrified. He then asks some Indians, who do eat their dead, what would persuade them to burn them. They are equally horrified.',
          'Herodotus concludes that everyone believes their own customs are best. He describes Egypt, Scythia and Babylon with open curiosity, and treats difference as something to be understood, not mocked.',
        ],
      },
      {
        title: 'Pride comes before a fall',
        body: [
          'When a storm destroys his bridge of boats, the Persian king Xerxes orders the sea itself to be whipped. His uncle warns him that the god strikes the tallest trees and the largest houses with lightning. Xerxes marches on.',
          'This pattern of arrogance followed by ruin shapes the whole work. Power that forgets its limits invites its own destruction, whether it belongs to Croesus, Cyrus or Xerxes.',
        ],
      },
      {
        title: 'Free people fight harder',
        body: [
          'The climax is the Persian invasion of Greece. At Marathon the Athenians charge and win. At Thermopylae three hundred Spartans hold a pass until they are betrayed. At Salamis a smaller fleet lures the Persians into narrow water.',
          'An exiled Spartan tells Xerxes why his countrymen will not run: they are free, but they have a master, the law, which they fear more than his subjects fear him. For Herodotus this is why the few defeated the many.',
        ],
      },
    ],
    takeaway:
      'Be curious about other peoples, skeptical about what you are told and wary of success. Fortune turns, arrogance is punished, and people defending their own freedom are hard to beat.',
  },
  {
    id: 'history-of-the-peloponnesian-war',
    title: 'History of the Peloponnesian War',
    author: 'Thucydides',
    year: 'c. 400 BCE',
    category: 'history',
    tagline: 'A cold-eyed account of how a great democracy destroyed itself.',
    about:
      'An Athenian general who was exiled for losing a battle, Thucydides spent twenty years recording the war between Athens and Sparta. He left out gods and legends and wrote about power, fear and human nature, creating the first work of political realism.',
    whoFor: [
      'Anyone interested in power politics and international relations',
      'Readers who want to understand how democracies go wrong',
      'People who hear the phrase "Thucydides trap" and want its source',
    ],
    aboutAuthor:
      'Thucydides was an Athenian aristocrat and general. He caught the plague and survived, was exiled in 424 BCE and used his exile to gather evidence from both sides.',
    cover: { bg: '#2b2d33', ink: '#f1eadb', accent: '#c0392b', motif: 'chevrons' },
    ideas: [
      {
        title: 'A possession for all time',
        body: [
          'Thucydides announces that his work is not written to win applause today. He has checked eyewitness accounts against each other, avoided romance and tried to establish what actually happened.',
          'His reason is that human nature stays the same. Events like these will happen again in much the same way, so an accurate record of one war will be useful to anyone who wants to understand the next.',
        ],
      },
      {
        title: 'The real cause was fear',
        body: [
          'Each side offered public complaints about treaties and allies. Thucydides looks past them. The truest cause, he writes, was the growth of Athenian power and the fear this aroused in Sparta, which made war inevitable.',
          'The distinction between stated grievances and underlying causes was new. It remains the starting point for anyone analyzing why a rising power and an established one drift into conflict.',
        ],
      },
      {
        title: 'The ideal and the plague',
        body: [
          'In a funeral speech for the first war dead, the statesman Pericles describes Athens as open, free and governed by the many, a city that is an education to all Greece.',
          'Thucydides places the plague directly afterward. Bodies pile up, people stop honoring the law or the gods, and they spend what they have on pleasure because tomorrow is uncertain. The finest civilization, he shows, is a thin layer.',
        ],
      },
      {
        title: 'The strong do what they can',
        body: [
          'Athens demands that the small neutral island of Melos submit. When the Melians appeal to justice, the Athenian envoys reply that right is only in question between equals. The strong do what they can and the weak suffer what they must.',
          'Melos refuses, is conquered, and its men are killed. Thucydides also shows how civil war on Corcyra changed the meaning of words, so that recklessness was called courage and moderation was called cowardice.',
        ],
      },
      {
        title: 'Overreach in Sicily',
        body: [
          'At the height of its confidence, Athens votes to invade distant Sicily. The glamorous Alcibiades urges it on. The cautious general Nicias tries to discourage the assembly by describing the huge force required, and they vote for the huge force.',
          'The expedition ends in total disaster at Syracuse, with the fleet destroyed and the survivors enslaved in quarries. Thucydides blames leaders who, after Pericles, flattered the people instead of guiding them.',
        ],
      },
    ],
    takeaway:
      'Look beneath stated reasons to fear and interest. Power tempts states to abandon justice, war erodes character, and a democracy without honest leadership can vote itself into catastrophe.',
  },
  {
    id: 'the-decline-and-fall-of-the-roman-empire',
    title: 'The Decline and Fall of the Roman Empire',
    author: 'Edward Gibbon',
    year: '1776',
    category: 'history',
    tagline: 'Six volumes on how the greatest empire in the West came apart.',
    about:
      'Gibbon traces thirteen centuries, from the height of Rome under the Antonines to the fall of Constantinople in 1453. His irony, his range and his argument about why Rome fell made this the most famous work of history in English.',
    whoFor: [
      'Anyone who wonders why great powers decline',
      'Readers who admire grand, witty prose',
      'People interested in Rome, Byzantium and early Christianity',
    ],
    aboutAuthor:
      'Edward Gibbon was an English historian and Member of Parliament. He conceived the work in 1764 while sitting among the ruins of the Capitol in Rome.',
    cover: { bg: '#5a2a27', ink: '#f5ead6', accent: '#d9a441', motif: 'hourglass' },
    ideas: [
      {
        title: 'A golden age that depended on one man',
        body: [
          'Gibbon opens in the second century, when the empire covered the fairest part of the earth. He judges the years from 96 to 180 the period in which the human race was most happy and prosperous.',
          'But that happiness rested on the character of a single ruler. When the philosopher Marcus Aurelius was succeeded by his vicious son Commodus, there was no institution strong enough to protect the state from a bad emperor.',
        ],
      },
      {
        title: 'The army learned it could make emperors',
        body: [
          'In 193 the Praetorian Guard murdered an emperor and auctioned the throne to the highest bidder. For much of the next century, generals were raised and killed by their own troops.',
          'Meanwhile the citizens lost the habit of bearing arms. Rome came to rely on paid barbarian soldiers to defend it against other barbarians, and discipline and public spirit drained away together.',
        ],
      },
      {
        title: 'The role of Christianity',
        body: [
          'In two notorious chapters, Gibbon argues that the new religion contributed to the decline. It turned attention toward the next world, he says, drew able men into monasteries and consumed energy in quarrels over doctrine.',
          'The claim caused a scandal and is still debated. Most modern historians give it much less weight than he did, and point to money, plague, civil war and pressure on the frontiers.',
        ],
      },
      {
        title: 'The natural effect of immoderate greatness',
        body: [
          'Gibbon gives his general verdict in a single passage. The decline of Rome was the natural and inevitable result of immoderate greatness. Prosperity ripened the principle of decay, and the structure yielded to its own weight.',
          'Instead of asking why the empire was destroyed, he says, we should be surprised that it lasted so long. The division into East and West, and the invasions of Goths, Vandals and Huns, finished the work.',
        ],
      },
      {
        title: 'A thousand years of afterlife',
        body: [
          'More than half the work follows the eastern empire at Constantinople, the rise of Islam, the Crusades and the final Turkish conquest. Gibbon is less sympathetic to Byzantium than later scholars.',
          'He describes his subject as the triumph of barbarism and religion, and history in general as little more than the register of the crimes, follies and misfortunes of mankind. The tone is ironic, but the learning is immense.',
        ],
      },
    ],
    takeaway:
      'Empires are not usually murdered. They weaken from within, as institutions decay, citizens leave their defense to others and success hides the damage, until an outside shock finds little left to resist it.',
  },
  {
    id: 'parallel-lives',
    title: 'Parallel Lives',
    author: 'Plutarch',
    year: 'c. 100 CE',
    category: 'history',
    tagline: 'Greek and Roman greats, paired off to show what character is made of.',
    about:
      'Plutarch wrote some fifty biographies of famous Greeks and Romans, most arranged in pairs with a comparison. His interest was not events but character, and his portraits shaped how the world remembers Alexander, Caesar, Cicero and Antony.',
    whoFor: [
      'Readers who learn best from the lives of others',
      'Leaders looking for models and warnings',
      'Anyone who loves the Roman plays of Shakespeare',
    ],
    aboutAuthor:
      'Plutarch was a Greek philosopher and biographer from the small town of Chaeronea, where he lived most of his life. He also served as a priest at Delphi.',
    cover: { bg: '#e6dcc6', ink: '#262019', accent: '#8a3b2a', motif: 'rings' },
    ideas: [
      {
        title: 'Lives, not histories',
        body: [
          'Plutarch tells the reader what to expect. He is writing lives, not histories, and the most glorious deeds do not always reveal virtue or vice. A chance remark or a joke often shows more of a person than a battle with thousands dead.',
          'He compares himself to a portrait painter, who concentrates on the face and the eyes, where character appears, and gives less attention to the rest of the body.',
        ],
      },
      {
        title: 'Greeks and Romans, side by side',
        body: [
          'Each Greek is matched with a Roman of similar career. The conqueror Alexander is set beside Caesar, the orator Demosthenes beside Cicero, the founder Theseus beside Romulus.',
          'A short comparison usually follows, weighing one against the other. The pairing let Plutarch show his Greek readers that Rome had great men, and his Roman readers that Greece had been their equal.',
        ],
      },
      {
        title: 'Character is trained',
        body: [
          'Plutarch pays close attention to how his subjects were formed. Alexander had Aristotle for a tutor and slept with a copy of Homer under his pillow.',
          'Demosthenes was a weak speaker with a stammer. He practiced with pebbles in his mouth, declaimed against the roar of the sea and shaved half his head so that he would be ashamed to leave his study. Greatness, for Plutarch, is mostly habit.',
        ],
      },
      {
        title: 'Great gifts come with great flaws',
        body: [
          'His heroes are never simple. Alcibiades is brilliant, charming and treacherous. Coriolanus is brave and ruined by pride. Antony is a fine soldier destroyed by his passion for Cleopatra.',
          'Even Alexander kills a friend in a drunken rage. Plutarch records the failures as carefully as the victories, because a flaw that is small in a private person becomes a disaster in someone with power.',
        ],
      },
      {
        title: 'History as a mirror',
        body: [
          'Plutarch says he began writing for the sake of others and continued for his own. He uses these lives as a mirror, trying to arrange his own life by the virtues he sees in them.',
          'Readers have used the book the same way ever since. Shakespeare took his Roman plays from it, and the founders of the United States read it as a manual of public character.',
        ],
      },
    ],
    takeaway:
      'Study people, not just events. Character shows in small things, is built by training and habit, and decides how a person handles power when it comes.',
  },
  {
    id: 'the-gallic-war',
    title: 'The Gallic War',
    author: 'Julius Caesar',
    year: 'c. 50 BCE',
    category: 'history',
    tagline: 'A general reports on his own conquest, in the third person.',
    about:
      'In eight years Julius Caesar conquered what is now France and Belgium. He described the campaigns himself in plain, fast prose, sending the reports back to Rome. They are a military classic and a masterpiece of self-promotion.',
    whoFor: [
      'Readers interested in strategy and leadership under pressure',
      'Anyone curious how Caesar built his own legend',
      'People who want a primary source from the Roman world',
    ],
    aboutAuthor:
      'Gaius Julius Caesar was a Roman general, politician and writer. After the conquest of Gaul he crossed the Rubicon, won a civil war and was assassinated in 44 BCE.',
    cover: { bg: '#7b1e1e', ink: '#f6ebd5', accent: '#e0b03f', motif: 'crown' },
    ideas: [
      {
        title: 'Plain words, political purpose',
        body: [
          'The book opens with a famously simple sentence: all Gaul is divided into three parts. Caesar writes about himself as he, never I, which makes the account sound like an impartial record.',
          'It was nothing of the kind. He was far from Rome and had enemies there. These dispatches kept his name before the public and presented every campaign as necessary, successful and in defense of Roman allies.',
        ],
      },
      {
        title: 'Speed and engineering',
        body: [
          'Caesar repeatedly wins by arriving before he is expected. Forced marches bring his legions to places the enemy thought were days away, and decisions are made on the spot.',
          'His soldiers were also builders. They bridged the Rhine in ten days simply to show that they could, then took the bridge down. Against a seafaring tribe they used hooks on poles to cut the rigging of ships they could not ram.',
        ],
      },
      {
        title: 'Divide and conquer',
        body: [
          'Gaul was not one nation but dozens of rival tribes. Caesar entered as the protector of Roman allies against a migrating people and a German king, and then stayed.',
          'He played one tribe against another, rewarded friends and punished defections harshly. He also made two expeditions to Britain. They achieved little on the ground and a great deal for his reputation at home.',
        ],
      },
      {
        title: 'Vercingetorix and Alesia',
        body: [
          'In the seventh year a young noble, Vercingetorix, united the tribes and burned his own towns to starve the Romans. He beat Caesar at Gergovia and then withdrew to the hill fort of Alesia.',
          'Caesar surrounded the town with one ring of fortifications facing in, and built a second ring facing out against a huge relief army. Fighting on both sides at once, the Romans held. Vercingetorix rode out and surrendered.',
        ],
      },
      {
        title: 'Read it critically',
        body: [
          'The conquest was brutal. Ancient writers claimed a million Gauls were killed and as many enslaved, and Caesar himself reports massacring two German tribes, women and children included.',
          'The book is at once a primary source and a piece of propaganda. It rewards a reader who asks what the author wants them to believe, and what the people he defeated would have said.',
        ],
      },
    ],
    takeaway:
      'Move faster than your opponent expects, exploit their divisions and tell your own story before others tell it for you. Then remember that whoever writes the report controls how the victory looks.',
  },
  {
    id: 'the-twelve-caesars',
    title: 'The Twelve Caesars',
    author: 'Suetonius',
    year: 'c. 121 CE',
    category: 'history',
    tagline: 'Gossip, scandal and statecraft from Julius Caesar to Domitian.',
    about:
      'Suetonius wrote the lives of the first twelve rulers of imperial Rome. He had access to the palace archives and a taste for revealing detail, and his portraits of Caligula and Nero have fixed their reputations ever since.',
    whoFor: [
      'Readers who enjoy vivid, scandalous biography',
      'Anyone interested in what absolute power does to people',
      'Fans of historical dramas about Rome',
    ],
    aboutAuthor:
      'Gaius Suetonius Tranquillus was a Roman scholar who served as secretary to the emperor Hadrian, a post that gave him access to imperial letters and records.',
    cover: { bg: '#3b2a55', ink: '#f3ead8', accent: '#d4a84b', motif: 'crown' },
    ideas: [
      {
        title: 'Biography by subject, not by date',
        body: [
          'Suetonius does not simply narrate each reign in order. He arranges his material by topic: family, career, public works, then appearance, habits, sayings, omens and death.',
          'This lets him include things other historians thought beneath them, such as what an emperor ate, how he dressed and what he was afraid of. The result feels surprisingly modern.',
        ],
      },
      {
        title: 'Augustus: power behind modest manners',
        body: [
          'The first emperor lived in a plain house, wore clothes made by the women of his family and slept in the same bedroom for forty years. He boasted that he found Rome a city of brick and left it a city of marble.',
          'He kept the forms of the republic while holding all real power. On his deathbed, Suetonius says, he asked his friends whether he had played his part in the comedy of life well, and asked for applause.',
        ],
      },
      {
        title: 'What unchecked power does',
        body: [
          'The later lives grow darker. Tiberius withdraws to Capri and to cruelty. Caligula says he does not care if they hate him so long as they fear him, and is said to have planned to make his horse a consul.',
          'Nero murders his mother, performs on stage and, in the famous story, sings while Rome burns. Facing death, he laments what an artist is perishing with him. None of them had anyone who could say no.',
        ],
      },
      {
        title: 'The year of four emperors',
        body: [
          'After Nero, three men seize the throne and die within a year. The fourth, Vespasian, is a blunt soldier with a sense of humor who restores stability.',
          'When his son objects to a tax on public urinals, he holds a coin under his nose and asks if it smells. As he lies dying he jokes that he thinks he is becoming a god.',
        ],
      },
      {
        title: 'How to read him',
        body: [
          'Suetonius mixes documents with rumor and does not always tell the reader which is which. Some of his best stories were surely court gossip or the inventions of enemies.',
          'Even so, his central observation holds. In a system where everything depends on one person, that person\'s private character becomes a public matter, and their vices become everyone\'s danger.',
        ],
      },
    ],
    takeaway:
      'Power without limits magnifies whatever a person already is. Restraint, humor and modest habits kept some emperors sane, and their absence turned others into monsters.',
  },
  {
    id: 'the-muqaddimah',
    title: 'The Muqaddimah',
    author: 'Ibn Khaldun',
    year: '1377',
    category: 'history',
    tagline: 'A fourteenth-century scholar invents the science of society.',
    about:
      'Written as the introduction to a history of the world, the Muqaddimah asks a question no one had asked so systematically: why do states rise and fall? Its answers anticipate sociology and economics by four or five hundred years.',
    whoFor: [
      'Readers interested in the rise and decline of civilizations',
      'Students of sociology and economics who want an early source',
      'Anyone curious about the intellectual history of the Islamic world',
    ],
    aboutAuthor:
      'Ibn Khaldun was a scholar, judge and diplomat born in Tunis. He served rulers across North Africa and Spain, and late in life met the conqueror Timur outside Damascus.',
    cover: { bg: '#0f5d5a', ink: '#f4edd8', accent: '#e9b949', motif: 'dots' },
    ideas: [
      {
        title: 'Test what you are told',
        body: [
          'Ibn Khaldun begins by criticizing earlier historians. They pass on reports without checking them, he says, such as armies of impossible size. A historian must ask whether a thing could have happened at all.',
          'To do that, one needs to understand how human societies actually work. He calls this a new science, the study of civilization, and sets out to found it.',
        ],
      },
      {
        title: 'Group feeling is the engine of power',
        body: [
          'His key concept is asabiyyah, usually translated as group feeling or solidarity. It is the bond that makes people willing to fight and die for one another.',
          'It is strongest, he observes, among desert and mountain peoples who live hard lives and depend on kin. Such groups are poor but united, and that unity is a military advantage that wealthy cities cannot buy.',
        ],
      },
      {
        title: 'Dynasties have a life span',
        body: [
          'A tough people from the margins conquers a rich, settled state. The first generation keeps its discipline. The second enjoys the fruits. The third knows only luxury and has forgotten how the power was won.',
          'Solidarity fades, the rulers hire others to fight for them, and after about three generations a new group from outside sweeps them away. Ibn Khaldun had watched this cycle repeat across North Africa.',
        ],
      },
      {
        title: 'Early economics',
        body: [
          'He argues that wealth comes from human labor and that people grow richer by dividing tasks and cooperating. Cities prosper because many crafts support each other.',
          'He also notes that at the start of a dynasty taxes are low and revenue is high, while at the end taxes are high and revenue is low, because heavy taxation discourages work. Injustice, he warns, ruins civilization.',
        ],
      },
      {
        title: 'Learning is a craft',
        body: [
          'Ibn Khaldun treats knowledge like any other skill, acquired by practice and habit under a good teacher. He recommends teaching gradually and returning to a subject several times at greater depth.',
          'He opposes harshness toward students. Severity, he says, makes them lazy and dishonest, because they learn to hide their thoughts in order to escape punishment.',
        ],
      },
    ],
    takeaway:
      'States are built by groups with strong solidarity and lost when comfort dissolves it. Check claims against how the world works, and remember that prosperity, taxation and justice are linked.',
  },
  {
    id: 'the-influence-of-sea-power-upon-history',
    title: 'The Influence of Sea Power upon History',
    author: 'Alfred Thayer Mahan',
    year: '1890',
    category: 'history',
    tagline: 'The book that convinced the world that whoever commands the sea commands trade.',
    about:
      'An American naval officer studied the wars of the seventeenth and eighteenth centuries and concluded that control of the sea had decided them. His book was read by presidents, kaisers and admirals and helped start a global naval arms race.',
    whoFor: [
      'Readers interested in strategy and geopolitics',
      'Anyone who wants to understand why navies and shipping lanes matter',
      'Students of how a single book can change policy',
    ],
    aboutAuthor:
      'Alfred Thayer Mahan was a United States Navy officer and lecturer at the Naval War College. He disliked sea duty and became the most influential naval writer in history.',
    cover: { bg: '#12324a', ink: '#eef0e6', accent: '#6fc3df', motif: 'waves' },
    ideas: [
      {
        title: 'The sea is a great highway',
        body: [
          'Mahan asks the reader to see the ocean as a wide common over which people may pass in all directions. Goods have always moved more cheaply by water than by land.',
          'A nation that can use that highway freely in war, and deny it to an enemy, grows rich while the enemy is strangled. Navies exist, in his view, to protect and extend commerce.',
        ],
      },
      {
        title: 'Six conditions of sea power',
        body: [
          'He lists what makes a nation a sea power. Geographical position comes first: an island with good harbors, like Britain, need not defend a land frontier. Then the shape of the coast, and the extent of territory.',
          'The others are human: the size of the population, the character of the people, especially their taste for trade, and the character of the government, which must support the navy steadily in peacetime.',
        ],
      },
      {
        title: 'The lesson of Britain and France',
        body: [
          'Most of the book is a history of the wars between 1660 and 1783. France had more people and wealth, but kept being drawn into land wars in Europe and neglected its fleet.',
          'Britain concentrated on the sea. Its command of the oceans let it take colonies, protect its trade and pay allies to fight on the continent. Mahan presents this as the hidden cause of British supremacy.',
        ],
      },
      {
        title: 'Concentrate the fleet and seek battle',
        body: [
          'Raiding enemy merchant ships can annoy an opponent, Mahan argues, but it cannot win a war. Only a battle fleet that defeats or blockades the enemy fleet can secure the sea.',
          'That fleet should be kept together, not scattered. It also needs a merchant marine behind it and bases and coaling stations abroad, which in his day meant colonies.',
        ],
      },
      {
        title: 'A book that changed policy',
        body: [
          'The effect was immediate. Theodore Roosevelt praised it, the German emperor had it placed on every ship, and Japan adopted it as a text. Battleship building accelerated everywhere before 1914.',
          'Critics note that Mahan underrated land power, railways and, later, submarines and aircraft. His central insight, that prosperity depends on secure trade routes, still shapes strategy.',
        ],
      },
    ],
    takeaway:
      'Wealth travels by sea, and the power that keeps the sea lanes open for itself and closed to rivals has a decisive advantage. Geography, trade and steady investment matter more than any single victory.',
  },
  {
    id: 'the-outline-of-history',
    title: 'The Outline of History',
    author: 'H. G. Wells',
    year: '1920',
    category: 'history',
    tagline: 'The whole story of humankind in one volume, told as a single shared adventure.',
    about:
      'After the First World War, the novelist Wells decided that nations kept fighting partly because each taught only its own history. He wrote a history of everyone, from the formation of the Earth to 1919. It sold more than two million copies.',
    whoFor: [
      'Readers who want the big picture in one sweep',
      'Anyone who feels school history was too narrow',
      'People interested in the idea of a shared human story',
    ],
    aboutAuthor:
      'Herbert George Wells was an English writer best known for The Time Machine and The War of the Worlds. He was also a tireless campaigner for education and world government.',
    cover: { bg: '#27435b', ink: '#f2ecda', accent: '#f0a53a', motif: 'horizon' },
    ideas: [
      {
        title: 'One story for one species',
        body: [
          'Wells believed that history taught as the glory of one nation trains people for war. If there was to be peace, there had to be common historical ideas shared by all peoples.',
          'So he starts before any nation existed, with the Earth in space, the record of the rocks and the long emergence of life and early humans. Kings and battles arrive late and take up less room than usual.',
        ],
      },
      {
        title: 'Communication enlarges community',
        body: [
          'A recurring theme is that the size of a society depends on how well people can share ideas. Speech allowed the tribe. Writing allowed the city and the empire. Roads, coinage and printing each widened the circle again.',
          'The railway, the steamship and the telegraph, Wells argues, have now made the whole planet one neighborhood. Political arrangements have not caught up.',
        ],
      },
      {
        title: 'Nomads and the settled',
        body: [
          'Wells sees a long rhythm in which settled farming civilizations grow rich and rigid and are then conquered and refreshed by nomadic peoples from the grasslands.',
          'He also contrasts two kinds of community. One is held together by obedience to a ruler. The other is held together by a shared will. Empires of the first kind are large and brittle.',
        ],
      },
      {
        title: 'Teachers above conquerors',
        body: [
          'In ranking the great figures of history, Wells puts moral teachers first. The Buddha, Jesus and Muhammad changed how millions lived. He gives special praise to the Indian emperor Asoka, who renounced war.',
          'Conquerors fare badly. Alexander is treated as a spoiled young man, and Napoleon as a vain adventurer who wasted the greatest opportunity ever offered to one person.',
        ],
      },
      {
        title: 'A race between education and catastrophe',
        body: [
          'Wells ends by looking ahead. Science has given humanity enormous destructive power, and only a common understanding can prevent its use. History, he writes, is becoming a race between education and catastrophe.',
          'Specialists attacked the book for errors and for its confident judgments. But it proved there was a vast audience for world history, and its closing warning has not dated.',
        ],
      },
    ],
    takeaway:
      'Humanity has one history, not many rival ones. Our tools have united the world faster than our loyalties have, and closing that gap through education is the urgent task.',
  },
  {
    id: 'the-economic-consequences-of-the-peace',
    title: 'The Economic Consequences of the Peace',
    author: 'John Maynard Keynes',
    year: '1919',
    category: 'history',
    tagline: 'The economist who walked out of Versailles and predicted where it would lead.',
    about:
      'Keynes attended the Paris Peace Conference as a British Treasury official and resigned in protest. Within months he published this attack on the treaty, arguing that its financial demands on Germany were impossible and would wreck Europe.',
    whoFor: [
      'Readers interested in how the First World War led to the Second',
      'Anyone who wants to see economics and politics collide',
      'People who enjoy sharp portraits of world leaders',
    ],
    aboutAuthor:
      'John Maynard Keynes was a British economist whose later work transformed how governments manage economies. This book made him famous at the age of thirty-six.',
    cover: { bg: '#ece5d3', ink: '#1f2a36', accent: '#b03a2e', motif: 'bolt' },
    ideas: [
      {
        title: 'The world that was lost',
        body: [
          'Keynes begins with Europe before 1914. A Londoner could order by telephone the products of the whole earth, invest in any country and travel without a passport, and regarded this state of affairs as normal and permanent.',
          'In fact it rested on a delicate web of trade, with German coal and industry at its center. The war tore the web, and Keynes thought the peacemakers barely noticed.',
        ],
      },
      {
        title: 'Three men in a room',
        body: [
          'His portraits of the leaders are famous. The French premier Clemenceau, he says, cared only about weakening Germany for a generation. The British prime minister Lloyd George bent with every political breeze.',
          'The American president Wilson arrived with noble principles and no detailed plan. He was outmaneuvered clause by clause, Keynes writes, and then persuaded that the result matched his ideals.',
        ],
      },
      {
        title: 'A bill that could not be paid',
        body: [
          'The treaty stripped Germany of colonies, most of its merchant fleet and a large share of its coal and iron, and then demanded reparations to cover the cost of the war.',
          'Keynes calculated what Germany could realistically pay and found the demands several times larger. A country, he argued, can only pay foreign debts by exporting, and the treaty had removed its means of doing so.',
        ],
      },
      {
        title: 'What he predicted',
        body: [
          'An impoverished Germany would drag down its neighbors, since all had depended on the same economic system. Governments would print money to cover their debts, and inflation would destroy the savings of the middle class.',
          'Desperate people, he warned, turn to extremes. If the aim is deliberately to impoverish central Europe, vengeance will not be slow. Hyperinflation came in 1923 and Hitler ten years later.',
        ],
      },
      {
        title: 'His remedies, and the argument since',
        body: [
          'Keynes proposed reducing reparations to a payable sum, canceling the war debts the Allies owed one another, and providing an international loan to restart trade.',
          'Some historians think he exaggerated and that his book encouraged the later appeasement of Germany. Others note that after 1945 the victors followed something close to his advice, with aid in place of punishment.',
        ],
      },
    ],
    takeaway:
      'A peace built on impossible demands is a pause, not a settlement. Economies are interdependent, and ruining a defeated neighbor ruins your own market and breeds the next conflict.',
  },
]
