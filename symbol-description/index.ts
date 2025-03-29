function logSymbolDescriptions(symbols: symbol[]) {
  for (const symbol of symbols) {
    console.log(symbol.description ?? "No description");
  }
}

const symbols = [Symbol("alpha"), Symbol("beta"), Symbol(), Symbol("gamma")];

logSymbolDescriptions(symbols);
// Output:
// alpha
// beta
// No description
// gamma
