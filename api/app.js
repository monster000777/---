const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// 数据库连接配置
const db = mysql.createConnection({
    host: 'localhost',          // 数据库地址
    user: 'root',
    password: 'root',
    database: 'jd'
});

// 连接数据库
db.connect((err) => {
    if (err) {
        console.error('数据库连接失败:', err);
        process.exit(1);
    }
    console.log('数据库连接成功');
});

// 邮箱订阅接口
app.post('/api/subscribe', (req, res) => {
    const {email} = req.body;
    if (!email) {
        return res.json({success: false, msg: '邮箱不能为空'});
    }

    /*生成一个8位的user_id  随机性较弱
    const user_id = Math.random().toString(36).slice(2, 10);*/

    // 生成36位的标准UUID字符串
    const user_id = crypto.randomUUID();

    const sql = 'INSERT INTO email (user_id, user_email) VALUES (?, ?)';

    db.query(sql, [user_id, email], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY' || err.errno === 1062) {
                // 邮箱重复
                return res.json({success: false, msg: '该邮箱已订阅'});
            }
            // 其他数据库错误
            console.error('数据库插入错误:', err);
            return res.json({success: false, msg: '数据库插入失败'});
        }

        // 插入成功，可以返回插入信息（如插入ID等）
        res.json({success: true, msg: '订阅成功', insertId: result.insertId});
        console.log('数据插入成功：' + req.body.email)
    });
});

// 启动服务器（监听3000端口）
app.listen(3000, () => {
    console.log('服务已启动：http://localhost:3000');
});