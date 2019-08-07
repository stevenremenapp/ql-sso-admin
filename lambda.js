const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-2' });

exports.handler = function(event, context, callback) {

    let scanningParameters = {
        TableName: event.tableName
    };

    docClient.scan(scanningParameters, function(err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
};
