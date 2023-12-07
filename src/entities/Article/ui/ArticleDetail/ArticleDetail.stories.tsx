import { ComponentMeta, ComponentStory } from "@storybook/react";

import { IStateSchema } from "app/providers/storeProvider";
import { ThemeEnum } from "app/providers/themeProvider";
import { storeDecorator } from "shared/config/storybook/styleDecorator/storeDecorator";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";
import {
  ArticleBlockTypeEnum,
  ArticlesTypesEnum,
  IArticle,
} from "../../model/types/article";
import { ArticleDetail } from "./ArticleDetail";

const article: IArticle = {
  id: "1",
  title: "Javascript news",
  subtitle: "Что нового в JS за 2022 год?",
  img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  views: 1022,
  createdAt: "26.02.2022",
  type: [ArticlesTypesEnum.IT],
  user: {
    id: "1",
    username: "aza",
  },
  blocks: [
    {
      id: "1",
      type: ArticleBlockTypeEnum.TEXT,
      title: "Заголовок этого блока",
      paragraphs: [
        "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
        "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
      ],
    },
    {
      id: "4",
      type: ArticleBlockTypeEnum.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: "2",
      type: ArticleBlockTypeEnum.IMAGE,
      src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
      title: "Рисунок 1 - скриншот сайта",
    },
  ],
};

const initialStore: DeepPartial<IStateSchema> = {
  articleDetail: {
    data: article,
    isLoading: false,
    error: undefined,
  },
};

export default {
  title: "entities/ArticleDetail",
  component: ArticleDetail,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    id: "1",
  },
} as ComponentMeta<typeof ArticleDetail>;

const Template: ComponentStory<typeof ArticleDetail> = (args) => (
  <ArticleDetail {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator(initialStore)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  storeDecorator(initialStore),
  themeDecorator(ThemeEnum.DARK),
];
