export type CardDescItem = {
    title: string;
    description: string;
};

export type H4SaleCardInfo = { // H4Sale - horses for sale
    img: string[];
    cardDescItems: CardDescItem[];
    notes: string;
    last: string;
    lastUrl: string;
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
