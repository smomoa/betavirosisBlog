export function consumeWS(Metodo, Url, ParametrosPOST, parametrosGET) {
    let UrlApi = 'http://localhost:4000/'
    let peticion = {}
    let url_ws = `${UrlApi}${Url}${parametrosGET}`;

    if (Metodo === 'POST') {
        peticion = {
            method: Metodo,
            body: JSON.stringify(ParametrosPOST),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
    }

    if (Metodo === 'GET') {
        peticion = {
            method: Metodo,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
    }

    return new Promise(async (resolve, reject) => {

        await fetch(url_ws, peticion)
            .then(response => response.json())
            .then(res => {
                resolve(res);
            })
            .catch(error => {
                reject(error);
            });
    });
};

export default consumeWS;