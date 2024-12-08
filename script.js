// Mood to Color mapping based on your provided list
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
    guilt: '#FFA4A4'        // Guilt
};

// Store colors and moods input by the user
let colors = [];
let moodHistory = [];

// Function to change the color based on the input mood
function changeColor() {
    const mood = document.getElementById('mood-input').value.toLowerCase();
    const interactiveArea = document.getElementById('art-container');

    // If the mood exists in moodColors, use that color, else use grey
    let color = moodColors[mood] || '#9e9e9e'; 

    // Add color and mood to the arrays
    colors.push(color);
    moodHistory.push(mood);

    // Apply the color to the interactive areas
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item, index) => {
        item.style.backgroundColor = colors[index % colors.length];
    });

    // Once 3 colors are added, reveal the shape (fill up the grid with the colors)
    if (colors.length >= 3) {
        revealShape();
    }
}

// Function to gradually reveal the shape
function revealShape() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.backgroundColor = colors[index % colors.length]; // Cycle through colors
        }, index * 1000); // Delay effect for each item
    });
}

// Function to submit the moods and trigger color stacking
function submitMoods() {
    const gridItems = document.querySelectorAll('.grid-item');
    
    // Make sure we have at least 3 colors before triggering the change
    if (colors.length >= 3) {
        colors.forEach((color, index) => {
            setTimeout(() => {
                gridItems.forEach(item => {
                    item.style.backgroundColor = color; // Gradually show the colors
                });
            }, index * 1000);
        });
    }
}
