export default function errorFunction(error) {
    if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log('\nerror data: ', error.response.data);
    console.log('\nerror status: ', error.response.status);
    console.log('\nerror header: ', error.response.headers);
    }
    else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log('\nerror request: ', error.request);
    }
     else {
    // Something happened in setting up the request that triggered an Error
    console.log('\nError message: ', error.message);
    }
    console.log('\nerror config: ', error.config);
    }