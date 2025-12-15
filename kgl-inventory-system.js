// Part A: Function Implementation

// Function to calculate revenue cost
function calculateRevenueCost(tonnage, pricePerKg) {
    if (validateParameters(tonnage, pricePerKg)) {
        return tonnage * pricePerKg;
    }
    return "Invalid input";
}

// Function to validate input parameters
function validateParameters(tonnage, pricePerKg) {
    return !(tonnage === null || tonnage === "" || pricePerKg === null || pricePerKg === "" || isNaN(tonnage) || isNaN(pricePerKg));
}

// Part B: Record Creation and Manipulation

// Function to create a sales record
function createSalesRecord(name, tonnage) {
    return {
        name: name,
        tonnage: tonnage,
    };
}

// Initialize sales records array
let salesRecords = [];

// Add sales records
salesRecords.push(createSalesRecord("Beans", 500));
salesRecords.push(createSalesRecord("Maize", 300));
salesRecords.push(createSalesRecord("Gnuts", 200));

// Display sales records
console.log("Sales Records:", salesRecords);

// Part C: Loop Implementation and Data Processing

// Daily Tonnage Array
let dailyTonnage = [1200, 1500, 800, 2000, 1800, 1300];

// Calculate total daily tonnage
let totalDailyTonnage = 0;
for (let i = 0; i < dailyTonnage.length; i++) {
    totalDailyTonnage += dailyTonnage[i];
}
console.log("Total Daily Tonnage:", totalDailyTonnage);

// Simulate an inventory array and stock check
let inventory = [
    { name: "Beans", tonnage: 500 },
    { name: "Maize", tonnage: 0 }, // Simulating an out-of-stock situation
    { name: "Gnuts", tonnage: 200 }
];

// Check stock and alert if out of stock
for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].tonnage === 0) {
        console.log("Manager Alert: " + inventory[i].name + " is out of stock!");
    }
}

// Example usage of revenue calculation
let revenue = calculateRevenueCost(1200, 2.5); // Replace with your values
console.log("Revenue Cost:", revenue);
