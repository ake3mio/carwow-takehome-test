declare namespace carwow {

    export type Product = {
        id: number,
        make: string,
        model: string,
        img_url: string,
        rrp: number,
        summary: string,
        carwow_rating: 9,
        available_colors: string[],
        recommended_engine: string
    }

    export type ProductPromotion = {
        id: number,
        make: string
        model: string
        img_url: string
        rrp: number,
        summary: string,
        carwow_rating: number,
    }

    export type Loadable = {
        loading: boolean;
    }
}


interface History {
    onpushstate: ((ev: Event) => any) | null;
}
