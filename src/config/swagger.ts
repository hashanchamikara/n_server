import swaggerJsdoc, {Options} from 'swagger-jsdoc';

const options: Options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'n_server API Documentation',
            version: '1.0.0',
            description: 'API documentation using Swagger',
        },
    },
    apis: ['./src/routes/*.ts'],

};

const specs = swaggerJsdoc(options);
export default specs;
