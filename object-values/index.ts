interface UserSettings {
  readonly language: "en" | "ja";
  readonly notifications: boolean;
  readonly theme: "dark" | "light";
}

function displaySettings(settings: UserSettings) {
  Object.values(settings).forEach((value) => console.log(value));
}

const userSettings: UserSettings = {
  theme: "dark",
  notifications: true,
  language: "en",
};

displaySettings(userSettings);
// Expected Output:
// dark
// true
// en
