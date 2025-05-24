// tools/unitConverter.js

export function convertUnits(value, fromUnit, toUnit) {
    const conversions = {
        // Length
        'm': 1,
        'cm': 0.01,
        'km': 1000,
        'in': 0.0254,
        'ft': 0.3048,
        'mi': 1609.34,
        // Weight
        'g': 0.001,
        'kg': 1,
        'lb': 0.453592,
        'oz': 0.0283495
    };

    const from = conversions[fromUnit];
    const to = conversions[toUnit];

    if (from === undefined || to === undefined) {
        return `Unsupported units: ${fromUnit} or ${toUnit}`;
    }

    const result = (value * from) / to;
    return `${value} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`;
}
