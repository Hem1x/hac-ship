export interface MessageType {
  id?: number;
  value: string;
  from: 'user' | 'bot';
  date: number;
}
