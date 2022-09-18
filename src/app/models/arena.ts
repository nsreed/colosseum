

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

type ISet<T> = {
  [key: string]: T | null
};

export type IScreenshot = {
  base64: string;
}

export type IResource = {
  url: string;
  title: string;
}

export type IReference<T> = T & {
  screenshot: IScreenshot;
}

export type ICitation<T> = T & {
  body: string;
}

export type IBlock<T = any> = {
  title: string;
  owner: {
    userName: string;
  },
  description?: string;
  content?: T;
  created?: {
    time: number;
    timezoneOffset: number;
  }
}

export type IChannel = IBlock<any> & {
  blocks: ISet<IBlock>;
}

export type IUserRoot = {
  blocks: ISet<IBlock>;
  channels: ISet<IChannel>;
}

export type IGunRoot = {
  version: {
    major: number;
    minor: number;
    revision: number;
  }
} & {
  [key: string]: IUserRoot;
}

const vblock: IBlock<IReference<IResource>> = {
  title: 'video',
  owner: { userName: 'bob' },
  description: 'a test reference to a video',
  content: {
    title: 'haha cats',
    screenshot: {
      base64: 'adfadsfasfdadsffsd'
    },
    url: 'http://cats.com'
  }
};

const cblock: IBlock<ICitation<IReference<IResource>>> = {
  title: 'video2',
  owner: { userName: 'bob' },
  description: 'a test reference to a video',
  content: {
    title: 'haha cats',
    screenshot: {
      base64: 'adfadsfasfdadsffsd'
    },
    url: 'http://cats.com',
    body: 'Hello. I love cats. Cats cats cats'
  }
};

const channelBlock: IChannel = {
  title: 'default channel',
  owner: { userName: 'bob' },
  blocks: {
    x: null,
    y: null,
    z: null
  }
}