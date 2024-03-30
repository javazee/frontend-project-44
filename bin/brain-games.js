#!/usr/bin/env node
import greeting from '../src/cli.js';
import brainEven from './brain-even.js';

const name = greeting();
brainEven(name);
