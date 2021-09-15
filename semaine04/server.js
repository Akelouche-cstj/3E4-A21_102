import './env.js';
import chalk from 'chalk';

import app from './src/app.js';

console.log(chalk.green('bonjour'));

const PORT = process.env.PORT;

app.listen(PORT, err =>{
    console.log(chalk.blue(`Server listening on port : ${PORT}`))
})