import type { Book } from '../types'

export const love: Book[] = [
  {
    id: 'the-symposium',
    title: 'The Symposium',
    author: 'Plato',
    year: 'c. 380 BCE',
    category: 'love',
    tagline: 'A dinner party in ancient Athens, and the most famous conversation about love ever held.',
    about:
      'At a banquet to celebrate a prize-winning play, a group of friends agree to take turns giving a speech in praise of love. Their answers move from the playful to the profound, and have shaped how the West thinks about desire ever since.',
    whoFor: [
      'Anyone who has wondered what love actually is',
      'Readers new to philosophy who want an entertaining start',
      'People curious about the origin of the phrase "other half"',
    ],
    aboutAuthor:
      'Plato was an Athenian philosopher, a student of Socrates and the teacher of Aristotle. He wrote in dialogues, most of them featuring Socrates.',
    cover: { bg: '#5b1f2e', ink: '#f6ecdc', accent: '#e9b872', motif: 'columns' },
    ideas: [
      {
        title: 'Love makes us brave and better',
        body: [
          'The first speaker, Phaedrus, praises love as the oldest of the gods and the greatest source of virtue. Nothing shames a person like being seen acting badly by the one they love, and nothing inspires them more to act well.',
          'An army made up of lovers, he says, would be unbeatable, because none would desert a post in front of the other. Love, on this view, is a moral force before it is a pleasure.',
        ],
      },
      {
        title: 'There are two kinds of love',
        body: [
          'Pausanias objects that love is not all one thing. There is a common love, which is attracted to bodies more than minds and cares only about getting what it wants. And there is a heavenly love, drawn to character and intelligence.',
          'The first fades when beauty fades. The second lasts, because it is attached to something that lasts. Love is not good or bad in itself, he argues. Everything depends on how it is done.',
        ],
      },
      {
        title: 'We are each looking for our other half',
        body: [
          'The comic playwright Aristophanes tells a myth. Humans were once round creatures with four arms, four legs and two faces. They grew so powerful that Zeus cut each one in two.',
          'Ever since, each half has wandered the earth longing for the other, and when two halves meet they cling together and never want to part. Love, he says, is simply the name for our desire and pursuit of wholeness.',
        ],
      },
      {
        title: 'Love is a desire for what we lack',
        body: [
          'Socrates reports what he learned from a wise woman named Diotima. Love cannot be a god, because gods lack nothing, and love is always wanting. He is a spirit between mortal and divine, the child of Resource and Poverty.',
          'That makes love a seeker, always scheming for the beautiful and the good. What lovers really want is to possess the good forever, and so love reaches toward immortality, through children or through lasting works and ideas.',
        ],
      },
      {
        title: 'The ladder of love',
        body: [
          'Diotima describes an ascent. A person begins by loving one beautiful body, then sees that beauty is shared by many bodies. Next they come to value beauty of character above looks, then the beauty of laws, customs and knowledge.',
          'At the top is beauty itself, unchanging and complete. The evening ends when the drunken Alcibiades bursts in and praises Socrates as the one person who lives this way, plain on the outside and golden within.',
        ],
      },
    ],
    takeaway:
      'Love starts with attraction to one person, but its real direction is upward, toward what is lastingly good and beautiful. At its best it makes us braver, wiser and more whole.',
  },
  {
    id: 'the-art-of-love',
    title: 'The Art of Love',
    author: 'Ovid',
    year: 'c. 2 CE',
    category: 'love',
    tagline: "A witty Roman poet's guide to finding, winning and keeping a lover.",
    about:
      'Written as a mock textbook in verse, The Art of Love treats romance as a skill to be learned like sailing or chariot driving. It is funny, knowing and often cynical, and it helped to get its author banished from Rome.',
    whoFor: [
      'Readers who enjoy classical wit',
      'Anyone curious how little dating has changed in two thousand years',
      'People who think charm is something you are born with',
    ],
    aboutAuthor:
      'Publius Ovidius Naso, known as Ovid, was a Roman poet and the author of the Metamorphoses. The emperor Augustus exiled him to the Black Sea coast in 8 CE.',
    cover: { bg: '#f0d9c4', ink: '#3a1a1a', accent: '#b8324a', motif: 'crown' },
    ideas: [
      {
        title: 'Love is a skill',
        body: [
          'Ovid opens by announcing that love, like any craft, can be taught. Ships are steered by skill and chariots are driven by skill, and so love must be guided by skill. He appoints himself the teacher.',
          'The joke carries a serious point. Attraction may be a matter of chance, but courtship and lasting affection respond to attention, effort and tact. Leaving them to luck is a choice.',
        ],
      },
      {
        title: 'Go where the people are',
        body: [
          'The first lesson is practical. No one will fall from the sky into your arms. Ovid sends his student to the places Romans gathered: the theater, the races, the banquet, the covered walks.',
          'He gives cheerful tactical advice for each. At the races, sit close, share her enthusiasm for whichever team she favors, and brush the dust from her cloak, whether or not there is any dust.',
        ],
      },
      {
        title: 'Confidence, attention and cleanliness',
        body: [
          'To win someone, begin by believing it is possible. Then show interest: write, be present, remember what was said, and be patient with a slow answer. Persistence wears down stone, he says, though it should not turn into pestering.',
          'Looks matter less than care. A man should be clean, with tidy hair, trimmed nails and fresh breath, and beyond that natural. Some of his other advice, about flattery and false promises, is manipulative and best read as satire.',
        ],
      },
      {
        title: 'To be loved, be lovable',
        body: [
          'Winning love is one task and keeping it another. Beauty is a fragile gift that shrinks with each year, so Ovid tells his students to build something that lasts: a cultivated mind, good conversation and an agreeable temper.',
          'Be gentle, yield in small arguments, notice what pleases, and be there in sickness. A short absence sharpens affection and a long one kills it. The line that sums up the book is that to be loved you must be lovable.',
        ],
      },
      {
        title: 'The same rules apply to women',
        body: [
          'The third book turns the lesson around and advises women. Ovid recommends grooming that looks effortless, an attractive laugh and walk, and accomplishments such as music, poetry and games.',
          'He advises them not to be too easily won, and warns against well-dressed men who are in love with themselves. The balance is unusual for its time. Both sides, he suggests, are playing the same game and both may learn it.',
        ],
      },
    ],
    takeaway:
      'Attraction may be luck, but love is kept by effort. Put yourself where you can meet people, pay real attention, look after yourself, and above all become someone who is pleasant to be with.',
  },
  {
    id: 'on-love',
    title: 'On Love',
    author: 'Stendhal',
    year: '1822',
    category: 'love',
    tagline: 'A heartbroken novelist dissects the passion that undid him.',
    about:
      'After an unrequited passion for a woman in Milan, the novelist Stendhal set out to analyze love as coolly as a scientist. The result is part psychology, part confession, and the source of one of the best descriptions of falling in love ever written.',
    whoFor: [
      'Anyone who has been infatuated and wants to understand it',
      'Readers who like psychology mixed with memoir',
      'People who wonder why love makes us see what is not there',
    ],
    aboutAuthor:
      'Stendhal was the pen name of Marie-Henri Beyle, a French writer and diplomat best known for the novels The Red and the Black and The Charterhouse of Parma.',
    cover: { bg: '#23252f', ink: '#f2ede2', accent: '#e05a6d', motif: 'dots' },
    ideas: [
      {
        title: 'There are four kinds of love',
        body: [
          'Stendhal begins by sorting love into types. Passionate love is the great, consuming kind. Mannered love is the elegant flirtation of polite society, pleasant and without danger. Physical love is simple desire.',
          'The fourth is vanity love, in which a person wants a partner as they might want a fine horse, to be seen with. Most affairs, he says, mix these kinds. Only the first is worth a book.',
        ],
      },
      {
        title: 'Crystallization',
        body: [
          'At the salt mines of Salzburg, miners throw a bare winter branch into the workings. Months later it comes out covered in glittering crystals, so that the original twig can no longer be seen.',
          'Stendhal says the mind does this to the person we love. From everything that happens it draws new proof of their perfection. We do not fall in love with a person so much as with what our imagination has built on them.',
        ],
      },
      {
        title: 'Love is born in stages',
        body: [
          'He traces a sequence. First comes admiration, then the thought of how delightful it would be to be loved by this person, then hope. With hope, love is born, and the first crystallization begins.',
          'Next comes doubt. The lover fears they have deceived themselves and looks anxiously for proof. Out of this torment arises a second crystallization, deeper than the first, fixed on the single idea that she loves me.',
        ],
      },
      {
        title: 'Doubt feeds passion',
        body: [
          'It follows that passion needs uncertainty. A love that is too quickly sure of itself has nothing to crystallize around. The swing between hope and fear is what gives the experience its intensity.',
          'This also explains why love is so little affected by reason. The lover is not weighing evidence. They are living in a private world where a glance or a silence carries enormous meaning.',
        ],
      },
      {
        title: 'Beauty is a promise of happiness',
        body: [
          'Stendhal notes that lovers often come to prefer the face they love to faces that are more regular. Beauty, in his phrase, is only the promise of happiness, and each person finds that promise in a different place.',
          'He ends not with advice but with defense. Passionate love may be a kind of madness, yet he counts it the greatest happiness available. A life that never risks it, in his view, has been only half lived.',
        ],
      },
    ],
    takeaway:
      'When we fall in love we decorate the other person with perfections drawn from our own imagination. Knowing this does not cure the passion, but it explains its stages, its need for doubt and its blindness to reason.',
  },
  {
    id: 'the-greatest-thing-in-the-world',
    title: 'The Greatest Thing in the World',
    author: 'Henry Drummond',
    year: '1889',
    category: 'love',
    tagline: 'A short, luminous talk on what love is made of.',
    about:
      'First given as an informal talk to a group of missionaries, this meditation on a famous chapter from the letters of Paul became one of the most widely read sermons in English. Drummond breaks love into its parts and asks how each can be practiced.',
    whoFor: [
      'Anyone who wants to love the people around them better',
      'Readers looking for a brief, uplifting classic',
      'People who struggle with a short temper',
    ],
    aboutAuthor:
      'Henry Drummond was a Scottish evangelist, naturalist and lecturer who travelled widely and wrote on science and religion.',
    cover: { bg: '#f4ead2', ink: '#2b2118', accent: '#d9455f', motif: 'sun' },
    ideas: [
      {
        title: 'Love is the supreme good',
        body: [
          'Everyone asks what the highest good in life is. Drummond notes that the religious answer has often been faith. But the passage he is reading says plainly that, of faith, hope and love, the greatest is love.',
          'Eloquence without love is noise. Knowledge, generosity and even sacrifice count for nothing without it. Love is not one virtue among others. It is the thing that gives the others their worth.',
        ],
      },
      {
        title: 'The spectrum of love',
        body: [
          'As a prism splits light into colors, Drummond says, the text splits love into nine ingredients: patience, kindness, generosity, humility, courtesy, unselfishness, good temper, guilelessness and sincerity.',
          'What strikes him is how ordinary they are. None is a mystical state. All are things that can be practiced by anyone in every place in life, toward the people who happen to be nearest.',
        ],
      },
      {
        title: 'Kindness is love in action',
        body: [
          'The greatest thing a person can do for others, Drummond suggests, is simply to be kind to them. Much of the life he most admires was spent doing kind things, with no other motive.',
          'He urges the reader not to put it off. We pass through this world once, so any kindness we can show should be shown now. Opportunities to give pleasure are everywhere, and they cost very little.',
        ],
      },
      {
        title: 'A bad temper is not a small fault',
        body: [
          'People often excuse ill temper as a harmless weakness, an accident of temperament. Drummond calls it the vice of the virtuous, and says no form of vice does more to make homes bitter and children miserable.',
          'Temper is a symptom. It reveals an unloving nature underneath, a lack of patience, kindness and unselfishness. So it cannot be cured by clamping down on outbursts, only by changing what is inside.',
        ],
      },
      {
        title: 'Love is learned by practice, and it lasts',
        body: [
          'How does anyone become more loving? By practice, as an athlete or musician improves. Life, Drummond says, is full of opportunities for learning love. The world is not a playground but a schoolroom.',
          'Other things pass. Knowledge is outgrown and achievements are forgotten, but love remains. In the end we will be measured not by what we did or believed, he concludes, but by how we loved.',
        ],
      },
    ],
    takeaway:
      'Love is not a feeling you wait for. It is patience, kindness, humility and good temper, practiced daily on the people closest to you, and it is the one thing that outlasts everything else.',
  },
  {
    id: 'kama-sutra',
    title: 'The Kama Sutra',
    author: 'Vatsyayana',
    year: 'c. 250 CE',
    category: 'love',
    tagline: 'Far more than its reputation: an ancient guide to pleasure, partnership and living well.',
    about:
      'Known in the West mainly for one of its seven parts, the Kama Sutra is in fact a broad manual on the art of living. It discusses how to find a partner, build trust, share pleasure and balance desire with duty and prosperity.',
    whoFor: [
      'Readers who want to know what the book actually says',
      'Couples interested in mutual pleasure and attentiveness',
      'Anyone curious about classical Indian thought',
    ],
    aboutAuthor:
      'Vatsyayana was an Indian philosopher who compiled the text from older works, probably in the third century. He says he wrote it as a student of religion, in contemplation.',
    cover: { bg: '#8a2b3c', ink: '#f8ebd4', accent: '#f0b24a', motif: 'loops' },
    ideas: [
      {
        title: 'Pleasure is one of three aims of life',
        body: [
          'The book begins with the three goals of a good human life: dharma, which is virtue and duty; artha, which is prosperity; and kama, which is pleasure and love. All three deserve study.',
          'They should be kept in balance. Where they conflict, virtue ranks above wealth and wealth above pleasure. But a life without kama is incomplete, and pleasure pursued with knowledge supports the other two.',
        ],
      },
      {
        title: 'A cultivated person is a better partner',
        body: [
          'Vatsyayana lists sixty-four arts that men and women should learn alongside the study of love. They include music, dancing, drawing, cooking, flower arranging, languages, riddles and games.',
          'The point is that attraction depends on the whole person. Someone with skills, conversation and taste is delightful company. He also describes the daily life of the refined citizen, with attention to cleanliness, friends and leisure.',
        ],
      },
      {
        title: 'Trust has to be won gently',
        body: [
          'In the sections on courtship and marriage, the advice is patience. A new bride, he writes, should be approached with tenderness and never by force. A man who rushes creates fear and dislike.',
          'Confidence is built step by step, through conversation, small gifts and consideration. The text is a product of its time and assumes arranged marriages and fixed roles, but its insistence on gentleness stands out.',
        ],
      },
      {
        title: 'Pleasure should be mutual',
        body: [
          'The famous second part catalogs embraces, kisses and positions. Behind the detail lies a principle that was unusual in ancient literature: the satisfaction of the woman matters as much as that of the man.',
          'Partners differ in temperament and desire, and a good lover studies the other person and adapts. Variety, playfulness and attention keep affection alive over many years.',
        ],
      },
      {
        title: 'The goal is mastery, not indulgence',
        body: [
          'Vatsyayana closes with a surprise. The book was composed, he says, according to sacred teaching and for the benefit of the world, by someone leading the life of a religious student.',
          'It is not meant simply as a tool for satisfying desire. A person who understands the principles and keeps dharma, artha and kama in proportion gains command of their senses and succeeds in whatever they undertake.',
        ],
      },
    ],
    takeaway:
      'Pleasure is a legitimate part of a full life when it is balanced with duty and livelihood. Cultivate yourself, be patient and gentle, pay attention to your partner, and treat love as an art worth learning.',
  },
  {
    id: 'marriage-and-morals',
    title: 'Marriage and Morals',
    author: 'Bertrand Russell',
    year: '1929',
    category: 'love',
    tagline: 'The book that argued for honesty about sex, and cost its author a job.',
    about:
      'Bertrand Russell examines where our rules about sex and marriage came from and asks which of them still make sense. His proposals scandalized readers in 1929 and led a New York court to bar him from a teaching post in 1940.',
    whoFor: [
      'Readers interested in how attitudes to love and marriage changed',
      'People thinking about what makes a marriage last',
      'Anyone who enjoys a clear argument against received opinion',
    ],
    aboutAuthor:
      'Bertrand Russell was a British philosopher, mathematician and social critic who won the Nobel Prize in Literature in 1950.',
    cover: { bg: '#e7e0d1', ink: '#1d2430', accent: '#3c6ea5', motif: 'door' },
    ideas: [
      {
        title: 'Our sexual rules were inherited, not reasoned',
        body: [
          'Russell traces conventional morality to two old sources. One is the wish of fathers to be sure their children are their own, which led to the strict control of women. The other is a religious tradition that treated sex itself as sinful.',
          'Neither is a sound basis for ethics today, he argues. Rules should be judged by whether they make people happier and children better cared for, not by taboo.',
        ],
      },
      {
        title: 'Tell children the truth',
        body: [
          'Secrecy and shame, Russell believes, do real harm. Children who are lied to about where babies come from learn that the subject is dirty and that adults cannot be trusted.',
          'He recommends answering questions about sex as plainly as questions about trains or fish, at whatever age they arise. Knowledge removes fear and morbid curiosity. His call for frank sex education was decades ahead of its time.',
        ],
      },
      {
        title: 'Romantic love is precious, but not enough',
        body: [
          'Russell values passionate love highly. It breaks down the loneliness of the self and is, he says, one of the most important things life has to offer. People who have never known it have missed something essential.',
          'But romance alone is a weak foundation for marriage. Passion fades, and a marriage is chiefly a partnership for raising children. It needs deep affection, shared interests and mutual respect to survive.',
        ],
      },
      {
        title: 'Affection matters more than possession',
        body: [
          'The most controversial part of the book concerns fidelity. Russell argues that jealousy has been given too much authority, and that an occasional affair need not destroy a good marriage if the couple remain devoted.',
          'He also supported trial partnerships for the young before children arrive, and easier divorce where there are none. What he would not compromise was the duty of both parents to their children.',
        ],
      },
      {
        title: 'The freedom of women changes everything',
        body: [
          'Two developments, Russell sees, have made the old system unworkable: reliable contraception and the economic independence of women. Morality built on female dependence cannot outlast them.',
          'A new ethic must apply equally to both sexes and rest on respect for the other person as a free individual. Some chapters, especially those touching on eugenics, have aged badly. The call for equality and honesty has not.',
        ],
      },
    ],
    takeaway:
      'Rules about love should serve human happiness, not fear. Be honest about sex, do not confuse passion with partnership, put children first, and treat your partner as a free and equal person.',
  },
  {
    id: 'on-friendship',
    title: 'On Friendship',
    author: 'Cicero',
    year: '44 BCE',
    category: 'love',
    tagline: 'What a true friend is, and why life is not worth much without one.',
    about:
      'Written in the last year of his life, this dialogue has the Roman statesman Laelius reflecting on his friendship with the general Scipio, who has just died. Cicero uses it to set out what friendship is, how it should be chosen and how to keep it.',
    whoFor: [
      'Anyone who wants deeper friendships, not just more of them',
      'People facing a friend who asks too much',
      'Readers who enjoy practical ancient wisdom',
    ],
    aboutAuthor:
      'Marcus Tullius Cicero was a Roman lawyer, statesman and philosopher, and the greatest orator of the late Republic. He was killed in 43 BCE on the orders of Mark Antony.',
    cover: { bg: '#2e3d4f', ink: '#f2ecdc', accent: '#d9a441', motif: 'gap' },
    ideas: [
      {
        title: 'Friendship is the best thing we have',
        body: [
          'Laelius says that, with the exception of wisdom, nothing better has been given to human beings than friendship. Wealth, power and pleasure are uncertain and depend on fortune. Friendship holds in good times and bad.',
          'It doubles our joys by sharing them and halves our troubles by dividing them. A life without anyone to rejoice with, he says, would hardly be worth living, however many possessions it contained.',
        ],
      },
      {
        title: 'It can exist only between good people',
        body: [
          'Cicero defines friendship as complete agreement on things human and divine, joined with goodwill and affection. That kind of harmony requires character. He does not mean saints, just people who are honest, loyal and fair.',
          'Friendship springs from nature, not from need. We are drawn to goodness in another person before we think of any benefit. Advantages follow from friendship, but a bond formed for advantage ends when the advantage does.',
        ],
      },
      {
        title: 'A friend is a second self',
        body: [
          'When you look at a true friend, Cicero writes, you see a kind of image of yourself. That is why friends who are absent are present, and those who are poor are rich, and even those who have died go on living in memory.',
          'Each person loves themselves without expecting a reward. A real friend extends that same uncalculating care to another, so that two minds become, as far as possible, one.',
        ],
      },
      {
        title: 'Never ask a friend to do wrong',
        body: [
          'Cicero lays down a firm law. We should not ask our friends for anything dishonorable, nor do it if we are asked. To excuse a wrong act by saying it was done for a friend is no defense at all.',
          'He had watched Roman politics be ruined by men who followed their friends into conspiracy. Loyalty has limits, and the limit is virtue. A friendship that requires wrongdoing has already stopped being one.',
        ],
      },
      {
        title: 'Choose slowly, speak frankly, keep old friends',
        body: [
          'Most people are careless in choosing friends, though they can say exactly how many sheep they own. Cicero advises testing character before giving affection, and judging before loving, not after.',
          'Once friends, we owe each other the truth. Flattery is the worst poison of friendship, and honest advice, kindly given, is its duty. As for new friends against old, he prefers the old, as with wines that improve with age.',
        ],
      },
    ],
    takeaway:
      'Real friendship is built on character, not usefulness. Choose friends carefully, treat them as a second self, tell them the truth, never ask them to do wrong, and hold on to the ones who have lasted.',
  },
  {
    id: 'pride-and-prejudice',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: '1813',
    category: 'love',
    tagline: 'What a great love story teaches about first impressions and choosing well.',
    about:
      "Jane Austen's best-loved novel follows Elizabeth Bennet and Mr Darcy from mutual dislike to marriage. Beneath the comedy lies a sharp study of how vanity and hasty judgment mislead us, and what a good partnership requires.",
    whoFor: [
      'Readers who want the lessons of the classic in a few minutes',
      'Anyone who trusts their first impressions a little too much',
      'People thinking about what to look for in a partner',
    ],
    aboutAuthor:
      'Jane Austen was an English novelist whose six novels of manners, published anonymously in her lifetime, are among the most read in the language.',
    cover: { bg: '#cfe0d6', ink: '#22302a', accent: '#b5546a', motif: 'horizon' },
    ideas: [
      {
        title: 'First impressions are unreliable',
        body: [
          "Austen's working title for the novel was First Impressions. At a country ball, Darcy refuses to dance with Elizabeth and calls her merely tolerable. She decides on the spot that he is the proudest and most disagreeable man in the world.",
          'She then believes the charming Wickham, who tells her that Darcy cheated him. Almost every early judgment in the book turns out to be wrong. Charm is not goodness, and reserve is not arrogance.',
        ],
      },
      {
        title: 'Both of them are proud, and both are prejudiced',
        body: [
          "The title describes two people, not one each. Darcy's pride in his rank makes him dismiss Elizabeth's family and propose to her as though he were doing her a favor. Her wounded pride makes her eager to think the worst of him.",
          'Her prejudice was flattered by Wickham and offended by Darcy, and she let that decide the facts. Austen shows how easily vanity dresses itself up as good judgment.',
        ],
      },
      {
        title: 'Marriage was a market, and choices had a price',
        body: [
          'The Bennet sisters have no fortune and their home will pass to a male cousin. Marriage is their only security. Elizabeth\'s friend Charlotte accepts the foolish Mr Collins for a comfortable home, saying she is not romantic.',
          'Elizabeth refuses the same man, and later refuses Darcy and his ten thousand a year, because she will not marry without respect. Austen does not mock Charlotte. She shows what each choice costs.',
        ],
      },
      {
        title: 'Character is shown by conduct',
        body: [
          "After her refusal, Darcy writes Elizabeth a letter that sets out the truth about Wickham. She reads it again and again and is ashamed. Until that moment, she says, she never knew herself.",
          "Words begin the change and actions finish it. She hears Darcy praised by his servants at his estate. Then, when her sister elopes with Wickham, he secretly pays to rescue the family's reputation and asks for no thanks.",
        ],
      },
      {
        title: 'Love is two people who improve each other',
        body: [
          'Darcy tells Elizabeth that her rejection taught him a hard and needed lesson. He had been selfish and overbearing, and she showed him how unworthy his manner was of the person he wished to please.',
          'She, in turn, learns to doubt her quick opinions. Their marriage succeeds where others in the novel fail because it rests on respect between equals, and on each having been honest enough to change.',
        ],
      },
    ],
    takeaway:
      'Be slow to judge and quick to admit when you were wrong. Look at what people do, not how they charm, and choose a partner you respect, who respects you enough to grow.',
  },
]
