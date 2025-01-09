import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Ejemplo',
      version: '1.0.0',
      description: 'Documentación de API generada con Swagger y TypeScript.',
    },
  },
  apis: ['./src/modules/**/routes.ts'], // Ruta a los archivos donde defines los endpoints
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;
