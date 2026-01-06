const btn = document.querySelector("button");
const input = document.querySelector("input");
const result = document.querySelector("#result");

btn.addEventListener("click", async () => {
  let word = document.querySelector("input").value;

  if (word === "") {
    alert("please enter some word");
    return;
  }

  try {
    let res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    let data = await res.json(); // data pharse.

    if (data.title) {
      result.innerText = data.message;
      return;
    }

    let meaning = data[0].meanings[0].definitions[0].definition;

    result.innerHTML = `<b><u>Meaning :-</u></b> ${meaning}`;
  } catch (e) {
    result.innerText = "Error fetching data";
  }
});
