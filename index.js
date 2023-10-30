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

  function sayHiToHeadphonedRoommate(string){
    const canthear = "I can't hear you!";
    const yesindeed = "YES INDEED!";
    const loveto = "I would love to!"
    if (string.toLowerCase() === string) {
        return canthear;
        console.log(string);
        console.log(string.toLowerCase());
        console.log(string === string.toLowerCase());
      }
      
      else if (string.toUpperCase() === string) {
        return yesindeed;
        console.log(string);
        console.log(string.toUpperCase());
        console.log(string === string.toUpperCase());
      }

      else if ("Let\'s have dinner together!" === string) { 
        return loveto
        console.log(string);
        console.log(string === string);
    }
  }