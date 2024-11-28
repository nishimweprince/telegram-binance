import app from './app';

const { PORT = 8080 } = process.env;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
