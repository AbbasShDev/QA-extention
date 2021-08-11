const askOpenaiForm = document.getElementById("askOpenaiForm");
const askOpenaiLoader = document.getElementById("askOpenaiLoader");
const askOpenaiResult = document.getElementById("askOpenaiResult");
const askOpenaiQuestion = document.querySelector("#askOpenaiForm #question");

let promot = "";

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { type: "getPragraphs" }, function (
    pragraphs
  ) {
    if (typeof pragraphs == "undefined") {
      // That's kind of bad
      if (chrome.runtime.lastError) {
        // We couldn't talk to the content script, probably it's not there
      }
    } else {
      promot = pragraphs.substring(0, 2000);
    }
  });
});

askOpenaiForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const question = askOpenaiQuestion.value;

  if (question.length !== 0) {
    askOpenaiLoader.style.display = "block";

    promot += `nQ: ${question}?\nA:`;

    fetch("http://localhost:3008/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: promot,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        askOpenaiLoader.style.display = "none";
        askOpenaiResult.innerText = "";
        askOpenaiResult.innerText = data.choices[0].text;
      });
  }
});
