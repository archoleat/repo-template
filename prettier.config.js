export default {
  overrides: [
    {
      files: ["*.ts", "*.yml"],
      options: {
        singleQuote: true,
      },
    },
    {
      files: ["*.json"],
      options: {
        trailingComma: "none",
      },
    },
  ],
};