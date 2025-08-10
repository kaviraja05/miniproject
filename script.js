// Speech recognition setup
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";

const btn = document.querySelector("#listen-btn");

// Text-to-speech function
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

// Command handler
function handleCommand(command) {
  if (command.includes("open youtube")) {
    speak("Opening YouTube...");
    window.open("https://www.youtube.com", "_blank");
  } else if (command.includes("open google")) {
    speak("Opening Google...");
    window.open("https://www.google.com", "_blank");
  } else if (command.includes("open facebook")) {
    speak("Opening Facebook...");
    window.open("https://www.facebook.com", "_blank");
  } else if (command.includes("open instagram")) {
    speak("Opening Instagram...");
    window.open("https://www.instagram.com", "_blank");
  } else if (command.includes("open whatsapp")) {
    speak("Opening WhatsApp...");
    window.open("https://www.whatsapp.com", "_blank");
  } else {
    speak("Searching Google for " + command);
    window.open(`https://www.google.com/search?q=${encodeURIComponent(command)}`, "_blank");
  }
}

// Button click listener
btn.addEventListener("click", function () {
  speak("Hello, how can I help you?");
  
  setTimeout(() => {
    btn.innerHTML = "Listening...👂";
    btn.classList.add("listening");
    recognition.start();
  }, 2500);
});

// When recognition gets a result
recognition.onresult = (event) => {
  const command = event.results[0][0].transcript.toLowerCase();
  console.log("Heard command:", command);
  handleCommand(command);
};

// When recognition ends
recognition.onend = () => {
  btn.innerHTML = "🎤 Start Listening";
  btn.classList.remove("listening");
};

// Handle recognition errors
recognition.onerror = (event) => {
  console.error("Speech recognition error:", event.error);

  // Reset button state
  btn.innerHTML = "🎤 Start Listening";
  btn.classList.remove("listening");

  // Handle specific error types
  if (event.error === "not-allowed") {
    alert("Microphone access is blocked. Please allow it in your browser settings.");
  } else if (event.error === "no-speech") {
    speak("I didn't hear anything. Please try again.");
  } else if (event.error === "network") {
    speak("Network error occurred. Please check your connection.");
  } else {
    speak("Sorry, I didn't catch that. Please try again.");
  }
};
