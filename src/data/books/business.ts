import type { Book } from '../types'

export const business: Book[] = [
  {
    id: 'the-principles-of-scientific-management',
    title: 'The Principles of Scientific Management',
    author: 'Frederick Winslow Taylor',
    year: '1911',
    category: 'business',
    tagline: 'The stopwatch study that invented modern management.',
    about:
      'Frederick Taylor argued that there is one best way to do any job and that it can be found by measurement and experiment. His short book transformed factories around the world and started an argument about efficiency and human dignity that still goes on.',
    whoFor: [
      'Managers and operations people',
      'Anyone curious where productivity thinking began',
      'Readers who want to understand the critique of efficiency culture',
    ],
    aboutAuthor:
      'Frederick Winslow Taylor was an American mechanical engineer who rose from laborer to chief engineer at a steel works and became the first management consultant.',
    cover: { bg: '#2c3e50', ink: '#f1ecdf', accent: '#f39c3d', motif: 'clock' },
    ideas: [
      {
        title: 'Most work is done far below its potential',
        body: [
          'Taylor opens with the claim that the whole country is suffering from inefficiency in almost all its daily acts. In the workshops he knew, men deliberately worked slowly, a practice he calls soldiering.',
          'They had reasons. They feared that higher output would mean fewer jobs, and they knew that if they worked faster the employer would cut the piece rate. The system itself rewarded holding back.',
        ],
      },
      {
        title: 'Replace rule of thumb with science',
        body: [
          'In every trade, methods were passed from worker to worker by word of mouth. Taylor proposed to study each task instead: break it into motions, time them with a stopwatch, remove the useless ones and find the quickest sequence.',
          'His study of shoveling is typical. He found that a first-class shoveler moved the most material in a day with a load of about twenty-one pounds, so he supplied different shovels for different materials to keep the load constant.',
        ],
      },
      {
        title: 'The pig iron experiment',
        body: [
          'At the Bethlehem steel works, laborers each loaded about twelve and a half tons of pig iron a day. Taylor calculated that a suitable man, working and resting at exactly prescribed intervals, could load forty-seven.',
          'He chose a worker he calls Schmidt, offered him a higher daily wage and had a supervisor tell him when to lift and when to sit. Schmidt loaded forty-seven tons and kept doing so. Historians have since questioned how tidy the story really was.',
        ],
      },
      {
        title: 'Four duties for management',
        body: [
          'Taylor sums up his system in four principles. Develop a science for each element of the work. Scientifically select and then train each worker, instead of leaving them to train themselves.',
          'Cooperate heartily with the workers to make sure the science is followed. And divide the responsibility: management takes over the planning it is better fitted for, while workers carry out the tasks.',
        ],
      },
      {
        title: 'Higher wages and lower costs, at a price',
        body: [
          'Taylor insisted his aim was prosperity for both sides. More output per person would allow high wages and low labor costs together, and so end the quarrel over how to divide the surplus.',
          'Critics replied that separating thinking from doing turns people into parts of a machine, and unions fought his methods. Both views were right. Scientific management raised living standards enormously, and it also created the dull, closely timed job.',
        ],
      },
    ],
    takeaway:
      'Do not assume the usual way is the best way. Measure the work, test alternatives, train people properly and share the gains. But remember that efficiency gained by removing all judgment from a job has a human cost.',
  },
  {
    id: 'my-life-and-work',
    title: 'My Life and Work',
    author: 'Henry Ford',
    year: '1922',
    category: 'business',
    tagline: 'How the Model T and the moving assembly line put the world on wheels.',
    about:
      'Written with the journalist Samuel Crowther, this is Henry Ford\'s account of building the Ford Motor Company and of the ideas behind it: make a simple product well, cut its price relentlessly, pay workers enough to buy it, and treat waste as the enemy.',
    whoFor: [
      'Founders and product builders',
      'Anyone interested in manufacturing and lean thinking',
      'Readers who want the business ideas behind a famous name',
    ],
    aboutAuthor:
      'Henry Ford founded the Ford Motor Company in 1903 and revolutionized mass production. His reputation is rightly stained by the antisemitic material he published in his newspaper in the 1920s.',
    cover: { bg: '#15181d', ink: '#efeadb', accent: '#c9cfd6', motif: 'rings' },
    ideas: [
      {
        title: 'Service comes before profit',
        body: [
          'Ford says a business exists to provide a service. Profit is necessary, but it should be the result of doing the work well, not the purpose. A company that puts money first will sooner or later cheat the customer.',
          'He is suspicious of bankers and stockholders who want dividends more than better products. He preferred to put earnings back into the plant, and eventually bought out his partners so no one could stop him.',
        ],
      },
      {
        title: 'One simple product for the great multitude',
        body: [
          'In 1909 Ford announced that the company would build a single model on a single chassis: the Model T. It would be large enough for a family, simple enough for an owner to maintain and cheap enough for a person on a good salary to buy.',
          'His salesmen wanted variety. Ford answered that any customer could have a car painted any color so long as it was black. Standardization was not stubbornness. It was what made low cost possible.',
        ],
      },
      {
        title: 'Bring the work to the worker',
        body: [
          'Ford\'s rule in the factory was that no one should take more than one step if it could be avoided, and no one should ever have to stoop. In 1913 his engineers began moving the work past the workers on a line.',
          'The results were dramatic. Assembling a chassis had taken about twelve and a half hours. On the moving line, with each task subdivided, it came down to roughly an hour and a half.',
        ],
      },
      {
        title: 'Cut the price first and the cost will follow',
        body: [
          'Ford reversed the usual order. He did not work out costs and then set a price. He named a price low enough to bring in far more buyers and then forced the factory to find a way to make the car at a profit.',
          'Each cut widened the market, and each increase in volume lowered the cost again. The Model T fell from over eight hundred dollars to under three hundred, and millions of families who had never expected to own a car bought one.',
        ],
      },
      {
        title: 'Pay high wages and eliminate waste',
        body: [
          'In 1914 Ford more than doubled the going rate to five dollars for an eight-hour day. He called it one of the finest cost-cutting moves he ever made. Turnover collapsed, the best mechanics applied, and his own workers could afford his cars.',
          'He hated waste of every kind: of material, of time, of human effort. Scrap was reused and by-products were sold. Many of the ideas later known as lean production can be found here in plain language.',
        ],
      },
    ],
    takeaway:
      'Make something people really need, keep it simple, redesign the work until it flows, lower the price to enlarge the market, pay your people well, and regard every form of waste as a problem to be solved.',
  },
  {
    id: 'the-art-of-money-getting',
    title: 'The Art of Money Getting',
    author: 'P. T. Barnum',
    year: '1880',
    category: 'business',
    tagline: "The great showman's twenty golden rules for making money.",
    about:
      'Barnum made, lost and remade a fortune, and in this brisk lecture he passes on what he learned. Behind the circus reputation is surprisingly sober advice about debt, health, focus and honesty.',
    whoFor: [
      'Anyone starting a business or a career',
      'People who struggle to live within their income',
      'Readers who like their advice short and full of stories',
    ],
    aboutAuthor:
      'Phineas Taylor Barnum was an American showman, museum owner, politician and founder of the circus that became Barnum and Bailey.',
    cover: { bg: '#b3261e', ink: '#fbf0d9', accent: '#f7c948', motif: 'crown' },
    ideas: [
      {
        title: 'Spend less than you earn',
        body: [
          'Making money is not difficult in a land of opportunity, Barnum says. Keeping it is the hard part. The road to wealth is as plain as the road to the mill: it consists in spending less than we earn.',
          'True economy is not penny-pinching over candle ends. It is making income exceed outgo. He warns especially against trying to keep up appearances, and says prosperity is a harder test than adversity.',
        ],
      },
      {
        title: 'Avoid debt',
        body: [
          'A young person, Barnum says, should avoid debt as they would the plague. Debt robs a man of his self-respect. To borrow for land or tools may be justified. To borrow for what you eat, drink and wear is slavery.',
          'Money is a very good servant and a terrible master. When interest is working against you it works day and night, in wet weather and dry. Put it to work for you and it does the same in your favor.',
        ],
      },
      {
        title: 'Choose the right vocation and the right place',
        body: [
          'The surest way to succeed is to select the work most suited to your natural bent. We are all made differently, he says, and a born mechanic will never be happy as a clerk. Too many people are in the wrong trade.',
          'Location matters as well. A good business in a poor spot will fail. Barnum tells of a man who ran a splendid show where there was no audience for it, and who prospered once he moved.',
        ],
      },
      {
        title: 'Whatever you do, do it with all your might',
        body: [
          'Work at it early and late, in season and out, leaving no stone unturned. Many fail because they do things by halves. Ambition, energy and industry are indispensable, and so is perseverance when success is slow.',
          'Barnum adds two cautions. Do not scatter your powers over many enterprises: engage in one business and stick to it until you succeed. And depend on your own exertions, because no one will mind your business as well as you.',
        ],
      },
      {
        title: 'Advertise, be polite and keep your integrity',
        body: [
          'If you have a good article, let people know it. Barnum credits his fortune to advertising and says a single notice is not enough. The public must see your name again and again before they act.',
          'Be civil and generous to customers, for politeness is the best capital. Above all, preserve your integrity. It is more precious than diamonds, and honesty is not only right but the surest road to lasting business.',
        ],
      },
    ],
    takeaway:
      'Live within your means, stay out of debt, find work that suits you, commit to it completely, tell the world what you offer and never trade your good name for a quick gain.',
  },
  {
    id: 'scientific-advertising',
    title: 'Scientific Advertising',
    author: 'Claude C. Hopkins',
    year: '1923',
    category: 'business',
    tagline: 'The little book that turned advertising from guesswork into testing.',
    about:
      'Claude Hopkins was the most highly paid copywriter of his day. In this short manual he argues that advertising can be based on fixed principles, because results can be measured and compared. Modern marketers still treat it as a founding text.',
    whoFor: [
      'Marketers, founders and anyone who writes to sell',
      'People who run tests and want the original case for them',
      'Readers who suspect most advertising is wasted',
    ],
    aboutAuthor:
      'Claude C. Hopkins was an American advertising pioneer who created campaigns for toothpaste, beer, cereal and many other household brands.',
    cover: { bg: '#f4d35e', ink: '#1c1c1c', accent: '#0d3b66', motif: 'dots' },
    ideas: [
      {
        title: 'Advertising is salesmanship',
        body: [
          'Hopkins has one test for every advertisement: would it help a salesman sell the goods in person? Advertising is salesmanship multiplied, he says. Its only purpose is to make sales, not to entertain or win applause.',
          'This rules out fine writing for its own sake. A salesman who showed off would lose the customer. So write plainly, as you would speak to one person who is considering whether to buy.',
        ],
      },
      {
        title: 'Test everything and count the results',
        body: [
          'The time has come, Hopkins claims, when advertising has reached the status of a science. The reason is that responses can be traced. He used coupons with a code, so that each advertisement reported exactly what it sold.',
          'Almost any question can be settled cheaply by a test campaign in a few towns. Compare one headline with another, one offer with another, and keep the winner. Opinions around a table settle nothing.',
        ],
      },
      {
        title: 'Offer service and be specific',
        body: [
          'People are selfish, Hopkins says. They care nothing about your interests or your profit. The best advertisements ask no one to buy. They offer wanted information and describe a benefit to the reader.',
          'Be specific in doing so. Vague claims such as best in the world roll off like water. A definite statement, a figure or a fact, is usually taken at face value. Platitudes suggest that the writer is careless with the truth.',
        ],
      },
      {
        title: 'The headline chooses the reader',
        body: [
          'Most people glance only at headlines, so the headline has one job: to hail the few who are interested. Address those people and no others. A change of headline, Hopkins found, could multiply returns five or ten times.',
          'Once you have the right reader, tell the full story. Those who are interested will read a great deal. Brevity for its own sake leaves out the arguments that might have closed the sale.',
        ],
      },
      {
        title: 'Let people try it',
        body: [
          'A good product is its own best salesman. Hopkins relied heavily on samples and trials, because a person who has used the thing needs little persuasion. But he made people ask for the sample, so that it went only to those who cared.',
          'He also advises against frivolity. Money is a serious matter to those who earn it, and people do not buy from clowns. Understand the buyer, respect them, and give them reasons.',
        ],
      },
    ],
    takeaway:
      'Treat every message as a salesperson. Talk about the customer\'s benefit in specific terms, choose your audience with the headline, measure what each version actually sells, and let the results decide.',
  },
  {
    id: 'the-gospel-of-wealth',
    title: 'The Gospel of Wealth',
    author: 'Andrew Carnegie',
    year: '1889',
    category: 'business',
    tagline: 'A steel baron explains why the rich should give it all away.',
    about:
      'In this influential essay, one of the richest men in history argues that great fortunes are a public trust. The person who makes one has a duty to distribute it during their lifetime for the common good.',
    whoFor: [
      'Anyone thinking about what money is for',
      'Readers interested in philanthropy and its critics',
      'People planning how to give or what to leave',
    ],
    aboutAuthor:
      'Andrew Carnegie emigrated from Scotland as a boy, built the largest steel company in the world and gave away most of his fortune, funding more than two thousand public libraries.',
    cover: { bg: '#1f3a34', ink: '#f2ecd9', accent: '#e0b354', motif: 'columns' },
    ideas: [
      {
        title: 'Inequality is the price of progress',
        body: [
          'Carnegie begins by accepting the world as he finds it. Industrial competition has produced a wide gap between rich and poor. He regrets the friction it causes, but holds that the system has also made ordinary life far better than it was.',
          'Since the organizing talent that creates great enterprises is rare, large rewards will collect in a few hands. The real question, he says, is what should be done with that wealth once it exists.',
        ],
      },
      {
        title: 'Three ways to dispose of a fortune',
        body: [
          'Surplus wealth can be left to one\'s family, bequeathed for public purposes at death, or administered by its owner during life. Carnegie rejects the first. Great sums left to children usually do them more harm than good.',
          'The second is little better. A man who gives only when he can no longer keep has given nothing, and his wishes are often defeated. Carnegie therefore welcomes heavy taxes on large estates.',
        ],
      },
      {
        title: 'The rich are trustees',
        body: [
          'The third way is the only good one. The person of wealth should live modestly, provide moderately for dependents and regard everything beyond that as a trust fund to be managed for the benefit of the community.',
          'Carnegie believed the skill that made the money fitted its owner to spend it well, better than the public could do for itself. This is the most disputed part of his essay, and critics have called it paternalism.',
        ],
      },
      {
        title: 'Give ladders, not handouts',
        body: [
          'Carnegie is hard on casual charity. Of every thousand dollars given in alms, he guesses, most is spent in ways that encourage the very evils it hopes to cure. The aim should be to help those who will help themselves.',
          'The best gifts place within reach the means by which people can rise: libraries, universities, parks, concert halls, public baths and laboratories. Such things improve the general condition without making anyone dependent.',
        ],
      },
      {
        title: 'To die rich is to die disgraced',
        body: [
          'Carnegie closes with a prediction. The day is coming when a man who dies leaving millions he was free to give away will pass unwept, unhonored and unsung. The man who dies thus rich dies disgraced.',
          'He lived by it, giving away the great bulk of his fortune. Readers may note the tension with how the money was made, including bitter disputes with his own workers. The essay does not settle whether generosity at the end balances hardness along the way.',
        ],
      },
    ],
    takeaway:
      'Wealth beyond your needs is not simply yours. Carnegie urges you to give it purposefully while you are alive, in ways that help people lift themselves, and not to leave the job to your heirs.',
  },
  {
    id: 'letters-from-a-self-made-merchant-to-his-son',
    title: 'Letters from a Self-Made Merchant to His Son',
    author: 'George Horace Lorimer',
    year: '1902',
    category: 'business',
    tagline: 'Blunt, funny advice from a Chicago pork packer to his boy at college.',
    about:
      'John Graham, a fictional self-made tycoon, writes to his son Pierrepont as the young man goes through Harvard and then starts at the bottom of the family firm. The letters mix homespun stories with hard-headed lessons about work, money and people.',
    whoFor: [
      'Graduates starting their first job',
      'Parents wondering what to tell them',
      'Anyone who enjoys business wisdom with a sense of humor',
    ],
    aboutAuthor:
      'George Horace Lorimer was the long-serving editor of The Saturday Evening Post, which he built into the most widely read magazine in America.',
    cover: { bg: '#6d3b1f', ink: '#f6ecd6', accent: '#e7a643', motif: 'hourglass' },
    ideas: [
      {
        title: 'Education is worth having, if you use it',
        body: [
          'Old Graham never went to college and is proud that his son can. Education, he writes, is about the only thing lying around loose in the world, and a fellow can have as much of it as he is willing to haul away.',
          'But college does not make a man. It only gives him a chance. The first thing an education ought to give is character and the second is knowledge. A diploma will not sell a single ham.',
        ],
      },
      {
        title: 'Start at the bottom and be good at it',
        body: [
          'When Pierrepont graduates, he is put to work as a mail clerk at a few dollars a week. His father explains that a man must learn to take orders before he can give them, and must know every part of a business before he can run it.',
          'No job is too small to do well. The boss is always watching for the clerk who gets the dull things right, because that is the one who can be trusted with bigger things.',
        ],
      },
      {
        title: 'Watch your spending and your reputation',
        body: [
          'Graham notices at once when his son\'s expenses rise. A man who cannot manage his own salary, he warns, will not be trusted with the money of the firm. Living beyond your income is borrowing trouble at high interest.',
          'Reputation is the same kind of capital. It takes years to build and a day to lose. Appearances are deceptive, he admits, but people will judge by them, so there is no profit in looking unreliable.',
        ],
      },
      {
        title: 'Say it and stop',
        body: [
          'On talking, Graham has a rule. Have something to say, say it, and stop talking. A man who can state his business in a few plain words gets a hearing. One who rambles has lost the sale before he reaches the point.',
          'He applies it to letters, meetings and arguments. Listening pays better than speaking, and a man learns very little while his own mouth is open.',
        ],
      },
      {
        title: 'Know people, and choose them carefully',
        body: [
          'Business is done with people, so Graham teaches his son to study them: the customer who complains, the salesman who promises too much, the partner whose charm hides a weak character.',
          'He extends the lesson to friends and to marriage. The people you choose will pull you up or down. Pick those with sense and steadiness, he says, and be the kind of person such people would choose in return.',
        ],
      },
    ],
    takeaway:
      'A good start is only a start. Learn the business from the bottom, do small jobs well, live within your pay, protect your name, speak briefly and pay close attention to people.',
  },
  {
    id: 'obvious-adams',
    title: 'Obvious Adams',
    author: 'Robert R. Updegraff',
    year: '1916',
    category: 'business',
    tagline: 'The story of a man who succeeded by seeing what was right in front of everyone.',
    about:
      'First published as a magazine story, Obvious Adams follows a plain, unremarkable young man who rises to the top of an advertising agency. He has no brilliance. He simply looks at the facts and does the obvious thing, which turns out to be very rare.',
    whoFor: [
      'Problem solvers and consultants',
      'Marketers and product people',
      'Anyone who tends to overcomplicate things',
    ],
    aboutAuthor:
      'Robert Rawls Updegraff was an American business writer and adviser to executives at several large corporations.',
    cover: { bg: '#f1ede3', ink: '#1e1e1e', accent: '#e4572e', motif: 'chevrons' },
    ideas: [
      {
        title: 'The obvious is powerful',
        body: [
          'Oliver Adams is a grocery clerk who hears an advertising man give a talk and decides that this is the business for him. He asks the head of the agency for a job, is refused, and asks again the next morning with a reasoned case. He is hired.',
          'Throughout his career, colleagues dismiss his proposals as too simple. Then they work. The nickname Obvious sticks, first as a joke and then as a mark of respect.',
        ],
      },
      {
        title: 'Go and look for yourself',
        body: [
          'Adams never works from assumptions. Given a product, he goes to the factory, the shop and the kitchen. He talks to the people who make it, sell it and buy it until he knows the facts at first hand.',
          'In one case a chain of hat shops is losing money in a certain city. Others suggest clever campaigns. Adams walks the streets and finds that the store is on a side of the road where people do not pass. The answer is to move it.',
        ],
      },
      {
        title: 'Think it through before being clever',
        body: [
          'The story stresses that obvious answers are not found by flashes of insight. Adams sits with a problem, writes out what he knows and reasons his way from the facts to a conclusion. It is slow and unglamorous.',
          'His employer observes that most people will do anything to avoid the labor of thinking. They leap to an ingenious idea because that is easier than analysis. Adams does the analysis.',
        ],
      },
      {
        title: 'Tell people the plain facts',
        body: [
          'Asked to advertise a fine writing paper, Adams learns how it is made: the pure water, the selected rags, the careful drying. He proposes simply telling customers these things.',
          'The manufacturers object that every good paper is made this way. Adams replies that the public does not know it. Whoever tells the story first owns it. What is ordinary to the maker is news to the buyer.',
        ],
      },
      {
        title: 'Why the obvious is so often missed',
        body: [
          'The obvious is overlooked, the story suggests, because it is so commonplace. It has no drama and flatters no one. A committee would always rather approve something that sounds ingenious.',
          'It also takes courage to propose a simple thing and effort to prove it right. Adams succeeds because he is willing to do both. The lesson is not that he is special, but that the method is open to anyone.',
        ],
      },
    ],
    takeaway:
      'Before reaching for a clever solution, get the facts yourself, think them through and ask what the simple answer is. It is usually sitting in plain sight, and few people take the trouble to see it.',
  },
  {
    id: 'the-go-getter',
    title: 'The Go-Getter',
    author: 'Peter B. Kyne',
    year: '1921',
    category: 'business',
    tagline: 'A short story about a blue vase, and the employee every boss is looking for.',
    about:
      'In this business parable, a wounded war veteran talks his way into a job at a lumber company and is then given an apparently impossible errand. How he handles it has made the book a favorite gift from managers to new hires for a century.',
    whoFor: [
      'Salespeople and anyone early in a career',
      'Leaders deciding whom to promote',
      'Readers who want a motivational classic in twenty minutes',
    ],
    aboutAuthor:
      'Peter B. Kyne was an American novelist from San Francisco, best known for his stories about the shipping and lumber magnate Cappy Ricks.',
    cover: { bg: '#1d4e89', ink: '#f4eede', accent: '#7fc8f8', motif: 'bolt' },
    ideas: [
      {
        title: 'Do not take no for an answer',
        body: [
          'Bill Peck comes home from the war with part of one arm gone and a limp. He asks for work at the Ricks lumber company and is turned down by two managers. So he goes straight to the founder, Cappy Ricks.',
          'He does not plead. He tells the old man that he can sell and asks only for a chance to prove it. Cappy is charmed by the nerve and orders his reluctant managers to take him on.',
        ],
      },
      {
        title: 'Sell the hard thing',
        body: [
          'The sales manager gives Peck the worst assignment available: a foul-smelling grade of lumber that nobody wants, in territory nobody has cracked. It is meant to make him quit.',
          'Peck sells it by the carload and comes back for more. He makes no complaint about the handicap. His results do the arguing, and Cappy starts to wonder whether this is the man for a much bigger post.',
        ],
      },
      {
        title: 'The blue vase',
        body: [
          'Cappy sets a test. On a Sunday afternoon he asks Peck to buy a particular blue vase from a certain shop and bring it to his train that evening. Then he arranges for everything to go wrong.',
          'The address is wrong. The shop is shut. The owner has a name with a dozen spellings in the telephone book. The price is absurd and Peck has no cash. Each obstacle has been planted on purpose.',
        ],
      },
      {
        title: 'It shall be done',
        body: [
          'Peck finds the shop, tracks down the owner through hours of telephone calls, raises the money by pawning a ring, misses the train, and finally hires a pilot to fly him ahead so he can flag it down in the night.',
          'He hands over the vase without a word of complaint. Asked why he did not give up, he says his old commander had a motto. When given an order, the only answer was: it shall be done.',
        ],
      },
      {
        title: 'Test people, then reward them',
        body: [
          'Cappy explains that the errand was his standard trial for anyone being considered for a top job. Most candidates come back with a reasonable excuse. Peck is one of the very few who came back with the vase.',
          'He is given the management of the Shanghai office. The story is as much about the leader as the follower. Find the person who finishes what they start, and then trust them with something that matters.',
        ],
      },
    ],
    takeaway:
      'Reasonable excuses are common. People who accept responsibility for a result and see it through whatever happens are rare, and they are the ones who get the big jobs.',
  },
]
