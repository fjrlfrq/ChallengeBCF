//Buatlah sebuah aplikasi yang dapat mendata daftar pekerjaan kamu

const line = process.argv;

const fs = require('fs');
const data1 = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

switch (line[2]) {
    case "list":
        console.log("Daftar Pekerjaan :");
        data1.forEach((task, index) => {
            console.log(`${index + 1}. ${task.complete ? '[X]' : '[ ]'} ${task.title}`);
        });
        break;
    case 'task':
        break;
    case "add":
        data1.push({ title: process.argv.slice(3).join(" "), complete: false });
        fs.writeFileSync("data.json", JSON.stringify(data1, null, 3), "utf-8")
        console.log(`${process.argv.slice(3).join(" ")}  telah ditambahkan`);
        break;
    case 'delete':
        let hapus = [];
        for (let i = 0; i < data1.length; i++) {
            hapus.push(data1[i].title)
        }
        data1.shift({ title: process.argv[3], complete: false });
        fs.writeFileSync("data.json", JSON.stringify(data1, null, 3), "utf-8");
        console.log(`${hapus[0]} telah dihapus dari daftar`);
        break;
    case 'complete':
        data1.forEach(kerjakan => {
            if (kerjakan.complete == false) {
                kerjakan.complete = true;
                fs.writeFileSync("data.json", JSON.stringify(data1, null, 3), "utf-8");
                console.log(`${kerjakan.title} telah selesai`);
            }
        });
        break;
    case 'uncomplete':
        data1.forEach(kerjakan => {
            if (kerjakan.complete == true) {
                kerjakan.complete = false;
                fs.writeFileSync("data.json", JSON.stringify(data1, null, 3), "utf-8");
                console.log(`${kerjakan.title} status selesai dibatalkan`);
            }
        });
        break;
    case 'list:outstanding':
        console.log('Daftar Pekerjaan');
        if (process.argv[3] === 'asc') {
            data1.forEach((task, index) => {
                if (task.complete == false) {
                    console.log(`${index + 1}. ${task.complete ? '[X]' : '[ ]'} ${task.title}`);
                }
            });
        }
        break;
    case 'list:completed':
        console.log('Daftar Pekerjaan');
        if (process.argv[3] == 'desc') {
            data1.forEach((task, index) => {
                if (task.complete == true) {
                    console.log(`${index + 1}. ${task.complete ? '[X]' : '[ ]'} ${task.title}`);
                }
            });
        }
        break;
    case 'tag':
        data1[process.argv[3]].tag = process.argv.slice(4).join(" "," ");
        fs.writeFileSync("data.json", JSON.stringify(data1, null, 3), "utf-8")
        console.log(`Tag '${process.argv.slice(4).join(",")}' telah ditambahkan ke daftar ${data1[process.argv[3]].title}`);
        break;
    case 'filter:':
        console.log('Daftar Pekerjaan');
        data1.forEach((task, index) => {
            let kata = process.argv.slice(3).join(" ")
            if (task.tag == kata) {
                console.log(`${index + 1}. ${task.complete ? '[X]' : '[ ]'} ${task.title}`);
            }
        });
        break;
    default:
        console.log('>>> JS TODO <<<');
        console.log('$ node todo.js <commad>');
        console.log('$ node todo.js list');
        console.log('$ node todo.js task <task_id>');
        console.log('$ node todo.js add <task_content>');
        console.log('$ node todo.js delete <task_id>');
        console.log('$ node todo.js complete <task_id>');
        console.log('$ node todo.js uncomplete <task_id>');
        console.log('$ node todo.js list:outstanding asc|desc');
        console.log('$ node todo.js list:completed asc|desc');
        console.log('$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>');
        console.log('$ node todo.js filter:<tag_name>');
        break;
}


