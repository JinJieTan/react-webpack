const app = require('express')();

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(3000, err => {
  if (!err) {
    console.log('监听成功，端口号3000');
  } else {
    console.log(err);
  }
});
