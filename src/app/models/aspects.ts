type HasOwner = {
  owner: User;
}

export type Body = { body: string; }
export type Description = { description?: string; }
export type Title = { title?: string; }
export type URL = { url: string; }
export type Created = { created: string; }
export type TimeStamp = {
  /** Minutes */
  timezoneOffset: number;
  /** Milliseconds */
  time: number; // TODO confirm this can be bigint in gun
}

/** Base Content Types  */
export type Image = { base64: string; }
export type PDF = { base64: string; }
export type Screenshot = Image;
export type Text = Body;
export type Video = { base64: string; }

/** Complex Types */
export type Citation = Reference & Text;
export type ContentData = Image | Video | PDF | Screenshot | Text;
export type ImageCitation = ImageReference & Citation;
export type ImageReference = Resource & Image;
export type PdfReference = Resource & (PDF);
export type Reference = Resource & Screenshot;
export type Resource = SourceTitle & SourceUrl;
export type SourceTitle = { titleText: string; }
export type SourceUrl = URL; //{ sourceUrl: string; }
export type VideoCitation = VideoReference & Citation;
export type VideoReference = Resource & (Video | null | undefined);

/** Blocks */
export type Block = HasOwner & Title & Description;
export type CitationBlock = Block & Citation;
export type ImageBlock = Block & (ImageReference | Image);
export type ImageCitationBlock = Block & ImageCitation;
export type PdfBlock = Block & (PdfReference | PDF);
export type ReferenceBlock = Block & Reference;
export type TextBlock = Block & Text;
export type VideoBlock = Block & (VideoReference | Video);
export type VideoCitationBlock = Block & VideoCitation;
export type UnionBlock = Channel | CitationBlock | ImageBlock | ImageCitationBlock | PdfBlock | ReferenceBlock | TextBlock | VideoBlock | VideoCitationBlock;

/** Alternate ways of representing types */
export type BaseBlock = HasOwner & Title & Description;
export type ExtBlock<T> = BaseBlock & T;

interface IScreenshot {
  base64: string;
}

interface IResource {
  url: string;
  title: string;
}

type IReference<T> = T & {
  screenshot: IScreenshot;
}

type ICitation<T> = T & {
  body: string;
}

interface IBlock<T> {
  title: string;
  owner: {
    username: string;
  },
  description?: string;
  content?: T;
}

const vblock: IBlock<IReference<IResource>> = {
  title: 'video',
  owner: { username: 'bob' },
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
  title: 'video',
  owner: { username: 'bob' },
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

// const block: ExtBlock<VideoReference> = {};
// type VideoBlock = Block<Reference<Video>>; // THIS
// type PdfCitationBlock = Block<Citation<PDF>>; // THIS
// type PdfBlock = Block<PDF>;
// const vblock: VideoBlock = {};

/**
 * As a user, I want to
 * BLOCK
 *  RAW
 *   upload a [text|image|video|pdf|webpage]
 *  REFERENCE 
 *   paste a link to a [text|image|video|pdf|webpage] from the web
 *  CITATION
 *   capture a [text|image|video|pdf|webpage] in an existing document with reference to its source
 *  COLLECT / ORGANIZE
 *   refer to an existing [text|image|video|pdf|webpage] block?
 *  MODIFY
 *   edit an existing block
 *  REMOVE
 *   remove an existing block
 * GROUP/ORGANIZATION
 *  name/rename group
 *  create group
 *  remove group
 *  add member
 *  remove member
 * CHANNEL
 *  create channel
 *  assign an existing [text|image|video|pdf|webpage] to channel
 *  rename channel
 *  remove channel
 *  view all [text|image|video|pdf|webpage]s in channel
 *  rearrange block order within channel
 *  pin block(s) in channel
 * TOP LEVEL / USER
 *  pin channels
 *  channel list
 *   ordering (setting)
 */

// export type IBlock<T> = T & Block;

/** Channels */

interface Channel extends Block {
  base64: string;
  blocks: Block[];
}

interface MasterChannel extends Block {
  channels: Channel[];
}

// export type MasterChannel = Block & {
//   channels: Channel[];
// }

/** User Junk */
export type User = {
  userName: string;
};
export type Gladiator = HasOwner & {
  rootChannel?: MasterChannel;
};
export type Group = HasOwner & {
  rootChannel?: MasterChannel;
  members: Gladiator[];
};