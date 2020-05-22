const Fs = require('fs');
let file = Fs.readFileSync('ntfs-img-kw-1.dd')
let from = 11;
let ntfs = {
    'Байт на сектор': 2,//11-13
    'Сектор на кластер': 1,//13/14
    'Зарезервированные сектора': 2,//14-16
    'Всегда1 0': 3,//16-19
    'Не используется ntfs': 2,//19-21
    'Медиа дискриптор': 1,//21-22
    'Всегда2 0': 2,//22-24
    'Сектор на дорожку': 2,//24-26
    'Кол-во голов': 2,//26-28
    'Скрытые сектора': 4,//28-32
    'Не используется1': 4,//32-36
    'Не используется2': 4,//36-40
    'Всего секретов': 8,//40-48
    '---': 16,//48-64
    'Кластеры на сегмент записи файла': 4,//64-68
    'Кластеры на индексный буфер': 1,//68-69
    'Всегда3 0': 3,//69-72
    'Том Серийный Номер': 8,//72-80
    'Контрольная сумма': 4//80-84
};

    console.log('--------------'+file.slice(3, 7).toString()+'---------------------')
    Object.keys(ntfs).reduce((num, key) => {
        let to = from +ntfs[key];
            console.log(from)
            console.log(key +'-----------------------------' + file.slice(from, to).toString('hex') + "")
            from=to;
    }, 11)
