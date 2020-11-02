
export default class gComm {

    static API_KEY="AIzaSyDSRVJqyO4kKcD6IesgFBlqSoPCpuyTBtE";
    static API_ADDRESS="https://youtube.googleapis.com/youtube/v3/";

    static async requestFrom(page,requestParams={key:this.API_KEY},isPost=false){
        // we can add or remove pre defined params here
        // e.g. requestParams.foo=bar
        requestParams.key=this.API_KEY;
        return this.jsonResponse(page,requestParams,isPost);
    }

    static async jsonResponse(page,requestParams,isPost){

        const resp = isPost ? await this.postRequest( this.generateUrl(page),requestParams):await this.getRequest( this.generateUrl(page),requestParams).then();
        const json = await resp.json();
        return await json;
    }

    static  generateUrl(page){
        return this.API_ADDRESS+page;
    }

    static async getRequest(url,params){
        url += '?'+this.objToQueryString(params);
        try{
            return fetch(url , {
                // mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

                .catch(function(error) {
                console.log('Youtube fetch problem: ' + error.message);
                // ADD THIS THROW error
                throw error;
            });
        }catch (e) {
            console.log(e);
        }
    }

    static objToQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }

    static async postRequest(url,apiParams){

        const jsonBody = JSON.stringify(await apiParams);
        try{
            return fetch(url , {
                // mode: 'cors',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: await jsonBody
            }).catch(function(error) {

                //dep-console.log('Goff fetch problem: ' + error.message);
                // ADD THIS THROW error
                throw error;
            });
        }catch (e) {
            //dep-console.log(e);
        }
    }
}