import type { Book } from '../types'

export const philosophy: Book[] = [
  {
    id: 'meditations',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    year: 'c. 175 CE',
    category: 'philosophy',
    tagline: "A Roman emperor's private notes on staying steady when the world isn't.",
    about:
      'Never meant for publication, Meditations is the working notebook of a man running an empire through war, plague and betrayal. In short entries written to himself, Marcus Aurelius rehearses the Stoic habits that kept him calm, fair and useful.',
    whoFor: [
      "Anyone who feels pushed around by events they can't control",
      'Leaders who want to stay decent under pressure',
      'Readers curious about Stoicism straight from the source',
    ],
    aboutAuthor:
      'Marcus Aurelius ruled Rome from 161 to 180 CE and is remembered as the last of the "Five Good Emperors". He wrote these notes in Greek, much of the time while on military campaign.',
    cover: { bg: '#1f2a44', ink: '#f3ebdd', accent: '#e0a93b', motif: 'columns' },
    ideas: [
      {
        title: 'Your judgments are the one thing you truly own',
        body: [
          "You can't choose the weather, other people's moods or what fortune sends your way. You can choose what you make of them. Marcus returns to this thought more than any other: events are neutral until we attach an opinion to them.",
          "Take away the opinion that you have been harmed, and much of the harm goes with it. This isn't denial. It is the habit of pausing between what happens and the story you tell yourself about it, and then choosing the story with care.",
        ],
      },
      {
        title: 'Start the day expecting difficult people',
        body: [
          "One entry opens with a morning reminder: today I will meet people who are meddling, ungrateful, arrogant and unfair. The point isn't cynicism. It's preparation. Nobody is outraged by rain they knew was coming.",
          'Then comes the second step. These people behave badly because they are mistaken about what is good, and they share the same nature he does. Humans are made to cooperate, like two hands or two rows of teeth. So the fitting response is patience, and where possible a gentle correction, never resentment.',
        ],
      },
      {
        title: 'Do the task in front of you, and do it well',
        body: [
          'Even an emperor is tempted to stay under the blankets. Marcus argues himself out of bed: a human being is built for useful work the way a bee is built to make honey. Getting up and doing your job is simply acting according to your nature.',
          "He keeps the standard small and concrete. Give the present task your full care, seriousness and goodwill, as if it were the last thing you'd ever do. Don't look around for applause afterward. A vine produces grapes and asks for nothing more; a good act is complete in itself.",
        ],
      },
      {
        title: 'Keep the shortness of life in view',
        body: [
          'Marcus lists the famous dead — generals, philosophers, entire royal courts — and observes that they are gone and mostly forgotten. Fame is a brief echo, kept alive by people who will soon be dead themselves.',
          'The thought is meant to free you, not depress you. If time is this short, none of it should go to grudges, vanity or worrying about what others think. What remains is the present moment, which is all anyone ever really has and therefore all anyone can ever lose.',
        ],
      },
      {
        title: 'What blocks the way becomes the way',
        body: [
          'When something stands in the way of your plan, the mind can adapt and turn the obstacle into raw material. A strong fire takes whatever is thrown on it and burns higher. In the same way, a difficult colleague is a chance to practice patience and a setback is a chance to practice courage.',
          'Marcus never promises that things will go well. He promises something sturdier: that you can always respond well. Your plans can be stopped, but your ability to act with justice, honesty and calm cannot.',
        ],
      },
    ],
    takeaway:
      'You control very little, but you do control your judgments, your effort and your character. Guard those, treat other people as partners, remember that time is short, and no event can make you a worse person.',
  },
  {
    id: 'on-the-shortness-of-life',
    title: 'On the Shortness of Life',
    author: 'Seneca',
    year: 'c. 49 CE',
    category: 'philosophy',
    tagline: "Life isn't short. We just waste most of it.",
    about:
      'In a letter to his friend Paulinus, the Stoic philosopher Seneca takes on the oldest complaint there is: that life is too brief. His answer is blunt. We are given plenty of time; we simply spend it as if the supply were endless.',
    whoFor: [
      'People who are always busy and never caught up',
      'Anyone postponing what matters until "later"',
      'Readers who want a short, sharp way into Stoic thought',
    ],
    aboutAuthor:
      'Lucius Annaeus Seneca was a Roman statesman, playwright and adviser to the emperor Nero. His essays and letters remain some of the most readable works of ancient philosophy.',
    cover: { bg: '#e9dfc9', ink: '#2a2419', accent: '#c4472b', motif: 'hourglass' },
    ideas: [
      {
        title: 'Life is long enough — we just waste it',
        body: [
          "Seneca begins by turning the usual complaint upside down. We are not given a short life; we make it short. There is enough time for the highest achievements if it is invested well, but it drains away through distraction, pointless ambition and other people's errands.",
          'A great fortune vanishes quickly in the hands of a bad manager, while a modest one grows when it is looked after. Time works the same way. The problem is never the amount we receive. It is how carelessly we spend it.',
        ],
      },
      {
        title: 'We guard our money and give away our time',
        body: [
          'No one hands their property to strangers, yet people let almost anyone walk in and occupy their days. We are tight-fisted with coins and reckless with the one resource that can never be earned back.',
          'Seneca proposes an audit. Add up the hours taken by quarrels, social obligations, needless worry and aimless bustle. Then see how little was left for yourself. Most people, he says, reach old age having truly lived only a small fraction of their years. The rest was not life, merely time.',
        ],
      },
      {
        title: 'Being busy is not the same as living',
        body: [
          'The Romans Seneca describes are permanently occupied: chasing promotions, managing clients, perfecting their dinner parties and their hair. Their attention is pulled in so many directions that nothing sinks in. A preoccupied mind, he argues, cannot do anything well, least of all the art of living.',
          "Being in demand feels important, but it means your life belongs to whoever asks for it. An old man with white hair hasn't necessarily lived long; he has only existed long. A ship tossed in circles by a storm hasn't made a long voyage. It has just been thrown around a great deal.",
        ],
      },
      {
        title: 'Postponing life is the biggest waste of all',
        body: [
          'People plan to start living properly at fifty or sixty, once the work is finished. Seneca finds this absurd. Who has guaranteed them those years? It is foolish to save for yourself only the leftovers of life, the part that is good for nothing else.',
          'Expectation is the great obstacle: it hangs on tomorrow and loses today. The future is uncertain and the past is fixed. Only the present can be used, and it is slipping away while you make plans. So begin at once, and treat each day as if it were a complete life.',
        ],
      },
      {
        title: 'Time spent with great minds makes life longer',
        body: [
          'The cure is not idleness but real leisure: time given to philosophy and to the best thinkers of every age. Through books you can debate with Socrates or find calm with Epicurus. None of them will be too busy to see you, and none will send you away empty-handed.',
          'This is how a life is lengthened. The wise person is not confined to their own era; every century before them becomes part of their experience. Honors and monuments decay, but what the mind has made its own is beyond the reach of fortune.',
        ],
      },
    ],
    takeaway:
      'You have more time than you think and less than you act like. Stop lending your days to every demand, stop deferring the life you want, and spend your best hours on what will still matter at the end.',
  },
  {
    id: 'enchiridion',
    title: 'The Enchiridion',
    author: 'Epictetus',
    year: 'c. 125 CE',
    category: 'philosophy',
    tagline: 'A pocket manual for an untroubled mind.',
    about:
      'Enchiridion means "handbook", and that is exactly what this is: a short set of instructions for daily life, compiled by a student from the lectures of Epictetus. It begins with a single distinction and builds an entire way of living on top of it.',
    whoFor: [
      "People who worry about things they can't change",
      'Anyone who wants practical rules rather than theory',
      'Readers interested in the roots of modern cognitive therapy',
    ],
    aboutAuthor:
      'Epictetus was born into slavery, gained his freedom and became one of the most respected teachers in the Roman world. He wrote nothing himself; his student Arrian recorded his teaching.',
    cover: { bg: '#7a2e22', ink: '#f6ebd9', accent: '#f0b74a', motif: 'rings' },
    ideas: [
      {
        title: 'Some things are up to us, and some are not',
        body: [
          'The handbook opens with the distinction that carries everything else. Up to us are our opinions, choices, desires and aversions. Not up to us are our body, possessions, reputation and status. The first group is naturally free. The second always depends on something outside ourselves.',
          "Misery comes from confusing the two: demanding control over what can't be controlled and neglecting what can. So before reacting to anything, ask which group it belongs to. If it isn't up to you, be ready to say that it is nothing to you.",
        ],
      },
      {
        title: 'We are disturbed by our opinions, not by events',
        body: [
          'Loss, insult, even death are not upsetting in themselves. If they were, they would upset everyone in the same way. What disturbs us is the judgment that they are terrible. When someone irritates you, it is your own opinion about them doing the irritating.',
          'It follows that when you are troubled, the place to look is your own thinking. Epictetus offers a ladder of progress. The untrained person blames others for their unhappiness. The beginner blames themselves. The person who has finished their training blames no one at all.',
        ],
      },
      {
        title: 'Wish for things to happen as they do',
        body: [
          "Don't demand that events follow your wishes. Instead, wish for them to happen as they actually happen, and your life will go smoothly. This is not passivity. It is refusing to spend energy fighting facts.",
          "Epictetus offers two images. Life is like a play: you don't choose whether your part is a beggar, a ruler or an ordinary citizen, but acting it well is your job. And life is like a banquet: when a dish comes to you, take a polite share; when it passes, don't grab at it; when it hasn't arrived, don't crane your neck toward it.",
        ],
      },
      {
        title: 'Hold what you love like something on loan',
        body: [
          "Start small. If you are fond of a particular cup, remind yourself that it is a cup, a thing that can break. Then when it breaks you won't be shattered with it. Epictetus asks you to extend the exercise, gently, all the way up to the people you love.",
          'Never say of anything that you have lost it, he advises; say that you have given it back. Whatever you have is yours to look after for a while, the way travelers treat a room at an inn. Keeping that in mind makes you more grateful while things last and steadier when they go.',
        ],
      },
      {
        title: "Don't talk about your principles — embody them",
        body: [
          "Don't call yourself a philosopher or lecture people at dinner about how they should eat. Just eat as you should. Sheep don't bring their grass to the shepherd to prove how much they've eaten. They digest it and produce wool and milk. Show your principles the same way, through what you do.",
          'And stop putting it off. You are no longer a child, Epictetus says, but an adult, and if you keep making one resolution after another you will fail to notice that you are making no progress. Decide now to live as someone worthy of growing up, and treat whatever seems best as a rule you cannot break.',
        ],
      },
    ],
    takeaway:
      "Sort everything into what is up to you and what isn't. Pour your effort into the first group — your judgments, choices and actions — and meet the second with acceptance. Freedom is not getting what you want; it is wanting only what is in your power.",
  },
  {
    id: 'tao-te-ching',
    title: 'Tao Te Ching',
    author: 'Lao Tzu',
    year: 'c. 400 BCE',
    category: 'philosophy',
    tagline: 'Eighty-one short verses on the power of not forcing.',
    about:
      'The founding text of Taoism is barely five thousand characters long, yet it is one of the most translated books in the world. In compact, paradoxical verses it describes the Tao — the Way things naturally move — and how a person or a ruler can live in step with it.',
    whoFor: [
      'Overthinkers and over-controllers',
      'Leaders interested in a quieter style of influence',
      'Anyone drawn to simplicity',
    ],
    aboutAuthor:
      'Lao Tzu, "the Old Master", is traditionally described as a record keeper at the Zhou court and an older contemporary of Confucius. Scholars debate whether he was one person or the name given to a tradition.',
    cover: { bg: '#f4efe6', ink: '#1a1a1a', accent: '#2f6f62', motif: 'waves' },
    ideas: [
      {
        title: 'The Way cannot be captured in words',
        body: [
          'The book begins by admitting that its subject escapes language: the Way that can be spoken is not the lasting Way. The Tao is the source and the pattern of everything, older than names and categories. It can be pointed to, but never pinned down.',
          'Naming divides the world. Call one thing beautiful and you have created ugliness; long and short, high and low, difficult and easy all define each other. So the sage holds opposites lightly, teaches without many words and gets things done without making a fuss.',
        ],
      },
      {
        title: 'Act without forcing',
        body: [
          "The central practice is wu wei, often translated as non-action. It doesn't mean doing nothing. It means not straining against the grain of things: acting at the right moment, with the least effort, and without the need to dominate the outcome.",
          "Forcing produces its own backlash. Someone on tiptoe can't stand firm, and someone who rushes ahead doesn't get far. Whoever grasps at things loses them. The Tao itself never strives, yet nothing is left undone. So do your work, then step back. That, the book says, is the way of heaven.",
        ],
      },
      {
        title: 'The soft overcomes the hard',
        body: [
          "Water is the book's favorite image. Nothing in the world is softer or more yielding, yet nothing is better at wearing down what is hard and strong. Water settles in the low places everyone else avoids, and it nourishes everything without competing.",
          'Living things show the same truth. A growing plant is tender and supple; a dead one is dry and brittle. Stiffness belongs to death, flexibility to life. An army that cannot bend will be broken, and a tree that cannot bend will snap. Yielding is not weakness. It is how you last.',
        ],
      },
      {
        title: 'Emptiness is what makes things useful',
        body: [
          'Thirty spokes meet at a hub, but it is the hole in the center that lets the wheel turn. Clay is shaped into a pot, but the empty space inside is what holds water. Doors and windows are cut into walls, and the openings make the room livable. What is there gives form; what is not there gives use.',
          'A life needs the same kind of space. Fill a bowl to the brim and it spills. Keep sharpening a blade and it will soon go blunt. The person who knows they have enough is rich. Fewer desires and simpler ways are a return to something solid, not a loss.',
        ],
      },
      {
        title: 'The best leader is hardly noticed',
        body: [
          "The book ranks rulers. The best are barely known to their people. Next come those who are loved and praised, then those who are feared, and last those who are despised. When the best leader's work is finished, the people say: we did it ourselves.",
          'Governing a large country is like cooking a small fish. Poke at it too much and it falls apart. The sea rules a hundred rivers because it lies below them, and a leader guides people by placing themselves beneath them. Lao Tzu names three treasures to keep: compassion, frugality and not presuming to put yourself first.',
        ],
      },
    ],
    takeaway:
      'Stop pushing so hard. Leave room, stay flexible, want less and lead from below. What yields and adapts, like water, ends up shaping everything around it.',
  },
]
