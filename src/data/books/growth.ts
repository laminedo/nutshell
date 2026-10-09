import type { Book } from '../types'

export const growth: Book[] = [
  {
    id: 'how-to-live-on-24-hours-a-day',
    title: 'How to Live on 24 Hours a Day',
    author: 'Arnold Bennett',
    year: '1908',
    category: 'productivity',
    tagline: "Everyone gets the same daily budget of time. Here's how to spend it.",
    about:
      'Arnold Bennett wrote this brisk, funny little book for the clerks and commuters of Edwardian London who felt that life was passing them by. His advice — claim a small part of each day for your own mind — reads as if it were written for modern knowledge workers.',
    whoFor: [
      'People whose life feels like work and recovery from work',
      'Commuters, and anyone whose evenings seem to vanish',
      'Readers who like their self-help short and witty',
    ],
    aboutAuthor:
      "Arnold Bennett was one of the most successful English novelists of the early twentieth century, best known for The Old Wives' Tale. He was also a prolific journalist, famous for his disciplined working habits.",
    cover: { bg: '#f26b3a', ink: '#1f1410', accent: '#ffe9c7', motif: 'clock' },
    ideas: [
      {
        title: 'Time is the only income everyone receives equally',
        body: [
          "You wake up each morning and your purse is magically filled with twenty-four hours. No one can take them from you, and no one receives more or less than you do. You can't borrow from tomorrow or run up a debt. Talent is never rewarded with an extra hour.",
          "Yet while countless books explain how to live on a given amount of money, almost nobody asks how to live on a given amount of time. Bennett suspects most of us carry a vague, uneasy feeling that the years are slipping by and we haven't yet put our lives in order. He treats that unease as healthy: it is a wish to do something beyond what we are obliged to do.",
        ],
      },
      {
        title: 'Stop treating your job as the whole day',
        body: [
          "Bennett's typical office worker regards the hours from ten to six as the day, and everything around them as a mere prologue and epilogue. Even if he doesn't love his job, he saves his energy for it and coasts through the rest. That attitude, Bennett says, kills interest in the two-thirds of his life he actually owns.",
          "The fix is a shift in thinking. Treat the sixteen hours outside work as a day within the day. During those hours you are free. You earn no wages and answer to no one, exactly like someone with a private income. And don't say you're too tired: the mind does not tire like an arm or a leg. What it wants is change, not rest, except in sleep.",
        ],
      },
      {
        title: 'Start small: a few focused hours a week',
        body: [
          'Bennett warns against heroic resolutions. People who attempt too much fail early, and the failure damages their self-respect. Allow for accidents and for human nature. A glorious failure leads nowhere; a modest success leads to the next success.',
          'His proposal is deliberately limited. Use the morning commute to train your concentration, and set aside ninety minutes on three evenings a week for serious cultivation of the mind. That adds up to roughly seven and a half hours a week. Guard those evenings as firmly as you would a ticket to the theater. Bennett also suggests getting up a little earlier, with tea things laid out the night before so the first minutes are easy.',
        ],
      },
      {
        title: 'Train your attention every morning',
        body: [
          'On the way to work, pick a subject, any subject, and hold your mind on it. Within a few yards it will wander off. Bring it back, again and again, as many times as it takes. The exercise is ordinary and it is hard, and Bennett calls control of the thinking machine the first requirement of a full life.',
          'He suggests giving the mind something worth chewing on, such as a short passage from Marcus Aurelius or Epictetus. He adds a second daily practice for the evening: reflection. Look honestly at how you actually behaved and compare it with the principles you say you hold. Most unhappiness, he thinks, comes from the gap between the two.',
        ],
      },
      {
        title: "Feed your mind with what interests you, and don't be a prig about it",
        body: [
          "Self-cultivation doesn't have to mean literature. If you enjoy concerts, learn how an orchestra is put together and you will hear more. Study the causes behind everyday things, or the workings of your own trade, and nothing will seem humdrum again. If you do choose reading, Bennett recommends difficult books and poetry over novels, and as much time thinking about what you read as reading it.",
          "He closes with warnings. Don't become a bore who lectures others about wasted time. Don't become a slave to your schedule; a program is not a religion. Don't hurry from one task to the next as if you were in prison. And expect some failures at the start, without letting them end the experiment.",
        ],
      },
    ],
    takeaway:
      'Your real life is the part of the day you control. Claim a small, protected slice of it, use it to train your attention and feed your mind, start modestly and keep going.',
  },
  {
    id: 'autobiography-of-benjamin-franklin',
    title: 'The Autobiography of Benjamin Franklin',
    author: 'Benjamin Franklin',
    year: '1791',
    category: 'productivity',
    tagline: 'How a runaway apprentice engineered his own character — and a remarkable life.',
    about:
      "Begun as a letter to his son and never finished, Franklin's memoir traces his rise from the tenth son of a candle maker to printer, inventor and public figure. Along the way it lays out the practical systems he used to improve himself, his business and his city.",
    whoFor: [
      'Self-improvers who love a system',
      'Entrepreneurs and community builders',
      'Anyone curious how one person fit so many careers into one life',
    ],
    aboutAuthor:
      'Benjamin Franklin (1706–1790) was a printer, writer, scientist, inventor and diplomat, and one of the Founding Fathers of the United States.',
    cover: { bg: '#23395b', ink: '#f5eedc', accent: '#f2c14e', motif: 'bolt' },
    ideas: [
      {
        title: 'Teach yourself through deliberate practice',
        body: [
          "Franklin had barely two years of school. Apprenticed in his brother's print shop, he read everything he could borrow and decided to teach himself to write. He took essays from a magazine he admired, jotted short hints about each sentence, set them aside for a few days and then tried to rebuild the essays in his own words.",
          'Then he compared his version with the original and corrected his faults. To stretch his vocabulary he turned the essays into verse and back into prose. To learn structure he shuffled his notes and tried to restore the best order. It is a feedback loop anyone can copy: imitate, compare, correct, repeat.',
        ],
      },
      {
        title: 'Build character with a system: the thirteen virtues',
        body: [
          'In his twenties Franklin conceived what he called a bold and arduous project of arriving at moral perfection. He listed thirteen virtues, including temperance, silence, order, resolution, frugality, industry, sincerity and humility, and wrote a one-line rule for each.',
          'Knowing that attacking all of them at once would fail, he gave strict attention to one virtue each week. In a little book he ruled a chart with a column for every day and marked each lapse with a black spot. Thirteen weeks made one course, and he ran four courses a year. He never reached perfection, and order defeated him entirely, but he concluded that the attempt made him a better and happier man.',
        ],
      },
      {
        title: 'Give every day a shape',
        body: [
          "Franklin's plan for the day began at five with a question: what good shall I do this day? The morning hours were for washing, planning and study. Work filled two long blocks before and after a midday break for reading and looking over his accounts.",
          'Evening was for putting things back in their places, supper, music or conversation, and a second question: what good have I done today? He admits he could not always keep to the scheme, especially when customers set his hours. But a day with a deliberate outline, opened with intention and closed with review, served him for life.',
        ],
      },
      {
        title: "Hard work and reputation are a business's best capital",
        body: [
          'When Franklin opened his own printing house in Philadelphia he had debts and established rivals. He made sure not only to be industrious and frugal but to be seen to be so. He dressed plainly, avoided idle amusements and sometimes pushed his paper home through the streets in a wheelbarrow.',
          'Neighbors noticed that he was still at work when they went to bed and at it again before they rose. Merchants began to extend him credit and send him customers. Later he multiplied his income by setting up his best workers as partners in other colonies, with every duty spelled out in writing. By forty-two he was able to step back from daily business and give his time to science and public service.',
        ],
      },
      {
        title: 'Do good together, and persuade gently',
        body: [
          'Franklin founded the Junto, a club of ambitious tradesmen who met every Friday evening to debate questions of morals, politics and science. Out of this small group came a subscription library, a volunteer fire company, a school that grew into a university, a hospital and better-paved, better-lit streets.',
          "He also learned how to win support. He gave up blunt words like certainly and undoubtedly in favor of phrases such as it appears to me. When proposing a project, he presented it as the idea of a number of friends rather than his own, so that no one's vanity was provoked. People, he found, accept ideas far more easily when they aren't contradicted head-on, and a little sacrifice of credit is repaid many times over.",
        ],
      },
    ],
    takeaway:
      'Franklin treated his own character, time and community as things that could be improved through small, repeated experiments. Pick one thing to work on, track it honestly, shape your days on purpose and bring other people along.',
  },
  {
    id: 'as-a-man-thinketh',
    title: 'As a Man Thinketh',
    author: 'James Allen',
    year: '1903',
    category: 'mindset',
    tagline: 'Your thoughts are seeds. Your life is the garden.',
    about:
      "This slim essay argues one thing with great persistence: that the quality of a person's inner life shapes their character, their health and, in time, their circumstances. It became one of the foundation stones of the modern self-help movement.",
    whoFor: [
      'People who feel stuck and want a place to start',
      'Readers curious where modern self-help came from',
      'Anyone who wants a short, reflective read',
    ],
    aboutAuthor:
      'James Allen was an English writer who left a career as a private secretary to live quietly on the Devon coast, where he wrote a series of short books on character and thought.',
    cover: { bg: '#dce7d3', ink: '#1f2a1c', accent: '#3f7d4f', motif: 'sprout' },
    ideas: [
      {
        title: 'Your character is the sum of your thoughts',
        body: [
          "Allen's opening claim is absolute. A person is literally what they think, and their character is the complete sum of all their thoughts. Action is the blossom of thought, and joy and suffering are its fruit. Even acts that seem spontaneous have grown from seeds planted earlier in the mind.",
          'A noble character is therefore never a matter of luck or favor. It is the natural result of sustained effort in right thinking. The same process, running carelessly, produces the opposite. In the armory of thought we forge the tools that build us up and the weapons that destroy us. We are, Allen insists, the makers of ourselves.',
        ],
      },
      {
        title: 'Tend your mind like a garden',
        body: [
          'The mind is like a garden, which can be carefully cultivated or left to run wild. Either way, it will grow something. If no useful seeds are planted, weed seeds will drift in and keep multiplying.',
          'A gardener clears the plot and plants what they actually want to grow. In the same way, a person can weed out wrong, useless and impure thoughts and cultivate useful ones. By paying attention to your thinking, and by tracing its effects on yourself, on others and on your circumstances, you gradually discover that you are the master gardener of your own life.',
        ],
      },
      {
        title: 'Circumstances reveal the person',
        body: [
          "Allen's boldest idea is that circumstances do not make a person; they reveal them. Our outer world tends to arrange itself around our inner one. We do not attract what we want, he writes, but what we are.",
          'Many people are anxious to improve their circumstances but unwilling to improve themselves, and so they stay stuck. Read today, this can sound harsh, because it leaves little room for luck or injustice. Its useful core is a question of focus: begin with the part of the situation that is yours to change, and work outward from there.',
        ],
      },
      {
        title: 'Link your thinking to a purpose',
        body: [
          'Until thought is joined to purpose, nothing intelligent gets accomplished. Most people let their minds drift, and drifting leads to worry, fear and self-pity. Allen urges you to choose a worthwhile aim and make it the central point of your thoughts.',
          "You may fail again and again on the way. The strength of character you gain is the real measure of success, and each failure becomes a new starting point. Doubt and fear must be shut out firmly, because they break the straight line of effort. And if you have no great purpose yet, give yourself completely to doing today's duty flawlessly, however small. That is how focus and resolve are built.",
        ],
      },
      {
        title: 'Hold a vision, and cultivate calm',
        body: [
          'Dreamers, Allen writes, are the saviors of the world. Cherish your vision and your ideals, for out of them your world will be built. The greatest achievement was at first, and for a time, only a dream. The oak sleeps in the acorn.',
          'The essay ends with serenity. Calmness of mind is one of the beautiful jewels of wisdom, the result of long and patient effort in self-control. The calm person, having learned to govern themselves, knows how to adapt to others, and people instinctively trust and rely on them. The more tranquil a person becomes, the greater their influence and their power for good.',
        ],
      },
    ],
    takeaway:
      'What you repeatedly think shapes who you become and, over time, the life you lead. Choose your thoughts as deliberately as a gardener chooses seeds, give them a purpose and protect your calm.',
  },
  {
    id: 'self-reliance',
    title: 'Self-Reliance',
    author: 'Ralph Waldo Emerson',
    year: '1841',
    category: 'mindset',
    tagline: 'An electrifying case for trusting your own mind.',
    about:
      "Emerson's most famous essay is a sustained argument against conformity. Society, he says, rewards imitation and punishes independence, and the only life worth having is one built on your own perception, your own work and your own voice.",
    whoFor: [
      "People who second-guess themselves into doing what everyone else does",
      'Creators, founders and anyone on an unconventional path',
      'Readers who enjoy being provoked',
    ],
    aboutAuthor:
      'Ralph Waldo Emerson was an American essayist, lecturer and poet who led the Transcendentalist movement from Concord, Massachusetts. He was a mentor to Henry David Thoreau.',
    cover: { bg: '#f2d24b', ink: '#1b1b1b', accent: '#e4572e', motif: 'sun' },
    ideas: [
      {
        title: 'Trust your own thought',
        body: [
          'To believe your own thought, to believe that what is true for you in your private heart is true for everyone: that, Emerson says, is genius. Yet we habitually dismiss our ideas simply because they are ours. We learn to watch the stars of poets and sages and ignore the flash of light that crosses our own mind.',
          'The punishment arrives later. In every work of genius we recognize our own rejected thoughts, returned to us with a kind of borrowed majesty. Some stranger says with complete confidence exactly what we had felt all along, and we are forced to take our own opinion, ashamed, from somebody else.',
        ],
      },
      {
        title: 'Envy is ignorance and imitation is suicide',
        body: [
          "There comes a moment in everyone's education when they realize they must accept themselves, for better or worse, as their portion. The universe is full of good, but no nourishing grain of it will reach you except through the work you put into the one plot of ground you have been given.",
          "The power that lives in you is new in nature. No one but you knows what you can do with it, and even you don't know until you have tried. So do your own work and you will strengthen yourself. Insist on yourself and never imitate. Your own gift you can offer with the force of a whole life's cultivation; a borrowed talent you only half possess.",
        ],
      },
      {
        title: 'Society is in conspiracy against your independence',
        body: [
          'Emerson pictures society as a joint-stock company in which the members agree to give up their liberty in exchange for security. The virtue it most demands is conformity. It loves names and customs, not realities and creators. Whoever wants to be a full human being must be a nonconformist.',
          "The difficulty is practical. It is easy to follow the world's opinion while you are in the world, and easy to follow your own when you are alone. The great person is the one who, in the middle of the crowd, keeps the independence of solitude with perfect good humor. For refusing to conform, the world will show you its displeasure. You have to learn how much a sour face is really worth.",
        ],
      },
      {
        title: 'A foolish consistency is the hobgoblin of little minds',
        body: [
          'The second fear that keeps us from trusting ourselves is our own past. We feel bound to what we said yesterday because other people have nothing else to judge us by. Emerson asks why you should drag that corpse of memory around. Say what you think today in firm words, and tomorrow say what tomorrow thinks, even if it contradicts everything.',
          'You will be misunderstood, he admits. So were Socrates, Jesus, Luther, Copernicus, Galileo and Newton. To be great is to be misunderstood. And seen from far enough away, honest actions line up by themselves: the course of the best ship is a zigzag of a hundred tacks, yet over the whole voyage it runs straight.',
        ],
      },
      {
        title: 'Nothing can bring you peace but yourself',
        body: [
          "Emerson applies the principle everywhere. People travel to escape themselves, but traveling is a fool's paradise: you wake up in Naples and find beside you the same sad self you fled from. People lean on property, institutions and the size of their party, and measure each other by what they have rather than what they are.",
          "They also wait for luck. A political victory, a rise in income, the return of a friend or a recovery from illness lifts your spirits, and you think good days are coming. Don't believe it, Emerson says. Nothing can bring you peace but yourself. Nothing can bring you peace but the triumph of principles.",
        ],
      },
    ],
    takeaway:
      'The essay is a dare: stop outsourcing your judgment. Take your own perceptions seriously, do the work only you can do, accept being misunderstood, and let yourself change your mind.',
  },
  {
    id: 'habit',
    title: 'Habit',
    author: 'William James',
    year: '1890',
    category: 'mindset',
    tagline: 'The psychologist who explained, a century early, why habits run our lives.',
    about:
      "This chapter from James's landmark Principles of Psychology was so popular that it was reprinted as a small book. It explains habit as a physical fact about a plastic nervous system, shows how habits hold people and societies in place, and ends with practical rules for building better ones.",
    whoFor: [
      'Anyone trying to build a habit or break one',
      'Fans of modern habit books who want the original source',
      'Readers interested in how the brain shapes character',
    ],
    aboutAuthor:
      'William James was a Harvard philosopher and physician, often called the father of American psychology. He was the brother of the novelist Henry James.',
    cover: { bg: '#2b2b3a', ink: '#f2ede3', accent: '#7fd1b9', motif: 'loops' },
    ideas: [
      {
        title: 'We are bundles of habits',
        body: [
          'Look at any living creature from the outside, James begins, and the first thing you notice is that it is a bundle of habits. He traces this to a physical fact. The nervous system is plastic: weak enough to yield to an influence, strong enough not to yield all at once, and able to keep the new shape afterward.',
          "A sheet of paper folds most easily along an old crease. A lock works more smoothly after use, and clothes hang better once they've been worn. In the same way, every time a nervous current passes along a pathway, the pathway deepens and the current passes more easily next time. Habits are the routes that our own activity has worn into us.",
        ],
      },
      {
        title: 'Habit frees the mind for higher work',
        body: [
          "Habit has two practical results. It makes our movements simpler, more accurate and less tiring. And it reduces the conscious attention they require. A beginner at the piano moves the whole body to strike one key; the expert's fingers run ahead while the mind is on the music.",
          'James draws a rule from this. The more of the details of daily life we can hand over to the effortless custody of automatism, the more our higher powers of mind are set free for their proper work. There is no more miserable person, he writes, than one for whom nothing is habitual but indecision, and for whom getting up, starting work and every small act must be deliberated afresh each day.',
        ],
      },
      {
        title: 'Habit is the great flywheel of society',
        body: [
          'Habit, James says, is the enormous flywheel of society, its most precious conservative agent. It keeps the fisherman at sea through the winter and the miner in his darkness. It keeps different social classes from mixing, and commits each of us to fight out the battle of life along the lines of our upbringing or our early choices.',
          'By twenty-five, he observes, you can already see the professional mannerisms settling on the young doctor, lawyer or salesman. By thirty, he claims, character has set like plaster. Modern research is more optimistic about change later in life, but his practical conclusion still holds: it matters enormously which habits you lay down early, because they are much easier to form than to undo.',
        ],
      },
      {
        title: 'Launch strongly and allow no exceptions',
        body: [
          'James offers practical maxims for anyone trying to gain a new habit or drop an old one. The first is to launch yourself with as strong and decided an initiative as possible. Surround yourself with conditions that support the new way, make commitments that are incompatible with the old one, and take a public pledge if the case allows.',
          'The second maxim is never to allow an exception until the new habit is securely rooted in your life. Each lapse is like dropping a ball of string that you have been carefully winding up: a single slip undoes more than a great many turns will wind again. Unbroken continuity is how the nervous system is trained to act reliably in the right direction.',
        ],
      },
      {
        title: 'Act at the first opportunity, and keep effort alive',
        body: [
          'The third maxim: seize the very first chance to act on every resolution you make. A resolve leaves its mark on the brain not when it is formed but when it produces action. Fine feelings that evaporate without a deed are worse than a lost opportunity, because they train you to feel without doing.',
          'Finally, keep the faculty of effort alive with a little unnecessary exercise every day. Do something for no other reason than that you would rather not, the way a person pays insurance on a house. James ends on a sober and hopeful note. Every small act is being counted by your nerve cells, for good as well as ill. Work faithfully each hour, and you will wake up one morning to find yourself among the competent ones of your generation.',
        ],
      },
    ],
    takeaway:
      "Your daily actions are physically shaping the person you will be. Automate the good routines, start new ones decisively, don't break the chain while they're forming, and act on your resolutions immediately.",
  },
]
