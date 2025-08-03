const fs = require('fs');

const dirs = [
	'monsters',
	'magic-items',
	'spells'
]

const savePath = 'public/data/monsters.json'

let data = {};
function saveComposed(){
	fs.writeFile(savePath, JSON.stringify(data), (error) => {
		if (error) {
		  console.log('An error has occurred ', error);
		  return;
		}
		console.log('Data written successfully to disk');
	  });
}

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename, i) {
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
		if(filenames.length-1 === i) saveComposed()
      });
    });
  });
}


readFiles('data/monsters/', (filename, content) => {
  let name = filename.replace(/\.[^/.]+$/, "")
  data[name] = JSON.parse(content);
}, function(err) {
  throw err;
});



