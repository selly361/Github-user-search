export interface ISearchFieldProps {
  setQuery: (query: string) => void;
  query: string;
  error: string;
  fetchData: (query: string) => Promise<void>;
}
