var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(9000);

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.engine('jade', require('jade').__express);

  app.use('/js', express.static(__dirname + '/js'));
  app.use('/css', express.static(__dirname + '/css'));
  app.use('/img', express.static(__dirname + '/img'));
});

function renderTemplate(req, res, page, variales) {
  res.render(page);
}

app.get('/', function(req, res) {
  renderTemplate(req, res, 'index.jade');
});

app.get('/winnie', function(req, res) {
  renderTemplate(req, res, 'winnie.jade');
});

var x = 0;
io.sockets.on('connection', function(socket) {
  socket.emit('quote', quotes[(x++ % quotes.length)] + " - Winnie the Pooh");
  socket.on('getQuote', function() {
    socket.emit('quote', quotes[(x++ % quotes.length)] + " - Winnie the Pooh");
  });
});

var quotes = [
      "If you \"live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.",
      "Piglet sidled up to Pooh from behind. \"Pooh?\" he whispered. \"Yes, Piglet?\" \"Nothing,\" said Piglet, taking Pooh's hand. \"I just wanted to be sure of you.",
      "If ever there is tomorrow when we're not together... there is something you must always remember. You are braver than you believe, stronger than you seem, and smarter than you think. But the most important thing is, even if we're apart... I'll always be with you.",
      "We'll be Friends Forever, won't we, Pooh?' asked Piglet. Even longer,' Pooh answered.",
      "How lucky I am to have something that makes saying goodbye so hard.",
      "Weeds are flowers, too, once you get to know them.",
      "Promise me you'll always remember: You're braver than you believe, and stronger than you seem, and smarter than you think.",
      "Some people care too much. I think it's called love.",
      "Sometimes,' said Pooh, 'the smallest things take up the most room in your heart.",
      "I think we dream so we don’t have to be apart for so long. If we’re in each other’s dreams, we can be together all the time.",
      "You can't stay in your corner of the Forest waiting for others to come to you. You have to go to them sometimes.",
      "It is more fun to talk with someone who doesn't use long, difficult words but rather short, easy words like \"What about lunch?",
      "Promise me you'll never forget me because if I thought you would, I'd never leave.",
      "One of the advantages of being disorganized is that one is always having surprising discoveries.",
      "How do you spell 'love'?\" - Piglet \"You don't spell it...you feel it.\" - Pooh",
      "If the person you are talking to doesn't appear to be listening, be patient. It may simply be that he has a small piece of fluff in his ear.",
      "When you wake up in the morning, Pooh,\" said Piglet at last, \"what's the first thing you say to yourself?\"  \"What's for breakfast?\" said Pooh. \"What do you say, Piglet?\"  \"I say, I wonder what's going to happen exciting today?\" said Piglet.  Pooh nodded thoughtfully. \"It's the same thing,\" he said.",
      "People say nothing is impossible, but I do nothing every day.",
      "I used to believe in forever, but forever's too good to be true",
      "Did you ever stop to think, and forget to start again?",
      "Rivers know this: there is no hurry. We shall get there some day.",
      "What day is it?\" It's today,\" squeaked Piglet. My favorite day,\" said Pooh.",
      "The things that make me different are the things that make me.",
      "I'm not lost for I know where I am. But however, where I am may be lost.",
      "Sometimes, if you stand on the bottom rail of a bridge and lean over to watch the river slipping slowly away beneath you, you will suddenly know everything there is to be known.",
      "It's snowing still,\" said Eeyore gloomily. \"So it is.\" \"And freezing.\" \"Is it?\" \"Yes,\" said Eeyore. \"However,\" he said, brightening up a little, \"we haven't had an earthquake lately.",
      "Oh Tigger, where are your manners?\"  \"I don’t know, but I bet they’re having more fun than I am.",
      "Some people talk to animals. Not many listen though. That's the problem.",
      "Don't underestimate the value of Doing Nothing, of just going along, listening to all the things you can't hear, and not bothering.",
      "Well,\" said Pooh, \"what I like best,\" and then he had to stop and think.  Because although Eating Honey was a very good thing to do, there was a moment just before you began to eat it which was better than when you were, but he didn't know what it was called.",
      "When you see someone putting on his Big Boots, you can be pretty sure that an Adventure is going to happen.",
      "What I like doing best is Nothing.\"  \"How do you do Nothing,\" asked Pooh after he had wondered for a long time.  \"Well, it's when people call out at you just as you're going off to do it, 'What are you going to do, Christopher Robin?' and you say, 'Oh, Nothing,' and then you go and do it.  It means just going along, listening to all the things you can't hear, and not bothering.\"  \"Oh!\" said Pooh.",
      "[A] quotation is a handy thing to have about, saving one the trouble of thinking for oneself, always a laborious business.\"  (<em>The Record Lie</em>)",
      "Friendship,\" said Christopher Robin, \"is a very comforting thing to have.",
      "When you are a Bear of Very Little Brain, and you Think of Things, you find sometimes that a Thing which seemed very Thingish inside you is quite different when it gets out into the open and has other people looking at it.",
      "Just because an animal is large, it doesn't mean he doesn't want kindness; however big Tigger seems to be, remember that he wants as much kindness as Roo.",
      "Think, think, think.",
      "What I say is that, if a man really likes potatoes, he must be a pretty decent sort of fellow.",
      "To the uneducated an A is just three sticks.",
      "Hallo, Rabbit,” he said, “is that you?”  \"Let’s pretend it isn’t,” said Rabbit, “and see what happens.",
      "If there ever comes a day when we can't be together, keep me in your heart. I'll stay there forever.",
      "A bear, however hard he tries, grows tubby without exercise.",
      "I don’t feel very much like Pooh today,\" said Pooh.  \"There there,\" said Piglet. \"I’ll bring you tea and honey until you do.",
      "Pay attention to where you are going because without meaning you might get nowhere.",
      "Rabbit's clever,\" said Pooh thoughtfully. \"Yes,\" said Piglet, \"Rabbit's clever.\" \"And he has Brain.\" \"Yes,\" said Piglet, \"Rabbit has Brain.\" There was a long silence. \"I suppose,\" said Pooh, \"that that's why he never understands anything.",
      "Think it over, think it under.",
      "I wonder what Piglet is doing,\" thought Pooh.  \"I wish I were there to be doing it, too.",
      "I don't see much sense in that,\" said Rabbit. \"No,\" said Pooh humbly, \"there isn't. But there was going to be when I began it. It's just that something happened to it along the way.",
      "Nobody can be uncheered with a balloon.",
      "The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.",
      "That's right,\" said Eeyore. \"Sing. Umty-tiddly, umty-too. Here we go gathering Nuts and May. Enjoy yourself.\" \"I am,\" said Pooh.",
      "He thought how sad it was to be an Animal who had never had a bunch of violets picked for him.",
      "But [Pooh] couldn't sleep. The more he tried to sleep the more he couldn't. He tried counting Sheep, which is sometimes a good way of getting to sleep, and, as that was no good, he tried counting Heffalumps. And that was worse. Because every Heffalump that he counted was making straight for a pot of Pooh's honey, and eating it all. For some minutes he lay there miserably, but when the five hundred and eighty-seventh Heffalump was licking its jaws, and saying to itself, \"Very good honey this, I don't know when I've tasted better,\" Pooh could bear it no longer.",
      "A Proper Tea is much nicer than a Very Nearly Tea, which is one you forget about afterwards.",
      "Mind over matter, will make the Pooh unfatter.",
      "Supposing a tree fell down, Pooh, when we were underneath it?' 'Supposing it didn't,' said Pooh after careful thought. Piglet was comforted by this.",
      "If ever there is tomorrow when we're not together... there is something you must always remember. you are braver than you believe, stronger than you seem, and smarter than you think. But the most important thing is, even if we're apart... I'll always be with you.”    “It is more fun to talk with someone who doesn't use long, difficult words but rather short, easy words like \"What about lunch?",
      "When we asked Pooh what the opposite of an Introduction was, he said \"The what of a what?\" which didn't help us as much as we had hoped, but luckily Owl kept his head and told us that the Opposite of an Introduction, my dear Pooh, was a Contradiction; and, as he is very good at long words, I am sure that that's what it is.",
      "I always <em>did</em> whatever I liked,\" she said, \"but now I really <em>can</em> do it.",
      "The spring has sprung, the grass is rizz. I wonder where them birdies is?",
      "She also considered very seriously what she would look like in a little cottage in the middle of the forest, dressed in a melancholy gray and holding communion only with the birds and trees; a life of retirement away from the vain world; a life into which no man came.  It had its attractions, but she decided that gray did not suit her.",
      "In a very little time they got to the corner of the field by the side of the pine wood where Eeyore's house wasn't any longer. 'There!' said Eeyore. 'Not a stick of it left! Of course, I've still got all this snow to do what I like with. One mustn't complain.",
      "Almost anyone can be an author; the business is to collect money and fame from this state of being.",
      "So he started to climb out of the hole. He pulled with his front paws, and pushed with his back paws, and in a little while his nose was in the open again ... and then his ears ... and then his front paws ... and then his shoulders ... and then-'Oh, help!' said Pooh, 'I'd better go back,' 'Oh bother!' said Pooh, 'I shall have to go on.' 'I can't do either!' said Pooh, 'Oh help and bother!",
      "It's your fault, Eeyore. You've never been to see any of us. You just stay here in this one corner of the Forest waiting for the others to come to you. Why don't you go to THEM sometimes?",
      "His dress told her nothing, but his face told her things which she was glad to know.",
      "Later on, when they had all said “Good-bye” and “Thank-you” to Christopher Robin, Pooh and Piglet walked home thoughtfully together in the golden evening, and for a long time they were silent.  “When you wake up in the morning, Pooh,” said Piglet at last, “what's the first thing you say to yourself?” “What's for breakfast?” said Pooh. “What do you say, Piglet?” “I say, I wonder what's going to happen exciting to-day?” said Piglet. Pooh nodded thoughtfully. “It's the same thing,” he said.",
      "A little Consideration, a little Thought for Others, makes all the difference.",
      "There's the South Pole, said Christopher Robin, and I expect there's an East Pole and a West Pole, though people don't like talking about them.",
      "Wherever I am, there's always Pooh, There's always Pooh and Me. Whatever I do, he wants to do, \"Where are you going today?\" says Pooh: \"Well, that's very odd 'cos I was too. Let's go together,\" says Pooh, says he. \"Let's go together,\" says Pooh.",
      "Promise you won't forget me, ever. Not even when I'm a hundred.",
      "Then would you read a Sustaining Book, such as would help and comfort a Wedged Bear in Great Tightness.",
      "Owl explained about the Necessary Dorsal Muscles. He had explained this to Pooh and Christopher Robin once before and had been waiting for a chance to do it again, because it is a thing you can easily explain twice before anybody knows what you are talking about.",
      "On Wednesday, when the sky is blue, and I have nothing else to do, I sometimes wonder if it's true  That who is what and what is who.\"        - Winnie-the-Pooh",
      "It is a terrible thing for an author to have a lot of people running about his book without any invitation from him at all.",
      "That's right. You'll like Owl. He flew past a day or two ago and noticed me. He didn't actually say anything, mind you, but he knew it was me. Very friendly of him. Encouraging.\"  Pooh and Piglet shuffled about a little and said, \"Well, good-bye, Eeyore\" as lingeringly as they could, but they had a long way to go, and wanted to be getting on.  \"Good-bye,\" said Eeyore. \"Mind you don't get blown away, little Piglet. You'd be missed. People would say `Where's little Piglet been blown to?' -- really wanting to know. Well, good-bye. And thank you for happening to pass me.",
      "The Dormouse looked out, and he said with a sigh: \"I suppose all these people know better than I. It was silly, perhaps, but I did like the view Of geraniums (red) and delphiniums (blue).",
      "The truth is that Fate does not go out of its way to be dramatic. If you or I had the power of life and death in our hands, we should no doubt arrange some remarkably bright and telling effects. A man who spilt the salt callously would be drowned next week in the Dead Sea, and a couple who married in May would expire simultaneously in the May following. But Fate cannot worry to think out all the clever things that we should think out. It goes about its business solidly and unromantically, and by the ordinary laws of chance it achieves every now and then something startling and romantic. Superstition thrives on the fact that only the accidental dramas are reported.",
      "Christopher Robin ... just said it had an \"x.\"' 'It isn't their necks I mind,' said Piglet earnestly. 'It's their teeth.",
      "I don't see much sense in that,\" said Rabbit. \"No,\" said Pooh humbly, \"there isn't. But there was going to be when I began it. It's just that something happened to it along the way.\"  My spelling is Wobbly. It's good spelling but it Wobbles, and the letters get in the wrong places.  Rivers know this: there is no hurry. We shall get there some day.  Some people care too much, I think it's called love.  \"If you live to be a hundred, I want to live to be a hundred minus one day, so I never have to live without you.",
      "If a statement is untrue, it is not the more respectable because it has been said in Latin.",
      "Hallo, Eeyore.\"  \"Same to you, Pooh Bear, and twice on Thursdays,\" said Eeyore gloomily. Before Pooh could say: 'Why Thursdays?' Christopher Robin began to explain the sad story of Eeyore's lost house.",
      "They wanted to come in after the pounds\", explained Pooh, \"so I let them. It's the best way to write poetry, letting things come.",
      "Forever isn't long at all, Christopher, as long as I'm with you.",
      "It was a drowsy summer afternoon, and the Forest was full of gentle sounds, which all seemed to be saying to Pooh, 'Don't listen to Rabbit, listen to me.' So he got in a comfortable position for not listening to Rabbit.",
      "They're funny things, Accidents. You never have them till you're having them.",
      "And that, said John, is that.",
      "And really, it wasn’t much good having anything exciting like floods, if you couldn’t share them with somebody.",
      "Gone out.  Backson.  Busy backson.",
      "James gave the huffle of a snail in danger. And nobody heard him at all.",
      "WHERE did you say it was?' asked Pooh.  Just here,' said Eeyore. Made of sticks?' Yes' Oh!' said Piglet. What?' said Eeyore.  I just said \"Oh!\"' said Piglet nervously. And so as to seem quite at ease he hummed Tiddely-pom once or twice in a what-shall-we-do-now kind of way.",
      "And now all the others are saying, \"What about Us?\" So perhaps the best thing to do is to stop writing Introductions and get on with the book.",
      "Piglet opened the letter box and climbed in. Then, having untied himself, he began to squeeze into the slit, through which in the old days when front doors were front doors, many an unexpected letter than WOL had written to himself, had come slipping.",
      "Walking with her man, Lost in a dream",
      "Je hoeft je heus niet te verontschuldigen voor Vrolijkheid en Blijheid enzo. Die dingen komen nu eenmaal voor.  Sombere raad van Iejoor",
      "You are braver than you believe, Stronger than you seem, And smarter than you think(:",
      "Habían llegado a un arroyo que serpenteaba y saltaba entre rocas. Christopher Robin comprendió inmediatamente lo peligroso que era. - Es el mejor sitio para una Emboscada -explicó. - ¿Es algo de comer? -preguntó Puh a Porquete en un susurro. - Mi querido Puh -dijo Búho con tono de superioridad-. ¿No sabes lo que es una Emboscada? - Búho -dijo Porquete mirándole con gran severidad-, el susurro de Puh era absolutamente privado y no tienes por qué... - Una Emboscada -dijo Búho-, es una especie de Sorpresa. - Hay cosas de comer que también lo son -dijo Puh. - Una Emboscada, tal y como yo estaba explicándole a Puh -dijo Porquete-, es una especie de Sorpresa. - Cuando alguien se te echa encima de repente, eso es una Emboscada -dijo Búho. - Una Emboscada es cuando alguien se te cae encima de repente, Puh - explicó Porquete. Puh, que ahora ya sabía lo que era una Emboscada, les contó cómo un tarro entero de miel se le había caído encima una mañana y cómo había necesitado seis días para chuparse toda la miel de encima y lo que le fastidió tener que desperdiciar la que le cayó en los sitios donde no llegaba para chupar. - No estaba hablando de comida -dijo Búho un poco molesto. - Yo sí -dijo Puh.",
      "Rivers know this: there is no hurry. We shall get there someday.",
      "Are you prepared to be the complete Watson?\" he asked.  \"Watson?\"  \"Do-you-follow-me-Watson; that one. Are you prepared to have quite obvious things explained to you, to ask futile questions, to give me chances of scoring off you, to make brilliant discoveries of your own two or three days after I have made them myself all that kind of thing? Because it all helps.\"  \"My dear Tony,\" said Bill delightedly, \"need you ask?\" Antony said nothing, and Bill went on happily to himself, \"I perceive from the strawberry-mark on your shirt-front that you had strawberries for dessert. Holmes, you astonish me. Tut, tut, you know my methods. Where is the tobacco? The tobacco is in the Persian slipper. Can I leave my practice for a week? I can.",
      "Ik ben echt blij,\" zei Knorretje tevreden, \"dat ik je iets heb gegeven om in een handig potje te bewaren.",
      "If you live to be 100, I hope I live to be 100 minus one day, so I never have to live without you",
      "Owl,' said Rabbit shortly, 'you and I have brains. The others have fluff. If there is easy thinking to be done in this Forest - and when I say thinking I mean thinking - you and I must do it.",
      "A proper sense of proportion leaves no room for superstition. A man says, \"I have never been in a shipwreck,\" and becoming nervous touches wood. Why is he nervous? He has this paragraph before his eyes: \"Among the deceased was Mr. ——. By a remarkable coincidence this gentleman had been saying only a few days before that he had never been in a shipwreck. Little did he think that his next voyage would falsify his words so tragically.\" It occurs to him that he has read paragraphs like that again and again. Perhaps he has. Certainly he has never read a paragraph like this: \"Among the deceased was Mr. ——. By a remarkable coincidence this gentleman had never made the remark that he had not yet been in a shipwreck.\" Yet that paragraph could have been written truthfully thousands of times.",
      "So wherever I am, there's always Pooh, There's always Pooh and Me. \"What would I do?\" I said to Pooh, \"If it wasn't for you,\" and Pooh said to me: \"True, It isn't much fun for One, but Two Can stick together,\" says Pooh, says he. \"That's how it is,\" says Pooh.",
      "Which makes it a bothering sort of day.",
      "Do you remember,\" he said, \"one of Holmes's little scores over Watson about the number of steps up to the Baker Street lodging? Poor old Watson had been up and down them a thousand times, but he had never thought of counting them, whereas Holmes had counted them as a matter of course, and knew that there were seventeen. And that was supposed to be the difference between observation and non-observation. Watson was crushed again, and Holmes appeared to him more amazing than ever. Now, it always seemed to me that in that matter Holmes was the ass, and Watson the sensible person. What on earth is the point of keeping in your head an unnecessary fact like that? If you really want to know at any time the number of steps to your lodging, you can ring up your landlady and ask her.",
      "If there ever come a day we can't be together, keep me in your heart I'll stay there forever &lt;3",
      "The more - the merrier.",
      "The difficulty in the way of writing a children's play is that Barrie was born too soon. Many people must have felt the same about Shakespeare. We who came later have no chance. What fun to have been Adam, and to have had the whole world of plots and jokes and stories at one's disposal.",
      "So - here I am in the dark alone, There's nobody here to see; I think to myself,  I play to myself, And nobody knows what I say to myself; Here I am in the dark alone, What is it going to be? I can think whatever I like to think, I can play whatever I like to play, I can laugh whatever I like to laugh, There's nobody here but me.",
      "Knorretje zei: \"Als je begrijpt wat ik bedoel, Poeh\" en Poeh zei: \"Zo denk ik er ook over, Knor\" en Knorretje zei: \"Maar aan de andere kant, moet je wel bedenken\" en Poeh zei: \"Zo is het Knor, daar had ik even niet aan gedacht.",
      "Christopher Robin was home by this time, because it was the afternoon, and he was so glad to see them that they stayed there until very nearly tea-time, and then they had a Very Nearly tea, which is one you forget about afterwards, and hurried on to Pooh Corner, so as to see Eeyore before it was too late to have a Proper Tea with Owl.",
      "Supposing a tree fell down, Pooh, when we were underneath it?' 'Supposing it didn't,' said Pooh. After careful thought Piglet was comforted by this.",
      "I suppose that by this time they had finished their dressing.  Roger Scurvilegs tells us nothing on such important matters; no doubt from modesty.  \"Next morning they rose,\" he says, and disappoints us of a picture of Udo brushing his hair.",
      "You are braver than you believe, stronger than you seem, and smarter than you think.",
      "My particular memory is of a quail-pie. Quails may be alright for Moses in the desert, but, if they are served in the form of pie at dinner, they should be distributed at a side-table, not handed round from guest to guest. The countess having shuddered at it and resumed her biscuit, it was left to me to make the opening excavation. The difficulty was to know where each quail began and ended: the job really wanted a professional quail-finder, who might have indicated the on the surface of the crust at which it would be most hopeful to dig for quails.",
      "From what I've read of detective stories, inspectors always do want to drag the pond first.",
      "The other day I met a man who didn't know where Tripoli was. Tripoli happened to come into the conversation, and he was evidently at a loss. \"Let's see,\" he said. \"Tripoli is just down by the - er - you know. What's the name of that place?\" \"That's right,\" I answered, \"just opposite, Thingumabob. I could show you in a minute on a map. It's near - what do they call it?\" At this moment the train stopped, and I got out and went straight home to look at my atlas.",
      "In the language of the day it is customary to describe a certain sort of book as “escapist” literature.  As I understand it, the adjective implies, a little condescendingly, that the life therein depicted cannot be identified with the real life which the critic knows so well in W.C.1: and may even have the disastrous effect on the reader of taking him happily for a few hours out of his own real life in N.W.8.  Why this should be a matter for regret I do not know; nor why realism in a novel is so much admired when realism in a picture is condemned as mere photography; nor, I might add, why drink and fornication should seem to bring the realist closer to real life than, say, golf and gardening.",
      "Of course it's very hampering being a detective, when you don't know anything about detecting, and when nobody knows that you're doing detection, and you can't have people up to cross-examine them, and you have neither the energy nor the means to make proper inquiries; and, in short, when you're doing the whole thing in a thoroughly amateur, haphazard way.",
      "Then would you read to me a sustaining book, such as would help and comfort a wedged bear in great tightness?",
      "You gave me Christopher Robin, and then                 You breathed new life in Pooh.                 Whatever of each has left my pen                 Goes homing back to you.                 My book is ready, and comes to greet                 The mother it longs to see --                 It would be my present to you, my sweet,                 If it weren't your gift to me.",
      "NOTPOHL Endtegt vohn PU PU had in  gefuhnden",
      "TO MY COLLABORATOR who buys the ink and paper laughs and, in fact, does all the really difficult part of the business this book is gratefully dedicated in memory of a winter’s morning in Switzerland",
      "And Teddy worried lots about The fact that he was rather stout. He thought: \"If only I were thin! But how does anyone begin?",
      "Are you prepared to have quite obvious things explained to you, to ask futile questions, to give me chances of scoring off you, to make brilliant discoveries of your own two or three days after I have made them myself all that kind of thing?"];
