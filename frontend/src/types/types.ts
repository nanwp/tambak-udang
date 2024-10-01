type Table = {
    columns: any;
    data: any;
    getValue?: React.Dispatch<React.SetStateAction<number | string | null>>;
    getAllValue?: React.Dispatch<React.SetStateAction<any>>;
    setParams?: (params: any) => void;
    params?: any;
    keyId?: string;
    id?: string | number | null;
    jenisTable?: string;
};

type Pagination = {
    meta: Meta;
    data: Array<any>;
    params: Params;
    setParams: React.Dispatch<React.SetStateAction<Params>>;
};

type Params = {
    page: number;
    page_size: number;
    keyword: string;
    gudang?: string;
}

type Meta = {
    page: number;
    page_size: number;
    total: number;
    total_page: number;
    total_data: number;
}

interface DataPieChart {
    label: string;
    value: number;
}

