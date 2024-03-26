export interface SearchResponse {
    kind: string;
    url: Url;
    queries: Queries;
    context: Context;
    searchInformation: SearchInformation;
    items: Item[];
  }
  
  interface Url {
    type: string;
    template: string;
  }
  
  interface Queries {
    request: QueryRequest[];
    nextPage: QueryRequest[];
  }
  
  interface QueryRequest {
    title: string;
    totalResults: string;
    searchTerms: string;
    count: number;
    startIndex: number;
    inputEncoding: string;
    outputEncoding: string;
    safe: string;
    cx: string;
  }
  
  interface Context {
    title: string;
  }
  
  interface SearchInformation {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
  }
   interface Item {
    kind: string;
    title: string;
    htmlTitle: string;
    link: string;
    displayLink: string;
    snippet: string;
    htmlSnippet: string;
    cacheId?: string;
    formattedUrl: string;
    htmlFormattedUrl: string;
    pagemap: Pagemap;
  }
  
  interface Pagemap {
    cse_thumbnail?: CseThumbnail[];
    metatags: Metatag[];
    cse_image?: CseImage[];
    VideoObject?: VideoObject[];
  }
  
  interface CseThumbnail {
    src: string;
    width: string;
    height: string;
  }
  
  interface Metatag {
    [key: string]: string;
  }
  
  interface CseImage {
    src: string;
  }
  
  interface VideoObject {
    // Define properties for VideoObject if needed, or leave empty if not specified in your data.
  }
  