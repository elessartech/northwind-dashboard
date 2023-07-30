import { Response, NextFunction } from "express";
import logger from "./logger";

const getCurrentTime = (): string => {
  const today = new Date();
  const date = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  return `${date} ${time}`;
};

const requestLogger = (
  request: { method: string; path: string; body: object },
  _response: object,
  next: () => void
) => {
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("Time:  ", getCurrentTime());
  logger.info("---");
  next();
};

const tokenExtractor = (
  request: any,
  _response: Response,
  next: NextFunction
) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    request.token = authorization.substring(7);
  } else {
    request.token = null;
  }

  next();
};

export default { requestLogger, tokenExtractor };
