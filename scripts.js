
document.addEventListener("DOMContentLoaded", function () {
    const periodButtons = document.querySelectorAll(".period-btn");
    const payButton = document.querySelector(".pay-button");
    const backButton = document.querySelector(".back-button");
    const paymentDetails = document.querySelector(".payment-details");

    // Define payment information for different periods
    const paymentInfo = {
        "3 months": {
            periodTime: "3 months",
            monthlyPayment: "&#8377; 20,000",
            securityDeposit: "&#8377; 0",
            total: "&#8377; 60,000"
        },
        "6 months": {
            periodTime: "6 months",
            monthlyPayment: "&#8377; 22,020",
            securityDeposit: "&#8377; 0",
            total: "&#8377; 132,120"
        },
        "9 months": {
            periodTime: "9 months",
            monthlyPayment: "&#8377; 23,500",
            securityDeposit: "&#8377; 0",
            total: "&#8377; 211,500"
        }
    };

    // Function to update payment details based on the selected period
    function updatePaymentDetails(periodText) {
        const details = paymentInfo[periodText];
        if (details) {
            paymentDetails.innerHTML = `
                <p>Period time: <strong>${details.periodTime}</strong></p>
                <p>Monthly payment: <strong>${details.monthlyPayment}</strong></p>
                <p>Security deposit: <strong>${details.securityDeposit}</strong></p>
                <p>Total: <strong>${details.total}</strong></p>
            `;
        }
    }

    // Handle period button clicks
    periodButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            periodButtons.forEach(btn => btn.classList.remove("active"));
            
            // Add active class to the clicked button
            button.classList.add("active");

            // Update payment details based on the selected period
            const periodText = button.textContent.trim();
            updatePaymentDetails(periodText);
        });
    });

    // Handle pay button click
    payButton.addEventListener("click", () => {
        // Redirect to payment page or perform payment action
        window.location.href = 'transaction.html'; // Replace with your actual payment URL or logic
    });

    backButton.addEventListener("click", () => {
        // Navigate to the previous page in history
        window.history.back();
    });

    // Handle back button click
    backButton.addEventListener("click", () => {
        // Navigate to the previous page in history
        window.history.back();
    });
});

