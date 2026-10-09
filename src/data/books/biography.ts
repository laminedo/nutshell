import type { Book } from '../types'

export const biography: Book[] = [
  {
    id: 'narrative-of-the-life-of-frederick-douglass',
    title: 'Narrative of the Life of Frederick Douglass',
    author: 'Frederick Douglass',
    year: '1845',
    category: 'biography',
    tagline: 'How a man born into slavery taught himself to read and took his freedom.',
    about:
      'Written seven years after his escape, this short autobiography made Douglass the most famous Black American of his century. It is both a damning eyewitness account of slavery and the story of a mind refusing to be owned.',
    whoFor: [
      'Anyone who wants to understand American slavery from the inside',
      'Readers moved by stories of self-education',
      'People looking for one of the great short memoirs',
    ],
    aboutAuthor:
      'Frederick Douglass escaped from slavery in Maryland in 1838 and became a leading abolitionist, orator, newspaper editor and adviser to presidents.',
    cover: { bg: '#1c2b3a', ink: '#f3ecd9', accent: '#e9a23b', motif: 'sun' },
    ideas: [
      {
        title: 'Born without a birthday',
        body: [
          'Douglass begins with what he was never allowed to know. He has no accurate knowledge of his age. He was separated from his mother as an infant and saw her only a few times, at night.',
          'His father was rumored to be his master. As a small child he watched his aunt being whipped, and calls it the blood-stained gate through which he entered the hell of slavery.',
        ],
      },
      {
        title: 'Reading is the pathway to freedom',
        body: [
          'Sent to Baltimore at about eight, he is taught the alphabet by his new mistress. Her husband stops the lessons, saying that learning would forever unfit the boy to be a slave.',
          'Douglass overhears and understands at once. From that moment he knows what the path to freedom is. He trades bread to poor white boys in the street in exchange for lessons, and teaches himself to write by copying letters in a shipyard.',
        ],
      },
      {
        title: 'Knowledge brings pain as well',
        body: [
          'At twelve he obtains a schoolbook of speeches about liberty and reads it over and over. The more he reads, the more he hates his enslavers, and the more unbearable his condition becomes.',
          'Learning had shown him the pit without a ladder to climb out. At times he envies his fellow slaves their ignorance. He does not hide this cost, and it makes his later victory more convincing.',
        ],
      },
      {
        title: 'The fight with Covey',
        body: [
          'At sixteen he is hired out to Edward Covey, a farmer known for breaking the spirit of slaves. After six months of constant work and beatings, Douglass says he was broken in body, soul and spirit.',
          'Then one morning he fights back. The struggle lasts nearly two hours and Covey never touches him again. You have seen how a man was made a slave, he writes. You shall see how a slave was made a man.',
        ],
      },
      {
        title: 'Escape and voice',
        body: [
          'In 1838 he reaches New York. He gives no details of the route, so as not to close it to others. He marries, settles in Massachusetts and finds work on the docks.',
          'Three years later he is asked to speak at an antislavery meeting and discovers his gift. The book made him so well known that he had to leave for Britain to avoid recapture, until friends there purchased his freedom.',
        ],
      },
    ],
    takeaway:
      'Slavery depended on keeping people ignorant, and Douglass broke it in himself by learning to read and by refusing, once, to be beaten. Literacy and self-respect were his first acts of freedom.',
  },
  {
    id: 'up-from-slavery',
    title: 'Up from Slavery',
    author: 'Booker T. Washington',
    year: '1901',
    category: 'biography',
    tagline: 'From a slave cabin to the founding of a great school, by way of a broom.',
    about:
      'Booker T. Washington was freed at about nine years old and became the most powerful Black leader of his generation. His autobiography tells how he gained an education, built Tuskegee Institute from nothing and came to believe in progress through work and skill.',
    whoFor: [
      'Readers who are inspired by perseverance against the odds',
      'Educators and anyone building an institution',
      'People interested in the debates over Black advancement after emancipation',
    ],
    aboutAuthor:
      'Booker Taliaferro Washington was an American educator and the founding principal of Tuskegee Institute in Alabama, which he led until his death in 1915.',
    cover: { bg: '#5b3a21', ink: '#f6ecd7', accent: '#e6b655', motif: 'ziggurat' },
    ideas: [
      {
        title: 'Freedom, and then the salt furnace',
        body: [
          'Washington was born in a one-room cabin with a dirt floor on a Virginia plantation. He remembers the day the proclamation of freedom was read and his mother kissing her children with tears of joy.',
          'Freedom brought new hardship. The family moved to West Virginia, where the boy worked in salt furnaces and coal mines from before dawn. He was desperate to learn and got hold of a spelling book.',
        ],
      },
      {
        title: 'An entrance exam with a broom',
        body: [
          'Hearing of a school for Black students called Hampton, he set off on foot with almost no money and traveled about five hundred miles. He arrived dirty and hungry, and the head teacher hesitated to admit him.',
          'She told him to sweep a classroom. He swept it three times and dusted it four. She could not find a speck of dirt, and he was in. He counted it the best examination he ever passed.',
        ],
      },
      {
        title: 'Building Tuskegee brick by brick',
        body: [
          'In 1881 he was sent to Alabama to open a school and found no buildings, only a shanty and an old church. He bought an abandoned farm on borrowed money.',
          'The students built the school themselves. They even made the bricks, and three kilns failed before the fourth succeeded. They learned trades alongside their books and, Washington says, self-reliance and the dignity of labor.',
        ],
      },
      {
        title: 'Cast down your bucket',
        body: [
          'In 1895 he addressed a mostly white audience at an exposition in Atlanta. He urged Black southerners to cast down their buckets where they were, in farming, mechanics and commerce, and urged white employers to rely on them.',
          'In all things purely social, he said, the races could be as separate as the fingers, yet one as the hand in everything essential to mutual progress. The speech made him famous.',
        ],
      },
      {
        title: 'The argument about his strategy',
        body: [
          'Younger leaders, above all Du Bois, attacked the speech as a compromise that accepted segregation and gave up the fight for political rights. That criticism has shaped his reputation ever since.',
          'It later emerged that Washington had quietly paid for legal challenges to discrimination. His own summary of his creed was that success should be measured not by the position reached but by the obstacles overcome.',
        ],
      },
    ],
    takeaway:
      'Washington believed that excellence at useful work would win respect that argument alone could not. Whatever one makes of his politics, his life is a lesson in thoroughness, patience and building something that lasts.',
  },
  {
    id: 'the-story-of-my-life',
    title: 'The Story of My Life',
    author: 'Helen Keller',
    year: '1903',
    category: 'biography',
    tagline: 'Deaf and blind from infancy, she found the world through one word spelled into her hand.',
    about:
      'Helen Keller wrote this memoir at twenty-two, while a student at college. It describes a childhood sealed off from sight and sound, the arrival of the teacher who reached her, and the joy of discovering language.',
    whoFor: [
      'Anyone who needs a reminder of what determination can do',
      'Teachers and parents',
      'Readers interested in language and how we learn',
    ],
    aboutAuthor:
      'Helen Keller was an American author, lecturer and campaigner for people with disabilities, women\'s suffrage and workers\' rights. She was the first deafblind person to earn a college degree.',
    cover: { bg: '#e8eef0', ink: '#1e2b33', accent: '#3a86c8', motif: 'waves' },
    ideas: [
      {
        title: 'A world gone dark and silent',
        body: [
          'Keller was a healthy baby in Alabama until, at nineteen months, an illness left her unable to see or hear. She invented a few dozen signs to make her wants known, a push for go and a pull for come.',
          'As she grew, the gap between what she felt and what she could express became unbearable. She describes kicking and screaming until she was exhausted, sometimes many times a day.',
        ],
      },
      {
        title: 'The teacher arrives',
        body: [
          'On the third of March 1887, three months before Helen turned seven, Anne Sullivan came to the house. Keller calls it the most important day of her life.',
          'Sullivan, herself partly blind, gave the child a doll and slowly spelled the word into her palm with her fingers. Helen imitated the movements as a game. She did not yet know that they meant anything.',
        ],
      },
      {
        title: 'Water',
        body: [
          'Some weeks later, teacher and pupil walked to the well house. Sullivan held one of Helen\'s hands under the spout and spelled the word water into the other, first slowly, then quickly.',
          'Suddenly the mystery of language was revealed. She understood that the cool something flowing over her hand had a name. That living word, she writes, awakened her soul. By nightfall she had learned thirty more.',
        ],
      },
      {
        title: 'An education against the odds',
        body: [
          'She learned to read raised print and Braille, to write, and at ten to speak aloud, by feeling the position of her teacher\'s lips and throat. A childhood accusation of plagiarism wounded her badly and made her doubt her own mind.',
          'She entered Radcliffe College in 1900. Sullivan sat beside her in every lecture, spelling the professors\' words into her hand, and she graduated with honors.',
        ],
      },
      {
        title: 'Joy',
        body: [
          'What surprises most readers is how happy the book is. Keller writes with delight about the smell of the woods, rowing and swimming, the feel of a sculpture under her fingers and, above all, books.',
          'She counts among her friends the inventor Alexander Graham Bell and the writer Mark Twain. Throughout, she gives the credit to the patience of one teacher who refused to treat her as a hopeless case.',
        ],
      },
    ],
    takeaway:
      'Language is what lets a mind out of its prison, and a patient teacher can hand over the key. Keller shows that a life with severe limits can still be full of curiosity and joy.',
  },
  {
    id: 'the-autobiography-of-andrew-carnegie',
    title: 'The Autobiography of Andrew Carnegie',
    author: 'Andrew Carnegie',
    year: '1920',
    category: 'biography',
    tagline: 'From bobbin boy to the richest man in the world, in his own words.',
    about:
      'Carnegie tells how the son of a ruined Scottish weaver rose through telegraph offices and railroads to dominate the American steel industry, and then set about giving his fortune away.',
    whoFor: [
      'Entrepreneurs and investors',
      'Readers who enjoy rags-to-riches stories told firsthand',
      'Anyone interested in the origins of modern philanthropy',
    ],
    aboutAuthor:
      'Andrew Carnegie emigrated from Scotland to Pennsylvania in 1848, built the Carnegie Steel Company and spent his last decades as a philanthropist.',
    cover: { bg: '#2f3640', ink: '#f2ecda', accent: '#e58e26', motif: 'columns' },
    ideas: [
      {
        title: 'A weaver\'s son',
        body: [
          'Carnegie was born in a small Scottish town where his father wove linen by hand. Steam-powered looms destroyed the trade, and the family sold what they had and sailed for America.',
          'At thirteen he went to work in a cotton mill near Pittsburgh as a bobbin boy, earning a little over a dollar a week. He remembered his pride at bringing home his first wages more keenly than any later millions.',
        ],
      },
      {
        title: 'Messenger boy and borrowed books',
        body: [
          'A job delivering telegrams changed his life. He memorized the names and faces of every business in town and taught himself to read the signals by ear, which few operators could do.',
          'A local gentleman opened his private library to working boys on Saturdays. Carnegie borrowed a book a week. He never forgot it, and that debt is the origin of the thousands of public libraries he later paid for.',
        ],
      },
      {
        title: 'The goose that lays golden eggs',
        body: [
          'He moved to the Pennsylvania Railroad as assistant to a rising manager, who one day offered him the chance to buy shares in an express company. His mother mortgaged the house to raise the money.',
          'When the first dividend arrived, a check for money he had not worked for, he shouted that here was the goose that lays the golden eggs. He went on to invest in sleeping cars, oil and iron bridges.',
        ],
      },
      {
        title: 'All the eggs in one basket',
        body: [
          'After seeing a new steelmaking process in England, he staked everything on steel. Contrary to the usual advice, he believed in putting all your eggs in one basket and then watching that basket.',
          'He insisted on knowing the exact cost of every operation and hired the best men he could find. He suggested for his own epitaph that here lay a man who knew how to enlist in his service better men than himself.',
        ],
      },
      {
        title: 'Giving it away',
        body: [
          'In 1901 he sold his company for a sum that made him the richest man alive, and turned full time to distributing it: libraries, universities, concert halls and a foundation for peace.',
          'The book is frank about pride and less so about the bitter and violent strike at his Homestead works in 1892, which he calls the deepest wound of his career. He stopped writing when war broke out in 1914.',
        ],
      },
    ],
    takeaway:
      'Carnegie credits his rise to seizing small chances, learning constantly, concentrating on one business and choosing excellent people. He believed the second half of a successful life should be spent giving back.',
  },
  {
    id: 'personal-memoirs-of-ulysses-s-grant',
    title: 'Personal Memoirs of Ulysses S. Grant',
    author: 'Ulysses S. Grant',
    year: '1885',
    category: 'biography',
    tagline: 'Written in a race against death, by the general who won the Civil War.',
    about:
      'Bankrupt and dying of cancer, Grant wrote his memoirs to provide for his family and finished them days before he died. Plain, exact and modest, they are regarded as the finest military autobiography in English.',
    whoFor: [
      'Readers interested in the American Civil War',
      'Leaders who want a model of clear thinking and persistence',
      'Anyone who admires plain, honest writing',
    ],
    aboutAuthor:
      'Ulysses S. Grant commanded the Union armies in the Civil War and served two terms as the eighteenth President of the United States.',
    cover: { bg: '#243447', ink: '#f1ecdb', accent: '#c9a227', motif: 'chevrons' },
    ideas: [
      {
        title: 'A book written against the clock',
        body: [
          'In 1884 a swindler in whose firm Grant had invested ruined him. Soon afterward he learned he had cancer of the throat. He began writing so that his wife would not be left destitute.',
          'Mark Twain published the book and offered generous terms. Grant wrote through terrible pain, in the end unable to speak, and completed the manuscript about a week before his death. It earned his family a fortune.',
        ],
      },
      {
        title: 'A reluctant soldier',
        body: [
          'Grant went to the military academy because his father sent him, and hoped Congress would abolish it. He was an average student and a superb horseman.',
          'He served in the war against Mexico and never changed his view of it. He calls it one of the most unjust wars ever waged by a stronger nation against a weaker one. From his commander there he learned to dress plainly and give clear orders.',
        ],
      },
      {
        title: 'The enemy is as afraid as you are',
        body: [
          'Grant left the army in 1854 and failed at farming and business. When the Civil War began he was a clerk in his father\'s leather shop.',
          'Leading a regiment toward an enemy camp for the first time, he felt his heart rise into his throat. The camp was empty. The other commander had fled. It occurred to him that the man had been as much afraid of him as he was of the enemy, and he never forgot it.',
        ],
      },
      {
        title: 'Keep moving forward',
        body: [
          'At Fort Donelson he answered a request for terms by saying that only unconditional and immediate surrender would be accepted. After the first terrible day at Shiloh, he said simply that they would beat the enemy tomorrow.',
          'At Vicksburg he cut loose from his supply line and lived off the country. In Virginia he told Washington he proposed to fight it out on that line if it took all summer. He did not retreat after a setback, which earlier generals had always done.',
        ],
      },
      {
        title: 'Generous in victory',
        body: [
          'When Lee surrendered at Appomattox, Grant let the defeated officers keep their side arms and the men keep their horses for the spring plowing. He stopped his soldiers from cheering.',
          'He writes that he felt sad at the downfall of a foe who had fought so long and valiantly, though for a cause he judged one of the worst for which a people ever fought.',
        ],
      },
    ],
    takeaway:
      'Grant succeeded through clear orders, calm under pressure and a refusal to turn back. He shows that persistence need not be loud, and that victory is best used with restraint.',
  },
  {
    id: 'the-story-of-my-experiments-with-truth',
    title: 'The Story of My Experiments with Truth',
    author: 'Mohandas K. Gandhi',
    year: '1927',
    category: 'biography',
    tagline: 'A shy lawyer tests his principles on himself, and finds a way to move an empire.',
    about:
      'Gandhi wrote his autobiography in weekly installments while in his fifties. It is not a record of political triumphs. It is an unusually honest account of his attempts to live by truth and nonviolence, failures included.',
    whoFor: [
      'Anyone interested in nonviolent resistance',
      'Readers who want to see a great figure describe his own faults',
      'People trying to bring their daily life in line with their beliefs',
    ],
    aboutAuthor:
      'Mohandas Karamchand Gandhi was an Indian lawyer who led the movement for independence from British rule through nonviolent civil disobedience. He was assassinated in 1948.',
    cover: { bg: '#f2ead8', ink: '#2a2118', accent: '#d9822b', motif: 'rings' },
    ideas: [
      {
        title: 'Experiments, not achievements',
        body: [
          'Gandhi explains that he is not writing a real autobiography. He simply wants to tell the story of his experiments with truth, in diet, in conduct and in politics, so that others may judge them.',
          'He spares himself nothing. He was a timid child who once stole and once ate meat in secret. Married at thirteen, he was a jealous husband, and he still feels shame at having left his dying father\'s bedside.',
        ],
      },
      {
        title: 'London and the power of a vow',
        body: [
          'Before he sailed to England to study law, his mother made him swear to touch neither wine, women nor meat. Keeping the promise was hard, and he nearly starved until he found a vegetarian restaurant.',
          'For a while he tried to become an English gentleman, with dancing and violin lessons. Then he gave them up and learned to live on very little. He came to believe in vegetarianism by conviction, not just obedience.',
        ],
      },
      {
        title: 'Thrown off the train',
        body: [
          'In 1893 he went to South Africa on a legal case. Traveling with a first-class ticket, he was ordered to move because of his color, refused, and was pushed out onto the platform with his luggage.',
          'He spent a freezing night in the waiting room deciding whether to go home or to stay and fight the prejudice he had met. He stayed for twenty-one years and organized the Indian community there.',
        ],
      },
      {
        title: 'Truth-force',
        body: [
          'Out of that struggle came a method he named satyagraha, holding firmly to truth. One resists an unjust law openly and without violence and accepts the punishment, appealing to the conscience of the opponent.',
          'It demanded personal discipline. Inspired by a book of Ruskin\'s, he founded a farm where everyone did manual labor. He simplified his possessions, experimented with diet and took a vow of celibacy.',
        ],
      },
      {
        title: 'Reducing oneself to zero',
        body: [
          'Back in India he tested the method on behalf of indigo farmers, mill workers and peasants facing famine taxes. The book ends around 1921, before the campaigns for which he is best known.',
          'His conclusion is that to see truth face to face one must be able to love the meanest of creation as oneself. That requires self-purification, and he says he must reduce himself to zero.',
        ],
      },
    ],
    takeaway:
      'Gandhi treated his own life as a laboratory. He held that means matter as much as ends, that courage can be nonviolent, and that changing the world starts with strict honesty about yourself.',
  },
  {
    id: 'twelve-years-a-slave',
    title: 'Twelve Years a Slave',
    author: 'Solomon Northup',
    year: '1853',
    category: 'biography',
    tagline: 'A free man is kidnapped and sold into slavery, and lives to tell it.',
    about:
      'Solomon Northup was a free Black citizen of New York, a husband, father and musician. In 1841 he was drugged, sold and sent to the plantations of Louisiana. His memoir is one of the most detailed and reliable accounts of slavery ever written.',
    whoFor: [
      'Readers who want a firsthand account of American slavery',
      'Anyone who saw the film and wants the original',
      'People interested in endurance and the fragility of freedom',
    ],
    aboutAuthor:
      'Solomon Northup was born free in New York State around 1807. After his rescue he lectured for the abolitionist cause. The circumstances of his death are unknown.',
    cover: { bg: '#3c2f2f', ink: '#f4ead7', accent: '#c8553d', motif: 'horizon' },
    ideas: [
      {
        title: 'Taken',
        body: [
          'Northup lived in Saratoga with his wife and three children and was known as a fine violinist. Two well-dressed strangers offered him good pay to play for a circus and persuaded him to travel with them to Washington.',
          'There he fell violently ill, probably drugged. He woke in darkness, chained to the floor of a slave pen within sight of the Capitol. When he said he was a free man, he was beaten until he stopped saying it.',
        ],
      },
      {
        title: 'A new name',
        body: [
          'He was shipped to New Orleans and sold under the name Platt. His first owner, a preacher, was a kind man by the standards of the place, and Northup says so.',
          'He uses the case to make a point. The same man who treated him decently saw nothing wrong in owning him. The fault lay less in individuals, he concludes, than in a system that taught them from the cradle that this was right.',
        ],
      },
      {
        title: 'Ten years under Epps',
        body: [
          'After a carpenter tried to hang him for defending himself, he was sold to Edwin Epps, a cotton planter who drank and ruled by the lash. Every evening the cotton was weighed, and anyone who fell short was whipped.',
          'The fastest picker was a young woman named Patsey, who was abused by Epps and hated by his wife. In the most terrible scene of the book, Northup is forced to whip her himself.',
        ],
      },
      {
        title: 'No way to send word',
        body: [
          'For years he could not get a letter out. Slaves were forbidden pen and paper, and he had to hide the fact that he could read. He made ink from bark and a pen from a feather, and was betrayed by the man he asked to post the letter.',
          'At last he confided in a Canadian carpenter working on the plantation, who hated slavery. The man wrote to Northup\'s friends in New York at real risk to himself.',
        ],
      },
      {
        title: 'Rescue, without justice',
        body: [
          'In January 1853 a New York lawyer arrived with papers from the governor, and Northup was identified and freed. He returned to his family after twelve years to find his daughter grown and a grandchild named after him.',
          'The men who kidnapped him were never convicted. In Washington a Black man could not testify against a white one. The book sold thirty thousand copies, and its names and places were later verified.',
        ],
      },
    ],
    takeaway:
      'Freedom that depends on other people respecting it can be stolen in a night. Northup records, without exaggeration, what a system does when it turns human beings into property.',
  },
  {
    id: 'the-autobiography-of-charles-darwin',
    title: 'The Autobiography of Charles Darwin',
    author: 'Charles Darwin',
    year: '1887',
    category: 'biography',
    tagline: 'A modest account of how an idle boy became the author of the theory of evolution.',
    about:
      'Darwin wrote these recollections for his children when he was sixty-seven, with no thought of style. They trace his unpromising youth, the voyage that made him and the slow working out of his theory, and they describe candidly how his mind operated.',
    whoFor: [
      'Anyone curious about how great ideas actually develop',
      'Late bloomers and people told they would not amount to much',
      'Readers interested in the habits of a working scientist',
    ],
    aboutAuthor:
      'Charles Darwin was an English naturalist whose book On the Origin of Species, published in 1859, established the theory of evolution by natural selection.',
    cover: { bg: '#dfe6d5', ink: '#23301f', accent: '#7a5c2e', motif: 'sprout' },
    ideas: [
      {
        title: 'A disgrace to the family',
        body: [
          'Darwin was an ordinary schoolboy who preferred collecting and hunting to Latin. His father once told him that he cared for nothing but shooting, dogs and rat-catching, and would be a disgrace to himself and all his family.',
          'Sent to study medicine, he fled an operation performed without anesthetic and never went back. He was then sent to Cambridge to become a clergyman, where his real passion was collecting beetles.',
        ],
      },
      {
        title: 'The voyage that made him',
        body: [
          'A professor recommended him as naturalist for a survey ship, the Beagle. His father objected, and an uncle talked him round. The captain nearly rejected Darwin because he distrusted the shape of his nose.',
          'Darwin calls the five-year voyage by far the most important event of his life. It taught him to observe closely, to work hard and to reason about what he saw.',
        ],
      },
      {
        title: 'A theory by which to work',
        body: [
          'Back home he opened notebooks on the question of how species change. In 1838 he happened to read an essay on population for amusement and saw at once that, in the struggle for existence, favorable variations would be preserved.',
          'He then spent twenty years gathering evidence and anticipating objections. Only when another naturalist sent him an essay containing the same idea did he finally publish.',
        ],
      },
      {
        title: 'How he worked',
        body: [
          'Darwin was often ill and worked only a few hours a day, but he did so every day. He followed what he called a golden rule: whenever he met a fact opposed to his conclusions, he wrote it down at once, because such facts slip from memory.',
          'He judges his own abilities coolly. He was not quick or witty. His success, he thinks, came from love of science, unbounded patience in reflecting on a subject, industry in collecting facts and a fair share of common sense.',
        ],
      },
      {
        title: 'What he lost',
        body: [
          'As a young man Darwin loved poetry, painting and music. In later life he found he could no longer bear to read a line of verse. His mind, he says, had become a machine for grinding general laws out of large collections of facts.',
          'He regrets it, and says that if he had his life again he would read some poetry and listen to some music every week. He also describes, calmly, how his religious belief faded so slowly that he felt no distress.',
        ],
      },
    ],
    takeaway:
      'Genius, in Darwin\'s account of himself, looks like patience, honesty about contrary evidence and steady daily work. He adds a warning: keep the other parts of your mind alive.',
  },
  {
    id: 'my-inventions',
    title: 'My Inventions',
    author: 'Nikola Tesla',
    year: '1919',
    category: 'biography',
    tagline: 'The inventor of alternating current power explains how his mind worked.',
    about:
      'Written as a series of magazine articles when he was sixty-three, this short memoir describes Tesla\'s strange childhood, his method of inventing entirely in his imagination, and the origins of the motor and power system that electrified the world.',
    whoFor: [
      'Inventors, engineers and makers',
      'Anyone fascinated by unusual minds',
      'Readers who know the legend and want his own account',
    ],
    aboutAuthor:
      'Nikola Tesla was a Serbian-American engineer and inventor who developed the alternating current motor and made major contributions to radio and wireless technology.',
    cover: { bg: '#141a33', ink: '#eef0f5', accent: '#6ec6ff', motif: 'bolt' },
    ideas: [
      {
        title: 'A boy troubled by images',
        body: [
          'As a child in what is now Croatia, Tesla was afflicted by vivid pictures that appeared before his eyes, often with flashes of light. When a word was spoken, he saw the object so clearly that he could not tell whether it was real.',
          'To escape them he trained himself to travel in his mind to imagined cities and countries. That effort, he believes, gave him his unusual power of visualization.',
        ],
      },
      {
        title: 'Building machines in the mind',
        body: [
          'Tesla says he needs no models, drawings or experiments. When he has an idea, he constructs the device in his imagination, changes it, improves it and even runs it to see where it wears.',
          'Only when he can find no fault does he put it into concrete form, and it works, he claims, exactly as planned. He contrasts this with inventors who rush to build and then get lost in details.',
        ],
      },
      {
        title: 'The idea in the park',
        body: [
          'As a student he suggested that a motor might run on alternating current without the sparking brushes of existing machines. His professor spent a lecture showing that it was impossible.',
          'Tesla could not let it go. One afternoon in 1882, walking in a Budapest park and reciting poetry at sunset, he saw the answer complete: a rotating magnetic field. He drew the diagram in the sand with a stick.',
        ],
      },
      {
        title: 'America',
        body: [
          'He arrived in New York in 1884 with four cents and a letter of introduction to Thomas Edison. He worked for Edison briefly and says he was promised a large bonus that was then laughed off as American humor.',
          'For a time he dug ditches. Then he found backers, and the industrialist George Westinghouse bought his patents. Alternating current, which can be sent long distances, went on to power the world.',
        ],
      },
      {
        title: 'Wireless dreams',
        body: [
          'Tesla describes his high-voltage coil, a boat steered by radio that he demonstrated in 1898, and his plan to send both messages and power around the globe without wires from a great tower. The money ran out and it was never finished.',
          'He mixes real foresight, such as worldwide wireless communication, with claims that were never proven. He also reveals compulsive habits and a belief that humans are automatic machines responding to outside forces.',
        ],
      },
    ],
    takeaway:
      'Tesla shows the power of working a problem through completely in the imagination before touching a tool. He also shows that brilliance needs practical backing to become real.',
  },
  {
    id: 'the-education-of-henry-adams',
    title: 'The Education of Henry Adams',
    author: 'Henry Adams',
    year: '1918',
    category: 'biography',
    tagline: 'The grandson of presidents concludes that nothing he learned prepared him for the modern world.',
    about:
      'Henry Adams was born into the most distinguished political family in America. In this ironic memoir, written in the third person, he presents his life as a long failure to get an education fit for an age of machines and accelerating change.',
    whoFor: [
      'Readers who feel the world is changing faster than they can follow',
      'Anyone interested in American history from Lincoln to Roosevelt',
      'People who enjoy wit and self-mockery',
    ],
    aboutAuthor:
      'Henry Adams was an American historian and novelist, the great-grandson of President John Adams and grandson of President John Quincy Adams. The book won a Pulitzer Prize after his death.',
    cover: { bg: '#3d3b4f', ink: '#f1ecdc', accent: '#d8a657', motif: 'clock' },
    ideas: [
      {
        title: 'Born into the eighteenth century',
        body: [
          'Adams was born in Boston in 1838, under the shadow of the State House. He says he was branded from birth as surely as if he had been marked in a temple. He was raised on the values of the Founders.',
          'His schooling, including Harvard, taught him little that proved useful. The world he was educated for was vanishing as railways and telegraphs arrived. Throughout, he refers to himself as he, as though examining a specimen.',
        ],
      },
      {
        title: 'Lessons in politics',
        body: [
          'During the Civil War he served in London as private secretary to his father, the American minister. He watched British statesmen say one thing and intend another, and found that even years later he could not tell what they had really meant.',
          'Returning to Washington, he was disgusted by the corruption of the postwar government. The progress from President Washington to President Grant, he remarks, was alone enough to upset the theory of evolution.',
        ],
      },
      {
        title: 'The teacher',
        body: [
          'For seven years Adams taught medieval history at Harvard, introduced the seminar method and decided that he had failed there too. Yet he wrote one of the best-known sentences about the profession.',
          'A teacher affects eternity, he says. He can never tell where his influence stops. The book then skips twenty years in silence, passing over his marriage and the suicide of his wife.',
        ],
      },
      {
        title: 'The Dynamo and the Virgin',
        body: [
          'At the Paris exposition of 1900, Adams stood in the hall of electrical generators and felt the huge humming machines as a moral force, much as the early Christians felt the Cross.',
          'He compares them with the power that built the cathedrals. In the Middle Ages the Virgin Mary was the energy that moved society. In his own time it was the dynamo. One stood for unity and the other for multiplicity.',
        ],
      },
      {
        title: 'A law of acceleration',
        body: [
          'Looking at figures such as coal output, Adams proposed that the power at humanity\'s command was doubling every decade or so. He expected the mind to be strained to its limit within a generation.',
          'His conclusion is not despair but vigilance. Education can never be finished. A person must keep learning to react to forces that did not exist when they were young.',
        ],
      },
    ],
    takeaway:
      'The world you are trained for may be gone by the time you finish training. Adams urges humility about what you know and a lifelong readiness to learn again.',
  },
]
