import type { Book } from '../types'

// These are historical works. Each summary notes where the medical advice has dated;
// none of it is a substitute for professional care.
export const health: Book[] = [
  {
    id: 'notes-on-nursing',
    title: 'Notes on Nursing',
    author: 'Florence Nightingale',
    year: '1859',
    category: 'health',
    tagline: 'What it is, and what it is not: the founding text of modern nursing.',
    about:
      'Fresh from reforming military hospitals in the Crimean War, Florence Nightingale wrote this short book for anyone who has charge of another person\'s health. Its plain advice about air, light, quiet and observation changed how the sick are cared for.',
    whoFor: [
      'Anyone caring for a sick relative at home',
      'Nurses and other health workers interested in their profession\'s roots',
      'People who want a healthier home',
    ],
    aboutAuthor:
      'Florence Nightingale was an English nurse, statistician and social reformer. She founded the first secular school of nursing, in London, in 1860.',
    cover: { bg: '#e6eef0', ink: '#1d2d35', accent: '#c0392b', motif: 'sun' },
    ideas: [
      {
        title: 'Nature heals, and nursing helps',
        body: [
          'Nightingale says at the start that the book is not a manual for professionals. Every woman, she writes, has at some time charge of somebody\'s health, and these are hints for thought.',
          'Her central belief is that nature alone cures. Much of the suffering blamed on a disease is really caused by the lack of fresh air, light, warmth, quiet, cleanliness or proper food. Nursing means putting the patient in the best condition for nature to act.',
        ],
      },
      {
        title: 'Air, light and cleanliness',
        body: [
          'The first rule of nursing is to keep the air the patient breathes as pure as the air outside, without chilling them. Open the window, not the door onto a stuffy corridor.',
          'Next she ranks light, and specifically sunlight, which she says the sick need almost as much as air. Then cleanliness of the room, the bedding, the walls and the skin, pure water and good drainage. Dirty carpets and curtains she regards as a danger.',
        ],
      },
      {
        title: 'Noise and the mind',
        body: [
          'Unnecessary noise, she writes, is the cruelest absence of care. A whispered conversation outside the door is worse than a loud one, because the patient strains to hear. Never wake a sick person from their first sleep.',
          'The mind needs tending as well. Patients suffer from seeing the same walls day after day. A few flowers, a view from the window or a change of color does real good. Apprehension and waiting harm them more than any exertion.',
        ],
      },
      {
        title: 'Food and observation',
        body: [
          'Thousands of patients, she claims, are starved in the midst of plenty because no one notices what they can eat and at what hours. Do not leave untasted food by the bed. Bring a little at the right time.',
          'Above all, a nurse must learn to observe. It is useless to say the patient is better. What did he eat, how long did he sleep, what is his color? She warns against leading questions, which get the answer the questioner wants.',
        ],
      },
      {
        title: 'Being in charge',
        body: [
          'To be in charge, Nightingale says, is not only to do the proper things yourself but to see that they are done when you are not there. A good manager arranges matters so that her absence makes no difference.',
          'She is severe about visitors who offer cheerful hopes and amateur advice, which exhaust the sick. Nightingale wrote before germs were understood and believed disease came from foul air. Her practical conclusions about cleanliness and ventilation were right all the same.',
        ],
      },
    ],
    takeaway:
      'Good care is mostly attention: clean air, light, quiet, suitable food offered at the right moment, and close observation of how the person actually is. Arrange things so that they happen reliably.',
  },
  {
    id: 'discourses-on-the-sober-life',
    title: 'Discourses on the Sober Life',
    author: 'Luigi Cornaro',
    year: '1558',
    category: 'health',
    tagline: 'A Renaissance nobleman, told he was dying at forty, explains how he reached his nineties.',
    about:
      'Luigi Cornaro wrecked his health with rich living and was warned that he had months to live. He changed his diet completely and wrote four short essays, the last in extreme old age, in praise of eating little. They were among the first popular books on longevity.',
    whoFor: [
      'Readers curious about the history of diet and longevity advice',
      'Anyone thinking about moderation',
      'People who want an encouraging picture of old age',
    ],
    aboutAuthor:
      'Luigi Cornaro, also known as Alvise Cornaro, was a Venetian nobleman, landowner and patron of architecture who lived in Padua. He died in 1566 at a very advanced age.',
    cover: { bg: '#7b2d26', ink: '#f7ecd6', accent: '#e9c46a', motif: 'hourglass' },
    ideas: [
      {
        title: 'A warning at forty',
        body: [
          'By his late thirties Cornaro suffered from stomach pains, gout and almost constant fever. He had lived, he admits, like other men of his class, eating and drinking to excess.',
          'His physicians told him bluntly that only a strictly temperate life could save him and that otherwise he would be dead within months. He took their advice, and found himself within a year entirely cured.',
        ],
      },
      {
        title: 'Eat little, and only what agrees with you',
        body: [
          'His rule had two parts. First, to eat only foods that suited his own stomach, which he discovered by careful trial, and not to trust the proverb that whatever tastes good does good.',
          'Second, to eat very little. He settled on twelve ounces of solid food and fourteen ounces of wine a day, and always rose from the table able to eat more. He says he felt lighter, more cheerful and clearer in mind.',
        ],
      },
      {
        title: 'Be your own physician',
        body: [
          'No doctor, Cornaro argues, can know another person\'s constitution as well as that person can by observing themselves. After forty, everyone should become their own physician.',
          'Temperance for him covered more than food. He avoided extremes of heat and cold, too much fatigue and broken sleep. He tried also to keep clear of melancholy, hatred and the other passions, which he believed disturb the body.',
        ],
      },
      {
        title: 'A joyful old age',
        body: [
          'Cornaro wrote the essays at about eighty-three, eighty-six, ninety-one and ninety-five. He describes mounting his horse without help, climbing stairs, singing, writing a comedy and playing with his grandchildren.',
          'Old age, he insists, is the best time of life for anyone who arrives at it healthy. Once his family persuaded him to add two ounces to his daily food. Within days he was seriously ill, and he went back to his rule.',
        ],
      },
      {
        title: 'What to make of it',
        body: [
          'The essays were translated and reprinted for centuries. Modern research does find that moderate eating and avoiding obesity are linked with a longer, healthier life.',
          'But Cornaro was one man reporting on himself. Fourteen ounces of wine a day is not advice a doctor would give today, and his portions would be too little for many people. His own best point is that each body is different.',
        ],
      },
    ],
    takeaway:
      'Notice what agrees with you, stop eating before you are full and keep your temper even. Cornaro\'s numbers are his own, but his example of moderation and a cheerful old age still encourages.',
  },
  {
    id: 'the-hippocratic-writings',
    title: 'The Hippocratic Writings',
    author: 'Hippocrates',
    year: 'c. 400 BCE',
    category: 'health',
    tagline: 'Where medicine first separated itself from magic.',
    about:
      'The sixty or so works that carry the name of Hippocrates were written by many hands over a century. Together they mark the beginning of Western medicine: disease as a natural process, to be observed carefully and treated with humility.',
    whoFor: [
      'Readers interested in the origins of medicine',
      'Health workers curious about the source of their ethics',
      'Anyone who has heard "first, do no harm" and wants to know where it comes from',
    ],
    aboutAuthor:
      'Hippocrates of Kos was a Greek physician of the fifth century BCE. Little is known of his life, and scholars cannot say which of the works attributed to him he actually wrote.',
    cover: { bg: '#1f4d4a', ink: '#f2edda', accent: '#e0b656', motif: 'tree' },
    ideas: [
      {
        title: 'Disease has natural causes',
        body: [
          'In Greek tradition epilepsy was called the sacred disease and blamed on the gods. One Hippocratic author opens by saying that it appears to him no more divine than any other illness. It has a natural cause, which he places in the brain.',
          'People call it divine, he says, out of ignorance, and the healers who treat it with spells and purifications are charlatans. This refusal to explain sickness by the supernatural is the starting point of scientific medicine.',
        ],
      },
      {
        title: 'Observe and record',
        body: [
          'The books called Epidemics contain case histories set down day by day: the fever, the sweating, the state of the urine, the hour of the crisis. Many end with the words that the patient died. The authors report failures as carefully as successes.',
          'From such records came the art of prognosis, foretelling the course of an illness. The pinched, hollow look of a person near death is still known to doctors as the Hippocratic face.',
        ],
      },
      {
        title: 'Help nature along',
        body: [
          'The Hippocratic physician trusted the body\'s own power to recover. His main tools were diet, rest, exercise and bathing, adjusted to the patient, with drugs and surgery kept in reserve.',
          'One treatise, on airs, waters and places, advises a doctor arriving in a new town to study its climate, water supply and the habits of its people. The underlying theory of four bodily fluids, or humors, was wrong, and it dominated medicine for two thousand years.',
        ],
      },
      {
        title: 'Life is short, the art is long',
        body: [
          'The collection of sayings called the Aphorisms opens with the most famous sentence in medicine. Life is short, the art long, opportunity fleeting, experience deceptive and judgment difficult.',
          'It adds that the physician must not only do the right thing himself but secure the cooperation of the patient, the attendants and the circumstances. Many of the sayings that follow are plain clinical observations.',
        ],
      },
      {
        title: 'The ethics of the healer',
        body: [
          'One line in the Epidemics states the duty simply: as to diseases, make a habit of two things, to help, or at least to do no harm.',
          'The Oath binds the new physician to use treatment for the benefit of the sick, never to abuse their position in a household, and to keep secret whatever they see or hear. Its details reflect its time, but the idea that medicine is a profession with obligations has lasted.',
        ],
      },
    ],
    takeaway:
      'Look for natural causes, watch the patient closely, support the body\'s own recovery and above all avoid doing harm. The theories of these early doctors have gone, and their attitude remains the foundation of medicine.',
  },
  {
    id: 'on-the-mode-of-communication-of-cholera',
    title: 'On the Mode of Communication of Cholera',
    author: 'John Snow',
    year: '1855',
    category: 'health',
    tagline: 'A doctor, a map and a water pump: the birth of epidemiology.',
    about:
      'When cholera swept through Victorian London, nearly everyone blamed bad air. A physician named John Snow gathered evidence street by street to show that it was carried in drinking water. His investigation is the classic example of solving a medical mystery with data.',
    whoFor: [
      'Anyone interested in public health and how epidemics are traced',
      'Readers who like detective stories told with evidence',
      'People who work with data and want an inspiring case',
    ],
    aboutAuthor:
      'John Snow was an English physician and a pioneer of anesthesia, who gave chloroform to Queen Victoria in childbirth. He died in 1858, before his theory was accepted.',
    cover: { bg: '#18324a', ink: '#eef1e6', accent: '#4fb3d9', motif: 'dots' },
    ideas: [
      {
        title: 'A disease of the gut, not the lungs',
        body: [
          'Cholera had killed tens of thousands in Britain. The accepted explanation was miasma, a poisonous vapor rising from filth. Snow doubted it. His work with gases had taught him how they spread, and cholera did not behave like one.',
          'He reasoned from the symptoms. The illness begins in the stomach and bowels, not the chest, so the cause is probably swallowed. It must be something that multiplies in the body, leaves in the discharges and reaches other people through food or water.',
        ],
      },
      {
        title: 'Broad Street',
        body: [
          'At the end of August 1854 a terrible outbreak began in the Soho district, close to where Snow lived. More than five hundred people died in ten days. He went from house to house asking where the dead had got their water.',
          'Nearly all had drunk from the public pump in Broad Street. Marking each death on a street map, he saw them cluster around it. The men at a local brewery, who drank beer, and the inmates of a workhouse with its own well largely escaped.',
        ],
      },
      {
        title: 'The pump handle',
        body: [
          'Snow found one case far away. A widow in another district had died, and she had a bottle of Broad Street water fetched daily because she liked the taste.',
          'He took his findings to the parish authorities, and the next day the handle of the pump was removed. Snow notes honestly that the outbreak was already declining, since many had fled. A clergyman later found that a cesspool beside the well had been receiving the waste of a sick infant.',
        ],
      },
      {
        title: 'The grand experiment',
        body: [
          'His strongest evidence came from south London. Two rival companies supplied water there, often to houses in the same street. One drew from a stretch of the Thames polluted by sewage. The other had moved its intake upstream.',
          'The customers were alike in every other respect and had not chosen their supplier for any reason connected with health. Snow counted the deaths. They were eight to nine times more frequent in houses served by the polluted supply.',
        ],
      },
      {
        title: 'Slow acceptance',
        body: [
          'Officials did not accept his conclusions, and the pump handle was put back. Snow died four years later. The organism that causes cholera had in fact been seen under a microscope in 1854, but was not widely recognized until the 1880s.',
          'His methods outlived the argument. Mapping cases, comparing groups that differ in only one respect and following the evidence wherever it goes remain the basic tools of everyone who investigates disease.',
        ],
      },
    ],
    takeaway:
      'Careful counting and comparison can reveal a cause before anyone understands the mechanism. Snow shows that clean water saves lives, and that sound evidence may take years to defeat a settled opinion.',
  },
  {
    id: 'the-anatomy-of-melancholy',
    title: 'The Anatomy of Melancholy',
    author: 'Robert Burton',
    year: '1621',
    category: 'health',
    tagline: 'An Oxford scholar writes about depression to keep his own at bay.',
    about:
      'Robert Burton spent most of his life in a college library and suffered from what he called melancholy. His enormous, rambling, funny book collects everything ever written on its causes, symptoms and cures, and is one of the most humane works about mental suffering in English.',
    whoFor: [
      'Readers who have known low moods and want company',
      'Lovers of eccentric, learned old books',
      'Anyone interested in the history of how we think about depression',
    ],
    aboutAuthor:
      'Robert Burton was an English clergyman and scholar at Christ Church, Oxford, where he served as librarian. He kept revising the book until his death in 1640.',
    cover: { bg: '#25282f', ink: '#efe9da', accent: '#8ea4c8', motif: 'door' },
    ideas: [
      {
        title: 'Writing to stay well',
        body: [
          'Burton explains his motive plainly. I write of melancholy, he says, by being busy to avoid melancholy. He published under the name Democritus Junior, after the ancient philosopher who laughed at human folly.',
          'The book is a vast patchwork of quotations from physicians, poets and theologians, stitched together with his own digressions. He revised and enlarged it through six editions. It is meant to be dipped into, not read straight through.',
        ],
      },
      {
        title: 'Everyone has a share of it',
        body: [
          'Who is free from melancholy, Burton asks? In the passing sense of sadness, no one living is. He distinguishes this ordinary disposition from the settled habit, a chronic condition that is hard to remove.',
          'He describes its marks carefully: fear and sorrow without any apparent cause, sleeplessness, suspicion, restlessness, a dread that something terrible is about to happen. Readers who have been depressed often find the account uncannily accurate.',
        ],
      },
      {
        title: 'Many causes',
        body: [
          'Burton refuses to give one explanation. He lists inheritance, bad diet, poor air, too little exercise and too much, idleness, solitude, excessive study, poverty, grief, disappointed love and religious terror.',
          'Body and mind act on each other, he insists. A disordered body troubles the mind, and a troubled mind disorders the body. His medical framework, based on an excess of black bile, is long obsolete. His sense that causes are multiple is not.',
        ],
      },
      {
        title: 'Many remedies',
        body: [
          'The cures are equally varied. Put right what you eat and how you sleep. Take air and exercise. Listen to music, which he calls a sovereign remedy. Seek cheerful company and honest amusement.',
          'He especially recommends opening your grief to a trusted friend. He also prescribes purges and herbs that no one would use now. Long sections deal with the melancholy of lovers and with religious despair, which he treats with great tenderness.',
        ],
      },
      {
        title: 'Be not solitary, be not idle',
        body: [
          'After hundreds of thousands of words, Burton reduces his advice to six. Give not way to solitariness and idleness. Be not solitary, be not idle.',
          'A famous later writer said it was the only book that ever got him out of bed two hours earlier than he wished. Its lasting gift is its tone. Burton writes as a fellow sufferer, and never treats the melancholy as weak or sinful.',
        ],
      },
    ],
    takeaway:
      'Low spirits have many causes in body, mind and circumstance, and usually need more than one remedy. Burton\'s advice is still sound: keep occupied, keep company, look after your body and tell someone you trust.',
  },
  {
    id: 'the-gospel-of-relaxation',
    title: 'The Gospel of Relaxation',
    author: 'William James',
    year: '1899',
    category: 'health',
    tagline: 'A great psychologist tells an anxious nation to unclench.',
    about:
      'In this short talk to students, William James argues that the tension and hurry of modern life are bad habits, not necessities. Drawing on his theory that feelings follow actions, he explains how to work hard without wearing yourself out.',
    whoFor: [
      'People who are always tense or rushed',
      'Students and anyone who worries before a performance',
      'Readers who want practical psychology from a master',
    ],
    aboutAuthor:
      'William James was a Harvard philosopher and physician and one of the founders of American psychology. He struggled with anxiety and low spirits himself.',
    cover: { bg: '#dbe7e4', ink: '#1f2f2c', accent: '#2a9d8f', motif: 'waves' },
    ideas: [
      {
        title: 'Act the way you want to feel',
        body: [
          'James begins with his own theory of emotion. We commonly suppose that feeling comes first and action follows. He argues that action and feeling go together, and that by controlling the action, which the will can reach, we indirectly control the feeling.',
          'So the path to cheerfulness, if your cheerfulness is lost, is to sit up, look round and act and speak as if it were already there. To wrestle directly with a bad feeling only fixes attention on it.',
        ],
      },
      {
        title: 'The habit of tension',
        body: [
          'A foreign doctor once remarked that Americans wore faces of too much intensity. James agrees. He describes his countrymen as breathless and tense, like bottled lightning, even when sitting in a chair.',
          'He does not blame the climate or the amount of work. It is simply a bad habit, caught by imitation from one another. People have come to admire the look of strain and to think that a relaxed person is not serious.',
        ],
      },
      {
        title: 'Strain wastes energy',
        body: [
          'It is not the nature of our work that breaks us down, James says, but the absurd feelings of hurry, the breathlessness and the anxiety about results that go with it.',
          'The worker who stays loose gets more done. The tense one burns up force in contracted muscles and a furrowed brow that contribute nothing to the task. James praises teachers of his day who trained people to relax their bodies.',
        ],
      },
      {
        title: 'Unclamp',
        body: [
          'His advice for mental work is to prepare thoroughly and then let go. Once a decision is reached and execution is the order of the day, dismiss all care about the outcome. Unclamp your intellectual and practical machinery and let it run free.',
          'He tells students that the way to do well in an examination is to stop studying the day before, close the books and go for a walk or go to bed. The results will be far better.',
        ],
      },
      {
        title: 'You cannot force calm',
        body: [
          'There is a trap here. Trying hard to relax is another form of strain. Relaxation comes by ceasing to care so intensely, not by adding one more effort.',
          'James observes that people with religious faith often achieve this by handing their worries over. For everyone, he recommends bodily exercise and a general toning down of the feeling that everything depends on oneself.',
        ],
      },
    ],
    takeaway:
      'Tension is a habit, and it reduces what you can do. Behave calmly and the feeling will tend to follow. Prepare well, then release your grip on the result.',
  },
  {
    id: 'walking',
    title: 'Walking',
    author: 'Henry David Thoreau',
    year: '1862',
    category: 'health',
    tagline: 'In praise of sauntering, wildness and four hours a day outdoors.',
    about:
      'Thoreau delivered this lecture many times and revised it on his deathbed. It begins as an essay on the art of taking a walk and widens into a defense of wild nature as the source of health, imagination and freedom.',
    whoFor: [
      'Walkers and hikers',
      'People who spend too many hours sitting indoors',
      'Readers who care about nature and its protection',
    ],
    aboutAuthor:
      'Henry David Thoreau was an American essayist and naturalist from Concord, Massachusetts, best known for Walden. He died of tuberculosis in 1862.',
    cover: { bg: '#34503a', ink: '#f2eedb', accent: '#e9c46a', motif: 'tree' },
    ideas: [
      {
        title: 'The art of sauntering',
        body: [
          'Thoreau says he has met only one or two people who understood the art of walking. He offers a playful origin for the word saunter, from idlers in the Middle Ages who claimed to be going to the Holy Land.',
          'Every walk, he says, should be a kind of crusade. You must be ready to leave everything behind. A walk taken merely for exercise, like lifting weights, is not what he means.',
        ],
      },
      {
        title: 'Four hours a day',
        body: [
          'He declares that he cannot preserve his health and spirits unless he spends at least four hours a day sauntering through woods and fields, absolutely free of worldly engagements.',
          'He is astonished at shopkeepers and mechanics who sit indoors all morning and all afternoon, and thinks they deserve credit for not having ended their own lives long ago. Sitting still, to him, is the real hardship.',
        ],
      },
      {
        title: 'Be where your body is',
        body: [
          'A walk does little good if the mind stays in town. Thoreau is alarmed when he finds he has gone a mile into the woods in body without getting there in spirit.',
          'What business have I in the woods, he asks, if I am thinking of something out of the woods? The point is to return to the senses. Long before the word became fashionable, he was describing mindfulness.',
        ],
      },
      {
        title: 'In wildness is the preservation of the world',
        body: [
          'When he leaves his door without a plan, Thoreau finds that he always drifts toward the west and southwest, away from the city. He takes this as a sign of where life and the future lie.',
          'The west stands for the wild, and he makes his most famous claim: in wildness is the preservation of the world. He prefers a swamp to a garden. Wild land feeds the spirit as surely as it feeds the soil.',
        ],
      },
      {
        title: 'Keep the land open',
        body: [
          'Thoreau foresees a day when the countryside will be divided into private grounds, with fences and traps to keep people out. Let us improve our opportunities, he says, before the evil days come.',
          'His essay helped to inspire the movement for national parks. Modern studies agree with him that regular walking and time among trees improve mood and health. He ends with a sunset that turns an ordinary meadow gold.',
        ],
      },
    ],
    takeaway:
      'Go outside every day, for longer than seems reasonable, and leave your worries at the door. Thoreau holds that body and mind both need unhurried movement through wild places, and that those places must be protected.',
  },
  {
    id: 'the-yoga-sutras',
    title: 'The Yoga Sutras',
    author: 'Patanjali',
    year: 'c. 400 CE',
    category: 'health',
    tagline: 'The original manual of yoga, and it is almost entirely about the mind.',
    about:
      'In fewer than two hundred terse sentences, Patanjali sets out yoga as a complete discipline for quieting the mind. Physical postures, which most people now think of as yoga, take up three lines. The rest concerns attention, ethics and freedom.',
    whoFor: [
      'Yoga practitioners who want to know the source',
      'People interested in meditation and attention training',
      'Anyone looking for a compact philosophy of inner calm',
    ],
    aboutAuthor:
      'Almost nothing is known about Patanjali. The text was compiled in India, probably in the first centuries of the common era, from older traditions.',
    cover: { bg: '#3d2c5e', ink: '#f3ecdb', accent: '#f4a259', motif: 'rings' },
    ideas: [
      {
        title: 'Yoga is the stilling of the mind',
        body: [
          'The second sutra defines the whole subject. Yoga is the stilling of the turnings of the mind. When that happens, the next line says, the seer rests in its own true nature.',
          'At other times we identify with whatever the mind is doing: its perceptions, mistakes, imaginings and memories. The aim is not to destroy thought but to stop being carried away by it.',
        ],
      },
      {
        title: 'Practice and letting go',
        body: [
          'Two things bring the mind to stillness. The first is practice, the effort to remain steady. It becomes firmly grounded, Patanjali says, only when it is kept up for a long time, without interruption and with devotion.',
          'The second is non-attachment, a mastery over craving for things seen or heard about. The two work together like the wings of a bird. Effort without letting go becomes strain, and letting go without effort becomes drift.',
        ],
      },
      {
        title: 'What gets in the way',
        body: [
          'The text names five afflictions at the root of suffering: ignorance of our real nature, the sense of ego, attachment to pleasure, aversion to pain and the clinging to life.',
          'It also gives a simple remedy for a disturbed mind in daily dealings. Cultivate friendliness toward the happy, compassion for those who suffer, gladness toward the good and equanimity toward the wicked. When a harmful thought arises, deliberately think its opposite.',
        ],
      },
      {
        title: 'The eight limbs',
        body: [
          'The practical path has eight parts. It begins with restraints such as non-violence and truthfulness, and observances such as contentment and self-study. Ethics comes first.',
          'Then follow posture, which should simply be steady and comfortable, and control of the breath. After these come withdrawal of the senses, concentration, meditation and finally complete absorption. The first five prepare the ground for the last three.',
        ],
      },
      {
        title: 'Freedom',
        body: [
          'The goal is called independence or liberation: the recognition that pure awareness is distinct from the changing contents of mind and body, and is untouched by them.',
          'Patanjali mentions extraordinary powers that may arise along the way and warns that they are obstacles. The athletic yoga practiced in studios today developed many centuries later. Its ancestor is a method for looking at your own mind.',
        ],
      },
    ],
    takeaway:
      'Calm is a skill built by steady practice and by loosening your grip on wanting. Begin with how you treat others, keep the body easy and the breath even, and train attention until the mind grows quiet.',
  },
  {
    id: 'the-science-of-being-well',
    title: 'The Science of Being Well',
    author: 'Wallace D. Wattles',
    year: '1910',
    category: 'health',
    tagline: 'The law-of-attraction author turns to health, with some sense and some wishful thinking.',
    about:
      'The third of his short "science" books applies Wattles\'s method to the body. He teaches that health comes from thinking and acting in a certain way, and gives simple rules for eating, breathing and sleeping. It should be read as a period piece, not as medical advice.',
    whoFor: [
      'Readers of The Science of Getting Rich who want the companion volume',
      'People interested in the history of mind-body ideas',
      'Anyone who wants to eat more attentively',
    ],
    aboutAuthor:
      'Wallace Delois Wattles was an American New Thought writer. He suffered from poor health for much of his life and died in 1911.',
    cover: { bg: '#e3efd9', ink: '#1f2e1c', accent: '#e07a5f', motif: 'sprout' },
    ideas: [
      {
        title: 'Health as the natural state',
        body: [
          'Wattles asserts that there is a principle of health in every person which, when it is fully active, keeps the body well. Sickness, in his view, comes from thinking and acting in ways that interfere with it.',
          'This is a statement of faith, not of science. No evidence supports the idea that right thinking cures disease, and serious illness needs proper medical care. What follows in the book is best judged piece by piece.',
        ],
      },
      {
        title: 'Hold the thought of health',
        body: [
          'He asks the reader to form a clear picture of themselves as strong and well and to keep it in mind, with gratitude, during every ordinary act.',
          'Do not study disease, he advises, or talk about your symptoms, or listen to others describing theirs. There is a sensible core here. Constant attention to minor ailments tends to make people feel worse.',
        ],
      },
      {
        title: 'Eat only when you are hungry',
        body: [
          'Most of his practical advice concerns food. Never eat by the clock or from habit. Wait until you have what he calls an earned hunger, the real appetite that follows activity.',
          'For this reason he recommends going without breakfast. Eat plain foods, chew every mouthful thoroughly and with enjoyment, and stop at the first hint that you have had enough.',
        ],
      },
      {
        title: 'Breathe and sleep',
        body: [
          'Stand and sit straight, he says, so that the lungs can fill, and breathe fresh air deeply. This was standard advice in an age when tuberculosis was common.',
          'Sleep with the bedroom window open in every season. Go to bed when you are tired and let sleep be natural. He treats rest as an essential part of the body\'s work of renewal.',
        ],
      },
      {
        title: 'Sorting sense from nonsense',
        body: [
          'Some of this stands up well. Eating slowly and only from real hunger, getting fresh air, sleeping enough and not brooding on every twinge are habits a modern doctor would approve.',
          'The central claim does not. Wattles tells his readers that they can be perfectly well by thought and faith alone, and that is false. The book is a fair summary of what people hoped for from the mind before modern medicine.',
        ],
      },
    ],
    takeaway:
      'Take from Wattles the practical habits: eat attentively, breathe well, sleep enough and do not dwell on small complaints. Leave behind the promise that belief can replace medical treatment.',
  },
  {
    id: 'regimen-of-health',
    title: 'Regimen of Health',
    author: 'Moses Maimonides',
    year: 'c. 1198',
    category: 'health',
    tagline: 'A medieval physician prescribes moderation, movement and peace of mind to a troubled prince.',
    about:
      'The greatest Jewish philosopher of the Middle Ages earned his living as a court doctor in Cairo. He wrote this short treatise for a sultan who suffered from indigestion and low spirits. Its emphasis on prevention and on the link between mind and body is strikingly modern.',
    whoFor: [
      'Readers interested in the history of medicine',
      'Anyone looking for simple, time-tested rules of living',
      'People curious about the practical side of a great philosopher',
    ],
    aboutAuthor:
      'Moses Maimonides, also known as Rambam, was a rabbi, philosopher and physician born in Córdoba in Spain. He served as doctor to the family of Saladin in Egypt.',
    cover: { bg: '#1b3a5b', ink: '#f3ecd8', accent: '#d8a53c', motif: 'columns' },
    ideas: [
      {
        title: 'A letter to a patient',
        body: [
          'The treatise was written for al-Afdal, a son of Saladin, who had complained of constipation, poor digestion and attacks of sadness and dread.',
          'Maimonides answers in four short chapters: general rules of health, advice for when no physician is at hand, a section addressed to the prince\'s own state of mind, and useful hints for the healthy and the sick alike.',
        ],
      },
      {
        title: 'Do not fill the stomach',
        body: [
          'He begins with food. Most illnesses, he says, come from eating badly: too much, or the wrong things, or in the wrong order. Overeating is like poison to the body.',
          'One should eat only when truly hungry and stop before the stomach is full. Elsewhere he gives the measure as about three quarters. He recommends good bread and lighter meats and warns against heavy, rich dishes.',
        ],
      },
      {
        title: 'Move before you eat',
        body: [
          'Maimonides ranks exercise above every other rule. Nothing can replace it. As long as a person exerts himself, he writes, and does not eat to fullness, no illness will befall him and his strength will increase.',
          'The best exercise is vigorous enough to quicken the breathing, and should be taken before a meal and never straight after. He also prescribes regular, sufficient sleep.',
        ],
      },
      {
        title: 'The health of the soul',
        body: [
          'The most original chapter concerns emotion. Maimonides observes that strong feelings change the body. Grief and anxiety weaken the appetite, the pulse and the voice, and the physician must attend to them.',
          'Drugs alone will not do it. A person needs the perspective that philosophy and moral teaching give, so as not to be crushed by misfortune or carried away by success. He adds music, pleasant company and walks in a garden.',
        ],
      },
      {
        title: 'Prevention first',
        body: [
          'Throughout, he prefers keeping well to being cured. A doctor should assist nature and avoid strong medicines for minor troubles, since the body, wrongly treated, becomes used to them.',
          'He also notes that the air of cities is worse than that of open country. Much of his theory of bodily humors and some of his remedies are long out of date. The priorities he set have held up.',
        ],
      },
    ],
    takeaway:
      'Eat less than you could, exercise every day before meals, sleep well and take care of your state of mind. Eight centuries on, these remain the foundations of good health.',
  },
]
