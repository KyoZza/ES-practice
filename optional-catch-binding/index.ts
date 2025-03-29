function parseJSON(str: string) {
  try {
    console.log(JSON.parse(str));
  } catch { // (error) param can be omitted
    console.log("Invalid JSON");
  }
}

parseJSON('{ "name": "test"}');
parseJSON('{ "name" = "test"}');
