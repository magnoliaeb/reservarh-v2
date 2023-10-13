import Vue from 'vue';
import Util from '../injects/util';

export default async ({ app }, inject) => {
	inject('util', new Vue(Util(app)));
};
