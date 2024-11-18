function countdown() {
    const weddingDate = new Date("December 10, 2024 20:00:00").getTime();
    const now = new Date().getTime();
    const timeRemaining = weddingDate - now;
  
    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      document.getElementById("days").textContent = days.toString().padStart(2, "0");
      document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    } else {
      document.querySelector(".countdown-container").innerHTML = `<h1>It's Wedding Time! 🎉</h1>`;
    }
  }
  
  setInterval(countdown, 1000);
  