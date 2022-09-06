

export interface BaseBlock {
  title?: string;
  description?: string;
}

export interface ContentBlock extends BaseBlock {
  body: string;
}

export interface ReferenceBlock extends BaseBlock {
  sourceTitle: string; // Title of the scraped page
  source: string; // URL
  screenshot?: string; // screenshot?
}


export interface CitationBlock extends ContentBlock {
  reference: ReferenceBlock;
}

export interface Gladiator {
  name: string;
  channels: Channel[];
  blocks: BaseBlock[];
  urls: URL[];
}

export interface Channel extends BaseBlock {
  blocks: BaseBlock[];
}