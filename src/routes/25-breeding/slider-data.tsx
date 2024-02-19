import img1 from "@/assets/img/sample-colt1.jpg";
import img2 from "@/assets/img/sample-colt2.jpg";
import img3 from "@/assets/img/sample-colt3.jpg";

type CardDescItem = {
  title: string;
  description: string;
  notes: string;
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
    notes:
      "612 characters - Lorem ipsum dolor sit amet consectetur	adipisicing elit. Atque illo optio suscipit dicta deleniti eaque a, consequatur incidunt porro laboriosam provident libero doloremque ratione vitae quo sunt nam, tempora adipisci. Veritatis, aut sed, impedit deleniti officia rem dicta quo ducimus ullam totam ut beatae quas? Natus nulla odio aperiam	rerum, magni deleniti blanditiis in eveniet facilis. Adipisci, illo fugit? Aspernatur. Animi quam corrupti sunt enim labore	suscipit voluptatibus soluta porro eveniet sed temporibus harum	laudantium quisquam sapiente perspiciatis uae, aut libero tenetur!",
  },
];

export const cardInfos: CardInfo[] = [
  {
    img: [img1, img2, img3],
    cardDescItems: defCardDescItems,
    last: "Inquire about this horse",
    lastUrl: "#contact-us",
  },
  {
    img: [img1, img2, img3],
    cardDescItems: defCardDescItems,
    last: "Inquire about this horse",
    lastUrl: "#contact-us",
  },
  {
    img: [img1, img2, img3],
    cardDescItems: defCardDescItems,
    last: "Inquire about this horse",
    lastUrl: "#contact-us",
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
