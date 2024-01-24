import {FindOptions, Model, ModelStatic, Op} from "sequelize";

export abstract class BaseModel extends Model {

    static async paginate<M extends BaseModel>(
        this: ModelStatic<M>,
        request: PageRequest
    ): Promise<PageResponse<M>> {

        const page = (request.page ? request.page : 1);
        const size = (request.size ? request.size : 10);

        const filterCondition: Record<string, any> = {};
        request.filter?.forEach(filter => {
            filterCondition[filter.field] = BaseModel.getOperator(filter.operator, filter.value);
        });

        const orderBy: [string, string][] = [];
        request.sort?.forEach((item) => {
            orderBy.push([item.field, item.direction ? item.direction.toUpperCase() : 'ASC']);
        });

        const options: FindOptions = {
            offset: (page - 1) * size,
            limit: size,
            where: filterCondition,
            order: orderBy
        };

        const results = await this.findAll(options)

        const totalRecords = await this.count({where: filterCondition});
        const totalPages = Math.ceil(totalRecords / size)

        return {
            results: results,
            totalRecords: totalRecords,
            totalPages: totalPages,
            pageSize: size,
            page: page,
            sort: request.sort ?? [],
            filter: request.filter ?? []
        };
    }

    public static getOperator(operator: string, value: string): {} {
        switch (operator) {
            case 'eq':
                return {[Op.eq]: value};
            case 'like':
                return {[Op.like]: value};
            case 'gt':
                return {[Op.gt]: value};
            case 'lt':
                return {[Op.lt]: value};
            default:
                return {[Op.all]: value};
        }
    }
}