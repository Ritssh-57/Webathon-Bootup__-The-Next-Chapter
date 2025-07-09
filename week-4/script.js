// Your story content for each chapter
const storyChapters = [
    `Chapter 1: The Dark Forest<br><br>
    You wake up in a shadowy forest, your sword missing and strange whispers in the air...`,

    `Chapter 2: The Mysterious Stranger<br><br>
    A hooded figure approaches. "You're not supposed to be here," he whispers. "Follow me, or you'll die."`,

    `Chapter 3: The Hidden Temple<br><br>
    Deep within the ruins, you find the ShadowBlade, glowing with a dark light. It pulses as you grab it...`,

    `Chapter 4: Betrayal<br><br>
    The stranger reveals his face. It's your brother. "I brought you here to end this... and you."`,

    `Chapter 5: Final Battle<br><br>
    Blade against blade, shadow against light. Only one will survive. Choose your fate...`,

    `The End<br><br>
    Thank you for playing! More Game are coming soon.`
];

let chapterIndex = 0;

function nextChapter() {
    chapterIndex++;
    const storyText = document.getElementById("story-text");

    if (chapterIndex < storyChapters.length) {
        storyText.innerHTML = `<p>${storyChapters[chapterIndex]}</p>`;
    } else {
        // Optional: Reset or disable button
        alert("You've reached the end of the Games!");
    }
}
