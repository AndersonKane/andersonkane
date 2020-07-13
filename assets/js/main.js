particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
const instance = new Typewriter('#typewriter', {
    loop: true
});

instance.typeString("Hello World!")
    .pauseFor(1000)
    .deleteAll()
    .typeString('I am Anderson Kane.')
    .pauseFor(1000)
    .deleteChars(14)
    .typeString('an innovative<br>Electrical & Computer Engineering student.')
    .pauseFor(3000)
    .deleteChars(55)
    .typeString('currently learning<br>Machine Learning and Neural Network.')
    .pauseFor(3000)
    .deleteAll()
    .typeString('Check out my work at<br>github.com/andersonkane')
    .pauseFor(1000)
    .deleteAll()
    .typeString('I use the template from github.com/satvikchachra/profile-readme')
    .pauseFor(1000)
    .deleteAll()
    .start();
