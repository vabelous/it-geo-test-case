const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');


const server = jsonServer.create();
const router = jsonServer.router('server/database.json');
const userdb = JSON.parse(fs.readFileSync('server/users.json', 'UTF-8'));

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(jsonServer.defaults());
server.use(jsonServer.rewriter({
	'/it-geo/api/dictionaries/languages': '/languages',
	'/it-geo/api/interaction/dynamic-form': '/dynamic-form'
  }))
  

const SECRET_KEY = '123456789';

// Создание токена на основе полученных данных
function createToken(payload) {
	const expiresIn = '10m';
	return jwt.sign(payload, SECRET_KEY, {expiresIn});
}

// Создание токена на основе полученных данных
function refreshToken(payload) {
	const expiresIn = '1h';
	return jwt.sign(payload, SECRET_KEY, {expiresIn});
}

// Проверка токена
function verifyToken(token) {
	return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err);
}

// Проверка наличия учетной записи пользователя в ХД
function isAuthenticated({username, password}) {
	return userdb.users.findIndex(user => user.username === username && user.password === password) !== -1;
}

// Регистрация пользователя
server.post('/api/authentication/registration', (req, res) => {
	// console.log('registration endpoint вызвана; request body:');
	// console.log(req.body);
	const {username, password} = req.body;

	if (isAuthenticated({username, password}) === true) {
		const status = 401;
		const message = 'Имя и Пароль уже существуют';
		res.status(status).json({status, message});
		return;
	}

	fs.readFile('./users.json', (err, requestData) => {
		if (err) {
			const status = 401;
			const message = err;
			res.status(status).json({status, message});
			return;
		}

		// Получение данных текущего пользователя
		const data = JSON.parse(requestData.toString());

		// Получение id последннего пользователя
		const lastItemId = data.users[data.users.length - 1].id;

		// Добавление пользователя
		data.users.push({id: lastItemId + 1, username, password});

		// Запись данных в ХД
		const writeData = fs.writeFile('./users.json', JSON.stringify(data), (err, result) => {
			if (err) {
				const status = 401;
				const message = err;
				res.status(status).json({status, message});
				return;
			}
		});
	});

	// Создание токена для нового пользователя
	const access_token = createToken({username, password});
	const refresh_token = refreshToken({username, password});
	// console.log("Access Token: ", access_token);
	// console.log("Refresh Token: ", refresh_token);
	res.status(200).json({access_token, refresh_token});
});

// Авторизация для пользователя из  ./users.json
server.post('/api/authentication/login', (req, res) => {
	// console.log('login endpoint вызвана; request body:');
	// console.log(req.body);
	const {username, password} = req.body;
	if (isAuthenticated({username, password}) === false) {
		const status = 401;
		const message = 'Неправильные имя пользователя или пароль';
		res.status(status).json({status, message});
		return;
	}
	const access_token = createToken({username, password});
	const refresh_token = refreshToken({username, password});
	// console.log("Access Token: ", access_token);
	// console.log("Refresh Token: ", refresh_token);
	res.status(200).json({access_token, refresh_token});
});




// server.post('/login', (req, res, next) => {
//   const users = readUsers();

//   const user = users.filter(
//     u => u.username === req.body.username && u.password === req.body.password
//   )[0];

//   if (user) {
//     res.send({ ...formatUser(user), token: checkIfAdmin(user) });
//   } else {
//     res.status(401).send('Incorrect username or password');
//   }
// });

// server.post('/register', (req, res) => {
//   const users = readUsers();
//   const user = users.filter(u => u.username === req.body.username)[0];

//   if (user === undefined || user === null) {
//     res.send({
//       ...formatUser(req.body),
//       token: checkIfAdmin(req.body)
//     });
//     db.users.push(req.body);
//   } else {
//     res.status(500).send('User already exists');
//   }
// });

// // server.use('/users', (req, res, next) => {
// //   if (isAuthorized(req) || req.query.bypassAuth === 'true') {
// //     next();
// //   } else {
// //     res.sendStatus(401);
// //   }
// // });

server.use(router);
server.listen(3000, () => {
	// console.log('JSON Server is running');
});

// function formatUser(user) {
//   delete user.password;
//   user.role = user.username === 'admin'
//     ? 'admin'
//     : 'user';
//   return user;
// }

// function checkIfAdmin(user, bypassToken = false) {
//   return user.username === 'admin' || bypassToken === true
//     ? 'admin-token'
//     : 'user-token';
// }

// function isAuthorized(req) {
//   return req.headers.authorization === 'admin-token' ? true : false;
// }

// function readUsers() {
//   const dbRaw = fs.readFileSync('./server/db.json');
//   const users = JSON.parse(dbRaw).users
//   return users;
// }
