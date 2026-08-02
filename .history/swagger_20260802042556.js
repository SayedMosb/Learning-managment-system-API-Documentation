const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"LMS API",
            version:"1.0.0",
            description:"Learning Management System API Documentation"
        },
        servers:[
            {
                url:"http://localhost:4000"
            }
        ]
    },

    apis:["./route/*.js"]
};


const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;