import Service from '@ember/service';
import fetch from 'ember-fetch';

export default class ReqService extends Service {
    async testRequest(url) {
        const response = await fetch(url);
        return response;
    }
}