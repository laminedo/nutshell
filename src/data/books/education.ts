import type { Book } from '../types'

export const education: Book[] = [
  {
    id: 'emile',
    title: 'Emile',
    author: 'Jean-Jacques Rousseau',
    year: '1762',
    category: 'education',
    tagline: 'Let children be children: the book that began child-centered education.',
    about:
      'Part novel, part treatise, Emile follows an imaginary boy from birth to marriage under the care of a tutor who lets nature do most of the teaching. It was burned in Paris and Geneva, and it changed how the Western world thinks about childhood.',
    whoFor: [
      'Parents and teachers',
      'Anyone interested in the origins of progressive education',
      'Readers who suspect children are hurried and over-instructed',
    ],
    aboutAuthor:
      'Jean-Jacques Rousseau was a philosopher and novelist born in Geneva. To the lasting discredit of his reputation as an educator, he placed his own five children in an orphanage.',
    cover: { bg: '#e8dfc8', ink: '#27321f', accent: '#5a8f3c', motif: 'sprout' },
    ideas: [
      {
        title: 'Born good',
        body: [
          'The first sentence states the theme. Everything is good as it leaves the hands of the author of things, and everything degenerates in the hands of man.',
          'Children are not born wicked and in need of correction. They are spoiled by a society that teaches them vanity, competition and deceit. The first task of education, therefore, is to protect.',
        ],
      },
      {
        title: 'Childhood is a stage of its own',
        body: [
          'Nature wants children to be children before they are adults, Rousseau writes. Each age has its own way of seeing and feeling, and it is foolish to treat a child as a small grown-up.',
          'Until about twelve, he recommends what he calls negative education. Give no lessons in words, no sermons and no books. Let the child run, climb, fall and use the senses. The most useful rule, he says, is not to gain time but to lose it.',
        ],
      },
      {
        title: 'Learning from things',
        body: [
          'Emile learns by consequences. If he breaks a window, he is not scolded. He sleeps in the cold. The lesson comes from the nature of things and not from the will of an adult.',
          'Curiosity is aroused before knowledge is offered. The tutor contrives to get them lost in a forest at noon, and Emile works out the way home from the direction of the shadows. His only book for years is Robinson Crusoe, and he learns a manual trade.',
        ],
      },
      {
        title: 'Adolescence and the heart',
        body: [
          'With adolescence come the passions, and only now does moral education begin. Emile is led to feel compassion by seeing suffering, and studies history to understand people.',
          'A long section, in the voice of a country priest, argues for a simple religion of conscience and nature without dogma. It was this passage, above all, that caused the book to be condemned.',
        ],
      },
      {
        title: 'Its limits and its legacy',
        body: [
          'The final part describes the education of Sophie, Emile\'s intended wife, who is brought up to please and serve a man. Mary Wollstonecraft attacked it fiercely, and rightly.',
          'The scheme also needs a full-time tutor devoted to one child. Yet later educators, including the founders of the kindergarten and of the Montessori method, took their starting point from Rousseau: respect the child\'s nature.',
        ],
      },
    ],
    takeaway:
      'Do not rush children. Let them explore, learn from real consequences and meet each kind of knowledge when they are ready for it. Rousseau\'s details are dated, and his respect for childhood is not.',
  },
  {
    id: 'some-thoughts-concerning-education',
    title: 'Some Thoughts Concerning Education',
    author: 'John Locke',
    year: '1693',
    category: 'education',
    tagline: 'A philosopher\'s practical letters on raising a child of good character.',
    about:
      'While in exile, John Locke wrote a series of letters to a friend who had asked how to bring up his son. Published as a book, they became the most influential guide to child-rearing of the eighteenth century, valuing character above learning and kindness above the rod.',
    whoFor: [
      'Parents looking for sensible, humane principles',
      'Teachers interested in the history of their craft',
      'Readers who know Locke as a political thinker and want another side',
    ],
    aboutAuthor:
      'John Locke was an English philosopher and physician. He never married or had children, but had served as tutor in a noble household.',
    cover: { bg: '#2a3f55', ink: '#f2ecda', accent: '#e3a23b', motif: 'door' },
    ideas: [
      {
        title: 'A sound mind in a sound body',
        body: [
          'Locke opens with the old saying and calls it a short but full description of a happy state in this world. As a physician he starts with health.',
          'Children should have plenty of open air, exercise and sleep, a plain diet and clothing that is not too warm. He goes so far as to suggest thin shoes that let in water. The aim is a body hardened to cope with life.',
        ],
      },
      {
        title: 'Education makes the difference',
        body: [
          'Of all the people we meet, Locke believes, nine parts in ten are what they are, good or bad, useful or not, by their education. The child\'s mind is like white paper or wax, to be shaped as one pleases.',
          'Small and almost unnoticed impressions made in infancy have lasting consequences, like the gentle push at a river\'s source that decides where it reaches the sea.',
        ],
      },
      {
        title: 'Virtue first, learning last',
        body: [
          'Locke lists what a parent should want for a child in order of importance: virtue, wisdom, good breeding and, last of all, learning. A scholar without character is nothing.',
          'The foundation of all virtue is the power to deny yourself your own desires and follow what reason says is best. That power is got by practice from the cradle. Children should be given what they need, not what they cry for.',
        ],
      },
      {
        title: 'Esteem and shame, not the rod',
        body: [
          'Beating, Locke argues, is the worst method of discipline. It teaches the child to act from fear of pain, which is the very habit one wants to root out. Rewards of sweets and money are just as bad.',
          'The real incentives are praise and disapproval. Children are very sensitive to being well thought of. He advises few rules, patient practice until good behavior becomes habit, and above all a good example, since children do what they see.',
        ],
      },
      {
        title: 'Make learning a game',
        body: [
          'Children hate to be idle, so the secret is never to make learning a task. Locke suggests teaching the alphabet with dice that have letters pasted on them.',
          'Their curiosity should be encouraged and their questions answered truthfully. Reason with them as rational creatures, in terms suited to their age, and study each child\'s temperament. No single method suits every one.',
        ],
      },
    ],
    takeaway:
      'Aim first at character and self-control, and let knowledge follow. Use approval more than punishment, set an example, keep rules few and make learning something a child wants to do.',
  },
  {
    id: 'the-montessori-method',
    title: 'The Montessori Method',
    author: 'Maria Montessori',
    year: '1912',
    category: 'education',
    tagline: 'A doctor watches small children closely and discovers how they teach themselves.',
    about:
      'In a poor district of Rome, Maria Montessori opened a classroom for children of working parents and treated it as a laboratory. What she observed led to a method built on freedom, carefully designed materials and respect for the child\'s own drive to learn.',
    whoFor: [
      'Parents of young children',
      'Teachers and anyone choosing a school',
      'Readers interested in how observation can overturn assumptions',
    ],
    aboutAuthor:
      'Maria Montessori was among the first women in Italy to qualify as a physician. She spent the rest of her life training teachers around the world.',
    cover: { bg: '#f2d9d0', ink: '#2f2320', accent: '#d1495b', motif: 'ziggurat' },
    ideas: [
      {
        title: 'The Children\'s House',
        body: [
          'Montessori had worked with children then described as mentally deficient, and found that with the right materials they could pass the ordinary school examinations. She wondered what was holding the other children back.',
          'In 1907 she was asked to look after some sixty children, aged three to six, in a housing project in the San Lorenzo slum. She called it the Children\'s House, and made the furniture their size.',
        ],
      },
      {
        title: 'Liberty within limits',
        body: [
          'In an ordinary school of the time, children sat pinned to benches. Montessori let them move about and choose their own work. To her surprise they did not run wild. They became absorbed.',
          'Discipline, she concluded, must come through liberty. A child who is silent and still because he has been forced to be is not disciplined but annihilated. Freedom ends only where it harms others or is plainly rude.',
        ],
      },
      {
        title: 'Materials that teach',
        body: [
          'The classroom is a prepared environment with a place for everything. The materials isolate one quality at a time: a set of cylinders that fit only into their own holes, or cubes that build a tower from largest to smallest.',
          'They are self-correcting. If the child makes a mistake, a cylinder is left over and the error is obvious. No adult needs to point it out, so the child keeps trying without shame.',
        ],
      },
      {
        title: 'Help me to do it myself',
        body: [
          'Much of the day is spent on the exercises of practical life: washing hands, buttoning, sweeping, laying the table and serving one another at lunch. The children love them.',
          'Montessori warns that every useless aid arrests development. An adult who dresses a child who could dress himself is not serving him but getting in his way. The teacher\'s role is to observe, present a material and step back.',
        ],
      },
      {
        title: 'The explosion into writing',
        body: [
          'The children traced letters cut from sandpaper with their fingers, learning the shape and the sound together. One day a boy took a piece of chalk and began to write words on the floor, shouting that he could write.',
          'Others followed within days. They had not been taught to write in the usual sense. Montessori also found that the children were indifferent to prizes and punishments, and gave them up. Critics have called the method rigid, and it has spread worldwide.',
        ],
      },
    ],
    takeaway:
      'Children have a powerful urge to master the world for themselves. Give them an orderly environment, the right tools and freedom to choose, then watch before you intervene and never do for a child what they can do alone.',
  },
  {
    id: 'democracy-and-education',
    title: 'Democracy and Education',
    author: 'John Dewey',
    year: '1916',
    category: 'education',
    tagline: 'Education is not preparation for life. It is life itself.',
    about:
      'America\'s leading philosopher argues that schools exist not to pour facts into passive pupils but to help young people grow through shared, meaningful activity. A democratic society, he says, needs exactly that kind of education to survive.',
    whoFor: [
      'Teachers, school leaders and policy makers',
      'Parents wondering what school is for',
      'Anyone interested in the link between learning and citizenship',
    ],
    aboutAuthor:
      'John Dewey was an American philosopher, psychologist and reformer who taught at Chicago and Columbia and founded an experimental school to test his ideas.',
    cover: { bg: '#254441', ink: '#f1ecda', accent: '#ff6f59', motif: 'loops' },
    ideas: [
      {
        title: 'Education is growth',
        body: [
          'Every society must pass on its knowledge and values or it dies with its members. Education is that renewal. But Dewey rejects the idea that childhood is merely a waiting room for adult life.',
          'Growth is its own end. The purpose of schooling is to ensure that growing continues, and the test of a school is how far it creates a desire for more learning and supplies the means.',
        ],
      },
      {
        title: 'We learn by doing',
        body: [
          'Experience, for Dewey, has two sides. We try something, and we undergo the consequences. Learning is seeing the connection between them. A child who puts a finger in a flame has learned when the act and the pain are linked.',
          'Thinking begins when an activity meets a difficulty. So the school should give pupils something to do, not something to memorize, and the doing should be of a kind that demands thought.',
        ],
      },
      {
        title: 'Democracy is a way of living',
        body: [
          'Dewey insists that democracy is more than a form of government. It is primarily a mode of associated living, of shared experience communicated back and forth.',
          'A society is democratic to the degree that its groups have many interests in common and deal freely with one another. That needs citizens who can think for themselves and adapt to change, and so education must be offered to all, not only to a ruling class.',
        ],
      },
      {
        title: 'Against false oppositions',
        body: [
          'Much of the book attacks divisions that Dewey thinks have crippled education: mind against body, theory against practice, work against leisure, the child against the curriculum.',
          'He is especially concerned about separating academic schooling for some from job training for others. That would turn the school into a tool for fixing people in social classes. Hand and head should be educated together.',
        ],
      },
      {
        title: 'Interest and discipline',
        body: [
          'Traditional teachers relied on discipline and progressive ones on interest. Dewey argues that the two belong together. To be interested in something is to be willing to work at it through difficulty.',
          'Aims cannot be imposed from outside. They must grow from the pupil\'s own activity, with the teacher as guide. Some followers took this as permission to let children do as they pleased, and Dewey later wrote to correct them.',
        ],
      },
    ],
    takeaway:
      'School should be a small community where young people solve real problems together. People learn by acting and reflecting on the results, and a democracy depends on citizens formed in that way.',
  },
  {
    id: 'how-we-think',
    title: 'How We Think',
    author: 'John Dewey',
    year: '1910',
    category: 'education',
    tagline: 'A clear account of what real thinking is and how to train it.',
    about:
      'Written for teachers, this short book analyzes what happens when a person actually thinks something through. Dewey distinguishes reflective thought from daydreaming and from belief on authority, and shows how schools can cultivate it.',
    whoFor: [
      'Teachers who want pupils to think and not just remember',
      'Students and professionals who want to reason more carefully',
      'Anyone interested in the origins of critical thinking',
    ],
    aboutAuthor:
      'John Dewey was an American philosopher and educator, a leading figure in pragmatism and in the reform of schooling.',
    cover: { bg: '#f0e6cf', ink: '#262626', accent: '#3a6ea5', motif: 'gap' },
    ideas: [
      {
        title: 'What counts as thinking',
        body: [
          'We use the word think loosely. It can mean whatever drifts through the head, or simply to believe something we were told. Dewey reserves it for something more demanding.',
          'Reflective thought, he says, is active, persistent and careful consideration of any belief in the light of the grounds that support it and the conclusions to which it leads.',
        ],
      },
      {
        title: 'It starts with a fork in the road',
        body: [
          'People do not think when everything is going smoothly. Thinking begins in what Dewey calls a forked-road situation, where something is puzzling and there is more than one way to go.',
          'He gives a homely example. A man walking on a warm day notices that the air has turned cool. He looks up, sees a dark cloud and quickens his pace. The feeling suggested rain, and he checked the suggestion against the sky.',
        ],
      },
      {
        title: 'Five steps',
        body: [
          'Dewey breaks a complete act of thought into five phases. A difficulty is felt. It is located and defined. A possible solution suggests itself.',
          'The idea is then developed by reasoning about what would follow if it were true. Finally it is tested by further observation or experiment and accepted or rejected. The steps often overlap, but the pattern is that of scientific inquiry.',
        ],
      },
      {
        title: 'Suspended judgment',
        body: [
          'The easiest thing is to accept the first suggestion that comes to mind, and so end the discomfort of doubt. The essence of good thinking is to hold the conclusion back while the inquiry goes on.',
          'This is unpleasant, and it must be trained. Dewey says the trained mind is one that knows how much observing, forming of ideas and testing each particular case requires.',
        ],
      },
      {
        title: 'What schools should do',
        body: [
          'Children are born curious, full of questions and eager to experiment. Dewey thinks conventional schooling often dulls these powers by demanding the recitation of facts.',
          'The remedy is to give pupils real problems arising from their own activity, enough information to work on them and responsibility for testing their ideas. Play and work, properly understood, both serve the purpose.',
        ],
      },
    ],
    takeaway:
      'Thinking means staying with a question: defining it, generating possible answers, working out their consequences and checking them against the facts before you decide. That habit can be taught, and it starts with real problems.',
  },
  {
    id: 'the-aims-of-education',
    title: 'The Aims of Education',
    author: 'Alfred North Whitehead',
    year: '1929',
    category: 'education',
    tagline: 'Against inert ideas: a philosopher\'s brilliant attack on dead knowledge.',
    about:
      'In a set of essays and addresses, the mathematician and philosopher Whitehead argues that most schooling fills minds with facts that are never used. Real education, he says, makes knowledge live by connecting it and putting it to work.',
    whoFor: [
      'Teachers and curriculum designers',
      'University students and lecturers',
      'Anyone who was bored at school and wants to know why',
    ],
    aboutAuthor:
      'Alfred North Whitehead was an English mathematician and philosopher, co-author of Principia Mathematica, who taught at Cambridge, London and Harvard.',
    cover: { bg: '#1e2a3a', ink: '#f3eedc', accent: '#f2c14e', motif: 'bolt' },
    ideas: [
      {
        title: 'The danger of inert ideas',
        body: [
          'Whitehead names the enemy on his first page. Inert ideas are ideas merely received into the mind without being used, tested or thrown into fresh combinations.',
          'Education overloaded with them is not only useless, he says. It is, above all things, harmful. A merely well-informed person is the most useless bore on earth. What matters is knowledge that has become active in thought.',
        ],
      },
      {
        title: 'Two commandments',
        body: [
          'From this follow two rules. Do not teach too many subjects. And what you teach, teach thoroughly.',
          'Let the main ideas introduced to a child be few and important, and let them be combined in every possible way. The child should make them their own and understand how they apply here and now in the circumstances of real life.',
        ],
      },
      {
        title: 'The rhythm of learning',
        body: [
          'Whitehead holds that learning moves through three stages. First comes romance, when a subject is fresh and exciting and half-glimpsed possibilities draw the learner on.',
          'Then precision, when exact knowledge and technique are acquired. Then generalization, when the technique is used freely on new problems. The great mistake of schools is to begin with precision, before any romance has made the pupil want it.',
        ],
      },
      {
        title: 'Culture and expertise together',
        body: [
          'Culture, he writes, is activity of thought and receptiveness to beauty and humane feeling. Scraps of information have nothing to do with it. Education should produce people with both culture and expert knowledge in some direction.',
          'Each needs the other. He adds that the finest fruit of education is a sense of style, an admiration for the direct attainment of a foreseen end without waste. Style, he says, is the ultimate morality of mind.',
        ],
      },
      {
        title: 'Life as the subject',
        body: [
          'There is only one subject matter for education, Whitehead declares, and that is life in all its manifestations. Dividing it into disconnected subjects kills it.',
          'The same holds for universities. Their justification is that they keep the connection between knowledge and the zest of life, by uniting young and old in the imaginative consideration of learning. The present, he reminds teachers, is holy ground.',
        ],
      },
    ],
    takeaway:
      'Teach fewer things, teach them deeply and make sure they are used. Begin with wonder, add rigor when it is wanted and end with application, so that what is learned stays alive.',
  },
  {
    id: 'talks-to-teachers-on-psychology',
    title: 'Talks to Teachers on Psychology',
    author: 'William James',
    year: '1899',
    category: 'education',
    tagline: 'What a great psychologist thought every teacher should know about the mind.',
    about:
      'William James turned his Principles of Psychology into a series of plain lectures for schoolteachers. He covers interest, attention, memory, habit and will, with constant warnings that psychology is a science and teaching is an art.',
    whoFor: [
      'Teachers at every level',
      'Parents and coaches',
      'Anyone who wants to learn more effectively',
    ],
    aboutAuthor:
      'William James was a Harvard philosopher and physician, often called the father of American psychology, and one of the most engaging lecturers of his time.',
    cover: { bg: '#3b3355', ink: '#f2ecdc', accent: '#f6ae2d', motif: 'clock' },
    ideas: [
      {
        title: 'Science does not replace the art',
        body: [
          'James begins by lowering expectations. Teachers should not imagine that psychology will hand them programs and methods ready-made. Teaching is an art, and sciences never generate arts directly out of themselves.',
          'What the science can do is narrow the field of mistakes and give confidence. The first lesson is that a child is a behaving organism. No impression is received, he says, without some reaction, and no reaction should be left out.',
        ],
      },
      {
        title: 'Start from native interests',
        body: [
          'Children arrive with built-in reactions: curiosity, imitation, rivalry, the love of making things, the urge to collect and own. A teacher\'s task is to attach new knowledge to these.',
          'Nothing is interesting in itself. A thing becomes interesting by being connected with something the pupil already cares about. Begin with the native interests, James advises, and offer objects that have some immediate connection with them.',
        ],
      },
      {
        title: 'Attention comes in beats',
        body: [
          'Nobody can hold voluntary attention on one unchanging thing for more than a few seconds. What we call sustained attention is a series of fresh efforts, each bringing the mind back.',
          'The teacher should therefore keep the subject changing and showing new sides. Genius, James remarks, is largely the power of staying on a topic because it keeps developing in the mind, so that attention is held without effort.',
        ],
      },
      {
        title: 'Education is habit',
        body: [
          'James defines education as the organization of acquired habits of conduct and tendencies to behavior. The great thing is to make the nervous system an ally instead of an enemy.',
          'As many useful actions as possible should be made automatic as early as possible. He repeats his maxims: launch a new habit strongly, allow no exception until it is rooted, and act on every resolution at the first opportunity.',
        ],
      },
      {
        title: 'Memory and will',
        body: [
          'A fact is remembered through its associations. The more other facts it is linked to, the more hooks there are to fish it up by. Cramming before an examination forms few links and is soon forgotten. Thinking about what you learn is the real art of memory.',
          'On moral training, James advises teachers not to preach too much. It is better to replace a bad impulse with a good interest than to forbid it. He closes by reminding them that each pupil has an inner life they can never fully see.',
        ],
      },
    ],
    takeaway:
      'Connect new material to what the learner already cares about, keep attention alive with variety, turn good practices into habits and build memory by linking ideas together. Then use your own judgment, because teaching is an art.',
  },
  {
    id: 'the-idea-of-a-university',
    title: 'The Idea of a University',
    author: 'John Henry Newman',
    year: '1852',
    category: 'education',
    tagline: 'The classic defense of education for its own sake.',
    about:
      'Invited to found a Catholic university in Dublin, Newman gave a series of lectures on what a university is for. His answer, that it exists to cultivate the intellect and not merely to train for jobs, remains the reference point for every debate about higher education.',
    whoFor: [
      'Students deciding what to study, and why',
      'Academics and university leaders',
      'Anyone who wonders whether a liberal education is worth it',
    ],
    aboutAuthor:
      'John Henry Newman was an English theologian and one of the great prose writers of the nineteenth century. An Anglican priest who became a Catholic, he was made a cardinal in 1879.',
    cover: { bg: '#4a2434', ink: '#f4ead9', accent: '#d4a84b', motif: 'columns' },
    ideas: [
      {
        title: 'Knowledge is its own end',
        body: [
          'Newman\'s central claim is that knowledge is capable of being its own end. Such is the constitution of the human mind, he says, that any kind of knowledge, if it really is such, is its own reward.',
          'This is what he means by a liberal education. It is not judged by what it produces. It is the cultivation of the intellect as a good in itself, just as health is a good in itself whatever one does with it.',
        ],
      },
      {
        title: 'A place of universal knowledge',
        body: [
          'A university, by its very name, professes to teach universal knowledge. All the branches of learning are connected, because the subject matter of knowledge is one.',
          'If one branch is left out, the others spread to fill the gap and are distorted. Newman\'s own purpose was to argue that theology must be included. The principle applies equally to any subject pushed aside as unprofitable.',
        ],
      },
      {
        title: 'A philosophical habit of mind',
        body: [
          'The fruit of a liberal education is not a stock of facts. It is what Newman calls enlargement: the ability to see many things at once as a whole, to refer each to its place and to understand how they bear on one another.',
          'A habit of mind is formed, he writes, which lasts through life, and whose attributes are freedom, fairness, calmness, moderation and wisdom. Mere reading without this power of digestion leaves a mind stuffed and unimproved.',
        ],
      },
      {
        title: 'Students educate each other',
        body: [
          'Newman makes a startling comparison. Imagine one university that gave degrees for passing examinations, with no teaching and no residence, and another that had no examinations at all and merely brought young people together for three or four years.',
          'He would prefer the second. When many keen and open-hearted young people live together, they are sure to learn from one another. The conversation of all is a series of lectures to each.',
        ],
      },
      {
        title: 'Useful after all, within limits',
        body: [
          'Pressed on usefulness, Newman replies that a cultivated intellect, because it is good in itself, brings power and grace to every work it undertakes. The practical end of a university is training good members of society.',
          'But he is careful not to claim too much. Knowledge is one thing and virtue another. To expect learning to subdue human passion and pride, he says, is like trying to quarry granite with a razor.',
        ],
      },
    ],
    takeaway:
      'The deepest value of higher education is a trained, connected, fair-minded intellect, and that is worth having for its own sake. Jobs follow from it, and character has to be sought elsewhere.',
  },
  {
    id: 'of-the-education-of-children',
    title: 'Of the Education of Children',
    author: 'Michel de Montaigne',
    year: '1580',
    category: 'education',
    tagline: 'Better a well-made head than a well-filled one.',
    about:
      'Asked by a pregnant noblewoman for advice on educating her child, the inventor of the essay wrote one of his best. Montaigne argues for judgment over memory, questioning over authority and gentleness over the whip.',
    whoFor: [
      'Parents and teachers',
      'Students tired of memorizing',
      'Readers who enjoy a wise, conversational voice',
    ],
    aboutAuthor:
      'Michel de Montaigne was a French nobleman, magistrate and mayor of Bordeaux who retired to his tower library and created the personal essay.',
    cover: { bg: '#e9e1cd', ink: '#2a2620', accent: '#a8572b', motif: 'hourglass' },
    ideas: [
      {
        title: 'A well-made head',
        body: [
          'Montaigne\'s first advice concerns the tutor. He would choose one with a well-made head in preference to a well-filled one, and would want both character and understanding valued above mere learning.',
          'The same standard applies to the pupil. We labor only to fill the memory, he complains, and leave the understanding and the conscience empty. The goal is not a learned person but an able and wise one.',
        ],
      },
      {
        title: 'Digest what you learn',
        body: [
          'To know by heart is not to know, Montaigne says. It is merely to keep what has been handed over to the memory. A stomach that returns food as it was swallowed has not done its work.',
          'Bees pillage the flowers here and there, but they then make honey that is entirely their own. In the same way the pupil should transform what is borrowed from others into a judgment that belongs to him.',
        ],
      },
      {
        title: 'Take nothing on authority',
        body: [
          'Let the tutor make the child pass everything through a sieve, and lodge nothing in his head on mere trust. The principles of Aristotle should be no more sacred to him than those of anyone else.',
          'The tutor should also learn to listen. He should have the pupil trot in front of him to judge his pace, and let him speak in his turn. A lesson is tested not by whether it can be repeated but by whether it shows in the pupil\'s life.',
        ],
      },
      {
        title: 'The world is the best book',
        body: [
          'Montaigne wants the child to travel and to talk with people of every kind. A cowherd, a mason and a passing stranger each have something to teach. Mixing with the world rubs and polishes our brains against those of others.',
          'History is valued for the same reason, as a way of keeping company with the great minds of the best ages. The body must be trained along with the mind. It is not a soul or a body we are educating, he says, but a human being.',
        ],
      },
      {
        title: 'Gentleness',
        body: [
          'He is appalled by the schools of his day, which he calls jails for captive youth, loud with the cries of beaten children. Learning ought to be approached with appetite and affection.',
          'He describes his own upbringing. His father had him woken each morning by music, and hired a tutor who spoke to him only in Latin, so that he learned it without tears as his first language.',
        ],
      },
    ],
    takeaway:
      'Train judgment, not memory. Encourage a child to question, to make what they learn their own, to learn from people as well as books, and to find the whole business a pleasure.',
  },
  {
    id: 'letters-to-his-son',
    title: 'Letters to His Son',
    author: 'Lord Chesterfield',
    year: '1774',
    category: 'education',
    tagline: 'A worldly statesman\'s private course in manners, time and getting on with people.',
    about:
      'Over thirty years the Earl of Chesterfield wrote more than four hundred letters to his son, coaching him for a career in diplomacy. Never meant for print, they were published after his death and became a celebrated, and controversial, manual of worldly wisdom.',
    whoFor: [
      'Young people starting out in professional life',
      'Anyone who wants to be more at ease in company',
      'Readers who enjoy sharp advice, taken with a pinch of salt',
    ],
    aboutAuthor:
      'Philip Dormer Stanhope, fourth Earl of Chesterfield, was an English statesman, diplomat and wit, famous in his day for elegance of manner.',
    cover: { bg: '#1f3b4d', ink: '#f3ecdb', accent: '#c9a24a', motif: 'crown' },
    ideas: [
      {
        title: 'Private letters',
        body: [
          'The son, also called Philip, was born outside marriage and could not inherit the title. Chesterfield was determined to equip him to rise by merit, and wrote to him from the age of five.',
          'The early letters teach geography and history. The later ones turn to conduct. They were published by the son\'s widow, which is why they are so frank. Chesterfield is saying what he would never have said in public.',
        ],
      },
      {
        title: 'Know the value of time',
        body: [
          'Know the true value of time, he urges. Snatch, seize and enjoy every moment of it. No idleness, no laziness, no procrastination. Take care of the minutes, and the hours will take care of themselves.',
          'He adds that there is time enough for everything in the day if you do one thing at once, and not enough in a year if you do two things at a time. Whatever is worth doing at all is worth doing well.',
        ],
      },
      {
        title: 'The graces',
        body: [
          'Knowledge without good manners, Chesterfield says, is like a rough diamond: valuable, but shown to no advantage. A person must be pleasing in order to be useful.',
          'His favorite motto is to be gentle in manner and firm in substance. Pay attention to whoever is speaking, never seem cleverer than the company, and wear your learning like your watch, in a private pocket, to be taken out only when someone asks the time.',
        ],
      },
      {
        title: 'Study people',
        body: [
          'Books alone will not do. The world is a book too, and he tells his son to read people with the same care, noting their ruling passion, their vanity and their weak side.',
          'Keep your temper and conceal your feelings when business requires it. Adapt your conversation to the person in front of you. He draws a line, though not always a clear one, between prudent reserve and outright deceit.',
        ],
      },
      {
        title: 'The verdict',
        body: [
          'A famous contemporary said the letters taught the morals of a harlot and the manners of a dancing master. Chesterfield\'s advice on women is cynical, and he often cares more for appearing virtuous than for being so.',
          'The experiment also failed. The son grew up shy and awkward, married in secret and died at thirty-six. What survives is a good deal of shrewd counsel on attention, courtesy and the use of time.',
        ],
      },
    ],
    takeaway:
      'Guard your time, do one thing at once and do it well, and remember that how you treat people decides how far your abilities will carry you. Take the polish and leave the cynicism.',
  },
]
