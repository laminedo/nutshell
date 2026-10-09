import type { Book } from '../types'

export const selfHelp: Book[] = [
  {
    id: 'self-help',
    title: 'Self-Help',
    author: 'Samuel Smiles',
    year: '1859',
    category: 'selfhelp',
    tagline: 'The Victorian bestseller that gave a whole genre its name.',
    about:
      'Through hundreds of short biographies of inventors, artists and workers, Samuel Smiles argues that steady effort and character, not talent or privilege, are what lift people up. The book sold in huge numbers and named the self-help shelf.',
    whoFor: [
      'Anyone who thinks they lack the talent to succeed',
      'Readers curious where self-help began',
      'People who are motivated by real life stories',
    ],
    aboutAuthor:
      'Samuel Smiles was a Scottish doctor, journalist and railway administrator. The book grew out of talks he gave to a self-improvement class for young working men in Leeds.',
    cover: { bg: '#27413c', ink: '#f4eedc', accent: '#e9b44c', motif: 'ziggurat' },
    ideas: [
      {
        title: 'Heaven helps those who help themselves',
        body: [
          'Smiles opens with the old maxim and builds the book on it. Help from outside tends to weaken people, while help from within always strengthens them. Whatever is done for people takes away some of the need to do it for themselves.',
          'Even the best laws and institutions can give no active help. The most they can do is leave people free to develop themselves. A nation, he says, is only the sum of the energy, industry and uprightness of its individuals.',
        ],
      },
      {
        title: 'Perseverance beats genius',
        body: [
          'The great results in life are usually reached by simple means and ordinary qualities. Smiles fills his pages with examples: the engineer George Stephenson, who taught himself to read as an adult, and the potter Josiah Wedgwood, who ran thousands of patient experiments.',
          'His favorite is Bernard Palissy, who spent years trying to discover a white enamel and finally burned his own furniture to keep the kiln alight. Genius, Smiles suggests, is mostly the power of making continuous efforts.',
        ],
      },
      {
        title: 'Small things, done carefully, add up',
        body: [
          'Attention to detail runs through every success story in the book. Accuracy, method and punctuality sound dull, but they are what make a person reliable, and reliability is what earns bigger responsibilities.',
          'The same holds for time. People who achieved much were careful with odd moments. An hour a day withdrawn from idle pursuits and put to good use, Smiles notes, is enough to make an ordinary person master of a subject within a few years.',
        ],
      },
      {
        title: 'Thrift is a form of independence',
        body: [
          'Smiles does not worship money, but he respects what it protects. Someone who lives within their means, however small, keeps their freedom. Someone who spends everything is always one accident away from depending on others.',
          'Debt is the great danger. The debtor has to make excuses, avoid certain streets and bend the truth. Saving even small amounts builds the habit of self-denial, which he regards as the root of every other virtue.',
        ],
      },
      {
        title: 'Character is the real property',
        body: [
          'In the end, Smiles cares less about success than about the person it produces. Character is a kind of property, the noblest of possessions, and it is open to everyone regardless of rank or wealth.',
          'His true gentleman is defined by honesty, courtesy and consideration for others, not by clothes or income. And because we learn by example far more than by instruction, he urges readers to choose their company and their reading with care.',
        ],
      },
    ],
    takeaway:
      'Talent and luck matter less than we think. Patient effort, careful habits, thrift and an honest character are open to anyone, and together they are what progress is made of.',
  },
  {
    id: 'acres-of-diamonds',
    title: 'Acres of Diamonds',
    author: 'Russell H. Conwell',
    year: '1890',
    category: 'selfhelp',
    tagline: 'The opportunity you are searching the world for is probably under your feet.',
    about:
      'Russell Conwell delivered this lecture more than six thousand times and used the proceeds to found Temple University. Its message is simple: you do not have to go somewhere else to find opportunity. Start exactly where you are.',
    whoFor: [
      'People who believe success is always somewhere else',
      'Would-be entrepreneurs looking for an idea',
      'Anyone uneasy about wanting to earn more',
    ],
    aboutAuthor:
      'Russell Conwell was an American Baptist minister, lawyer and lecturer in Philadelphia. He became one of the best-known public speakers of his time.',
    cover: { bg: '#123c54', ink: '#f3efe2', accent: '#8fd6e8', motif: 'dots' },
    ideas: [
      {
        title: 'The diamonds were on the farm all along',
        body: [
          'Conwell begins with a story he heard from a guide in the Middle East. A prosperous farmer named Ali Hafed hears about diamonds, grows discontented, sells his farm and wanders the world searching for them until he dies in poverty.',
          'The man who bought the farm finds a strange black stone in the garden stream. It is a diamond, and the land turns out to hold one of the richest mines ever discovered. Had Ali Hafed dug in his own cellar, he would have had acres of diamonds.',
        ],
      },
      {
        title: 'It is your duty to get rich, honestly',
        body: [
          'Conwell startles his audience by saying they ought to be rich. Money is power, he argues: it prints books, builds schools and pays for kindness. It is the love of money, hoarded for its own sake, that the old saying condemns, not money itself.',
          'He insists the wealth must be honestly made. In his view most fortunes come from serving people well, and an honest person who earns a great deal can do more good than one who stays poor on principle.',
        ],
      },
      {
        title: 'Find out what people need and supply it',
        body: [
          'The practical core of the lecture is to study your own neighbors. Conwell tells of a shopkeeper who could not say what the people on his street wanted, and so sent customers away to buy elsewhere.',
          'By contrast, he describes a merchant who sat in a park watching which hats women chose to wear, then made only those. You do not need capital first. You need to know a real demand, and that knowledge is free to anyone who pays attention.',
        ],
      },
      {
        title: 'An inheritance can be a handicap',
        body: [
          'Conwell says he pities the children of the rich. Someone who is handed money never learns the things that earning it teaches: how to work, how to save, and what a dollar is worth.',
          'The best thing a parent can leave, he argues, is education, good character and a wide circle of friends. A young person who starts with nothing but those has an advantage over one who starts with a fortune and no experience.',
        ],
      },
      {
        title: 'Greatness is doing much with what you have, where you are',
        body: [
          'People also assume greatness lives elsewhere, in a famous city or a high office. Conwell points out that the great inventors and benefactors were usually plain people solving a problem that happened to be in front of them.',
          'To be great at all, he concludes, you must begin here and now, in your own town. Whoever can be a blessing to their own street, with the means they already have, would be great anywhere.',
        ],
      },
    ],
    takeaway:
      'Stop looking over the horizon. Study the needs of the people around you, serve them honestly, and treat the place you already stand as the richest ground you will ever own.',
  },
  {
    id: 'a-message-to-garcia',
    title: 'A Message to Garcia',
    author: 'Elbert Hubbard',
    year: '1899',
    category: 'selfhelp',
    tagline: 'A fifteen-minute essay on the rarest quality at work: getting it done.',
    about:
      'Written in an hour and reprinted by the million, this short essay uses one episode from the Spanish-American War to praise the person who takes a task and completes it without fuss, excuses or supervision.',
    whoFor: [
      'Anyone early in their career',
      'Managers who wish their teams took more initiative',
      'Readers who want a classic in the time it takes to drink a coffee',
    ],
    aboutAuthor:
      'Elbert Hubbard was an American writer and publisher who founded the Roycroft craft community in New York State. He died in the sinking of the Lusitania in 1915.',
    cover: { bg: '#8c2f1b', ink: '#f8eedb', accent: '#f1c453', motif: 'chevrons' },
    ideas: [
      {
        title: 'The man who carried the letter',
        body: [
          'When war broke out between Spain and the United States, the president needed to reach Garcia, the leader of the Cuban rebels, who was somewhere in the mountains. No mail or telegraph could find him.',
          'Someone said that a soldier named Rowan could do it. Rowan took the letter, sealed it in an oilskin pouch, landed by night from an open boat, crossed the island on foot and delivered it. What Hubbard admires is that Rowan never asked where Garcia was.',
        ],
      },
      {
        title: 'Initiative means not needing to be told twice',
        body: [
          'Hubbard defines initiative as doing the right thing without being told. Next best is doing it when told once. Below that come the people who act only when pushed, and those who will not act even then.',
          'The world, he says, gives its big prizes in both money and honors for one thing above all. It is not book learning. It is the stiffening of the backbone that lets a person be loyal to a trust, act promptly and concentrate their energies.',
        ],
      },
      {
        title: 'Try the encyclopedia test',
        body: [
          'Hubbard proposes an experiment. Ask any clerk in your office to look up a subject in the encyclopedia and write a short note about it. Will the clerk simply go and do it?',
          'More likely, he says, you will get a string of questions. Who was he? Which encyclopedia? Is there a hurry? Why not ask someone else? The point is not the task. It is how rarely a simple request is carried through independently.',
        ],
      },
      {
        title: 'Spare a thought for the person in charge',
        body: [
          'Much sympathy, Hubbard notes, goes to the overworked employee. He asks for a little for the employer who grows old trying to get careless help to do good work, and who must keep weeding out those who will not.',
          'This is the most dated part of the essay, and it is one-sided: it has nothing to say about bad bosses or poor pay. Its lasting point is narrower. Whoever takes responsibility for results carries a weight that the rest of the team does not always see.',
        ],
      },
      {
        title: 'Be the one who can be trusted with the message',
        body: [
          'The person who quietly takes the letter and delivers it, without asking idiotic questions or dropping it in the nearest sewer, never has to go on strike for higher wages. Such a person is wanted in every city, office and shop.',
          'Civilization, Hubbard concludes, is one long anxious search for exactly these individuals. Reliability is rare, and that is what makes it valuable.',
        ],
      },
    ],
    takeaway:
      'When you are given a job, own it. Work out the details yourself, finish it properly and report back. The ability to deliver without supervision is scarce in every workplace, and it is rewarded accordingly.',
  },
  {
    id: 'pushing-to-the-front',
    title: 'Pushing to the Front',
    author: 'Orison Swett Marden',
    year: '1894',
    category: 'selfhelp',
    tagline: 'The book that launched American success literature.',
    about:
      "Orphaned young and inspired by Samuel Smiles, Marden collected stories of people who rose from nothing and turned them into a rousing argument: circumstances do not decide a life. The will does. He rewrote the whole manuscript after a fire destroyed the first draft.",
    whoFor: [
      'Readers who need encouragement more than technique',
      'Anyone starting with few advantages',
      'Fans of motivational writing who want its source',
    ],
    aboutAuthor:
      'Orison Swett Marden was an American writer and hotel owner who later founded Success magazine. He is often called the father of the modern success movement.',
    cover: { bg: '#e4a72f', ink: '#231a0c', accent: '#8a2d12', motif: 'sun' },
    ideas: [
      {
        title: 'Make the opportunity instead of waiting for it',
        body: [
          'Weak people wait for opportunities, Marden writes, while strong people make them. He quotes commanders and inventors who were told there was no chance, and who replied that they would create one.',
          'Opportunities are everywhere for the person who is prepared to see them. The same events pass before everyone. What differs is the readiness to seize the ordinary moment and turn it to use.',
        ],
      },
      {
        title: 'Poverty and hardship are a school',
        body: [
          'Many chapters are devoted to people who began with no chance at all: children of laborers who became statesmen, scientists and artists. Marden wants the reader to stop treating a difficult start as an excuse.',
          'He goes further and calls hardship an advantage. Struggle develops the strength that comfort never calls for. Remove every obstacle from a young person\'s path, he warns, and you remove the very thing that would have made them strong.',
        ],
      },
      {
        title: 'Choose one unwavering aim',
        body: [
          'A person with one talent and a fixed purpose will achieve more than a person with ten talents who scatters them. Marden compares concentrated effort to sunlight focused through a lens, which burns where diffuse light only warms.',
          'Decide what you are for, he urges, and then let nothing pull you off the line. Indecision is the great thief. The habit of settling a question promptly and standing by the answer is itself a kind of power.',
        ],
      },
      {
        title: 'There is a fortune in spare moments',
        body: [
          'Marden lists people who educated themselves in fragments of time: at the workbench, on the road, in the minutes before meals. What most of us throw away would, added together, amount to a university course.',
          'The habit matters as much as the hours. A person who uses odd moments well is training themselves to value time, and someone who values time rarely wastes a life.',
        ],
      },
      {
        title: 'Be greater than your job',
        body: [
          'Success for Marden is never only money. Character is power, and manners are a fortune of their own: courtesy opens doors that ability alone cannot.',
          'Above all, the aim is to make a life and not merely a living. Whatever your calling, he says, be larger than it. Put so much energy, cheerfulness and integrity into your work that the work becomes an expression of who you are.',
        ],
      },
    ],
    takeaway:
      'Your start does not fix your finish. Decide on one aim, use the time and chances you already have, treat obstacles as training, and build a character worth more than the career.',
  },
  {
    id: 'self-mastery-through-conscious-autosuggestion',
    title: 'Self-Mastery Through Conscious Autosuggestion',
    author: 'Émile Coué',
    year: '1920',
    category: 'selfhelp',
    tagline: 'The original daily affirmation, and the theory behind it.',
    about:
      'A French pharmacist noticed that patients did better when he praised a remedy as he handed it over. From that observation he built a simple method for directing the imagination, summed up in one sentence that swept the world in the 1920s.',
    whoFor: [
      'People curious about where affirmations come from',
      'Anyone who has tried to force a change by willpower and failed',
      'Readers interested in the placebo effect',
    ],
    aboutAuthor:
      'Émile Coué was a French pharmacist and psychologist who ran a free clinic in Nancy. He toured Britain and the United States to enormous crowds.',
    cover: { bg: '#e8e1f0', ink: '#2b2140', accent: '#7b4fc4', motif: 'rings' },
    ideas: [
      {
        title: 'We have two selves, and the hidden one is in charge',
        body: [
          'Coué distinguishes the conscious self from the unconscious self. The unconscious runs the body, stores every memory and believes whatever it is told. It also directs far more of our behavior than we like to admit.',
          'Suggestion works on this hidden self. An idea accepted by it tends to turn into a feeling, a habit or a physical state. Since we feed ourselves suggestions all day, usually without noticing, we may as well choose them deliberately.',
        ],
      },
      {
        title: 'When will and imagination conflict, imagination wins',
        body: [
          'Lay a plank on the ground and anyone can walk along it. Raise the same plank between two cathedral towers and almost no one can. The will to cross is unchanged. What has changed is the image of falling.',
          'From this Coué draws his central law. Whenever the will and the imagination pull in opposite directions, the imagination always wins. The harder you strain against a fear or an urge while picturing failure, the more firmly you fail.',
        ],
      },
      {
        title: 'Every day, in every way',
        body: [
          'The method is deliberately simple. Each morning on waking and each night before sleep, repeat twenty times: every day, in every way, I am getting better and better. Coué suggested counting on a string with twenty knots.',
          'The words should be said aloud but softly, in a monotone, without analyzing them. Because the phrase is general, it covers everything, and the unconscious can apply it wherever it is needed.',
        ],
      },
      {
        title: 'Do not try hard',
        body: [
          'The practice must be effortless. Effort calls up the will, and the will awakens the opposite idea: trying to sleep keeps you awake, and trying not to laugh makes you giggle. Coué called this the law of reversed effort.',
          'So the phrase is repeated lightly, almost like a lullaby. For a specific pain or worry, he taught people to pass a hand over the forehead and murmur quickly that it is passing, leaving no gap for a contrary thought.',
        ],
      },
      {
        title: 'Useful, with limits',
        body: [
          'Coué insisted he cured no one. People healed themselves, he said, and he merely showed them an instrument. He also said autosuggestion acts only within the limits of what is physically possible.',
          'Modern readers should keep that boundary in view. The method is no substitute for medical care. But his insight into expectation, repetition and self-talk anticipated later research on the placebo effect and remains a practical tool for habits and confidence.',
        ],
      },
    ],
    takeaway:
      'You are already suggesting things to yourself all day. Do it on purpose: picture the outcome you want, repeat a simple positive phrase without strain, and stop fighting fears head-on with willpower.',
  },
  {
    id: 'the-majesty-of-calmness',
    title: 'The Majesty of Calmness',
    author: 'William George Jordan',
    year: '1900',
    category: 'selfhelp',
    tagline: 'A small, quiet book about not being hurried through your own life.',
    about:
      'In seven short essays, William George Jordan argues that calmness is not a temperament some people are born with. It is the visible result of a life with a purpose, lived at a deliberate pace.',
    whoFor: [
      'People who feel permanently rushed',
      'Anyone who is hard on themselves about failure',
      'Readers who like their wisdom brief',
    ],
    aboutAuthor:
      'William George Jordan was an American editor and essayist who edited several popular magazines, including The Saturday Evening Post.',
    cover: { bg: '#dfe8ea', ink: '#1d2d35', accent: '#3e7d8c', motif: 'waves' },
    ideas: [
      {
        title: 'Calmness is power under control',
        body: [
          'Jordan calls calmness the rarest quality in human life, the poise of a great nature in harmony with itself. It is not coldness or indifference. It is strength held in reserve.',
          'A calm person is not at the mercy of every event. When worry, loss or praise arrives, they meet it from a settled center. This steadiness is earned, he says, by knowing what you are living for.',
        ],
      },
      {
        title: 'Hurry is the scourge of modern life',
        body: [
          'Jordan was writing in 1900 and already found his age feverish. Hurry, he says, is the counterfeit of haste. Haste has a clear aim and moves toward it. Hurry is mere agitation, like a wheel spinning in the mud.',
          'Everything truly great, in nature and in work, grows slowly. People who rush through meals, conversations and decisions do not gain time. They only lose the experience of the time they have.',
        ],
      },
      {
        title: 'You influence others whether you mean to or not',
        body: [
          'Every person radiates what they are. We cannot spend an hour with someone without leaving some trace, whether of courage and kindness or of gloom and suspicion. This silent influence never stops.',
          'It follows that the best way to improve the world is to improve what we give off. Jordan asks the reader to take responsibility for their atmosphere, not just their actions.',
        ],
      },
      {
        title: 'Failure is often success in disguise',
        body: [
          'Many things we call failures are only postponed or redirected successes. The door that closed may have kept us from a worse road. The loss may have built the patience that a later victory required.',
          'Jordan asks us to judge failure by what it does to the person. If you did your honest best and came out braver and wiser, you did not fail. The only real failure is to stop trying.',
        ],
      },
      {
        title: 'Happiness comes from giving your best, not getting the most',
        body: [
          'Jordan separates happiness from pleasure and from wealth. Happiness is the glow that follows when we are living up to our own highest standard. It cannot be bought, and it cannot be taken from us.',
          'His rule is to do your best at all times, in small duties as well as large ones, and to seek it by making others happy. Pursued directly, happiness escapes. It arrives as a consequence of usefulness.',
        ],
      },
    ],
    takeaway:
      'Calm is something you build. Know your purpose, refuse to be hurried, mind the effect you have on others, treat setbacks as instruction, and measure each day by whether you gave it your best.',
  },
  {
    id: 'the-conquest-of-happiness',
    title: 'The Conquest of Happiness',
    author: 'Bertrand Russell',
    year: '1930',
    category: 'selfhelp',
    tagline: 'A philosopher explains, in plain words, why we are unhappy and what helps.',
    about:
      'Bertrand Russell wrote this book for ordinary people who have enough to eat and a roof overhead, yet are still miserable. He sets out the common causes of everyday unhappiness and then the habits of mind that reliably produce the opposite.',
    whoFor: [
      'Anyone who feels unhappy without an obvious reason',
      'Readers who distrust gushing self-help',
      'People prone to worry, envy or overwork',
    ],
    aboutAuthor:
      'Bertrand Russell was a British philosopher, mathematician and campaigner who won the Nobel Prize in Literature in 1950.',
    cover: { bg: '#f1e6c8', ink: '#232018', accent: '#d0662b', motif: 'horizon' },
    ideas: [
      {
        title: 'Unhappiness is mostly self-absorption',
        body: [
          'Russell says he was a miserable young man who became steadily happier with age. The main reason was that he thought about himself less. He learned to turn his attention to the world: its problems, its people and its knowledge.',
          'He describes three inward-facing types. The sinner is absorbed in guilt, the narcissist in being admired and the megalomaniac in being powerful. Each is trapped in the same prison, which is the self.',
        ],
      },
      {
        title: 'The treadmill of competition and envy',
        body: [
          'Many successful people, Russell observes, are not enjoying their success. They are simply afraid of falling behind. Life has become a contest in which winning is only a relief and leisure feels like a waste.',
          'Envy works the same way. It makes us measure what we have against what others have, so that no amount is ever enough. The cure is to enjoy things for what they are, and to notice that comparison has no end.',
        ],
      },
      {
        title: 'Learn to bear boredom and to worry at the right time',
        body: [
          'A generation that cannot endure boredom, Russell warns, will be a generation of small people. All great work includes long dull stretches, and a quiet life is the soil that real satisfaction grows in. Constant excitement only dulls the appetite.',
          'Worry is partly a bad mental habit. Think about a problem thoroughly when there is something to decide, then put it away. Most fatigue, he claims, comes from this useless churning and not from the work itself.',
        ],
      },
      {
        title: 'Zest and affection are the marks of a happy person',
        body: [
          'The clearest sign of happiness is zest, an appetite for life like a hungry person sitting down to dinner. The more things you are interested in, the more chances you have of being happy, and the less you depend on any one of them.',
          'Zest in turn rests on feeling loved. People who feel secure in affection meet the world with confidence and curiosity. The best affection is mutual and gives freedom, as opposed to the anxious kind that clings.',
        ],
      },
      {
        title: 'Work, wide interests, and knowing when to let go',
        body: [
          'Work that uses skill and builds something is one of the most reliable sources of contentment. Alongside it, Russell recommends impersonal interests, such as history, the stars or a hobby, which rest the mind and keep our troubles in proportion.',
          'Happiness needs both effort and resignation. Fight for what can be won and accept what cannot, without wasting emotion on it. The happy person, he concludes, feels like a citizen of the universe, freely giving and receiving interest and affection.',
        ],
      },
    ],
    takeaway:
      'Happiness is not luck. Look outward instead of inward, stop comparing, tolerate quiet, cultivate many interests and warm relationships, work at something worthwhile, and accept what you cannot change.',
  },
  {
    id: 'the-art-of-public-speaking',
    title: 'The Art of Public Speaking',
    author: 'Dale Carnegie & J. Berg Esenwein',
    year: '1915',
    category: 'selfhelp',
    tagline: 'How to stand up, be heard and mean it.',
    about:
      "Years before his famous books on winning friends, Dale Carnegie co-wrote this practical manual for speakers. It treats public speaking as a learnable craft that rests on having something to say and wanting badly to say it.",
    whoFor: [
      'Anyone who dreads presentations',
      'Speakers whose delivery feels flat',
      'People who want to be more persuasive in meetings',
    ],
    aboutAuthor:
      'Dale Carnegie taught public speaking classes in New York and became one of the best-selling authors of the twentieth century. Joseph Berg Esenwein was an editor and writing teacher.',
    cover: { bg: '#1c2f5e', ink: '#f2eede', accent: '#ef6f4a', motif: 'bolt' },
    ideas: [
      {
        title: 'Confidence comes from doing it',
        body: [
          'You cannot learn to swim on dry land, and you cannot learn to speak without facing an audience. The authors say plainly that the only way to lose the fear is to speak, again and again, until the plunge is no longer cold.',
          'Three things help at once. Be absorbed in your subject so there is no attention left over for yourself. Have something definite to say. And expect to succeed, because a speaker who anticipates failure usually arranges it.',
        ],
      },
      {
        title: 'Monotony is the cardinal sin',
        body: [
          'Nothing kills a talk as surely as sameness. A voice that stays at one pitch, one speed and one volume lulls any audience, however good the content. The fault is common because nervous speakers cling to a single safe tone.',
          'The remedy is contrast. Stress the words that carry the meaning and let the rest go lightly. Change pitch when the thought changes. Speed up through the familiar and slow down for what matters.',
        ],
      },
      {
        title: 'Use the pause',
        body: [
          'A pause is not an empty space. Before an important idea it creates suspense, and after one it gives the audience time to take it in. Speakers who are afraid of silence rush on and bury their best points.',
          'The pause also serves the speaker. It is a chance to breathe, to gather the next thought and to look at the listeners. Great speakers, the authors note, are comfortable saying nothing for a moment.',
        ],
      },
      {
        title: 'Feeling cannot be faked',
        body: [
          'Audiences are moved by speakers who are themselves moved. Technique can polish a speech, but only real conviction gives it force. If the subject does not matter to you, the listeners will sense it within a minute.',
          'So choose topics you care about, and before you speak, stir up your own interest. Think about why it matters and whom it affects. Enthusiasm of this kind is catching, and it forgives many small faults of delivery.',
        ],
      },
      {
        title: 'Prepare far more than you will use',
        body: [
          'Good speaking rests on reserve power. A speaker who knows ten times more than they say stands on solid ground, and the audience feels it. One who has scraped together just enough is always near the edge.',
          'Preparation means thinking, not memorizing word for word. Gather material widely, sort it around one clear purpose, and rehearse the ideas until they are yours. Then trust yourself to find the words in front of the room.',
        ],
      },
    ],
    takeaway:
      'Speak often, care about your subject, know it deeply, vary your voice, and do not fear silence. A speaker with something to say and a real wish to say it has most of the art already.',
  },
  {
    id: 'compensation',
    title: 'Compensation',
    author: 'Ralph Waldo Emerson',
    year: '1841',
    category: 'selfhelp',
    tagline: 'Everything has its price, and every loss has its gain.',
    about:
      "In this essay, a companion to Self-Reliance, Emerson argues that life keeps a perfectly balanced set of accounts. Nothing is given without a cost and nothing is taken without some return, here and now and not only in a world to come.",
    whoFor: [
      'People who feel life has treated them unfairly',
      'Anyone tempted by shortcuts',
      'Readers who enjoyed Self-Reliance',
    ],
    aboutAuthor:
      'Ralph Waldo Emerson was an American essayist, lecturer and poet who led the Transcendentalist movement from Concord, Massachusetts.',
    cover: { bg: '#2d2a33', ink: '#f3eee4', accent: '#d9b56b', motif: 'hourglass' },
    ideas: [
      {
        title: 'Nature is built in pairs',
        body: [
          'Emerson starts from a pattern he sees everywhere: dark and light, heat and cold, in and out, the ebb and flow of the tide. Every part of nature has its opposite, and each half implies the other.',
          'Human life follows the same law. Every sweet has its sour and every excess causes a defect. The person who gains in power loses in ease. For everything you have missed you have gained something else, and for everything you gain you lose something.',
        ],
      },
      {
        title: 'Every act carries its own reward',
        body: [
          'Emerson rejects the idea that justice is postponed to another life. Cause and effect, means and ends, seed and fruit cannot be separated. The punishment of a wrong act ripens inside the pleasure that hid it.',
          'You cannot do wrong without suffering wrong. The thief steals from himself and the swindler swindles himself, because each act changes the person who performs it. Likewise, a good act is paid for instantly in what you become.',
        ],
      },
      {
        title: 'Nothing can be had for nothing',
        body: [
          'People keep trying to enjoy one side of a thing without the other: pleasure without effort, reward without work. Emerson says the attempt always fails. The universe will have its tax, and the cheapest way is to pay as you go.',
          'A wise person therefore avoids debts of every kind, including favors. Benefits are meant to be passed along, deed for deed. Always pay, he says, for first or last you must pay your entire debt.',
        ],
      },
      {
        title: 'Our strength grows out of our weakness',
        body: [
          'The law also runs in our favor. A defect usually forces the growth of a compensating strength. Someone who is pushed, tormented and defeated has a chance to learn something, while someone who is always praised learns nothing.',
          'For this reason Emerson says blame is safer than praise. As long as everything said against you can be turned into information about yourself, your critics are working for you.',
        ],
      },
      {
        title: 'Calamity shows its use only later',
        body: [
          'The deepest compensations take time. An illness, a loss of money or the death of a friend looks at first like pure privation. Years afterward it often turns out to have ended one stage of life and opened another.',
          'Emerson adds one exception to his balance sheet. The soul itself is not a compensation but a life. Growth in wisdom and love has no penalty attached, and it is the one good that is never taxed.',
        ],
      },
    ],
    takeaway:
      'The world keeps honest books. Do not look for something for nothing, do not envy what others seem to get away with, pay your debts as you go, and trust that hardship is quietly building something in return.',
  },
]
