import type { Book } from '../types'

// Summaries of novels give away the plot, endings included.
export const fiction: Book[] = [
  {
    id: 'crime-and-punishment',
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    year: '1866',
    category: 'fiction',
    tagline: 'A student commits murder to prove a theory, and discovers his conscience.',
    about:
      'In the slums of Saint Petersburg, a poor former student convinces himself that an extraordinary person has the right to kill for a higher purpose. The novel follows what the deed does to his mind. It is a detective story in which we know the criminal from the start.',
    whoFor: [
      'Readers who want the core of a great novel in a few minutes',
      'Anyone interested in guilt, conscience and rationalization',
      'People drawn to psychological fiction',
    ],
    aboutAuthor:
      'Fyodor Dostoevsky was a Russian novelist who survived a mock execution and four years in a Siberian prison camp. His other major works include The Idiot and The Brothers Karamazov.',
    cover: { bg: '#2a1f1f', ink: '#f2e9d8', accent: '#c0392b', motif: 'door' },
    ideas: [
      {
        title: 'A theory that permits murder',
        body: [
          'Raskolnikov is proud, clever and desperately poor. He has written an article arguing that humanity divides into ordinary people, who must obey, and extraordinary ones, like Napoleon, who may step over the law for the sake of a great idea.',
          'He decides to test whether he is one of the second kind. An old pawnbroker cheats the poor and hoards her money. He reasons that killing her and using her wealth for good would be simple arithmetic.',
        ],
      },
      {
        title: 'The deed goes wrong at once',
        body: [
          'He kills the pawnbroker with an axe. Then her gentle half-sister walks in, and he kills her too. That second death was in no theory.',
          'He takes almost nothing, hides it under a stone and never touches it. Within hours he collapses into fever and delirium. The plan that looked so clear on paper has left him unable to think.',
        ],
      },
      {
        title: 'The punishment begins inside',
        body: [
          'No one suspects him at first. His suffering comes from himself. He feels cut off from everyone he loves, as if with scissors, and cannot bear his mother\'s affection or his friend\'s help.',
          'The examining magistrate, Porfiry, has no proof and does not need any. He talks to Raskolnikov about psychology and waits, certain that a man in this state will circle closer and closer to confession, like a moth to a candle.',
        ],
      },
      {
        title: 'Sonya',
        body: [
          'Raskolnikov is drawn to Sonya, a meek young woman who has sold herself on the streets to feed her stepmother\'s children. He tells himself that she, too, has crossed a line.',
          'She has not lost her faith or her capacity for love. She reads him the story of the raising of Lazarus, and when he confesses to her she weeps for him. She tells him to go to the crossroads, bow down and say aloud what he has done.',
        ],
      },
      {
        title: 'Confession and renewal',
        body: [
          'A darker character, who has lived without conscience, shows where that road ends and shoots himself. Raskolnikov gives himself up and is sentenced to eight years in Siberia. Sonya follows him.',
          'Even in prison he at first regrets only his weakness. Then he dreams of a plague in which every person believes they alone possess the truth, and the world tears itself apart. Something gives way, and through her love a new life begins.',
        ],
      },
    ],
    takeaway:
      'Reason cut loose from compassion can justify anything. Dostoevsky suggests that conscience is not an argument we can win, and that recovery starts with confession and with accepting love.',
  },
  {
    id: 'anna-karenina',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    year: '1878',
    category: 'fiction',
    tagline: 'Two searches for happiness: one through passion, one through an ordinary life.',
    about:
      'Often called the greatest novel ever written, Anna Karenina sets the tragic love affair of a society woman against the slow, awkward search of a country landowner for meaning. Tolstoy lets the two stories comment on each other.',
    whoFor: [
      'Readers who want the lessons of a long classic in brief',
      'Anyone thinking about love, marriage and what makes a life meaningful',
      'People interested in how society judges men and women differently',
    ],
    aboutAuthor:
      'Count Leo Tolstoy was a Russian novelist and moral thinker, the author of War and Peace. In later life he gave up his wealth and preached nonviolence.',
    cover: { bg: '#4a1d2f', ink: '#f6ebdb', accent: '#e6b9a1', motif: 'waves' },
    ideas: [
      {
        title: 'Happy and unhappy families',
        body: [
          'The novel opens with one of the most famous sentences in literature. All happy families are alike, and each unhappy family is unhappy in its own way.',
          'Anna arrives in Moscow to patch up her brother\'s marriage after his affair. At the railway station she meets a dashing cavalry officer, Count Vronsky. Moments later a workman is crushed by a train, and she calls it an evil omen.',
        ],
      },
      {
        title: 'Passion',
        body: [
          'Anna is married to Karenin, a senior official twenty years older, correct and cold. She falls in love with Vronsky and cannot hide it. Unlike other women of her circle, she will not carry on a discreet deception.',
          'She tells her husband, bears Vronsky a daughter and finally leaves. The price is her young son, whom Karenin keeps from her. Tolstoy makes us feel both the force of her love and what it destroys.',
        ],
      },
      {
        title: 'Society forgives him, not her',
        body: [
          'Vronsky continues to move freely in society. Anna is shut out. When she dares to appear at the opera, a woman in the next box makes a scene and leaves.',
          'Isolated, with nothing to do but depend on one man\'s love, she becomes jealous and suspicious, and takes morphine to sleep. After a quarrel she goes to a station and throws herself under a train.',
        ],
      },
      {
        title: 'Levin and Kitty',
        body: [
          'Running alongside is the story of Levin, a shy, serious landowner. He proposes to young Kitty and is refused, because she is dazzled by Vronsky. Later, humbled, she accepts him.',
          'Their marriage is shown without romance: petty quarrels, jealousy, the terror of childbirth, the death of his brother. Levin is happiest working. One day he mows a meadow with his peasants and loses himself in the rhythm of the scythe.',
        ],
      },
      {
        title: 'What to live for',
        body: [
          'Levin has everything and is tormented by the thought that life has no meaning. He hides a rope so that he will not hang himself.',
          'A chance remark from a peasant, about a man who lives for his soul and remembers God, breaks over him like light. He realizes that he has always known what is good. He will still lose his temper, he says, but his life now has a meaning he can put into it.',
        ],
      },
    ],
    takeaway:
      'Passion that cuts a person off from every other tie tends to consume itself. Tolstoy sets against it a quieter kind of love, built from work, family and daily goodness.',
  },
  {
    id: 'les-miserables',
    title: 'Les Misérables',
    author: 'Victor Hugo',
    year: '1862',
    category: 'fiction',
    tagline: 'An act of mercy turns a convict into a good man, and the law cannot understand it.',
    about:
      'Hugo\'s vast novel follows Jean Valjean, sent to the galleys for stealing bread, through decades of French history. At its heart is a simple contest between mercy and rigid justice, and an argument that poverty is a crime society commits.',
    whoFor: [
      'Readers who love the musical or film and want the story behind it',
      'Anyone interested in redemption and social justice',
      'People who want a very long book in a very short time',
    ],
    aboutAuthor:
      'Victor Hugo was a French poet, novelist and politician. He wrote much of the novel during nineteen years of exile for opposing Napoleon the Third.',
    cover: { bg: '#1f2d3d', ink: '#f4ecda', accent: '#d9b44a', motif: 'columns' },
    ideas: [
      {
        title: 'The bishop\'s candlesticks',
        body: [
          'Jean Valjean has served nineteen years: five for stealing a loaf to feed his sister\'s children and the rest for trying to escape. Released, he is turned away from every inn because of his convict\'s passport.',
          'A bishop takes him in. Valjean steals his silver in the night and is caught. The bishop tells the police that the silver was a gift, and hands him two candlesticks as well. With this, he says, I have bought your soul for God.',
        ],
      },
      {
        title: 'A new man and a promise',
        body: [
          'Years later Valjean, under another name, is a wealthy factory owner and mayor. One of his workers, Fantine, is dismissed without his knowledge. To pay for the care of her daughter she sells her hair, her teeth and then herself.',
          'Valjean finds her dying and promises to rescue the child, Cosette, who is being worked like a servant by a pair of grasping innkeepers.',
        ],
      },
      {
        title: 'Conscience over safety',
        body: [
          'Just then Valjean learns that another man has been arrested as Jean Valjean and will be sent to the galleys for life. He need only stay silent to be safe forever.',
          'After a night of agony he walks into the courtroom and reveals who he is. He escapes, fetches Cosette and raises her as his daughter in hiding in Paris. He has kept the bishop\'s bargain at the cost of everything he built.',
        ],
      },
      {
        title: 'Javert',
        body: [
          'Through it all he is hunted by Inspector Javert, who was born in a prison and believes that the law is the whole of morality. A convict is a convict.',
          'During an uprising in 1832, Javert falls into the rebels\' hands and Valjean is given the job of executing him. He lets him go. Javert cannot fit this into his world. Unable either to arrest his rescuer or to let him escape, he drowns himself.',
        ],
      },
      {
        title: 'Love and the wretched',
        body: [
          'Valjean carries the wounded student whom Cosette loves through the sewers of Paris to safety, then withdraws so that his past will not shadow her marriage. He dies with the two of them beside him and the candlesticks lit.',
          'Hugo wrote in his preface that so long as ignorance and misery remain on earth, books like this cannot be useless. The wretched of the title are not born. They are made.',
        ],
      },
    ],
    takeaway:
      'One undeserved kindness can change a life, and rules without mercy can break even the person who enforces them. Hugo asks us to see the poor and the punished as people society has failed.',
  },
  {
    id: 'frankenstein',
    title: 'Frankenstein',
    author: 'Mary Shelley',
    year: '1818',
    category: 'fiction',
    tagline: 'A scientist makes a living being, abandons it, and learns what a creator owes.',
    about:
      'Conceived by an eighteen-year-old during a rainy summer on Lake Geneva, Frankenstein is often called the first science fiction novel. Its subject is not a monster so much as responsibility: what follows when ambition creates something and then refuses to care for it.',
    whoFor: [
      'Anyone thinking about the ethics of science and technology',
      'Readers who know the movie monster and not the book',
      'People interested in how rejection shapes character',
    ],
    aboutAuthor:
      'Mary Shelley was an English novelist, the daughter of the philosophers Mary Wollstonecraft and William Godwin and the wife of the poet Percy Bysshe Shelley.',
    cover: { bg: '#1b2b2a', ink: '#eef0e2', accent: '#9bd65c', motif: 'bolt' },
    ideas: [
      {
        title: 'A ghost story contest',
        body: [
          'In 1816 Mary, the poet Shelley and Lord Byron were kept indoors by bad weather, and Byron proposed that each write a ghost story. After days of nothing, she had a waking dream of a student kneeling beside the thing he had put together.',
          'The novel is told by an Arctic explorer who rescues a dying man from the ice. Note that Frankenstein is the name of the creator. The creature is never given a name at all.',
        ],
      },
      {
        title: 'Ambition without foresight',
        body: [
          'Victor Frankenstein, a brilliant student, discovers how to give life to dead matter. For two years he works in secret, neglecting family and health, assembling a body eight feet tall.',
          'On the night it opens its eyes he is filled with horror and runs from the room. He never asks what he will do after he succeeds. That failure to think one step ahead is the cause of everything that follows.',
        ],
      },
      {
        title: 'The creature was not born a monster',
        body: [
          'Left alone, the creature teaches himself to survive. Hidden beside a cottage, he learns to speak and read by watching a poor family, and secretly gathers wood for them. He is gentle and longs for company.',
          'When he finally shows himself, they beat him and flee. He rescues a drowning girl and is shot for it. I was benevolent and good, he tells his maker, and misery made me a fiend.',
        ],
      },
      {
        title: 'What a creator owes',
        body: [
          'The creature asks Frankenstein for one thing: a companion like himself, with whom he will go away forever. Frankenstein begins the work and then, in disgust and fear, tears it apart.',
          'The revenge is terrible. The creature kills Frankenstein\'s little brother, his closest friend and, on his wedding night, his bride. An innocent servant is hanged for the first murder while Frankenstein, who knows the truth, says nothing.',
        ],
      },
      {
        title: 'The warning',
        body: [
          'Frankenstein pursues the creature into the Arctic and dies on the explorer\'s ship. He urges the explorer to seek happiness in tranquillity and avoid ambition. The explorer turns his ship back.',
          'The creature appears, grieves over the body and goes off to die. Shelley leaves the reader to judge who was the real monster, and to remember that making something is only the beginning of the obligation.',
        ],
      },
    ],
    takeaway:
      'The danger is not knowledge itself. It is creating something powerful and then walking away from it. Shelley\'s question, about what we owe to what we make, grows more pressing with every new technology.',
  },
  {
    id: 'moby-dick',
    title: 'Moby-Dick',
    author: 'Herman Melville',
    year: '1851',
    category: 'fiction',
    tagline: 'A captain\'s obsession with a white whale drags a whole ship to destruction.',
    about:
      'Part adventure story, part encyclopedia of whaling, part meditation on fate, Moby-Dick follows the last voyage of the Pequod under Captain Ahab. It failed on publication and is now regarded as a summit of American literature.',
    whoFor: [
      'Readers who want the essence of a famously long novel',
      'Anyone interested in obsession and leadership gone wrong',
      'People who like stories of the sea',
    ],
    aboutAuthor:
      'Herman Melville was an American novelist who had himself sailed on a whaling ship. He died in obscurity in 1891, and his reputation was revived in the 1920s.',
    cover: { bg: '#0f2a3d', ink: '#f3f1e7', accent: '#f3f1e7', motif: 'waves' },
    ideas: [
      {
        title: 'Call me Ishmael',
        body: [
          'The narrator is a restless young man who goes to sea whenever he feels grim. At an inn he is made to share a bed with Queequeg, a tattooed harpooner from the South Seas, and is terrified.',
          'By morning they are friends. Better to sleep with a sober cannibal than a drunken Christian, Ishmael decides. Their bond across every difference of race and religion is the warm heart of a dark book.',
        ],
      },
      {
        title: 'Ahab\'s oath',
        body: [
          'For days the captain stays in his cabin. When he appears he has a leg made of whalebone. A great white whale called Moby Dick took the real one, and he has sworn to hunt it round the world.',
          'He nails a gold coin to the mast for the first man to sight it and whips the crew into a frenzy. Only the first mate, Starbuck, objects. Vengeance on a dumb brute, he says, seems blasphemous.',
        ],
      },
      {
        title: 'What the whale means',
        body: [
          'To Ahab the whale is not an animal. It is the mask of everything malicious and unknowable in the universe, and he must strike through the mask. To Starbuck it is oil for the lamps at home.',
          'Melville refuses to settle the question. He fills chapters with the anatomy, history and whiteness of whales, and the more facts he piles up, the more the creature escapes. Nature, the book suggests, is simply indifferent.',
        ],
      },
      {
        title: 'A crew captured by one will',
        body: [
          'The Pequod carries men of every nation and color, a floating picture of the world. Ahab bends them all to his private purpose through sheer force of personality.',
          'Starbuck sees the danger clearly, and at one point stands outside the cabin with a loaded musket. He cannot do it. Ahab ignores every warning, and even refuses to help another captain search for his lost son.',
        ],
      },
      {
        title: 'The chase',
        body: [
          'They find the whale and pursue it for three days. On the third it turns and rams the ship. Ahab hurls his harpoon, the line loops round his neck and he is dragged under.',
          'The Pequod sinks with all hands but one. Ishmael floats on a coffin that Queequeg had built for himself, and is picked up by the ship that was searching for its missing children.',
        ],
      },
    ],
    takeaway:
      'An obsession can look like greatness until it is too late. Melville shows how one person\'s grievance, joined to authority and charisma, can carry everyone else down with it.',
  },
  {
    id: 'the-great-gatsby',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: '1925',
    category: 'fiction',
    tagline: 'A self-made millionaire reaches for a lost love, and for a dream that was already behind him.',
    about:
      'Set on Long Island in the summer of 1922, this short novel tells of Jay Gatsby, his mysterious fortune and his devotion to Daisy Buchanan. It is the defining portrait of the Jazz Age and a lasting comment on the American dream.',
    whoFor: [
      'Readers who want to revisit a school classic',
      'Anyone interested in ambition, class and reinvention',
      'People who suspect that getting what you want is not the same as happiness',
    ],
    aboutAuthor:
      'Francis Scott Fitzgerald was an American novelist who gave the Jazz Age its name. The book sold poorly in his lifetime, and he died in 1940 believing himself a failure.',
    cover: { bg: '#0d2b45', ink: '#f6edd3', accent: '#3fbf7f', motif: 'rings' },
    ideas: [
      {
        title: 'The neighbor with the parties',
        body: [
          'Nick Carraway, a young man from the Midwest, rents a small house next to a mansion where a man named Gatsby gives enormous parties. Hundreds come, and almost none have met their host.',
          'Across the bay live Nick\'s cousin Daisy and her husband Tom Buchanan, who is rich by inheritance, physically powerful and openly unfaithful. Nick is our witness, inclined, as he says, to reserve all judgments.',
        ],
      },
      {
        title: 'The green light',
        body: [
          'Gatsby was born poor, with a different name, in North Dakota. As a young officer he fell in love with Daisy. He had no money, and she married Tom.',
          'Everything since has been for her. He made a fortune, apparently from bootlegging, bought the house opposite hers and threw the parties in the hope that she would wander in. At night he stands on his lawn and stretches out his arms to the green light at the end of her dock.',
        ],
      },
      {
        title: 'You can\'t repeat the past',
        body: [
          'Nick arranges a meeting and for a while Gatsby has what he wanted. But he wants more than Daisy. He wants her to say she never loved her husband, so that five years can be wiped away.',
          'When Nick tells him that you cannot repeat the past, Gatsby is astonished. Why of course you can, he says. In a stifling hotel room Tom exposes how Gatsby made his money, and Daisy cannot say the words.',
        ],
      },
      {
        title: 'Careless people',
        body: [
          'Driving home in Gatsby\'s car, Daisy runs down and kills Tom\'s mistress and does not stop. Gatsby resolves to take the blame. Tom tells the dead woman\'s husband whose car it was.',
          'The husband shoots Gatsby in his swimming pool. Tom and Daisy leave town. They were careless people, Nick concludes. They smashed up things and creatures and then retreated into their money and let others clean up the mess.',
        ],
      },
      {
        title: 'Boats against the current',
        body: [
          'Hardly anyone comes to the funeral. Nick thinks of the first sailors who saw this coast, and of Gatsby\'s belief in a future that year by year recedes before us.',
          'The closing line is among the most quoted in American writing. So we beat on, boats against the current, borne back ceaselessly into the past.',
        ],
      },
    ],
    takeaway:
      'Gatsby\'s capacity for hope is what makes him great, and what destroys him, because the thing he hoped for was a memory. Fitzgerald warns against confusing wealth with worth and the past with the future.',
  },
  {
    id: 'don-quixote',
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    year: '1605',
    category: 'fiction',
    tagline: 'A man reads too many adventure stories and sets out to live one.',
    about:
      'Often called the first modern novel, Don Quixote follows an aging gentleman who decides he is a knight and rides out to right the wrongs of the world, with a down-to-earth farmer as his squire. It is very funny, and in the end very moving.',
    whoFor: [
      'Readers who want the heart of a thousand-page classic',
      'Idealists, and those who live with them',
      'Anyone who has heard of tilting at windmills',
    ],
    aboutAuthor:
      'Miguel de Cervantes was a Spanish soldier and writer. He was wounded at the battle of Lepanto, spent five years as a captive in Algiers, and knew prison and poverty at home.',
    cover: { bg: '#e9dcc0', ink: '#2b2118', accent: '#b5462a', motif: 'sun' },
    ideas: [
      {
        title: 'Books turn his brain',
        body: [
          'In a village in La Mancha lives a gentleman of about fifty who spends his days and nights reading romances of chivalry. From so little sleep and so much reading, his brain dries up and he loses his wits.',
          'He polishes some rusty armor, names his bony horse Rocinante and himself Don Quixote, and chooses a farm girl he has barely seen to be his lady, Dulcinea. He takes the first inn he reaches for a castle.',
        ],
      },
      {
        title: 'Sancho Panza',
        body: [
          'He persuades a neighbor, Sancho Panza, to come as his squire by promising him the governorship of an island. Sancho is fat, practical, fond of food and full of proverbs.',
          'When Don Quixote sees giants with long arms, Sancho sees windmills. The knight charges anyway and is flung to the ground by a sail. Sheep become armies and a barber\'s basin becomes a golden helmet. Sancho objects and follows.',
        ],
      },
      {
        title: 'Folly and nobility',
        body: [
          'Don Quixote is beaten in nearly every chapter. He frees a chain of convicts, who thank him by stoning him. His interventions usually make things worse for the people he means to help.',
          'Yet on any subject except chivalry he speaks with wisdom and courtesy, and his motives are always generous. The reader, who begins by laughing at him, starts to wonder whether the sensible world is so admirable.',
        ],
      },
      {
        title: 'The second part',
        body: [
          'Ten years later Cervantes published a sequel with a brilliant twist. The people the pair now meet have read the first book and know all about them.',
          'A duke and duchess stage elaborate and rather cruel hoaxes for their own amusement. As a joke, Sancho is made governor of a town, and to everyone\'s surprise he judges cases with plain good sense. Each man has grown more like the other.',
        ],
      },
      {
        title: 'Coming home',
        body: [
          'A neighbor disguised as a rival knight defeats Don Quixote and makes him promise to go home for a year. He returns, falls ill and wakes sane. He renounces his books and takes back his own name.',
          'Now it is Sancho who weeps and begs him to get up so they can ride out again. He dies quietly, and the reader finds the cure sadder than the madness.',
        ],
      },
    ],
    takeaway:
      'Cervantes laughs at a man who mistakes the world for a story, and then makes us love him for it. Some illusions do harm, and a life with no ideals at all is poorer still.',
  },
  {
    id: 'a-christmas-carol',
    title: 'A Christmas Carol',
    author: 'Charles Dickens',
    year: '1843',
    category: 'fiction',
    tagline: 'Three spirits, one night, and proof that a hard heart can change.',
    about:
      'Dickens wrote this short tale in six weeks, angered by reports of child labor and poverty. The story of the miser Ebenezer Scrooge sold out within days and did more than any other book to shape the modern idea of Christmas.',
    whoFor: [
      'Anyone who knows the story from films and wants the original',
      'Readers who believe, or want to believe, that people can change',
      'People thinking about what their money and time are for',
    ],
    aboutAuthor:
      'Charles Dickens was the most popular English novelist of the Victorian age. As a boy he worked in a factory while his father was in a debtors\' prison.',
    cover: { bg: '#1e3b2b', ink: '#f6eedb', accent: '#d93b3b', motif: 'clock' },
    ideas: [
      {
        title: 'Bah, humbug',
        body: [
          'Scrooge is a moneylender in London, a squeezing, grasping old man who keeps his clerk, Bob Cratchit, shivering over a single coal. To his cheerful nephew\'s Christmas greeting he replies with humbug.',
          'When two gentlemen ask him to give to the poor, he asks whether there are no prisons and no workhouses. If the poor would rather die than go there, he says, they had better do it and decrease the surplus population.',
        ],
      },
      {
        title: 'Marley\'s chain',
        body: [
          'That night he is visited by the ghost of his partner Jacob Marley, dead seven years, dragging a chain of cash boxes and ledgers. I wear the chain I forged in life, Marley says. I made it link by link.',
          'Scrooge protests that Marley was always a good man of business. Mankind was my business, the ghost cries. He warns that three spirits will come.',
        ],
      },
      {
        title: 'The past',
        body: [
          'The first spirit shows Scrooge his boyhood: a lonely child left at school, and a loving sister. Then his first employer, old Fezziwig, giving a Christmas ball for his apprentices.',
          'Scrooge sees how little it cost Fezziwig to make people happy. Then he watches the young woman he was to marry release him from the engagement, because a golden idol has replaced her.',
        ],
      },
      {
        title: 'The present',
        body: [
          'The second spirit takes him to the Cratchits\' tiny house, where the family makes a feast of a small goose. The youngest, Tiny Tim, is crippled and frail. Scrooge asks whether he will live and hears his own words about the surplus population thrown back at him.',
          'Under the spirit\'s robe crouch two starved children. This boy is Ignorance, the spirit says, and this girl is Want. Beware them both, and most of all the boy.',
        ],
      },
      {
        title: 'The future, and the morning',
        body: [
          'The last spirit, silent and hooded, shows a man who has died unmourned while people sell his bed curtains. It shows the Cratchits grieving for Tim. Then it points to a gravestone with Scrooge\'s name.',
          'He wakes to find it is Christmas morning and nothing is yet fixed. He sends a prize turkey to the Cratchits, raises Bob\'s salary and becomes a second father to Tiny Tim, who did not die.',
        ],
      },
    ],
    takeaway:
      'It is never too late to change, and the test of a life is what it did for other people. Dickens reminds us that generosity costs little and that indifference to poverty is a choice.',
  },
  {
    id: 'the-picture-of-dorian-gray',
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    year: '1890',
    category: 'fiction',
    tagline: 'He stays young and beautiful forever. His portrait pays the price.',
    about:
      'Wilde\'s only novel is a modern fairy tale about a young man whose wish is granted: his painted image will age and show the marks of his deeds, while he does not. It scandalized Victorian reviewers and was later used against its author in court.',
    whoFor: [
      'Readers interested in vanity, influence and conscience',
      'Fans of sharp wit and dark fables',
      'Anyone who has wondered what they would do if nothing showed',
    ],
    aboutAuthor:
      'Oscar Wilde was an Irish playwright, poet and wit, the author of The Importance of Being Earnest. He was imprisoned in 1895 and died in Paris in 1900.',
    cover: { bg: '#2b1d3a', ink: '#f3ead9', accent: '#d4af37', motif: 'door' },
    ideas: [
      {
        title: 'The wish',
        body: [
          'The painter Basil Hallward has found his ideal subject in Dorian Gray, a young man of extraordinary beauty and innocence. While Dorian sits for him, Basil\'s friend Lord Henry Wotton talks.',
          'Youth is the one thing worth having, Lord Henry says, and it will soon be gone. Looking at the finished portrait, Dorian cries out that he would give his soul if the picture could grow old and he could stay as he is.',
        ],
      },
      {
        title: 'A voice in the ear',
        body: [
          'Lord Henry is a collector of paradoxes. The only way to get rid of a temptation, he says, is to yield to it. He treats Dorian as an experiment and lends him a poisonous book about a life devoted to sensation.',
          'He never does anything wicked himself. Wilde is interested in the power of influence: how a clever person can hand over a philosophy and let someone else bear the cost of living by it.',
        ],
      },
      {
        title: 'The first cruelty',
        body: [
          'Dorian falls in love with Sibyl Vane, a young actress in a shabby theater, because of her art. Once she loves him, she can no longer pretend on stage and acts badly. He tells her she has killed his love.',
          'That night he notices a touch of cruelty about the mouth in the portrait. He resolves to make amends, but Sibyl has taken her own life. Lord Henry persuades him to regard it as a beautiful tragedy. He locks the picture in the attic.',
        ],
      },
      {
        title: 'The double life',
        body: [
          'Eighteen years pass. Dorian is still radiant, while rumors gather about the friends he has ruined. From time to time he climbs to the attic and looks, with a kind of pleasure, at the aging, sneering thing on the canvas.',
          'When Basil comes to plead with him, Dorian shows him the picture and then stabs him to death. He blackmails a former friend into destroying the body. The portrait\'s hand now drips red.',
        ],
      },
      {
        title: 'The knife',
        body: [
          'Dorian tries one good deed and hopes the picture will improve. It only adds a look of hypocrisy, for he had done it out of vanity. In a rage he takes the knife that killed Basil and stabs the canvas.',
          'The servants hear a cry. They find the portrait as fresh as the day it was painted, and on the floor a withered, loathsome old man with a knife in his heart, whom they recognize only by his rings.',
        ],
      },
    ],
    takeaway:
      'You cannot hand your conscience to something else to carry. What we do shapes what we are, whether or not it shows, and a philosophy that sounds charming can be lethal when someone actually lives by it.',
  },
  {
    id: 'the-count-of-monte-cristo',
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    year: '1844',
    category: 'fiction',
    tagline: 'Betrayed, buried alive in a prison, and back with a fortune and a plan.',
    about:
      'The greatest revenge story ever written follows a young sailor who is falsely imprisoned on his wedding day, escapes after fourteen years and returns as a mysterious nobleman to repay his friends and his enemies. Beneath the adventure lies a question about the limits of vengeance.',
    whoFor: [
      'Lovers of adventure and intricate plots',
      'Anyone nursing a grievance',
      'Readers who want the story of a twelve-hundred-page novel in a few minutes',
    ],
    aboutAuthor:
      'Alexandre Dumas was a French novelist and playwright, also the author of The Three Musketeers. His father, born to an enslaved mother in the Caribbean, became a general under Napoleon.',
    cover: { bg: '#15323d', ink: '#f5eedb', accent: '#e3b23c', motif: 'crown' },
    ideas: [
      {
        title: 'Three enemies and a coward',
        body: [
          'At nineteen Edmond Dantès has everything ahead of him. He is about to be made captain of a ship and to marry Mercédès. That is exactly why he is hated.',
          'A shipmate wants the captaincy. A rival wants the bride. Together, while a third man looks on drunk, they write an anonymous letter accusing him of carrying messages for the exiled Napoleon. A prosecutor, to protect his own career, sends him to an island fortress without trial.',
        ],
      },
      {
        title: 'The priest in the next cell',
        body: [
          'After years alone in the dark, Dantès is close to starving himself to death when he hears scratching. An old prisoner, the Abbé Faria, has tunneled the wrong way and broken into his cell.',
          'Faria teaches him languages, science and history, and by simple reasoning works out who betrayed him. He also reveals the location of a vast treasure. When the old man dies, Dantès sews himself into the burial sack and is thrown into the sea.',
        ],
      },
      {
        title: 'Reward first',
        body: [
          'He finds the treasure on the island of Monte Cristo and reappears nine years later as a fabulously rich count whom no one recognizes.',
          'His first act is gratitude. The shipowner who tried to save him is on the edge of ruin and about to shoot himself. Dantès secretly pays his debts and sends a new ship into harbor. Then he says farewell to kindness and turns to revenge.',
        ],
      },
      {
        title: 'Patience as a weapon',
        body: [
          'His enemies have become a banker, a general and the chief prosecutor. He does not attack them. He studies them for years and arranges for their own crimes and greed to come to light.',
          'The general is exposed as a traitor and kills himself. The banker is ruined. The prosecutor\'s buried secrets are read out in his own courtroom. Each believes until the end that the Count is his friend.',
        ],
      },
      {
        title: 'Wait and hope',
        body: [
          'Then an innocent child dies as a result of his schemes, and Dantès is shaken. He had believed himself the instrument of Providence. He sees that he has gone beyond what any man has the right to do.',
          'He spares the last of his enemies, saves two young lovers and sails away, leaving a letter. All human wisdom, it says, is contained in two words: wait and hope.',
        ],
      },
    ],
    takeaway:
      'Dumas gives the reader the full satisfaction of revenge and then shows its cost. Patience and knowledge are immense powers, and no one is wise enough to play at being fate.',
  },
]
