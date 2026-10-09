import type { Book } from '../types'

export const investing: Book[] = [
  {
    id: 'reminiscences-of-a-stock-operator',
    title: 'Reminiscences of a Stock Operator',
    author: 'Edwin Lefèvre',
    year: '1923',
    category: 'investing',
    tagline: "The thinly disguised life of Wall Street's most famous speculator.",
    about:
      'Told in the voice of a trader named Larry Livingston, this is a fictionalized biography of Jesse Livermore, who made and lost several fortunes in the early twentieth century. Traders still read it for its hard-won lessons about markets and about themselves.',
    whoFor: [
      'Anyone who trades or is tempted to',
      'Investors who want to understand market psychology',
      'Readers who enjoy a good story about money and risk',
    ],
    aboutAuthor:
      'Edwin Lefèvre was an American journalist and author who covered Wall Street. The book is based on his extensive interviews with Jesse Livermore.',
    cover: { bg: '#102a43', ink: '#f0ead8', accent: '#3ebd93', motif: 'chevrons' },
    ideas: [
      {
        title: 'There is nothing new in Wall Street',
        body: [
          'Livingston starts as a boy chalking prices on a brokerage board. He notices that the numbers move in repeating patterns and begins betting on them in bucket shops, where he wins so steadily that he is banned.',
          'The lesson he draws lasts his whole life. Speculation is as old as the hills. Whatever happens in the market today has happened before and will happen again, because human nature does not change.',
        ],
      },
      {
        title: 'Follow the line of least resistance',
        body: [
          'Prices, like everything else, move along the path of least resistance. The task is not to guess tops and bottoms. It is to work out whether the general trend is up or down and to trade in that direction.',
          'An old trader in the story answers every question with the same remark: it is a bull market, you know. Livingston comes to see the wisdom in it. Knowing the main tide matters more than any single ripple.',
        ],
      },
      {
        title: 'The big money is made by sitting',
        body: [
          'After years of trading, Livingston says it was never his thinking that made the big money. It was his sitting. People who are right about the market are common. People who are right and then hold on are rare.',
          'Most traders take a small profit and watch the real move happen without them. Patience is hard because it feels like doing nothing. He regards it as the most difficult skill to learn.',
        ],
      },
      {
        title: 'Cut losses and never average down',
        body: [
          'A loss, taken quickly, is a small matter. Left alone, it grows. Livingston says the typical speculator does exactly the wrong thing: fearful when holding a profit, so that it is sold too soon, and hopeful when holding a loss, so that it is kept.',
          'Hope and fear, he argues, must be reversed. Be afraid that a loss will get bigger and hopeful that a profit will. And never buy more of a falling stock just to lower your average cost.',
        ],
      },
      {
        title: 'Beware of tips, and of yourself',
        body: [
          'People crave tips because they want to be told what to do. Livingston loses heavily whenever he abandons his own judgment for someone else\'s story, including that of a brilliant friend who talks him into a bad position in cotton.',
          'The enemy is always within. The market does not beat traders, he says. They beat themselves, through impatience, vanity and the wish to get something for nothing. A trader must study his own weaknesses as carefully as he studies the tape.',
        ],
      },
    ],
    takeaway:
      'Markets change, but human nature does not. Trade with the main trend, be patient with winners and ruthless with losers, ignore tips, and remember that your own emotions are the biggest risk.',
  },
  {
    id: 'extraordinary-popular-delusions',
    title: 'Extraordinary Popular Delusions',
    author: 'Charles Mackay',
    year: '1841',
    category: 'investing',
    tagline: 'Tulips, bubbles and the madness of crowds.',
    about:
      'Charles Mackay collected the great episodes of mass folly in history, from witch hunts to alchemy. The chapters that made the book famous describe three financial manias and remain the classic warning about what happens when a whole society decides it cannot lose.',
    whoFor: [
      'Investors who want perspective during a boom',
      'Anyone feeling the fear of missing out',
      'Readers interested in crowd psychology',
    ],
    aboutAuthor:
      'Charles Mackay was a Scottish journalist, poet and songwriter who worked as an editor and foreign correspondent for London newspapers.',
    cover: { bg: '#f5e9d0', ink: '#2a1e17', accent: '#d7263d', motif: 'sprout' },
    ideas: [
      {
        title: 'People go mad in herds',
        body: [
          'Mackay states his theme in the preface. Whole communities, he observes, suddenly fix their minds on one object and go mad in its pursuit. Millions become impressed with a single delusion and run after it.',
          'His best-known line follows. Men think in herds and go mad in herds, while they recover their senses slowly, and one by one. The rest of the book supplies the evidence.',
        ],
      },
      {
        title: 'The Mississippi scheme',
        body: [
          'In France around 1719, the Scottish financier John Law persuaded the government to issue paper money and to back a company with a monopoly on trade with the Mississippi territory. Its shares rose many times over.',
          'Paris filled with speculators and servants became rich overnight. Then holders began to ask for coin in exchange for their paper, and there was not enough. The system collapsed, fortunes vanished and Law fled the country.',
        ],
      },
      {
        title: 'The South Sea Bubble',
        body: [
          'At the same moment in England, the South Sea Company offered to take over the national debt in return for trading privileges. The trade was almost worthless, but the shares went up nearly tenfold in a few months in 1720.',
          'Imitators appeared, including one company promoted, in the legend Mackay repeats, for an undertaking of great advantage that nobody was to know. When confidence broke, thousands were ruined, among them people of every rank.',
        ],
      },
      {
        title: 'Tulipomania',
        body: [
          'In Holland in the 1630s, rare tulip bulbs became objects of speculation. Mackay tells of a single bulb exchanged for a whole list of goods, and of people selling houses and land to buy bulbs they never meant to plant.',
          'Prices fell suddenly in 1637 and buyers refused to honor their contracts. Modern historians think Mackay exaggerated the scale and the damage. The episode survives all the same as the standard picture of a bubble.',
        ],
      },
      {
        title: 'The pattern repeats',
        body: [
          'Read side by side, the manias share a shape. There is a new and exciting story. Early buyers make real profits. Credit is easy, and people borrow to buy more. Finally those who know nothing about the thing buy it only because it is rising.',
          'Then some small doubt appears, everyone tries to sell at once and a search for someone to blame begins. Mackay offers no formula for avoiding this. His gift is recognition: the next time will feel different, and will not be.',
        ],
      },
    ],
    takeaway:
      'Crowds can be confidently, enthusiastically wrong. When prices are rising only because they are rising, and everyone you know is sure, remember tulips and step back.',
  },
  {
    id: 'the-way-to-wealth',
    title: 'The Way to Wealth',
    author: 'Benjamin Franklin',
    year: '1758',
    category: 'investing',
    tagline: 'Early to bed, a penny saved, and the rest of Poor Richard in one short speech.',
    about:
      'For the final edition of his almanac, Franklin gathered twenty-five years of his proverbs about work and money into a single speech delivered by an old man at a country auction. It became one of the most reprinted pieces of American writing.',
    whoFor: [
      'Anyone who wants the foundations of personal finance in ten minutes',
      'People who know the proverbs but not where they come from',
      'Savers who need a little encouragement',
    ],
    aboutAuthor:
      'Benjamin Franklin was a printer, scientist, inventor and diplomat, and one of the Founding Fathers of the United States. He published Poor Richard\'s Almanack from 1732 to 1758.',
    cover: { bg: '#2f4858', ink: '#f6efdc', accent: '#f6ae2d', motif: 'clock' },
    ideas: [
      {
        title: 'We tax ourselves more than any government does',
        body: [
          'A crowd waiting for an auction to open is complaining about heavy taxes. They ask an old man called Father Abraham what he thinks. He replies that the taxes are indeed heavy, but that others weigh far more.',
          'We are taxed twice as much by our idleness, he says, three times as much by our pride and four times as much by our folly. From these taxes no official can excuse us.',
        ],
      },
      {
        title: 'Industry: do not waste time',
        body: [
          'If you love life, do not squander time, for that is the stuff life is made of. Sloth, like rust, consumes faster than labor wears. The sleeping fox catches no poultry, and there will be sleeping enough in the grave.',
          'Father Abraham recites the famous lines. Early to bed and early to rise makes a man healthy, wealthy and wise. Never leave until tomorrow what you can do today. Diligence, he adds, is the mother of good luck.',
        ],
      },
      {
        title: 'Frugality: beware of little expenses',
        body: [
          'Work is not enough if the money runs out the other side. A person may keep their nose to the grindstone all their life and die without a penny if they do not also save. A fat kitchen makes a lean will.',
          'It is the small, repeated spending that does the damage. Beware of little expenses, he says, for a small leak will sink a great ship. Whoever buys what they do not need will soon have to sell what they do.',
        ],
      },
      {
        title: 'Debt: do not give others power over you',
        body: [
          'Father Abraham is fiercest about borrowing. To go into debt is to give another person power over your liberty. The borrower is a slave to the lender. It is hard for an empty bag to stand upright.',
          'He would sooner go to bed without supper than rise in debt. The pleasure of the purchase is short and the payments are long. Creditors, he remarks, have better memories than debtors.',
        ],
      },
      {
        title: 'Experience is a dear school',
        body: [
          'The old man closes by admitting that advice can be given but conduct cannot. Experience keeps an expensive school, yet fools will learn in no other. Those who will not be counseled cannot be helped.',
          'Franklin then adds a joke at his own expense. The crowd listens, approves every word, and as soon as the auction opens begins to buy extravagantly. Only the narrator, who came to buy cloth for a new coat, goes home resolved to wear his old one longer.',
        ],
      },
    ],
    takeaway:
      'Work steadily, watch the small leaks in your spending, stay out of debt and start now. None of it is new, which is exactly why it is worth hearing again before the auction opens.',
  },
  {
    id: 'lombard-street',
    title: 'Lombard Street',
    author: 'Walter Bagehot',
    year: '1873',
    category: 'investing',
    tagline: 'Why banks are fragile, and what to do when everyone panics.',
    about:
      'Named after the street at the heart of the London banking district, this is the classic account of how a money market works and why it sometimes seizes up. Its advice to central banks in a crisis is still quoted whenever one arrives.',
    whoFor: [
      'Investors who want to understand financial crises',
      'Anyone puzzled by what central banks do',
      'Readers who like economics explained in plain English',
    ],
    aboutAuthor:
      'Walter Bagehot was an English banker, essayist and long-serving editor of The Economist.',
    cover: { bg: '#3a3335', ink: '#f2ebdb', accent: '#d8973c', motif: 'columns' },
    ideas: [
      {
        title: 'Money is economical power, borrowed',
        body: [
          'Bagehot begins by marveling at the size of the London money market. Never before had so much ready cash been gathered in one place, available to anyone with a good proposal. It let English merchants trade on a scale no rival could match.',
          'But nearly all of it was other people\'s money. The bankers held deposits that could be withdrawn at short notice and lent them out for longer periods. The whole structure was at once immensely powerful and delicate.',
        ],
      },
      {
        title: 'The system runs on a thin reserve',
        body: [
          'Because it earns nothing, banks keep as little idle cash as they can. In Bagehot\'s day, the country banks kept their reserves with the London banks, the London banks kept theirs with the Bank of England, and the Bank itself held a surprisingly small stock.',
          'One modest reserve therefore stood behind the entire credit of the nation. As long as people trusted it, almost none of it was needed. If trust failed, it could not possibly satisfy everyone.',
        ],
      },
      {
        title: 'Credit is confidence',
        body: [
          'Credit, Bagehot writes, is a power that may grow but cannot be constructed. It rests on belief that promises will be kept. In ordinary times that belief is so complete that nobody thinks about it.',
          'A panic is a sudden collapse of it. Bagehot calls it a species of neuralgia, and says the rules of science are that you must not starve it. Everyone wants cash at once, and sound firms are endangered along with unsound ones.',
        ],
      },
      {
        title: 'In a panic, lend freely, at a high rate, on good security',
        body: [
          'Since the Bank of England holds the final reserve, Bagehot argues, it has a public duty whether it admits it or not. When a panic starts it must lend to anyone who brings good collateral, quickly and without limit.',
          'The lending should be at a very high rate of interest, so that only those in real need apply, and it should not go to firms that are actually insolvent. The object is to stop the alarm by showing that money can be had.',
        ],
      },
      {
        title: 'Say so in advance',
        body: [
          'In the crisis of 1866, when a great discount house failed, the Bank did lend heavily, but hesitantly and without any announced policy. That uncertainty, Bagehot thought, made the panic worse.',
          'His remedy is clarity. A central bank should hold a larger reserve in quiet times and declare openly that it will act as lender of last resort. People who know help is available have much less reason to run.',
        ],
      },
    ],
    takeaway:
      'Banking rests on confidence backed by a small reserve. When confidence breaks, the cure is a central bank that lends boldly against good assets at a penalty rate, and that has made clear beforehand that it will.',
  },
  {
    id: 'the-psychology-of-the-stock-market',
    title: 'The Psychology of the Stock Market',
    author: 'G. C. Selden',
    year: '1912',
    category: 'investing',
    tagline: 'A century-old guide to the emotions that move prices.',
    about:
      'George Selden argued that the movements of prices depend to a very large degree on the mental attitude of the investing public. His short book is one of the first works of what is now called behavioral finance.',
    whoFor: [
      'Investors who buy high and sell low and want to know why',
      'Anyone interested in behavioral finance',
      'Traders looking for a calmer way to think',
    ],
    aboutAuthor:
      'George Charles Selden was an American financial writer and an editor of The Magazine of Wall Street.',
    cover: { bg: '#243b53', ink: '#f0ebdc', accent: '#f25f5c', motif: 'waves' },
    ideas: [
      {
        title: 'Prices reflect minds as well as facts',
        body: [
          'Selden grants that over the long run prices follow earnings and interest rates. Over shorter periods, he says, they are driven by what traders believe, hope and fear, and especially by what they believe others will do.',
          'A market is therefore a study in psychology. To understand a price movement you must ask not only what the facts are, but who already knows them and how the crowd is positioned.',
        ],
      },
      {
        title: 'The mythical "they"',
        body: [
          'Traders constantly talk about what they are going to do: they will put the market up, or they are shaking out weak holders. Selden notes that this imagined group of all-powerful insiders is usually an illusion.',
          'Big interests exist, but they often disagree and are frequently wrong. Blaming an unseen they is a way of avoiding thought. It is better to regard the market as the sum of many people behaving much as you do.',
        ],
      },
      {
        title: 'Inverted reasoning',
        body: [
          'Speculators learn that good news is often followed by a fall, because the rise came earlier in anticipation. Some then reverse all logic and argue that every piece of good news is a reason to sell.',
          'Selden calls this inverted reasoning and warns that it becomes a trap of its own. The useful question is whether the news was expected. Markets discount what is foreseen and react to what surprises.',
        ],
      },
      {
        title: 'Fear and greed distort the present',
        body: [
          'In a boom, people project the recent rise forward without limit and buy most heavily near the top. In a panic they do the same with the fall, and sell at the very prices that later look like bargains.',
          'The mistake is confusing the present with the future. Current conditions feel permanent while we are inside them. Selden advises remembering that extreme sentiment is itself evidence that a move is well advanced.',
        ],
      },
      {
        title: 'Keep an impersonal attitude',
        body: [
          'The moment a person owns a stock, their judgment tilts. They notice the favorable facts and explain away the rest. Selden says most traders do not hold opinions so much as defend positions.',
          'His ideal is to look at the market as though you had no stake in it. Trade small enough to stay calm, decide in advance what would prove you wrong, and do not let a wish stand in for an analysis.',
        ],
      },
    ],
    takeaway:
      'Prices are moved by human moods, including your own. Ask what is already expected, be wary at emotional extremes, stop blaming hidden manipulators and keep your positions small enough to think clearly.',
  },
  {
    id: 'common-stocks-as-long-term-investments',
    title: 'Common Stocks as Long Term Investments',
    author: 'Edgar Lawrence Smith',
    year: '1924',
    category: 'investing',
    tagline: 'The study that first showed stocks beat bonds over time.',
    about:
      'In the early 1920s, sensible people bought bonds and regarded shares as a gamble. Edgar Lawrence Smith set out to prove them right, and his data showed the opposite. His small book changed how the world invests.',
    whoFor: [
      'Long-term investors and savers',
      'Anyone deciding between shares and fixed income',
      'Readers interested in the history of investing ideas',
    ],
    aboutAuthor:
      'Edgar Lawrence Smith was an American investment manager and economist. After the book appeared he founded one of the early mutual fund companies.',
    cover: { bg: '#1c3d2e', ink: '#f1ecd8', accent: '#9ad27a', motif: 'ziggurat' },
    ideas: [
      {
        title: 'A study that reversed its own conclusion',
        body: [
          'Smith began with the accepted view. Bonds were for investors and common stocks were for speculators. He expected to show that bonds did better whenever prices in the economy were falling, and shares only when prices rose.',
          'He ran a series of tests using diversified groups of large company shares against high-grade bonds over periods from 1866 to 1922. The evidence would not support his thesis, and he had the honesty to say so.',
        ],
      },
      {
        title: 'Stocks won in almost every period',
        body: [
          'In test after test, a spread of common stocks produced a higher total return than bonds. This was expected for times of rising prices. The surprise was that stocks also came out ahead in most periods of falling prices.',
          'Only one of his comparisons favored bonds, and then narrowly. Income from the shares generally caught up with and passed the fixed income from the bonds, while the capital value grew.',
        ],
      },
      {
        title: 'Retained earnings compound',
        body: [
          'Smith looked for the reason and found it in the way well-run companies behave. They do not pay out all they earn. Part of each year\'s profit is kept and reinvested in the business.',
          'Those retained earnings work like compound interest on behalf of the shareholder. Over time they raise the value of the company and its ability to pay dividends. A bond offers nothing of the kind: its payments are fixed forever.',
        ],
      },
      {
        title: 'Bonds carry a hidden risk',
        body: [
          'A bond feels safe because it promises a set number of dollars. Smith pointed out that the promise says nothing about what those dollars will buy. When the cost of living rises, the bondholder is quietly made poorer.',
          'Shares are a claim on real businesses whose revenues tend to rise with prices. So the investment called safe was exposed to one great danger, and the one called risky had a built-in defense against it.',
        ],
      },
      {
        title: 'Diversify, wait, and do not overpay',
        body: [
          'Smith was clear that his findings applied to a spread of sound companies held for many years. Even someone who bought at a peak, he estimated, had usually recovered their capital within a limited number of years.',
          'The book was eagerly taken up in the boom that followed, and many readers remembered only that stocks always win. The crash of 1929 supplied the missing clause. The argument is true over long periods, and the price you pay still matters.',
        ],
      },
    ],
    takeaway:
      'Over long periods, a diversified holding of good businesses has beaten fixed income because profits are reinvested and grow. Give it time, spread your risk, and do not mistake the argument for a guarantee at any price.',
  },
  {
    id: 'confusion-de-confusiones',
    title: 'Confusion de Confusiones',
    author: 'Joseph de la Vega',
    year: '1688',
    category: 'investing',
    tagline: 'The oldest book about the stock exchange, and it already sounds familiar.',
    about:
      'Written in Amsterdam when share trading was barely eighty years old, this lively dialogue describes the first stock exchange in the world: its bulls and bears, its options and rumors, and its ability to bewilder everyone involved.',
    whoFor: [
      'Investors who think modern markets are uniquely crazy',
      'History lovers',
      'Anyone who wants four rules that have lasted three centuries',
    ],
    aboutAuthor:
      'Joseph de la Vega was a merchant, poet and writer from the Portuguese Jewish community of Amsterdam, and an active trader on its exchange.',
    cover: { bg: '#40304f', ink: '#f3ecdb', accent: '#f2b84b', motif: 'gap' },
    ideas: [
      {
        title: 'A game invented in Amsterdam',
        body: [
          'The book is a conversation between a philosopher, a merchant and a shareholder. The shareholder explains to the other two the strange business that has grown up around the shares of the Dutch East India Company.',
          'He calls it at once the fairest and most deceitful business in Europe, the noblest and the most infamous. It is a touchstone for the intelligent, he says, and a tombstone for the bold.',
        ],
      },
      {
        title: 'Bulls, bears and clever contracts',
        body: [
          'By the 1680s the Amsterdam traders had already invented most of the modern toolkit. De la Vega describes buying for future delivery, selling shares one does not own, and options that limit the loss to a premium.',
          'He also describes two camps. The optimists buy and talk prices up, fearing nothing. The pessimists sell and spread alarm. Each side has its tricks, and each tries to stampede the other.',
        ],
      },
      {
        title: 'News and nerves move prices',
        body: [
          'Three things, he says, drive the exchange: conditions in the Indies, the politics of Europe, and opinion on the exchange itself. The third is the most powerful and the least rational.',
          'Prices rise on a rumor and fall when the rumor proves true. The expectation of an event, he notes, makes a much deeper impression than the event itself. Traders have been rediscovering that sentence ever since.',
        ],
      },
      {
        title: 'Four rules for the speculator',
        body: [
          'The shareholder offers four principles. First, never advise anyone to buy or sell shares, because where guessing correctly is a kind of witchcraft, advice cannot be put on air.',
          'Second, take every gain without regret for missed profits, since an eel may escape sooner than you think. Third, profits on the exchange are the treasures of goblins: at one moment jewels, the next coal.',
        ],
      },
      {
        title: 'Patience and money',
        body: [
          'The fourth rule is that whoever wishes to win in this game must have patience and money. Values are so little constant and rumors so little founded on truth that only someone able to endure blows will survive them.',
          'The philosopher and the merchant end as confused as they began, which is the meaning of the title. De la Vega does not pretend the market can be mastered. He shows how to stay in it without being destroyed.',
        ],
      },
    ],
    takeaway:
      'Markets were bewildering from the very beginning. Do not hand out tips, take profits without regret, treat paper gains as provisional, and make sure you have the patience and the cash to sit through bad times.',
  },
  {
    id: 'the-abc-of-stock-speculation',
    title: 'The ABC of Stock Speculation',
    author: 'S. A. Nelson',
    year: '1903',
    category: 'investing',
    tagline: 'Where the ideas of Charles Dow were first gathered into a theory.',
    about:
      'Charles Dow, co-founder of The Wall Street Journal and inventor of the stock averages, never wrote a book. After his death his colleague Samuel Nelson collected his editorials here, and gave the world the term Dow theory.',
    whoFor: [
      'Investors curious about the origin of the Dow averages and trend analysis',
      'Beginners who want the basic vocabulary of market movements',
      'Traders who risk too much on each idea',
    ],
    aboutAuthor:
      'Samuel Armstrong Nelson was a financial journalist who worked with Charles Dow at Dow, Jones and Company in New York.',
    cover: { bg: '#e8e4d8', ink: '#1b2a3a', accent: '#c8553d', motif: 'bolt' },
    ideas: [
      {
        title: 'The market has three movements at once',
        body: [
          'Dow observed that prices move in three ways simultaneously. There is the narrow movement from day to day. There is the short swing lasting from a couple of weeks to a month or more.',
          'And there is the main movement, which runs for years. He compared them to the sea: the tide is the main trend, the waves are the swings, and the ripples are the daily changes. The tide is what matters.',
        ],
      },
      {
        title: 'Find the main trend and go with it',
        body: [
          'The first question for anyone dealing in stocks is whether the primary movement is up or down. In a rising market, reactions are opportunities to buy. In a falling one, rallies are chances to sell.',
          'Dow judged the tide by watching his averages make successive highs and lows, as one watches the waves creep up a beach. Most losses, he thought, come from trading against the main movement on the strength of a ripple.',
        ],
      },
      {
        title: 'Value decides in the end',
        body: [
          'Dow was not only a reader of charts. He insisted that in the long run prices are governed by values, and that values depend on the earnings of the property and its power to pay dividends.',
          'The manipulator may push a stock about for a while, but cannot hold it far from its worth for long. The sound method is to study a company, buy when it sells below its value and wait for the market to agree.',
        ],
      },
      {
        title: 'Cut losses short',
        body: [
          'Even careful study will often be wrong, so Dow favored limiting the damage. Decide in advance how much you will lose on a purchase, and sell without argument if the price falls to that point.',
          'Let profits run and cut losses short, he advised. The public tends to do the reverse, taking two points of profit and sitting on ten points of loss. A few such trades wipe out many good ones.',
        ],
      },
      {
        title: 'Do not overtrade',
        body: [
          'The chief cause of ruin, in his view, is taking positions too large for one\'s capital. A person who puts everything on a thin margin can be right about the stock and still be sold out by an ordinary dip.',
          'Dow recommended operating on a small scale relative to your means and expecting modest returns. Someone content to make a steady percentage on capital, he said, will find Wall Street much kinder than someone trying to double it.',
        ],
      },
    ],
    takeaway:
      'Know which way the tide is running, buy on value, set a limit on every loss, and keep each position small. Most people who fail in markets fail by breaking the last two rules.',
  },
]
