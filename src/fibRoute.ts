// Endpoint for querying the fibonacci numbers
import { Request, Response } from 'express';
import fibonacci from "./fib";

export default (req: Request, res: Response): void => {
  const { num } = req.params;

  const parsedNum: number = parseInt(num, 10);

  if (isNaN(parsedNum) || parsedNum < 0) {
    res.status(400).send(`fibonacci(${num}) is undefined`);
    return;
  }

  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
