chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "reloadTab") {

    // This code is to stop further execution of the JS so that we don't need to reload the page manually!
    (function() {
      const originalEval = window.eval;

      window.eval = function() {
        console.log('JavaScript execution blocked:', arguments);
        // throw new Error('JavaScript execution blocked');
      };
    })();

    // Following reload() call is commented out as above code dismiss the need to reload the page
    //location.reload();
  }
});
