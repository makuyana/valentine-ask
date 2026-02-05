// Change this password to whatever you want!
const SECRET_PASSWORD = "ourSecret2025";

const truths = [
    "What was your first impression of me?",
    "What's your favorite thing about our relationship?",
    "What's the most romantic thing I've ever done for you?",
    "What's a secret fantasy you've never told me about?",
    "What's one thing you want to try together that we haven't done yet?",
    "What moment made you realize you loved me?",
    "What's your favorite memory of us?",
    "What song reminds you of me and why?",
    "What's something about me that always makes you smile?",
    "What's your ideal date night with me?",
    "What's one thing I do that drives you crazy in a good way?",
    "If you could relive one day with me, which would it be?",
    "What's your favorite physical feature of mine?",
    "What's something you've always wanted to tell me but haven't?",
    "What's the sweetest thing I've said to you?",
    "What do you think is our couple superpower?",
    "What's your favorite way I show you love?",
    "What's one thing you're grateful for about us?",
    "What's a silly thing about me that you secretly love?",
    "Where do you see us in 5 years?",
    "What's the dirtiest thing you've ever thought about doing to me while jerking off / touching yourself?",
    "Tell me the exact moment you first got wet/hard thinking about me.",
    "What's the sluttiest outfit you've imagined wearing just for me?",
    "Describe how you touch yourself when you're alone and thinking about my cock/pussy.",
    "What's the naughtiest place you've masturbated while fantasizing about us?",
    "Tell me the last porn video you watched that made you think of me.",
    "What's the most times you've come in one session thinking about me?",
    "Confess the dirtiest name you've called yourself while coming to thoughts of me.",
    "What's the kinkiest thing you've done alone that you want to do with me?",
    "Tell me how many fingers you can fit inside yourself right now.",
    "What's the most public place you've gotten yourself off imagining us fucking?",
    "Describe the exact way you'd beg me to fuck you if I was teasing you right now.",
    "What's the filthiest thing you've ever said out loud during sex or masturbation?",
    "Tell me which body part of mine you fantasize about the most and why.",
    "What's the longest you've edged yourself while thinking about me?",
    "Confess if you've ever come just from hearing my voice in your head.",
    "What's the dirtiest text you've wanted to send me but never did?",
    "Describe how you'd look with my cum dripping down your face/tits/ass.",
    "Tell me the exact position you want me to fuck you in first.",
    "What's the kinkiest roleplay you've imagined us doing?",
    "Say the sluttiest thing you've ever wanted to whisper in my ear.",
    "What's the most times you've replayed a memory of us in your head while coming?",
    "Confess how wet/hard you are right now just from this conversation.",
    "Tell me which hole you think about me filling the most.",
    "Describe the sound you make when you come hard thinking about me.",
    "What's the dirtiest fantasy you've had about us in public?",
    "Tell me how you'd want me to punish you if you broke a rule in bed.",
    "What's the nastiest thing you've ever wanted to taste from me?",
    "Confess if you've ever recorded yourself coming while moaning my name.",
    "Describe how you'd ride me if I told you not to come until I say.",
    "What's the most submissive thing you've ever wanted to do for me?",
    "Tell me which part of your body you want me to mark/bruise/own.",
    "What's the filthiest compliment you've wanted to give me during sex?",
    "Confess the last time you came thinking about choking on my cock.",
    "Describe how you'd look tied up and dripping for me.",
    "Tell me the exact way you want me to talk dirty to you.",
    "What's the dirtiest thing you've wanted me to do to your ass?",
    "Say out loud how badly you want me to breed/fill you up.",
    "What's the most times you've come in a row imagining us fucking?",
    "Confess if you've ever tasted yourself while thinking of me tasting you.",
    "Describe how you'd beg for my tongue between your legs.",
    "Tell me which toy you wish I was controlling right now.",
    "What's the sluttiest thing you've worn while masturbating to me?",
    "Confess how many times you've said my name while coming this week.",
    "Describe the way your body shakes when you imagine me inside you.",
    "Tell me which position makes you feel the most used/owned.",
    "What's the dirtiest thing you've wanted to watch me do to myself?",
    "Say “I'm dripping for you” in the neediest voice you can manage.",
    "Confess the last fantasy you had about us while showering.",
    "Describe how you'd look with my handprints on your thighs.",
    "Tell me how you want me to make you squirt/cum so hard you cry.",
    "What's the nastiest thing you've wanted to swallow from me?",
    "Confess if you've ever come just from smelling my shirt/scent.",
    "Describe how you'd tease me if I was tied up and helpless.",
    "Tell me which body part you want my cum all over tonight.",
    "What's the most desperate you've ever felt wanting me?",
    "Say “I need your cock/pussy right now” like you're begging.",
    "Confess the dirtiest search term you've used thinking of us.",
    "Describe how you'd look gagging on me until tears run down.",
    "Tell me how many orgasms you think you can give me in one night.",
    "What's the sluttiest thing you've done alone for me in your mind?",
    "Confess how wet/hard you got reading these truths.",
    "Describe how you'd want me to wake you up with my mouth.",
    "Tell me which hole feels the emptiest without me right now.",
    "What's the dirtiest thing you've wanted to record us doing?",
    "Say “I'm your dirty little secret” while rubbing yourself.",
    "Confess the last time you came thinking about my hands on your throat.",
    "Describe how you'd look bent over begging for more.",
    "Tell me how you want me to fuck you until you forget your name.",
    "What's the filthiest thing you've wanted to taste after I come?",
    "Confess if you've ever come while smelling my cologne/perfume.",
    "Describe how you'd ride my face until I can't breathe.",
    "Tell me which position makes you feel like my personal slut.",
    "Say “I want to be ruined by you” in a desperate tone.",
    "What's the nastiest thing you've imagined doing in a public place with me?",
    "Confess how many times you've replayed my voice in your head while coming.",
    "Describe how you'd look covered in my cum and still begging.",
    "Tell me the exact way you want me to edge you until you're shaking.",
    "What's the dirtiest thing you've wanted me to whisper while I'm deep inside?",
    "Confess the sluttiest outfit you've fantasized wearing for me.",
    "Say “I'm addicted to your cock/pussy” like you can't live without it.",
    "Describe how you'd want me to fuck you in front of a mirror so you can watch.",
    "Tell me which body part you want me to worship until you come.",
    "What's the most submissive thought you've had about us lately?",
    "Confess how wet/hard you are right now just from answering these.",
    "Describe how you'd beg me to let you come if I was controlling you.",
    "Say “I want you to own every inch of me” while touching yourself.",
    "Tell me the dirtiest thing you've ever wanted to do to me while I sleep.",
    "What's the nastiest fantasy you haven't told anyone yet?",
    "Confess how many times you've come today thinking about tonight.",
    "Describe how you'd look with my cum dripping down your thighs.",
    "Say “I'm your filthy little cumslut” in the sluttiest voice you have.",
    "Tell me which hole you want me to claim first tonight.",
    "What's the dirtiest thing you've wanted to hear me moan?",
    "Confess the last time you touched yourself while reading our messages.",
    "Describe how you'd want me to fuck you until the bed breaks.",
    "Say “I need you to destroy me” like you're already shaking.",
    "Tell me how you want to be used until you can't think straight.",
    "What's the sluttiest confession you've never said out loud before?"
];

const dares = [
    "I dare you and me to book a room",
    "Give me a 3-minute shoulder massage",
    "Dance with me to our favorite song",
    "Write me a love note right now",
    "Tell me three things you love about me",
    "Draw a picture of us together",
    "Do your best impression of me",
    "Give me 10 kisses in 10 different places",
    "Make up a silly couple nickname for us on the spot",
    "Recreate our first date for 5 minutes",
    "Whisper something sweet in my ear",
    "Make me laugh in the next 60 seconds",
    "Give me a compliment while looking into my eyes",
    "Do a slow dance with me right here",
    "Let me style your hair however I want",
    "Serenade me with any song of your choice",
    "Give me a piggyback ride around the room",
    "Tell me your favorite thing about today with me",
    "Create a secret handshake for just us",
    "Give me butterfly kisses for 30 seconds",
    "Plan our next date night out loud right now",
    "Whisper the dirtiest thing you want to do to me right now — in detail — without touching.",
    "Take off one piece of clothing very slowly while maintaining eye contact the whole time.",
    "Tell me exactly how wet/hard you are right now and describe the feeling.",
    "Lick your lips slowly while staring at my mouth for 30 seconds.",
    "Describe in graphic detail what you want my tongue to do to you later.",
    "Put your hand between your thighs and tell me how hot you feel through your clothes.",
    "Say out loud what you want me to call you in bed tonight.",
    "Trace your fingers over your most sensitive spot — over your clothes — and moan my name.",
    "Tell me your favorite porn category and why it turns you on so much.",
    "Spread your legs wide and let me look at you for 60 seconds without touching.",
    "Send me a voice note moaning my name like you’re already being fucked.",
    "Tell me the last time you touched yourself thinking about me — be explicit.",
    "Bite your lip and tell me how badly you want my hands around your throat.",
    "Describe how you want me to spank you — how hard, how many times, where.",
    "Take off your underwear and hand it to me while looking me in the eyes.",
    "Tell me in detail how you’d ride me if I was inside you right now.",
    "Run your tongue along your finger like it’s my cock and keep eye contact.",
    "Say “please fuck me” five times, each time more desperately than the last.",
    "Tell me the dirtiest fantasy you’ve ever had about us — no holding back.",
    "Put your hand inside your pants and tell me how slick/wet you are.",
    "Describe how my cum would taste on your tongue.",
    "Tell me which part of your body you want me to mark with hickeys tonight.",
    "Whisper “I’m your slut” while rubbing yourself slowly.",
    "Tell me exactly where you want my tongue first — be graphic.",
    "Strip down to just your socks and tell me how exposed you feel.",
    "Say out loud how many times you want to come tonight.",
    "Describe how you’d beg me to let you come if I was edging you.",
    "Tell me the sluttiest thing you’ve ever done and how wet it made you.",
    "Put two fingers in your mouth and suck them like they’re mine.",
    "Tell me you want to be choked while I fuck you — say it like you mean it.",
    "Describe how you’d look on your knees with my cock in your mouth.",
    "Tell me which hole you want filled first tonight.",
    "Say “I’m dripping for you” while spreading your legs wider.",
    "Tell me how you want me to pull your hair while I take you from behind.",
    "Whisper the filthiest name you want me to call you in bed.",
    "Tell me how hard you want me to fuck you — use numbers.",
    "Describe how you’d ride my face until you come.",
    "Say “I’m your dirty little toy” while touching yourself.",
    "Tell me exactly how you want my fingers inside you — how many, how deep.",
    "Describe the sound you make when you come hard.",
    "Tell me you want me to come inside you and keep it there.",
    "Say “use me” in the most desperate voice you can manage.",
    "Tell me which position makes you feel the most submissive.",
    "Describe how you’d look covered in my cum.",
    "Tell me you want to be tied up and used however I want.",
    "Say “I need you to ruin me tonight” while looking me in the eyes.",
    "Tell me how many orgasms you think you can handle before begging to stop.",
    "Describe how you want me to edge you until you’re crying for release.",
    "Say “I’m your personal fucktoy” and mean it.",
    "Tell me the nastiest thing you want me to whisper in your ear while I’m inside you.",
    "Describe how you want me to fuck your mouth until your mascara runs.",
    "Tell me you want me to breed you and fill you up.",
    "Say “own me” while rubbing your clit slowly.",
    "Tell me how you’d look bent over with my handprints on your ass.",
    "Describe how you want me to make you squirt.",
    "Say “I’m soaked just thinking about your cock” in a needy voice.",
    "Tell me which toy you want me to use on you first.",
    "Describe how you want me to fuck you in front of a mirror.",
    "Say “I’m your cumslut” while licking your lips.",
    "Tell me how you want me to punish you if you come without permission.",
    "Describe the face you make when you’re close to coming.",
    "Say “I want your cock so bad it hurts” while grinding against nothing.",
    "Tell me how many fingers you can take right now.",
    "Describe how you want me to fuck you on the kitchen counter.",
    "Say “I’m dripping down my thighs for you” while spreading your legs.",
    "Tell me which hole feels the emptiest right now.",
    "Describe how you’d look gagging on me.",
    "Say “I’m your dirty whore” in the sluttiest voice you have.",
    "Tell me how you want me to come on your face.",
    "Describe the way your body shakes when you orgasm.",
    "Say “please destroy my pussy/ass/mouth” like you’re begging.",
    "Tell me how you want me to record you coming undone.",
    "Describe how you’d look with my cum dripping out of you.",
    "Say “I need you to fuck me stupid tonight” while touching yourself.",
    "Tell me which body part you want bruised tomorrow.",
    "Describe how you want me to wake you up with my tongue.",
    "Say “I’m yours to use however you want” while on your knees.",
    "Tell me how many times you’ve come thinking about me this week.",
    "Describe the sound you make when I hit your g-spot.",
    "Say “I want to be your personal pornstar” while looking at me.",
    "Tell me how you want me to tie you up and tease you for hours.",
    "Describe how you’d look with my hand around your throat while I’m inside you.",
    "Say “I’m addicted to your cock/pussy” in a desperate tone.",
    "Tell me which position makes you feel the most owned.",
    "Describe how you want me to fuck you in the shower.",
    "Say “I’m your filthy little secret” while biting your lip.",
    "Tell me how you want me to make you scream my name.",
    "Describe how you’d look with my cum all over your tits/ass/face.",
    "Say “I want you to ruin me for anyone else” while grinding against air.",
    "Tell me which part of your body you want worshipped tonight.",
    "Describe how you want me to edge you until you’re shaking.",
    "Say “I’m your obedient slut” in a submissive voice.",
    "Tell me how you want me to fuck you until you can’t walk.",
    "Describe the way your pussy/ass clenches when you’re close.",
    "Say “I want your cum dripping out of me all night” while touching yourself.",
    "Tell me which fantasy you want us to act out right now."
];

let currentType = '';

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('errorMsg');
    
    if (input === SECRET_PASSWORD) {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('gameScreen').style.display = 'block';
        errorMsg.style.display = 'none';
    } else {
        errorMsg.style.display = 'block';
        document.getElementById('passwordInput').value = '';
        document.getElementById('passwordInput').style.borderColor = '#e74c3c';
        setTimeout(() => {
            document.getElementById('passwordInput').style.borderColor = '#e0e0e0';
        }, 2000);
    }
}

// Allow Enter key to submit password
document.getElementById('passwordInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

function drawCard(type) {
    currentType = type;
    const challenges = type === 'truth' ? truths : dares;
    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
    
    document.getElementById('challengeType').textContent = type.toUpperCase();
    document.getElementById('challengeType').className = `challenge-type ${type}`;
    document.getElementById('challengeText').textContent = randomChallenge;
    
    document.getElementById('cardSelection').style.display = 'none';
    document.getElementById('challengeBox').classList.add('active');
}

function goBack() {
    document.getElementById('cardSelection').style.display = 'block';
    document.getElementById('challengeBox').classList.remove('active');
}

function drawAnother() {
    drawCard(currentType);
}

function logout() {
    document.getElementById('loginScreen').style.display = 'block';
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('passwordInput').value = '';
    goBack();
}


// index javascript

let yesBtn = document.getElementById('yesBtn');
let sureBtn = document.getElementById('sureBtn');
let askSection = document.getElementById('ask');
let successSection = document.getElementById('success');
let scale = 1;

sureBtn.addEventListener('click', () => {
    scale += 0.5;
    yesBtn.style.transform = `scale(${scale})`;
});

yesBtn.addEventListener('click', () => {
    askSection.style.display = 'none';
    successSection.style.display = 'block';
});