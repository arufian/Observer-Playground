setTimeout(function() {
  var insertedNodes = [];
  document.addEventListener("DOMNodeInserted", function(e) {
    insertedNodes.push(e.target);
  }, false);
  console.log(insertedNodes);
}, 100);

setTimeout(function() {
  var insertedNodes = [];
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      for (var i = 0; i < mutation.addedNodes.length; i++)
        console.log(mutation.addedNodes[i], 'mutations')
        insertedNodes.push(mutation.addedNodes[i]);
    })
  });
  observer.observe(document.querySelector('h1'), { childList: true });
}, 110);

var index = 1;
setInterval(function() {
  var a = document.querySelector('h1');
  a.innerHTML = 'Test - '+index;
  index++;
}, 100);

var elementNo = 1;
setInterval(function() {
  var a = document.querySelector('h1');
  var x = document.createElement('div');
  var textContent = document.createTextNode('Element - '+elementNo);
  x.appendChild(textContent);
  a.appendChild(x);
  elementNo++;
}, 110);