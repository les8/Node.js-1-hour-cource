import path from 'path';
import { fileURLToPath } from 'url';

const __fileURL = fileURLToPath(import.meta.url);
const __filename = path.basename(__fileURL);
const __dirname = path.dirname(__fileURL);

//console.log(__dirname);
//console.log(__fileURL);
//console.log(__filename);
//console.log(path.extname(__filename));

// получение инфы о файле
console.log(path.parse(__filename));

// обращение к файлу
console.log(path.join(__dirname, 'server', 'index.html'));