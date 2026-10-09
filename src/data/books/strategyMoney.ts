import type { Book } from '../types'

export const strategyMoney: Book[] = [
  {
    id: 'the-art-of-war',
    title: 'The Art of War',
    author: 'Sun Tzu',
    year: 'c. 500 BCE',
    category: 'strategy',
    tagline: 'Win first. Then, if you must, fight.',
    about:
      "The world's oldest surviving treatise on strategy is only thirteen short chapters long. Its lessons about preparation, information, positioning and timing have been applied far beyond the battlefield, from boardrooms to sports.",
    whoFor: [
      'Founders, managers and negotiators',
      'Competitors of any kind who want to work smarter',
      "Anyone facing a conflict they'd rather not fight head-on",
    ],
    aboutAuthor:
      'Sun Tzu is traditionally identified as a general who served the state of Wu in ancient China. Little about his life is certain, but the text attributed to him has shaped military thinking for some 2,500 years.',
    cover: { bg: '#161514', ink: '#f1e9da', accent: '#d23a2a', motif: 'chevrons' },
    ideas: [
      {
        title: 'The best victory is won without fighting',
        body: [
          "War is ruinously expensive. Long campaigns empty the treasury, exhaust the people and invite rivals to attack. For that reason Sun Tzu does not admire the general who wins a hundred battles. The height of skill is to break the enemy's resistance without fighting at all.",
          "He ranks the options. Best is to defeat the opponent's strategy before it unfolds. Next is to split their alliances. Then comes attacking their army in the field, and worst of all is besieging a fortified city. Whenever possible, take what you want whole and undamaged. A ruined prize is worth far less.",
        ],
      },
      {
        title: 'Know the enemy and know yourself',
        body: [
          'If you know both your opponent and yourself, a hundred battles hold no danger. If you know only yourself, you will win some and lose some. If you know neither, you will lose every time. Strategy begins with honest assessment, not courage.',
          'Before any campaign, compare the two sides on five points: the unity between leaders and people, the weather, the terrain, the quality of command and the discipline of the organization. Winners win first and then go into battle; losers go into battle and then look for a way to win. This is also why Sun Tzu praises spies: money spent on good information is the cheapest spending in war.',
        ],
      },
      {
        title: 'All warfare rests on deception',
        body: [
          'When you are capable, look incapable. When you are near, seem far away. Offer bait to draw the opponent out, feign disorder, and strike where you are least expected. The aim is to shape what the other side believes so that they prepare for the wrong thing.',
          'The ideal is to be formless. If the enemy cannot tell where you will attack, they must defend everywhere, and whoever defends everywhere is weak everywhere. You keep your forces concentrated while theirs are scattered, so that at the decisive point you are many against few.',
        ],
      },
      {
        title: 'Be like water: avoid strength, strike weakness',
        body: [
          'Water shapes its course to the ground, running away from the heights and toward the low places. An army should do the same, steering clear of what is strong and hitting what is empty. Just as water has no constant shape, warfare has no constant conditions. The commander who adapts to the opponent is the one who wins.',
          'Sun Tzu pairs this with timing and momentum. Use direct force to engage and surprise to win. Build up energy like a drawn crossbow, then release it all at once. Rushing water can carry boulders, and a hawk breaks its prey through the precision of its strike.',
        ],
      },
      {
        title: "A leader's temper can lose everything",
        body: [
          'A ruler must never mobilize out of anger, and a general must never fight out of spite. Anger can turn back into contentment, but a destroyed state cannot be rebuilt, and the dead cannot be brought back. Move only when there is something to gain.',
          'Sun Tzu names five flaws that make a commander easy to beat: recklessness, cowardice, a quick temper, an oversensitive sense of honor and too much anxiety for the troops. Each can be used against you. The good leader cares for soldiers as for their own children, and they will follow into the deepest valley, but that care is always paired with firm discipline.',
        ],
      },
    ],
    takeaway:
      'Conflict is won before it starts, by the side that understands the situation better. Know yourself and your rival, stay unpredictable, adapt like water, keep your emotions out of it, and fight only when you have already made victory likely.',
  },
  {
    id: 'the-prince',
    title: 'The Prince',
    author: 'Niccolò Machiavelli',
    year: '1532',
    category: 'strategy',
    tagline: 'How power is actually won and kept — not how we wish it were.',
    about:
      'Written in 1513 by an out-of-work diplomat hoping to win favor with the Medici, The Prince is a short, unsentimental guide to gaining and holding a state. It scandalized readers by describing politics as it is practiced rather than as it is preached.',
    whoFor: [
      'Anyone trying to understand power in organizations and politics',
      'Leaders who have to make hard trade-offs',
      'Readers who want to judge the "Machiavellian" label for themselves',
    ],
    aboutAuthor:
      'Niccolò Machiavelli served the Florentine Republic as a diplomat and official for fourteen years. When the Medici returned to power he was imprisoned, tortured and banished to his farm, where he turned to writing.',
    cover: { bg: '#3a2452', ink: '#f3e9d8', accent: '#e2b04a', motif: 'crown' },
    ideas: [
      {
        title: 'Deal with the world as it is',
        body: [
          'Many writers, Machiavelli notes, have imagined republics and kingdoms that never existed. He prefers to describe what actually happens. The gap between how people live and how they ought to live is so wide that a ruler who ignores what is done in favor of what should be done is preparing his own ruin.',
          "Someone who insists on being good in every situation will come to grief among so many who are not good. So a prince who wants to survive must learn how not to be good, and then use that knowledge or leave it aside as necessity requires. This is the book's most shocking claim, and its foundation.",
        ],
      },
      {
        title: 'Better feared than loved, but never hated',
        body: [
          'Ideally a ruler is both loved and feared. Since the two rarely go together, it is safer to be feared. Love depends on gratitude, which people drop the moment it costs them something. Fear depends on the prospect of punishment, which never loses its grip.',
          "But fear must stop short of hatred. A prince avoids hatred mainly by keeping his hands off his subjects' property and families; people forget the death of a father sooner than the loss of an inheritance. If harsh measures are needed, they should be done all at once and then ended. Benefits, by contrast, should be handed out little by little, so they are savored.",
        ],
      },
      {
        title: 'Be both the fox and the lion',
        body: [
          'A ruler must know how to fight with laws, as humans do, and with force, as animals do. Among the animals he should imitate two. The lion cannot protect itself from traps, and the fox cannot protect itself from wolves. You need to be a fox to spot the traps and a lion to scare off the wolves.',
          'A prudent ruler does not keep a promise when keeping it would harm him and the reasons for making it have disappeared. Yet he must appear merciful, trustworthy, humane, honest and devout. Everyone sees what you seem to be; few can touch what you really are, and most people judge by results.',
        ],
      },
      {
        title: 'Fortune rules half of life; preparation rules the rest',
        body: [
          'Machiavelli grants that luck governs perhaps half of what happens to us, but it leaves the other half in our hands. Fortune is like a violent river in flood. You cannot stop it. In calm weather, though, you can build dams and embankments so that the next flood does less damage.',
          'Rulers who prosper in one period fall in the next because the times change and their methods do not. Since few people can change their nature, Machiavelli judges that boldness generally serves better than caution. Fortune tends to yield to those who act with energy and nerve, the quality he calls virtù.',
        ],
      },
      {
        title: 'Depend on your own strength and on honest advice',
        body: [
          'Hired soldiers are useless and dangerous: disunited, undisciplined, brave among friends and cowardly before the enemy. Borrowed armies are worse, because if they win you are their prisoner. A state is secure only when it relies on its own forces. Good laws cannot exist where there are no good arms.',
          "The first way to judge a ruler's intelligence is to look at the people around him. To escape flatterers, he should choose a few wise advisers and give them alone full freedom to tell him the truth, but only on matters he asks about. Then he must decide for himself. A prince who is not wise himself can never be well advised.",
        ],
      },
    ],
    takeaway:
      "Power is held by those who see situations clearly, prepare for bad luck, adapt to changing times and rely on their own resources. Machiavelli's uncomfortable lesson is that good intentions are not a strategy.",
  },
  {
    id: 'the-wealth-of-nations',
    title: 'The Wealth of Nations',
    author: 'Adam Smith',
    year: '1776',
    category: 'money',
    tagline: 'Why some countries grow rich — and the surprising role of self-interest.',
    about:
      "Published in the year of American independence, Adam Smith's enormous study asks what actually makes a nation prosperous. His answer — productive labor, specialization and free exchange rather than hoards of gold — founded modern economics.",
    whoFor: [
      'Anyone who wants to understand how markets work',
      'Entrepreneurs and people who follow economic policy',
      'Readers who have heard of the "invisible hand" and want the context',
    ],
    aboutAuthor:
      'Adam Smith was a Scottish moral philosopher and a professor at the University of Glasgow. Before The Wealth of Nations he wrote The Theory of Moral Sentiments, a study of sympathy and conscience.',
    cover: { bg: '#1e4d40', ink: '#f2ecdc', accent: '#e8c468', motif: 'dots' },
    ideas: [
      {
        title: 'Dividing work multiplies what we can produce',
        body: [
          'Smith opens in a pin factory. One untrained worker, doing every step alone, might struggle to make a single pin in a day. But when ten workers divide the job into separate operations, with one drawing the wire, another straightening it and another cutting it, together they can make around 48,000 pins a day.',
          'He gives three reasons. Workers get faster at a task they repeat. No time is lost switching between jobs. And people focused on one operation invent tools and machines to make it easier. This division of labor, he argues, is the main engine behind rising prosperity.',
        ],
      },
      {
        title: 'Self-interest, guided by exchange, serves everyone',
        body: [
          "We don't expect our dinner from the kindness of the butcher, the brewer or the baker. We get it because selling to us serves their own interest. Humans have a natural tendency to trade, and trade lets each of us draw on the work of thousands of strangers.",
          'People who aim only at their own gain steer their effort toward whatever others value most. In doing so they are led, as if by an invisible hand, to promote a public good they never intended. Smith is not praising greed. His argument assumes fair rules, real competition and a society that punishes fraud.',
        ],
      },
      {
        title: 'Larger markets make everyone more productive',
        body: [
          'Specialization is limited by the size of the market. In a remote village, a family has to be its own butcher, baker and brewer, because no one could make a living doing just one of those things. Only a large town can support a porter, and only a great city supports highly specialized trades.',
          'Anything that widens the market therefore increases wealth. Rivers and sea routes mattered so much in history because water transport was cheap and connected distant buyers and sellers. Money matters for the same reason: it removes the awkwardness of barter. Trade is not a contest with a winner and a loser. Both sides gain.',
        ],
      },
      {
        title: "A nation's wealth is what it produces, not the gold it holds",
        body: [
          "The reigning theory of Smith's day, mercantilism, treated wealth as a pile of gold and silver. Countries were supposed to export as much as possible, import as little as possible and hoard the difference. Smith argues that real wealth is the yearly flow of goods and services that people can actually use.",
          'Consumption, he writes, is the only purpose of production. Tariffs and monopolies sacrifice ordinary consumers for the benefit of favored producers. If another country can supply a good more cheaply than we can make it, it is better to buy it. He also warns that merchants in the same trade rarely meet without the conversation turning to a scheme for raising prices.',
        ],
      },
      {
        title: 'Government has a limited but vital role',
        body: [
          "In Smith's system of natural liberty, the state has three duties. It must defend the country. It must provide justice, protecting each person from the oppression of others. And it must build and maintain public works, such as roads, bridges, canals and harbors, that benefit everyone but would never repay a private investor.",
          'Smith also saw a cost in his own favorite idea. A person who spends a lifetime performing a few simple operations has no occasion to exercise their mind and can become dull and narrow. His remedy is public support for basic schooling. And taxes, he adds, should match the ability to pay, be predictable, be convenient and be cheap to collect.',
        ],
      },
    ],
    takeaway:
      'Prosperity comes from people specializing, trading freely and competing under fair rules, not from hoarding treasure or protecting favored industries. Markets coordinate self-interest remarkably well, provided the state supplies justice, defense and the public goods that markets neglect.',
  },
  {
    id: 'the-richest-man-in-babylon',
    title: 'The Richest Man in Babylon',
    author: 'George S. Clason',
    year: '1926',
    category: 'money',
    tagline: 'Ancient parables, simple rules: pay yourself first and let money work.',
    about:
      "Set in the markets and counting houses of ancient Babylon, these short parables began life as pamphlets handed out by banks. Through characters like Arkad, a scribe who became the city's richest man, they teach a handful of money rules that haven't aged.",
    whoFor: [
      'Anyone starting to take control of their money',
      'People who earn well but never seem to keep any of it',
      'Readers who prefer stories to spreadsheets',
    ],
    aboutAuthor:
      'George Samuel Clason was an American businessman and map publisher. From 1926 he wrote a series of pamphlets on thrift that banks and insurance companies distributed by the million.',
    cover: { bg: '#d9a441', ink: '#2b1d0e', accent: '#7b3f12', motif: 'ziggurat' },
    ideas: [
      {
        title: 'A part of all you earn is yours to keep',
        body: [
          'Arkad was a humble scribe before he became the richest man in Babylon. His turning point was a piece of advice from an old moneylender named Algamish: wealth begins when you decide to keep a part of everything you earn. Not less than a tenth, and more if you can manage it.',
          'The rule is to pay yourself first, before the cloth merchant and the sandal maker get their share. For every ten coins you put in your purse, take out only nine. Arkad reports something curious: living on nine-tenths felt no different from before, and before long the purse began to feel pleasantly heavy.',
        ],
      },
      {
        title: 'Keep your expenses below your income',
        body: [
          'If we do not resist it, what we call our necessary expenses will always grow to match our income. Arkad warns his students not to confuse needs with desires. Everyone has more wants than their earnings can satisfy, the richest man included.',
          'The answer is a budget. Write down everything you would like to spend money on, pick what is truly necessary and what is achievable within nine-tenths of your income, and cross out the rest. A budget is not a cage. It defends your most cherished wishes against your casual ones, and shows you the leaks in your purse.',
        ],
      },
      {
        title: 'Put your savings to work',
        body: [
          "Savings are only a start. A man's wealth is not the coins in his purse but the income he builds, the stream that keeps flowing whether he works or travels. So every coin should be put to labor, so that it earns more coins, and those in turn earn more.",
          'Arkad learned this the hard way. He handed his first year of savings to a brickmaker who promised to buy rare jewels, and the man came home with worthless glass. Later he invested with a shield maker and earned a steady return, then spent the earnings on feasts and fine clothes. Algamish scolded him: you are eating the children of your savings. How will they ever work for you?',
        ],
      },
      {
        title: 'Protect your principal and take advice from experts',
        body: [
          'The first principle of investing is the safety of what you put in. A promise of unusually high returns is usually an invitation to lose everything. Before lending or investing, study whether you can reclaim your money, and be satisfied with a reasonable gain rather than risking your treasure for a dazzling one.',
          'The lost savings carried a second lesson: ask the brickmaker about bricks, not about jewels. Seek the counsel of people who handle money successfully every day. The book condenses this into its laws of gold. Gold comes to those who save, works for those who invest it wisely, stays with the cautious, and flees from those who chase impossible earnings or trust tricksters.',
        ],
      },
      {
        title: 'Grow your earning power and pay your debts with a plan',
        body: [
          'The final cure for a lean purse is to increase your ability to earn. As a scribe, Arkad studied his craft until he could carve more tablets in a day than anyone else, and his pay rose with his skill. The more we know, the more we can earn. Those who keep learning are richly rewarded.',
          'The book also tells of Dabasir, a camel trader who fell so deep into debt that he fled the city and ended up a slave. He escaped once he resolved to face his creditors as a free man would. His plan was simple: live on seven-tenths of his income, save one-tenth and divide two-tenths fairly among his creditors until every debt was cleared. Where the determination is, the way can be found.',
        ],
      },
    ],
    takeaway:
      'Building wealth is simple, though not easy: spend less than you earn, save at least a tenth, invest it carefully with good advice, avoid schemes that promise too much, and keep increasing your skills.',
  },
]
