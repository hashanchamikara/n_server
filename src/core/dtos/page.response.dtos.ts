interface PageResponse<E> {
    results: E[];
    totalRecords: number;
    totalPages: number;
    pageSize: number;
    page: number;
    sort: Sort[];
    filter: Filter[];
}