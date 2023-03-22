import logger from "./logger";

const requestLogger = (
  request: { method: string; path: string; body: object },
  _response: object,
  next: () => void
) => {
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("---");
  next();
};

export default { requestLogger };
