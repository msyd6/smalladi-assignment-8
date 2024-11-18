document.getElementById("experiment-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    const start = parseFloat(document.getElementById("start").value);
    const end = parseFloat(document.getElementById("end").value);
    const stepNum = parseInt(document.getElementById("step_num").value);

    // Validation checks
    if (isNaN(start)) {
        alert("Please enter a valid number for Shift Start.");
        return;
    }

    if (isNaN(end)) {
        alert("Please enter a valid number for Shift End.");
        return;
    }

    if (isNaN(stepNum) || stepNum < 1 || stepNum > 8) {
        alert("Please enter an integer between 1 and 8 for Number of Steps.");
        return;
    }

    if (start >= end) {
        alert("Shift Start should be smaller than Shift End.");
        return;
    }

    // Clear previous results
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear the content to avoid displaying old results
    resultsDiv.style.display = "none";

    // If all validations pass, submit the form
    fetch("/run_experiment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ start: start, end: end, step_num: stepNum })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Show and set images if they exist
        resultsDiv.style.display = "block";
        resultsDiv.innerHTML = `<h2>Experiment Results</h2>`; // Add a header for better readability

        if (data.dataset_img) {
            const datasetImg = document.createElement("img");
            datasetImg.src = `/${data.dataset_img}?t=${new Date().getTime()}`; // Add timestamp to prevent caching
            datasetImg.style.display = "block";
            datasetImg.alt = "Dataset Image";
            resultsDiv.appendChild(datasetImg);
        }

        if (data.parameters_img) {
            const parametersImg = document.createElement("img");
            parametersImg.src = `/${data.parameters_img}?t=${new Date().getTime()}`; // Add timestamp to prevent caching
            parametersImg.style.display = "block";
            parametersImg.alt = "Parameters Image";
            resultsDiv.appendChild(parametersImg);
        }
    })
    .catch(error => {
        console.error("Error running experiment:", error);
        alert("An error occurred while running the experiment.");
    });
});

document.getElementById("generate-random").addEventListener("click", function() {
    document.getElementById("start").value = (Math.random() * 2).toFixed(2);
    document.getElementById("end").value = (Math.random() * 2 + 2).toFixed(2);
    document.getElementById("step_num").value = Math.floor(Math.random() * 8) + 1;
});
