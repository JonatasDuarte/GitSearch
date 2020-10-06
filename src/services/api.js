import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/"
});


export function getUserByNickname(nickname){
    return new Promise((resolve, reject)=>{
        api.get("search/users", {
            params: {
              q: nickname
            }
          })
          .then(({data})=>{
            if(data.total_count === 0) {
                reject('Nenhum usuário encontrado!')
            }
            resolve(data.items[0]);
          })
          .catch((err)=> reject('Erro de conexão!'));
    });
}

export function getUserRepos(nickname){
    return new Promise((resolve, reject)=>{
        api.get(`users/${nickname}/repos`)
            .then(({data})=> {
                resolve(data);
            })
            .catch(()=> reject('Falha ao baixar repositórios'));
    });
}