import { Counter } from './ui/Counter';
import type { CounterSchema } from './model/types/CounterSchema';
import { counterReducer } from './model/slice/counterSlice';

export { counterReducer, Counter, CounterSchema };
