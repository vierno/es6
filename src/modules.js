console.groupCollapsed('MODULES');

import { jedis } from './module';

console.log(jedis);

import greeting from './moduleDefault';

greeting(); // Come to the dark side

console.groupEnd();
