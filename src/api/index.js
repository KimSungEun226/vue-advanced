import axios from "axios";

// 1. HTTP Request & Reponse 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}


// 2. API 함수들을 정리
function fetchList(url) {
    return axios.get(`${config.baseUrl}` + url);
}

export {
    fetchList
}