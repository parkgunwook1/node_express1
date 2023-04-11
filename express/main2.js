const express =require('express');

const app = express();

app.get('*', (request, response) => {
    response.status(404);
    response.set('methodA', 'ABCDE');
    response.set({
        'methodB1' : 'FGHIJ',
        'methodB2' : 'KLMNO'
    });
    response.send('내 마음대로 본문을 입력합니다.');
});

app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});