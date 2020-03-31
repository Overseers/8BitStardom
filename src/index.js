import packageJson from '../package.json';
import setApp from './bin/util/www';
import moment from 'moment';
import cors from 'cors';
import {
    GetUserByEmail,
    RegisterNewUser,
    GetToken,
    EmailLogin,
} from './bin/services/Firebase.js';

const app = setApp();
const { name, version } = packageJson;
const PORT = process.env.PORT || 8091;

app.use(cors());

['log', 'warn', 'error'].forEach(function(method) {
    var oldMethod = console[method].bind(console);
    console[method] = function() {
        oldMethod.apply(console, [
            `<${name}|${PORT}|${version}|${moment()
                .utc()
                .utcOffset('-06:00')
                .format('MM-DD-YYYY hh:mm:ss A')} <${method.toUpperCase()}>>:`,
            ...arguments,
        ]);
    };
});

app.listen(PORT, () => {
    console.log(`Server online`);
});
