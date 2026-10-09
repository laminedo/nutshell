import type { Book } from '../types'

export const psychology: Book[] = [
  {
    id: 'the-interpretation-of-dreams',
    title: 'The Interpretation of Dreams',
    author: 'Sigmund Freud',
    year: '1899',
    category: 'psychology',
    tagline: 'The book that claimed dreams have meaning, and opened the door to the unconscious.',
    about:
      'Freud considered this his most important work. In it he argues that dreams are not nonsense but disguised expressions of wishes we cannot admit, and he lays out the method and the theory that became psychoanalysis.',
    whoFor: [
      'Anyone curious about where modern ideas of the unconscious came from',
      'Readers interested in dreams and what they might mean',
      'People who want to understand Freud before judging him',
    ],
    aboutAuthor:
      'Sigmund Freud was an Austrian neurologist and the founder of psychoanalysis. He practiced in Vienna for most of his life and died in London in 1939.',
    cover: { bg: '#1e2440', ink: '#efe9da', accent: '#9b8fd6', motif: 'door' },
    ideas: [
      {
        title: 'Dreams are meaningful',
        body: [
          'Scientists of his day mostly regarded dreams as random activity of a sleeping brain. Freud sided with the old popular belief that they mean something, though not as prophecy.',
          'His method was to take each element of a dream in turn and ask the dreamer to say whatever came to mind. Following these chains of association, he believed, leads back to the thoughts that produced the dream.',
        ],
      },
      {
        title: 'Every dream fulfils a wish',
        body: [
          'In young children the wish is plain. A child denied strawberries during the day dreams of eating them. In adults, Freud says, the wish is usually one the dreamer would be ashamed to acknowledge.',
          'He analyzes one of his own dreams, about a patient named Irma, and concludes that it served to excuse him from blame for her condition. Even anxiety dreams, he argues, conceal a wish.',
        ],
      },
      {
        title: 'The dream is a disguise',
        body: [
          'Freud separates the manifest content, the story we remember, from the latent content, the hidden thoughts behind it. A kind of inner censor will not let the latent thoughts through unaltered.',
          'The dream work transforms them. Condensation packs several ideas into one image. Displacement shifts the emotion onto something trivial. Abstract thoughts are turned into pictures, and the whole is tidied into a rough story.',
        ],
      },
      {
        title: 'The roots lie in childhood',
        body: [
          'Dreams pick up scraps from the previous day, but Freud holds that the driving force is always an old wish from early life. The unconscious, in his view, does not forget and does not grow up.',
          'It is here that he first describes what he later called the Oedipus complex, illustrating it with the Greek tragedy and with Hamlet. It became one of his most famous and most disputed ideas.',
        ],
      },
      {
        title: 'What has lasted and what has not',
        body: [
          'Freud called the interpretation of dreams the royal road to a knowledge of the unconscious. The book sold only a few hundred copies in its first years and then reshaped the culture.',
          'Modern sleep research does not support the claim that dreams are disguised wishes, and critics note that the theory can explain any dream and so cannot be tested. The broader idea, that much of mental life happens outside awareness, has survived.',
        ],
      },
    ],
    takeaway:
      'Freud argued that the mind hides things from itself and that dreams let them slip out in costume. Science has not confirmed his code, but his question changed psychology: what is going on in us that we do not know about?',
  },
  {
    id: 'civilization-and-its-discontents',
    title: 'Civilization and Its Discontents',
    author: 'Sigmund Freud',
    year: '1930',
    category: 'psychology',
    tagline: 'Why living together makes us safer, and less happy.',
    about:
      'In this late essay Freud turns from the individual patient to society as a whole. He asks why, with all the comforts of civilization, people remain so dissatisfied, and answers that civilized life requires us to give up the very impulses that would make us happy.',
    whoFor: [
      'Readers who wonder why progress has not brought contentment',
      'Anyone interested in guilt, aggression and conscience',
      'People looking for a short introduction to Freud\'s later thought',
    ],
    aboutAuthor:
      'Sigmund Freud was an Austrian neurologist and the founder of psychoanalysis. He wrote this essay in his seventies, between the two world wars.',
    cover: { bg: '#3a3a3a', ink: '#f0eadc', accent: '#d97b4a', motif: 'gap' },
    ideas: [
      {
        title: 'Happiness is hard by design',
        body: [
          'Freud begins with what people want from life. They want to be happy. But suffering threatens from three directions: from our own bodies, which decay; from the outer world; and from our relations with other people.',
          'We cope by lowering our demands and by using consolations such as intoxication, work, art and love. He regards religion as another such comfort, and an illusion, however deeply felt.',
        ],
      },
      {
        title: 'Civilization is built on renunciation',
        body: [
          'To live together, people must restrict their sexual and aggressive impulses. Law replaces the will of the strongest. Energy that would have sought direct satisfaction is redirected into work and culture.',
          'This is the bargain at the center of the book. Civilized people have exchanged a portion of their chances of happiness for a measure of security. The discontent of the title is the price.',
        ],
      },
      {
        title: 'Aggression is part of us',
        body: [
          'Freud rejects the idea that humans are gentle creatures who only defend themselves. He quotes the old saying that man is a wolf to man, and points to history as evidence.',
          'This is why the command to love your neighbor as yourself is so hard, and why groups bind themselves together by hating outsiders. He calls the quarrels of similar neighbors the narcissism of small differences.',
        ],
      },
      {
        title: 'Guilt is aggression turned inward',
        body: [
          'Society cannot simply forbid aggression. It installs a guard inside each person, the conscience or superego, which takes the aggression we would have aimed at others and turns it on ourselves.',
          'The result is a sense of guilt, often unconscious, which grows as civilization advances. Freud considers this the most important problem in the development of culture and the main source of our unease.',
        ],
      },
      {
        title: 'An open question',
        body: [
          'Freud pictures history as a struggle between a force that binds people together and one that drives toward destruction. He does not claim to know which will win.',
          'Human beings, he observes, now have the power to exterminate one another to the last person. The fateful question is whether culture can master that drive. Much of the essay is speculation, as he admits, but the question stands.',
        ],
      },
    ],
    takeaway:
      'Civilization protects us by asking us to restrain ourselves, and the restraint is felt as guilt and frustration. Some unhappiness is not a personal failure. It is the cost of living with other people.',
  },
  {
    id: 'the-crowd',
    title: 'The Crowd',
    author: 'Gustave Le Bon',
    year: '1895',
    category: 'psychology',
    tagline: 'How sensible individuals become something else in a mass.',
    about:
      'Writing in a France shaken by riots and revolutions, Le Bon argued that a crowd is not a sum of individuals but a new creature with a mind of its own. His book founded crowd psychology and was studied closely by politicians, advertisers and dictators.',
    whoFor: [
      'Anyone trying to understand mobs, movements and viral outrage',
      'Readers interested in propaganda and political rhetoric',
      'People who want to recognize the tricks used on audiences',
    ],
    aboutAuthor:
      'Gustave Le Bon was a French physician, traveler and popular writer on science and society.',
    cover: { bg: '#a3221e', ink: '#f7ecd9', accent: '#1c1c1c', motif: 'dots' },
    ideas: [
      {
        title: 'A crowd has one mind',
        body: [
          'Under certain conditions, Le Bon says, a gathering of people acquires characteristics very different from those of the individuals in it. Their feelings and ideas turn in one direction and conscious personality fades.',
          'He calls this a psychological crowd. It does not require people to be in one place. A whole nation can become one under the pressure of a great event.',
        ],
      },
      {
        title: 'Why people change in a crowd',
        body: [
          'He gives three causes. Anonymity gives a feeling of invincible power and removes the sense of personal responsibility. Emotions spread from person to person like a contagion.',
          'Most important is suggestibility. The member of a crowd, he argues, resembles someone under hypnosis, who will act on ideas they would reject when alone.',
        ],
      },
      {
        title: 'Crowds think in images',
        body: [
          'A crowd does not reason. It is impulsive, changeable and credulous, and it knows neither doubt nor uncertainty. A suspicion becomes at once a certainty and a dislike becomes hatred.',
          'Ideas reach it only in very simple and absolute form, clothed in a striking image. A single vivid case moves a crowd more than a hundred statistics.',
        ],
      },
      {
        title: 'How leaders move them',
        body: [
          'Le Bon describes the leader as a person of action and fixed conviction, not a thinker. The tools are few: affirm a thing without proof, repeat it constantly, and let contagion do the rest.',
          'Behind these stands prestige, a kind of spell cast by success or reputation that paralyzes criticism. Once prestige is questioned, he notes, it is already lost.',
        ],
      },
      {
        title: 'Influence and flaws',
        body: [
          'Freud built on the book, and Mussolini said he had read it many times. Its account of affirmation and repetition still describes much political and commercial persuasion.',
          'But Le Bon was an elitist with crude prejudices about race, class and women, and he offered anecdotes, not evidence. Later research finds that crowds are often orderly and act on shared identity and purpose, not blind frenzy.',
        ],
      },
    ],
    takeaway:
      'In a mass, people feel powerful, anonymous and open to suggestion, and simple images repeated with confidence move them more than argument. Knowing the technique is the first defense against it.',
  },
  {
    id: 'psychological-types',
    title: 'Psychological Types',
    author: 'Carl Jung',
    year: '1921',
    category: 'psychology',
    tagline: 'The book that gave us introverts and extraverts.',
    about:
      'After his break with Freud, Jung asked why intelligent people looking at the same facts reach such different conclusions. His answer was that people are oriented to the world in fundamentally different ways. The terms he introduced are now part of everyday language.',
    whoFor: [
      'Anyone curious about personality differences',
      'People who have taken a type test and want to know its origin',
      'Readers interested in why others see things so differently',
    ],
    aboutAuthor:
      'Carl Gustav Jung was a Swiss psychiatrist and the founder of analytical psychology. He was an early collaborator of Freud before the two fell out.',
    cover: { bg: '#213b4a', ink: '#f0ebdc', accent: '#e2a93b', motif: 'rings' },
    ideas: [
      {
        title: 'Two directions of interest',
        body: [
          'Jung describes two basic attitudes. In the extravert, interest flows outward toward people and things, and the person is guided by the external situation. In the introvert, it flows inward toward the inner world of thoughts and impressions.',
          'Neither is better. Everyone has both tendencies, but one usually predominates. Jung came to the idea partly by asking why Freud and Adler had explained the same patients in opposite ways.',
        ],
      },
      {
        title: 'Four functions',
        body: [
          'On top of the two attitudes Jung places four ways of dealing with experience. Sensation tells us that something exists. Thinking tells us what it is. Feeling tells us what it is worth. Intuition suggests where it came from and where it is going.',
          'He calls thinking and feeling rational, because they judge. Sensation and intuition he calls irrational, meaning that they simply perceive.',
        ],
      },
      {
        title: 'The neglected side',
        body: [
          'Each person relies mainly on one function, which becomes skilled and conscious. Its opposite stays undeveloped and largely unconscious. A strong thinker, for instance, often has clumsy and touchy feelings.',
          'This inferior function does not disappear. It shows itself in moods, slips and overreactions. Combining the two attitudes with the four functions gives Jung his eight types.',
        ],
      },
      {
        title: 'The aim is balance, not a label',
        body: [
          'Jung warns against using the types to put people in boxes. They are a compass for finding one\'s bearings, he says, and real individuals are mixtures.',
          'The practical point is that one-sidedness has a cost. Psychological growth, which he called individuation, involves gradually making room for the attitude and functions one has neglected.',
        ],
      },
      {
        title: 'What became of the idea',
        body: [
          'The words introvert and extravert passed into ordinary speech. The widely used Myers-Briggs questionnaire was built on Jung\'s scheme by others, and researchers consider its sixteen fixed types poorly supported.',
          'Modern personality science does keep extraversion as one of its main dimensions, but as a scale on which most people fall near the middle. Jung himself said that there is no such thing as a pure type.',
        ],
      },
    ],
    takeaway:
      'People differ in where their attention naturally goes and in how they process experience. Understanding that reduces pointless conflict, and developing your weaker side makes you more whole.',
  },
  {
    id: 'understanding-human-nature',
    title: 'Understanding Human Nature',
    author: 'Alfred Adler',
    year: '1927',
    category: 'psychology',
    tagline: 'Why we strive, how we go wrong, and what belonging has to do with it.',
    about:
      'Based on lectures given to ordinary people at an adult education institute in Vienna, this book explains character without technical language. Adler argues that we are driven less by our past than by our goals, and that mental health means feeling part of the human community.',
    whoFor: [
      'Readers who want an accessible classic of psychology',
      'Parents and teachers',
      'Anyone who struggles with feelings of inadequacy',
    ],
    aboutAuthor:
      'Alfred Adler was an Austrian physician who left Freud\'s circle to found individual psychology. He coined the term inferiority complex.',
    cover: { bg: '#e9e2d0', ink: '#252a2e', accent: '#2e8b6f', motif: 'ziggurat' },
    ideas: [
      {
        title: 'Everyone starts out feeling small',
        body: [
          'Every child begins life weak and dependent among larger and more capable people. Adler sees this feeling of inferiority as normal and useful. It is the spur to learn, grow and overcome.',
          'Trouble comes when the feeling is too strong. Then a person may give up, which he calls an inferiority complex, or cover it with boasting and domination, a superiority complex.',
        ],
      },
      {
        title: 'We are pulled by goals',
        body: [
          'Where Freud looked for causes in the past, Adler looks at where a person is heading. Behavior makes sense, he says, once you know the goal it serves, even when the person is unaware of it.',
          'In the first years of life each child forms a private picture of how to be safe and significant. Adler calls the resulting pattern the style of life, and holds that it tends to persist unless it is understood.',
        ],
      },
      {
        title: 'Social feeling is the measure of health',
        body: [
          'Human beings survive only in groups, and Adler argues that we are born with a capacity for fellow feeling that must be developed. The healthy person strives in ways that also benefit others.',
          'All of life\'s main problems, he says, are social: work, friendship and love. People who approach them asking only what they can get are the ones who fail at them.',
        ],
      },
      {
        title: 'The family sets the stage',
        body: [
          'Adler pays attention to a child\'s position among siblings. The first-born loses a throne when the second arrives. The second is always trying to catch up. The youngest may be pampered.',
          'These are tendencies, and later research has found only weak support for them. His firmer point is that both spoiling and neglect are harmful, because each teaches a child that cooperation is unnecessary or pointless.',
        ],
      },
      {
        title: 'Change comes through understanding and courage',
        body: [
          'A mistaken style of life can be corrected when a person sees what goal they have been pursuing and what it has cost them. The therapist or teacher helps with insight and, above all, with encouragement.',
          'Adler is an optimist. People are not fixed by heredity or by childhood. What matters is not what one is born with, he says, but what one makes of that equipment.',
        ],
      },
    ],
    takeaway:
      'Feeling inadequate is universal and can drive either growth or pretense. Ask what goal your behavior serves, direct your striving toward contribution, and offer other people encouragement instead of judgment.',
  },
  {
    id: 'conditioned-reflexes',
    title: 'Conditioned Reflexes',
    author: 'Ivan Pavlov',
    year: '1927',
    category: 'psychology',
    tagline: 'The dogs, the bell, and the discovery of how associations are learned.',
    about:
      'Pavlov won a Nobel Prize for work on digestion and then spent thirty years on an odd side observation: his dogs drooled before the food arrived. These lectures set out the laws he found, which became the foundation of the scientific study of learning.',
    whoFor: [
      'Anyone curious about how habits and associations form',
      'Readers interested in the origins of behavior therapy',
      'People who know the famous dogs and want the real story',
    ],
    aboutAuthor:
      'Ivan Petrovich Pavlov was a Russian physiologist who won the Nobel Prize in 1904. He ran a large laboratory in Saint Petersburg until his death in 1936.',
    cover: { bg: '#f1ecdf', ink: '#1f1f24', accent: '#d2452f', motif: 'loops' },
    ideas: [
      {
        title: 'An accident in the laboratory',
        body: [
          'Pavlov was measuring the saliva dogs produce when fed. He noticed that the animals began to salivate earlier, at the sight of the dish or the sound of the attendant\'s footsteps.',
          'Other scientists might have dismissed this as the dog expecting food. Pavlov refused to guess at the animal\'s thoughts. He decided to study the response objectively, as a reflex that had somehow been acquired.',
        ],
      },
      {
        title: 'Pairing creates a new reflex',
        body: [
          'Food in the mouth produces saliva automatically. Pavlov called this an unconditioned reflex. He then sounded a metronome or buzzer just before feeding, many times over.',
          'Eventually the sound alone produced saliva. A neutral signal had become a conditioned stimulus. Timing mattered: the signal had to come shortly before the food, not after it.',
        ],
      },
      {
        title: 'Reflexes can fade and return',
        body: [
          'If the sound was presented repeatedly without food, the salivation gradually stopped. Pavlov called this extinction. But after a rest the response often reappeared, which showed that it had been suppressed, not erased.',
          'Dogs also generalized, responding to tones similar to the trained one, and they could be taught to discriminate, responding to one tone and not to another.',
        ],
      },
      {
        title: 'Conflict can break an animal down',
        body: [
          'In one experiment a dog was fed after seeing a circle and not after an ellipse. The ellipse was then made rounder and rounder until the dog could barely tell the two apart.',
          'The animal became agitated, barked, bit its harness and lost what it had learned. Pavlov called this an experimental neurosis and noted that dogs of different temperaments broke down in different ways.',
        ],
      },
      {
        title: 'What grew from it',
        body: [
          'Pavlov gave psychology a method that did not depend on asking subjects what they felt. Behaviorism was built on it, and so were treatments that reduce fears by gradual, safe exposure to what is feared.',
          'It also explains a good deal of advertising, which pairs a product with something already liked. Conditioning is not the whole of learning, as later researchers showed, but it is a real and basic part.',
        ],
      },
    ],
    takeaway:
      'Much of what we feel in response to places, sounds and people was learned by association, without our choosing it. What was learned by pairing can be weakened by new experience.',
  },
  {
    id: 'behaviorism',
    title: 'Behaviorism',
    author: 'John B. Watson',
    year: '1924',
    category: 'psychology',
    tagline: 'The manifesto that told psychology to stop studying the mind and start studying behavior.',
    about:
      'Watson argued that a scientific psychology must deal only with what can be observed: what people do. His confident, provocative book claimed that almost everything about a person is learned, and it dominated American psychology for a generation.',
    whoFor: [
      'Readers interested in the nature versus nurture debate',
      'Anyone curious about a turning point in the history of psychology',
      'People who want to understand ideas that still shape training and advertising',
    ],
    aboutAuthor:
      'John Broadus Watson was an American psychologist at Johns Hopkins University. After a scandal ended his academic career he became a successful advertising executive.',
    cover: { bg: '#223127', ink: '#eef0e2', accent: '#f2c14e', motif: 'bolt' },
    ideas: [
      {
        title: 'Study what can be seen',
        body: [
          'Earlier psychologists asked trained observers to look inward and describe their sensations. Watson pointed out that no two laboratories could agree on the results, and called for the method to be abandoned.',
          'Psychology, he said, should be a natural science whose goal is to predict and control behavior. Its data are stimuli and responses. Talk of consciousness belongs with talk of the soul.',
        ],
      },
      {
        title: 'Few instincts, three emotions',
        body: [
          'Watson examined newborn babies and concluded that humans have very little built-in behavior. He found three basic emotional reactions: fear, produced by loud noise or loss of support; rage, produced by restraint; and love, produced by stroking.',
          'Everything else in adult emotional life, he argued, is built on these by conditioning. Fears of the dark, of animals or of strangers are learned.',
        ],
      },
      {
        title: 'Little Albert',
        body: [
          'To show it, Watson and his assistant took an infant who liked a white rat and, each time the child reached for it, struck a steel bar behind his head. Soon the boy cried at the sight of the rat alone.',
          'The fear spread to a rabbit and a fur coat. The study was poorly controlled and the child was never deconditioned. It is remembered today both as a famous demonstration and as a case of research that should not have been done.',
        ],
      },
      {
        title: 'A dozen healthy infants',
        body: [
          'In the best-known passage, Watson boasts that given a dozen healthy infants and his own world to raise them in, he could train any one to become a doctor, lawyer, artist, merchant or thief, whatever the child\'s talents or ancestry.',
          'He admitted in the next breath that he was going beyond his facts. But the claim captures the creed: environment is nearly everything and heredity nearly nothing.',
        ],
      },
      {
        title: 'Legacy',
        body: [
          'Behaviorism brought rigor to psychology and produced practical methods for training and for treating fears. Watson applied its lessons to selling products with great success.',
          'It also overreached. His advice that parents should not hug or kiss their children was harmful, and he later regretted it. From the 1950s psychologists returned to studying thought and memory, and genetics showed that heredity matters a great deal.',
        ],
      },
    ],
    takeaway:
      'Watching what people actually do is a sound discipline, and much behavior is learned. But the claim that a person is nothing more than their conditioning was a bold idea pushed too far.',
  },
  {
    id: 'memory-ebbinghaus',
    title: 'Memory',
    author: 'Hermann Ebbinghaus',
    year: '1885',
    category: 'psychology',
    tagline: 'One man, thousands of nonsense syllables, and the discovery of the forgetting curve.',
    about:
      'Philosophers had assumed that the higher mental processes could not be measured. Ebbinghaus proved otherwise by experimenting on himself for years. His short monograph discovered regularities in learning and forgetting that every student can use.',
    whoFor: [
      'Students and anyone who has to learn a lot',
      'Users of flashcard and spaced repetition apps',
      'Readers who like elegant, simple experiments',
    ],
    aboutAuthor:
      'Hermann Ebbinghaus was a German psychologist who founded laboratories in Berlin and Breslau. He carried out his memory experiments with himself as the only subject.',
    cover: { bg: '#143d59', ink: '#f4efe1', accent: '#f4b41a', motif: 'clock' },
    ideas: [
      {
        title: 'Making memory measurable',
        body: [
          'To study pure learning, Ebbinghaus needed material with no meaning and no associations. He invented the nonsense syllable, a consonant, a vowel and a consonant, and wrote out about two thousand three hundred of them.',
          'He read lists of these aloud in time with a metronome until he could recite them without error, and recorded exactly how many repetitions each list required. He kept the time of day and his own habits constant.',
        ],
      },
      {
        title: 'The forgetting curve',
        body: [
          'He then waited and tested himself. Forgetting was fastest at the start. Within an hour more than half of what he had learned was gone, and after a day about two thirds.',
          'After that the loss slowed dramatically. What survived the first days was still largely there a month later. Plotted on paper, the result is a steep drop followed by a long, nearly flat tail.',
        ],
      },
      {
        title: 'Relearning is faster than learning',
        body: [
          'Even when he could not recall a single syllable of an old list, Ebbinghaus found that he could learn it again in fewer repetitions than the first time. He called the difference savings.',
          'This showed that forgotten material is not simply erased. It leaves a trace below the threshold of recall. Extra repetitions beyond the first perfect recital increased the savings still further.',
        ],
      },
      {
        title: 'Spread your practice out',
        body: [
          'In one comparison he learned lists either by many repetitions on one day or by fewer repetitions spread over three days. The spaced schedule gave the same result with far less total effort.',
          'His conclusion is one of the most practical in psychology. With any considerable number of repetitions, distributing them over time is decidedly better than massing them together. Cramming is inefficient.',
        ],
      },
      {
        title: 'Meaning makes the difference',
        body: [
          'For comparison, Ebbinghaus memorized stanzas of a poem by Byron. They took about one tenth of the repetitions that an equal number of nonsense syllables did.',
          'Meaning, rhythm and connection are powerful aids. He also found that the effort needed rises steeply as a list gets longer. Modern spaced repetition software is a direct application of his findings.',
        ],
      },
    ],
    takeaway:
      'You forget fastest right after learning, so review soon and then at widening intervals. Spread practice over days, keep going a little past the point of mastery, and connect new facts to things that mean something.',
  },
  {
    id: 'the-expression-of-the-emotions-in-man-and-animals',
    title: 'The Expression of the Emotions in Man and Animals',
    author: 'Charles Darwin',
    year: '1872',
    category: 'psychology',
    tagline: 'Why we smile, frown and blush, according to the author of evolution.',
    about:
      'A year after applying evolution to human origins, Darwin applied it to the human face. He argued that our expressions are inherited, shared with other animals and much the same in every culture. It was one of the first scientific books illustrated with photographs.',
    whoFor: [
      'Readers interested in body language and emotion',
      'Animal lovers who see feelings in their pets',
      'Anyone curious about the evolutionary roots of behavior',
    ],
    aboutAuthor:
      'Charles Darwin was an English naturalist and the author of On the Origin of Species. He gathered material on expression for more than thirty years.',
    cover: { bg: '#efe3cc', ink: '#2b2622', accent: '#c44536', motif: 'tree' },
    ideas: [
      {
        title: 'Expressions have a history',
        body: [
          'The leading authority of the day held that certain facial muscles were specially created to let humans show their feelings. Darwin set out to show that expressions evolved like any other trait.',
          'If so, they should have precursors in animals. A snarling dog and a sneering person both uncover a canine tooth. Hair stands on end in fear in a cat and, uselessly, in us.',
        ],
      },
      {
        title: 'Three principles',
        body: [
          'Darwin proposes three explanations. Some expressions began as useful actions and persist as habits: we still open our eyes wide in surprise, as if to see better.',
          'Others arise by antithesis. A dog approaching a friend takes the exact opposite posture to one approaching an enemy. A third group, such as trembling, results from the direct overflow of the nervous system.',
        ],
      },
      {
        title: 'The same face everywhere',
        body: [
          'To test whether expressions are inborn, Darwin sent a list of questions to missionaries, traders and officials around the world. Did the people they lived among show grief, anger and astonishment in the same way?',
          'The answers said yes. He took this as evidence that all human groups descend from a common stock. Later researchers found strong support for a core of shared expressions, though how universal they are is still argued.',
        ],
      },
      {
        title: 'Babies, the blind and the insane',
        body: [
          'Darwin looked for cases where learning could be ruled out. He kept a detailed diary of his own infant son\'s first smiles and screams.',
          'He collected observations of people born blind, who smile and frown without ever having seen a face. He studied photographs from an asylum, reasoning that strong emotions appear there with less restraint.',
        ],
      },
      {
        title: 'Blushing, the most human expression',
        body: [
          'One expression has no counterpart in animals. Blushing cannot be produced by any physical means, Darwin notes. It is caused by the mind, specifically by thinking about what others think of us.',
          'It requires self-awareness and concern for reputation, and that makes it peculiarly human. Even here he found the same reaction reported among peoples all over the world.',
        ],
      },
    ],
    takeaway:
      'Our emotional expressions are part of our biological inheritance, shared in outline with other animals and largely common to all humans. Reading a face means reading a very old language.',
  },
  {
    id: 'propaganda',
    title: 'Propaganda',
    author: 'Edward Bernays',
    year: '1928',
    category: 'psychology',
    tagline: 'The founder of public relations explains, with unsettling frankness, how opinion is made.',
    about:
      'Edward Bernays, a nephew of Sigmund Freud, used psychology to sell products and causes. In this short book he argues openly that the shaping of mass opinion by a few experts is not a danger to democracy but a necessary part of it.',
    whoFor: [
      'Anyone who wants to understand marketing, PR and political messaging',
      'Readers trying to become harder to manipulate',
      'People interested in the uneasy relationship between persuasion and democracy',
    ],
    aboutAuthor:
      'Edward Louis Bernays was an Austrian-American consultant widely regarded as the father of public relations. He lived to the age of 103.',
    cover: { bg: '#111111', ink: '#f2ecdc', accent: '#e63946', motif: 'sun' },
    ideas: [
      {
        title: 'The invisible government',
        body: [
          'Bernays opens with a startling claim. The conscious and intelligent manipulation of the habits and opinions of the masses is an important element in democratic society. Those who do it form an invisible government.',
          'We are governed, he says, and our tastes are formed, largely by people we have never heard of. He does not present this as a conspiracy. He presents it as how a large society has to function.',
        ],
      },
      {
        title: 'Why we follow',
        body: [
          'In theory every citizen studies every issue and every product and decides independently. In practice no one has the time. People accept the guidance of leaders, newspapers and custom to narrow the field of choice.',
          'Drawing on his uncle\'s ideas, Bernays adds that people are moved less by reason than by hidden desires and by the groups they belong to. Reach the leader of a group and you reach its members.',
        ],
      },
      {
        title: 'Change the circumstances, not the argument',
        body: [
          'The old salesman said: please buy a piano. The new propagandist works indirectly. He persuades architects and decorators to promote the music room, until owning a home without a piano seems incomplete.',
          'Bernays used this approach himself. Asked to sell bacon, he arranged for physicians to endorse a hearty breakfast, and newspapers reported the advice. The buyer believes the idea was their own.',
        ],
      },
      {
        title: 'A tool for everything',
        body: [
          'The same methods, he argues, serve business, politics, education, charity and the arts. A candidate must dramatize issues. A university must make its work known. A reformer must organize public feeling.',
          'He insists that propaganda is neutral. Whether it is good or bad depends on the cause and on the truthfulness of what is said, and it can as easily be used to fight prejudice as to spread it.',
        ],
      },
      {
        title: 'The trouble with the theory',
        body: [
          'The year after the book appeared, Bernays hired young women to light cigarettes in a parade and called them torches of freedom, linking a tobacco brand to female emancipation.',
          'His confidence that a wise few should guide the many is plainly elitist, and regimes with no interest in democracy studied his techniques. The book is most valuable now as a field guide to methods used on all of us.',
        ],
      },
    ],
    takeaway:
      'Much of what feels like our own preference was arranged by someone who understood group psychology. Ask who benefits from an idea, who the trusted messenger really works for, and how it reached you.',
  },
]
