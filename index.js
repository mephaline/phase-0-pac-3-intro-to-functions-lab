function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
    console.log(string.toUpperCase());
  }
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(message) {
    // Check if the message is all lowercase
    if (message === message.toLowerCase()) {
      return "I can't hear you!";
    }
    
    // Check if the message is all uppercase
    if (message === message.toUpperCase()) {
      return "YES INDEED!";
    }
    
    // Check if the message is "Let's have dinner together!"
    if (message === "Let's have dinner together!") {
      return "I would love to!";
    }
  
    // If none of the conditions match, return a default response
    return "Hmmm, what did you say?";
  }