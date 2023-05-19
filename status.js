import { error } from 'console';
import { fs } from 'fs';
let status = {};

try {
  const fileContent = fs.readFileSync('./status', 'utf8');
  status = JSON.parse(fileContent);
} catch (err) {
  throw new error('error fileread');
}
app.put('/updateStatus', (req, res) => {

    status.red = req.body.red;
    status.blue = req.body.blue;
  
    fs.writeFile('./status', JSON.stringify(status), 'utf8', (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Status opgeslagen in het bestand.');
      }
    });
    res.send('Status bijgewerkt.');
  });