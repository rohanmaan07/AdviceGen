document.addEventListener("DOMContentLoaded", () => {
    const adviceId = document.getElementsByClassName("advice-id")[0];
    const adviceText = document.getElementsByClassName("advice-text")[0];
    const dice= document.getElementsByClassName("dice-button")[0];
  
    async function fetchAdvice() {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        const advice = data.slip;
  
        adviceId.textContent = advice.id;
        adviceText.textContent = `"${advice.advice}"`;
      } catch (error) {
        console.error("Error fetching advice:", error);
      }
    }

    dice.addEventListener("click", fetchAdvice);
    fetchAdvice();
  });
  