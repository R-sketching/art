// Color mapping for each emotion (based on your provided color palette)
const moodColors = {
    calm: '#9F9F00',        // Calm
    grounded: '#2B4A00',    // Grounded
    anger: '#ED1C24',       // Anger
    sadness: '#BE1E2D',     // Sadness
    excitement: '#FF8500',  // Excitement
    peace: '#00A79D',       // Peace
    confidence: '#343A82',  // Confidence
    happiness: '#2DE23E',   // Happiness
    love: '#FF4580',        // Love
    affection: '#FFBBD8',   // Affection
    serenity: '#86D5E0',    // Serenity
    mystery: '#000F8E',     // Mystery
    nostalgia: '#873304',   // Nostalgia
    creativity: '#B4A0F9',  // Creativity
    joy: '#F9ED32',         // Joy
    hope: '#FFD658',        // Hope
    relaxation: '#FFFBB7',  // Relaxation
    indifference: '#6D6E71',// Indifference
    neutral: '#939598',     // Neutral
    fear: '#231F20',        // Fear
    purity: '#FFFFFF',      // Purity
    motivation: '#A5D500',  // Motivation
    guilt: '#FFA4A4',        // Guilt
    confusion: '#8E44AD',   // Confusion
    embarrassment: '#FF6347', // Embarrassment
    boredom: '#BDBDBD'      // Boredom
};

let colors = [];

// Function to add color based on the selected mood
function addColor(mood) {
    const color = moodColors[mood] || '#9e9e9e'; // Default to grey if mood is not in the list
    colors.push(color); // Add color to the colors array

    // Create a line element for the color and animate it
    const interactiveArea = document.getElementById('interactive-area');
    const line = document.createElement('div');
    line.classList.add('line');
    line.style.backgroundColor = color; // Set the line color based on the selected mood

    // Add line to the interactive area
    interactiveArea.appendChild(line);

    // Start the animation to move the line across the screen
    setTimeout(() => {
        line.style.animation = 'lineMovement 3s linear infinite'; // Trigger the animation after the line is added
    }, 10);
}
