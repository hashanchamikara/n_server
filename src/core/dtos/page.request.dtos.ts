interface PageRequest {
    page?: number;
    size?: number;
    direction?: string;
    filter?: Filter[];
    sort?: Sort[];
}