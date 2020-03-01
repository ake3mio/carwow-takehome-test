import axios from "axios";

export const httpGet = <T>(url: string) => {
    const minTimeMs = 1000;
    const start = Date.now();
    return new Promise<T>(resolve => {
        axios.get(url).then(({data}) => {

            const end = Date.now();
            const diff = end - start;
            const time = diff < minTimeMs ? minTimeMs - diff : 0;

            setTimeout(() => {
                resolve(data as T);
            }, time)
        })
    })
};

