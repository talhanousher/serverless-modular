module.exports = {
  INVALID_SCOPE: 'Invalid use of scope flag\n\n only set to "--scope local or --scope global" while using this flag',
  DUPLICATE_PATH: 'Duplicate basePath found in one of the feature functions.yml',
  PARALLEL_FLAG_USAGE: 'Use parallel deployments only when deploying local features',
  INVALID_ES_VERSION: 'Invalid esVersion at smConfig in serverless.yml',
  REMOVE_FLAG_USAGE: 'Invalid use of remove flag\n\n only set to "--remove true or --remove false" while using this flag',
  FEATURE_ALREADY_EXISTS: name => `Feature '${name}' Already exists`,
  BASE_PATH_EXISTS: name => `basePath '${name}' Already exists`,
  FUNCTION_YML_NOT_EXISTS: (filePath, feature) => `ENOENT: no such file or directory, open '${filePath}'\n\n Feature '${feature}-functions.yml' file does not exists`,
  HANDLER_NOT_EXISTS: (filePath, feature) => `ENOENT: no such file or directory, open '${filePath}'\n\n Feature '${feature}-handler.js' file does not exists`,
  FUNCTION_ALREADY_EXISTS: (functionName, feature) => `Function "${functionName}" already exists in feature "${feature}"`,
  HTTP_PATH_ALREADY_EXISTS: (HTTPPath, feature) => `HTTP Path "${HTTPPath}" already exists in feature "${feature}"`,
};
