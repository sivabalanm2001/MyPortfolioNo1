const baseUrl = 'https://';

export const getBaseURL = () => {
  return baseUrl;
};

export enum apiMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
}
export const statusCode = {
  success: 200,
  no_content: 204,
  bad_request: 400,
  not_found: 404,
  internal_server_error: 500,
  unauthorized_user: 401,
  forbidden: 403,
};

export const endPoint = {};
