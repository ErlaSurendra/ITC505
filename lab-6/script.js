document.addEventListener("DOMContentLoaded", () => {
    const numbers = [5, 1, 4, 2, 8];
    const content = document.getElementById("interactive-content");

    // Display initial array
    let display = document.createElement("p");
    display.textContent = "Initial Array: " + numbers.join(", ");
    content.appendChild(display);

    // Add a button to sort
    const button = document.createElement("button");
    button.textContent = "Sort Array";
    content.appendChild(button);

    // Listen for clicks to trigger sorting
    button.addEventListener("click", () => {
        bubbleSort(numbers);
    });
});

// Bubble Sort Function
function bubbleSort(arr) {
    const content = document.getElementById("interactive-content");
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                // Update display
                let sortedDisplay = document.createElement("p");
                sortedDisplay.textContent = "Step " + (i + 1) + ": " + arr.join(", ");
                content.appendChild(sortedDisplay);
            }
        }
    }
    let finalDisplay = document.createElement("p");
    finalDisplay.textContent = "Sorted Array: " + arr.join(", ");
    content.appendChild(finalDisplay);
}
