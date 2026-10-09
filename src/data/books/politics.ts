import type { Book } from '../types'

export const politics: Book[] = [
  {
    id: 'the-republic',
    title: 'The Republic',
    author: 'Plato',
    year: 'c. 375 BCE',
    category: 'politics',
    tagline: 'What is justice, and why should anyone be just? The founding text of political philosophy.',
    about:
      'In a long conversation at a house in the port of Athens, Socrates is challenged to prove that a just life is better than an unjust one. To answer, he designs an ideal city in speech, and with it a theory of the soul, of education and of knowledge.',
    whoFor: [
      'Anyone who wants to start philosophy at the source',
      'Readers interested in justice, education and leadership',
      'People who have heard of the cave and want the context',
    ],
    aboutAuthor:
      'Plato was an Athenian philosopher, a student of Socrates and the founder of the Academy, the first institution of higher learning in the Western world.',
    cover: { bg: '#20324d', ink: '#f3edda', accent: '#e6b34a', motif: 'columns' },
    ideas: [
      {
        title: 'Why be just?',
        body: [
          'The sophist Thrasymachus bursts into the discussion and declares that justice is nothing but the advantage of the stronger. Rulers make laws to suit themselves and call obedience justice.',
          'A second speaker tells of a shepherd who finds a ring that makes him invisible, and uses it to seize a kingdom. Would anyone stay honest with such a ring? Socrates is asked to show that justice is good in itself, not just for its reputation.',
        ],
      },
      {
        title: 'The city and the soul',
        body: [
          'Socrates suggests looking at justice in something larger, a city, where it will be easier to see. His city has three classes: producers, soldiers and rulers.',
          'The soul, he argues, has three matching parts: appetite, spirit and reason. Justice in both is the same thing. Each part does its own work and does not interfere with the others, with reason in charge. It is a kind of inner health.',
        ],
      },
      {
        title: 'Philosophers must rule',
        body: [
          'There will be no end to the troubles of states, Socrates says, until philosophers become kings or kings become philosophers. Only those who love truth more than power can be trusted with power.',
          'The rulers of his city receive decades of education and own no private property. Women may rule equally with men. These proposals were as startling then as now, and Socrates admits they may be impossible.',
        ],
      },
      {
        title: 'The cave',
        body: [
          'Imagine prisoners chained in a cave since birth, facing a wall on which shadows are cast by a fire behind them. They take the shadows for reality.',
          'One prisoner is freed and dragged up into the sunlight. At first he is blinded, then he sees real things and finally the sun itself. If he returns to tell the others, they will think him mad. Education, for Plato, is this turning of the whole soul toward the light.',
        ],
      },
      {
        title: 'How regimes decay',
        body: [
          'Socrates traces a decline from the best city through rule by honor, then by wealth, then democracy, and at last tyranny. In a democracy, he says, an excess of freedom leads the people to raise up a champion who becomes their master.',
          'The tyrant, ruled by his own appetites, is the least free and most miserable of men. That is the final answer to the opening challenge. Modern critics, with reason, see in the ideal city the outline of an authoritarian state.',
        ],
      },
    ],
    takeaway:
      'Justice is a matter of inner order before it is a matter of law, and it is its own reward. A society is only as good as the education and character of those who lead it.',
  },
  {
    id: 'politics-aristotle',
    title: 'Politics',
    author: 'Aristotle',
    year: 'c. 330 BCE',
    category: 'politics',
    tagline: 'A practical guide to constitutions, from the philosopher who studied 158 of them.',
    about:
      'Where his teacher Plato imagined a perfect city, Aristotle collected the constitutions of actual Greek states and asked what works. The result is the first systematic study of government, cautious, empirical and focused on stability.',
    whoFor: [
      'Readers interested in how political systems succeed and fail',
      'Anyone who wants the origin of ideas like the rule of law and the middle class',
      'Students of philosophy and government',
    ],
    aboutAuthor:
      'Aristotle was a Greek philosopher from Stagira, a student of Plato and the tutor of Alexander the Great. He wrote on almost every field of knowledge.',
    cover: { bg: '#ebe4d2', ink: '#22262b', accent: '#2f6690', motif: 'ziggurat' },
    ideas: [
      {
        title: 'Humans are political animals',
        body: [
          'The city, Aristotle says, exists by nature. Families join into villages and villages into a city, which comes into being for the sake of life and continues for the sake of the good life.',
          'A person who can live without a community is either a beast or a god. Only in a city can human beings use speech to reason together about what is just. He also defends slavery as natural, an argument that is rightly rejected today.',
        ],
      },
      {
        title: 'Six kinds of constitution',
        body: [
          'Aristotle classifies governments by who rules and for whose benefit. Rule by one, by a few or by many can each aim at the common good. He calls these kingship, aristocracy and polity.',
          'Each has a corrupt form in which the rulers serve only themselves: tyranny, oligarchy and democracy, by which he means rule by the poor in their own interest. No form is good if it ignores the common good.',
        ],
      },
      {
        title: 'The middle class is the anchor',
        body: [
          'The very rich, he observes, do not know how to obey, and the very poor do not know how to rule. A city of masters and slaves is filled with contempt on one side and envy on the other.',
          'The best practical constitution is therefore a mixture of oligarchy and democracy resting on a large middle class. People of moderate means are the most ready to listen to reason and the least likely to plot.',
        ],
      },
      {
        title: 'Law should rule, not men',
        body: [
          'Whoever asks law to rule asks reason to rule, Aristotle writes. Whoever asks a man to rule adds a wild beast, because desire and anger warp the judgment of even the best.',
          'Citizens should take turns ruling and being ruled. He criticizes his teacher\'s plan for property held in common: what belongs to everyone is cared for by no one.',
        ],
      },
      {
        title: 'Why revolutions happen',
        body: [
          'The general cause of upheaval is a sense of injustice about equality. Some rebel because they think they are equal and have less. Others rebel because they think they are superior and have only the same.',
          'To preserve a constitution, he advises moderation, watchfulness over small changes and, above all, an education that suits citizens to their form of government. The purpose of the state is to help people live well.',
        ],
      },
    ],
    takeaway:
      'Judge a government by whether it serves the common good. Stability comes from moderation, the rule of law, a strong middle class and citizens educated for self-government.',
  },
  {
    id: 'leviathan',
    title: 'Leviathan',
    author: 'Thomas Hobbes',
    year: '1651',
    category: 'politics',
    tagline: 'Without a common power, life is solitary, poor, nasty, brutish and short.',
    about:
      'Written during the English Civil War, Leviathan argues that the only escape from chaos is a government with undivided authority. Hobbes built the case from a bleak view of human nature, and in doing so founded modern political philosophy.',
    whoFor: [
      'Readers who want to understand why governments exist at all',
      'Anyone interested in the idea of a social contract',
      'People who enjoy a ruthless, logical argument',
    ],
    aboutAuthor:
      'Thomas Hobbes was an English philosopher who lived through civil war and fled to Paris for his safety. He said that fear and he were born twins.',
    cover: { bg: '#1c1f24', ink: '#efe9d9', accent: '#b8862f', motif: 'crown' },
    ideas: [
      {
        title: 'The state of nature is war',
        body: [
          'Hobbes imagines people without government. They are roughly equal, since the weakest can kill the strongest by stealth. They compete for goods, distrust one another and fight for reputation.',
          'The result is a war of every person against every other. There is no industry, no learning and no society, only continual fear and danger of violent death. Nothing is unjust, because where there is no law there is no injustice.',
        ],
      },
      {
        title: 'Reason points to peace',
        body: [
          'People are driven toward peace by fear of death and the desire for a comfortable life. Reason suggests rules, which Hobbes calls laws of nature. The first is to seek peace wherever it can be had.',
          'The second is to give up the right to do anything you please, provided others do the same. But such agreements are fragile. Covenants without the sword, he says, are only words.',
        ],
      },
      {
        title: 'The social contract',
        body: [
          'The solution is for everyone to agree with everyone else to hand their power to one man or one assembly, and to treat its decisions as their own. This creates the commonwealth.',
          'Hobbes names it Leviathan, after the sea monster in the Book of Job, and calls it a mortal god. The famous title page shows a giant ruler whose body is made up of his subjects.',
        ],
      },
      {
        title: 'Sovereignty cannot be divided',
        body: [
          'The sovereign must control the army, the courts, taxation and even the teaching of doctrine. If these powers are shared between king and parliament, or state and church, the parts will fight.',
          'Hobbes had watched exactly that happen. He admits that an absolute ruler may behave badly, but argues that the worst government is far better than the civil war that follows from having none.',
        ],
      },
      {
        title: 'The limits of obedience',
        body: [
          'Hobbes is not defending the divine right of kings. Authority comes from the consent of the governed, and its whole purpose is their protection.',
          'It follows that no one can give up the right to defend their own life, and that the duty to obey lasts only as long as the sovereign is able to protect. Later thinkers kept his starting point and drew much more liberal conclusions.',
        ],
      },
    ],
    takeaway:
      'Order is not natural. It is an achievement that depends on a shared authority strong enough to make agreements stick, and whose claim on us rests on the protection it provides.',
  },
  {
    id: 'second-treatise-of-government',
    title: 'Second Treatise of Government',
    author: 'John Locke',
    year: '1689',
    category: 'politics',
    tagline: 'Life, liberty and property, and the right to remove a government that violates them.',
    about:
      'Published after the English revolution of 1688, the Second Treatise argues that government is a trust created by free people to protect their rights. Its ideas run straight into the American Declaration of Independence.',
    whoFor: [
      'Anyone interested in the foundations of liberal democracy',
      'Readers who want to understand the idea of natural rights',
      'People curious about the thinking behind the American founding',
    ],
    aboutAuthor:
      'John Locke was an English philosopher and physician, often called the father of liberalism. He spent years in exile in Holland for his political associations.',
    cover: { bg: '#f0e9d6', ink: '#1e2a38', accent: '#a23b3b', motif: 'door' },
    ideas: [
      {
        title: 'Free and equal by nature',
        body: [
          'Locke also begins with a state of nature, but it is not the war that Hobbes described. People are free and equal, and they are governed by a law of nature that reason can discover.',
          'That law teaches that no one ought to harm another in life, health, liberty or possessions. Liberty is not license. Even without government there are rights and duties.',
        ],
      },
      {
        title: 'Labor creates property',
        body: [
          'The earth was given to humankind in common. How can anything become private? Locke answers that every person owns their own body and its work. When you mix your labor with something, it becomes yours.',
          'He sets limits. You may take only what you can use before it spoils, and must leave enough and as good for others. The invention of money, which does not spoil, allowed much larger holdings.',
        ],
      },
      {
        title: 'Government rests on consent',
        body: [
          'The state of nature has inconveniences. There is no settled law, no impartial judge and no power to enforce a judgment. People therefore agree to form a community and accept the decision of the majority.',
          'The whole purpose is the preservation of their lives, liberties and estates. Nobody can be subjected to political power without their own consent.',
        ],
      },
      {
        title: 'Power is limited',
        body: [
          'Because government is created for a purpose, it has only the powers needed for that purpose. It cannot rule by arbitrary decree, cannot take property without consent, and so cannot tax without the agreement of the people or their representatives.',
          'The power to make laws is supreme, but it is held in trust. Locke also recommends keeping it in different hands from the power to carry the laws out.',
        ],
      },
      {
        title: 'The right of revolution',
        body: [
          'If rulers break the trust and try to make themselves absolute, they put themselves into a state of war with the people. Power then returns to the community, which may set up a new government.',
          'Locke replies to the charge that this invites constant rebellion. People put up with a great deal, he says, and rise only after a long train of abuses. His own record is not spotless: he invested in a company that traded in slaves.',
        ],
      },
    ],
    takeaway:
      'Rights come before government, and governments exist to protect them. Authority is a trust granted by consent, limited by its purpose and forfeited when it is abused.',
  },
  {
    id: 'the-social-contract',
    title: 'The Social Contract',
    author: 'Jean-Jacques Rousseau',
    year: '1762',
    category: 'politics',
    tagline: 'Man is born free, and everywhere he is in chains.',
    about:
      'Rousseau asks what could make political authority legitimate, and answers that only the people themselves can be sovereign. The book was burned in Geneva and Paris and became a sacred text of the French Revolution.',
    whoFor: [
      'Readers interested in democracy and popular sovereignty',
      'Anyone who wants to understand the ideas behind the French Revolution',
      'People who like bold, paradoxical arguments',
    ],
    aboutAuthor:
      'Jean-Jacques Rousseau was a philosopher, novelist and composer born in Geneva. His writings on politics and education shaped the modern world.',
    cover: { bg: '#243f6b', ink: '#f4eedc', accent: '#d64541', motif: 'gap' },
    ideas: [
      {
        title: 'Force does not make right',
        body: [
          'The book opens with its most famous line and then asks how the chains could ever be justified. Not by strength, Rousseau says. If might made right, obedience would last only as long as the force did.',
          'Nor can a people give itself into slavery. Legitimate authority can come only from an agreement. The question is what kind of agreement leaves each person as free as before.',
        ],
      },
      {
        title: 'Each gives all to all',
        body: [
          'In the social contract, each person places themselves and all their power under the direction of the community as a whole. Since everyone does so equally, no one has an interest in making the terms harsh.',
          'What is lost is natural freedom, the right to whatever one can grab. What is gained is civil freedom and secure property. Obedience to a law we have given ourselves, Rousseau says, is freedom.',
        ],
      },
      {
        title: 'The general will',
        body: [
          'The community has a will of its own, the general will, which aims at the common good. It differs from the will of all, which is merely the sum of private interests.',
          'Sovereignty is the exercise of this will and it cannot be handed over. Rousseau distrusts representatives. The English, he remarks, believe themselves free, but are so only during elections. Afterward they are slaves.',
        ],
      },
      {
        title: 'Government is only an agent',
        body: [
          'The people make the laws. The government merely carries them out and can be changed whenever the people wish. Because ordinary citizens cannot design a constitution, Rousseau imagines a wise lawgiver who proposes one.',
          'Which form of government is best depends on size. Pure democracy suits only very small states. If there were a nation of gods, he says, it would govern itself democratically.',
        ],
      },
      {
        title: 'Forced to be free',
        body: [
          'Whoever refuses to obey the general will, Rousseau writes, shall be compelled to do so by the whole body, which means only that he will be forced to be free. He also proposes a civil religion to bind citizens to the state.',
          'These passages trouble many readers. Admirers see the most powerful statement of popular self-rule. Critics see a formula by which any regime can claim to know what the people really want.',
        ],
      },
    ],
    takeaway:
      'Laws are legitimate only when those who must obey them have, in some real sense, made them. Rousseau gave democracy its most stirring principle, and also a warning about how it can be abused.',
  },
  {
    id: 'the-federalist-papers',
    title: 'The Federalist Papers',
    author: 'Hamilton, Madison & Jay',
    year: '1788',
    category: 'politics',
    tagline: 'Eighty-five newspaper essays that explain how the American Constitution is meant to work.',
    about:
      'To persuade New York to ratify the new Constitution, three of its supporters wrote a series of essays under the name Publius. They became the most authoritative commentary on American government and a classic on how to design a republic.',
    whoFor: [
      'Anyone who wants to understand the American system of government',
      'Readers interested in constitutional design and checks on power',
      'People who think about how to manage political division',
    ],
    aboutAuthor:
      'Alexander Hamilton became the first Secretary of the Treasury, James Madison the fourth President and John Jay the first Chief Justice of the United States.',
    cover: { bg: '#1b2a49', ink: '#f2ecd8', accent: '#c8a24a', motif: 'dots' },
    ideas: [
      {
        title: 'A union that could not act',
        body: [
          'The first American government, under the Articles of Confederation, could not tax, could not regulate trade and could not enforce its own decisions. The authors paint it as close to collapse.',
          'Hamilton frames the stakes in the first essay. It has been left to the American people to decide whether societies can establish good government by reflection and choice, or must depend forever on accident and force.',
        ],
      },
      {
        title: 'The cure for faction',
        body: [
          'In the tenth essay Madison takes on the oldest objection to popular government: that it is torn apart by factions. Their causes are sown in human nature, and to remove them one would have to destroy liberty.',
          'His remedy is size. A large republic contains so many interests that no single one can easily form a majority and oppress the rest. Earlier thinkers had believed republics must be small.',
        ],
      },
      {
        title: 'Ambition against ambition',
        body: [
          'If men were angels, Madison writes, no government would be necessary. Since they are not, the government must first be able to control the governed and then be obliged to control itself.',
          'The method is to divide power among separate branches and give each the means and the motive to resist the others. Ambition must be made to counteract ambition. Dividing power again between nation and states gives a double security.',
        ],
      },
      {
        title: 'An energetic executive',
        body: [
          'Many feared a president would become a king. Hamilton replies that energy in the executive is a leading character of good government, essential in war and in the steady administration of law.',
          'Energy requires unity. A single president can act with decision and speed, and, just as important, can be held responsible. A committee lets each member hide behind the others.',
        ],
      },
      {
        title: 'The least dangerous branch',
        body: [
          'Hamilton calls the judiciary the weakest of the three branches, since it controls neither the sword nor the purse and has only judgment. It therefore needs the protection of permanent tenure.',
          'He also argues that courts must be able to set aside laws that conflict with the Constitution, because the will of the people expressed there is superior to the will of their legislators.',
        ],
      },
    ],
    takeaway:
      'Do not rely on leaders being virtuous. Design institutions so that interests check one another, power is divided, and responsibility can always be traced to someone.',
  },
  {
    id: 'common-sense',
    title: 'Common Sense',
    author: 'Thomas Paine',
    year: '1776',
    category: 'politics',
    tagline: 'The pamphlet that turned a tax dispute into a revolution.',
    about:
      'In January 1776 most American colonists still hoped to patch things up with Britain. Then an English immigrant published a forty-seven page pamphlet in plain language, arguing for complete independence. Within six months it was declared.',
    whoFor: [
      'Readers interested in the American Revolution',
      'Anyone who wants to see how plain writing can move a nation',
      'People who enjoy a fierce political argument',
    ],
    aboutAuthor:
      'Thomas Paine was an English-born writer who arrived in Philadelphia in 1774. He later took part in the French Revolution and wrote Rights of Man.',
    cover: { bg: '#f3ead2', ink: '#1a2238', accent: '#c0392b', motif: 'bolt' },
    ideas: [
      {
        title: 'Society is a blessing, government a necessary evil',
        body: [
          'Paine starts by separating two things people confuse. Society is produced by our wants and promotes our happiness. Government is produced by our wickedness and exists to restrain our vices.',
          'Government, like dress, is the badge of lost innocence. At its best it is a necessary evil, and at its worst an intolerable one. The only question is which form gives the most security at the least cost.',
        ],
      },
      {
        title: 'The absurdity of kings',
        body: [
          'Paine attacks not just George the Third but monarchy itself. All men were originally equal, he says, and no one has a right to set up his family in perpetual preference over others.',
          'Hereditary succession is worse still. Nature shows what she thinks of it by so often giving mankind an ass for a lion. The first English king of the current line, he notes, was a French invader with an armed gang.',
        ],
      },
      {
        title: 'Independence, and now',
        body: [
          'There is something absurd, Paine argues, in supposing a continent to be perpetually governed by an island. Ties to Britain drag America into European wars and restrict her trade.',
          'After blood has been shed, reconciliation is a dream. Everything that is right or reasonable pleads for separation. The time is now, while the colonies are united and before the habit of submission returns.',
        ],
      },
      {
        title: 'The cause of all mankind',
        body: [
          'Paine lifts the quarrel above the local. The cause of America, he writes, is in a great measure the cause of all mankind. Freedom has been hunted round the globe, and America can give it a home.',
          'He sketches a republic with a written charter and declares that in America the law is king. We have it in our power, he tells his readers, to begin the world over again.',
        ],
      },
      {
        title: 'Why it worked',
        body: [
          'The pamphlet sold perhaps a hundred thousand copies within months in colonies of two and a half million people, and was read aloud in taverns and army camps. Paine gave his royalties to the army.',
          'It succeeded because it used the language of ordinary people and the Bible, not of lawyers, and because it said openly what many had been afraid to think.',
        ],
      },
    ],
    takeaway:
      'Clear, bold words at the right moment can change what a whole people believes is possible. Paine showed that authority resting only on habit and inheritance cannot survive being questioned plainly.',
  },
  {
    id: 'democracy-in-america',
    title: 'Democracy in America',
    author: 'Alexis de Tocqueville',
    year: '1835',
    category: 'politics',
    tagline: 'A young French aristocrat tours the United States and sees the future.',
    about:
      'Tocqueville came to America in 1831, officially to study prisons. He stayed nine months and wrote the most penetrating book ever written about the country, and about democracy itself: its energy, its dangers and the habits that keep it free.',
    whoFor: [
      'Anyone who wants to understand American society',
      'Readers concerned about conformity and the health of democracy',
      'People interested in civic life and community',
    ],
    aboutAuthor:
      'Alexis de Tocqueville was a French political thinker and statesman from a noble family that had suffered in the Revolution. He later served as foreign minister of France.',
    cover: { bg: '#2c4a63', ink: '#f3eedd', accent: '#e07a3f', motif: 'horizon' },
    ideas: [
      {
        title: 'Equality is the fact of the age',
        body: [
          'Nothing struck Tocqueville more forcibly in America than the general equality of conditions. No one was born to rule, and no one was born to serve. He saw the same movement advancing in Europe and believed it irresistible.',
          'He writes neither to praise nor to condemn. Since democracy is coming, the task is to understand it well enough to keep liberty alive within it.',
        ],
      },
      {
        title: 'The tyranny of the majority',
        body: [
          'In America the majority is all-powerful, and Tocqueville finds this alarming. He does not fear violence so much as pressure on the mind. He knows of no country, he says, with less real independence of opinion.',
          'A king can punish the body. The majority surrounds thought with a fence. A person may hold an unpopular view, but will be shunned for it, and so most people end by not holding it.',
        ],
      },
      {
        title: 'The art of association',
        body: [
          'What saves Americans is their habit of joining together. People of all ages and conditions constantly form associations, to build churches, found hospitals, send missionaries or hold a festival.',
          'Local government, juries, a free press and religion all teach citizens to look beyond themselves. Tocqueville calls the knowledge of how to combine the mother of all other forms of knowledge.',
        ],
      },
      {
        title: 'Individualism and soft despotism',
        body: [
          'Equality tempts each person to withdraw into a small circle of family and friends and leave society to look after itself. Tocqueville gives this new feeling a new name: individualism.',
          'He imagines the despotism it could lead to. An immense, protective power would provide for people\'s needs, manage their affairs and spare them the trouble of thinking. It would not break wills. It would soften them and keep citizens in perpetual childhood.',
        ],
      },
      {
        title: 'What he foresaw',
        body: [
          'Tocqueville saw slavery and the treatment of Black and Native Americans as the great stain and the most dangerous threat to the Union. He also noticed that Americans, amid plenty, were strangely restless.',
          'He ended the first volume with a prediction: America and Russia each seemed called by a secret design of Providence to hold in its hands the destinies of half the world.',
        ],
      },
    ],
    takeaway:
      'Democracy is not self-sustaining. It stays free only where people keep the habits of joining, arguing and governing themselves locally, and resist both the pressure to conform and the temptation to leave public life to others.',
  },
  {
    id: 'the-communist-manifesto',
    title: 'The Communist Manifesto',
    author: 'Karl Marx & Friedrich Engels',
    year: '1848',
    category: 'politics',
    tagline: 'A specter is haunting Europe: the most influential political pamphlet ever written.',
    about:
      'Commissioned by a small league of radical workers, the Manifesto presents all history as a struggle between classes and predicts that capitalism will be overthrown by the working class it creates. Few texts have had larger consequences.',
    whoFor: [
      'Anyone who wants to understand the modern world, whatever their politics',
      'Readers interested in capitalism and its critics',
      'People who want to read the source instead of the slogans',
    ],
    aboutAuthor:
      'Karl Marx was a German philosopher and economist who spent most of his life in exile in London. Friedrich Engels, his collaborator and patron, was the son of a textile manufacturer.',
    cover: { bg: '#b1201b', ink: '#fbf0d6', accent: '#f4c430', motif: 'chevrons' },
    ideas: [
      {
        title: 'History is class struggle',
        body: [
          'The first chapter opens with a sweeping claim. The history of all hitherto existing society is the history of class struggles: freeman and slave, lord and serf, oppressor and oppressed.',
          'The modern age has simplified the conflict. Society is splitting into two great camps, the bourgeoisie, who own the means of production, and the proletariat, who own nothing but their ability to work.',
        ],
      },
      {
        title: 'The revolutionary bourgeoisie',
        body: [
          'Surprisingly, much of the Manifesto praises capitalism. In scarcely a hundred years, the authors say, the bourgeoisie has created more massive productive forces than all earlier generations together.',
          'It has swept away feudal ties, built a world market and drawn every nation into its orbit. Nothing is left stable. All that is solid melts into air, and no bond remains between people but naked self-interest.',
        ],
      },
      {
        title: 'Capitalism digs its own grave',
        body: [
          'This system cannot control what it has unleashed. It lurches through crises in which too much has been produced. Workers are gathered in great factories and reduced to appendages of the machine.',
          'Their numbers and their organization grow. What the bourgeoisie produces above all, the authors declare, is its own gravediggers. Its fall and the victory of the proletariat are equally inevitable.',
        ],
      },
      {
        title: 'The program',
        body: [
          'The theory of the Communists, they say, can be summed up in a single phrase: abolition of private property, meaning ownership of factories and land, not personal belongings.',
          'A list of immediate measures follows. It includes a heavy progressive income tax, the end of inheritance, a national bank, state ownership of transport, free education for all children and the abolition of child labor in factories.',
        ],
      },
      {
        title: 'Legacy',
        body: [
          'The closing lines are a call to arms. The workers have nothing to lose but their chains. They have a world to win. Working men of all countries, unite!',
          'Revolutions made in its name later produced regimes that caused immense suffering, and its prediction that workers would grow ever poorer did not come true in the industrial countries. Its description of a restless, globalizing capitalism is still widely quoted.',
        ],
      },
    ],
    takeaway:
      'The Manifesto argues that economic systems create the forces that overturn them. Whether or not one accepts its remedy, it remains the sharpest short account of how capitalism transforms everything it touches.',
  },
  {
    id: 'civil-disobedience',
    title: 'Civil Disobedience',
    author: 'Henry David Thoreau',
    year: '1849',
    category: 'politics',
    tagline: 'One night in jail, and an essay that inspired Gandhi and Martin Luther King.',
    about:
      'Thoreau refused to pay a tax to a government that upheld slavery and was waging war on Mexico. He spent a night in the Concord jail. The essay he wrote about it argues that conscience comes before law.',
    whoFor: [
      'Anyone who has wondered when it is right to break a law',
      'Readers interested in nonviolent protest',
      'People who enjoyed Walden',
    ],
    aboutAuthor:
      'Henry David Thoreau was an American essayist, naturalist and abolitionist from Concord, Massachusetts, best known for Walden.',
    cover: { bg: '#2d3b2f', ink: '#f1ecda', accent: '#e9c46a', motif: 'door' },
    ideas: [
      {
        title: 'A night in jail',
        body: [
          'In July 1846, while he was living at Walden Pond, Thoreau walked into town to collect a mended shoe and was arrested for failing to pay his poll tax for several years.',
          'Someone, probably his aunt, paid it the next morning and he was released, somewhat annoyed. He gave a lecture explaining himself, which was published as Resistance to Civil Government.',
        ],
      },
      {
        title: 'Conscience before law',
        body: [
          'Must the citizen, Thoreau asks, ever resign his conscience to the legislator? Why then does every person have a conscience? We should be men first and subjects afterward.',
          'He accepts the motto that the government is best which governs least. Law never made anyone more just, and an undue respect for it turns decent people into the agents of injustice, like soldiers marching to a war they know is wrong.',
        ],
      },
      {
        title: 'Do not lend yourself to the wrong',
        body: [
          'A person need not devote their life to eradicating every evil. But they have a duty at least to wash their hands of it and not give it practical support. Paying the tax was support.',
          'If an injustice requires you to be the agent of injustice to another, then, Thoreau says, break the law. Let your life be a counter friction to stop the machine. Voting alone is a feeble thing, a kind of wishing.',
        ],
      },
      {
        title: 'The power of a minority',
        body: [
          'Under a government that imprisons anyone unjustly, he writes, the true place for a just man is also a prison. Any person more right than their neighbors constitutes a majority of one.',
          'A minority is powerless while it conforms. But if a thousand people refused to pay their taxes, the state would have to choose between jailing them all and giving up the wrong. That would be a peaceable revolution.',
        ],
      },
      {
        title: 'What came of it',
        body: [
          'The essay was little noticed at the time. Decades later Gandhi read it in South Africa and found in it a name and an argument for his own campaign. Martin Luther King read it as a student.',
          'Critics ask what happens if everyone follows a private conscience. Thoreau\'s answer lies in his conduct. He broke the law openly, without violence, and accepted the penalty.',
        ],
      },
    ],
    takeaway:
      'Obeying the law does not excuse you from judging it. When a law makes you a participant in serious injustice, refuse openly and peacefully, and accept the consequences.',
  },
]
