import img1 from "@/assets/img/facility-1.jpg";
import img2 from "@/assets/img/facility-2.jpg";
import img3 from "@/assets/img/facility-3.jpg";

type CardDescItem = {
	title: string;
	description: string;
};

export type CardInfo = {
	img: string[];
	cardDescItems: CardDescItem[];
	last: string;
	lastUrl: string;
};

const defCardDescItems: CardDescItem[] = [
	{
		title: "Cutting Horse",
		description: "Seabiscuit",
	},
];

export const cardInfos: CardInfo[] = [
	{
		img: [img1, img2, img3],
		cardDescItems: defCardDescItems,
		last: 'Inquire about this horse',
		lastUrl: '#contact-us'
	},
	{
		img: [img1, img2, img3],
		cardDescItems: defCardDescItems,
		last: 'Inquire about this horse',
		lastUrl: '#contact-us'
	},
	{
		img: [img1, img2, img3],
		cardDescItems: defCardDescItems,
		last: 'Inquire about this horse',
		lastUrl: '#contact-us'
	},
];

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
