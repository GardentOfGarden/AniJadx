const express = require('express');
const path = require('path');

const app = express();
// Render сам подставит нужный порт в process.env.PORT
const PORT = process.env.PORT || 3000;

// Эта команда говорит: "Отдай файл index.html на любой запрос"
// Этого достаточно для твоего случая.
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
