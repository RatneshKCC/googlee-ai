const API_KEY = "AIzaSyD9TCgc5jhInSFmN9yTBQwVwHVwHapJlnc";

async function sendMessage() {

  let input = document.getElementById("userInput");
  let chatBox = document.getElementById("chatBox");

  let userText = input.value;

  if (userText === "") return;

  // show user message
  let userMessage = document.createElement("div");
  userMessage.className = "message";
  userMessage.innerHTML = "<b>User:</b> " + userText;
  chatBox.appendChild(userMessage);

  input.value = "";

  // loading message
  let botMessage = document.createElement("div");
  botMessage.className = "message bot";
  botMessage.innerHTML = "<b>Gemini:</b> Thinking...";
  chatBox.appendChild(botMessage);const API_KEY = "YOUR_API_KEY";

async function sendMessage(){

let input = document.getElementById("userInput");
let chatBox = document.getElementById("chatBox");

let userText = input.value;

if(userText === "") return;

let userMsg = document.createElement("div");
userMsg.classList.add("message","user-message");
userMsg.textContent = userText;

chatBox.appendChild(userMsg);

input.value="";

let botMsg = document.createElement("div");
botMsg.classList.add("message","bot-message");
botMsg.textContent="Thinking...";
chatBox.appendChild(botMsg);

chatBox.scrollTop = chatBox.scrollHeight;

try{

const response = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=$`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[
{
parts:[{text:userText}]
}
]
})
}
);

const data = await response.json();

let aiText = data.candidates[0].content.parts[0].text;

botMsg.textContent = aiText;

}
catch(error){

botMsg.textContent = "Error getting response.";

}

chatBox.scrollTop = chatBox.scrollHeight;

}

  try {

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: userText }]
            }
          ]
        })

      }
    );

    const data = await response.json();

    let aiText = data.candidates[0].content.parts[0].text;

    botMessage.innerHTML = "<b>Gemini:</b> " + aiText;

  } catch (error) {

    botMessage.innerHTML = "<b>Gemini:</b> Error getting response.";

    console.error(error);

  }
}