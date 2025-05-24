// tools/periodicTable.js

const periodicTable = {
    H: { name: "Hydrogen", atomicNumber: 1 },
    He: { name: "Helium", atomicNumber: 2 },
    Li: { name: "Lithium", atomicNumber: 3 },
    Be: { name: "Beryllium", atomicNumber: 4 },
    B: { name: "Boron", atomicNumber: 5 },
    C: { name: "Carbon", atomicNumber: 6 },
    N: { name: "Nitrogen", atomicNumber: 7 },
    O: { name: "Oxygen", atomicNumber: 8 },
    F: { name: "Fluorine", atomicNumber: 9 },
    Ne: { name: "Neon", atomicNumber: 10 },
    // Add more elements as needed
};

export function getElementInfo(symbol) {
    const element = periodicTable[symbol];
    if (element) {
        return `${symbol} - ${element.name}, Atomic Number: ${element.atomicNumber}`;
    } else {
        return `Element with symbol "${symbol}" not found.`;
    }
}
