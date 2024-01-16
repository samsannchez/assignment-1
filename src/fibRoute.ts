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

  const fibN: number = fibonacci(parsedNum);
  const result: string = fibN < 0 ? `fibonacci(${parsedNum}) is undefined` : `fibonacci(${parsedNum}) is ${fibN}`;

  res.send(result);
};