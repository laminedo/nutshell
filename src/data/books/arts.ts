import type { Book } from '../types'

export const arts: Book[] = [
  {
    id: 'poetics',
    title: 'Poetics',
    author: 'Aristotle',
    year: 'c. 335 BCE',
    category: 'arts',
    tagline: 'The first analysis of how stories work, still used by every screenwriter.',
    about:
      'Aristotle examined the tragedies of the Athenian stage and asked what makes a plot succeed. His brief, dense lecture notes introduced ideas such as the reversal, the recognition and catharsis, and founded the theory of literature.',
    whoFor: [
      'Writers of fiction, plays and screenplays',
      'Anyone who wants to understand why some stories grip us',
      'Readers interested in the foundations of literary criticism',
    ],
    aboutAuthor:
      'Aristotle was a Greek philosopher, a student of Plato and the tutor of Alexander the Great. Only the part of the Poetics dealing with tragedy and epic has survived.',
    cover: { bg: '#3a2a4d', ink: '#f3ebd9', accent: '#e8a33d', motif: 'columns' },
    ideas: [
      {
        title: 'We learn by imitation',
        body: [
          'Aristotle begins with human nature. From childhood we imitate, and it is how we first learn. We also delight in imitations, even of things that would pain us to see in reality.',
          'Poetry, drama, painting and music are all forms of imitation. This answers Plato, who had banished poets from his ideal city as dealers in illusion. For Aristotle, art is a way of understanding.',
        ],
      },
      {
        title: 'Plot comes first',
        body: [
          'Tragedy has six parts: plot, character, thought, language, music and spectacle. The most important is plot, which he calls the soul of tragedy. Character comes second.',
          'A good plot is a whole, with a beginning, a middle and an end, and each event follows from the one before by probability or necessity. An episodic plot, in which things merely happen one after another, is the worst kind.',
        ],
      },
      {
        title: 'Reversal and recognition',
        body: [
          'The most powerful moments in a plot are the reversal, when the action swings round to its opposite, and the recognition, a change from ignorance to knowledge. They are finest when they happen together.',
          'His model is Oedipus. A messenger comes to cheer the king and free him from fear, and by revealing who he is produces the opposite effect. The hero should be neither a saint nor a villain, but a good person who falls through a mistake.',
        ],
      },
      {
        title: 'Catharsis',
        body: [
          'Aristotle defines tragedy as the imitation of a serious and complete action which, through pity and fear, brings about the catharsis of such emotions.',
          'He does not explain the word, and scholars have argued about it ever since. It may mean a purging or a clarifying. Either way, the claim is that watching terrible events on a stage does us good and leaves us lighter.',
        ],
      },
      {
        title: 'Poetry is truer than history',
        body: [
          'The historian tells what happened and the poet what might happen. Poetry is therefore more philosophical than history, because it deals with universal patterns in human conduct.',
          'From this comes a practical rule that writers still quote: a probable impossibility is preferable to an improbable possibility. He also objects to endings that depend on a god lowered by a crane. The resolution should come from the story itself.',
        ],
      },
    ],
    takeaway:
      'A story works when its events grow out of one another, turn at the right moment and bring a character to a truth they did not want to know. Structure, Aristotle teaches, is what releases emotion.',
  },
  {
    id: 'the-elements-of-style',
    title: 'The Elements of Style',
    author: 'William Strunk Jr.',
    year: '1918',
    category: 'arts',
    tagline: 'Omit needless words: the little book that taught America to write.',
    about:
      'A Cornell professor had forty-three pages printed privately for his English students. His rules for plain, forceful prose became famous decades later when a former pupil revised them. This summary covers Strunk\'s original edition.',
    whoFor: [
      'Anyone who writes emails, reports or essays',
      'Students',
      'Writers who want to tighten their prose',
    ],
    aboutAuthor:
      'William Strunk Junior taught English at Cornell University for forty-six years. His student E. B. White later expanded the book into the version most readers know.',
    cover: { bg: '#f4efe2', ink: '#1c1c1c', accent: '#c1272d', motif: 'dots' },
    ideas: [
      {
        title: 'The little book',
        body: [
          'Strunk called his manual the little book, with an ironic stress on the first word. Its aim, he said, was to lighten the task of teacher and student by concentrating attention on a few essentials.',
          'He gives rules of usage and principles of composition, each stated as a command and followed by examples of the wrong and the right way. The manner is brisk and confident, like the prose he recommends.',
        ],
      },
      {
        title: 'Omit needless words',
        body: [
          'The most famous rule deserves his own words. Vigorous writing is concise. A sentence should contain no unnecessary words and a paragraph no unnecessary sentences, for the same reason that a drawing should have no unnecessary lines.',
          'This does not mean every sentence must be short or that detail should be avoided. It means that every word should tell. The fact that becomes because, and he is a man who becomes he.',
        ],
      },
      {
        title: 'Be active, positive and definite',
        body: [
          'Use the active voice, which is usually more direct and vigorous than the passive. I shall always remember my first visit beats my first visit will always be remembered by me.',
          'Put statements in positive form. He usually came late is better than he was not very often on time. And prefer the specific to the general: it rained every day for a week tells more than a period of unfavorable weather set in.',
        ],
      },
      {
        title: 'Build in paragraphs',
        body: [
          'Strunk treats the paragraph as the unit of composition, with one paragraph to each topic. As a rule it should begin with a sentence that states the topic, so the reader knows where they are.',
          'Within the sentence, keep related words together and express parallel ideas in parallel form. Place the words you want to emphasize at the end, which is the most prominent position.',
        ],
      },
      {
        title: 'Rules as habits',
        body: [
          'The usage rules are few. Put a comma after each item in a series except the last. Do not join two complete sentences with a comma. Make sure a participle at the start of a sentence refers to its subject.',
          'Linguists have pointed out that some of the advice is too rigid and that Strunk breaks his own rules. He admitted that the best writers sometimes disregard them. The rules are best taken as habits that make a writer notice what each word is doing.',
        ],
      },
    ],
    takeaway:
      'Say what you mean in as few words as will do the job. Prefer active verbs, positive statements and concrete detail, give each paragraph one job, and treat every word as something that must earn its place.',
  },
  {
    id: 'letters-to-a-young-poet',
    title: 'Letters to a Young Poet',
    author: 'Rainer Maria Rilke',
    year: '1929',
    category: 'arts',
    tagline: 'Ten letters on solitude, patience and whether you must create.',
    about:
      'A nineteen-year-old military cadet sent his poems to Rilke and asked whether they were any good. Rilke, only twenty-seven himself, declined to judge them and wrote instead about how to live as an artist. The letters have guided creative people ever since.',
    whoFor: [
      'Writers, artists and anyone starting creative work',
      'People going through a lonely or uncertain time',
      'Readers who want counsel that does not hurry them',
    ],
    aboutAuthor:
      'Rainer Maria Rilke was an Austrian poet born in Prague, among the greatest writers in the German language. The letters were published three years after his death.',
    cover: { bg: '#23344a', ink: '#f2ecdc', accent: '#e9a6a6', motif: 'horizon' },
    ideas: [
      {
        title: 'Go into yourself',
        body: [
          'Rilke begins by refusing the question he was asked. No one can advise or help you, he writes. You are looking outward, and that above all you should not do.',
          'There is only one way. Go into yourself and ask, in the stillest hour of your night, whether you must write. If the answer is yes, then build your whole life around that necessity. If you could live without writing, you should not attempt it.',
        ],
      },
      {
        title: 'Love your solitude',
        body: [
          'The necessary thing, he says, is solitude, a great inner solitude. To walk inside yourself and meet no one for hours is what you must be able to attain.',
          'He does not pretend this is comfortable. But he urges the young man to trust what is difficult and to draw on his own childhood and daily life for his subjects. If your everyday life seems poor, do not blame it. Blame yourself for not being poet enough to call up its riches.',
        ],
      },
      {
        title: 'Live the questions',
        body: [
          'In the most quoted passage, Rilke begs his correspondent to be patient toward all that is unsolved in his heart and to try to love the questions themselves, like locked rooms or books written in a foreign tongue.',
          'Do not search now for the answers, which could not be given to you because you would not be able to live them. Live the questions now. Perhaps, some distant day, you will gradually live your way into the answer without noticing.',
        ],
      },
      {
        title: 'Love is difficult work',
        body: [
          'Rilke takes love as seriously as art. For one human being to love another, he writes, is perhaps the most difficult of all our tasks, the work for which all other work is only preparation.',
          'Young people throw themselves at each other too soon. Real love does not mean merging. It consists in this, that two solitudes protect and border and greet each other.',
        ],
      },
      {
        title: 'Trust sadness',
        body: [
          'When a great sadness comes, Rilke suggests, it may be a moment when something new has entered us. We are in transition and cannot yet stand still, and so we are afraid.',
          'He asks his reader not to be frightened by what seems strange. Perhaps all the dragons in our lives are princesses, waiting to see us act just once with beauty and courage. He also advises reading little criticism, which rarely touches a work of art.',
        ],
      },
    ],
    takeaway:
      'Do not look to others to tell you whether your work, or your life, is justified. Ask yourself honestly what you must do, accept the solitude it requires, be patient with what is unresolved and trust what is hard.',
  },
  {
    id: 'what-is-art',
    title: 'What Is Art?',
    author: 'Leo Tolstoy',
    year: '1897',
    category: 'arts',
    tagline: 'A great novelist decides that most celebrated art, including his own, is not art at all.',
    about:
      'After fifteen years of thought, Tolstoy rejected the idea that art is about beauty. Art, he argued, is the passing of a sincere feeling from one person to another. By that test he condemned much of the Western canon, with startling results.',
    whoFor: [
      'Artists and writers questioning the purpose of their work',
      'Readers who feel intimidated by high culture',
      'Anyone who enjoys a radical argument, even one that goes too far',
    ],
    aboutAuthor:
      'Count Leo Tolstoy was the author of War and Peace and Anna Karenina. In later life he became a moral and religious teacher and renounced most of his earlier writing.',
    cover: { bg: '#5c2b1e', ink: '#f6ecd8', accent: '#e9c46a', motif: 'sun' },
    ideas: [
      {
        title: 'What is all this for?',
        body: [
          'Tolstoy opens at the rehearsal of an opera. Hundreds of people have labored for months, and the conductor screams abuse at the singers. Vast sums and whole lives are consumed by the arts.',
          'If such sacrifices are demanded, he says, we had better be sure what art is and whether it is worth it. When he looks for an answer he finds that the experts disagree completely.',
        ],
      },
      {
        title: 'Not beauty, not pleasure',
        body: [
          'Most theories say that art is the creation of beauty. Tolstoy goes through dozens of definitions of beauty and concludes that they amount to this: beauty is what pleases us.',
          'But that is like saying the purpose of food is the pleasure of eating. And whose pleasure? In practice it means the taste of a small, wealthy class. Such a definition cannot tell real art from counterfeit.',
        ],
      },
      {
        title: 'Art is infection',
        body: [
          'His own definition is simple. A person has experienced a feeling and, by means of movements, lines, colors, sounds or words, hands it on so that others are infected by the same feeling and live through it.',
          'Art is therefore a means of union among people, as necessary as speech. A boy who tells of meeting a wolf so that his listeners feel his fear is making art. A technically brilliant work that conveys no feeling is not.',
        ],
      },
      {
        title: 'The test of sincerity',
        body: [
          'How infectious a work is depends on three things: how individual the feeling is, how clearly it is expressed and, above all, the sincerity of the artist. Did he feel compelled to express it, or is he manufacturing an effect?',
          'Tolstoy adds a second test, of content. The best art conveys either feelings flowing from the love of God and neighbor, or the simple feelings of common life that every person can share.',
        ],
      },
      {
        title: 'The verdicts',
        body: [
          'He applies the tests without mercy. Much of Beethoven, Wagner, Baudelaire and the painters of his day fails, as counterfeit art made for an idle class by borrowing, imitating and striking effects.',
          'He condemns his own great novels and spares only two of his short tales. He praises folk songs, parables and writers such as Dickens and Hugo. The conclusions are extreme, but his question, whether a work is felt or merely made, is hard to forget.',
        ],
      },
    ],
    takeaway:
      'Tolstoy asks of any work one question: does it honestly pass on something the artist truly felt, in a way ordinary people can share? You may reject his verdicts and still find that test worth keeping.',
  },
  {
    id: 'the-art-spirit',
    title: 'The Art Spirit',
    author: 'Robert Henri',
    year: '1923',
    category: 'arts',
    tagline: 'A beloved teacher\'s notes on painting, seeing and living fully.',
    about:
      'Robert Henri was the most inspiring art teacher in America, and a former student gathered his classroom talks, letters and criticisms into this book. It is less a manual of technique than an invitation to treat all of life as creative work.',
    whoFor: [
      'Painters and art students',
      'Creative people in any field who need encouragement',
      'Anyone who wants to look at the world more attentively',
    ],
    aboutAuthor:
      'Robert Henri was an American painter and leader of the Ashcan School, which painted the everyday life of New York. His students included Edward Hopper and George Bellows.',
    cover: { bg: '#1f1f1f', ink: '#f2ebdb', accent: '#e4572e', motif: 'bolt' },
    ideas: [
      {
        title: 'Art is a way of living',
        body: [
          'Henri\'s first claim is that art, when really understood, is the province of every human being. It is simply a question of doing things, anything, well. It is not an outside, extra thing.',
          'When the artist is alive in any person, whatever their work, they become an inventive, searching, daring creature. They disturb and enlighten, and open ways for better understanding.',
        ],
      },
      {
        title: 'The state that makes art inevitable',
        body: [
          'The object of painting a picture, Henri says, is not to make a picture, however unreasonable that sounds. The object is the attainment of a state of being, a more than ordinary moment of existence.',
          'The picture is a by-product and a trace of that state. So the student should paint what genuinely moves them, from their own street and their own time, and not what they believe a painting ought to be about.',
        ],
      },
      {
        title: 'Feeling before technique',
        body: [
          'Technique matters only as the means of saying something. A student who collects methods with nothing to express is like a person with a large vocabulary and no thoughts.',
          'Henri urges his class to know what they want to say about a subject before they touch the canvas. Every stroke should carry that idea. A brushstroke, he warns, can make a picture or kill it.',
        ],
      },
      {
        title: 'See the whole',
        body: [
          'He teaches students to grasp the large masses and the main gesture first, and to let detail come later or not at all. A good exercise is to study the model, then turn away and draw from memory.',
          'Memory keeps what was essential and drops the rest. A work is finished, he says, when the idea has been expressed, not when every inch has been polished.',
        ],
      },
      {
        title: 'Be yourself, intensely',
        body: [
          'Do not imitate, Henri tells them, and do not worry about juries or rejections. The work most worth doing is the work only you would do. Education, in the end, is self-education.',
          'He wants students to stay curious, to go about with a sketchbook like hunters, and to recognize kindred spirits in the art of every people and period. Whatever you do, he says, do it with all your might.',
        ],
      },
    ],
    takeaway:
      'Make things in order to be more alive, not to produce objects or win approval. Know what you feel, say it directly with whatever skill you have, and bring that same attention to everything else you do.',
  },
  {
    id: 'concerning-the-spiritual-in-art',
    title: 'Concerning the Spiritual in Art',
    author: 'Wassily Kandinsky',
    year: '1911',
    category: 'arts',
    tagline: 'The manifesto of abstract painting, by the artist who got there first.',
    about:
      'On the eve of painting his first fully abstract pictures, Kandinsky wrote a short book explaining why art should turn away from the visible world. He argued that color and form act directly on the soul, as music does.',
    whoFor: [
      'Anyone puzzled by abstract art',
      'Painters and designers interested in color',
      'Readers who sense a link between music and visual art',
    ],
    aboutAuthor:
      'Wassily Kandinsky was a Russian painter who abandoned a career in law at thirty to study art in Munich. He later taught at the Bauhaus.',
    cover: { bg: '#f4d35e', ink: '#1b1b3a', accent: '#d7263d', motif: 'loops' },
    ideas: [
      {
        title: 'Art against materialism',
        body: [
          'Every work of art, Kandinsky begins, is the child of its age. His own age seemed to him sunk in materialism, valuing only what can be weighed and measured.',
          'He pictures the spiritual life of humanity as a great triangle moving slowly upward. At its tip stands a lonely figure, the true artist, whose vision is at first met with scorn and later becomes the common understanding.',
        ],
      },
      {
        title: 'Inner necessity',
        body: [
          'The one law of art, for Kandinsky, is what he calls inner necessity. An artist must use whatever forms the inner impulse demands, and no others. The question is never whether a form copies nature, only whether it is needed.',
          'That necessity has three sources: the artist\'s own personality, the spirit of the age, and something timeless that belongs to art in every period. Form without inner content is a hand without a body.',
        ],
      },
      {
        title: 'What colors do',
        body: [
          'Kandinsky describes the effect of each color with great precision. Yellow is warm, advances toward the viewer and is earthly and restless, like the blast of a trumpet. Blue retreats, turns inward and calls toward the infinite.',
          'Green is the most restful, complacent and passive. White is a silence full of possibilities, like the pause before a beginning. Black is a silence with no future, like the pause after an ending.',
        ],
      },
      {
        title: 'Painting as music',
        body: [
          'Music, he observes, has for centuries expressed the inner life without imitating anything in the outer world. Painting should envy it and learn from it.',
          'Color is the keyboard, he writes, the eyes are the hammers and the soul is the piano with many strings. The artist is the hand that plays, touching one key or another to set the soul vibrating.',
        ],
      },
      {
        title: 'Toward abstraction',
        body: [
          'If color and form can move us by themselves, the recognizable object becomes unnecessary and may even get in the way. Kandinsky moves cautiously toward that conclusion.',
          'He warns of a danger. Shapes with no inner meaning would be mere decoration, like a necktie or a carpet. He names his own works impressions, improvisations and compositions, borrowing the last two terms from music.',
        ],
      },
    ],
    takeaway:
      'A painting need not show anything to mean something. Kandinsky argues that color and shape speak directly to feeling, and that an artist\'s only obligation is to what genuinely demands to be expressed.',
  },
  {
    id: 'the-notebooks-of-leonardo-da-vinci',
    title: 'The Notebooks of Leonardo da Vinci',
    author: 'Leonardo da Vinci',
    year: 'c. 1510',
    category: 'arts',
    tagline: 'Seven thousand pages from the most curious mind that ever lived.',
    about:
      'Leonardo never published a book. He filled notebooks, in mirror writing, with observations on painting, anatomy, water, flight and machines, alongside shopping lists and jokes. Together they show how he thought, and what a habit of constant questioning can produce.',
    whoFor: [
      'Artists, engineers and anyone who works across disciplines',
      'People who want to become more observant',
      'Admirers of Leonardo who want to hear his own voice',
    ],
    aboutAuthor:
      'Leonardo da Vinci was an Italian painter, engineer and scientist of the Renaissance, the creator of the Mona Lisa and The Last Supper.',
    cover: { bg: '#d9c7a3', ink: '#2e2416', accent: '#7a3e1d', motif: 'rings' },
    ideas: [
      {
        title: 'A private laboratory on paper',
        body: [
          'More than seven thousand pages survive, perhaps a quarter of what he wrote. He was left-handed and wrote from right to left, so the text reads normally in a mirror.',
          'Nothing is in order. A study of a horse\'s leg sits beside a geometry problem, a design for a canal lock and a note of money lent. He planned treatises on many subjects and finished none.',
        ],
      },
      {
        title: 'Experience is the teacher',
        body: [
          'Leonardo had little formal schooling and called himself an unlettered man. He turned it into a creed. Those who merely quote other authors, he wrote, are puffed up with borrowed learning. His own mistress was experience.',
          'He insists on repeating an experiment several times before trusting it. Yet he also demands theory. Whoever loves practice without science is like a sailor who boards a ship without a rudder or compass.',
        ],
      },
      {
        title: 'Knowing how to see',
        body: [
          'For Leonardo, painting is a science based on sight. The painter must study how light falls on a sphere, how shadows take on color, and why distant hills look blue and blurred.',
          'He advises young artists to carry a small notebook and sketch the gestures of people arguing or laughing in the street. He even recommends staring at stains on a wall, in which the mind will discover landscapes and battles.',
        ],
      },
      {
        title: 'Everything connects',
        body: [
          'He dissected some thirty human bodies and drew the heart, the muscles and a child in the womb with an accuracy unmatched for centuries.',
          'He kept noticing likenesses. The curl of flowing water resembles the curl of hair. The branching of rivers resembles that of blood vessels and of trees. From the flight of birds he reasoned toward machines that might carry a man.',
        ],
      },
      {
        title: 'Curiosity without end',
        body: [
          'His reminders to himself are the most endearing pages. Describe the tongue of the woodpecker. Ask the master of arithmetic how to square a triangle. Find out how they run on the ice in Flanders.',
          'The cost was that he finished very little, and he seems to have known it. Tell me, he scribbled again and again, if anything was ever done. Still, he left this thought: as a well-spent day brings happy sleep, so a life well used brings a happy death.',
        ],
      },
    ],
    takeaway:
      'Carry a notebook, look harder than other people do, ask questions about everything and test the answers yourself. Leonardo\'s genius was largely an unending habit of curiosity, written down.',
  },
  {
    id: 'lives-of-the-artists',
    title: 'Lives of the Artists',
    author: 'Giorgio Vasari',
    year: '1550',
    category: 'arts',
    tagline: 'The first history of art, full of rivalry, gossip and the invention of the Renaissance.',
    about:
      'A painter and architect in Medici Florence wrote the biographies of some two hundred Italian artists, from Giotto to Michelangelo. Vasari gave us the idea of the Renaissance as a rebirth, and most of the stories still told about its masters.',
    whoFor: [
      'Lovers of Italian art and travelers to Florence and Rome',
      'Readers who enjoy biography and anecdote',
      'Anyone interested in how reputations are made',
    ],
    aboutAuthor:
      'Giorgio Vasari was an Italian painter, architect and writer who designed the Uffizi in Florence and founded one of the first academies of art.',
    cover: { bg: '#7a2e2e', ink: '#f5ebd6', accent: '#e3b23c', motif: 'door' },
    ideas: [
      {
        title: 'The first art historian',
        body: [
          'Before Vasari, artists were craftsmen whose lives were not thought worth recording. He traveled through Italy collecting documents, looking at works and questioning people who had known the masters.',
          'His book made the artist a hero. It also introduced the notion that the arts had died with ancient Rome and been reborn in Tuscany, which is where our word Renaissance comes from.',
        ],
      },
      {
        title: 'Three ages of progress',
        body: [
          'Vasari arranges the lives as a story of improvement. In the first age, Cimabue and then Giotto break away from the stiff old manner. When a pope asks for a sample of his skill, Giotto is said to have drawn a perfect circle freehand.',
          'In the second age, Brunelleschi, Donatello and Masaccio master perspective and anatomy. The third age brings perfection with Leonardo, Raphael and, above all, Michelangelo.',
        ],
      },
      {
        title: 'Drawing is the foundation',
        body: [
          'The key to this progress, for Vasari, is disegno, a word that means both drawing and design. It is the father of painting, sculpture and architecture, the ability to give form to an idea.',
          'He was a Florentine and it shows. He admires the Venetian painters for their color and regrets that Titian did not learn to draw properly. Later critics have enjoyed disagreeing.',
        ],
      },
      {
        title: 'Stories that reveal character',
        body: [
          'Vasari loves an anecdote. Brunelleschi wins the commission for the cathedral dome by challenging his rivals to stand an egg on end, then cracking its base on the table.',
          'Leonardo buys caged birds in the market to set them free. An overlooked young Michelangelo creeps into a church at night to carve his name on his statue. One painter is so absorbed in perspective that he will not come to bed.',
        ],
      },
      {
        title: 'Unreliable and indispensable',
        body: [
          'Some of the stories are plainly invented. Vasari accuses one painter of murdering a rival who in fact outlived him. His dates are often wrong and his loyalties obvious.',
          'Yet without him we would know almost nothing about many of these people. He also fixed an idea that still shapes how we think: that an artist is not just a maker of objects but an individual genius with a life worth telling.',
        ],
      },
    ],
    takeaway:
      'Art has a history, and it is made by particular people with rivalries, obsessions and luck. Vasari teaches us to look at who made a work and when, while reminding us to check a good story.',
  },
  {
    id: 'the-philosophy-of-composition',
    title: 'The Philosophy of Composition',
    author: 'Edgar Allan Poe',
    year: '1846',
    category: 'arts',
    tagline: 'Poe claims he wrote "The Raven" like a mathematical proof.',
    about:
      'A year after the poem made him famous, Poe published an essay explaining, step by step, how he had constructed it. He insists that nothing was left to inspiration. Whether or not that is true, it is a brilliant lesson in deliberate design.',
    whoFor: [
      'Writers and poets',
      'Designers and anyone who plans creative work backward from its effect',
      'Fans of Poe',
    ],
    aboutAuthor:
      'Edgar Allan Poe was an American poet, critic and writer of tales who helped to invent the detective story and the modern horror story.',
    cover: { bg: '#15151c', ink: '#eeeae0', accent: '#7d5ba6', motif: 'tree' },
    ideas: [
      {
        title: 'No accident, no intuition',
        body: [
          'Most writers, Poe says, like it to be thought that they compose in a kind of fine frenzy. They would shudder at letting the public peep behind the scenes at the false starts and discarded ideas.',
          'He proposes to do exactly that for his own best-known poem. No point in it, he claims, is due to accident or intuition. The work went forward step by step with the precision of a mathematical problem.',
        ],
      },
      {
        title: 'Begin with the effect and the end',
        body: [
          'A writer should start by choosing the effect to be produced on the reader, and only then look for the incidents and tone that will produce it.',
          'It follows that the ending must be known first. Only with the conclusion constantly in view can every earlier part be made to lead toward it. Poe says he wrote the climactic stanza of the poem before any other.',
        ],
      },
      {
        title: 'Short enough for one sitting',
        body: [
          'If a work is too long to be read at a single sitting, the affairs of the world interfere and the unity of impression is lost. A long poem, Poe argues, is really a string of short ones.',
          'He therefore decided on a length of about a hundred lines. The finished poem has a hundred and eight. The principle applies equally to his short stories.',
        ],
      },
      {
        title: 'Beauty, sadness and a refrain',
        body: [
          'The proper province of a poem, he says, is beauty, and the tone in which beauty shows itself most intensely is sadness. Asking what is the most melancholy of subjects, he answers death, and most poetically the death of a beautiful woman.',
          'He wanted a refrain of a single word with a long, sonorous sound, and hit on nevermore. A human being would not repeat one word endlessly, so he needed a creature without reason. He first thought of a parrot, then chose a raven.',
        ],
      },
      {
        title: 'Did he really write it that way?',
        body: [
          'The remaining choices follow the same logic: a bereaved lover as the speaker, a closed room at midnight, questions that grow more desperate so that the same answer cuts deeper each time.',
          'Many readers suspect the essay is partly a performance, tidier than any real process. Even so, its lesson has outlived the doubt. Good work is designed, and inspiration is no excuse for avoiding thought.',
        ],
      },
    ],
    takeaway:
      'Decide what you want your audience to feel, know your ending, keep the piece short enough to hold together, and choose every element because it serves the effect. Craft can be reasoned about.',
  },
  {
    id: 'the-decay-of-lying',
    title: 'The Decay of Lying',
    author: 'Oscar Wilde',
    year: '1889',
    category: 'arts',
    tagline: 'Life imitates art far more than art imitates life.',
    about:
      'In a sparkling dialogue set in a country house library, Wilde attacks the realism of his day and defends imagination, invention and beautiful untruth. Behind the paradoxes is a serious idea about how art shapes what we see.',
    whoFor: [
      'Readers who love wit and paradox',
      'Artists impatient with the demand to be realistic',
      'Anyone curious how culture trains our perception',
    ],
    aboutAuthor:
      'Oscar Wilde was an Irish playwright, novelist and critic, celebrated for his comedies and his conversation. He named the two speakers of this dialogue after his sons.',
    cover: { bg: '#184a45', ink: '#f4eedb', accent: '#f2a7c3', motif: 'waves' },
    ideas: [
      {
        title: 'A lament for the liar',
        body: [
          'Vivian is writing an article called The Decay of Lying and reads it to his friend Cyril, who would sooner go and sit on the grass. Vivian replies that nature is uncomfortable, and that grass is hard and lumpy and full of insects.',
          'By lying he means the telling of beautiful untrue things: imagination. His complaint is that modern novelists have become dull because they insist on facts, document everything and invent nothing.',
        ],
      },
      {
        title: 'Art expresses only itself',
        body: [
          'The first doctrine of his new aesthetics is that art never expresses anything but itself. It has an independent life, as thought has, and develops purely along its own lines.',
          'It is not a mirror of its age. The art of a period, he argues, tells us about the art of that period and very little about how people actually lived. To look to art for history or for morals is to mistake its nature.',
        ],
      },
      {
        title: 'Nature and life make poor models',
        body: [
          'The second doctrine is that all bad art comes from returning to life and nature and raising them into ideals. They may be used as rough material, but must be transformed.',
          'Nature, Vivian says, has good intentions but cannot carry them out. The moment art gives up its imaginative medium and tries to copy, it surrenders everything.',
        ],
      },
      {
        title: 'Life imitates art',
        body: [
          'The third doctrine is the famous one. Life imitates art far more than art imitates life. A great artist invents a type, and life tries to copy it.',
          'Where, if not from the Impressionists, do we get those wonderful brown fogs that come creeping down our streets? There may have been fogs for centuries in London, but no one saw them until art had shown them. Things exist for us because we see them, and what we see depends on the arts that have influenced us.',
        ],
      },
      {
        title: 'The serious point',
        body: [
          'The final revelation, Vivian announces, is that lying, the telling of beautiful untrue things, is the proper aim of art. Then the two friends go out onto the terrace to look at the evening.',
          'Wilde is teasing, and he also means it. Our sense of what a landscape, a lover or a hero looks like comes largely from pictures and stories. Those who make them have more power over reality than the realists suppose.',
        ],
      },
    ],
    takeaway:
      'Art does not copy the world. It teaches us how to see it. Wilde defends imagination against the cult of facts and reminds us that our perceptions are shaped by the stories and images we have absorbed.',
  },
]
