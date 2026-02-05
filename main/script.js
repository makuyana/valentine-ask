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
    "Where do you see us in 5 years?"
];

const dares = [
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
    "Plan our next date night out loud right now"
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