import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Buffer } from 'buffer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'test', 'text.txt');


/* создание папок 
метод (mkdir) неминуемо вызывает ошибку, есди файл уще существует,
тут похоже нужна какая-то проверка...

fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if (err) {
        throw err
    }

    console.log('Папка создана!');
});
*/


/*
создание файла. Данный метод (writeFile) не покажет ошибку, 
при повторном вызове, но он перетирает существующие фалы.

fs.writeFile(filePath, 'Тут можно добавить контент', (err) => {
    if (err) {
        throw err
    };

    console.log('Файл создан, он все перетер!');

    fs.appendFile(filePath, '\nТут контент будет добавляться, не затирая предыдущий', (err) => {
        if (err) {
            throw err
        };
    
        console.log('Контент добавлен');
    });
});
*/


/*
чтение файла без кодировки utf-8

fs.readFile(filePath, (err, content) => {
    if (err) {
        throw err;
    };

    console.log(content); // выведет контент в буфферах (.)(.)
    console.log(Buffer.from(content).toString()); // выведет контент в строке
});
*/


//чтение файла c кодировкой utf-8
fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err;
    };

    console.log(content); // никаких буфферов
});
