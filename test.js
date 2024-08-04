function generateTransactionNumber() {
    const firstPart = Math.floor(Math.random() * 900000) + 100000;
    const secondPart = Math.floor(Math.random() * 9000) + 1000;
    const transactionNumber = `${firstPart}-${secondPart}`;
    return transactionNumber;
}

// Generate and print a transaction number
console.log(generateTransactionNumber());