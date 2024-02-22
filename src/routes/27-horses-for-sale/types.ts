export type CardDescItem = {
    title: string;
    description: string;
};

export type CardInfo = {            // H4Sale - horses for sale and breding
    images: string[];               // image urls relative to the root folder
    descriptions: CardDescItem[];   // title, description items
    notes: string;                  // text with or without html tags
    linkText: string;               // text for the external link
    linkUrl: string;                // url for the external link
};

/*
"str".split(/!\[\](\(*.jpg\))/i)
----------------------------------------------

![](image-url)

#title
description

#title
description

#title
description

#title
description

#title
description

----------------------------------------------

![](image-url)

#title
description

#title
description

#title
description

#title
description

#title
description

----------------------------------------------
*/
