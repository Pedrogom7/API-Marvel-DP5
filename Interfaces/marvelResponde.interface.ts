interface MarvelResponse {
    code: number;
    status: string;
    data: {
        offset: number;
        limit: number;
        total: number;
        count: number;
        results: any[];
    };
}

export default MarvelResponse;
