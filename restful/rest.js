//모듈 추가
const express = require('express');

//서버 생성/ 실행한다.
const app = express();
app.listen(52273, () => {
    console.log('Server Running at http://127.0.0.1:52773');
});
// 미들웨어 추가
app.use(express.urlencoded({
    extended: false
}))
// 변수 선언
let userConuter = 0;
const users = [];

app.get('/user', (request, response) => {
    response.send(users);
});

app.get('/user/:id', (request, response) => {
    //변수 선언
    const id = request.params.id;
    //데이터 찾는다.
    const filtered = users.filter((user) => user.id == id);
    //응답한다.
    if (filtered.length == 1)
      response.send(filtered[0]);
    else
      response.status(404).send('데이터가 존재하지 않는다.');  
});

app.post('/user', (request, response) => {
    //변수 선언
    const body = request.body;
    //예외를 처리한다.
    if(!body.name)
        return response.status(400).send('name을 보내주세요');
    else if (!body.region)
        return response.status(400).send('region을 보내주세요');    
        //변수를 추출한다.
    const name = body.name;
    const region = body.region;
    //데이터를 저장한다.
    const data = {
        id: userConuter++,
        name: name,
        region: region
    };
    users.push(data);
    // 응답한다.
    response.send(data);
});

app.put('/user/:id', (request, response) => {
    //데이터를 찾는다.
    const id = request.params.id

    const user = user.find((user) => user.id == id)
    if(user) {
        //데이터가 존재한다면
        if (request.body.name)
        user[id].name = request.body.name;
        if (request.body.region)
           users[id].region = request.body.region;
           // 응답한다.
           response.send(user)
    }else {
        //데이터가 존재하지 않는다면 응답한다.
        response.status(404).send('데이터가 존재하지 않는다.');
    }
});

app.delete('/user/:id', (request, response) => {
    // 변수를 선언한다.
    const id = request.params.id
    const index = users.findIndex((user) => user.id == id)
    // 데이터를 제거한다.
    if (index != 1) {
        user.splice(index, 1);
        response.send('제거했습니다.');
    } else {
        response.status(404).send('데이터가 존재하지 않는다.');
    }
});a