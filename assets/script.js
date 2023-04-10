(() => {
  const wombatFacts = [
    'Wombats are marsupials native to Australia.',
    'Wombats have rear-facing pouches, unique among marsupials.',
    'Wombats prefer to spend most of their time in their burrows.',
    'Wombats can run up to 25 miles per hour for short distances.',
    'Baby wombats are called joeys.',
    'Wombat poop is cube-shaped, which is highly unusual in the animal kingdom.'
  ];

  const fact = wombatFacts[Math.floor(Math.random()*wombatFacts.length)];
  document.querySelector('.message').innerHTML = fact;
})();