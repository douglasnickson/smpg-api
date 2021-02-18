export interface SearchDTO {
  token: string;
  q: string;
  type: string;
  market?: string;
  limit?: number;
  offset?: number;
  includeExternal?: string;
  operationType?: string;
}
