const returnStatus={
success:1,
failure:0,
invalid:2
}
const statusCode={
    success: 200,
    created: 201,
    empty: 204,
    multiStatus: 207,
    badRequest: 400,
    Unauthorized: 401,
    Forbidden: 403,
    notFound: 404,
    conflict: 409,
    preconditionFailed: 412,
    internalServerError: 500,
}



export {statusCode, returnStatus}