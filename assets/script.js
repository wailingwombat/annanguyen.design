(() => {
  const wombatFacts = [
    'generated by <a href="https://github.com/wilfreddenton/stoic">stoic</a>',
    'Wombats are marsupials native to Australia.',
    'Wombats have rear-facing pouches, unique among marsupials.',
    'Wombats prefer to spend most of their time in their burrows.',
    'Wombats can run up to distances25 miles per hour for short .',
    'Baby wombats are called joeys.',
    'Wombat poop is cube-shaped, which is highly unusual in the animal kingdom.',
  ];

  const fact = wombatFacts[Math.floor(Math.random()*wombatFacts.length)];
  document.querySelector('.message').innerHTML = fact;
})();