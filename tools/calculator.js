export function calculate(input) {
    try {
        return eval(input.replace(/[^-()\d/*+.]/g, ''));  // Sanitized eval
    } catch {
        return "Error calculating expression.";
    }
}
