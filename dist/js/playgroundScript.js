/*global chrome*/
const observeUrlChange = () => {
  let oldHref = document.location.href;
  const body = document.querySelector("body");
  const observer = new MutationObserver(mutations => {
    if (oldHref !== document.location.href) {
      oldHref = document.location.href;
      chrome.storage.session.get(["task"]).then(({ task }) => {
        if (task && oldHref.indexOf(task) === -1) {
          setTimeout(() => {
            document.location.href = `${oldHref.slice(0,oldHref.indexOf("?"))}?redteamingtaskid=${task}`
          }, 1000);
        }
      })
    }
  });
  observer.observe(body, { childList: true, subtree: true });
};

const observeDOMChange = () => {
  const body = document.querySelector("body");
  const observer = new MutationObserver(mutations => {
    const submitButton = document.querySelector("[aria-label=Submit]")
    if (submitButton != null) {
      submitButton.addEventListener("click", () => {
        chrome.storage.session.get(["submissions"]).then(({ submissions }) => {
          if (submissions) {
            chrome.storage.session.set({submissions: submissions + 1})
          } else {
            chrome.storage.session.set({submissions: 1})
          }
        })
      })
    }
  });
  observer.observe(body, { childList: true, subtree: true });
}

const onLoad = () => {
  observeUrlChange();
  observeDOMChange();
}

window.onload = onLoad;