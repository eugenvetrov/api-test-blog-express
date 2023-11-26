const Article = require('../models/article');

const seedArticles = async (req, res, next) => {
    const article = await Article.find({});
        if(!article.length) {
            const awesome_article = new Article({
                id: 1,
                page_type: "article",
                meta: {
                  title: "Suspendisse sagittis cursus lectus, at efficitur magna feugiat in.",
                  description: "Praesent congue lectus sit amet venenatis aliquam. Fusce ac orci vel lectus gravida pretium ut vitae sapien. Suspendisse vitae purus quis ipsum vehicula suscipit ut ac arcu. Integer ullamcorper a tortor id vestibulum. Mauris tempor augue imperdiet, pellentesque sem in, laoreet nisi. Integer vitae diam nisl. Maecenas in ipsum vel eros bibendum feugiat. Nulla facilisi. Ut hendrerit placerat mi. Donec est nibh, scelerisque tincidunt ultrices quis, lacinia vestibulum magna. Praesent ornare egestas enim, ut bibendum ligula gravida et. Morbi ligula sem, placerat sed iaculis id, dapibus et mauris. Vivamus vitae lacus viverra enim pharetra condimentum mollis id urna. Cras ipsum ipsum, imperdiet id eleifend sit amet, tempus ac neque.",
                  slug: "article-1"
                },
                body: [
                  {
                    type: "article_intro_block",
                    id: "250f1d42-3639-47d2-afde-3d0f2f4e081b",
                    data: {
                      title: "Morbi elementum aliquet lacus eu scelerisque.",
                      image: "https://devtwit8.ru/img/p1.png",
                      reading_time: 2,
                      views_count: 360,
                      short_description: "Etiam ac lacus eget libero pharetra imperdiet. In vestibulum pretium dignissim. In euismod rutrum ante non cursus. Cras tristique nibh in dictum lobortis. Nam ut urna nec nulla mollis laoreet et eget leo. Aenean tempus velit ut urna volutpat commodo. Duis malesuada, odio ut porta dictum, eros est egestas sem, semper varius turpis orci non felis. Curabitur tincidunt id leo vitae maximus. Maecenas eu neque massa. Aliquam feugiat enim at velit posuere, sed vestibulum erat lacinia."
                    }
                  },
                  {
                    type: "text_block",
                    id: "10b951d3-d595-4776-b85f-7e6ba5d8818e",
                    data: "<h1>Donec eleifend felis velit, ac pretium est dictum at.</h1><p>Ut dictum, odio sit amet semper dictum, velit est eleifend tellus, a tincidunt enim ex feugiat velit. Aliquam quis nisi vel ligula mollis tincidunt eu et purus. Fusce eu sapien tristique, pellentesque erat at, malesuada purus. Aenean ac nulla id est cursus aliquam. Pellentesque vehicula, quam sed pretium vulputate, libero neque posuere ex, et iaculis est leo at tortor. Suspendisse nulla dolor, euismod in dolor eu, posuere consectetur leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus finibus rutrum enim at fringilla. Sed blandit purus est, eu eleifend risus facilisis eget. Duis pellentesque bibendum diam, bibendum tempus est. Maecenas feugiat vestibulum mi vestibulum suscipit.</p><blockquote><footer>—Irbis</footer></blockquote>"
                  },
                  {
                    type: "image_block",
                    id: "8e08aebe-9e70-4a19-92cc-349a1bfd81ad",
                    data: {
                      src: "https://devtwit8.ru/img/1.png",
                      caption: "image caption"
                    }
                  },
                  {
                    type: "slider_block",
                    id: "16d87a28-c4ef-4efa-b065-5aad2b146e79",
                    data: [
                      "https://devtwit8.ru/img/1.png",
                      "https://devtwit8.ru/img/2.png",
                      "https://devtwit8.ru/img/3.png",
                      "https://devtwit8.ru/img/4.png"
                    ]
                  },
                  {
                    type: "subscribe_form_block",
                    id: "fe5aa6db-0ceb-40d2-b56d-3f180960d25e",
                    data: ""
                  },
                  {
                    type: "text_block",
                    id: "1d070b6c-8848-4b76-8197-b581b3098f17",
                    data: "<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<h1><p>Suspendisse vestibulum nunc a eleifend tincidunt. Morbi pharetra odio non cursus placerat. Vestibulum porttitor tellus dolor, non laoreet est tristique ac. Morbi gravida tincidunt neque, ac suscipit neque mattis non. Sed eget rutrum lacus. Sed ut ligula sit amet sem vehicula facilisis et nec sapien. Etiam pretium, massa at porta posuere, diam libero viverra tellus, ac dapibus urna est ut ante. Nullam vel diam fermentum, finibus enim at, egestas enim. Pellentesque vitae consectetur arcu. Curabitur pellentesque nunc libero. Curabitur molestie lacus quam, at laoreet libero interdum sit amet. Nulla et nisl vel lectus lacinia dapibus. Duis vel lacinia elit. Etiam auctor neque sed nibh porttitor malesuada. Donec non porta nisl. Duis posuere, leo fermentum ultricies auctor, orci massa posuere metus, in hendrerit ligula erat nec purus.</p>"
                  },
                  {
                    type: "article_list_block",
                    id: "40250d0b-7b08-405b-96f5-478e3b3f3020",
                    data: {
                      title: "Похожие статьи",
                      articles: [
                        {
                          title: "Sed eu orci tincidunt, finibus sapien et, malesuada dolor.",
                          link: "/article-2",
                          image: "https://devtwit8.ru/img/p2.png"
                        }
                      ]
                    }
                  },
                  {
                    type: "cta_form_block",
                    id: "7e366c8a-95af-45be-b25e-c0aaa379d1f2",
                    data: ""
                  }
                ]
            })

            const awesome_article_2 = new Article({
                id: 2,
                page_type: "article",
                meta: {
                  "title": "Sed eu orci tincidunt, finibus sapien et, malesuada dolor.",
                  "description": "page description",
                  "slug": "article-2"
                },
                body: [
                  {
                    type: "article_intro_block",
                    id: "250f1d42-3639-47d2-afde-3d0f2f4e081b",
                    data: {
                      title: "Maecenas non orci vestibulum, aliquet est eget, vehicula enim",
                      image: "https://devtwit8.ru/img/p2.png",
                      reading_time: 12,
                      views_count: 5761,
                      short_description: "Sed id aliquet tortor. Vivamus eu iaculis nulla, non venenatis mi. Etiam vel ligula vitae quam malesuada ornare. Mauris pellentesque justo augue, vitae tempor odio commodo in. Duis leo lectus, aliquam vitae egestas quis, commodo nec mauris. Mauris in enim vitae leo pulvinar accumsan id eu lorem."
                    }
                  },
                  {
                    type: "text_block",
                    id: "10b951d3-d595-4776-b85f-7e6ba5d8818e",
                    data: "<h1>Aliquam at hendrerit nibh. Ut augue tortor, ultricies ut erat sit amet, facilisis finibus risus.</h1><p>Nam id varius nisi, eu lacinia massa. Suspendisse luctus nec quam ac pretium. Nulla facilisis, ex et iaculis rhoncus, arcu velit aliquet tellus, eget laoreet ex eros non massa. Nullam placerat quam quis laoreet eleifend. Vestibulum vehicula nibh elit, eget semper velit lobortis pulvinar. Maecenas posuere, nunc non aliquet blandit, neque orci commodo risus, non suscipit turpis nibh vitae mi. Ut et orci at arcu congue tincidunt. Cras sagittis nunc felis, non finibus neque rutrum eget. Donec eleifend posuere dictum. Vestibulum laoreet nisl in odio aliquam, et sodales velit ultricies.</p>"
                  },
                  {
                    type: "image_block",
                    id: "8e08aebe-9e70-4a19-92cc-349a1bfd81ad",
                    data: {
                      src: "https://devtwit8.ru/img/2.png",
                      caption: ""
                    }
                  },
                  {
                    type: "image_block",
                    id: "8e08aebe-9e70-4a19-92cc-349a1bfd81ad",
                    data: {
                      src: "https://devtwit8.ru/img/3.png",
                      caption: "image caption 2"
                    }
                  },
                  {
                    type: "image_block",
                    id: "8e08aebe-9e70-4a19-92cc-349a1bfd81ad",
                    data: {
                      src: "https://devtwit8.ru/img/3.png",
                      caption: "image caption 3"
                    }
                  },
                  {
                    type: "subscribe_form_block",
                    id: "fe5aa6db-0ceb-40d2-b56d-3f180960d25e",
                    data: ""
                  },
              
                  {
                    type: "article_list_block",
                    id: "40250d0b-7b08-405b-96f5-478e3b3f3020",
                    data: {
                      title: "Похожие статьи",
                      articles: [
                        {
                          title: "Suspendisse sagittis cursus lectus, at efficitur magna feugiat in.",
                          link: "/article-1",
                          image: "https://devtwit8.ru/img/p4.png"
                        }
                      ]
                    }
                  },
                  {
                    type: "cta_form_block",
                    id: "7e366c8a-95af-45be-b25e-c0aaa379d1f2",
                    data: ""
                  }
                ]
            })
            const awesome_article_3 = new Article({
                id: 3,
                page_type: "article",
                meta: {
                  title: "Suspendisse finibus sapien in tellus rhoncus lobortis.",
                  description: "Phasellus ultrices, lorem a ullamcorper auctor, tellus sem condimentum elit, vitae dignissim libero nibh sit amet justo. Nunc rhoncus dolor elit, nec vestibulum ipsum facilisis in. Duis auctor nisi mi, a commodo massa posuere eu. Cras tempus cursus tellus, a cursus lacus pretium quis. Proin lobortis auctor dui. Etiam imperdiet lectus sed tristique dignissim. Praesent pulvinar ipsum a cursus semper. Integer cursus quam sit amet ante finibus, ac pharetra orci gravida. Aenean vulputate felis id tellus pretium, sed ullamcorper velit congue. Sed iaculis vel nibh quis laoreet. Curabitur in maximus dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec accumsan, magna posuere blandit auctor, purus velit convallis diam, vitae ultrices urna magna vel libero. Pellentesque sagittis eget mi quis bibendum. Nulla felis odio, faucibus sit amet posuere vitae, dictum ac dui.",
                  slug: "home"
                },
                body: [
                  {
                    type: "article_intro_block",
                    id: "250f1d42-3639-47d2-afde-3d0f2f4e081b",
                    data: {
                      title: "Suspendisse finibus sapien in tellus rhoncus lobortis.",
                      image: "https://devtwit8.ru/img/p3.png",
                      reading_time: 5,
                      views_count: 32160,
                      short_description: "Ut sagittis sapien sed orci congue, sed rhoncus felis gravida. Nulla eget metus auctor quam elementum dapibus ac in odio. Suspendisse tincidunt mollis ante in euismod. Aenean imperdiet imperdiet dui sit amet tristique. Suspendisse sed enim a nibh mollis vestibulum quis sed elit. Phasellus vestibulum urna leo, viverra dapibus dui sollicitudin in. Cras eleifend porta odio vitae elementum. Morbi faucibus orci nec sem pellentesque, et maximus libero semper. Etiam semper nisi quis facilisis venenatis. Phasellus pharetra faucibus diam. Suspendisse ut felis mollis, volutpat tortor ac, cursus turpis."
                    }
                  },
                  {
                    type: "text_block",
                    id: "10b951d3-d595-4776-b85f-7e6ba5d8818e",
                    data: "<p>Mauris cursus, risus a ullamcorper commodo, mauris nunc hendrerit diam, nec tincidunt neque metus sed elit. <ul><li>Aenean luctus et magna ac rutrum</li> <li>Sed vitae lectus fermentum, tristique lectus sit amet, pharetra lorem</li><li>Proin a justo rhoncus, aliquam mi non, auctor lacus. Vestibulum sit amet imperdiet mi, quis iaculis ante</li></ul></p><p>Integer aliquet, sapien id mollis pellentesque, metus lectus sagittis dui, id tempus quam leo at lorem. Curabitur et tempor ligula. Curabitur sapien sapien, blandit at hendrerit id, pretium quis metus. Proin faucibus dui eu nisl interdum luctus. Ut rutrum, est eget elementum consectetur, ligula eros tincidunt massa, sed tempus odio dui ac lectus. Nam efficitur tellus vitae tortor euismod, id finibus tortor hendrerit. Phasellus ac justo velit. Quisque vehicula molestie purus, non faucibus mi. Nullam malesuada erat ut enim volutpat ultricies. Nulla dictum vel massa eget sodales.</p>"
                  },
                  {
                    type: "slider_block",
                    id: "16d87a28-c4ef-4efa-b065-5aad2b146e79",
                    data: ["https://devtwit8.ru/img/1.png", "https://devtwit8.ru/img/2.png"]
                  },
                  {
                    type: "slider_block",
                    id: "16d87a28-c4ef-4efa-b065-5aad2b146e79",
                    data: ["https://devtwit8.ru/img/3.png", "https://devtwit8.ru/img/4.png"]
                  },
                  {
                    type: "subscribe_form_block",
                    id: "fe5aa6db-0ceb-40d2-b56d-3f180960d25e",
                    data: ""
                  },
                  {
                    type: "text_block",
                    id: "1d070b6c-8848-4b76-8197-b581b3098f17",
                    data: "<p>Curabitur quis risus leo. Suspendisse vulputate enim arcu, eu hendrerit lectus tristique quis. Integer et dictum neque. Nam bibendum mauris et lorem lacinia egestas. Curabitur pellentesque, quam ut consequat suscipit, magna quam lobortis tortor, eu mollis elit metus sed lectus. Curabitur finibus placerat sapien. Phasellus eget dui sit amet eros fermentum tincidunt pretium sed ante. In urna erat, tempus in neque eu, placerat tempor felis.</p><p>Nunc eu orci elit. Integer sed elementum leo, ut euismod nisl. Morbi sed arcu sit amet velit dictum suscipit non et sem. Nam dolor ligula, bibendum et sapien sed, tincidunt egestas dui. Phasellus ullamcorper vitae neque quis pretium.</p>"
                  },
                  {
                    "type": "article_list_block",
                    "id": "40250d0b-7b08-405b-96f5-478e3b3f3020",
                    "data": {
                      "title": "Похожие статьи",
                      "articles": [
                        {
                          "title": "Suspendisse sagittis cursus lectus, at efficitur magna feugiat in.",
                          "link": "/article-1",
                          "image": "https://devtwit8.ru/img/p2.png"
                        },
                        {
                          "title": "Sed eu orci tincidunt, finibus sapien et, malesuada dolor.",
                          "link": "/article-2",
                          "image": "https://devtwit8.ru/img/p4.png"
                        },
                      ]
                    }
                  },
                  {
                    "type": "cta_form_block",
                    "id": "7e366c8a-95af-45be-b25e-c0aaa379d1f2",
                    "data": ""
                  }
                ]
            });
            const awesome_article_4 = new Article({
                id: 4,
                page_type: "article",
                meta: {
                  title: "Nunc vitae enim eget felis elementum volutpat.",
                  description: "Proin ut mi sit amet nisl faucibus rhoncus. Pellentesque vel nisi eu massa eleifend pretium id id leo. Aliquam condimentum volutpat dolor, interdum maximus est lacinia id. Proin hendrerit quis nulla congue accumsan. Donec lobortis magna lectus, iaculis dapibus arcu bibendum et. Nulla vitae luctus sem. Praesent sapien arcu, fringilla ac consequat vel, mollis eu orci. Vestibulum ac bibendum lorem. Etiam tempus elit id tellus varius elementum. Cras nunc est, commodo in diam non, faucibus egestas lectus. Mauris laoreet lobortis diam suscipit vestibulum.",
                  slug: "article-4"
                },
                body: [
                  {
                    type: "article_intro_block",
                    id: "250f1d42-3639-47d2-afde-3d0f2f4e081b",
                    data: {
                      title: "Nunc vitae enim eget felis elementum volutpat.",
                      image: "https://devtwit8.ru/img/p4.png",
                      reading_time: 2,
                      views_count: 360,
                      short_description: "Morbi aliquet, ex sed interdum commodo, augue ex tincidunt eros, sed mattis turpis mauris sit amet enim. Quisque facilisis risus nec nisi suscipit, et venenatis quam lobortis. Mauris ac dolor dapibus, fermentum eros id, molestie turpis. Praesent in velit ut urna vestibulum condimentum. Vestibulum fringilla blandit orci a dictum. Nulla quis vulputate arcu. Sed cursus eros ante, eget aliquam lectus finibus sit amet. Phasellus cursus, enim eget tempus aliquam, lorem est tempor eros, ac viverra ipsum ex ac lacus."
                    }
                  },
                  {
                    type: "text_block",
                    id: "10b951d3-d595-4776-b85f-7e6ba5d8818e",
                    data: "<p>Maecenas quis vehicula augue, quis ultrices erat. Donec non nisl at ligula auctor ultricies. In hac habitasse platea dictumst. Duis posuere urna quis nisi faucibus fermentum. Cras rhoncus sapien ligula, at hendrerit purus vehicula et. Vestibulum eleifend volutpat neque maximus ornare. Phasellus ac dui risus. Aliquam aliquam dapibus eros, sed congue nisi interdum ac. Aenean sit amet lacinia massa, quis fermentum orci. Praesent viverra quis magna vitae tempus. Etiam maximus odio efficitur, aliquam ipsum eget, egestas velit.</p>"
                  },
                  {
                    type: "image_block",
                    id: "8e08aebe-9e70-4a19-92cc-349a1bfd81ad",
                    data: {
                      src: "https://devtwit8.ru/img/4.png",
                      caption: "image caption"
                    }
                  },
                  {
                    type: "subscribe_form_block",
                    id: "fe5aa6db-0ceb-40d2-b56d-3f180960d25e",
                    data: ""
                  },
                  {
                    type: "text_block",
                    id: "1d070b6c-8848-4b76-8197-b581b3098f17",
                    data: "<h1>In arcu massa, rutrum vitae condimentum vel, vestibulum ut lectus.</h1><p>Aenean ac mollis mauris. Cras hendrerit nec leo a varius. Cras nec sagittis lacus. Aenean vitae ullamcorper nibh. Donec ornare pretium lectus, ac semper tortor iaculis id. Nam interdum nulla metus. Morbi tempus blandit tempus. Mauris vel ex scelerisque, tristique augue quis, pharetra erat. Vivamus non venenatis mauris. Donec quis egestas turpis. Etiam mattis faucibus finibus. Donec quam ante, fermentum ut turpis sit amet, rutrum dictum lectus. Vestibulum mollis, tortor sed suscipit pulvinar, ex nibh convallis turpis, at aliquam est neque ac ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras eget sagittis lectus.</p>"
                  },
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
                        }
                      ]
                    }
                  },
                  {
                    type: "cta_form_block",
                    id: "7e366c8a-95af-45be-b25e-c0aaa379d1f2",
                    data: ""
                  }
                ]
            });
            await awesome_article.save();
            await awesome_article_2.save();
            await awesome_article_3.save();
            await awesome_article_4.save();
        }
}

module.exports = {
    seedArticles
}