import type { Book } from '../types'

export const world: Book[] = [
  {
    id: 'on-the-origin-of-species',
    title: 'On the Origin of Species',
    author: 'Charles Darwin',
    year: '1859',
    category: 'nature',
    tagline: 'One long argument that changed how we see every living thing.',
    about:
      'After more than twenty years of gathering evidence, Darwin laid out what he called "one long argument": that species are not fixed, that all living things descend from common ancestors, and that the main mechanism of change is natural selection.',
    whoFor: [
      'Anyone who wants to understand evolution from its source',
      'Readers who enjoy watching a careful argument being built',
      'People curious about how a single idea can reorganize a science',
    ],
    aboutAuthor:
      'Charles Darwin was an English naturalist whose five-year voyage aboard HMS Beagle supplied the observations behind his theory. He spent the rest of his life at Down House in Kent, studying everything from barnacles to earthworms.',
    cover: { bg: '#efe6d2', ink: '#2a2a1f', accent: '#4e7a3a', motif: 'tree' },
    ideas: [
      {
        title: 'Breeders show that species can change',
        body: [
          'Darwin starts not in the jungle but in the farmyard. Pigeon fanciers have produced pouters, fantails, carriers and tumblers, birds so different in beak, skeleton and plumage that a naturalist who found them in the wild would class them as separate species. Yet all of them descend from the common rock pigeon.',
          'Breeders achieve this through selection. They notice slight differences between individuals, breed from the ones they prefer and repeat the process over many generations. The small differences add up. If people can reshape an animal this much in a few centuries, Darwin asks, what might nature accomplish over millions of years?',
        ],
      },
      {
        title: 'Life is a struggle for existence',
        body: [
          'Borrowing an insight from the economist Thomas Malthus, Darwin points out that every species produces far more offspring than can possibly survive. Even the elephant, the slowest breeder known, would overrun the earth with its descendants within a few thousand years if every calf lived to reproduce.',
          'Since that never happens, there must be a constant struggle: for food, for space, for mates, against predators and against the climate. Darwin uses the word in a broad sense. A plant at the edge of a desert struggles against drought. And living things are bound together in webs of dependence, so that the number of cats in a village can affect the abundance of its clover, by way of mice and bees.',
        ],
      },
      {
        title: 'Natural selection keeps what works',
        body: [
          'Individuals in a species vary, and much of that variation is inherited. In the struggle for existence, any variation that helps an individual survive and reproduce, however slightly, will tend to be passed on. Harmful variations will tend to disappear. Darwin calls this preservation of favorable differences natural selection.',
          'It works without foresight or purpose. Darwin describes it as scrutinizing every variation, daily and hourly, throughout the world, rejecting the bad and adding up the good. The steps are tiny, but over immense stretches of time they accumulate into wings, eyes and instincts. He adds sexual selection: traits such as antlers or bright plumage persist because they help win mates.',
        ],
      },
      {
        title: 'All living things form one branching tree',
        body: [
          "As varieties within a species adapt to different ways of making a living, they diverge. Given enough time, varieties become distinct species, which divide again, while many lines die out. Darwin's image is a great tree: living species are the green buds, and the branches beneath them are their extinct ancestors.",
          "Common descent explains facts that otherwise make little sense. The human hand, the bat's wing, the porpoise's flipper and the horse's leg are all built from the same arrangement of bones. Embryos of very different animals look alike. Some creatures carry useless leftover organs. And island species resemble those of the nearest mainland while differing in detail, just as Darwin saw in the Galápagos.",
        ],
      },
      {
        title: 'Darwin confronted the hardest objections himself',
        body: [
          'Darwin devotes whole chapters to the difficulties of his own theory. If species change gradually, where are the intermediate forms? His answer is that the fossil record resembles a history book from which most pages have been torn out. Fossils form only in rare conditions, and only a sliver of the earth had been examined.',
          'How could something as intricate as the eye arise in small steps? Darwin admits it sounds absurd at first, then shows that living animals display every gradation from a simple light-sensitive patch to a full eye, each one useful to its owner. He did not know how heredity worked; genetics later filled that gap and strengthened his case. The book ends in wonder: from so simple a beginning, endless forms most beautiful have evolved.',
        ],
      },
    ],
    takeaway:
      "Species are not fixed. Because organisms vary, inherit their traits and compete to survive, useful differences accumulate over vast time, and all of life's diversity branches from common ancestors.",
  },
  {
    id: 'walden',
    title: 'Walden',
    author: 'Henry David Thoreau',
    year: '1854',
    category: 'nature',
    tagline: 'Two years in a cabin, and a challenge: how much do you really need?',
    about:
      'In 1845 Thoreau built a small cabin beside Walden Pond in Massachusetts and lived there for two years, two months and two days. Walden is his account of that experiment in living simply — part memoir, part nature journal, part provocation.',
    whoFor: [
      'People who feel owned by their possessions or their schedule',
      'Minimalists, walkers and nature lovers',
      'Anyone weighing a less conventional way to live',
    ],
    aboutAuthor:
      'Henry David Thoreau was an American essayist, naturalist and surveyor, and a friend of Emerson, on whose land the cabin stood. His essay Civil Disobedience later influenced Gandhi and Martin Luther King Jr.',
    cover: { bg: '#2f5d62', ink: '#f1ebdd', accent: '#f2b880', motif: 'horizon' },
    ideas: [
      {
        title: 'Most people lead lives of quiet desperation',
        body: [
          'Looking at his neighbors in Concord, Thoreau sees people crushed by their own property. They inherit farms, houses and cattle, and spend their lives pushing these burdens down the road ahead of them. They work so that they can pay for things they have no time to enjoy.',
          "The laboring man, he writes, has no leisure for anything but being a machine. People have become the tools of their tools. Worst of all, they assume there is no alternative. Thoreau's experiment at the pond begins as a test of that assumption: how much of this toil is truly necessary?",
        ],
      },
      {
        title: 'The cost of a thing is the life you exchange for it',
        body: [
          'Thoreau proposes a different way of counting. The real price of anything is the amount of life you have to hand over for it, now or in the long run. A larger house is not paid for in dollars but in years of labor, and by that measure many comforts are far too expensive.',
          'He strips his needs down to food, shelter, clothing and fuel. He builds his cabin himself for about twenty-eight dollars, grows beans and keeps exact accounts. He finds that working about six weeks a year covers his living costs, leaving the rest of his time for reading, writing and walking. A person is rich, he concludes, in proportion to the number of things they can afford to leave alone.',
        ],
      },
      {
        title: 'Live deliberately',
        body: [
          'Thoreau says he went to the woods because he wished to live deliberately, to face only the essential facts of life and see whether he could learn what it had to teach. He did not want to reach the moment of death and discover that he had never lived.',
          'His prescription is simplicity. Our life is frittered away by detail, he writes. Keep your affairs to two or three, not a hundred, and keep your accounts on your thumbnail. He is suspicious of the busy machinery of his age, the news, the post office and the railroad, which promise to save time and end up running our lives. We do not ride on the railroad, he says. It rides on us.',
        ],
      },
      {
        title: 'Solitude and nature are good company',
        body: [
          'Thoreau insists he was rarely lonely at the pond. He never found a companion as companionable as solitude, and points out that we are often lonelier in a crowd than alone in a room. He spends his days watching closely: the changing color of the water, the ice breaking up in spring, a loon that outwits him, a war between red and black ants.',
          'Morning is his favorite hour, the time when he feels most awake, and to be awake, he says, is to be alive. He was no hermit, though. His cabin held three chairs, one for solitude, two for friendship and three for society. The village was a short walk away, he went there often, and he welcomed visitors. The experiment was about attention, not isolation.',
        ],
      },
      {
        title: 'Advance confidently in the direction of your dreams',
        body: [
          'After two years Thoreau left the woods for as good a reason as he went there. He had other lives to live. He had also noticed that within a week his feet had worn a path from his door to the pond, a small sign of how quickly we fall into ruts, even in freedom.',
          "What he took away was this. If you advance confidently in the direction of your dreams, and work to live the life you have imagined, you will meet with a success you did not expect in ordinary hours. If you have built castles in the air, your work need not be lost. Now put the foundations under them. And if you don't keep pace with your companions, perhaps you hear a different drummer.",
        ],
      },
    ],
    takeaway:
      'Before you chase more, work out what your wants actually cost you in life. Simplify until you have room to pay attention, and use that room to live on purpose.',
  },
  {
    id: 'a-room-of-ones-own',
    title: "A Room of One's Own",
    author: 'Virginia Woolf',
    year: '1929',
    category: 'society',
    tagline: 'Why genius needs money, a door that locks and freedom from interruption.',
    about:
      "Based on two lectures given at women's colleges in Cambridge, Woolf's essay asks why so few women had written great literature. Her answer is practical rather than mystical: creative work requires material conditions that women had been denied for centuries.",
    whoFor: [
      'Writers and artists of any kind',
      'Readers interested in the history of women and work',
      'Anyone who wants to understand what creativity actually requires',
    ],
    aboutAuthor:
      'Virginia Woolf was an English novelist and essayist, the author of Mrs Dalloway and To the Lighthouse, and a central figure of the Bloomsbury Group. With her husband Leonard she ran the Hogarth Press.',
    cover: { bg: '#c8553d', ink: '#fbf1e3', accent: '#ffd9a0', motif: 'door' },
    ideas: [
      {
        title: 'Creative work depends on material things',
        body: [
          "Woolf states her thesis at the start: a woman must have money and a room of her own if she is to write fiction. She illustrates it with two meals. At a wealthy men's college, lunch is sole, partridge and wine, and the conversation glows. At a women's college that evening, dinner is plain soup, beef and prunes, and the talk stays flat.",
          "One cannot think well, love well or sleep well, she observes, if one has not dined well. The women's college was poor because its founders' mothers and grandmothers had not been allowed to earn money, or to keep what they earned. Intellectual freedom, she concludes, depends on material things, and women had been poor for centuries.",
        ],
      },
      {
        title: "Shakespeare's sister never had a chance",
        body: [
          "To test the claim that no woman could have written Shakespeare's plays, Woolf imagines he had a sister, Judith, with exactly his gifts. Judith is not sent to school. When she picks up a book she is told to mend the stockings. In her teens she is promised to a neighbor's son against her will.",
          "She runs away to London and stands at the stage door, where the men laugh at her. No one will train her. She ends up pregnant by an actor-manager, and kills herself. Woolf's point is that genius like Shakespeare's does not appear among people denied education, privacy and independence, or if it does, it never reaches paper. Anonymous, she guesses, was often a woman.",
        ],
      },
      {
        title: 'Women have served as flattering mirrors',
        body: [
          "In the British Museum, Woolf finds shelf after shelf of books about women written by men, many of them oddly angry. She decides that the insistence on women's inferiority has little to do with women. For centuries women have served as looking-glasses with the magic power of reflecting men at twice their natural size.",
          'Take the mirror away and the confidence needed to rule, conquer and legislate begins to shrink. What released Woolf from bitterness about this was a legacy from an aunt: five hundred pounds a year for life. It mattered more to her than the vote. With a secure income she no longer needed to flatter any man or to hate one, and she could simply look at things as they are.',
        ],
      },
      {
        title: 'Writers need a tradition to stand on',
        body: [
          "Woolf walks along the bookshelf of women's writing. She honors Aphra Behn, who in the seventeenth century proved a woman could earn her living by her pen, and so won for all women the right to speak their minds. The great nineteenth-century novelists wrote in shared sitting rooms, amid constant interruption. Jane Austen hid her pages when someone came in.",
          "Masterpieces, Woolf argues, are not solitary births. They come from many years of thinking in common. Women writers had almost no tradition behind them, and even the standard sentence had been shaped by men for men's purposes. She notes how anger at their confinement sometimes bent their work, and how remarkable it is that Austen wrote without bitterness or fear.",
        ],
      },
      {
        title: 'The best writing comes from an undivided mind',
        body: [
          "Borrowing an idea from Coleridge, Woolf suggests that a great mind is androgynous, drawing freely on qualities associated with both sexes. Such a mind is incandescent. Like Shakespeare's, it has burned away grievance and self-consciousness, so that the work comes out whole. It is fatal for anyone who writes, she says, to think of their sex.",
          "That freedom, again, needs practical support. So she ends with a charge to her audience of young women: earn money, find a room of your own, and write books of every kind, on every subject. Shakespeare's sister, she says, lives on in them. Given another century, an income and rooms of their own, the poet who died young will at last be born.",
        ],
      },
    ],
    takeaway:
      'Talent alone is not enough. Creative work requires income, privacy, time and a tradition to build on, and whoever has been denied those has been denied a voice. Secure the conditions, then do the work.',
  },
  {
    id: 'on-liberty',
    title: 'On Liberty',
    author: 'John Stuart Mill',
    year: '1859',
    category: 'society',
    tagline: "Where should society's power over the individual end?",
    about:
      "Mill's short book defends a single principle: that the only legitimate reason to restrict an adult's freedom is to prevent harm to others. From that principle he builds a powerful case for free speech, individuality and limits on both government and public opinion.",
    whoFor: [
      'Anyone thinking about free speech and its limits',
      'Readers who want the classic argument for individual freedom',
      'People who feel the pull of conformity and want to resist it',
    ],
    aboutAuthor:
      "John Stuart Mill was an English philosopher, economist and Member of Parliament, and an early advocate of women's suffrage. He credited his wife, Harriet Taylor Mill, as a partner in the ideas of On Liberty.",
    cover: { bg: '#f1ede4', ink: '#14213d', accent: '#2a6fdb', motif: 'gap' },
    ideas: [
      {
        title: 'Beware the tyranny of the majority',
        body: [
          'Liberty once meant protection against tyrannical kings. With democracy, many assumed the problem was solved, since the people would hardly oppress themselves. Mill disagrees. The people who hold power are never quite the same as the people it is used on, and a majority can crush a minority as thoroughly as any monarch.',
          'The danger is not limited to law. Society can enforce its own ideas through opinion, custom and disapproval. Mill considers this social tyranny more formidable than many kinds of political oppression, because it leaves fewer ways to escape and reaches into the details of daily life. A free society needs protection against the pressure of prevailing opinion as well as against the state.',
        ],
      },
      {
        title: 'The harm principle',
        body: [
          'Mill offers one very simple principle to mark the boundary. The only purpose for which power can rightfully be used over any member of a civilized community, against their will, is to prevent harm to others. Their own good, whether physical or moral, is not sufficient reason.',
          'You may argue with a person, plead with them or try to persuade them that they are making a mistake. You may not compel them. Over their own body and mind, the individual is sovereign. Mill applies the principle to adults in full possession of their faculties, not to children, and he is clear that once an action injures other people, society has every right to step in.',
        ],
      },
      {
        title: 'Never silence an opinion',
        body: [
          'Mill gives four reasons for complete freedom of thought and discussion. The silenced opinion may be true, and to deny that is to assume we cannot be wrong. Even if it is mistaken, it may contain a part of the truth that the accepted view lacks.',
          'Third, even when the accepted view is entirely true, unless it is vigorously contested people will hold it as a prejudice without grasping its grounds. And fourth, its very meaning will fade, until it becomes a dead dogma rather than a living truth. Someone who knows only their own side of a case, Mill says, knows little even of that. If all humanity but one person held a single opinion, it would have no more right to silence that person than they would have to silence humanity.',
        ],
      },
      {
        title: 'Individuality is essential to well-being',
        body: [
          'Freedom is not only for opinions. People should be free to act on them and to carry out their own experiments in living, at their own risk. Human nature, Mill writes, is not a machine to be built from a model. It is a tree that needs to grow on every side, according to the inner forces that make it a living thing.',
          'A person who lets the world choose their plan of life for them needs no faculty other than imitation. Someone who chooses for themselves must observe, reason, judge and hold to a decision, and so becomes more fully human. The despotism of custom is the standing obstacle to progress. That is why eccentricity is valuable, and why genius can breathe only in an atmosphere of freedom.',
        ],
      },
      {
        title: "Where society's authority begins",
        body: [
          'Mill ends by drawing the practical line. For conduct that affects only yourself, others may advise, warn or avoid you, but they may not punish you. For conduct that damages the interests of other people, you are answerable. No one should be punished simply for being drunk, but a soldier or police officer who is drunk on duty should be.',
          'He applies the same thinking to government. Even when the state could do something well, there are reasons to leave it to individuals and voluntary groups: doing things for themselves educates people, and concentrating talent in one bureaucracy is dangerous. He wants education required for every child, but not delivered solely by the state. A state that dwarfs its citizens to make them docile, he warns, will find that with small people nothing great can be accomplished.',
        ],
      },
    ],
    takeaway:
      'A society flourishes when individuals are free to think, speak and live as they choose, so long as they do not harm others. The pressure to conform, whether it comes from governments or from neighbors, is the thing to guard against.',
  },
]
