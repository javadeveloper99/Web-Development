setInterval(() => {
  const element = document.querySelector(".clock");

  const sound=document.querySelector('audio');

  const time = new Date();
  const option = {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  element.textContent = time.toLocaleTimeString("en-US", option);

  sound.play();

}, 1000);
