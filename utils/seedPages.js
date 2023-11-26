const Page = require('../models/page');

const seedPages = async (req, res, next) => {
    const article = await Page.find({});
        if(!article.length) {
            const awesome_page = new Page({
                page_type: "home",
                meta: {
                  title: "Test blog",
                  description: "Test blog description",
                  slug: "home"
                },
                body: [
                  {
                    type: "article_list_block",
                    id: "40250d0b-7b08-405b-96f5-478e3b3f3020",
                    data: {
                      title: "Похожие статьи",
                      articles: [
                        {
                          title: "Suspendisse sagittis cursus lectus, at efficitur magna feugiat in.",
                          link: "/article-1",
                          image: "https://devtwit8.ru/img/p1.png"
                        },
                        {
                          title: "Sed eu orci tincidunt, finibus sapien et, malesuada dolor.",
                          link: "/article-2",
                          image: "https://devtwit8.ru/img/p2.png"
                        },
                        {
                          title: "Suspendisse finibus sapien in tellus rhoncus lobortis.",
                          link: "/article-3",
                          image: "https://devtwit8.ru/img/p3.png"
                        },
                        {
                            title: "Nunc vitae enim eget felis elementum volutpat.",
                            link: "/article-4",
                            image: "https://devtwit8.ru/img/p4.png"
                          },
                      ]
                    }
                  }
                ]
            })
            await awesome_page.save();
        }
}

module.exports = {
    seedPages
}