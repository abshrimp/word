const questions = [
    ["場所・建物", ["habit : 住む", [
                [1, [10167, 478], "exhibit", "～を展示する", []],
                ["<exhibit> Picasso's works", "展示する", "てんじする"]
            ],
            [
                [2, [10418], "habit", "習慣", []],
                ["be in the <habit> of reading in bed", "習慣", "しゅうかん"]
            ],
            [
                [
                    3, [11092, 1400], "habitat", "生息地", [
                        [11015, "inhabitant", "住民"]
                    ]
                ],
                ["the natural <habitat> of bears", "生息地", "せいそくち"]
            ],
            [
                [4, [11753], "inhibit", "阻害する", []],
                ["<inhibit> the growth of bacteria", "阻害する", "そがいする"]
            ],
            [
                [5, [10643, 151], "prohibit", "〈法・団体が〉～を禁じる", []],
                ["<prohibit> children from working", "禁じる", "きんじる"]
            ]
        ],
        ["loc : 場所", [
                [6, [11710], "allocate", "配分する", []],
                ["<allocate> resources", "配分する", "はいぶんする"]
            ],
            [
                [
                    7, [10012, 155], "allow", "～を許可する", [
                        [11474, "allowance", "こづかい"]
                    ]
                ],
                ["<allow> him to go out", "許可する", "きょかする"]
            ],
            [
                [8, [337], "local", "地域の, 地元の； 地元の人", []],
                [
                    "Sometimes conflicts arise between tourists and <local> residents.",
                    "地元の", "じもとの"
                ]
            ],
            [
                [9, [10148, 364], "locate", "位置する", []],
                ["The office is <located> in the area.", "ある", "ある"]
            ]
        ],
        ["pile : 柱", [
                [10, [11745, 1120], "compile", "まとめる", []],
                ["<compile> a list of customers", "まとめる", "まとめる"]
            ],
            [
                [11, [10729, 1329], "pile", "積み重ね", []],
                ["put the plates in a <pile>", "積み重ね", "つみかさね"]
            ],
            [
                [12, [11615], "pill", "薬", []],
                ["take sleeping <pills>", "薬", "くすり"]
            ]
        ],
        ["place, plain : 平らな場所、計画", [
                [13, [11233], "displace", "とってかわる、故郷から追い出す", []],
                ["people <displaced> by war", "国を追われた", "くにをおわれた"]
            ],
            [
                [14, [10332], "explain", "～を説明する", []],
                ["<explain> why he was late", "説明する", "せつめいする"]
            ],
            [
                [15, [12162], "flat", "平らな、アパート", []],
                ["a <flat> surface", "平らな", "たいらな"],
                ["live in a <flat> in London", "アパート", "あぱあと"]
            ],
            [
                [16, [10836], "plain", "明白な、わかりやすい", []],
                ["be written in <plain> English", "平易な", "へいいな"]
            ],
            [
                [17, [10077, 371], "replace", "～に取って代わる、～を取り替える", []],
                ["<replace> the old system", "取って代わる", "とってかわる"]
            ]
        ],
        ["site : 場所", [
                [18, [10455, 372], "site", "用地", []],
                ["a <site> for a new hotel", "用地", "ようち"]
            ],
            [
                [19, [1027], "situation", "(物・人が置かれている)状況", []],
                [
                    "John liked Cindy, but she fell in love with John's best friend, which made the <situation> complicated.",
                    "状況", "じょうきょう"
                ]
            ]
        ],
        ["court : 囲まれた場所", [
                [20, [12160, 794], "court", "裁判", []],
                ["The case went to <court>.", "裁判", "さいばん"]
            ],
            [
                [21, [11499, 795], "courtesy", "礼儀", []],
                ["be treated with <courtesy>", "礼儀", "れいぎ"]
            ]
        ],
        ["ary, er : 場所", [
                [22, [10940, 1788], "barrier", "壁", []],
                ["the language <barrier>", "壁", "かべ"]
            ],
            [
                [23, [11842], "dairy", "乳製品、酪農", []],
                ["<dairy> products", "乳製品", "にゅうせいひん"]
            ],
            [
                [24, [10694], "endanger", "～を危険にさらす", []],
                ["an <endangered> species", "絶滅危惧", "ぜつめつきぐ"]
            ],
            [
                [25, [10783, 352], "frontier", "国境", []],
                ["America's last <frontier>", "辺境", "へんきょう"]
            ],
            [
                [26, [11071, 1419], "grocery", "食料品", []],
                ["go to the <grocery> store", "食料品", "しょくりょうひん"]
            ],
            [
                [27, [10927, 587], "laboratory", "研究所", []],
                ["a space science <laboratory>", "研究所", "けんきゅうじょ"]
            ],
            [
                [28, [11596, 1813], "laundry", "洗濯", []],
                ["do the <laundry>", "洗濯", "せんたく"]
            ],
            [
                [29, [1254], "litter", "散らかす、ゴミ", []],
                ["Tons of plastic bags end up as <litter> every day.", "ゴミ",
                    "ごみ"
                ]
            ],
            [
                [30, [10486, 574], "vocabulary", "語彙", []],
                ["a <vocabulary> of 5,000 words", "語彙", "ごい"]
            ]
        ],
        ["polit : 都市", [
                [
                    31, [11653], "metropolitan", "大都市の", [
                        [1952, "metropolis", "大都市"]
                    ]
                ],
                ["<metropolitan> areas", "大都市", "だいとし"]
            ],
            [
                [32, [10440, 1063], "policy", "政策", []],
                ["Japan's foreign <policy>", "政策", "せいさく"]
            ],
            [
                [
                    33, [10533], "political", "政治的な", [
                        [1042, "politics", "政治、政治学"]
                    ]
                ],
                ["a <political> leader", "政治的な", "せいじてきな"]
            ]
        ],
        ["urb : 都市", [
                [34, [11021, 341], "suburb", "郊外", []],
                ["live in the <suburbs> of London", "郊外", "こうがい"]
            ],
            [
                [35, [10568, 339], "urban", "都会の", []],
                ["<urban> life", "都会の", "とかいの"]
            ]
        ]
    ],
    ["人・成長", ["auto : 自ら", [
                [36, [1899], "automatic", "自動の", []],
                ["an <automatic> washing machine", "自動の", "じどうの"]
            ],
            [
                [37, [1894], "automobile", "自動車", []],
                ["purchased a new <automobile> for commuting", "自動車", "じどうしゃ"]
            ],
            [
                [
                    38, [11870, 2138], "autonomy", "自主性", [
                        [11690, "autonomous", "自動運転"]
                    ]
                ],
                ["patient <autonomy>", "自主性", "じしゅせい"]
            ]
        ],
        ["civil : 市民", [
                [39, [10451], "citizen", "市民", []],
                ["the average American <citizen>", "市民", "しみん"]
            ],
            [
                [40, [10308, 1942], "civil", "一般市民の", []],
                ["<civil> rights", "市民", "しみん"]
            ],
            [
                [41, [10948, 1941], "civilization", "文明", []],
                ["Western <civilization>", "文明", "ぶんめい"]
            ]
        ],
        ["democ : 民衆", [
                [42, [10710, 1049], "democracy", "民主主義、民主国家", []],
                ["a modern <democracy>", "民主国家", "みんしゅこくか"]
            ],
            [
                [43, [12013], "demographic", "人口統計の", []],
                ["<demographic> changes", "人口統計の", "じんこうとうけいの"]
            ]
        ],
        ["ethnic : 民族", [
                [44, [10788], "ethic", "倫理（学）", [
                    [777, "ethics", "倫理"]
                ]],
                ["a question of medical <ethics>", "倫理", "りんり"]
            ],
            [
                [45, [10821, 1226], "ethnic", "民族的な、民族の", []],
                ["different <ethnic> groups", "民族", "みんぞく"]
            ]
        ],
        ["host : 見知らぬ人", [
                [46, [11822, 958], "hospitality", "もてなし", []],
                ["receive warm <hospitality>", "もてなし", "もてなし"]
            ],
            [
                [47, [1962], "hostage", "捕虜", []],
                ["The <hostages> were released.", "人質", "ひとじち"]
            ],
            [
                [48, [11618, 957], "hostile", "反感を持つ", []],
                ["be <hostile> to the government", "反感を持つ", "はんかんをもつ"]
            ]
        ],
        ["hum : 人間(human)", [
                [49, [2142], "humane", "思いやりのある、人道的な", []],
                [
                    "The purpose of our group is to promote <humane> treatment of animals raised for food.",
                    "思いやりのある", "おもいやりのある"
                ]
            ],
            [
                [50, [12076], "humanity", "人類、人文科学", []],
                ["the future of <humanity>", "人類", "じんるい"],
                ["science and the <humanities>", "人文科学", "じんぶんかがく"]
            ],
            [
                [51, [11323, 1760], "humble", "謙虚な、粗末な", []],
                ["a <humble> attitude", "謙虚な", "けんきょな"]
            ],
            [
                [52, [11673, 1269], "humid", "蒸し暑い", []],
                ["<humid> summer weather", "蒸し暑い", "むしあつい"]
            ],
            [
                [53, [11779, 972], "humiliate", "恥をかかせる", []],
                ["<humiliate> him in front of others", "恥をかかせる", "はじをかかせる"]
            ],
            [
                [54, [1816], "humor", "ユーモア； 機嫌", []],
                ["He is in a bad <humor>.", "機嫌", "きげん"]
            ]
        ],
        ["idea : 姿", [
                [55, [11876, 1054], "ideology", "イデオロギー", []],
                ["a political <ideology>", "イデオロギー", "いでおろぎい"]
            ],
            [
                [56, [10546, 199], "ideal", "理想的な", []],
                ["an <ideal> place to live", "理想的な", "りそうてきな"]
            ]
        ],
        ["mas : 男性", [
                [57, [10274, 945], "male", "男の", []],
                ["<male> workers", "男性の", "だんせいの"]
            ],
            [
                [58, [947], "masculine", "男の、男らしい", []],
                ["a <masculine> occupation", "男らしい", "おとこらしい"]
            ]
        ],
        ["mater : 母(mother)", [
                [59, [1818], "amateur", "アマチュア、素人", []],
                ["an <amateur> photographer", "アマチュア", "あまちゅあ"]
            ],
            [
                [60, [10189, 1656], "material", "物質", []],
                ["produce new <materials>", "物質", "ぶっしつ"]
            ],
            [
                [61, [914], "maternity", "母性", []],
                ["take <maternity> leave", "出産の", "しゅっさんの"]
            ],
            [
                [62, [12068, 9], "matter", "重要な、物質、異常", []],
                ["It doesn't <matter>  what he says.", "重要で", "じゅうようで"],
                ["soft <matter>", "物質", "ぶっしつ"],
                ["Something is the <matter> with my car.", "異常", "いじょう"]
            ],
            [
                [
                    63, [11653], "metropolitan", "大都市の", [
                        [1952, "metropolis", "大都市"]
                    ]
                ],
                ["<metropolitan> areas", "大都市", "だいとし"]
            ]
        ],
        ["medi : 癒す", [
                [64, [10536], "medical", "医学の", [
                    [1139, "medicine", "薬； 医学"]
                ]],
                ["a <medical> study", "医学の", "いがくの"]
            ],
            [
                [
                    65, [11893], "meditation", "瞑想", [
                        [901, "meditate", "瞑想する、深く考える"]
                    ]
                ],
                ["Buddhist <meditation>", "瞑想", "めいそう"]
            ],
            [
                [66, [11479, 1162], "remedy", "治療法", []],
                ["a good <remedy> for colds", "治療法", "ちりょうほう"]
            ]
        ],
        ["nur : 養う", [
                [67, [11403, 1387], "nourish", "養う", []],
                ["<nourish> children's abilities", "養う", "やしなう"]
            ],
            [
                [68, [11090], "nursing", "看護", []],
                ["24-hour <nursing>", "看護", "かんご"]
            ],
            [
                [69, [11409, 1388], "nurture", "育てる", []],
                ["<nurture> new technology", "育てる", "そだてる"]
            ],
            [
                [70, [11100, 1386], "nutrition", "栄養", []],
                ["enough sleep and <nutrition>", "栄養", "えいよう"]
            ]
        ],
        ["popul, publ : 人(people)", [
                [71, [10401], "population", "人口", []],
                ["<population> growth", "人口", "じんこう"]
            ],
            [
                [72, [11295], "publicity", "宣伝、広告", []],
                ["newspaper <publicity>", "広告", "こうこく"]
            ],
            [
                [73, [10379, 1118], "publish", "～を出版する", []],
                ["<publish> a book", "出版する", "しゅっぱんする"]
            ],
            [
                [74, [11508, 1050], "republic", "共和国", []],
                ["the <Republic> of Ireland", "共和国", "きょうわこく"]
            ]
        ],
        ["self : 自分自身", [
                [75, [943], "self", "自己", [
                    [11167, "selfish", "利己的な"]
                ]],
                ["Children build up their concept of <self> through play.",
                    "自己", "じこ"
                ]
            ],
            [
                [
                    76, [11485], "self-esteem", "自尊心", [
                        [989, "esteem", "尊敬する、尊重する"]
                    ]
                ],
                ["people with low <self-esteem>", "自尊心", "じそんしん"]
            ]
        ],
        ["senior : 老いた", [
                [77, [11811, 1069], "ambassador", "大使", []],
                ["the French <ambassador> to Japan", "大使", "たいし"]
            ],
            [
                [78, [11888], "senator", "上院議員", [
                    [1073, "Senate", "上院"]
                ]],
                ["a United States <Senator>", "上院議員", "じょういんぎいん"]
            ],
            [
                [79, [10310], "senior", "上級の、先輩の", []],
                ["a <senior> member of the club", "先輩の", "せんぱいの"]
            ]
        ],
        ["soci : 社会", [
                [
                    80, [10100, 496], "associate", "AをBに関連づける、AからBを連想する", []
                ],
                ["Health is <associated> with happiness.", "関連している", "かんれんしている"]
            ],
            [
                [81, [1056], "socialism", "社会主義", []],
                ["Some countries practice <socialism>.", "社会主義", "しゃかいしゅぎ"]
            ],
            [
                [82, [10177, 952], "society", "社会、協会、団体", []],
                ["the problems of modern <society>", "社会", "しゃかい"]
            ]
        ],
        ["adol : 育つ、破壊する", [
                [83, [11416, 1079], "abolish", "廃止する", []],
                ["<abolish> slavery", "廃止する", "はいしする"]
            ],
            [
                [84, [11177, 908], "adolescent", "思春期の", []],
                ["<adolescent> boys and girls", "思春期の", "ししゅんきの"]
            ],
            [
                [85, [910], "adult", "大人； 大人の", []],
                ["grow up to be an <adult>", "大人", "おとな"]
            ]
        ],
        ["young : 若い", [
                [86, [11075], "youngster", "子供", []],
                ["today's <youngsters>", "子供", "こども"]
            ],
            [
                [87, [10480], "youth", "若者", []],
                ["modern <youth>", "若者", "わかもの"]
            ]
        ],
        ["fe : 女性", [
                [88, [946], "female", "女性の； 女性", []],
                ["the <female> brain", "女性の", "じょせいの"]
            ],
            [
                [89, [11669, 948], "feminine", "女性の", []],
                ["<feminine> beauty", "女性の", "じょせいの"]
            ]
        ],
        ["al : 別", [
                [90, [10826, 1838], "alien", "外国の、異質な", []],
                ["an <alien> species", "外来", "がいらい"]
            ],
            [
                [91, [1175], "allergy", "アレルギー", []],
                ["She has an <allergy> to peanuts.", "アレルギー", "あれるぎい"]
            ],
            [
                [92, [10854, 1014], "alter", "～を変える", []],
                ["<alter> the pattern of behavior", "変える", "かえる"]
            ],
            [
                [93, [10245, 1015], "alternative", "代わりのもの", []],
                ["an <alternative> to oil", "代わりになるもの", "かわりになるもの"]
            ],
            [
                [94, [10755, 1738], "parallel", "類似（物）、匹敵するもの", []],
                ["have no <parallel> in history", "匹敵するもの", "ひってきするもの"]
            ]
        ],
        ["fu : 養う", [
                [95, [10075, 1104], "feed", "～にエサをやる", []],
                ["<feed> a large family", "養う", "やしなう"]
            ],
            [
                [96, [10695, 1389], "foster", "～を促進する、育成する", []],
                ["<foster> creativity", "養う", "やしなう"]
            ]
        ]
    ],
    ["身体", ["blood : 血", [
                [97, [1662], "bleed", "出血する", []],
                [
                    '"What happened? Your hand is <bleeding>." "Don\'t worry. It\'s only a scratch."',
                    "出血している", "しゅっけつしている"
                ]
            ],
            [
                [
                    98, [11310], "blessing", "ありがたいもの、恵み", [
                        [1218, "bless", "祝福する"]
                    ]
                ],
                ["the <blessings> of nature", "恵み", "めぐみ"]
            ]
        ],
        ["cap, chief : 頭", [
                [99, [10351, 242], "achieve", "～を達成する", []],
                ["finally <achieve> the goal", "達成する", "たっせいする"]
            ],
            [
                [100, [2203], "achievement", "実績", []],
                ["have one's <achievement>", "実績", "じっせき"]
            ],
            [
                [101, [12164, 310], "capital", "首都、資本", []],
                ["the <capital> of Australia", "首都", "しゅと"],
                ["labor and <capital>", "資本", "しほん"]
            ],
            [
                [102, [11109, 1106], "cattle", "牛", []],
                ["raise sheep and <cattle>", "牛", "うし"]
            ],
            [
                [103, [11594], "chapter", "章", []],
                ["the first <chapter> of The Tale of Genji", "章", "しょう"]
            ],
            [
                [104, [11900, 2176], "mischief", "いたずら", []],
                ["childhood <mischief>", "いたずら", "いたずら"]
            ]
        ],
        ["eye : 目", [
                [105, [1690], "eyebrow", "眉毛", []],
                ["raised an <eyebrow> in surprise", "眉毛", "まゆげ"]
            ],
            [
                [106, [1692], "eyelash", "まつげ", []],
                ["false <eyelashes> for a night out", "まつげ", "まつげ"]
            ],
            [
                [107, [1691], "eyelid", "まぶた", []],
                ["heavy <eyelids> after a long day", "まぶた", "まぶた"]
            ]
        ],
        ["hand : 手", [
                [108, [10372], "handle", "～に対処する", []],
                ["how to <handle> problems", "対処する", "たいしょする"]
            ],
            [
                [109, [12008], "secondhand", "間接", []],
                ["<secondhand> smoke", "間接", "かんせつ"]
            ]
        ],
        ["head : 頭", [
                [110, [1689], "forehead", "ひたい", []],
                ["<forehead> wrinkles from stress", "ひたい", "ひたい"]
            ],
            [
                [111, [12088], "head", "向かう、率いられた", []],
                ["<head> straight for Paris", "向かう", "むかう"],
                ["a team <headed> by a woman", "率いられた", "ひきいられた"]
            ],
            [
                [112, [11475, 1115], "headline", "大見出し", []],
                ["a newspaper <headline>", "大見出し", "おおみだし"]
            ],
            [
                [113, [11504], "headquarters", "本部、本社", []],
                ["police <headquarters>", "本部", "ほんぶ"]
            ]
        ],
        ["man : 手", [
                [
                    114, [12133, 1932], "command", "あやつる能力、を見わたせる、集める", []
                ],
                ["have a good <command> of English", "あやつる能力", "あやつるのうりょく"],
                ["The hill <commands> a fine view.", "見わたせる", "みわたせる"],
                ["<command> great respect", "集める", "あつめる"]
            ],
            [
                [115, [10024, 638], "demand", "～を要求する", []],
                ["<demand> more freedom", "要求する", "ようきゅうする"]
            ],
            [
                [116, [12127, 608], "maintain", "維持する、主張する", []],
                ["<maintain> health", "維持する", "いじする"],
                ["<maintain> that he is innocent", "主張する", "しゅちょうする"]
            ],
            [
                [117, [12117, 1136], "manage", "なんとか、経営する", []],
                ["<manage> to catch the train", "なんとか", "なんとか"],
                ["<manage> a big company", "経営する", "けいえいする"]
            ],
            [
                [118, [12022, 2131], "mandatory", "義務的な", []],
                ["<mandatory> standards for safety", "義務的な", "ぎむてきな"]
            ],
            [
                [119, [11980, 2146], "manifest", "明らかな", []],
                ["a <manifest> mistake", "明らかな", "あきらかな"]
            ],
            [
                [120, [11402, 2064], "manipulate", "操作する", []],
                ["<manipulate> a computer", "操作する", "そうさする"]
            ],
            [
                [121, [12123, 1909], "manner", "方法、態度、行儀", []],
                ["in a scientific <manner>", "方法", "ほうほう"],
                ["her friendly <manner>", "態度", "たいど"],
                ["It's bad <manners> to spit.", "行儀", "ぎょうぎ"]
            ],
            [
                [122, [11153, 1898], "manual", "手を使う", []],
                ["<manual> work", "手を使う", "てをつかう"]
            ],
            [
                [123, [10149, 1122], "manufacture", "～を製造する", []],
                ["a car <manufacturing> company", "製造する", "せいぞうする"]
            ],
            [
                [124, [549], "manuscript", "原稿", []],
                ["The <manuscript> is in its final stages.", "原稿", "げんこう"]
            ],
            [
                [125, [10365], "recommend", "～を勧める", []],
                ["<recommend> this book to you", "勧める", "すすめる"]
            ]
        ],
        ["neur : 神経", [
                [126, [10293], "nervous", "神経質な、不安な", [
                    [747, "nerve", "神経"]
                ]],
                ["feel <nervous> about the future", "不安に", "ふあんに"]
            ],
            [
                [127, [11923], "neuron", "神経細胞", []],
                ["connections between <neurons>", "ニューロン", "にゅうろん"]
            ]
        ],
        ["organ : 器官", [
                [
                    128, [11051, 1178], "organism", "生物", [
                        [10764, "organ", "臓器、器官"]
                    ]
                ],
                ["marine <organisms>", "生物", "せいぶつ"]
            ],
            [
                [
                    129, [10439], "organization", "組織", [
                        [82, "organize", "～を組織する"]
                    ]
                ],
                ["an international <organization>", "組織", "そしき"]
            ]
        ],
        ["pede, pass : 足", [
                [130, [10196], "passage", "一節、経過、通行", []],
                ["Read the following <passage>", "一節", "いっせつ"]
            ],
            [
                [131, [10456], "passenger", "乗客", []],
                ["train <passengers>", "乗客", "じょうきゃく"]
            ],
            [
                [
                    132, [11516, 1896], "pedestrian", "歩行者", [
                        [11472, "expedition", "探検"]
                    ]
                ],
                ["the safety of <pedestrians>", "歩行者", "ほこうしゃ"]
            ],
            [
                [133, [11361, 716], "surpass", "まさる", []],
                ["<surpass> the US in technology", "まさる", "まさる"]
            ]
        ],
        ["crue : 血の", [
                [134, [11332, 1778], "crude", "粗末な、粗野な", []],
                ["<crude> stone tools", "粗末な", "そまつな"]
            ],
            [
                [135, [11154, 490], "cruel", "残酷な", []],
                ["<cruel> treatment of animals", "残酷な", "ざんこくな"]
            ]
        ]
    ],
    ["生命・自然", ["bio : 生命", [
                [136, [11037], "antibiotic", "抗生物質", []],
                ["resistance to <antibiotics>", "抗生物質", "こうせいぶっしつ"]
            ],
            [
                [137, [11578], "biography", "伝記", []],
                ["a <biography> of Einstein", "伝記", "でんき"]
            ],
            [
                [138, [10581], "biological", "生物", [
                    [531, "biology", "生物学"]
                ]],
                ["<biological> weapons", "生物", "せいぶつ"]
            ],
            [
                [139, [11486], "microbe", "微生物", []],
                ["<microbes> in the soil", "微生物", "びせいぶつ"]
            ]
        ],
        ["gen : 生まれる", [
                [140, [2027], "benign", "良性の、害のない； 有益な", []],
                ["The tumor turned out to be <benign>.", "良性だ", "りょうせいだ"]
            ],
            [
                [141, [11096, 949], "gender", "性別", []],
                ["age and <gender>", "性別", "せいべつ"]
            ],
            [
                [142, [10517, 1176], "gene", "遺伝子", []],
                ["the <gene> for eye color", "遺伝子", "いでんし"]
            ],
            [
                [143, [10527, 33], "general", "一般", []],
                ["the <general> public", "一般", "いっぱん"]
            ],
            [
                [
                    144, [10394, 385], "generate", "～を生み出す", [
                        [10426, "generation", "世代"]
                    ]
                ],
                ["<generate> electricity", "生み出す", "うみだす"]
            ],
            [
                [145, [11116, 158], "generous", "気前のよい", []],
                ["a <generous> offer", "気前のよい", "きまえのよい"]
            ],
            [
                [146, [10971], "genius", "天才", []],
                ["a musical <genius>", "天才", "てんさい"]
            ],
            [
                [147, [378], "genre", "（芸術・文学の）ジャンル、酒類", []],
                ["a new <genre> of literature", "ジャンル", "じゃんる"]
            ],
            [
                [148, [10812, 1722], "genuine", "本物の、真の、心からの", []],
                ["a <genuine> interest in science", "真の", "しんの"]
            ],
            [
                [149, [11602, 1168], "germ", "細菌", []],
                ["<germs> and viruses", "細菌", "さいきん"]
            ],
            [
                [150, [1186], "hydrogen", "水素", []],
                ["<Hydrogen> is the most abundant element.", "水素", "すいそ"]
            ],
            [
                [151, [12009, 2120], "indigenous", "先住", []],
                ["<indigenous> peoples of Australia", "先住", "せんじゅう"]
            ],
            [
                [152, [11996, 2068], "ingenious", "独創的な", []],
                ["an <ingenious> design", "独創的な", "どくそうてきな"]
            ],
            [
                [153, [2069], "ingenuous", "純真な、無邪気な", []],
                ["an <ingenuous> smile [answer]", "無邪気な", "むじゃきな"]
            ],
            [
                [154, [10987, 1187], "oxygen", "酸素", []],
                ["<oxygen> in the air", "酸素", "さんそ"]
            ],
            [
                [155, [11334, 913], "pregnant", "妊娠している", []],
                ["his <pregnant> wife", "妊娠している", "にんしんしている"]
            ]
        ],
        ["life : 生命", [
                [156, [12083, 1923], "life", "生物", []],
                ["There is no <life> on the moon.", "生物", "せいぶつ"]
            ],
            [
                [157, [11164], "lively", "生き生きとした", []],
                ["a <lively> conversation", "生き生きとした", "いきいきとした"]
            ],
            [
                [158, [1824], "liver", "肝臓", []],
                ["a piece of <liver>", "肝臓", "かんぞう"]
            ],
            [
                [159, [11055], "wildlife", "野生生物", []],
                ["protect <wildlife>", "野生生物", "やせいせいぶつ"]
            ]
        ],
        ["mur, ner : 死", [
                [160, [11913, 927], "funeral", "葬式", []],
                ["wedding and <funerals>", "葬式", "そうしき"]
            ],
            [
                [
                    161, [11606], "mortality", "死亡", [
                        [932, "mortal", "死ぬ運命にある"]
                    ]
                ],
                ["America's infant <mortality> rate", "死亡", "しぼう"]
            ],
            [
                [162, [10955, 782], "murder", "殺人", []],
                ["mass <murder>", "殺人", "さつじん"]
            ],
            [
                [163, [11543], "nightmare", "悪夢", []],
                ["have a <nightmare>", "悪夢", "あくむ"]
            ]
        ],
        ["nat : 生まれる", [
                [164, [11688, 2128], "innate", "先天的な", []],
                ["<innate> ability to learn", "先天的な", "せんてんてきな"]
            ],
            [
                [165, [11949, 1837], "naive", "世間知らずの", []],
                ["<naive> young people", "世間知らずの", "せけんしらずの"]
            ],
            [
                [166, [10398], "nation", "国", [
                    [1057, "nationalism", "国家主義"]
                ]],
                ["the Asian <nations>", "国", "くに"]
            ],
            [
                [167, [1227], "nationality", "国籍", []],
                [
                    "People of many different <nationalities> have immigrated to the United States.",
                    "国籍", "こくせき"
                ]
            ],
            [
                [168, [10270, 1228], "native", "母国の", []],
                ["a <native> language", "母", "ぼ"]
            ],
            [
                [
                    169, [12147, 1242], "nature", "本質", [
                        [12086, "natural", "うまれながらの"]
                    ]
                ],
                ["the <nature> of language", "本質", "ほんしつ"]
            ]
        ],
        ["ori : 生まれる", [
                [170, [916], "abortion", "妊娠中絶", []],
                ["The issue of <abortion> is controversial.", "妊娠中絶",
                    "にんしんちゅうぜつ"
                ]
            ],
            [
                [171, [11620], "orient", "志向の", []],
                ["an information-<oriented> society", "志向の", "しこうの"]
            ],
            [
                [172, [10461, 275], "origin", "起源", []],
                ["the <origin> of language", "起源", "きげん"]
            ]
        ],
        ["physic : 自然", [
                [
                    173, [10264, 1144], "physical", "身体の、肉体の", [
                        [10996, "physician", "医者"]
                    ]
                ],
                ["<physical> beauty", "肉体", "にくたい"]
            ],
            [
                [174, [11683], "physiological", "生理的な", []],
                ["<physiological> reactions", "生理的な", "せいりてきな"]
            ]
        ],
        ["plant : 植物", [
                [175, [11919], "plantation", "農園", []],
                ["workers on banana <plantations>", "農園", "のうえん"]
            ],
            [
                [176, [11106, 665], "transplant", "移植", []],
                ["a heart <transplant> operation", "移植", "いしょく"]
            ]
        ],
        ["spir : 生きている", [
                [
                    177, [11885], "aspiration", "熱望", [
                        [1366, "aspire", "(～することを)熱望する(to do, for)"]
                    ]
                ],
                ["<aspirations> to be an artist", "熱望", "ねつぼう"]
            ],
            [
                [178, [11759], "expire", "期限が切れる", []],
                ["My license <expires> next month.", "期限が切れる", "きげんがきれる"]
            ],
            [
                [179, [10632, 1857], "inspire", "～を奮起させる、やる気にさせる", []],
                ["<inspire> him to write a poem", "気を起こさせる", "きをおこさせる"]
            ],
            [
                [180, [11967], "respiratory", "呼吸器に関する、呼吸の", []],
                ["acute <respiratory> disease", "呼吸器", "こきゅうき"]
            ],
            [
                [181, [10223, 1654], "spirit", "精神", []],
                ["the <spirit> of fair play", "精神", "せいしん"]
            ]
        ],
        ["unda : 波", [
                [182, [11166, 837], "abundant", "豊富な", []],
                ["an <abundant> supply of food", "豊富な", "ほうふな"]
            ],
            [
                [183, [10079, 361], "surround", "～を取り囲む", []],
                ["Japan is <surrounded> by the sea.", "囲まれている", "かこまれている"]
            ]
        ],
        ["vive, vege : 生きる", [
                [184, [11392, 3], "revive", "生き返らせる", []],
                ["<revive> the British economy", "生き返らせる", "いきかえらせる"]
            ],
            [
                [185, [10067, 409], "survive", "生き残る", []],
                ["<survive> in the jungle", "生き残る", "いきのこる"]
            ],
            [
                [186, [11924], "vegetation", "植生", []],
                ["destroy the <vegetation> in the area", "植生", "しょくせい"]
            ],
            [
                [187, [11651], "vigorous", "精力的な", [
                    [1668, "vigor", "活力"]
                ]],
                ["<vigorous> activity", "精力的な", "せいりょくてきな"]
            ],
            [
                [188, [10793, 1], "vital", "きわめて重要な、必要な、活気のある", []],
                ["be <vital> to human health", "きわめて重要だ", "きわめてじゅうようだ"]
            ],
            [
                [189, [1823], "vitamin", "ビタミン", []],
                ["taking a daily <vitamin> for health", "ビタミン", "びたみん"]
            ],
            [
                [190, [10837, 2], "vivid", "鮮やかな", []],
                ["have <vivid> memories", "鮮やかな", "あざやかな"]
            ]
        ],
        ["radi : 根", [
                [191, [11463, 1191], "radiation", "放射線", []],
                ["dangerous <radiation>", "放射線", "ほうしゃせん"]
            ],
            [
                [192, [11185, 1046], "radical", "根本的な", []],
                ["<radical> changes", "根本的な", "こんぽんてきな"]
            ],
            [
                [193, [10984, 1326], "ray", "光線", []],
                ["the sun's <rays>", "光線", "こうせん"]
            ]
        ],
        ["gri : 田畑", [
                [194, [10516, 1088], "agriculture", "農業", []],
                ["land suitable for <agriculture>", "農業", "のうぎょう"]
            ],
            [
                [195, [1207], "pilgrim", "巡礼者", []],
                ["The <pilgrims> traveled to Mecca.", "巡礼者", "じゅんれいしゃ"]
            ]
        ],
        ["anim : 命(animal)", [
                [196, [1832], "animate", "～を活気づける、に生命を与える", []],
                ["<animated> movie with colorful characters", "活気づけられた",
                    "かっきづけられた"
                ]
            ],
            [
                [197, [2087], "unanimous", "満場一致の", []],
                ["They finally reached a <unanimous> agreement on the agenda.",
                    "満場一致の", "まんじょういっちの"
                ]
            ]
        ],
        ["wild : 野生の", [
                [198, [2076], "bewilder", "～を当惑させる", []],
                [
                    "The student was <bewildered> by the complexity of the problem.",
                    "当惑した", "とうわくした"
                ]
            ],
            [
                [199, [11505], "wilderness", "荒野", []],
                ["explore the vast <wilderness>", "荒野", "こうや"]
            ],
            [
                [200, [11055], "wildlife", "野生生物", []],
                ["protect <wildlife>", "野生生物", "やせいせいぶつ"]
            ]
        ]
    ],
    ["地球・地面", ["astro : 星", [
                [201, [2113], "asteroid", "小惑星の", []],
                ["obtain resources from <asteroids>", "小惑星", "しょうわくせい"]
            ],
            [
                [202, [602], "astrology", "占星術", []],
                ["Some people believe in <astrology>.", "占星術", "せんせいじゅつ"]
            ],
            [
                [203, [11074, 601], "astronomy", "天文学", []],
                ["Galileo's <astronomy>", "天文学", "てんもんがく"]
            ],
            [
                [204, [11101, 1273], "disaster", "災害", []],
                ["prepare for natural <disaster>", "災害", "さいがい"]
            ]
        ],
        ["base : 基礎", [
                [205, [10028, 66], "base", "AがBに基づいている", []],
                ["This story is <based> on fact.", "基づいている", "もとづいている"]
            ],
            [
                [206, [10759, 67], "basis", "基礎、根拠、方式、やり方", []],
                ["the scientific <basis> of his theory", "根拠", "こんきょ"]
            ],
            [
                [207, [11591, 1165], "diabetes", "糖尿病", []],
                ["a patient with type 2 <diabetes>", "糖尿病", "とうにょうびょう"]
            ]
        ],
        ["cult : 耕す、住む", [
                [208, [10516, 1088], "agriculture", "農業", []],
                ["land suitable for <agriculture>", "農業", "のうぎょう"]
            ],
            [
                [209, [10963, 1949], "colony", "植民地", []],
                ["a former British <colony>", "植民地", "しょくみんち"]
            ],
            [
                [
                    210, [10634, 1089], "cultivate", "〈植物〉を栽培する、〈感情・能力などを〉育む", []
                ],
                ["<cultivate> plants", "栽培する", "さいばいする"]
            ],
            [
                [211, [1090], "culture", "文化； 教養； 栽培", []],
                ["a man of <culture>", "教養", "きょうよう"],
                ["<culture> of cotton", "栽培", "さいばい"]
            ]
        ],
        ["fund : 土台", [
                [212, [10840], "fond", "Aが好きだ", []],
                ["She is very <fond> of reading", "大好きだ", "だいすきだ"]
            ],
            [
                [213, [10637, 63], "found", "～を創立する、設立する", []],
                ["<found> a computer company", "設立する", "せつりつする"]
            ],
            [
                [214, [64], "foundation", "基盤, 基礎, 土台", []],
                [
                    "Without a firm <foundation> in grammar, one can neither speak nor write.",
                    "基礎", "きそ"
                ]
            ],
            [
                [215, [10988, 62], "fund", "資金", []],
                ["lack of <funds>", "資金", "しきん"]
            ],
            [
                [216, [10290, 61], "fundamental", "基本的な", []],
                ["<fundamental> human rights", "基本的", "きほんてき"]
            ],
            [
                [217, [11147, 65], "profound", "深い", []],
                ["a <profound> meaning", "深い", "ふかい"]
            ]
        ],
        ["geo : 地球", [
                [218, [11062, 597], "geography", "地理", []],
                ["history and <geography>", "地理", "ちり"]
            ],
            [
                [
                    219, [11686], "geological", "地質学的な", [
                        [598, "geology", "地質学"]
                    ]
                ],
                ["divisions of <geological> time", "地質学的な", "ちしつがくてきな"]
            ],
            [
                [220, [599], "geometry", "幾何学", []],
                ["She excels in math and <geometry>.", "幾何学", "きかがく"]
            ]
        ],
        ["land : 土地", [
                [221, [11551], "landmark", "名所", []],
                ["visit some Paris <landmarks>", "名所", "めいしょ"]
            ],
            [
                [222, [10956, 1255], "landscape", "風景", []],
                ["<landscape> painting", "風景", "ふうけい"]
            ]
        ],
        ["mine : 発掘", [
                [223, [10779], "mine", "鉱山", [
                    [1850, "mineral", "鉱物"]
                ]],
                ["discover a gold <mine>", "鉱", "こう"]
            ],
            [
                [224, [11765, 2030], "undermine", "弱める", []],
                ["<undermine> the US position", "弱める", "よわめる"]
            ]
        ],
        ["sider : 星", [
                [
                    225, [10002, 899], "consider", "～を考慮する", [
                        [10560, "considerable", "かなりの"]
                    ]
                ],
                ["<consider> the problem seriously", "考える", "かんがえる"]
            ],
            [
                [
                    226, [10560], "considerable", "かなりの", [
                        [899, "consider", "考慮する； みなす"]
                    ]
                ],
                ["spend <considerable> time", "かなりの", "かなりの"]
            ],
            [
                [227, [10423, 637], "desire", "願望", []],
                ["a strong <desire> to be a singer", "願望", "がんぼう"]
            ]
        ],
        ["terr : 土地", [
                [228, [2174], "corridor", "廊下", []],
                [
                    "I walked down the <corridor> and entered the room at the far end.",
                    "廊下", "ろうか"
                ]
            ],
            [
                [229, [10733, 344], "territory", "領土、なわ張り", []],
                ["defend a <territory>", "なわ張り", "なわばり"]
            ]
        ],
        ["ground : 地面、すり潰す", [
                [230, [10239, 920], "background", "背景、生い立ち、経歴", []],
                ["people from different <backgrounds>", "経歴", "けいれき"]
            ],
            [
                [231, [1931], "grind", "～を（粉に）挽く、すりつぶす", []],
                ["<grind> coffee [corn]", "挽く", "ひく"]
            ],
            [
                [232, [12118, 68], "ground", "根拠", []],
                ["On what <grounds> do you say that?", "根拠", "こんきょ"]
            ]
        ]
    ],
    ["作る・整える", ["auth : 生み出す", [
                [233, [11959, 1723], "authentic", "本物の", []],
                ["<authentic> Italian food", "本物の", "ほんものの"]
            ],
            [
                [234, [10410, 686], "author", "筆者", []],
                ["the <author> of this passage", "筆者", "ひっしゃ"]
            ],
            [
                [235, [12200, 685], "authority", "当局、権力、権威", []],
                ["the school <authorities>", "当局", "とうきょく"],
                ["the <authority> of the state", "権力", "けんりょく"],
                ["an <authority> on biology", "権威", "けんい"]
            ]
        ],
        ["crea : 増える(create)", [
                [236, [10806, 868], "concrete", "具体的な", []],
                ["give a <concrete> example", "具体的な", "ぐたいてきな"]
            ],
            [
                [
                    237, [1124], "create", "～を創造する、生み出す", [
                        [10446, "creature", "動物"]
                    ]
                ],
                [
                    "The scientist <created> a terrible monster and kept it in his laboratory.",
                    "生み出し", "うみだし"
                ]
            ],
            [
                [238, [10931], "crew", "乗組員たち", []],
                ["the <crew> of the space shuttle", "乗組員たち", "のりくみいんたち"]
            ],
            [
                [239, [850], "decrease", "減る； 減らす； 減少", []],
                ["The birthrate is on the <decrease>.", "減少", "げんしょう"]
            ],
            [
                [240, [10003, 849], "increase", "増える、～を増やす", []],
                ["<increase> by 20%", "増加する", "ぞうかする"]
            ],
            [
                [241, [11230], "recruit", "〈新人など〉を入れる", []],
                ["<recruit> new staff", "入れる", "はいれる"]
            ]
        ],
        ["fact, fect, fic : つくる", [
                [242, [10934, 1024], "affair", "情勢", []],
                ["international <affairs>", "情勢", "じょうせい"]
            ],
            [
                [243, [10341, 677], "affect", "～に影響する", []],
                ["Alcohol <affects> the brain.", "影響する", "えいきょうする"]
            ],
            [
                [244, [10998, 679], "affection", "愛情", []],
                ["a deep <affection> for animals", "愛情", "あいじょう"]
            ],
            [
                [245, [11843], "artifact", "工芸品", []],
                ["Asian art and <artifacts>", "工芸品", "こうげいひん"]
            ],
            [
                [246, [10558, 1244], "artificial", "人工", []],
                ["<artificial> intelligence", "人工", "じんこう"]
            ],
            [
                [247, [10210, 313], "benefit", "利益", []],
                ["costs and <benefits> of the business", "利益", "りえき"]
            ],
            [
                [248, [10857, 695], "defeat", "～を打ち負かす", []],
                ["<defeat> the champion", "打ち負かす", "うちまかす"]
            ],
            [
                [249, [11544, 1173], "defect", "欠陥", []],
                ["a <defect> in the structure", "欠陥", "けっかん"]
            ],
            [
                [250, [11795], "deficiency", "欠乏", []],
                ["a vitamin <deficiency>", "欠乏", "けつぼう"]
            ],
            [
                [251, [11914, 1466], "deficit", "赤字", []],
                ["America's trade <deficit>", "赤字", "あかじ"]
            ],
            [
                [252, [10180, 678], "effect", "効果、影響、結果", []],
                ["the greenhouse <effect> of CO2", "効果", "こうか"]
            ],
            [
                [253, [10289, 239], "efficient", "効率がいい", []],
                ["an <efficient> use of energy", "効率のよい", "こうりつのよい"]
            ],
            [
                [
                    254, [12035], "face", "直面する、迫っている、面目", [
                        [1640, "make a face", "顔をしかめる"]
                    ]
                ],
                ["<face> a problem", "直面する", "ちょくめんする"],
                ["problems <facing> Japan", "迫っている", "せまっている"],
                ["lose <face>", "面目", "めんもく"]
            ],
            [
                [255, [10707, 1865], "facility", "設備、施設", []],
                ["public <facilities>", "施設", "しせつ"]
            ],
            [
                [256, [11063, 467], "factor", "要因", []],
                ["an important <factor> in success", "要因", "よういん"]
            ],
            [
                [257, [10751, 1864], "faculty", "学部、能力", []],
                ["the science <faculty>", "学部", "がくぶ"]
            ],
            [
                [258, [11630, 1724], "fake", "偽物の", []],
                ["make a <fake> cake", "にせ物の", "にせものの"]
            ],
            [
                [259, [12137, 1413], "fashion", "やり方、作る", []],
                ["in a similar <fashion>", "やり方", "やりかた"],
                ["<fashion> a new world", "作る", "つくる"]
            ],
            [
                [260, [11816, 1321], "feat", "偉業", []],
                ["accomplish a remarkable <feat>", "偉業", "いぎょう"]
            ],
            [
                [261, [10176, 27], "feature", "特徴", []],
                ["<features> of human language", "特徴", "とくちょう"]
            ],
            [
                [262, [12197, 1379], "fit", "適する、健康で", []],
                ["the water is <fit> to drink", "適する", "てきする"],
                ["go to the gym to keep <fit>", "健康で", "けんこうで"]
            ],
            [
                [263, [10436, 1890], "function", "機能", []],
                ["the basic <functions> of a computer", "機能", "きのう"]
            ],
            [
                [264, [10698, 1169], "infect", "〈人〉に感染する", []],
                ["be <infected> with the virus", "感染している", "かんせんしている"]
            ],
            [
                [265, [11635, 846], "magnificent", "すばらしい", []],
                ["a <magnificent> view", "すばらしい", "すばらしい"]
            ],
            [
                [266, [10149, 1122], "manufacture", "～を製造する", []],
                ["a car <manufacturing> company", "製造する", "せいぞうする"]
            ],
            [
                [267, [10200, 491], "official", "役人", []],
                ["a government <official>", "役人", "やくにん"]
            ],
            [
                [
                    268, [11901], "proficiency", "検定", [
                        [1732, "proficient", "熟達した"]
                    ]
                ],
                ["an English <proficiency> test", "検定", "けんてい"]
            ],
            [
                [269, [10472, 312], "profit", "もうけ", []],
                ["make a $2 million <profit>", "もうけ", "もうけ"]
            ],
            [
                [270, [10875, 1210], "sacrifice", "～を犠牲にする", []],
                ["<sacrifice> everything for love", "犠牲にする", "ぎせいにする"]
            ],
            [
                [271, [10567, 840], "sufficient", "十分な", []],
                ["pay <sufficient> attention", "十分な", "じゅうぶんな"]
            ],
            [
                [272, [11631, 69], "superficial", "表面的な", []],
                ["a <superficial> difference", "表面的な", "ひょうめんてきな"]
            ],
            [
                [273, [10437, 75], "surface", "表面", []],
                ["the <surface> of the earth", "表面", "ひょうめん"]
            ]
        ],
        ["frame : 組み立てる", [
                [274, [10734], "frame", "わく", []],
                ["a window <frame>", "わく", "わく"]
            ],
            [
                [
                    275, [10231], "furniture", "家具", [
                        [184, "furnish", "～に(…[家具など]を)備え付ける(with…)"]
                    ]
                ],
                ["a room with little <furniture>", "家具", "かぐ"]
            ]
        ],
        ["ordi : 整える", [
                [276, [11438, 2060], "coordinate", "合わせる", []],
                ["<coordinate> movements with each other", "合わせる", "あわせる"]
            ],
            [
                [
                    277, [11132], "extraordinary", "並外れた", [
                        [15, "ordinary", "普通の, 通常の, ありふれた"]
                    ]
                ],
                ["a man of <extraordinary> talent", "並はずれた", "なみはずれた"]
            ],
            [
                [278, [12054, 1926], "order", "注文する、命令、秩序、順", []],
                ["<order> a book from England", "注文する", "ちゅうもんする"],
                ["carry out his <order>", "命令", "めいれい"],
                ["law and <order>", "秩序", "ちつじょ"],
                ["in alphabetical <order>", "順", "じゅん"]
            ],
            [
                [279, [2173], "ornament", "装飾", []],
                ["Christmas <ornament>", "装飾", "そうしょく"]
            ],
            [
                [280, [11890, 2061], "subordinate", "部下", []],
                ["instruct a <subordinate>", "部下", "ぶか"]
            ]
        ],
        ["pare : 準備する", [
                [281, [11793, 1888], "apparatus", "装置", []],
                ["breathing <apparatus>", "装置", "そうち"]
            ],
            [
                [282, [11020, 1947], "empire", "帝国", []],
                ["the Roman <Empire>", "帝国", "ていこく"]
            ],
            [
                [283, [2132], "imperative", "必須の、急務の", []],
                ["Immediate action is <imperative> to prevent global warming.",
                    "急務である", "きゅうむである"
                ]
            ],
            [
                [284, [1948], "imperial", "帝国の", []],
                ["<imperial> palace in Tokyo", "帝国の", "ていこくの"]
            ],
            [
                [285, [10041], "prepare", "～の準備をする", []],
                ["<prepare> a room for a guest", "準備する", "じゅんびする"]
            ],
            [
                [286, [10134], "repair", "～を修理する", []],
                ["<repair> the car", "修理する", "しゅうりする"]
            ]
        ],
        ["stru : 建てる", [
                [
                    287, [10488], "construction", "建設", [
                        [49, "construct", "～を建設する, 組み立てる"]
                    ]
                ],
                ["a bridge under <construction>", "建設", "けんせつ"]
            ],
            [
                [288, [10052, 50], "destroy", "～を破壊する", []],
                ["<destroy> forests", "破壊する", "はかいする"]
            ],
            [
                [289, [10190, 1086], "industry", "工業", []],
                ["a center of heavy <industry>", "工業", "こうぎょう"]
            ],
            [
                [
                    290, [10490], "instruction", "指示", [
                        [1854, "instruct", "Aに～するように指示する"]
                    ]
                ],
                ["follow his <instructions>", "指示", "しじ"]
            ],
            [
                [291, [10492, 1885], "instrument", "器具", []],
                ["a dentist's <instrument>", "道具", "どうぐ"]
            ],
            [
                [292, [10447, 48], "structure", "構造", []],
                ["changes in social <structure>", "構造", "こうぞう"]
            ]
        ]
    ],
    ["熱さ・液体・気体", ["cras : 粉", [
                [293, [10631, 1307], "crash", "激突する", []],
                ["<crash> into the wall", "激突する", "げきとつする"]
            ],
            [
                [294, [11702], "smash", "粉々に砕く", []],
                ["<smash> a bottle", "粉々に砕く", "こなごなにくだく"]
            ]
        ],
        ["dry : 乾いた", [
                [295, [11365, 2103], "drain", "排出する", []],
                ["<drain> water from the tank", "排出する", "はいしゅつする"]
            ],
            [
                [296, [11448, 1272], "drought", "干ばつ", []],
                ["a long <drought> in Africa", "干ばつ", "かんばつ"]
            ]
        ],
        ["flu : 流れ", [
                [297, [11666, 839], "affluent", "裕福な", []],
                ["an <affluent> society", "裕福な", "ゆうふくな"]
            ],
            [
                [298, [11786, 982], "flatter", "お世辞を言う", []],
                ["<flatter> the boss", "おせじを言う", "おせじをいう"]
            ],
            [
                [299, [11420, 1315], "flee", "逃げる", []],
                ["<flee> to free countries", "逃げる", "にげる"]
            ],
            [
                [
                    300, [10380], "floating", "浮かぶ", [
                        [1808, "float", "(水中・空中に)浮く； ～を浮かべる"]
                    ]
                ],
                ["leaves <floating> on the river", "浮かぶ", "うかぶ"]
            ],
            [
                [301, [10443], "flood", "洪水", []],
                ["a <flood> of information", "洪水", "こうずい"]
            ],
            [
                [302, [11182], "fluent", "流ちょうな", []],
                ["be <fluent> in English", "流ちょうだ", "りゅうちょうだ"]
            ],
            [
                [303, [11573, 2044], "fluid", "流体", []],
                ["<fluids> like water and air", "流体", "りゅうたい"]
            ],
            [
                [304, [10182, 675], "influence", "影響", []],
                ["have a bad <influence> on children", "影響", "えいきょう"]
            ]
        ],
        ["lau, lut : 洗う", [
                [305, [11596, 1813], "laundry", "洗濯", []],
                ["do the <laundry>", "洗濯", "せんたく"]
            ],
            [
                [
                    306, [10469], "pollution", "汚染", [
                        [1249, "pollute", "～を汚染する"]
                    ]
                ],
                ["environmental <pollution>", "汚染", "おせん"]
            ]
        ],
        ["merge : 沈む", [
                [
                    307, [10682, 380], "emerge", "〈隠れていたものが〉現れる", [
                        [10711, "emergency", "緊急事態"]
                    ]
                ],
                ["A new problem has <emerged>.", "出現した", "しゅつげんした"]
            ],
            [
                [308, [11739, 2108], "merge", "合併する", []],
                ["<merge> with the company", "合併する", "がっぺいする"]
            ]
        ],
        ["-id : 〜の状態である", [
                [309, [11186], "acid", "酸性の", [
                    [1265, "acid rain", "酸性雨"]
                ]],
                ["<acid> rain", "酸性", "さんせい"]
            ],
            [
                [310, [10999, 1875], "candidate", "候補", []],
                ["a <candidate> for President", "候補", "こうほ"]
            ],
            [
                [311, [11573, 2044], "fluid", "流体", []],
                ["<fluids> like water and air", "流体", "りゅうたい"]
            ],
            [
                [312, [11673, 1269], "humid", "蒸し暑い", []],
                ["<humid> summer weather", "蒸し暑い", "むしあつい"]
            ],
            [
                [313, [1184], "liquid", "液体の", []],
                [
                    "Water is in a solid state below 0℃, becomes <liquid> above 0℃, and evaporates at 100℃.",
                    "液体の", "えきたいの"
                ]
            ],
            [
                [314, [10550, 262], "rapid", "急速な", []],
                ["<rapid> economic growth", "急速な", "きゅうそくな"]
            ],
            [
                [315, [11672, 1757], "rigid", "厳格な", []],
                ["<rigid> rules", "厳格な", "げんかくな"]
            ],
            [
                [316, [10579, 1183], "solid", "固体の", []],
                ["a <solid> state", "固体の", "こたいの"]
            ],
            [
                [317, [11621], "splendid", "すばらしい", []],
                ["a <splendid> view", "すばらしい", "すばらしい"]
            ],
            [
                [318, [10580, 1749], "stupid", "ばかな", []],
                ["say <stupid> things", "ばかな", "ばかな"]
            ],
            [
                [319, [1768], "timid", "臆病な", []],
                ["Japanese are too <timid> when speaking foreign languages.",
                    "臆病すぎる", "おくびょうすぎる"
                ]
            ],
            [
                [320, [11325, 1779], "valid", "妥当な、正当な", []],
                ["a <valid> reason for being late", "正当な", "せいとうな"]
            ],
            [
                [321, [10837, 2], "vivid", "鮮やかな", []],
                ["have <vivid> memories", "鮮やかな", "あざやかな"]
            ]
        ],
        ["flam : 炎(flame)", [
                [322, [12115], "fire", "クビになった、発砲する", []],
                ["He was <fired> from his job.", "クビになった", "くびになった"],
                ["<fire> into the crowd", "発砲する", "はっぽうする"]
            ],
            [
                [323, [11469], "flame", "炎", []],
                ["watch the candle <flame>", "炎", "ほのお"]
            ],
            [
                [324, [11614], "inflammation", "炎症", []],
                ["reduce <inflammation> in the eye", "炎症", "えんしょう"]
            ]
        ],
        ["aci : 酢", [
                [325, [11186], "acid", "酸性の", [
                    [1265, "acid rain", "酸性雨"]
                ]],
                ["<acid> rain", "酸性", "さんせい"]
            ],
            [
                [
                    326, [11330, 1148], "acute", "〈問題が〉深刻な、〈感覚・痛みが〉鋭い", []
                ],
                ["the most <acute> problem", "深刻な", "しんこくな"]
            ],
            [
                [327, [10987, 1187], "oxygen", "酸素", []],
                ["<oxygen> in the air", "酸素", "さんそ"]
            ]
        ],
        ["leak : 漏れる", [
                [328, [10404, 1462], "lack", "不足", []],
                ["<lack> of food", "不足", "ふそく"]
            ],
            [
                [329, [11257, 132], "leak", "漏れる、漏らす", []],
                ["Oil <leaked> from the tank.", "漏れた", "もれた"]
            ]
        ]
    ],
    ["口・食べる", ["pan : パン", [
                [330, [10980, 1848], "companion", "仲間", []],
                ["my traveling <companion>", "仲間", "なかま"]
            ],
            [
                [
                    331, [12037, 434], "company", "仲間、一緒にいること、来客", [
                        [10609, "accompany", "〈人〉に同伴する"]
                    ]
                ],
                ["keep bad <company>", "仲間", "なかま"],
                ["I enjoy your <company>.", "一緒にいること", "いっしょにいること"],
                ["We have <company> today.", "来客", "らいきゃく"]
            ]
        ],
        ["mut : ささやく", [
                [332, [1718], "mumble", "つぶやく", []],
                ["<mumble> a few words", "つぶやく", "つぶやく"]
            ],
            [
                [333, [11751, 1717], "murmur", "つぶやく", []],
                ["<murmur> in a low voice", "つぶやく", "つぶやく"]
            ],
            [
                [334, [1716], "mutter", "つぶやく", []],
                [
                    "What are you <muttering> [murmuring, mumbling]? I can't even hear you.",
                    "つぶやいている", "つぶやいている"
                ]
            ]
        ],
        ["cent : 歌う", [
                [335, [12185, 568], "accent", "なまり", []],
                ["English with an Italian <accent>", "なまり", "なまり"]
            ],
            [
                [336, [11574, 1858], "incentive", "はげみ", []],
                ["an <incentive> to work", "はげみ", "はげみ"]
            ]
        ],
        ["che : 噛む", [
                [337, [1696], "cheek", "頬", []],
                ["pinched my <cheek> to stay awake", "頬", "ほほ"]
            ],
            [
                [338, [11386], "chew", "かむ", []],
                ["<chew> food well", "かむ", "かむ"]
            ],
            [
                [339, [1695], "chin", "あご(の先端)", []],
                ["a double <chin>", "あご", "あご"]
            ],
            [
                [340, [11748, 1507], "choke", "のどがつまる", []],
                ["<choke> on a piece of food", "のどがつまる", "のどがつまる"]
            ]
        ],
        ["suck : 吸う", [
                [341, [11268, 1291], "soak", "浸す、びしょぬれにする、吸収する", []],
                ["<soak> a towel in hot water", "浸す", "ひたす"]
            ],
            [
                [342, [11766], "suck", "吸う", []],
                ["<suck> blood from humans", "吸う", "すう"]
            ]
        ],
        ["or, os : 口", [
                [343, [11763, 990], "adore", "崇拝する", []],
                ["<adore> him as a god", "崇拝する", "すうはいする"]
            ],
            [
                [344, [11648, 537], "oral", "口述の", []],
                ["an <oral> examination", "口述の", "こうじゅつの"]
            ],
            [
                [345, [11787, 556], "prose", "散文", []],
                ["write <prose> and poetry", "散文", "さんぶん"]
            ]
        ]
    ],
    ["金", ["merc : 商売", [
                [346, [11539, 1128], "commerce", "商業", []],
                ["industry and <commerce>", "商業", "しょうぎょう"]
            ],
            [
                [347, [11052, 1129], "merchant", "商人", []],
                ["The <Merchant> of Venice", "商人", "しょうにん"]
            ],
            [
                [348, [11316, 962], "mercy", "慈悲、情け", []],
                ["war without <mercy>", "情け", "なさけ"]
            ],
            [
                [349, [10974, 1782], "merit", "長所", []],
                ["his greatest <merit>", "長所", "ちょうしょ"]
            ]
        ],
        ["eco : 経済、生態", [
                [
                    350, [11189], "ecological", "生態", [
                        [1241, "ecology", "生態(系)、自然環境、環境保護"]
                    ]
                ],
                ["protect the <ecological> system", "生態", "せいたい"]
            ],
            [
                [351, [10197, 295], "economy", "経済", []],
                ["the market <economy>", "経済", "けいざい"]
            ]
        ],
        ["fee : 財産", [
                [352, [10183, 331], "fee", "謝礼、料金", []],
                ["charge a <fee> for service", "料", "りょう"]
            ],
            [
                [353, [10794, 944], "fellow", "仲間の", []],
                ["his <fellow> workers", "仲間", "なかま"]
            ],
            [
                [354, [1944], "feudal", "封建制の", []],
                ["<feudal> system in medieval Europe", "封建制の", "ほうけんせいの"]
            ]
        ]
    ],
    ["位置・方向", ["ana : 〜の上に", [
                [355, [11861, 533], "analogy", "類似点", []],
                ["an <analogy> between the heart and a pump", "類似点", "るいじてん"]
            ],
            [
                [356, [10509], "analysis", "分析", [
                    [586, "analyze", "～を分析する"]
                ]],
                ["<analysis> of DNA", "分析", "ぶんせき"]
            ],
            [
                [357, [11908, 1180], "anatomy", "構造", []],
                ["the <anatomy> of the human brain", "構造", "こうぞう"]
            ]
        ],
        ["cata : 下に", [
                [358, [11825, 408], "catastrophe", "大災害", []],
                ["prevent a <catastrophe>", "大災害", "だいさいがい"]
            ],
            [
                [359, [10941, 377], "category", "範ちゅう", []],
                ["fall into the same <category>", "範ちゅう", "はんちゅう"]
            ]
        ],
        ["cel : 上げる（位置を、速度を）", [
                [360, [11371, 188], "accelerate", "加速する", []],
                ["<accelerate> the process of reform", "加速する", "かそくする"]
            ],
            [
                [361, [10552], "excellent", "すばらしい", [
                    [717, "excel", "優れる"]
                ]],
                ["an <excellent> idea", "すばらしい", "すばらしい"]
            ]
        ],
        ["dia : 横切る", [
                [362, [11591, 1165], "diabetes", "糖尿病", []],
                ["a patient with type 2 <diabetes>", "糖尿病", "とうにょうびょう"]
            ],
            [
                [
                    363, [11538], "diagnosis", "診断", [
                        [1156, "diagnose", "～を診断する"]
                    ]
                ],
                ["the <diagnosis> of disease", "診断", "しんだん"]
            ],
            [
                [364, [11073, 567], "dialect", "方言", []],
                ["speak the local <dialect>", "方言", "ほうげん"]
            ],
            [
                [365, [11589, 526], "dialogue", "対話", []],
                ["a <dialogue> between two students", "対話", "たいわ"]
            ],
            [
                [366, [11490, 2152], "diameter", "直径", []],
                ["a disk five inches in <diameter>", "直径", "ちょっけい"]
            ]
        ],
        ["for : 前に", [
                [367, [10873, 152], "forbid", "～を禁じる", []],
                ["<forbid> him to go out", "禁じる", "きんじる"]
            ],
            [
                [368, [10992], "forecast", "予報", []],
                ["the weather <forecast>", "予報", "よほう"]
            ],
            [
                [369, [1689], "forehead", "ひたい", []],
                ["<forehead> wrinkles from stress", "ひたい", "ひたい"]
            ],
            [
                [370, [11762], "foresee", "予知する", []],
                ["<foresee> the future", "予知する", "よちする"]
            ],
            [
                [371, [10171, 156], "forgive", "～を許す", []],
                ["<forgive> him for being late", "許す", "ゆるす"]
            ],
            [
                [372, [10281, 277], "former", "前の", []],
                ["the <former> President", "前", "ぜん"]
            ],
            [
                [
                    373, [11624], "straightforward", "わかりやすい", [
                        [1912, "forward", "前方へ； ～(手紙・メール)を転送する"]
                    ]
                ],
                ["<straightforward> language", "わかりやすい", "わかりやすい"]
            ],
            [
                [374, [10313], "therefore", "それゆえに", []],
                ["The car is small and <therefore> cheap.", "それゆえ", "それゆえ"]
            ]
        ],
        ["front : 前面", [
                [
                    375, [10624, 500], "confront", "～の前に立ちふさがる、～に立ち向かう", []
                ],
                ["<confront> a difficult problem", "立ち向かう", "たちむかう"]
            ],
            [
                [376, [10783, 352], "frontier", "国境", []],
                ["America's last <frontier>", "辺境", "へんきょう"]
            ]
        ],
        ["hypo, cri : 下、下す", [
                [377, [10491, 552], "crisis", "危機", []],
                ["get over the economic <crisis>", "危機", "きき"]
            ],
            [
                [378, [11519], "criteria", "基準", []],
                ["meet the <criteria> for safety", "基準", "きじゅん"]
            ],
            [
                [379, [1010], "criterion", "基準、指標", []],
                [
                    "We select our staff members according to very strict <criteria>.",
                    "基準", "きじゅん"
                ]
            ],
            [
                [380, [551], "critical", "決定的な, 批評の", []],
                ["The boxer received a <critical> blow and lost consciousness.",
                    "決定的な", "けっていてきな"
                ]
            ],
            [
                [381, [10375, 550], "criticize", "～を非難する", []],
                ["<criticize> him for being late", "非難する", "ひなんする"]
            ],
            [
                [382, [2029], "hypocrisy", "偽善", []],
                [
                    "It's <hypocrisy> to talk about how to save energy while you are in an air-conditioned room.",
                    "偽善", "ぎぜん"
                ]
            ],
            [
                [383, [11029, 581], "hypothesis", "仮説", []],
                ["test the <hypothesis>", "仮説", "かせつ"]
            ]
        ],
        ["inter : 間の", [
                [384, [1116], "Internet", "インターネット", []],
                ["The school library provides free access to the <Internet>.",
                    "インターネット", "いんたあねっと"
                ]
            ],
            [
                [385, [436], "enter", "～に入る", []],
                ["I <entered> the building.", "入った", "はいった"]
            ],
            [
                [386, [10737, 193], "enterprise", "企業、事業", []],
                ["a private <enterprise>", "企業", "きぎょう"]
            ],
            [
                [387, [10871, 769], "entertain", "～を楽しませる", []],
                ["<entertain> the audience", "楽しませる", "たのしませる"]
            ],
            [
                [388, [11857, 309], "entrepreneur", "起業家", []],
                ["a successful <entrepreneur>", "起業家", "きぎょうか"]
            ],
            [
                [389, [10562], "intellectual", "知的な", [
                    [888, "intellect", "知性"]
                ]],
                ["high <intellectual> ability", "知的", "ちてき"]
            ],
            [
                [
                    390, [10244], "interaction", "交流", [
                        [1375, "interact", "(～と)相互作用する、交流し合う(with)"]
                    ]
                ],
                ["social <interaction> with others", "交流", "こうりゅう"]
            ],
            [
                [391, [12093, 311], "interest", "利益、利", []],
                ["protect workers' <interests>", "利益", "りえき"],
                ["lend money at high <interest> rates", "利", "り"]
            ],
            [
                [392, [10691, 167], "interfere", "Aを邪魔する", []],
                ["<interfere> with his work", "じゃまする", "じゃまする"]
            ],
            [
                [393, [10803, 76], "internal", "内部の、国内の", []],
                ["<internal> medicine", "内", "ない"]
            ],
            [
                [394, [10603, 545], "interpret", "～を解釈する", []],
                ["<interpret> the meaning of the word", "解釈する", "かいしゃくする"]
            ],
            [
                [395, [10623, 164], "interrupt", "～を妨げる", []],
                ["<interrupt> their conversation", "じゃまする", "じゃまする"]
            ],
            [
                [396, [11879], "intersection", "交差点", []],
                ["turn right at the <intersection>", "交差点", "こうさてん"]
            ],
            [
                [397, [11450, 274], "interval", "間隔", []],
                ["at <intervals> of ten minutes", "間隔", "かんかく"]
            ],
            [
                [398, [11576], "intervention", "介入", []],
                ["military <intervention> in Iraq", "介入", "かいにゅう"]
            ],
            [
                [399, [1842], "interview", "インタビュー、面接", []],
                ["a job <interview>", "面接", "めんせつ"]
            ],
            [
                [400, [10814, 956], "intimate", "親密な", []],
                ["an <intimate> relationship", "親密な", "しんみつな"]
            ],
            [
                [401, [12000, 2013], "intrinsic", "本来の", []],
                ["the <intrinsic> value of gold", "本来の", "ほんらいの"]
            ]
        ],
        ["lay : 横たわる", [
                [402, [477], "lay", "～を横たえる； 置く", []],
                ["<lay> an ambush", "置く", "おく"]
            ],
            [
                [403, [10975], "layer", "層", [
                    [1266, "ozone layer", "オゾン層"]
                ]],
                ["destroy the ozone <layer>", "層", "そう"]
            ],
            [
                [404, [476], "lie", "横たわる； 存在する", []],
                ["Happiness <lies> in the joy of achievement.", "存在する",
                    "そんざいする"
                ]
            ],
            [
                [405, [1254], "litter", "散らかす、ゴミ", []],
                ["Tons of plastic bags end up as <litter> every day.", "ゴミ",
                    "ごみ"
                ]
            ],
            [
                [406, [11464], "log", "丸太", []],
                ["a <log> cabin", "丸太", "まるた"]
            ]
        ],
        ["med : 中間", [
                [
                    407, [10584], "immediately", "すぐに", [
                        [263, "immediate", "即座の； 直接の"]
                    ]
                ],
                ["leave <immediately> after lunch", "すぐに", "すぐに"]
            ],
            [
                [
                    408, [12060, 427], "mean", "つもりだった、本気で言ってる、意地悪だ", []
                ],
                ["I <meant> to call you sooner.", "つもりだった", "つもりだった"],
                ["I love you. I <mean> it.", "本気で言ってる", "ほんきでいってる"],
                ["He is <mean> to me.", "意地悪だ", "いじわるだ"]
            ],
            [
                [409, [10844, 1985], "meanwhile", "その間に", []],
                ["She was cooking. <Meanwhile>, I was drinking.", "その間",
                    "そのあいだ"
                ]
            ],
            [
                [410, [1110], "media", "メディア、媒体", []],
                ["the mass <media>", "メディア", "めでいあ"]
            ],
            [
                [411, [11188, 1943], "medieval", "中世の", []],
                ["a <medieval> castle", "中世の", "ちゅうせいの"]
            ],
            [
                [412, [10224], "medium", "手段", []],
                ["the <medium> of communication", "手段", "しゅだん"]
            ],
            [
                [413, [11899], "midst", "まっただ中", []],
                ["in the <midst> of the lecture", "まっただ中", "まっただなか"]
            ]
        ],
        ["near : 近い", [
                [414, [1825], "kidney", "腎臓", []],
                ["donated a <kidney> to save a life", "腎臓", "じんぞう"]
            ],
            [
                [415, [10312], "nearly", "ほとんど", []],
                ["<nearly> 30 years ago", "近く", "ちかく"]
            ]
        ],
        ["out, ut : 外へ、十分な", [
                [416, [12170], "but", "だけ、除いて", []],
                ["I have <but> one question.", "だけ", "だけ"],
                ["They all went out <but> me.", "除いて", "のぞいて"]
            ],
            [
                [417, [11598], "outbreak", "ぼっ発", []],
                ["at the <outbreak> of the war", "ぼっ発", "ぼっぱつ"]
            ],
            [
                [418, [11082, 327], "outcome", "結果", []],
                ["the <outcome> of the race", "結果", "けっか"]
            ],
            [
                [419, [11844], "outlet", "はけ口", []],
                ["an <outlet> for frustration", "はけ口", "はけぐち"]
            ],
            [
                [420, [11314, 876], "outlook", "態度、考え方、見通し、見込み", []],
                ["a positive <outlook> on life", "考え方", "かんがえかた"]
            ],
            [
                [421, [10776], "output", "生産高", []],
                ["the factory's <output>", "生産高", "せいさんだか"]
            ],
            [
                [422, [11674], "outstanding", "傑出した", []],
                ["an <outstanding> scholar", "傑出した", "けっしゅつした"]
            ],
            [
                [423, [10321], "throughout", "いたる所に", []],
                ["people <throughout> the world", "中", "なか"]
            ],
            [
                [424, [12010, 848], "utmost", "最も", []],
                ["be of the <utmost> importance", "最も", "もっとも"]
            ],
            [
                [
                    425, [11419, 538], "utter", "発する", [
                        [11692, "utterly", "まったく"]
                    ]
                ],
                ["<utter> a word", "発する", "はっする"]
            ]
        ],
        ["over : 上に", [
                [426, [10591, 1981], "moreover", "その上", []],
                ["He's kind; <moreover>, he's strong.", "その上", "そのうえ"]
            ],
            [
                [427, [10809, 860], "overall", "全面的な、全体的な", []],
                ["part of an <overall> plan", "全体的な", "ぜんたいてきな"]
            ],
            [
                [428, [10376, 224], "overcome", "～に打ち勝つ", []],
                ["<overcome> difficulties", "打ち勝つ", "うちかつ"]
            ],
            [
                [429, [10649, 157], "overlook", "～を見落とす、～を見逃す", []],
                ["<overlook> the fact", "見逃す", "みのがす"]
            ],
            [
                [430, [10598], "overnight", "一晩", []],
                ["stay <overnight> in his house", "一晩", "ひとばん"]
            ],
            [
                [431, [11400, 1488], "overtake", "追い越す", []],
                ["<overtake> Japan in PC sales", "追い返す", "おいかえす"]
            ],
            [
                [
                    432, [11165], "overwhelming", "圧倒的な", [
                        [1487, "overwhelm", "～を圧倒する、打ちのめす"]
                    ]
                ],
                ["an <overwhelming> majority", "圧倒的な", "あっとうてきな"]
            ]
        ],
        ["para : わきの", [
                [433, [11928], "paradigm", "理論的枠組", []],
                ["propose a new <paradigm>", "理論的枠組", "りろんてきわくぐみ"]
            ],
            [
                [434, [11290, 566], "paradox", "逆説", []],
                ["a strange <paradox>", "逆説", "ぎゃくせつ"]
            ],
            [
                [435, [10755, 1738], "parallel", "類似（物）、匹敵するもの", []],
                ["have no <parallel> in history", "匹敵するもの", "ひってきするもの"]
            ],
            [
                [436, [12001, 1153], "paralyze", "麻痺している", []],
                ["be <paralyzed> from the waist down", "麻痺している", "まひしている"]
            ],
            [
                [437, [11836], "parasite", "寄生生物", []],
                ["an animal <parasite>", "寄生生物", "きせいせいぶつ"]
            ],
            [
                [438, [1074], "parliament", "国会", []],
                ["The bill passed in <Parliament>.", "国会", "こっかい"]
            ]
        ],
        ["part : 部分", [
                [439, [369], "apart", "(～から)離れて(from～)", []],
                ["The boy lives <apart> from his parents.", "離れて", "はなれて"]
            ],
            [
                [440, [11317, 516], "counterpart", "相当するもの", []],
                [
                    "Chinese children work harder than their Japanese <counterparts>.",
                    "子供", "こども"
                ]
            ],
            [
                [441, [10219, 1833], "department", "部門、学科", []],
                ["the history <department>", "学科", "がっか"]
            ],
            [
                [442, [11565], "departure", "出発", [
                    [1834, "depart", "出発する"]
                ]],
                ["check the <departure> time", "出発", "しゅっぱつ"]
            ],
            [
                [443, [1472], "impart", "～を(…に)与える、伝える(to …)", []],
                ["Helen <imparted> her husband's secret to her neighbor.",
                    "伝えた", "つたえた"
                ]
            ],
            [
                [
                    444, [12050], "part", "役割、側、手放す", [
                        [1456, "partial", "部分的な； 偏った、不公平な"]
                    ]
                ],
                ["play a <part> in the economy", "役割", "やくわり"],
                ["a fault on our <part>", "側", "がわ"],
                ["<part> with the car", "手放す", "てばなす"]
            ],
            [
                [445, [10166, 1030], "participate", "Aに参加する", []],
                ["<participate> in the meeting", "参加する", "さんかする"]
            ],
            [
                [446, [11089, 2115], "particle", "粒子", []],
                ["the <particles> of light", "粒子", "りゅうし"]
            ],
            [
                [447, [10258, 32], "particular", "ある特定の、特有の", []],
                ["a <particular> character", "特有の", "とくゆうの"]
            ],
            [
                [448, [1438], "partly", "部分的に、一部には", []],
                ["The mechanism of the human brain is only <partly> clarified.",
                    "部分的に", "ぶぶんてきに"
                ]
            ],
            [
                [449, [12046], "party", "党、団、相手", []],
                ["the Democratic <Party>", "党", "とう"],
                ["a <party> of tourists", "団", "だん"],
                ["Your <party> is on the line.", "相手", "あいて"]
            ],
            [
                [450, [11050, 1452], "portion", "部分", []],
                ["a large <portion> of your salary", "部分", "ぶぶん"]
            ],
            [
                [451, [10702, 1449], "proportion", "比率", []],
                ["the <proportion> of boys to girls", "比率", "ひりつ"]
            ]
        ],
        ["pend, pens : ぶら下げる", [
                [452, [11265, 1512], "compensate", "埋め合わせる", []],
                ["<compensate> for the loss", "埋め合わせる", "うめあわせる"]
            ],
            [
                [453, [10022, 700], "depend", "～に依存する、～しだいで決まる", []],
                ["Everything <depends> on him.", "しだいだ", "しだいだ"]
            ],
            [
                [454, [10532], "expensive", "高価な", [
                    [330, "expense", "出費"]
                ]],
                ["an <expensive> restaurant", "高価な", "こうかな"]
            ],
            [
                [455, [10277, 701], "independent", "独立した", []],
                ["He is <independent> 0f his parents.", "独立している", "どくりつしている"]
            ],
            [
                [456, [11619, 5], "indispensable", "不可欠な", []],
                ["Water is <indispensable> to life.", "不可欠だ", "ふかけつだ"]
            ],
            [
                [457, [11525, 926], "pension", "年金", []],
                ["the old-age <pension>", "年金", "ねんきん"]
            ],
            [
                [458, [2089], "ponder", "～をじっくり考える", []],
                [
                    "Lately I have been continually <pondering> how I should quit my job.",
                    "考えている", "かんがえている"
                ]
            ],
            [
                [459, [11266, 1506], "suspend", "中止する、つるす", []],
                ["<suspend> the project", "中止する", "ちゅうしする"]
            ]
        ],
        ["rise : 上がる", [
                [460, [10855, 381], "arise", "生じる", []],
                ["Problems <arise> from carelessness.", "生じる", "しょうじる"]
            ],
            [
                [461, [10033, 475], "raise", "～を上げる、～を育てる", []],
                ["<raise> both hands", "上げる", "あげる"]
            ],
            [
                [462, [12180, 1298], "rear", "後部、育てる", []],
                ["a <rear> seat", "後部", "こうぶ"],
                ["<rear> three children", "育てる", "そだてる"]
            ],
            [
                [463, [474], "rise", "上がる, 増える； 上昇", []],
                ["Internet crime is on the <rise> in Japan.", "増えている", "ふえている"]
            ]
        ],
        ["side : 側面", [
                [464, [370], "aside", "脇に", []],
                ["<aside> from A", "さておき", "さておき"]
            ],
            [
                [465, [10323, 1980], "besides", "～に加えて", []],
                ["<Besides> being rich, he is kind.", "上に", "うえに"]
            ]
        ],
        ["str : 外側の", [
                [466, [77], "external", "外側の", []],
                [
                    "In a dream, the <external> world is completely replaced by the internal world.",
                    "外側の", "そとがわの"
                ]
            ],
            [
                [467, [1432], "extra", "余分な、臨時の", []],
                ["Is there an <extra> charge wrapping?", "追加の", "ついかの"]
            ],
            [
                [
                    468, [11132], "extraordinary", "並外れた", [
                        [15, "ordinary", "普通の, 通常の, ありふれた"]
                    ]
                ],
                ["a man of <extraordinary> talent", "並はずれた", "なみはずれた"]
            ],
            [
                [469, [325], "extravagant", "金遣いの荒い, 過度の, 法外な", []],
                ["I can't accept such an <extravagant> gift.", "過度の", "かどの"]
            ],
            [
                [
                    470, [10587], "extremely", "非常に", [
                        [1429, "extreme", "極端な 極端、極限"]
                    ]
                ],
                ["an <extremely> difficult problem", "非常に", "ひじょうに"]
            ],
            [
                [471, [12000, 2013], "intrinsic", "本来の", []],
                ["the <intrinsic> value of gold", "本来の", "ほんらいの"]
            ],
            [
                [472, [10464], "stranger", "見知らぬ人", []],
                ["talk to a <stranger>", "見知らぬ人", "みしらぬひと"]
            ]
        ],
        ["sum, sur, super : 一番高い、超えて", [
                [473, [10441, 1256], "resource", "資源", [
                    [10413, "source", "源"]
                ]],
                ["natural <resources>", "資源", "しげん"]
            ],
            [
                [474, [10708, 831], "sum", "金額、合計、要約", []],
                ["a large <sum> of money", "額", "がく"]
            ],
            [
                [475, [11296], "summit", "頂上、頂点、首脳会議", []],
                ["reach the <summit>", "頂上", "ちょうじょう"]
            ],
            [
                [476, [71], "superb", "すばらしい, 見事な", []],
                [
                    "According to the newspaper, the musical performance was <superb>.",
                    "すばらしかった", "すばらしかった"
                ]
            ],
            [
                [477, [11631, 69], "superficial", "表面的な", []],
                ["a <superficial> difference", "表面的な", "ひょうめんてきな"]
            ],
            [
                [478, [10288, 714], "superior", "よりすぐれている", []],
                ["be <superior> to others", "よりすぐれている", "よりすぐれている"]
            ],
            [
                [479, [11456, 73], "superstition", "迷信", []],
                ["believe a foolish <superstition>", "迷信", "めいしん"]
            ],
            [
                [
                    480, [11289], "supervisor", "監督者", [
                        [72, "supervise", "～を監視する, 指揮する"]
                    ]
                ],
                ["a production <supervisor>", "監督者", "かんとくしゃ"]
            ],
            [
                [481, [11623], "supreme", "最高の", []],
                ["<supreme> joy", "最高の", "さいこうの"]
            ],
            [
                [482, [10437, 75], "surface", "表面", []],
                ["the <surface> of the earth", "表面", "ひょうめん"]
            ],
            [
                [483, [11361, 716], "surpass", "まさる", []],
                ["<surpass> the US in technology", "まさる", "まさる"]
            ],
            [
                [484, [11527], "surplus", "余剰", []],
                ["a <surplus> of food", "余剰", "よじょう"]
            ],
            [
                [485, [11213, 698], "surrender", "降伏する", []],
                ["<surrender> to the US army", "降参する", "こうさんする"]
            ],
            [
                [486, [10079, 361], "surround", "～を取り囲む", []],
                ["Japan is <surrounded> by the sea.", "囲まれている", "かこまれている"]
            ],
            [
                [487, [10485, 577], "survey", "調査", []],
                ["according to a new <survey>", "調査", "ちょうさ"]
            ],
            [
                [488, [10067, 409], "survive", "生き残る", []],
                ["<survive> in the jungle", "生き残る", "いきのこる"]
            ]
        ],
        ["trans : 横切って", [
                [489, [11235, 994], "betray", "裏切る、もらす", []],
                ["<betray> a good friend", "裏切る", "うらぎる"]
            ],
            [
                [490, [10448, 1229], "tradition", "伝統", []],
                ["history and <tradition>", "伝統", "でんとう"]
            ],
            [
                [
                    491, [11833], "transaction", "取引", [
                        [2172, "transact", "～(業務・取引)を処理する、行う"]
                    ]
                ],
                ["a <transaction> with the company", "取引", "とりひき"]
            ],
            [
                [492, [2011], "transcend", "～を越える、超越する", []],
                ["Music <transcends> national boundaries.", "越える", "こえる"]
            ],
            [
                [493, [10670, 661], "transfer", "～を移す", []],
                ["He was <transferred> to Osaka", "転勤した", "てんきんした"]
            ],
            [
                [494, [10856, 663], "transform", "変える", []],
                ["<transform> food into energy", "変える", "かえる"]
            ],
            [
                [495, [11461, 667], "transition", "移り変わり", []],
                ["a seasonal <transition>", "移り変わり", "うつりかわり"]
            ],
            [
                [496, [10153, 664], "translate", "～を翻訳する", []],
                ["<translate> a novel into English", "翻訳する", "ほんやくする"]
            ],
            [
                [497, [10636, 659], "transmit", "～を送る、伝える", []],
                ["<transmit> messages", "伝える", "つたえる"]
            ],
            [
                [498, [11944, 666], "transparent", "透き通った", []],
                ["a <transparent> silk nightgown", "透き通った", "すきとおった"]
            ],
            [
                [499, [11106, 665], "transplant", "移植", []],
                ["a heart <transplant> operation", "移植", "いしょく"]
            ],
            [
                [
                    500, [10199], "transportation", "交通機関、輸送", [
                        [662, "transport", "～を輸送する； 輸送、交通手段"]
                    ]
                ],
                ["use public <transportation>", "交通機関", "こうつうきかん"]
            ]
        ],
        ["under : 下に", [
                [501, [10905, 1489], "undergo", "～を経験する", []],
                ["<undergo> great changes", "経験する", "けいけんする"]
            ],
            [
                [502, [10825], "underlying", "根本的な", []],
                ["the <underlying> cause", "根本的な", "こんぽんてきな"]
            ],
            [
                [503, [11765, 2030], "undermine", "弱める", []],
                ["<undermine> the US position", "弱める", "よわめる"]
            ],
            [
                [504, [10673, 207], "undertake", "〈仕事など〉を引き受ける", []],
                ["<undertake> the work", "引き受ける", "ひきうける"]
            ]
        ],
        ["ward : 向かって", [
                [505, [10311], "afterward", "その後", []],
                ["Soon <afterward>, he left", "その後", "そのあと"]
            ],
            [
                [506, [10829, 1743], "awkward", "気まずい", []],
                ["an <awkward> silence", "気まずい", "きまずい"]
            ],
            [
                [
                    507, [11624], "straightforward", "わかりやすい", [
                        [1912, "forward", "前方へ； ～(手紙・メール)を転送する"]
                    ]
                ],
                ["<straightforward> language", "わかりやすい", "わかりやすい"]
            ],
            [
                [508, [1343], "weird", "変な、奇妙な", []],
                ["Something really <weird> happened to me yesterday.", "奇妙な",
                    "きみょうな"
                ]
            ]
        ],
        ["with : 後ろ", [
                [509, [1977], "notwithstanding", "それにもかかわらず", []],
                ["finished the project, <notwithstanding> the difficulties",
                    "にもかかわらず", "にもかかわらず"
                ]
            ],
            [
                [
                    510, [10689, 324], "withdraw",
                    "～を引っ込める、引きこもる、退く、〈預金など〉を引き出す", []
                ],
                ["<withdraw> my hand", "引っ込める", "ひっこめる"]
            ],
            [
                [511, [10325], "within", "～以内で", []],
                ["<within> a mile of the station", "以内で", "いないで"]
            ],
            [
                [512, [11774, 2139], "withstand", "耐える", []],
                ["<withstand> high temperatures", "耐える", "たえる"]
            ]
        ],
        ["al : 〜に向かって", [
                [513, [10157], "alarm", "～をぎょっとさせる、おびえさせる", []],
                ["be <alarmed> by the noise", "ぎょっとする", "ぎょっとする"]
            ],
            [
                [514, [11689, 880], "alert", "用心する", []],
                ["be <alert> to every sound", "用心する", "ようじんする"]
            ]
        ],
        ["ob : 〜に向かって、〜に反対して", [
                [515, [11592], "obesity", "肥満", [
                    [1384, "obese", "肥満した"]
                ]],
                ["the risk of <obesity>", "肥満", "ひまん"]
            ],
            [
                [516, [10606, 689], "obey", "～に従う", []],
                ["<obey> the law", "従う", "したがう"]
            ],
            [
                [
                    517, [12116, 502], "object", "物体、対象、反対する", [
                        [10728, "objective", "目的、目標、客観的な"]
                    ]
                ],
                ["a strange flying <object>", "物体", "ぶったい"],
                ["an <object> of study", "対象", "たいしょう"],
                ["<object> to his drinking", "反対する", "はんたいする"]
            ],
            [
                [518, [10644, 144], "oblige", "～に強いる", []],
                ["be <obliged> to pay the price", "ざるをえない", "ざるをえない"]
            ],
            [
                [519, [12139, 432], "observe", "観測する、述べる、守る", []],
                ["<observe> the comet", "観測する", "かんそくする"],
                ["<observe> that prices would fall", "述べる", "のべる"],
                ["<observe> the rule", "守る", "まもる"]
            ],
            [
                [520, [11971], "obsess", "とりつかれている", []],
                ["be <obsessed> with dieting", "とりつかれている", "とりつかれている"]
            ],
            [
                [521, [2127], "obsolete", "すたれた、時代遅れの", []],
                [
                    "Computer hardware becomes <obsolete> as soon as new models come out.",
                    "時代遅れに", "じだいおくれに"
                ]
            ],
            [
                [522, [11002, 220], "obstacle", "障害", []],
                ["an <obstacle> to communication", "障害", "しょうがい"]
            ],
            [
                [523, [1762], "obstinate", "頑固な", []],
                [
                    "The old man was so <obstinate> [stubborn] that he refused any help from his sons.",
                    "頑固な", "がんこな"
                ]
            ],
            [
                [524, [10354, 244], "obtain", "～を得る", []],
                ["<obtain> information about him", "得る", "える"]
            ],
            [
                [525, [10269, 40], "obvious", "明白な", []],
                ["an <obvious> mistake", "明白な", "めいはくな"]
            ],
            [
                [
                    526, [10150, 347], "occupy", "～を占める", [
                        [10724, "occupation", "職業、占領"],
                        [11976, "preoccupied", "頭がいっぱいだ"]
                    ]
                ],
                ["<occupy> a high position", "占める", "しめる"]
            ],
            [
                [527, [11421], "offending", "怒らせる", [
                    [784, "offend", "怒らせる"]
                ]],
                ["avoid <offending> others", "怒らせる", "いからせる"]
            ],
            [
                [528, [11385, 657], "omit", "省く", []],
                ["<omit> the word", "省く", "はぶく"]
            ],
            [
                [
                    529, [10368, 501], "oppose", "～に反対する", [
                        [11080, "opponent", "敵"]
                    ]
                ],
                ["<oppose> their marriage", "反対する", "はんたいする"]
            ]
        ],
        ["piece : 一部分", [
                [530, [11790], "masterpiece", "傑作", []],
                ["<masterpieces> of French art", "傑作", "けっさく"]
            ],
            [
                [531, [11529], "patch", "あて布", []],
                ["a leather elbow <patch>", "当て", "あて"]
            ]
        ],
        ["prox : 近い", [
                [532, [10062, 367], "approach", "～に接近する；～に取り組む；方法", []],
                ["The plane is <approaching> Chicago.", "接近している", "せっきんしている"]
            ],
            [
                [533, [10597, 861], "approximately", "およそ", []],
                ["<approximately> 10,000 years ago", "およそ", "およそ"]
            ],
            [
                [534, [2070], "proximity", "(～に)近いこと(to)", []],
                ["I chose the hotel because of its <proximity> to the station.",
                    "近さ", "ちかさ"
                ]
            ]
        ],
        ["be : 近くに", [
                [
                    535, [11452], "behalf", "代表して", [
                        [1643, "on behalf of", "～に代わって、を代表して"]
                    ]
                ],
                ["on <behalf> of the class", "代表して", "だいひょうして"]
            ],
            [
                [536, [10851, 2007], "beneath", "～の下で", []],
                ["<beneath> the surface of the water", "下で", "したで"]
            ],
            [
                [537, [11695, 2005], "thereby", "そうすることで", []],
                ["He always tells the truth, <thereby> avoiding trouble.",
                    "そうすることで", "そうすることで"
                ]
            ]
        ],
        ["up : 上へ", [
                [538, [11178, 291], "up-to-date", "最新の", []],
                ["<up-to-date> fashions", "最新の", "さいしんの"]
            ],
            [
                [539, [12023, 1939], "upright", "まっすぐに", []],
                ["stand <upright>", "まっすぐに", "まっすぐに"]
            ],
            [
                [540, [10283, 127], "upset", "動揺している", []],
                ["be <upset> by the accident", "動揺している", "どうようしている"]
            ]
        ],
        ["anti, acne : 前に", [
                [541, [10187, 282], "advance", "前進、進歩", []],
                ["<advances> in technology", "進歩", "しんぽ"]
            ],
            [
                [542, [10416, 630], "advantage", "利点", []],
                ["the <advantage> of membership", "利点", "りてん"]
            ],
            [
                [543, [10503, 293], "ancestor", "祖先", []],
                ["the common <ancestors> of all humans", "祖先", "そせん"]
            ],
            [
                [544, [10535, 292], "ancient", "古代の", []],
                ["<ancient> Greece and Rome", "古代の", "こだいの"]
            ],
            [
                [545, [11343, 2079], "anticipate", "予想する", []],
                ["<anticipate> the future", "予想する", "よそうする"]
            ],
            [
                [
                    546, [11540], "antiquity", "古代、古物", [
                        [2171, "antique", "古い、骨董の"]
                    ]
                ],
                ["the art of <antiquity>", "古代", "こだい"]
            ]
        ],
        ["for, fur : 前へ", [
                [547, [10085, 316], "afford", "～をする余裕がある", []],
                ["can't <afford> to buy a Ford", "余裕がない", "よゆうがない"]
            ],
            [
                [548, [1982], "furthermore", "さらに", []],
                [
                    "The continuous rain flooded the river. <Furthermore> [Moreover], it caused a landslide.",
                    "さらに", "さらに"
                ]
            ]
        ]
    ],
    ["回転", ["contra : 向きを変える", [
                [549, [11242, 505], "contradict", "矛盾する", []],
                ["<contradict> what he said", "矛盾する", "むじゅんする"]
            ],
            [
                [550, [10316, 503], "contrary", "反対に", []],
                ["<contrary> to expectations", "反して", "はんして"]
            ],
            [
                [551, [10442, 504], "contrast", "対比", []],
                ["the <contrast> between light and shadow", "対比", "たいひ"]
            ],
            [
                [552, [12199, 683], "control", "規制、対照", []],
                ["gun <control> laws", "規制", "きせい"],
                ["<control> group", "対照", "たいしょう"]
            ],
            [
                [553, [11317, 516], "counterpart", "相当するもの", []],
                [
                    "Chinese children work harder than their Japanese <counterparts>.",
                    "子供", "こども"
                ]
            ],
            [
                [554, [10125, 1483], "encounter", "～に偶然出会う", []],
                ["<encounter> many difficulties", "出会う", "であう"]
            ]
        ],
        ["rol : 回転する、名簿", [
                [555, [12199, 683], "control", "規制、対照", []],
                ["gun <control> laws", "規制", "きせい"],
                ["<control> group", "対照", "たいしょう"]
            ],
            [
                [556, [11408, 1859], "enroll", "入学する", []],
                ["<enroll> in medical school", "入学する", "にゅうがくする"]
            ],
            [
                [557, [10408, 1317], "role", "役割", []],
                ["play an important <role>", "役割", "やくわり"]
            ],
            [
                [558, [1318], "roll", "転がる； ～を転がす、巻く", []],
                ["The ball gained speed as it <rolled> down the slope.", "転がる",
                    "ころがる"
                ]
            ],
            [
                [559, [11394, 125], "rotate", "回転する", []],
                ["The earth <rotates> once a day.", "回転する", "かいてんする"]
            ],
            [
                [560, [11650], "rotten", "腐った", [
                    [400, "rot", "腐る, 腐敗する"]
                ]],
                ["smell like <rotten> eggs", "腐った", "くさった"]
            ]
        ],
        ["stir : ぐるぐる回す", [
                [561, [11267, 128], "stir", "かきたてる", []],
                ["<stir> emotions", "かきたてる", "かきたてる"]
            ],
            [
                [562, [10514], "storm", "嵐", []],
                ["a heavy <storm>", "嵐", "あらし"]
            ]
        ],
        ["tur : 回る(turn)", [
                [563, [1585], "in turn", "それが今度は", []],
                [
                    "Lack of sleep stress, which <in turn> leads to lower efficiency in one's work.",
                    "それが今度は", "それがこんどは"
                ]
            ],
            [
                [564, [10953], "tourism", "観光", []],
                ["the <tourism> industry in Japan", "観光", "かんこう"]
            ],
            [
                [565, [12033], "turn", "番、変わり目", []],
                ["Now it's your <turn>.", "番", "ばん"],
                ["the <turn> of the century", "変わり目", "かわりめ"]
            ]
        ],
        ["vert : 向きを変える", [
                [566, [11947, 221], "adverse", "悪", []],
                ["the <adverse> effect of global warming", "悪", "あく"]
            ],
            [
                [
                    567, [10524], "advertising", "広告", [
                        [1117, "advertisement", "広告"]
                    ]
                ],
                ["newspaper <advertising>", "広告", "こうこく"]
            ],
            [
                [568, [11470, 273], "anniversary", "記念日", []],
                ["celebrate their wedding <anniversary>", "記念日", "きねんび"]
            ],
            [
                [
                    569, [11171], "controversial", "物議を呼ぶ", [
                        [618, "controversy", "論争, 議論"]
                    ]
                ],
                ["a <controversial> social issue", "論議を呼ぶ", "ろんぎをよぶ"]
            ],
            [
                [570, [12025], "conversely", "逆に", []],
                ["He's a dog lover. <Conversely>, I'm a cat lover.", "逆に",
                    "ぎゃくに"
                ]
            ],
            [
                [571, [10662, 1478], "convert", "～を転換する", []],
                ["<convert> sunlight into electricity", "転換する", "てんかんする"]
            ],
            [
                [572, [11060], "diversity", "多様性", [
                    [518, "diverse", "多様な"]
                ]],
                ["American cultural <diversity>", "多様性", "たようせい"]
            ],
            [
                [573, [11754, 1477], "divert", "そらす", []],
                ["<divert> attention from the fact", "そらす", "そらす"]
            ],
            [
                [574, [10748, 917], "divorce", "離婚", []],
                ["an increase in the <divorce> rate", "離婚", "りこん"]
            ],
            [
                [575, [10617, 1804], "reverse", "～を反対にする、逆転する", []],
                ["<reverse> the positions", "逆転する", "ぎゃくてんする"]
            ],
            [
                [576, [10510], "universe", "宇宙", [
                    [813, "universal", "普遍的な"]
                ]],
                ["stars in the <universe>", "宇宙", "うちゅう"]
            ],
            [
                [577, [557], "verse", "韻文, 詩", []],
                ["write in <verse>", "韻文", "いんぶん"]
            ],
            [
                [578, [10754], "version", "型、...版、翻訳、説明", []],
                ["the latest <version> of the software", "版", "ばん"]
            ],
            [
                [579, [11955, 1736], "vertical", "垂直な", []],
                ["a <vertical> wall of rock", "垂直な", "すいちょくな"]
            ],
            [
                [580, [1600], "vice versa", "その逆、逆もまた同様", []],
                ["Whenever I say yes, my wife says no, and <vice versa>.",
                    "その逆もまた同様", "そのぎゃくもまたどうよう"
                ]
            ]
        ],
        ["vol : 回転する", [
                [
                    581, [10939], "evolution", "進化", [
                        [1240, "evolve", "進化する、発展する"]
                    ]
                ],
                ["human <evolution>", "進化", "しんか"]
            ],
            [
                [
                    582, [10266], "involved", "～に関係している、参加している", [
                        [
                            1032, "involve",
                            "～を(必然的に)含む、関与させる、巻き込む、伴う、必要とする、もたらす"
                        ]
                    ]
                ],
                ["be <involved> in the accident", "巻き込まれている", "まきこまれている"]
            ],
            [
                [583, [10229, 1946], "revolution", "革命", []],
                ["the French <Revolution>", "革命", "かくめい"]
            ],
            [
                [584, [10949, 829], "volume", "冊", []],
                ["a 10,000-<volume> library", "冊", "さつ"]
            ]
        ]
    ],
    ["混乱させる・試す", ["fuse : 注ぐ", [
                [585, [10086, 513], "confuse", "～を当惑させる", []],
                ["be <confused> by her anger", "当惑する", "とうわくする"]
            ],
            [
                [586, [92], "diffuse", "～をまき散らす, 分散する； 拡散する", []],
                [
                    "The toxic gas did not quickly <diffuse> because there was no wind.",
                    "拡散し", "かくさんし"
                ]
            ],
            [
                [587, [10888, 396], "fade", "薄れる", []],
                ["Memories of the war <fade> away.", "薄れる", "うすれる"]
            ],
            [
                [588, [10058, 439], "refuse", "～を断る", []],
                ["<refuse> to give up hope", "拒む", "こばむ"]
            ]
        ],
        ["mecha : からくり", [
                [589, [1886], "machinery", "機械類", []],
                ["a piece of <machinery>", "機械", "きかい"]
            ],
            [
                [590, [11034], "mechanism", "仕組み", []],
                ["the <mechanism> of a clock", "仕組み", "しくみ"]
            ]
        ],
        ["pert, peri : 試す", [
                [591, [10428, 582], "experiment", "実験", []],
                ["<experiments> with animals", "実験", "じっけん"]
            ],
            [
                [
                    592, [11802], "expertise", "専門知識", [
                        [593, "expert", "専門家； (～に)熟達した(at, in～)"]
                    ]
                ],
                ["<expertise> in programming", "専門知識", "せんもんちしき"]
            ],
            [
                [593, [11866, 2122], "peril", "危険", []],
                ["the <perils> of the road", "危険", "きけん"]
            ]
        ],
        ["prov : 試す", [
                [594, [10163, 506], "approve", "賛成する；～を承認する", []],
                ["<approve> of their marriage", "承認する", "しょうにんする"]
            ],
            [
                [595, [10029, 446], "improve", "～を向上させる", []],
                ["<improve> living conditions", "向上させる", "こうじょうさせる"]
            ],
            [
                [
                    596, [10582], "probably", "おそらく", [
                        [1354, "probable", "じゅうぶんありえる"]
                    ]
                ],
                ["<Probably> he won't come.", "おそらく", "おそらく"]
            ],
            [
                [597, [11801, 2051], "probe", "探査機", []],
                ["a space <probe>", "探査機", "たんさき"]
            ],
            [
                [598, [10043, 589], "prove", "～だとわかる", []],
                ["<prove> to be true", "わかる", "わかる"]
            ]
        ],
        ["tempt : 試す", [
                [599, [10191, 195], "attempt", "試み", []],
                ["an <attempt> to break the record", "試み", "こころみ"]
            ],
            [
                [600, [11907, 965], "contempt", "軽蔑", []],
                ["<contempt> for authority", "軽蔑", "けいべつ"]
            ],
            [
                [601, [11202, 1369], "tempt", "誘惑する、する気にさせる", []],
                ["be <tempted> to call her", "たくなる", "たくなる"]
            ]
        ],
        ["tric : 邪魔なもの", [
                [602, [12012, 1729], "intricate", "複雑な", []],
                ["<intricate> pattern", "複雑な", "ふくざつな"]
            ],
            [
                [
                    603, [12017], "intriguing", "興味深い", [
                        [2036, "intrigue", "～の興味をそそる； 陰謀"]
                    ]
                ],
                ["a very <intriguing> question", "興味深い", "きょうみぶかい"]
            ],
            [
                [604, [12194], "trick", "芸、コツ、いたずら、だまして、たくらみ", []],
                ["teach the dolphin new <tricks>", "芸", "げい"],
                ["a <trick> for memorizing words", "コツ", "こつ"],
                ["play a <trick> on the teacher", "いたずら", "いたずら"],
                ["<trick> him into buying the pot", "だまして", "だまして"],
                ["a clever <trick>", "たくらみ", "たくらみ"]
            ]
        ],
        ["dec : きちんとした", [
                [605, [11337, 1775], "decent", "まともな", []],
                ["make a <decent> living", "まともな", "まともな"]
            ],
            [
                [606, [10170], "decorate", "～を装飾する", []],
                ["trees <decorated> with lights", "飾られた", "かざられた"]
            ]
        ],
        ["frau : だますこと", [
                [607, [402], "fraud", "詐欺、不正行為", []],
                ["credit card <fraud>", "詐欺", "さぎ"]
            ],
            [
                [608, [10651, 762], "frustrate", "〈人〉を欲求不満にさせる", []],
                ["be <frustrated> by the lack of money", "欲求不満になる",
                    "よっきゅうふまんになる"
                ]
            ]
        ],
        ["pour : 注ぐ", [
                [609, [10923, 1289], "pour", "～を注ぐ", []],
                ["<pour> wine into the glass", "注ぐ", "そそぐ"]
            ],
            [
                [610, [11140], "pure", "純", []],
                ["<pure> gold", "純", "じゅん"]
            ]
        ]
    ],
    ["知能・思考", ["cor : 心", [
                [
                    611, [11931, 509], "accord", "一致", [
                        [10849, "accordingly", "それ相応に"]
                    ]
                ],
                ["His opinion is in <accord> with mine.", "一致", "いっち"]
            ],
            [
                [612, [11087], "code", "規則", []],
                ["a strict dress <code>", "規則", "きそく"]
            ],
            [
                [613, [10781, 74], "core", "中心、核心", []],
                ["the <core> of the problem", "核心", "かくしん"]
            ],
            [
                [614, [931], "corpse", "死体", []],
                ["An unidentified <corpse> was discovered.", "死体", "したい"]
            ],
            [
                [
                    615, [10042, 191], "encourage", "はげます", [
                        [10945, "courage", "勇気"]
                    ]
                ],
                ["<encourage> children to read", "すすめる", "すすめる"]
            ]
        ],
        ["cuse : 原因", [
                [616, [10650, 790], "accuse", "～を非難する", []],
                ["<accuse> him of lying", "非難する", "ひなんする"]
            ],
            [
                [617, [12073, 466], "cause", "原因、引き起こす、運動", []],
                ["the <cause> of the failure", "原因", "げんいん"],
                ["<cause> a lot of trouble", "引き起こす", "ひきおこす"],
                ["advance the <cause> of peace", "運動", "うんどう"]
            ],
            [
                [618, [10194, 1929], "excuse", "言い訳", []],
                ["make an <excuse> to leave early", "言い訳", "いいわけ"]
            ]
        ],
        ["fault : 誤り", [
                [619, [12094, 454], "fail", "できない", []],
                ["<fail> to understand him", "できない", "できない"]
            ],
            [
                [620, [12121, 792], "fault", "責任、欠点", []],
                ["If he fails, it'll be my <fault>.", "責任", "せきにん"],
                ["He has a lot of <faults>.", "欠点", "けってん"]
            ]
        ],
        ["gno, not : 知る(know)", [
                [621, [11215, 886], "acknowledge", "認める", []],
                ["<acknowledge> that a problem exists", "認める", "みとめる"]
            ],
            [
                [
                    622, [10757], "acquaintance", "知人", [
                        [955, "acquainted", "知り合いである"]
                    ]
                ],
                ["friends and <acquaintances>", "知人", "ちじん"]
            ],
            [
                [623, [11192], "cognitive", "認知", [
                    [884, "cognition", "認識"]
                ]],
                ["children's <cognitive> abilities", "認知", "にんち"]
            ],
            [
                [624, [2147], "connotation", "言外の意味、含蓄", []],
                ['The word "home" has a <connotation> of security.', "言外の意味",
                    "げんがいのいみ"
                ]
            ],
            [
                [
                    625, [11538], "diagnosis", "診断", [
                        [1156, "diagnose", "～を診断する"]
                    ]
                ],
                ["the <diagnosis> of disease", "診断", "しんだん"]
            ],
            [
                [
                    626, [10346, 20], "ignore", "～を無視する", [
                        [11191, "ignorant", "無知な"]
                    ]
                ],
                ["<ignore> the doctor's advice", "無視する", "むしする"]
            ],
            [
                [627, [10397, 885], "knowledge", "知識", []],
                ["have little <knowledge> of English", "知識", "ちしき"]
            ],
            [
                [628, [10822], "noble", "高貴な", []],
                ["a person of <noble> birth", "高貴な", "こうきな"]
            ],
            [
                [629, [11665], "notable", "注目すべき", []],
                ["a <notable> exception", "注目すべき", "ちゅうもくすべき"]
            ],
            [
                [630, [12198], "note", "メモ、書いた、注意しなさい、有名だ、紙幣", []],
                ["take <notes> on what you hear", "メモ", "めも"],
                ["He <noted> that America is a big country.", "書いた", "かいた"],
                ["<Note> that the book is non-fiction.", "注意しなさい", "ちゅういしなさい"],
                ["He is <noted> for his intelligence.", "有名だ", "ゆうめいだ"],
                ["a ten-pound <note>", "紙幣", "しへい"]
            ],
            [
                [631, [10031], "notice", "～に気づく", []],
                ["<notice> the color change", "気付く", "きづく"]
            ],
            [
                [632, [10499, 866], "notion", "概念", []],
                ["the <notion> of freedom", "概念", "がいねん"]
            ],
            [
                [633, [11983, 1741], "notorious", "悪名高い", []],
                ["a <notorious> crime", "悪名高い", "あくめいたかい"]
            ],
            [
                [634, [10030, 883], "recognize", "～を認める", []],
                ["<recognize> the importance", "認める", "みとめる"]
            ]
        ],
        ["ment, memo, mati : 考える、心", [
                [635, [1899], "automatic", "自動の", []],
                ["an <automatic> washing machine", "自動の", "じどうの"]
            ],
            [
                [636, [555], "comment", "意見, 論評； (意見を)述べる", []],
                [
                    "The teacher's severe <comment> on the test made the student cry.",
                    "論評", "ろんぴょう"
                ]
            ],
            [
                [637, [11552], "dementia", "認知症", []],
                ["the symptoms of <dementia>", "認知症", "にんちしょう"]
            ],
            [
                [
                    638, [10612, 590], "demonstrate", "〈証明などが〉～を明らかに示す", []
                ],
                ["<demonstrate> that it is impossible", "示す", "しめす"]
            ],
            [
                [639, [10551, 1653], "mental", "精神の", []],
                ["a <mental> illness", "精神の", "せいしんの"]
            ],
            [
                [640, [10060, 542], "mention", "～について述べる", []],
                ["Never <mention> it again.", "口にする", "くちにする"]
            ],
            [
                [641, [12066], "mind", "いやで、人々", []],
                ["I don't <mind> walking.", "いやで", "いやで"],
                ["talented <minds>", "人々", "ひとびと"]
            ],
            [
                [642, [11477], "monument", "記念碑", []],
                ["a historical <monument>", "記念碑", "きねんひ"]
            ],
            [
                [643, [12107], "remember", "よろしく伝えて、忘れずに", []],
                ["Please <remember> me to your wife.", "よろしく伝えて", "よろしくつたえて"],
                ["<remember> to lock the door", "忘れずに", "わすれずに"]
            ],
            [
                [644, [10092, 905], "remind", "AにBを思い出させる", []],
                ["<remind> him of the promise", "思い出させる", "おもいださせる"]
            ],
            [
                [645, [11704], "summon", "呼ぶ", []],
                ["<summon> the police", "呼ぶ", "よぶ"]
            ]
        ],
        ["reason, ratio : 理由", [
                [646, [915], "birthrate", "出生率", []],
                ["<Birthrates> are decreasing in most developed countries.",
                    "出生率", "しゅっしょうりつ"
                ]
            ],
            [
                [647, [10184, 1448], "rate", "割合、速度", []],
                ["at the <rate> of 40% a year", "割合", "わりあい"]
            ],
            [
                [648, [11494, 1450], "ratio", "比率", []],
                ["a <ratio> of 10 to 1", "比率", "ひりつ"]
            ],
            [
                [649, [11155, 862], "rational", "理性的な", []],
                ["<rational> thought", "理性的な", "りせいてきな"]
            ],
            [
                [
                    650, [12072, 863], "reason", "推理する、理性", [
                        [10292, "reasonable", "理にかなった"]
                    ]
                ],
                ["the ability to <reason>", "推理する", "すいりする"],
                ["He lost his <reason>.", "理性", "りせい"]
            ],
            [
                [
                    651, [10292], "reasonable", "理にかなった", [
                        [863, "reason", "理由、根拠； 理性； 論理的に考える"]
                    ]
                ],
                ["a <reasonable> explanation", "理にかなった", "りにかなった"]
            ]
        ],
        ["wis : 賢い", [
                [652, [11956], "wicked", "邪悪な", []],
                ["a <wicked> desire", "邪悪な", "じゃあくな"]
            ],
            [
                [653, [10937, 891], "wisdom", "知恵", []],
                ["knowledge and <wisdom>", "知恵", "ちえ"]
            ],
            [
                [654, [11517, 895], "wit", "機知", []],
                ["a conversation full of <wit>", "機知", "きち"]
            ],
            [
                [655, [11799, 1220], "witch", "魔女", []],
                ["an evil <witch>", "魔女", "まじょ"]
            ],
            [
                [656, [10725, 787], "witness", "証人、目撃者", []],
                ["a <witness> to the accident", "目撃者", "もくげきしゃ"]
            ]
        ],
        ["read : 解決する", [
                [657, [11357, 1302], "dread", "恐れる", []],
                ["<dread> going to the dentist", "恐れる", "おそれる"]
            ],
            [
                [658, [11895], "riddle", "謎", []],
                ["solve a <riddle>", "謎", "なぞ"]
            ]
        ],
        ["psych : 心", [
                [
                    659, [11886], "psychiatrist", "精神科医", [
                        [2117, "psychiatric", "精神医学の"]
                    ]
                ],
                ["psychologists and <psychiatrists>", "精神科医", "せいしんかい"]
            ],
            [
                [660, [10993, 532], "psychology", "心理学", []],
                ["study social <psychology>", "心理学", "しんりがく"]
            ]
        ],
        ["sophy : 知", [
                [661, [10997, 897], "philosophy", "哲学", []],
                ["his <philosophy> of life", "哲学", "てつがく"]
            ],
            [
                [662, [10816, 1731], "sophisticated", "高度な", []],
                ["<sophisticated> computer technology", "高度な", "こうどな"]
            ],
            [
                [663, [1866], "sophomore", "(高校・大学の)二年生", []],
                ["a <sophomore> in college", "2年生", "にねんせい"]
            ]
        ],
        ["sci : 知る", [
                [664, [11471, 882], "conscience", "良心", []],
                ["Follow your <conscience>.", "良心", "りょうしん"]
            ],
            [
                [665, [10287, 881], "conscious", "意識している", []],
                ["health-<conscious> Americans", "意識する", "いしきする"]
            ]
        ]
    ],
    ["感情", ["gree, grat : 喜び", [
                [666, [12096, 606], "agree", "同意する、同じ考えである", []],
                ["<agree> to his proposal", "同意する", "どういする"],
                ["I <agree> with you.", "同じ考えである", "おなじかんがえである"]
            ],
            [
                [667, [11226, 984], "congratulate", "祝福する", []],
                ["<congratulate> you on your success", "祝福する", "しゅくふくする"]
            ],
            [
                [668, [11550], "grace", "優雅さ", []],
                ["the <grace> of her movements", "優雅さ", "ゆうがさ"]
            ],
            [
                [669, [11163, 985], "grateful", "感謝している", []],
                ["I'm <grateful> for your help.", "感謝している", "かんしゃしている"]
            ],
            [
                [670, [755], "gratify", "喜ばせる", []],
                ["a <gratifying> result", "満足させる", "まんぞくさせる"]
            ],
            [
                [671, [987], "gratitude", "感謝", []],
                ["She expressed her <gratitude> to him.", "感謝", "かんしゃ"]
            ]
        ],
        ["plea : 喜び", [
                [672, [11778], "plead", "嘆願する", []],
                ["<plead> with her to come back", "嘆願する", "たんがんする"]
            ],
            [
                [673, [10279], "pleasant", "楽しい", []],
                ["a <pleasant> experience", "楽しい", "たのしい"]
            ]
        ],
        ["delic : 楽しませる", [
                [674, [10802, 1755], "delicate", "繊細な、微妙で難しい", []],
                ["the <delicate> balance of nature", "微妙な", "びみょうな"]
            ],
            [
                [675, [10237, 753], "delight", "大喜び", []],
                ["give a cry of <delight>", "喜び", "よろこび"]
            ]
        ],
        ["joy : 喜び", [
                [676, [11560], "jewelry", "宝石", []],
                ["a <jewelry> store", "宝石", "ほうせき"]
            ],
            [
                [677, [11709, 754], "rejoice", "喜ぶ", []],
                ["<rejoice> in the success", "喜ぶ", "よろこぶ"]
            ]
        ],
        ["gret : 嘆き悲しむ", [
                [678, [10870, 1420], "greet", "～にあいさつする", []],
                ["<greet> people with a smile", "あいさつする", "あいさつする"]
            ],
            [
                [679, [10105, 458], "regret", "～を後悔する", []],
                ["<regret> leaving home", "後悔する", "こうかいする"]
            ]
        ]
    ],
    ["恐怖・安心・痛み", ["eas : 安らぎ(easy)", [
                [680, [1145], "disease", "病気", []],
                ["a contagious <disease>", "病", "やまい"]
            ],
            [
                [681, [11627, 1742], "uneasy", "不安な", []],
                ["feel <uneasy> about the future", "不安な", "ふあんな"]
            ]
        ],
        ["mir : 驚く", [
                [682, [10114, 988], "admire", "～に感心する", []],
                ["<admire> her work", "感嘆する", "かんたんする"]
            ],
            [
                [
                    683, [11338], "marvelous", "驚くべき", [
                        [2074, "marvel", "(～に)驚く、驚き(at～)； 驚き"]
                    ]
                ],
                ["a <marvelous> record", "驚くべき", "おどろくべき"]
            ]
        ],
        ["path, pass : 患う", [
                [684, [750], "compassion", "同情、あわれみ", []],
                ["Susan lent money to her ex-husband out of <compassion>.",
                    "同情", "どうじょう"
                ]
            ],
            [
                [685, [12002, 511], "compatible", "適合する", []],
                ["be <compatible> with their values", "適合する", "てきごうする"]
            ],
            [
                [686, [11873, 960], "empathy", "共感", []],
                ["<empathy> for others", "共感", "きょうかん"]
            ],
            [
                [687, [11023, 749], "passion", "情熱", []],
                ["love and <passion>", "情熱", "じょうねつ"]
            ],
            [
                [688, [10820, 751], "passive", "受動的な、消極的な", []],
                ["a <passive> attitude", "消極的な", "しょうきょくてきな"]
            ],
            [
                [689, [10205, 1154], "patient", "患者、忍耐強い", []],
                ["a doctor and a <patient>", "患者", "かんじゃ"]
            ],
            [
                [690, [10946, 959], "sympathy", "同情", []],
                ["feel <sympathy> for the victim", "同情", "どうじょう"]
            ]
        ],
        ["sense, sent : 感じる", [
                [691, [11465, 2088], "consensus", "合意", []],
                ["reach <consensus> on the issue", "合意", "ごうい"]
            ],
            [
                [692, [11579, 507], "consent", "同意", []],
                ["marry without parental <consent>", "同意", "どうい"]
            ],
            [
                [693, [11378, 759], "resent", "腹を立てる", []],
                ["<resent> being called foreigners", "腹を立てる", "はらをたてる"]
            ],
            [
                [694, [11613, 736], "scent", "香り", []],
                ["the sweet <scent> of roses", "香り", "かおり"]
            ],
            [
                [695, [11311, 724], "sensation", "感覚、感じ", []],
                ["the <sensation> of flying", "感覚", "かんかく"]
            ],
            [
                [696, [12048, 721], "sense", "意味、正気", []],
                ["In a <sense>, it is right.", "意味", "いみ"],
                ["He came to his <senses>.", "正気", "しょうき"]
            ],
            [
                [697, [723], "sensible", "分別のある、賢明な", []],
                ["It was <sensible> of her to bring an umbrella.", "賢明だった",
                    "けんめいだった"
                ]
            ],
            [
                [698, [10561, 722], "sensitive", "敏感な", []],
                ["Her skin is <sensitive> to sunlight.", "敏感だ", "びんかんだ"]
            ],
            [
                [699, [12204, 803], "sentence", "判決", []],
                ["a death <sentence>", "判決", "はんけつ"]
            ],
            [
                [700, [11497], "sentiment", "感情", []],
                ["public <sentiment> against slavery", "感情", "かんじょう"]
            ]
        ],
        ["terri : 驚かす(terror)", [
                [701, [805], "deter", "抑止する", []],
                ["<deter> crime", "抑止する", "よくしする"]
            ],
            [
                [
                    702, [10539], "terrible", "ひどい", [
                        [1786, "terror", "恐怖"],
                        [11954, "terrific", "すばらしい"]
                    ]
                ],
                ["a <terrible> accident", "ひどい", "ひどい"]
            ]
        ],
        ["trem : 震える", [
                [703, [11414, 1697], "tremble", "震える", []],
                ["<tremble> with fear", "ふるえる", "ふるえる"]
            ],
            [
                [704, [11138, 1430], "tremendous", "とてつもない", []],
                ["a <tremendous> amount of energy", "とてつもない", "とてつもない"]
            ]
        ],
        ["sor : 痛み", [
                [705, [11645, 1149], "sore", "痛い", []],
                ["have a <sore> throat", "痛い", "いたい"]
            ],
            [
                [706, [11008, 763], "sorrow", "悲しみ", []],
                ["joy and <sorrow>", "悲しみ", "かなしみ"]
            ]
        ],
        ["scri : 悲鳴をあげる", [
                [707, [10909], "screaming", "悲鳴をあげる", []],
                ["a girl <screaming> for help", "悲鳴をあげる", "ひめいをあげる"]
            ],
            [
                [708, [1720], "shriek", "金切り声を上げる、叫ぶ", []],
                ["She <shrieked> whenever she saw a snake.", "叫んだ", "さけんだ"]
            ]
        ]
    ],
    ["時間", ["age, eter : 年、長い時間", [
                [709, [10302], "aged", "年老いた", [
                    [267, "age", "年齢, 時代"]
                ]],
                ["his <aged> parents", "年老いた", "としおいた"]
            ],
            [
                [710, [11662, 251], "eternal", "永遠の", []],
                ["the hope of <eternal> life", "永遠の", "えいえんの"]
            ]
        ],
        ["journ, day : 日", [
                [711, [1075], "Diet", "国会、議会", []],
                ["an ordinary session of the Japanese <Diet>", "国会", "こっかい"]
            ],
            [
                [712, [10719, 1346], "dawn", "夜明け", []],
                ["leave home at <dawn>", "夜明け", "よあけ"]
            ],
            [
                [713, [12155, 1383], "diet", "", []],
                ["an ordinary session of the Japanese <Diet>", "国会", "こっかい"]
            ]
        ],
        ["night : 夜", [
                [714, [11543], "nightmare", "悪夢", []],
                ["have a <nightmare>", "悪夢", "あくむ"]
            ],
            [
                [715, [10598], "overnight", "一晩", []],
                ["stay <overnight> in his house", "一晩", "ひとばん"]
            ]
        ],
        ["tempo : 時間", [
                [
                    716, [11393], "contemplate", "考える", [
                        [900, "contemplation", "熟考、沈思"]
                    ]
                ],
                ["<contemplate> marrying him", "考える", "かんがえる"]
            ],
            [
                [717, [10795, 249], "contemporary", "現代の", []],
                ["<contemporary> Japanese society", "現代の", "げんだいの"]
            ],
            [
                [718, [1426], "temperate", "適度の、節度のある； 穏やかな", []],
                ["a <temperate> climate", "温暖な", "おんだんな"]
            ],
            [
                [719, [10459, 1268], "temperature", "気温", []],
                ["the average <temperature> in Paris", "気温", "きおん"]
            ],
            [
                [720, [1214], "temple", "寺院、神殿", []],
                [
                    "Kyoto attracts tourists because of its many old shrines and <temples>.",
                    "寺院", "じいん"
                ]
            ],
            [
                [721, [10569, 248], "temporary", "一時的な", []],
                ["<temporary> loss of memory", "一時的な", "いちじてきな"]
            ]
        ],
        ["tid : 時(time)", [
                [722, [10790], "tide", "潮流、潮の干満", []],
                ["swim against the <tide>", "潮流", "ちょうりゅう"]
            ],
            [
                [723, [11981, 1777], "tidy", "きちんと", []],
                ["keep the room <tidy>", "きちんと", "きちんと"]
            ]
        ],
        ["annu : 年", [
                [724, [11470, 273], "anniversary", "記念日", []],
                ["celebrate their wedding <anniversary>", "記念日", "きねんび"]
            ],
            [
                [725, [10796, 272], "annual", "年に１度の、１年間の", []],
                ["his <annual> income", "年", "ねん"]
            ]
        ]
    ],
    ["時間の流れ", ["arch : 最初の", [
                [
                    726, [11600], "archaeologist", "考古学者", [
                        [1940, "archaeology", "考古学"]
                    ]
                ],
                ["bones found by an <archaeologist>", "考古学者", "こうこがくしゃ"]
            ],
            [
                [727, [11022, 51], "architecture", "建築", []],
                ["study modern <architecture>", "建築", "けんちく"]
            ],
            [
                [728, [11831, 1233], "hierarchy", "階級制度", []],
                ["the top of the <hierarchy>", "階級制度", "かいきゅうせいど"]
            ],
            [
                [
                    729, [11826], "monarch", "君主、皇帝", [
                        [1051, "monarchy", "君主政治"]
                    ]
                ],
                ["the British <monarch>", "君主", "くんしゅ"]
            ]
        ],
        ["fin : 終わる", [
                [
                    730, [10883, 36], "define", "定義する", [
                        [10594, "definitely", "絶対"]
                    ]
                ],
                ["<define> s day as twenty-four hours", "定義する", "ていぎする"]
            ],
            [
                [
                    731, [10555], "financial", "財政的な", [
                        [296, "finance", "財政, 資金, 融資"]
                    ]
                ],
                ["<financial> support from the US", "財政的", "ざいせいてき"]
            ],
            [
                [
                    732, [12105, 1901], "fine", "罰金、罰金を科さ、細かい", [
                        [11205, "confine", "限定する"],
                        [11269, "refine", "洗練する、磨きをかける"]
                    ]
                ],
                ["the <fine> for speeding", "罰金", "ばっきん"],
                ["be <fined> $60", "罰金を科さ", "ばっきんをかさ"],
                ["<fine> sand on the beach", "細かい", "こまかい"]
            ],
            [
                [733, [11636, 826], "infinite", "無限の", []],
                ["an <infinite> number of stars", "無限の", "むげんの"]
            ]
        ],
        ["heri : 受け継ぐ", [
                [734, [11796, 934], "heir", "相続人", []],
                ["the <heir> to a fortune", "相続人", "そうぞくにん"]
            ],
            [
                [735, [11906, 2134], "heredity", "遺伝", []],
                ["Mendel's laws of <heredity>", "遺伝", "いでん"]
            ],
            [
                [736, [11059, 935], "heritage", "遺産", []],
                ["Japanese cultural <heritage>", "遺産", "いさん"]
            ],
            [
                [737, [10896, 933], "inherit", "～を受け継ぐ", []],
                ["<inherit> genes from our parents", "受け継ぐ", "うけつぐ"]
            ]
        ],
        ["late : 遅い", [
                [738, [10133, 287], "delay", "～を遅らせる", []],
                ["<delay> his arrival", "遅らせる", "おくらせる"]
            ],
            [
                [739, [12031], "last", "続いた、待つ、最も、最近", []],
                ["The war <lasted> four years.", "続いた", "つづいた"],
                ["Our food will <last> a week.", "待つ", "まつ"],
                ["the <last> man  who  would tell  a lie", "最も", "もっとも"],
                ["He's moved twice in the <last> year.", "最近", "さいきん"]
            ],
            [
                [740, [12187], "late", "終わりごろ、故", []],
                ["in his <late> thirties", "終わりごろ", "おわりごろ"],
                ["the <late> Mr.Ford", "故", "こ"]
            ],
            [
                [741, [10846], "lately", "最近", []],
                ["Have you seen him <lately>?", "最近", "さいきん"]
            ],
            [
                [742, [10576], "latest", "最新の", []],
                ["the <latest> news from China", "最新の", "さいしんの"]
            ],
            [
                [743, [10817], "latter", "後者の", []],
                ["I have a dog and a cat. The <latter> is bigger.", "後者の",
                    "こうしゃの"
                ]
            ],
            [
                [744, [12027], "lest", "～しないように", []],
                ["He wrote it down <lest> he forget.", "ないように", "ないように"]
            ]
        ],
        ["new, nov : 新しい", [
                [745, [11098, 1878], "innovation", "革新", []],
                ["technological <innovation>", "革新", "かくしん"]
            ],
            [
                [
                    746, [11847], "novelty", "目新しさ", [
                        [1879, "novel", "小説； 斬新な、新奇な"]
                    ]
                ],
                ["the quest for <novelty>", "目新しさ", "めあたらしさ"]
            ]
        ],
        ["prim : 第一の", [
                [747, [11534, 1937], "primate", "霊長類", []],
                ["humans and other <primates>", "霊長類", "れいちょうるい"]
            ],
            [
                [
                    748, [10811], "prime", "最も重要な、主要な", [
                        [23, "primary", "第1の, 主要な"]
                    ]
                ],
                ["the <prime> cause", "主要な", "しゅような"]
            ],
            [
                [749, [10570, 294], "primitive", "原始的な", []],
                ["a <primitive> society", "原始的な", "げんしてきな"]
            ],
            [
                [750, [10547], "principal", "主要な", []],
                ["the <principal> cities of Europe", "主要な", "しゅような"]
            ],
            [
                [751, [10218, 1043], "principle", "原理、原則", []],
                ["the <principle> of free trade", "原則", "げんそく"]
            ],
            [
                [752, [11180, 281], "prior", "前の", [
                    [11001, "priority", "優先"]
                ]],
                ["the period <prior> to the war", "前の", "まえの"]
            ]
        ],
        ["seque, sec, sue : 続く", [
                [
                    753, [10519, 8], "consequence", "結果", [
                        [11278, "sequence", "連続、順番、順序"]
                    ]
                ],
                ["have serious <consequences>", "結果", "けっか"]
            ],
            [
                [
                    754, [11412, 217], "execute", "処刑する", [
                        [10981, "executive", "執行責任者"]
                    ]
                ],
                ["<execute> the murderer", "処刑する", "しょけいする"]
            ],
            [
                [755, [12000, 2013], "intrinsic", "本来の", []],
                ["the <intrinsic> value of gold", "本来の", "ほんらいの"]
            ],
            [
                [756, [10611, 211], "pursue", "～を追求する", []],
                ["<pursue> the American Dream", "追い求める", "おいもとめる"]
            ],
            [
                [757, [1917], "second", "二番目の、秒、(-s)おかわり", []],
                ["Please hold on for a <second>.", "ちょっと", "ちょっと"]
            ],
            [
                [758, [12008], "secondhand", "間接", []],
                ["<secondhand> smoke", "間接", "かんせつ"]
            ],
            [
                [759, [11640, 2129], "subsequent", "次に起こる", []],
                ["prepare for <subsequent> events", "次に起こる", "つぎにおこる"]
            ],
            [
                [760, [11769, 1301], "sue", "訴える", []],
                ["<sue> a doctor", "訴える", "うったえる"]
            ],
            [
                [761, [10080, 1380], "suit", "～に合う", []],
                ["The job <suits> you.", "合っている", "あっている"]
            ]
        ],
        ["limi : 境界(limit)", [
                [762, [10607, 174], "eliminate", "〈不要なもの〉を除去する", []],
                ["<eliminate> the need for paper", "無くす", "なくす"]
            ],
            [
                [763, [2125], "preliminary", "予備の、事前の", []],
                ["a <preliminary> election [experiment]", "予備の", "よびの"]
            ]
        ],
        ["dura : 継続する", [
                [764, [975], "durable", "耐久性のある", [
                    [11880, "duration", "期間"]
                ]],
                ["The shoes are <durable> and long-lasting.", "耐久性がある",
                    "たいきゅうせいがある"
                ]
            ],
            [
                [765, [10865, 974], "endure", "～に耐える", []],
                ["<endure> great pain", "耐える", "たえる"]
            ]
        ],
        ["prot : 最初の", [
                [766, [11099], "protein", "タンパク質", []],
                ["high-<protein> food", "タンパク質", "たんぱくしつ"]
            ],
            [
                [767, [11929], "protocol", "議定書", []],
                ["the Kyoto <Protocol>", "議定書", "ぎていしょ"]
            ]
        ],
        ["term : 終わる", [
                [768, [10342, 1019], "determine", "～を決定する", []],
                ["<determine> your future", "決定する", "けっていする"]
            ],
            [
                [769, [12041, 422], "term", "用語、期、仲", []],
                ["use scientific <terms>", "用語", "ようご"],
                ["long-<term> planning", "期", "き"],
                ["I am on good <terms> with him.", "仲", "なか"]
            ],
            [
                [770, [10789, 1443], "terminal", "終点", []],
                ["a railroad <terminal>", "終点", "しゅうてん"]
            ]
        ]
    ],
    ["変化", ["meta : 変化", [
                [771, [11582, 564], "metaphor", "比喩", []],
                ['the <metaphor> of the "melting pot"', "比喩", "ひゆ"]
            ],
            [
                [772, [10417, 580], "method", "方法", []],
                ["a <method> of teaching English", "方法", "ほうほう"]
            ]
        ],
        ["temper : 調節する", [
                [773, [10745, 752], "temper", "気性", [
                    [11817, "temperament", "気質"]
                ]],
                ["have a quick <temper>", "気性", "きしょう"]
            ],
            [
                [774, [1426], "temperate", "適度の、節度のある； 穏やかな", []],
                ["a <temperate> climate", "温暖な", "おんだんな"]
            ],
            [
                [775, [10459, 1268], "temperature", "気温", []],
                ["the average <temperature> in Paris", "気温", "きおん"]
            ]
        ]
    ],
    ["形", ["circu : 輪", [
                [
                    776, [10772], "circulation", "循環、流通、発行部数", [
                        [1482, "circulate", "循環する； ～を循環させる； 流通させる"]
                    ]
                ],
                ["increase blood <circulation>", "循環", "じゅんかん"]
            ],
            [
                [777, [10977, 1029], "circumstance", "状況", []],
                ["under any <circumstances>", "状況", "じょうきょう"]
            ],
            [
                [778, [11480], "encyclopedia", "百科事典", []],
                ["a 20-volume <encyclopedia>", "百科事典", "ひゃっかじてん"]
            ],
            [
                [779, [10411, 575], "research", "研究", []],
                ["scientific <research>", "研究", "けんきゅう"]
            ],
            [
                [780, [10055, 366], "search", "～を捜す", []],
                ["<search> for the stolen car", "捜す", "さがす"]
            ]
        ],
        ["cru : 十字", [
                [781, [1919], "cross", "～を横切る； 機嫌の悪い", []],
                ["Don't be so <cross> with me.", "怒ら", "おこら"]
            ],
            [
                [782, [11159, 6], "crucial", "重大な", []],
                ["play a <crucial> role", "重大な", "じゅうだいな"]
            ]
        ],
        ["fic : 形づくる", [
                [783, [10467], "fiction", "小説", []],
                ["Truth is stranger than <fiction>", "小説", "しょうせつ"]
            ],
            [
                [784, [12051, 423], "figure", "数字、人物、スタイル、思う", []],
                ["Tell me the exact <figures>.", "数字", "すうじ"],
                ["historical <figures>", "人物", "じんぶつ"],
                ["She has a beautiful <figure>.", "スタイル", "すたいる"],
                ["I <figure> you are busy.", "思う", "おもう"]
            ]
        ],
        ["form : 形", [
                [785, [11204, 510], "conform", "従う", []],
                ["<conform> to the rules", "従う", "したがう"]
            ],
            [
                [786, [12078], "form", "作る、用紙、一種", []],
                ["<form> a new company", "作る", "つくる"],
                ["fill out the application <form>", "用紙", "ようし"],
                ["Knowledge is a <form> of power.", "一種", "いっしゅ"]
            ],
            [
                [787, [11283, 2015], "formula", "式、公式、方法、秘訣、解決策", []],
                ["a mathematical <formula>", "式", "しき"]
            ],
            [
                [788, [10367, 904], "inform", "～に知らせる", []],
                ["<inform> him of his son's success", "知らせる", "しらせる"]
            ],
            [
                [789, [10065, 218], "perform", "～を行う、～を遂行する", []],
                ["<perform> the job", "遂行する", "すいこうする"]
            ],
            [
                [790, [10959, 1047], "reform", "改革", []],
                ["political <reform>", "改革", "かいかく"]
            ],
            [
                [791, [10856, 663], "transform", "変える", []],
                ["<transform> food into energy", "変える", "かえる"]
            ]
        ],
        ["mark : 印", [
                [792, [11551], "landmark", "名所", []],
                ["visit some Paris <landmarks>", "名所", "めいしょ"]
            ],
            [
                [793, [11577, 379], "margin", "差", []],
                ["win by a wide <margin>", "差", "さ"]
            ],
            [
                [794, [1871], "mark", "成績； 印、指標； ～を印す", []],
                ["get good <marks> on [in] an exam", "成績", "せいせき"]
            ],
            [
                [795, [1437], "marked", "著しい、顕著な", []],
                ["a <marked> difference", "顕著な", "けんちょな"]
            ],
            [
                [
                    796, [10138, 554], "remark", "述べる", [
                        [10299, "remarkable", "すばらしい"]
                    ]
                ],
                ["<remark> that he is kind", "述べる", "のべる"]
            ]
        ],
        ["mod : 型", [
                [797, [11389, 1403], "accommodate", "収容できる", []],
                ["can <accommodate> 800 people", "収容できる", "しゅうようできる"]
            ],
            [
                [798, [11564, 1130], "commodity", "商品", []],
                ["an export <commodity>", "商品", "しょうひん"]
            ],
            [
                [799, [1849], "mode", "様式、方式、形態", []],
                ["mode of <life>", "様式", "ようしき"]
            ],
            [
                [800, [11181, 1425], "moderate", "適度な", []],
                ["do <moderate> exercise", "適度な", "てきどな"]
            ],
            [
                [801, [1951], "modern", "現代の", []],
                [
                    "Obesity, divorce and higher suicide rates are side effects of <modern>ization.",
                    "現代の", "げんだいの"
                ]
            ],
            [
                [802, [10813], "modest", "控えめな、謙虚な、わずかな", []],
                ["a <modest> dress", "控えめな", "ひかえめな"]
            ],
            [
                [803, [10903, 1496], "modify", "～を修正する", []],
                ["<modify> the plan", "修正する", "しゅうせいする"]
            ],
            [
                [804, [11388, 117], "mold", "作る", []],
                ["<mold> plastic products", "作る", "つくる"]
            ],
            [
                [805, [1799], "mood", "気分、雰囲気", []],
                ["talk with a relaxed <mood>", "気分", "きぶん"]
            ]
        ],
        ["norm : 規格", [
                [806, [11074, 601], "astronomy", "天文学", []],
                ["Galileo's <astronomy>", "天文学", "てんもんがく"]
            ],
            [
                [
                    807, [11870, 2138], "autonomy", "自主性", [
                        [11690, "autonomous", "自動運転"]
                    ]
                ],
                ["patient <autonomy>", "自主性", "じしゅせい"]
            ],
            [
                [808, [10197, 295], "economy", "経済", []],
                ["the market <economy>", "経済", "けいざい"]
            ],
            [
                [809, [10556, 835], "enormous", "莫大な", []],
                ["an <enormous> amount of damage", "ばく大な", "ばくだいな"]
            ],
            [
                [810, [11286, 1009], "norm", "規範", []],
                ["the socially accepted <norm>", "規範", "きはん"]
            ]
        ],
        ["sign : 印", [
                [811, [10667, 214], "assign", "〈仕事・物〉を割り当てる", []],
                ["<assign> work to each member", "割り当てる", "わりあてる"]
            ],
            [
                [812, [11227, 2066], "designate", "指定する", []],
                ["a <designated> smoking area", "指定された", "していされた"]
            ],
            [
                [813, [11203, 922], "resign", "辞職する", []],
                ["The president will <resign> soon.", "辞任する", "じにんする"]
            ],
            [
                [
                    814, [10185], "sign", "印、兆候", [
                        [1861, "sign up", "（～に）登録する(for)"]
                    ]
                ],
                ["a <sign> of spring", "きざし", "きざし"]
            ],
            [
                [
                    815, [10280], "significant", "重要な", [
                        [7, "significance", "重要性"]
                    ]
                ],
                ["a <significant> difference", "重要な", "じゅうような"]
            ]
        ],
        ["sphere : 球", [
                [816, [10233, 1248], "atmosphere", "大気、雰囲気", []],
                ["CO2 in the earth's <atmosphere>", "大気", "たいき"]
            ],
            [
                [
                    817, [11033, 1274], "hemisphere", "半球", [
                        [11277, "sphere", "領域、範囲"]
                    ]
                ],
                ["the southern <hemisphere>", "半球", "はんきゅう"]
            ]
        ],
        ["type : 型", [
                [
                    818, [10774, 869], "stereotype", "典型的なイメージ、類型、固定観念", []
                ],
                ["a <stereotype> of Americans", "型にはまったイメージ", "かたにはまったいめえじ"]
            ],
            [
                [819, [10545, 29], "typical", "典型的な", []],
                ["a <typical> American family", "典型的な", "てんけいてきな"]
            ]
        ],
        ["shape : 形", [
                [820, [10956, 1255], "landscape", "風景", []],
                ["<landscape> painting", "風景", "ふうけい"]
            ],
            [
                [821, [10415], "shape", "形", []],
                ["the <shape> of her nose", "形", "かたち"]
            ]
        ],
        ["ais : 軸", [
                [822, [11830, 1325], "aisle", "通路", []],
                ["walk down the <aisle>", "通路", "つうろ"]
            ],
            [
                [823, [2043], "axis", "軸", []],
                ["the horizontal [vertical] <axis>", "軸", "じく"]
            ]
        ],
        ["sat : 十分な", [
                [824, [11305, 306], "asset", "財産", []],
                ["a valuable <asset>", "財産", "ざいさん"]
            ],
            [
                [825, [10349, 459], "satisfy", "～を満たす", []],
                ["<satisfy> the needs of students", "満たす", "みたす"]
            ]
        ]
    ],
    ["数", ["cens : 数える", [
                [826, [2055], "censorship", "検閲", []],
                [
                    "When the war broke out, the press was placed under strict government <censorship>.",
                    "検閲", "けんえつ"
                ]
            ],
            [
                [827, [11858, 2054], "census", "国勢調査", []],
                ["take a <census> every ten years", "国勢調査", "こくせいちょうさ"]
            ]
        ],
        ["count : 数える", [
                [828, [12113, 411], "account", "占める、原因、説明する", []],
                ["Black people <account> for 10% of the population.", "占める",
                    "しめる"
                ],
                ["This <accounts> for the failure.", "原因だ", "げんいんだ"],
                ["<account> for the difference", "説明する", "せつめいする"]
            ],
            [
                [829, [12130, 10], "count", "重要な", []],
                ["That's what <counts>.", "重要な", "じゅうような"]
            ],
            [
                [830, [11687], "countless", "無数の", []],
                ["<countless> species of insects", "無数の", "むすうの"]
            ]
        ],
        ["dou, du : 二つ", [
                [831, [1869], "diploma", "(大学の)学位", []],
                ["proud moment receiving a <diploma>", "卒業証書", "そつぎょうしょうしょ"]
            ],
            [
                [832, [11657], "diplomatic", "外交の", [
                    [1067, "diplomat", "外交官"]
                ]],
                ["break off <diplomatic> relations", "外交", "がいこう"]
            ],
            [
                [833, [452], "doubt", "疑い、～を疑う", []],
                ["I <doubt> that she wrote this.", "疑う", "うたがう"]
            ],
            [
                [834, [822], "dual", "２つの、二重の", []],
                ["<Dual> citizenship is not permitted under Japanese law.",
                    "二重の", "にじゅうの"
                ]
            ],
            [
                [835, [823], "duplicate", "複製する", []],
                ["The DNA is <duplicated> every time a cell divides.", "複製される",
                    "ふくせいされる"
                ]
            ]
        ],
        ["milli : 千", [
                [836, [10478], "billion", "十億", []],
                ["8 <billion> people", "十億", "じゅうおく"]
            ],
            [
                [837, [11916], "millionaire", "百万長者", []],
                ["how to marry a <millionaire>", "百万長者", "ひゃくまんちょうじゃ"]
            ]
        ],
        ["mono : 一つの", [
                [
                    838, [11826], "monarch", "君主、皇帝", [
                        [1051, "monarchy", "君主政治"]
                    ]
                ],
                ["the British <monarch>", "君主", "くんしゅ"]
            ],
            [
                [839, [11851, 820], "monopoly", "独占", []],
                ["a <monopoly> on the tea market", "独占", "どくせん"]
            ],
            [
                [840, [11985, 819], "monotonous", "単調な", []],
                ["a <monotonous> school life", "単調な", "たんちょうな"]
            ]
        ],
        ["odd : 三（奇数）、残りの", [
                [841, [11133, 419], "odd", "おかしな", []],
                ["the <odd> couple", "おかしな", "おかしな"]
            ],
            [
                [842, [11487, 420], "odds", "可能性", []],
                ["the <odds> of successful treatment", "可能性", "かのうせい"]
            ]
        ],
        ["priv, prop : 単独の", [
                [843, [10548, 1428], "appropriate", "適切な", []],
                ["the most <appropriate> word", "適切な", "てきせつな"]
            ],
            [
                [844, [10652, 170], "deprive", "AからBを奪う", []],
                ["<deprive> him of the chance", "奪う", "うばう"]
            ],
            [
                [845, [10268, 942], "private", "個人の、私的な", []],
                ["her <private> life", "私", "し"]
            ],
            [
                [846, [10969, 632], "privilege", "特権", []],
                ["white <privilege>", "特権", "とっけん"]
            ],
            [
                [847, [10275, 1427], "proper", "適切な", []],
                ["the <proper> use of words", "適切な", "てきせつな"]
            ],
            [
                [848, [10234, 305], "property", "財産", []],
                ["private <property>", "財産", "ざいさん"]
            ]
        ],
        ["pute : 数える", [
                [849, [10952, 619], "dispute", "紛争", []],
                ["settle international <disputes>", "紛争", "ふんそう"]
            ],
            [
                [850, [11522], "pavement", "歩道", [
                    [1897, "pave", "～を舗装する"]
                ]],
                ["walk along the <pavement>", "歩道", "ほどう"]
            ],
            [
                [851, [10943, 483], "reputation", "評判", []],
                ["the restaurant's <reputation>", "評判", "ひょうばん"]
            ]
        ],
        ["solo : 単独の", [
                [852, [2127], "obsolete", "すたれた、時代遅れの", []],
                [
                    "Computer hardware becomes <obsolete> as soon as new models come out.",
                    "時代遅れに", "じだいおくれに"
                ]
            ],
            [
                [853, [11663, 816], "sole", "唯一の", []],
                ["the <sole> survivor", "唯一の", "ゆいいつの"]
            ],
            [
                [854, [11655], "solitary", "孤独な", [
                    [817, "solitude", "孤独"]
                ]],
                ["a <solitary> old man", "孤独な", "こどくな"]
            ],
            [
                [855, [817], "solitude", "孤独", [
                    [11655, "solitary", "孤独な"]
                ]],
                ["live in <solitude>", "孤独", "こどく"]
            ]
        ],
        ["uni : 一つの", [
                [856, [815], "reunion", "再開、同窓会", []],
                ["a school <reunion>", "同窓会", "どうそうかい"]
            ],
            [
                [857, [2087], "unanimous", "満場一致の", []],
                ["They finally reached a <unanimous> agreement on the agenda.",
                    "満場一致の", "まんじょういっちの"
                ]
            ],
            [
                [858, [812], "uniform", "一様な、均一の", []],
                ["These boxes are <uniform> in size and color.", "均一だ", "きんいつだ"]
            ],
            [
                [859, [811], "unify", "〜を統合する", []],
                [
                    "Some economists stress the needs to create a <unified> Asian currency.",
                    "統合された", "とうごうされた"
                ]
            ],
            [
                [860, [10947, 814], "union", "組合", []],
                ["a labor <union>", "組合", "くみあい"]
            ],
            [
                [861, [30], "unique", "(～に)特有の(to～), 独自の； 唯一の", []],
                ["This tofu burger is <unique> to this restaurant.", "独自の",
                    "どくじの"
                ]
            ],
            [
                [862, [10942], "unit", "単位", []],
                ["the family as a social <unit>", "単位", "たんい"]
            ],
            [
                [863, [10897, 810], "unite", "～を団結させる", []],
                ["<unite> the Arab world", "団結させる", "だんけつさせる"]
            ],
            [
                [864, [10510], "universe", "宇宙", [
                    [813, "universal", "普遍的な"]
                ]],
                ["stars in the <universe>", "宇宙", "うちゅう"]
            ]
        ],
        ["quarter : 四", [
                [865, [11504], "headquarters", "本部、本社", []],
                ["police <headquarters>", "本部", "ほんぶ"]
            ],
            [
                [866, [10230, 336], "quarter", "4分の1", []],
                ["the first <quarter> of this century", "4分の1", "よんぶんのいち"]
            ]
        ],
        ["dec : 十", [
                [867, [10430, 271], "decade", "10年", []],
                ["only a <decade> ago", "10年", "じゅうねん"]
            ],
            [
                [868, [11026], "dozen", "ダース", []],
                ["two <dozen> eggs", "ダース", "だあす"]
            ]
        ],
        ["number : 数", [
                [869, [11968, 825], "innumerable", "無数の", []],
                ["differ in <innumerable> ways", "無数の", "むすうの"]
            ],
            [
                [870, [11121, 824], "numerous", "たくさんの", []],
                ["<numerous> species of birds", "たくさんの", "たくさんの"]
            ]
        ],
        ["bi : 二つ", [
                [871, [10260], "bilingual", "二言語使用の", []],
                ["<bilingual> children", "二言語使用の", "にげんごしようの"]
            ],
            [
                [872, [10478], "billion", "十億", []],
                ["8 <billion> people", "十億", "じゅうおく"]
            ],
            [
                [873, [10132, 821], "combine", "～を結合させる", []],
                ["<combine> song and dance", "結合させる", "けつごうさせる"]
            ]
        ]
    ],
    ["存在・もの", ["board : 板", [
                [874, [12177, 473], "board", "乗り込む、委員会", []],
                ["<board> a plane", "乗り込む", "のりこむ"],
                ["the school <board>", "委員会", "いいんかい"]
            ],
            [
                [875, [10735, 342], "border", "国境地帯", []],
                ["cross the Russian <border>", "国境", "こっきょう"]
            ]
        ],
        ["main : 残る", [
                [876, [10571, 250], "permanent", "永久", []],
                ["<permanent> teeth", "永久", "えいきゅう"]
            ],
            [
                [
                    877, [10010], "remain", "ままでいる", [
                        [1641, "remain to do", "まだ～していない"]
                    ]
                ],
                ["<remain> silent", "ままでいる", "ままでいる"]
            ]
        ],
        ["quo, wh : どのくらい", [
                [878, [11561, 2097], "cue", "合図", []],
                ["read nonverbal <cues>", "合図", "あいず"]
            ],
            [
                [879, [10252, 827], "quantity", "量", []],
                ["large <quantities> of data", "量", "りょう"]
            ],
            [
                [880, [11353, 562], "quote", "引用する", []],
                ["<quote> the Bible", "引用する", "いんようする"]
            ],
            [
                [881, [10318, 1994], "somehow", "どういうわけか、なぜか", []],
                ["<Somehow> I feel lonely.", "なぜか", "なぜか"]
            ],
            [
                [882, [11195, 1993], "somewhat", "多少", []],
                ["<somewhat> better than last year", "多少", "たしょう"]
            ],
            [
                [883, [10852, 1983], "whereas", "～だが一方", []],
                ['The British say "lift," <whereas> Americans say "elevator."',
                    "が", "が"
                ]
            ],
            [
                [884, [10331], "whether", "～かどうか、～であろうとなかろうと", []],
                ["I don't know <whether> it is true or not.", "かどうか", "かどうか"]
            ]
        ],
        ["real : もの", [
                [
                    885, [10015], "realize", "～を悟る", [
                        [201, "real", "本当の, 本物の, 現実の"]
                    ]
                ],
                ["<realize> the error", "悟る", "さとる"]
            ],
            [
                [886, [11508, 1050], "republic", "共和国", []],
                ["the Republic of Ireland", "共和国", "きょうわこく"]
            ]
        ],
        ["sent, ent : 存在する", [
                [887, [11821, 2009], "entity", "存在", []],
                ["a child as a separate <entity>", "存在", "そんざい"]
            ],
            [
                [888, [10537, 4], "essential", "不可欠だ", []],
                ["Water is <essential> to life.", "不可欠だ", "ふかけつだ"]
            ],
            [
                [889, [12093, 311], "interest", "利益、利", []],
                ["protect workers' <interests>", "利益", "りえき"],
                ["lend money at high <interest> rates", "利", "り"]
            ],
            [
                [890, [10554, 233], "potential", "潜在的な", []],
                ["<potential> danger", "潜在的な", "せんざいてきな"]
            ],
            [
                [
                    891, [12080], "present", "現在の、現在、出席している、提示する、紹介する、与える", [
                        [260, "at present", "今のところは"]
                    ]
                ],
                ["my <present> address", "現在の", "げんざいの"],
                ["the <present> and future", "現在", "げんざい"],
                ["the people <present>", "出席している", "しゅっせきしている"],
                ["<present> a plan to the president", "提示する", "ていじする"],
                ["<present> Mr. Boyd to you", "紹介する", "しょうかいする"],
                ["<present> the winner with the prize", "与える", "あたえる"]
            ],
            [
                [892, [10068, 429], "represent", "～を表す", []],
                ["Words <represent> ideas.", "表す", "あらわす"]
            ]
        ],
        ["the : それ", [
                [893, [10590, 1975], "nevertheless", "それにもかかわらず", []],
                ["He is rich; <nevertheless> he is unhappy.", "それにもかかわらず",
                    "それにもかかわらず"
                ]
            ],
            [
                [894, [11695, 2005], "thereby", "そうすることで", []],
                ["He always tells the truth, <thereby> avoiding trouble.",
                    "そうすることで", "そうすることで"
                ]
            ],
            [
                [895, [10313], "therefore", "それゆえに", []],
                ["The car is small and <therefore> cheap.", "それゆえ", "それゆえ"]
            ],
            [
                [896, [10320, 1973], "thus", "それゆえ、そのように", []],
                ["This is smaller and <thus> cheaper.", "したがって", "したがって"]
            ]
        ],
        ["vail : 価値がある(value)", [
                [
                    897, [2085], "ambivalent", "矛盾する、相反する、どちらか決めかねて", []
                ],
                [
                    "Melinda is <ambivalent> about whether or not she should marry Tom.",
                    "矛盾する", "むじゅんする"
                ]
            ],
            [
                [898, [10259, 317], "available", "手に入る、利用できる", []],
                ["information <available> to everyone", "利用できる", "りようできる"]
            ],
            [
                [899, [10727, 515], "equivalent", "同等のもの、相当するもの", []],
                ["There's no English <equivalent> to haiku.", "相当するもの",
                    "そうとうするもの"
                ]
            ],
            [
                [900, [10906, 1005], "evaluate", "～を評価する", []],
                ["<evaluate> online information", "評価する", "ひょうかする"]
            ],
            [
                [901, [11255, 390], "prevail", "普及している、広まる", []],
                ["the <prevailing> view", "広まっている", "ひろまっている"]
            ],
            [
                [902, [11325, 1779], "valid", "妥当な、正当な", []],
                ["a <valid> reason for being late", "正当な", "せいとうな"]
            ],
            [
                [903, [10179, 1000], "value", "価値", []],
                ["put a high <value> on education", "価値", "かち"]
            ]
        ]
    ],
    ["大きさ・広さ・多さ", ["full : 満ちた", [
                [904, [10635, 240], "fulfill", "〈約束・夢など〉を果たす", []],
                ["<fulfill> the promise", "果たす", "はたす"]
            ],
            [
                [905, [1440], "fully", "全く、完全に", []],
                [
                    "I'm not sure I <fully> understand the meaning of the sentence.",
                    "完全に", "かんぜんに"
                ]
            ]
        ],
        ["groce : 野暮な、大きい", [
                [906, [11071, 1419], "grocery", "食料品", []],
                ["go to the <grocery> store", "食料品", "しょくりょうひん"]
            ],
            [
                [907, [11639, 1339], "gross", "総", []],
                ["the <gross> domestic product", "総", "そう"]
            ]
        ],
        ["mag : 大きい", [
                [908, [11635, 846], "magnificent", "すばらしい", []],
                ["a <magnificent> view", "すばらしい", "すばらしい"]
            ],
            [
                [
                    909, [12095, 842], "major", "主要な、専攻する", [
                        [10460, "majority", "大多数"]
                    ]
                ],
                ["a <major> problem", "主要な", "しゅような"],
                ["<major> in economics", "専攻する", "せんこうする"]
            ],
            [
                [910, [11790], "masterpiece", "傑作", []],
                ["<masterpieces> of French art", "傑作", "けっさく"]
            ],
            [
                [911, [2144], "maxim", "格言、原理", []],
                ['His favorite <maxim> is "Practice makes perfect."', "格言",
                    "かくげん"
                ]
            ],
            [
                [912, [844], "maximum", "最大", []],
                ["to the <maximum>", "最大", "さいだい"]
            ],
            [
                [913, [11500, 1084], "mayor", "市長", []],
                ["the New York City <mayor>", "市長", "しちょう"]
            ]
        ],
        ["min, micro : 小さな", [
                [
                    914, [1062], "administer", "～を管理する、運営する", [
                        [10762, "administration", "経営、行政"]
                    ]
                ],
                ["His father <administers> some companies.", "運営する", "うんえいする"]
            ],
            [
                [
                    915, [10762], "administration", "経営、行政", [
                        [1062, "administer", "～を管理する、運営する"]
                    ]
                ],
                ["business <administration>", "経営", "けいえい"]
            ],
            [
                [916, [10696, 847], "diminish", "減少する、衰える、～を減らす", []],
                ["His power <diminished>.", "衰えた", "おとろえた"]
            ],
            [
                [917, [11486], "microbe", "微生物", []],
                ["<microbes> in the soil", "微生物", "びせいぶつ"]
            ],
            [
                [918, [10815, 845], "minimum", "最小限の", []],
                ["<minimum> effort", "最小の", "さいしょうの"]
            ],
            [
                [919, [10249, 1066], "minister", "大臣", []],
                ["the Italian foreign <minister>", "大臣", "だいじん"]
            ],
            [
                [920, [1065], "ministry", "省庁", []],
                ["the <Ministry> of Foreign Affairs", "省庁", "しょうちょう"]
            ],
            [
                [921, [10544, 843], "minor", "小さい", []],
                ["a <minor> problem", "小さい", "ちいさい"]
            ],
            [
                [922, [12203, 1928], "minute", "細かい", []],
                ["<minute> differences", "細かい", "こまかい"]
            ]
        ],
        ["most : 大きな", [
                [923, [1982], "furthermore", "さらに", []],
                [
                    "The continuous rain flooded the river. <Furthermore> [Moreover], it caused a landslide.",
                    "さらに", "さらに"
                ]
            ],
            [
                [924, [10591, 1981], "moreover", "その上", []],
                ["He's kind; <moreover>, he's strong.", "その上", "そのうえ"]
            ],
            [
                [
                    925, [12062], "most", "たいていの、非常に", [
                        [1557, "make the most of", "～を最大限利用する"]
                    ]
                ],
                ["<Most> people think so.", "たいていの", "たいていの"],
                ["a <most> important point", "非常に", "ひじょうに"]
            ],
            [
                [926, [10596], "mostly", "大部分は", []],
                ["The class is <mostly> Japanese.", "大部分は", "だいぶぶんは"]
            ],
            [
                [927, [12010, 848], "utmost", "最も", []],
                ["be of the <utmost> importance", "最も", "もっとも"]
            ]
        ],
        ["vac, void : 空っぽ", [
                [928, [10338, 161], "avoid", "～を避ける", []],
                ["<avoid> making mistakes", "避ける", "さける"]
            ],
            [
                [929, [11239, 768], "devastate", "壊滅させる", []],
                ["a <devastating> effect on nature", "壊滅的な", "かいめつてきな"]
            ],
            [
                [930, [1463], "devoid", "(～が)欠けている(of)", []],
                ["His works are <devoid> of originality.", "欠ける", "かける"]
            ],
            [
                [931, [11740], "evacuate", "避難した", []],
                ["People were <evacuated> from the area.", "避難した", "ひなんした"]
            ],
            [
                [932, [11139, 938], "inevitable", "避けられない", []],
                ["Change is <inevitable>.", "避けられない", "さけられない"]
            ],
            [
                [933, [11670, 1468], "vacant", "空いている", []],
                ["sit down in a <vacant> seat", "空いている", "あいている"]
            ],
            [
                [934, [11891], "vacuum", "空白", []],
                ["fill the <vacuum>", "空白", "くうはく"]
            ],
            [
                [935, [10823, 1345], "vain", "むだな", []],
                ["make a <vain> effort", "むだな", "むだな"]
            ],
            [
                [936, [10924, 404], "vanish", "消える", []],
                ["<vanish> from sight", "消える", "きえる"]
            ],
            [
                [937, [11120, 833], "vast", "広大な", []],
                ["the <vast> land of Russia", "広大な", "こうだいな"]
            ]
        ],
        ["pan : 広げる", [
                [938, [10116, 119], "expand", "拡大する", []],
                ["<expand> the market", "拡大する", "かくだいする"]
            ],
            [
                [939, [11593, 1880], "patent", "特許", []],
                ["get a <patent> for a new invention", "特許", "とっきょ"]
            ]
        ],
        ["all : 全て", [
                [940, [10845, 859], "altogether", "完全に", []],
                ["disappear <altogether>", "完全に", "かんぜんに"]
            ],
            [
                [941, [10809, 860], "overall", "全面的な、全体的な", []],
                ["part of an <overall> plan", "全体的な", "ぜんたいてきな"]
            ]
        ],
        ["ga : 大きく口を開ける", [
                [942, [1789], "gap", "隔たり、差", []],
                [
                    "There is a wide <gap> between the demand and supply of goods.",
                    "隔たり", "へだたり"
                ]
            ],
            [
                [943, [11439, 1715], "yawn", "あくびをする", []],
                ["<yawn> when you are bored", "あくびをする", "あくびをする"]
            ]
        ],
        ["thum : 膨れる", [
                [944, [1681], "thigh", "大股", []],
                ["pulled a muscle in <thigh>", "太もも", "ふともも"]
            ],
            [
                [945, [11061, 1675], "thumb", "親指", []],
                ["the <thumb> of my left hand", "親指", "おやゆび"]
            ],
            [
                [946, [11556, 928], "tomb", "墓", []],
                ["the <tomb> of the unknown soldier", "墓", "はか"]
            ],
            [
                [947, [11878, 1164], "tumor", "腫瘍", []],
                ["have a brain <tumor>", "腫瘍", "しゅよう"]
            ]
        ]
    ],
    ["かたさ・重さ", ["firm, form : かたい", [
                [
                    948, [11757], "affirm", "断言する", [
                        [1734, "affirmative", "肯定の、積極的な"]
                    ]
                ],
                ["<affirm> that it is true", "断言する", "だんげんする"]
            ],
            [
                [
                    949, [10543], "comfortable", "快適な", [
                        [480, "comfort", "快適さ； ～を慰める, 元気づける"]
                    ]
                ],
                ["enjoy a <comfortable> life", "快適な", "かいてきな"]
            ],
            [
                [950, [10399, 234], "effort", "努力", []],
                ["make an <effort> to help him", "努力", "どりょく"]
            ],
            [
                [
                    951, [12128, 435], "firm", "会社、堅い", [
                        [10869, "confirm", "～を裏付ける"]
                    ]
                ],
                ["work for a big <firm>", "会社", "かいしゃ"],
                ["a <firm> belief", "堅い", "かたい"]
            ],
            [
                [
                    952, [10013, 142], "force", "～を強制する", [
                        [11232, "enforce", "施行する"],
                        [11436, "reinforce", "強める"]
                    ]
                ],
                ["be <forced> to work", "強制される", "きょうせいされる"]
            ]
        ],
        ["grav : 重い", [
                [953, [10787, 2041], "gravity", "重力", [
                    [11616, "grave", "重大な"]
                ]],
                ["zero <gravity> in space", "重力", "じゅうりょく"]
            ],
            [
                [954, [11570, 764], "grief", "悲しみ", []],
                ["feel deep <grief> over his death", "悲しみ", "かなしみ"]
            ]
        ],
        ["hard : かたい", [
                [955, [10583], "hardly", "ほとんど～ない", []],
                ["I <hardly> know Bill.", "ほとんど", "ほとんど"]
            ],
            [
                [956, [11520, 222], "hardship", "苦難", []],
                ["face economic <hardship>", "苦難", "くなん"]
            ],
            [
                [957, [10424, 1008], "standard", "水準", []],
                ["the <standard> of living", "水準", "すいじゅん"]
            ]
        ],
        ["lev : 軽くする", [
                [958, [2130], "alleviate", "～を軽くする、軽減する", []],
                [
                    "Maintaining good posture will help to <alleviate> your back pain.",
                    "軽減する", "けいげんする"
                ]
            ],
            [
                [959, [10827, 494], "relevant", "関連のある", []],
                ["be <relevant> to the question", "関係がある", "かんけいがある"]
            ],
            [
                [
                    960, [12176], "relief", "安心、救済、除去", [
                        [1498, "relieve", "～を解放する； 安心させる"]
                    ]
                ],
                ["breathe a sigh of <relief>", "安心", "あんしん"],
                ["<relief> from proverty", "救済", "きゅうさい"],
                ["<relief> from stress", "除去", "じょきょ"]
            ]
        ],
        ["ster : かたい", [
                [961, [10920, 730], "stare", "じっと見る", []],
                ["stop and <stare> at her", "じっと見る", "じっとみる"]
            ],
            [
                [962, [10659, 1392], "starve", "飢える", []],
                ["feed <starving> children", "飢えた", "うえた"]
            ],
            [
                [
                    963, [10774, 869], "stereotype", "典型的なイメージ、類型、固定観念", []
                ],
                ["a <stereotype> of Americans", "型にはまったイメージ", "かたにはまったいめえじ"]
            ],
            [
                [964, [1765], "stern", "厳格な、険しい", []],
                [
                    "Returning home at midnight, Sarah saw her father standing in front of the door with a <stern> look.",
                    "険しい", "けわしい"
                ]
            ],
            [
                [965, [11327, 1756], "stiff", "堅い", []],
                ["a <stiff> reply", "堅苦しい", "かたくるしい"]
            ],
            [
                [966, [10118, 235], "struggle", "苦闘する、もがく", []],
                ["<struggle> to get free", "もがく", "もがく"]
            ]
        ],
        ["sold : かたい", [
                [967, [1960], "soldier", "軍人、兵士", []],
                ["a wounded <soldier>", "兵士", "へいし"]
            ],
            [
                [968, [10579, 1183], "solid", "固体の", []],
                ["a <solid> state", "固体の", "こたいの"]
            ]
        ]
    ],
    ["その他の形容", ["char : かわいい", [
                [969, [10450, 1811], "charity", "慈善", []],
                ["give money to <charity>", "慈善", "じぜん"]
            ],
            [
                [970, [11245, 1003], "cherish", "胸に抱く", []],
                ["<cherish> a dream", "胸に抱く", "むねにだく"]
            ]
        ],
        ["mis : 悪い", [
                [971, [10739, 1312], "load", "荷物", []],
                ["carry a heavy <load>", "荷物", "にもつ"]
            ],
            [
                [972, [11900, 2176], "mischief", "いたずら", []],
                ["childhood <mischief>", "いたずら", "いたずら"]
            ],
            [
                [973, [11462], "misery", "悲惨さ", [
                    [10838, "miserable", "惨めな"]
                ]],
                ["the <misery> of war", "悲惨さ", "ひさんさ"]
            ],
            [
                [
                    974, [11339], "misleading", "誤解を招く", [
                        [469, "lead", "～を(…へ)導く(to…)； (～を)引き起こす(to～)"]
                    ]
                ],
                ["a <misleading> expression", "誤解を招く", "ごかいをまねく"]
            ],
            [
                [975, [12040], "miss", "乗り遅れる、恋しい、見逃す", []],
                ["<miss> the last train", "乗り遅れる", "のりおくれる"],
                ["I sometimes <miss> Japan.", "恋しい", "こいしい"],
                ["You can't <miss> it.", "見逃す", "みのがす"]
            ],
            [
                [
                    976, [10040], "mistake", "～を誤解する、まちがえる", [
                        [1999, "mistakenly", "間違って"]
                    ]
                ],
                ["<mistake> salt for sugar", "まちがえる", "まちがえる"]
            ]
        ],
        ["pale : 青白い", [
                [977, [2072], "appall", "～をぎょっとさせる", []],
                ["The results of the examination were <appalling>.", "ぎょっとさせる",
                    "ぎょっとさせる"
                ]
            ],
            [
                [978, [11112, 1670], "pale", "青白い", []],
                ["You look <pale>", "青白い", "あおじろい"]
            ],
            [
                [979, [11313, 1277], "pole", "棒、極", []],
                ["the North <Pole>", "極", "きょく"]
            ]
        ],
        ["short : 短い", [
                [
                    980, [10933], "shortage", "不足", [
                        [1465, "short of", "～が不足している"]
                    ]
                ],
                ["water <shortage>", "不足", "ふそく"]
            ],
            [
                [981, [11884], "shortcoming", "欠点", []],
                ["put up with her <shortcomings>", "欠点", "けってん"]
            ]
        ],
        ["wel : 良い", [
                [982, [925], "farewell", "お別れ", []],
                ["a <farewell> party", "お別れ", "おわかれ"]
            ],
            [
                [983, [10470, 302], "wealth", "富", []],
                ["<wealth> and power", "富", "とみ"]
            ],
            [
                [984, [10720, 1064], "welfare", "福祉", []],
                ["social <welfare>", "福祉", "ふくし"]
            ]
        ],
        ["focu : 濃い", [
                [985, [10097, 79], "focus", "焦点を合わせる", []],
                ["<focus> on the problem", "焦点を合わせる", "しょうてんをあわせる"]
            ],
            [
                [986, [10502, 1258], "fuel", "燃料", []],
                ["run out of <fuel>", "燃料", "ねんりょう"]
            ]
        ],
        ["bene : 良い", [
                [987, [10210, 313], "benefit", "利益", []],
                ["costs and <benefits> of the business", "利益", "りえき"]
            ],
            [
                [988, [2027], "benign", "良性の、害のない； 有益な", []],
                ["The tumor turned out to be <benign>.", "良性だ", "りょうせいだ"]
            ]
        ],
        ["good : 良い", [
                [989, [12173], "good", "かなり、利益", []],
                ["a <good> many people", "かなり", "かなり"],
                ["work for the public <good>", "利益", "りえき"]
            ],
            [
                [990, [10445], "goods", "商品", []],
                ["buying and selling <goods>", "商品", "しょうひん"]
            ]
        ]
    ],
    ["程度", ["a, less : 否定", [
                [991, [11984, 2126], "anonymous", "匿名の", []],
                ["an <anonymous> letter", "匿名の", "とくめいの"]
            ],
            [
                [992, [11687], "countless", "無数の", []],
                ["<countless> species of insects", "無数の", "むすうの"]
            ],
            [
                [993, [11659], "helpless", "無力な", []],
                ["a <helpless> baby", "無力な", "むりょくな"]
            ],
            [
                [994, [10801, 1815], "loose", "ゆるい", []],
                ["wear <loose> clothes", "ゆったりとした", "ゆったりとした"]
            ],
            [
                [995, [10590, 1975], "nevertheless", "それにもかかわらず", []],
                ["He is rich; <nevertheless> he is unhappy.", "それにもかかわらず",
                    "それにもかかわらず"
                ]
            ],
            [
                [996, [11974, 1748], "reckless", "無謀な", []],
                ["his <reckless> driving", "無謀な", "むぼうな"]
            ],
            [
                [
                    997, [11199], "regardless", "関係なく", [
                        [
                            410, "regard",
                            "～を(…と)みなす(as…), ～を尊重する, に敬意を払う； 尊敬, 敬意, 点"
                        ],
                        [11434, "disregard", "無視する"]
                    ]
                ],
                ["<regardless> of age", "関係なく", "かんけいなく"]
            ],
            [
                [998, [1746], "relentless", "執拗な、情け容赦のない", []],
                [
                    "The story depicts the <relentless> battle between two politicians.",
                    "執拗な", "しつような"
                ]
            ],
            [
                [999, [11649, 1745], "restless", "落ち着かない", []],
                ["spend a <restless> night", "落ち着かない", "おちつかない"]
            ],
            [
                [1000, [1747], "ruthless", "情け容赦のない、冷酷な", []],
                [
                    "Mr. Palmer is known as a <ruthless> lawyer who attacks without any mercy or compassion.",
                    "冷酷な", "れいこくな"
                ]
            ],
            [
                [1001, [10327], "unless", "～しない限り", []],
                ["I'll leave tomorrow <unless> it rains.", "ない限り", "ないかぎり"]
            ]
        ],
        ["sure : 確実な", [
                [1002, [10565, 47], "accurate", "正確な", []],
                ["<accurate> information", "正確な", "せいかくな"]
            ],
            [
                [1003, [10628, 671], "assure", "（～を）保証する", []],
                ["<assure> you that you will win", "保証する", "ほしょうする"]
            ],
            [
                [1004, [12084], "care", "気にし、世話", []],
                ["I don't <care> what you say.", "気にし", "きにし"],
                ["A baby requires a constant <care>.", "世話", "せわ"]
            ],
            [
                [1005, [10154, 1157], "cure", "～を治療する", []],
                ["<cure> him of his illness", "治す", "なおす"]
            ],
            [
                [1006, [10307, 489], "curious", "好奇心の強い", []],
                ["be <curious> about everything", "好奇心を持つ", "こうきしんをもつ"]
            ],
            [
                [1007, [10602, 673], "ensure", "～を確実にする", []],
                ["<ensure> the safety of drivers", "確保する", "かくほする"]
            ],
            [
                [1008, [10930, 674], "insurance", "保険", []],
                ["national health <insurance>", "保険", "ほけん"]
            ],
            [
                [1009, [11375, 672], "reassure", "安心させる", []],
                ["<reassure> the patient", "安心させる", "あんしんさせる"]
            ],
            [
                [1010, [10236, 1781], "security", "安全", []],
                ["national <security>", "安全", "あんぜん"]
            ]
        ],
        ["heal, hol : 完全な", [
                [1011, [10684, 1158], "heal", "〈けがなど〉を治す、治る", []],
                ["Time <heals> all wounds.", "いやす", "いやす"]
            ],
            [
                [1012, [1212], "holy", "神聖な", []],
                ["pilgrimage to <holy> sites", "神聖な", "しんせいな"]
            ]
        ],
        ["ultra : 極端な", [
                [1013, [11144, 1442], "ultimate", "究極の", []],
                ["the <ultimate> goal", "究極の", "きゅうきょくの"]
            ],
            [
                [1014, [11942], "ultraviolet", "紫外", []],
                ["harmful <ultraviolet> light", "紫外", "しがい"]
            ]
        ],
        ["neg, non : 否定", [
                [1015, [12145, 441], "deny", "否定する、与えない", []],
                ["<deny> the existence of God", "否定する", "ひていする"],
                ["<deny> them their civil rights", "与えない", "あたえない"]
            ],
            [
                [1016, [11694], "necessarily", "必ずしも", []],
                ["not <necessarily> true", "必ずしも", "かならずしも"]
            ],
            [
                [1017, [10296, 1733], "negative", "否定の", []],
                ["a <negative> answer", "否定的な", "ひていてきな"]
            ],
            [
                [1018, [10658, 19], "neglect", "～を無視する、怠る", []],
                ["<neglect> human rights", "無視する", "むしする"]
            ],
            [
                [1019, [11261, 622], "negotiate", "交渉する", []],
                ["<negotiate> for peace", "交渉をする", "こうしょうをする"]
            ]
        ]
    ],
    ["関係", ["apt : 適した", [
                [1020, [10129, 1377], "adapt", "～を適応させる、適応する", []],
                ["<adapt> to a new culture", "適応する", "てきおうする"]
            ],
            [
                [1021, [11322, 1349], "apt", "しがちである、する傾向がある", []],
                ["be <apt> to forget names", "やすい", "やすい"]
            ]
        ],
        ["equ : 等しい", [
                [1022, [11131, 841], "adequate", "十分な", []],
                ["provide <adequate> food", "十分な", "じゅうぶんな"]
            ],
            [
                [
                    1023, [514], "equal",
                    "(～と)等しい, 匹敵する, するだけの能力がある(to～)； ～に等しい", []
                ],
                ["Everyone was certain that he was <equal> to the assignment.",
                    "こなす能力がある", "こなすのうりょくがある"
                ]
            ],
            [
                [1024, [11599], "equation", "方程式", []],
                ["solve a difficult <equation>", "方程式", "ほうていしき"]
            ],
            [
                [1025, [11797, 1281], "equator", "赤道", []],
                ["a jungle at the <equator>", "赤道", "せきどう"]
            ],
            [
                [1026, [10727, 515], "equivalent", "同等のもの、相当するもの", []],
                ["There's no English <equivalent> to haiku.", "相当するもの",
                    "そうとうするもの"
                ]
            ]
        ],
        ["late : 関係", [
                [1027, [11903, 1278], "latitude", "緯", []],
                ["38 degrees north <latitude>", "緯", "い"]
            ],
            [
                [
                    1028, [11583], "legislation", "法律", [
                        [1071, "legislate", "法律を制定する"]
                    ]
                ],
                ["gun control <legislation>", "法律", "ほうりつ"]
            ],
            [
                [
                    1029, [10046, 492], "relate", "関係がある", [
                        [10212, "relative", "親族、親戚"],
                        [10592, "relatively", "比較的"]
                    ]
                ],
                ["stress-<related> illness", "関係のある", "かんけいのある"]
            ],
            [
                [1030, [10153, 664], "translate", "～を翻訳する", []],
                ["<translate> a novel into English", "翻訳する", "ほんやくする"]
            ]
        ],
        ["like : 自分に合う", [
                [1031, [10294], "alike", "似ている", []],
                ["The brothers look <alike>.", "似ている", "にている"]
            ],
            [
                [1032, [12206], "like", "など", []],
                ["apples,peaches,and the <like>", "など", "など"]
            ],
            [
                [1033, [10256, 1353], "likely", "ありそうな、～する可能性が高い", []],
                ["He is <likely> to win.", "可能性が高い", "かのうせいがたかい"]
            ],
            [
                [1034, [10322], "unlike", "～と違って", []],
                ["<Unlike> my wife, I get up early.", "違って", "ちがって"]
            ]
        ],
        ["pair, para : 等しい", [
                [1035, [10047, 512], "compare", "～を比較する、～をたとえる", []],
                ["<compare> Japan with China", "比較する", "ひかくする"]
            ],
            [
                [1036, [10784, 2093], "peer", "同僚、じっと見る", []],
                ["He's popular with his <peers>.", "同僚", "どうりょう"]
            ]
        ],
        ["meter, meas : 測る", [
                [1037, [11490, 2152], "diameter", "直径", []],
                ["a disk five inches in <diameter>", "直径", "ちょっけい"]
            ],
            [
                [1038, [10753], "dimension", "側面、要素、次元", []],
                ["the moral <dimension> of science", "側面", "そくめん"]
            ],
            [
                [1039, [11652, 836], "immense", "莫大な", []],
                ["an <immense> amount of information", "莫大な", "ばくだいな"]
            ],
            [
                [1040, [12132, 1006], "measure", "手段、程度", []],
                ["take strong <measures>", "手段", "しゅだん"],
                ["a <measure> of respect", "程度", "ていど"]
            ],
            [
                [1041, [2150], "symmetry", "左右対称、対称", []],
                ["The structure of the castle is in perfect <symmetry>.",
                    "左右対称", "さゆうたいしょう"
                ]
            ],
            [
                [1042, [11531], "thermometer", "温度計", []],
                ["The <thermometer> shows ０℃.", "温度計", "おんどけい"]
            ]
        ],
        ["mak : 釣り合う(match)", [
                [1043, [12186], "make", "なる", []],
                ["He will <make> a good teacher.", "なる", "なる"]
            ],
            [
                [1044, [10096, 1381], "match", "～に匹敵する、～に調和する", []],
                ["<match> him in power", "匹敵する", "ひってきする"]
            ]
        ],
        ["ior : 比較級", [
                [
                    1045, [1062], "administer", "～を管理する、運営する", [
                        [10762, "administration", "経営、行政"]
                    ]
                ],
                ["His father <administers> some companies.", "運営する", "うんえいする"]
            ],
            [
                [
                    1046, [10403], "behavior", "行動", [
                        [1039, "behave", "行動する、ふるまう"]
                    ]
                ],
                ["study human <behavior>", "行動", "こうどう"]
            ],
            [
                [1047, [11749, 2032], "deteriorate", "悪化する", []],
                ["His health will <deteriorate>.", "悪化する", "あっかする"]
            ],
            [
                [1048, [715], "inferior", "～より劣っている(to)", []],
                ["Our performance was <inferior> to that of the other team.",
                    "劣っていた", "おとっていた"
                ]
            ],
            [
                [
                    1049, [12095, 842], "major", "主要な、専攻する", [
                        [10460, "majority", "大多数"]
                    ]
                ],
                ["a <major> problem", "主要な", "しゅような"],
                ["<major> in economics", "専攻する", "せんこうする"]
            ],
            [
                [1050, [11500, 1084], "mayor", "市長", []],
                ["the New York City <mayor>", "市長", "しちょう"]
            ],
            [
                [1051, [10249, 1066], "minister", "大臣", []],
                ["the Italian foreign <minister>", "大臣", "だいじん"]
            ],
            [
                [1052, [10544, 843], "minor", "小さい", []],
                ["a <minor> problem", "小さい", "ちいさい"]
            ],
            [
                [1053, [11180, 281], "prior", "前の", [
                    [11001, "priority", "優先"]
                ]],
                ["the period <prior> to the war", "前の", "まえの"]
            ],
            [
                [1054, [10310], "senior", "上級の、先輩の", []],
                ["a <senior> member of the club", "先輩の", "せんぱいの"]
            ],
            [
                [1055, [10288, 714], "superior", "よりすぐれている", []],
                ["be <superior> to others", "よりすぐれている", "よりすぐれている"]
            ]
        ]
    ],
    ["言う", ["cla, cil : 叫ぶ", [
                [1056, [10056, 610], "claim", "～と主張する", []],
                ["He <claims> that he saw a UFO.", "主張する", "しゅちょうする"]
            ],
            [
                [1057, [11095, 1076], "council", "議会", []],
                ["the New York City <Council>", "議会", "ぎかい"]
            ],
            [
                [1058, [11368, 612], "exclaim", "叫ぶ", []],
                ["<exclaim> in surprise", "叫ぶ", "さけぶ"]
            ],
            [
                [1059, [11736, 613], "proclaim", "宣言する", []],
                ["<proclaim> that Japan is safe", "宣言する", "せんげんする"]
            ],
            [
                [1060, [11725, 626], "reconcile", "調和させる", []],
                ["<reconcile> religion with science", "調和させる", "ちょうわさせる"]
            ]
        ],
        ["dic : 言う", [
                [1061, [11675, 1659], "addict", "中毒である", []],
                ["be <addicted> to drugs", "中毒である", "ちゅうどくである"]
            ],
            [
                [
                    1062, [12211, 1028], "condition", "慣らされている、左右されている", []
                ],
                ["We've been <conditioned> to believe that busier is better.",
                    "慣らされている", "ならされている"
                ],
                ["Our lives are <conditioned> by technology.", "左右されている",
                    "さゆうされている"
                ]
            ],
            [
                [1063, [11242, 505], "contradict", "矛盾する", []],
                ["<contradict> what he said", "矛盾する", "むじゅんする"]
            ],
            [
                [1064, [11207, 654], "dedicate", "ささげる", []],
                ["I am <dedicated> to my work,", "身をささげている", "みをささげている"]
            ],
            [
                [1065, [11211, 653], "dictate", "命じる、要求する、決定する", []],
                ["The market <dictates> prices.", "決める", "きめる"]
            ],
            [
                [1066, [10071, 652], "indicate", "～を指し示す", []],
                ["The data <indicate> that he is right.", "示す", "しめす"]
            ],
            [
                [1067, [10378, 651], "predict", "～を予言する", []],
                ["<predict> the future", "予言する", "よげんする"]
            ]
        ],
        ["log : 話す", [
                [
                    1068, [11876], "Ideology", "イデオロギー", [
                        [1054, "ideology", "イデオロギー、思考傾向"]
                    ]
                ],
                ["a <political> ideology", "イデオロギー", "いでおろぎい"]
            ],
            [
                [1069, [11861, 533], "analogy", "類似点", []],
                ["an <analogy> between the heart and a pump", "類似点", "るいじてん"]
            ],
            [
                [
                    1070, [11035], "anthropologist", "人類学者", [
                        [604, "anthropology", "人類学"]
                    ]
                ],
                ["<Anthropologists> study people.", "人類学者", "じんるいがくしゃ"]
            ],
            [
                [1071, [10366], "apologize", "謝る", [
                    [529, "apology", "謝罪"]
                ]],
                ["<apologize> to him for being late", "謝る", "あやまる"]
            ],
            [
                [
                    1072, [11600], "archaeologist", "考古学者", [
                        [1940, "archaeology", "考古学"]
                    ]
                ],
                ["bones found by an <archaeologist>", "考古学者", "こうこがくしゃ"]
            ],
            [
                [1073, [602], "astrology", "占星術", []],
                ["Some people believe in <astrology>.", "占星術", "せんせいじゅつ"]
            ],
            [
                [1074, [10581], "biological", "生物", [
                    [531, "biology", "生物学"]
                ]],
                ["<biological> weapons", "生物", "せいぶつ"]
            ],
            [
                [1075, [11589, 526], "dialogue", "対話", []],
                ["a <dialogue> between two students", "対話", "たいわ"]
            ],
            [
                [
                    1076, [11189], "ecological", "生態", [
                        [1241, "ecology", "生態(系)、自然環境、環境保護"]
                    ]
                ],
                ["protect the <ecological> system", "生態", "せいたい"]
            ],
            [
                [1077, [11990, 530], "eloquent", "雄弁な", []],
                ["an <eloquent> speech", "雄弁な", "ゆうべんな"]
            ],
            [
                [
                    1078, [11686], "geological", "地質学的な", [
                        [598, "geology", "地質学"]
                    ]
                ],
                ["divisions of <geological> time", "地質学的な", "ちしつがくてきな"]
            ],
            [
                [1079, [11025, 528], "logic", "論理", []],
                ["persuade him with <logic>", "論理", "ろんり"]
            ],
            [
                [1080, [527], "monologue", "独白", []],
                ["She delivered a powerful <monologue>.", "独白", "どくはく"]
            ],
            [
                [1081, [11683], "physiological", "生理的な", []],
                ["<physiological> reactions", "生理的な", "せいりてきな"]
            ],
            [
                [1082, [10993, 532], "psychology", "心理学", []],
                ["study social <psychology>", "心理学", "しんりがく"]
            ],
            [
                [1083, [1877], "technology", "科学技術", []],
                ["information <technology>", "科学技術", "かがくぎじゅつ"]
            ]
        ],
        ["noun, nom, name : 伝える", [
                [1084, [10390, 615], "announce", "～を発表する", []],
                ["<announce> a new plan", "発表する", "はっぴょうする"]
            ],
            [
                [1085, [11984, 2126], "anonymous", "匿名の", []],
                ["an <anonymous> letter", "匿名の", "とくめいの"]
            ],
            [
                [1086, [11697, 1988], "namely", "すなわち", []],
                ["the two cities, <namely>, Paris and Tokyo", "すなわち", "すなわち"]
            ],
            [
                [1087, [10679, 569], "pronounce", "〈単語など〉を発音する", []],
                ["<pronounce> the word correctly", "発音する", "はつおんする"]
            ],
            [
                [1088, [11943], "renowned", "有名な", []],
                ["a world-<renowned> singer", "有名な", "ゆうめいな"]
            ]
        ],
        ["test : 証言する", [
                [1089, [1203], "Protestant", "プロテスタントの； 新教徒", []],
                ["He is a <Protestant> minister.", "プロテスタントの", "ぷろてすたんとの"]
            ],
            [
                [1090, [10712, 691], "protest", "抗議", []],
                ["a <protest> against war", "抗議", "こうぎ"]
            ],
            [
                [1091, [1011], "test", "テスト、判断基準", []],
                [
                    "The <test> of a good movie is that you want to see it again and again.",
                    "判断基準", "はんだんきじゅん"
                ]
            ],
            [
                [1092, [11717, 800], "testify", "証言する", []],
                ["<testify> in court", "証言する", "しょうげんする"]
            ]
        ],
        ["verb : 言葉", [
                [1093, [11467, 536], "proverb", "ことわざ", []],
                ["an old Chinese <proverb>", "ことわざ", "ことわざ"]
            ],
            [
                [1094, [11160], "verbal", "言葉による", [
                    [534, "verb", "動詞"]
                ]],
                ["<verbal> communication", "言葉による", "ことばによる"]
            ]
        ],
        ["voc : 呼ぶ", [
                [1095, [11208, 2017], "advocate", "主張する", []],
                ["<advocate> peace", "主張する", "しゅちょうする"]
            ],
            [
                [1096, [11784, 740], "evoke", "呼び起こす", []],
                ["<evoke> a response", "呼び起こす", "よびおこす"]
            ],
            [
                [1097, [11210, 741], "provoke", "引き起こす", []],
                ["<provoke> a reaction", "引き起こす", "ひきおこす"]
            ],
            [
                [1098, [10486, 574], "vocabulary", "語彙", []],
                ["a <vocabulary> of 5,000 words", "語彙", "ごい"]
            ],
            [
                [1099, [11668], "vocal", "発声", []],
                ["the <vocal> organ", "発声", "はっせい"]
            ],
            [
                [1100, [1874], "vocation", "天職", []],
                ["Acting is my <vocation>.", "天職", "てんしょく"]
            ]
        ],
        ["rio : 叫ぶ", [
                [1101, [11791, 2109], "riot", "暴動", []],
                ["an anti-government <riot>", "暴動", "ぼうどう"]
            ],
            [
                [1102, [11352, 2092], "roar", "ほえる", []],
                ["<roar> like a lion", "ほえる", "ほえる"]
            ],
            [
                [1103, [11587, 484], "rumor", "うわさ", []],
                ["spread a <rumor> about a ghost", "うわさ", "うわさ"]
            ]
        ],
        ["doc : 教える", [
                [1104, [12174, 1853], "discipline", "規律、分野", []],
                ["teach students <discipline>", "規律", "きりつ"],
                ["scientists of many <disciplines>", "分野", "ぶんや"]
            ],
            [
                [1105, [1195], "doctrine", "教義、学説", []],
                ["The Christian <doctrine> regards suicide as a sin.", "教義",
                    "きょうぎ"
                ]
            ],
            [
                [1106, [10471, 559], "document", "文書", []],
                ["sign an official <document>", "文書", "ぶんしょ"]
            ],
            [
                [1107, [2148], "dogma", "教義、定説； 独断", []],
                [
                    "He bravely challenged the <dogma> that the Earth was the center of the universe.",
                    "定説", "ていせつ"
                ]
            ]
        ],
        ["fess : 言う", [
                [1108, [11422, 779], "confess", "告白する", []],
                ["<confess> that I did it", "告白する", "こくはくする"]
            ],
            [
                [1109, [10965, 1873], "profession", "職業", []],
                ["an intellectual <profession>", "職業", "しょくぎょう"]
            ],
            [
                [1110, [10435], "professor", "教授", []],
                ["a <professor> at Boston University", "教授", "きょうじゅ"]
            ]
        ],
        ["say : 言う", [
                [1111, [12201, 1990], "say", "たとえば、仮定しよう、どうですか", []],
                ["Consider  a fruit, <say>, an  orange.", "たとえば", "たとえば"],
                ["Let's <say> you have a million dollars.", "仮定しよう", "かていしよう"],
                ["What do you <say> to going on a trip?", "どうですか", "どうですか"]
            ],
            [
                [1112, [11417], "scold", "しかる", []],
                ["<scold> my son for being lazy", "しかる", "しかる"]
            ]
        ],
        ["lingua : 言葉", [
                [1113, [10260], "bilingual", "二言語使用の", []],
                ["<bilingual> children", "二言語使用の", "にげんごしようの"]
            ],
            [
                [
                    1114, [11158, 521], "linguistic", "言語の", [
                        [10260, "bilingual", "二言語使用の"]
                    ]
                ],
                ["the <linguistic> ability of children", "言語", "げんご"]
            ]
        ],
        ["fant : 話す", [
                [1115, [11444, 394], "fame", "名声", []],
                ["win <fame> and fortune", "名声", "めいせい"]
            ],
            [
                [1116, [11012, 939], "fate", "運命", []],
                ["decide the <fate> of the world", "運命", "うんめい"]
            ],
            [
                [1117, [1740], "infamous", "悪名高い、評判が悪い", []],
                [
                    "Japanese students are <infamous> [notorious] for being too shy and reluctant to speak in language classes.",
                    "評判が悪い", "ひょうばんがわるい"
                ]
            ],
            [
                [1118, [10520, 906], "infant", "幼児", []],
                ["the mother-<infant> relationship", "幼児", "ようじ"]
            ],
            [
                [1119, [11804, 2149], "prophet", "預言者", []],
                ["the <prophets> of the Bible", "預言者", "よげんしゃ"]
            ]
        ]
    ],
    ["導く", ["duct, duce : 導く", [
                [1120, [12140, 1040], "conduct", "行う、行動、伝える", []],
                ["<conduct> an experiment", "行う", "おこなう"],
                ["the standards of <conduct>", "行動", "こうどう"],
                ["<conduct> electricity", "伝える", "つたえる"]
            ],
            [
                [1121, [2035], "deduce", "～(結論)を導き出す、推論する", []],
                [
                    "Which of the following statements can be <deduced> from the last paragraph?",
                    "導き出せ", "みちびきだせ"
                ]
            ],
            [
                [1122, [10358, 1852], "educate", "～を教育する", []],
                ["how to <educate> children", "教育する", "きょういくする"]
            ],
            [
                [1123, [11249, 2034], "induce", "誘う", []],
                ["<induce> deep sleep", "誘う", "さそう"]
            ],
            [
                [1124, [363], "introduce", "～を紹介する, ～を(初めて)導入する", []],
                [
                    "The solar calendar was <introduced> into Japan in the 19th century.",
                    "導入された", "どうにゅうされた"
                ]
            ],
            [
                [
                    1125, [10334, 1123], "produce", "～を生産する", [
                        [11214, "reproduce", "再生する、複製する、繁殖する[させる]"]
                    ]
                ],
                ["<produce> enough food", "生産する", "せいさんする"]
            ],
            [
                [1126, [10039, 851], "reduce", "～を減らす", []],
                ["<reduce> energy costs", "減らす", "へらす"]
            ],
            [
                [1127, [58], "subdue", "～を征服する, 支配する, 抑える", []],
                ["The king <subdue> the people with absolute power.", "支配した",
                    "しはいした"
                ]
            ]
        ],
        ["erg, urge : 駆り立てる", [
                [1128, [1175], "allergy", "アレルギー", []],
                ["She has an <allergy> to peanuts.", "アレルギー", "あれるぎい"]
            ],
            [
                [
                    1129, [10685, 190], "urge", "～に強く迫る、～を説得する", [
                        [11128, "urgent", "緊急の"]
                    ]
                ],
                ["<urge> him to go home", "説得する", "せっとくする"]
            ]
        ],
        ["peal, pul : 駆り立てる", [
                [1130, [10131, 1371], "appeal", "Aに訴える、～を引きつける", []],
                ["<appeal> to his feelings", "訴えかける", "うったえかける"]
            ],
            [
                [1131, [11258, 143], "compel", "強制する", []],
                ["be <compelled> to work hard", "強制される", "きょうせいされる"]
            ],
            [
                [1132, [11993], "compulsory", "義務的な", []],
                ["<compulsory> education", "義務", "ぎむ"]
            ],
            [
                [1133, [1479], "expel", "～を追い出す", []],
                [
                    "After he was caught using drugs, the student was immediately <expelled> from school.",
                    "追い出された", "おいだされた"
                ]
            ],
            [
                [1134, [11453, 744], "impulse", "衝動", []],
                ["feel an <impulse> to shout", "衝動", "しょうどう"]
            ],
            [
                [1135, [1480], "repel", "～を追い払う、退ける", []],
                ["The army was ready to <repel> the enemy.", "追い払う", "おいはらう"]
            ]
        ],
        ["point : 指す", [
                [
                    1136, [10665, 1828], "appoint", "～を任命する", [
                        [10204, "appointment", "約束、予約"]
                    ]
                ],
                ["be <appointed> to an important post", "任命される", "にんめいされる"]
            ],
            [
                [1137, [10115, 460], "disappoint", "～を失望させる", []],
                ["be <disappointed> with the test results", "失望する", "しつぼうする"]
            ],
            [
                [1138, [12153, 1634], "point", "指摘する、意味、主張", []],
                ["<point> out that it is wrong", "指摘する", "してきする"],
                ["There's no <point> in writing it.", "意味", "いみ"],
                ["prove his <point>", "主張", "しゅちょう"]
            ],
            [
                [1139, [11654, 288], "punctual", "時間をきっちり守る", []],
                ["be <punctual> for an appointment", "時間をきっちり守る", "じかんをきっちりまもる"]
            ],
            [
                [1140, [875], "standpoint", "立場、観点", []],
                ["From my <standpoint>, it's unacceptable.", "立場", "たちば"]
            ],
            [
                [1141, [874], "viewpoint", "観点、見地", []],
                ["from a historical <viewpoint>", "観点", "かんてん"]
            ]
        ],
        ["rec, reg, sur : 導く", [
                [
                    1142, [12148, 1910], "address", "宛てられた、取り組む、呼びかける、演説", []
                ],
                ["a letter <addressed> to him", "宛てられた", "あてられた"],
                ["<address> climate change", "取り組む", "とりくむ"],
                ["<address> the audience", "呼びかける", "よびかける"],
                ["the opening <address>", "演説", "えんぜつ"]
            ],
            [
                [1143, [11689, 880], "alert", "用心する", []],
                ["be <alert> to every sound", "用心する", "ようじんする"]
            ],
            [
                [1144, [10262, 481], "correct", "正しい", []],
                ["the <correct> answer", "正しい", "ただしい"]
            ],
            [
                [1145, [12120], "direct", "直接の、向ける、道を教える、指図する", []],
                ["<direct> contact", "直接の", "ちょくせつの"],
                ["<direct> his attention to the fact", "向ける", "むける"],
                ["<direct> her to the station", "道を教える", "みちをおしえる"],
                ["<direct> the workers", "指図する", "さしずする"]
            ],
            [
                [1146, [11359], "enrich", "豊かにする", []],
                ["Art <enriches> our lives.", "豊かにする", "ゆたかにする"]
            ],
            [
                [1147, [11716, 98], "erect", "築く", []],
                ["<erect> barriers", "築く", "きずく"]
            ],
            [
                [1148, [1796], "irregular", "不規則な", []],
                ["<irregular> heartbeat", "不規則な", "ふきそくな"]
            ],
            [
                [1149, [11918, 373], "realm", "領域", []],
                ["outside the <realm> of science", "領域", "りょういき"]
            ],
            [
                [1150, [11974, 1748], "reckless", "無謀な", []],
                ["his <reckless> driving", "無謀な", "むぼうな"]
            ],
            [
                [1151, [2090], "reckon", "～を推定する、と考える", []],
                ["I <reckon> I will go back to sleep.", "考える", "かんがえる"]
            ],
            [
                [1152, [2151], "rectangular", "長方形の", []],
                ["a <rectangular> box", "長方形の", "ちょうほうけいの"]
            ],
            [
                [1153, [1048], "regime", "政治体制", []],
                ["The Tokugawa <regime> lasted for more than 250 years.",
                    "政治体制", "せいじたいせい"
                ]
            ],
            [
                [1154, [10213, 334], "region", "地域", []],
                ["a mountain <region>", "地方", "ちほう"]
            ],
            [
                [1155, [10889, 682], "regulate", "～を規制する", []],
                ["<regulate> traffic", "規制する", "きせいする"]
            ],
            [
                [1156, [11936, 1060], "reign", "統治", []],
                ["Queen Victoria's <reign>", "統治", "とうち"]
            ],
            [
                [1157, [10441, 1256], "resource", "資源", [
                    [10413, "source", "源"]
                ]],
                ["natural <resources>", "資源", "しげん"]
            ],
            [
                [1158, [12030, 631], "right", "権利、善、すぐ", []],
                ["the <right> to vote", "権利", "けんり"],
                ["<right> and wrong", "善", "ぜん"],
                ["<right> in front of my house", "すぐ", "すぐ"]
            ],
            [
                [1159, [1997], "rightly", "正当に、当然のことながら", []],
                [
                    "The man <rightly> predicted that there would be a great earthquake in Pakistan.",
                    "それは正しかった", "それはただしかった"
                ],
                ["He is <rightly> [justly] proud of his achievement.", "当然のことだ",
                    "とうぜんのことだ"
                ]
            ],
            [
                [1160, [11672, 1757], "rigid", "厳格な", []],
                ["<rigid> rules", "厳格な", "げんかくな"]
            ],
            [
                [1161, [12097, 681], "rule", "支配、普通", []],
                ["British colonial <rule>", "支配", "しはい"],
                ["Small families are the <rule> in Japan.", "普通", "ふつう"]
            ],
            [
                [1162, [12159, 1013], "sort", "種、分類する", []],
                ["a <sort> of bird", "種", "しゅ"],
                ["<sort> papers by date", "分類する", "ぶんるいする"]
            ],
            [
                [1163, [11807, 2155], "surge", "急増", []],
                ["a <surge> in blood sugar", "急増", "きゅうぞう"]
            ],
            [
                [1164, [12023, 1939], "upright", "まっすぐに", []],
                ["stand <upright>", "まっすぐに", "まっすぐに"]
            ]
        ],
        ["od : 道", [
                [1165, [10417, 580], "method", "方法", []],
                ["a <method> of teaching English", "方法", "ほうほう"]
            ],
            [
                [1166, [10400, 266], "period", "時代", []],
                ["the Cold War <period>", "時代", "じだい"]
            ]
        ],
        ["lead : 率いる", [
                [
                    1167, [12082, 469], "lead", "引き起こす、送る、一流の", [
                        [11339, "misleading", "誤解を招く"]
                    ]
                ],
                ["One thing <leads> to another.", "引き起こす", "ひきおこす"],
                ["<lead> a happy life", "送る", "おくる"],
                ["<leading> artists", "一流の", "いちりゅうの"]
            ],
            [
                [
                    1168, [11339], "misleading", "誤解を招く", [
                        [469, "lead", "～を(…へ)導く(to…)； (～を)引き起こす(to～)"]
                    ]
                ],
                ["a <misleading> expression", "誤解を招く", "ごかいをまねく"]
            ]
        ]
    ],
    ["触れる・接続", ["clin, lad : 寄りかかる", [
                [1169, [10775], "client", "依頼人", []],
                ["a lawyer and his <client>", "依頼人", "いらいにん"]
            ],
            [
                [1170, [10228, 1267], "climate", "気候", []],
                ["global <climate> change", "気候", "きこう"]
            ],
            [
                [1171, [10084, 397], "decline", "衰退する、低下する、～を辞退する", []],
                ["My memory began to <decline>.", "低下し", "ていかし"]
            ],
            [
                [
                    1172, [10828], "inclined", "Vする傾向がある、Vしたい気がある", [
                        [96, "incline", "～を傾ける, (…したい)気持ちにさせる(to do)"]
                    ]
                ],
                ["I am <inclined> to believe him.", "気がする", "きがする"]
            ],
            [
                [1173, [10477], "ladder", "はしご", []],
                ["climb a <ladder>", "はしご", "はしご"]
            ],
            [
                [1174, [10620, 97], "lean", "よりかかる、もたれる", []],
                ["<lean> against the wall", "もたれる", "もたれる"]
            ]
        ],
        ["drag, tract : 引っ張る", [
                [1175, [11134, 867], "abstract", "抽象的な", []],
                ["an <abstract> concept", "抽象的な", "ちゅうしょうてきな"]
            ],
            [
                [1176, [10103, 101], "attract", "～を引きつける", []],
                ["<attract> his attention", "引きつける", "ひきつける"]
            ],
            [
                [1177, [10703, 1137], "contract", "契約", []],
                ["sign a <contract> with Google", "契約", "けいやく"]
            ],
            [
                [1178, [11406, 1475], "distract", "そらす", []],
                ["<distract> attention from the problem", "そらす", "そらす"]
            ],
            [
                [1179, [11302], "draft", "下書き、草稿", []],
                ["the first <draft> of his novel", "草稿", "そうこう"]
            ],
            [
                [1180, [11349, 110], "drag", "引きずる", []],
                ["<drag> a heavy bag to the car", "引きずる", "ひきずる"]
            ],
            [
                [1181, [10057], "draw", "～を引っぱる", []],
                ["<draw> a map", "描く", "えがく"]
            ],
            [
                [1182, [11428, 102], "extract", "取り出す", []],
                ["<extract> DNA from blood", "取り出す", "とりだす"]
            ],
            [
                [1183, [11363], "portray", "描く", []],
                ["<portray> natural beauty", "描く", "かく"]
            ],
            [
                [1184, [11274, 1499], "retreat", "退く", []],
                ["<retreat> to a safe distance", "退く", "しりぞく"]
            ],
            [
                [1185, [854], "subtract", "引く", []],
                ["To find the answer, <subtract> 7 from 12.", "引く", "ひく"]
            ],
            [
                [1186, [10622, 1486], "trace", "～の跡をたどる", []],
                ["<trace> human history", "たどる", "たどる"]
            ],
            [
                [1187, [10198], "track", "小道、足跡", []],
                ["the <track> of a lion", "足跡", "あしあと"]
            ],
            [
                [1188, [10192, 1126], "trade", "貿易", []],
                ["US <trade> with France", "貿易", "ぼうえき"]
            ],
            [
                [1189, [11493], "trail", "小道", []],
                ["walk along a mountain <trail>", "小道", "こみち"]
            ],
            [
                [1190, [11069, 28], "trait", "特徴", []],
                ["personality <traits>", "特徴", "とくちょう"]
            ],
            [
                [1191, [10044, 1159], "treat", "～をあつかう", []],
                ["<treat> him like a child", "あつかう", "あつかう"]
            ],
            [
                [1192, [11476, 1070], "treaty", "条約", []],
                ["sign a peace <treaty>", "条約", "じょうやく"]
            ],
            [
                [1193, [11247, 2033], "trigger", "きっかけになる", []],
                ["<trigger> war", "引き金を引く", "ひきがねをひく"]
            ],
            [
                [
                    1194, [10689, 324], "withdraw",
                    "～を引っ込める、引きこもる、退く、〈預金など〉を引き出す", []
                ],
                ["<withdraw> my hand", "引っ込める", "ひっこめる"]
            ]
        ],
        ["here : くっつく", [
                [1195, [11744, 2049], "adhere", "固く守る", []],
                ["<adhere> the international standards", "固く守る", "かたくまもる"]
            ],
            [
                [1196, [11989, 2135], "coherent", "一貫した", []],
                ["a logically <coherent> system", "一貫した", "いっかんした"]
            ],
            [
                [1197, [10864, 210], "hesitate", "ためらう", []],
                ["Don't <hesitate> to ask questions.", "ためらう", "ためらう"]
            ],
            [
                [1198, [11681, 1243], "inherent", "元から伴う", []],
                ["dangers <inherent> in the sport", "元から伴う", "もとからともなう"]
            ]
        ],
        ["poli : 磨く", [
                [1199, [10912], "polish", "～を磨く", []],
                ["<polish> the shoes", "磨く", "みがく"]
            ],
            [
                [1200, [10564], "polite", "礼儀正しい", []],
                ["be <polite> to ladies", "礼儀正しい", "れいぎただしい"]
            ]
        ],
        ["press : 押す", [
                [1201, [10630], "depress", "～を憂鬱にさせる", []],
                ["feel too <depressed> to go out", "憂うつで", "ゆううつで"]
            ],
            [
                [1202, [10336, 708], "express", "～を表現する", []],
                ["<express> my feelings", "表現する", "ひょうげんする"]
            ],
            [
                [
                    1203, [10452], "impression", "印象", [
                        [707, "impress", "印象づける、感動させる"]
                    ]
                ],
                ["make a good <impression> on him", "印象", "いんしょう"]
            ],
            [
                [1204, [11244, 709], "oppress", "しいたげる", []],
                ["<oppress> small nations", "しいたげる", "しいたげる"]
            ],
            [
                [1205, [12149, 706], "press", "出版、切迫して", []],
                ["the freedom of the <press>", "出版", "しゅっぱん"],
                ["be <pressed> for time", "切迫して", "せっぱくして"]
            ],
            [
                [1206, [11362, 710], "suppress", "抑える", []],
                ["<suppress> anger", "抑える", "おさえる"]
            ]
        ],
        ["sert, seed : つなげる", [
                [1207, [10914, 609], "assert", "～と主張する", []],
                ["<assert> that it is impossible", "主張する", "しゅちょうする"]
            ],
            [
                [1208, [10238, 180], "desert", "砂漠", []],
                ["a <desert>ed road in the <desert>", "砂漠", "さばく"]
            ],
            [
                [1209, [11369, 687], "exert", "及ぼす", []],
                ["<exert> a strong influence", "及ぼす", "およぼす"]
            ],
            [
                [1210, [11355, 106], "insert", "差し込む", []],
                ["<insert> the key into the hole", "差し込む", "さしこむ"]
            ],
            [
                [1211, [10972, 1100], "seed", "種", []],
                ["plant pumpkin <seeds>", "種", "たね"]
            ],
            [
                [1212, [1794], "serial", "連続した", []],
                ["a <serial> murder", "連続した", "れんぞくした"]
            ],
            [
                [1213, [1793], "series", "連続", []],
                ["a <series> of incidents", "一連", "いちれん"]
            ]
        ],
        ["sym : 共に", [
                [1214, [1787], "symbol", "象徴", []],
                ["The dove is a <symbol> of peace.", "象徴", "しょうちょう"]
            ],
            [
                [1215, [2150], "symmetry", "左右対称、対称", []],
                ["The structure of the castle is in perfect <symmetry>.",
                    "左右対称", "さゆうたいしょう"
                ]
            ],
            [
                [1216, [10946, 959], "sympathy", "同情", []],
                ["feel <sympathy> for the victim", "同情", "どうじょう"]
            ],
            [
                [1217, [10973, 1146], "symptom", "症状", []],
                ["<symptoms> of a cold", "症状", "しょうじょう"]
            ],
            [
                [1218, [11607], "syndrome", "症候群", []],
                ["economy class <syndrome>", "症候群", "しょうこうぐん"]
            ],
            [
                [
                    1219, [11340], "synthetic", "合成の", [
                        [2059, "synthesize", "～を総合する、合成する、合成して作り出す"]
                    ]
                ],
                ["<synthetic> fiber", "合成", "ごうせい"]
            ]
        ],
        ["tain, tac, tam, teg : 触れる", [
                [1220, [10616, 113], "attach", "AをBにくっつける", []],
                ["a bookcase <attached> to the wall", "取り付けられた", "とりつけられた"]
            ],
            [
                [1221, [11418, 241], "attain", "達成する", []],
                ["<attain> the goal", "達成する", "たっせいする"]
            ],
            [
                [
                    1222, [11646], "contaminated", "汚染された", [
                        [2118, "contaminate", "～を汚染する"]
                    ]
                ],
                ["drink <contaminated> water", "汚染された", "おせんされた"]
            ],
            [
                [1223, [11972], "detached", "切り離された", []],
                ["a life <detached> from the world", "切り離された", "きりはなされた"]
            ],
            [
                [1224, [10541, 1439], "entire", "全", []],
                ["the <entire> world", "全", "ぜん"]
            ],
            [
                [1225, [12015], "intact", "無傷の", []],
                ["The building remains <intact>.", "無傷の", "むきずの"]
            ],
            [
                [
                    1226, [12011, 1774], "integral", "不可欠な", [
                        [11909, "integrity", "誠実"]
                    ]
                ],
                ["an <integral> part of society", "不可欠な", "ふかけつな"]
            ],
            [
                [1227, [11373], "integrate", "融けこませる", []],
                ["<integrate> immigrants into society", "融けこませる", "とけこませる"]
            ],
            [
                [
                    1228, [11810], "stake", "危険にさらされて； 問題となって", [
                        [1647, "at stake", "賭け金"]
                    ]
                ],
                ["a high-<stakes> poker game", "賭け金", "かけきん"]
            ],
            [
                [1229, [11850, 1966], "tactics", "戦術", []],
                ["use guerrilla <tactics>", "戦術", "せんじゅつ"]
            ],
            [
                [1230, [2065], "tangible", "触れることができる； 明白な、具体的な", []],
                [
                    "They still haven't found <tangible> evidence against the suspect.",
                    "具体的な", "ぐたいてきな"
                ]
            ],
            [
                [1231, [10425, 206], "task", "仕事", []],
                ["a difficult <task>", "仕事", "しごと"]
            ],
            [
                [1232, [10202], "taste", "味、好み", []],
                ["a <taste> of lemon", "味", "あじ"]
            ],
            [
                [1233, [10938], "tax", "税金", []],
                ["pay <taxes> on the land", "税金", "ぜいきん"]
            ]
        ]
    ],
    ["攻撃する・投げる", ["bat : 打つ", [
                [1234, [12152, 696], "beat", "勝つ", []],
                ["<beat> the champion", "勝つ", "かつ"]
            ],
            [
                [1235, [11441], "combat", "戦う", []],
                ["<combat> global warming", "戦う", "たたかう"]
            ],
            [
                [1236, [10505, 620], "debate", "討論", []],
                ["a <debate> on education", "討論", "とうろん"]
            ]
        ],
        ["break : 壊す", [
                [1237, [12146], "break", "休み", []],
                ["take a <break> for a cup of tea", "休み", "やすみ"]
            ],
            [
                [1238, [11292], "breakdown", "崩壊", []],
                ["the <breakdown> of the family", "崩壊", "ほうかい"]
            ],
            [
                [1239, [11558, 1881], "breakthrough", "飛躍的進歩", []],
                ["a <breakthrough> in technology", "飛躍的進歩", "ひやくてきしんぽ"]
            ],
            [
                [1240, [11598], "outbreak", "ぼっ発", []],
                ["at the <outbreak> of the war", "ぼっ発", "ぼっぱつ"]
            ]
        ],
        ["cast : 投げる", [
                [1241, [10874, 1112], "broadcast", "～を放送する", []],
                ["<broadcast> the concert live", "放送する", "ほうそうする"]
            ],
            [
                [1242, [10656, 1293], "cast", "～を投げる", []],
                ["<cast> a shadow on the wall", "投げかける", "なげかける"]
            ],
            [
                [1243, [10992], "forecast", "予報", []],
                ["the weather <forecast>", "予報", "よほう"]
            ]
        ],
        ["frag : 割る", [
                [1244, [11541, 1451], "fraction", "ほんの一部", []],
                ["a small <fraction> of the money", "ほんの一部", "ほんのいちぶ"]
            ],
            [
                [1245, [11633, 1753], "fragile", "壊れやすい", []],
                ["<fragile> items", "壊れやすい", "こわれやすい"]
            ],
            [
                [1246, [11511, 1453], "fragment", "破片", []],
                ["a <fragment> of blue glass", "破片", "はへん"]
            ],
            [
                [1247, [11346, 163], "refrain", "控える", []],
                ["<refrain> from smoking", "控える", "ひかえる"]
            ]
        ],
        ["flict, fend : 打つ", [
                [1248, [2084], "afflict", "～を苦しめる", []],
                ["He was <afflicted> with Alzheimer's disease.", "苦しんだ",
                    "くるしんだ"
                ]
            ],
            [
                [1249, [10968, 497], "conflict", "対立", []],
                ["the <conflict> between the two sides", "対立", "たいりつ"]
            ],
            [
                [1250, [10872, 785], "defend", "～を守る", []],
                ["<defend> ourselves against attack", "守る", "まもる"]
            ],
            [
                [1251, [11738, 2083], "inflict", "与える", []],
                ["<inflict> pain on other people", "与える", "あたえる"]
            ],
            [
                [1252, [11980, 2146], "manifest", "明らかな", []],
                ["a <manifest> mistake", "明らかな", "あきらかな"]
            ],
            [
                [1253, [11421], "offending", "怒らせる", [
                    [784, "offend", "怒らせる"]
                ]],
                ["avoid <offending> others", "怒らせる", "いからせる"]
            ]
        ],
        ["ject : 投げる", [
                [1254, [535], "adjective", "形容詞", []],
                ["Beautiful is an <adjective>.", "形容詞", "けいようし"]
            ],
            [
                [1255, [11557], "injection", "注射", []],
                ["take daily <injections>", "注射", "ちゅうしゃ"]
            ],
            [
                [
                    1256, [12116, 502], "object", "物体、対象、反対する", [
                        [10728, "objective", "目的、目標、客観的な"]
                    ]
                ],
                ["a strange flying <object>", "物体", "ぶったい"],
                ["an <object> of study", "対象", "たいしょう"],
                ["<object> to his drinking", "反対する", "はんたいする"]
            ],
            [
                [1257, [10206, 192], "project", "計画", []],
                ["a business <project>", "計画", "けいかく"]
            ],
            [
                [1258, [10098, 440], "reject", "～を断る", []],
                ["<reject> the proposal", "拒否する", "きょひする"]
            ],
            [
                [
                    1259, [12103, 57], "subject", "支配される、かかりやすい、話題、学科、被験者", [
                        [11957, "subjective", "主観的な"]
                    ]
                ],
                ["People are <subject> to the law.", "支配される", "しはいされる"],
                ["I am <subject> to illness.", "かかりやすい", "かかりやすい"],
                ["Let's change the <subject>.", "話題", "わだい"],
                ["My favorite <subject> is math.", "学科", "がっか"],
                ["the <subject> of the experiment", "被験者", "ひけんしゃ"]
            ]
        ],
        ["scatter : 散乱", [
                [1260, [10904, 93], "scatter", "～をばらまく", []],
                ["<scatter> toys on the floor", "ばらまく", "ばらまく"]
            ],
            [
                [1261, [11705], "shatter", "粉々にする", []],
                ["<shatter> windows", "粉々にする", "こなごなにする"]
            ]
        ],
        ["stinc : 刺す", [
                [1262, [10859, 35], "distinguish", "～を見分ける", []],
                ["<distinguish> a lie from the truth", "見分ける", "みわける"]
            ],
            [
                [
                    1263, [11771, 407], "extinguish", "消す", [
                        [11046, "extinction", "絶滅"]
                    ]
                ],
                ["<extinguish> the fire", "消す", "けす"]
            ],
            [
                [1264, [11018, 743], "instinct", "本能", []],
                ["human <instinct> to fight", "本能", "ほんのう"]
            ],
            [
                [1265, [12135, 112], "stick", "守る、動けなく、突き出す、残る", []],
                ["<stick> to the schedule", "守る", "まもる"],
                ["get <stuck> on a crowded train", "動けなく", "うごけなく"],
                ["<stick> out my tongue", "突き出す", "つきだす"],
                ["The song <stuck> in my mind.", "残った", "のこった"]
            ],
            [
                [1266, [10627, 742], "stimulate", "～を刺激する", []],
                ["<stimulate> the imagination", "刺激する", "しげきする"]
            ]
        ],
        ["strike : 打つ", [
                [1267, [12125, 1904], "strike", "印象を与えた、浮かんだ、襲った", []],
                ["The man <struck> me as strange.", "印象を与えた", "いんしょうをあたえた"],
                ["Suddenly an idea <struck> him.", "浮かんだ", "うかんだ"],
                ["The typhoon <struck> Osaka.", "襲った", "おそった"]
            ],
            [
                [1268, [11130], "striking", "いちじるしい", []],
                ["a <striking> contrast", "いちじるしい", "いちじるしい"]
            ],
            [
                [1269, [10782, 1166], "stroke", "脳卒中、発作、打撃、一撃、なでる", []],
                ["have a <stroke>", "脳卒中", "のうそっちゅう"]
            ]
        ],
        ["thorou : 貫く", [
                [1270, [11558, 1881], "breakthrough", "飛躍的進歩", []],
                ["a <breakthrough> in technology", "飛躍的進歩", "ひやくてきしんぽ"]
            ],
            [
                [
                    1271, [11200], "thoroughly", "徹底的に", [
                        [1441, "thorough", "完全な、徹底的な"]
                    ]
                ],
                ["<thoroughly> enjoy the party", "徹底的に", "てっていてきに"]
            ],
            [
                [
                    1272, [10833], "thrilled", "とてもうれしい", [
                        [1819, "thrill", "～をわくわくさせる； 興奮"]
                    ]
                ],
                ["I'm <thrilled> to hear your voice.", "とてもうれしい", "とてもうれしい"]
            ],
            [
                [1273, [10321], "throughout", "いたる所に", []],
                ["people <throughout> the world", "中", "なか"]
            ]
        ],
        ["thru : 突く", [
                [1274, [11768, 346], "intrude", "立ち入る", []],
                ["<intrude> on his privacy", "立ち入る", "たちいる"]
            ],
            [
                [
                    1275, [10615], "threaten", "～を脅迫する", [
                        [711, "threat", "脅し、脅威"]
                    ]
                ],
                ["<threaten> to tell the police", "おどす", "おどす"]
            ],
            [
                [1276, [11777, 105], "thrust", "押し込む", []],
                ["<thrust> the money into his pocket", "押し込む", "おしこむ"]
            ]
        ],
        ["nui, noc : 害のある", [
                [1277, [10356, 760], "annoy", "～をいらいらさせる", []],
                ["The noise <annoys> me.", "いらだたせる", "いらだたせる"]
            ],
            [
                [1278, [10824, 802], "innocent", "無罪の、罪のない、無邪気な", []],
                ["blame <innocent> people", "罪のない", "つみのない"]
            ],
            [
                [1279, [11518, 999], "nuisance", "迷惑", []],
                ["a <nuisance> to others", "迷惑", "めいわく"]
            ]
        ],
        ["burs : 割る", [
                [1280, [10639, 130], "burst", "破裂する、突然～しだす", []],
                ["<burst> into tears", "急に", "きゅうに"]
            ],
            [
                [1281, [1953], "bustle", "喧噪", []],
                [
                    "Living in the <bustle> of a large city, I sometimes feel like going to a deserted island.",
                    "喧噪", "けんそう"
                ]
            ],
            [
                [1282, [11454, 2116], "debris", "破片", []],
                ["<debris> from an explosion", "破片", "はへん"]
            ]
        ],
        ["bol : 投げること", [
                [1283, [12175, 1078], "bill", "請求書、紙幣、法案", []],
                ["an electricity <bill>", "請求書", "せいきゅうしょ"],
                ["a ten dollar <bill>", "紙幣", "しへい"],
                ["pass a <bill>", "法案", "ほうあん"]
            ],
            [
                [1284, [11515], "bullet", "弾丸", []],
                ["faster than a <bullet>", "弾丸", "だんがん"]
            ],
            [
                [1285, [1787], "symbol", "象徴", []],
                ["The dove is a <symbol> of peace.", "象徴", "しょうちょう"]
            ]
        ],
        ["bar : 棒", [
                [1286, [10940, 1788], "barrier", "壁", []],
                ["the language <barrier>", "壁", "かべ"]
            ],
            [
                [
                    1287, [10162, 745], "embarrass", "～を困惑させる、～に恥ずかしい思いをさせる", []
                ],
                ["be <embarrassed> by the mistake", "恥ずかしい", "はずかしい"]
            ]
        ]
    ],
    ["二つに分ける", ["cide, cise : 切る", [
                [1288, [10005, 1018], "decide", "～することを決意する", []],
                ["<decide> to tell the truth", "決意をする", "けついをする"]
            ],
            [
                [1289, [12126, 688], "exercise", "運動、用いる", []],
                ["get regular <exercise>", "運動", "うんどう"],
                ["<exercise> power over people", "用いる", "もちいる"]
            ],
            [
                [1290, [11585], "pesticide", "殺虫剤", []],
                ["the use of <pesticides>", "殺虫剤", "さっちゅうざい"]
            ],
            [
                [
                    1291, [10843], "precisely", "正確に、まさに、ちょうど", [
                        [46, "precise", "正確な"]
                    ]
                ],
                ["<precisely> at noon", "ちょうど", "ちょうど"]
            ],
            [
                [1292, [11091], "suicide", "自殺", []],
                ["commit <suicide>", "自殺", "じさつ"]
            ]
        ],
        ["class : 分ける", [
                [
                    1293, [12085, 1012], "class", "階級、授業", [
                        [10913, "classify", "分類する"]
                    ]
                ],
                ["middle-<class> families", "階級", "かいきゅう"],
                ["sleep in <class>", "授業", "じゅぎょう"]
            ],
            [
                [1294, [11341], "classical", "クラシックの", []],
                ["<classical> music", "クラシック", "くらしっく"]
            ]
        ],
        ["score : 切る", [
                [1295, [10395], "score", "～を取る", []],
                ["<score> 10 goals", "取る", "とる"]
            ],
            [
                [1296, [11803, 966], "scorn", "軽蔑", []],
                ["a look of <scorn>", "軽蔑", "けいべつ"]
            ],
            [
                [1297, [10023], "share", "～を分け合う、共有する", []],
                ["<share> a room with a friend", "共有する", "きょうゆうする"]
            ],
            [
                [1298, [11962, 1727], "sheer", "まったくの", []],
                ["<sheer> good luck", "まったくの", "まったくの"]
            ],
            [
                [1299, [1698], "shiver", "(寒さで)震える", []],
                ["He stood <shivering> in the cold.", "震えながら", "ふるえながら"]
            ]
        ],
        ["sec, cern : 切る", [
                [1300, [12036], "certain", "ある、確信している、確実だ", []],
                ["a <certain> amount of time", "ある", "ある"],
                ["I am <certain> of his success.", "確信している", "かくしんしている"],
                ["He is <certain> to come.", "確実だ", "かくじつだ"]
            ],
            [
                [1301, [11545, 2137], "certificate", "証明書", []],
                ["a birth <certificate>", "証明書", "しょうめいしょ"]
            ],
            [
                [1302, [12057, 412], "concern", "不安、思いやり、関係する、重要", []],
                ["<concern> about the future", "不安", "ふあん"],
                ["<concern> for others", "思いやり", "おもいやり"],
                ["This problem  <concerns> everyone.", "関係する", "かんけいする"],
                ["a matter of great <concern>", "重要", "じゅうよう"]
            ],
            [
                [1303, [11714, 2025], "discern", "識別する", []],
                ["can <discern> the difference", "識別する", "しきべつする"]
            ],
            [
                [1304, [1770], "discreet", "慎重な", []],
                [
                    "I watched from a <discreet> distance, trying to figure out what was going on.",
                    "慎重に", "しんちょうに"
                ]
            ],
            [
                [
                    1305, [11064], "discrimination", "差別", [
                        [1224, "discriminate", "差別する、区別する"]
                    ]
                ],
                ["<discrimination> against women", "差別", "さべつ"]
            ],
            [
                [1306, [10512], "insect", "昆虫", []],
                ["social <insects> like ants", "昆虫", "こんちゅう"]
            ],
            [
                [1307, [11879], "intersection", "交差点", []],
                ["turn right at the <intersection>", "交差点", "こうさてん"]
            ],
            [
                [1308, [11072], "secretary", "秘書", []],
                ["his <secretary>'s desk", "秘書", "ひしょ"]
            ],
            [
                [1309, [1087], "sector", "部門", []],
                ["the service [agricultural] <sector>", "部門", "ぶもん"]
            ],
            [
                [1310, [11824, 1454], "segment", "部分、区分", []],
                ["a small <segment> of the population", "部分", "ぶぶん"]
            ],
            [
                [1311, [10370], "select", "～を選ぶ", []],
                ["<select> the best answer", "選ぶ", "えらぶ"]
            ]
        ],
        ["shi : 裂く", [
                [1312, [10773], "shade", "陰、日陰", []],
                ["keep the beer in the <shade>", "日陰", "ひかげ"]
            ],
            [
                [1313, [11217, 1294], "shed", "落とす", []],
                ["Trees <shed> their leaves.", "落とす", "おとす"]
            ],
            [
                [1314, [10161, 1378], "shift", "～を変える", []],
                ["<shift> gears", "変える", "かえる"]
            ]
        ],
        ["sort : 分類する", [
                [1315, [10676, 1839], "resort", "Aに訴える", []],
                ["<resort> to violence", "訴える", "うったえる"]
            ],
            [
                [1316, [12159, 1013], "sort", "種、分類する", []],
                ["a <sort> of bird", "種", "しゅ"],
                ["<sort> papers by date", "分類する", "ぶんるいする"]
            ]
        ],
        ["spil : 引き裂く", [
                [1317, [10697, 1510], "spill", "～をこぼす", []],
                ["<spill> coffee on the keyboard", "こぼす", "こぼす"]
            ],
            [
                [1318, [10675], "split", "～を割る、分裂する", []],
                ["<split> into two groups", "分裂する", "ぶんれつする"]
            ],
            [
                [1319, [10160, 983], "spoil", "～を台無しにする", []],
                ["<spoil> the party", "台無しにする", "だいなしにする"]
            ]
        ],
        ["tail : 切る", [
                [1320, [10419, 45], "detail", "細部", []],
                ["remember the <details> of the story", "細部", "さいぶ"]
            ],
            [
                [1321, [1033], "entail", "～を伴う、必要とする； を含意する", []],
                ["This job <entails> certain risks.", "伴う", "ともなう"]
            ],
            [
                [1322, [11608, 1131], "retail", "小売り", []],
                ["the <retail> price", "小売り", "こうり"]
            ]
        ],
        ["rag : むしり取る", [
                [1323, [11896], "rag", "ぼろ", []],
                ["be dressed in <rags>", "ぼろ", "ぼろ"]
            ],
            [
                [1324, [10255], "rough", "荒い、大雑把な", []],
                ["a <rough> sketch", "大雑把な", "おおざっぱな"]
            ],
            [
                [1325, [10614, 405], "ruin", "～を台無しにする、破壊する", []],
                ["<ruin> his life", "破滅させる", "はめつさせる"]
            ]
        ],
        ["tire : 引き裂く", [
                [1326, [10363, 923], "retire", "辞める", []],
                ["<retire> from work at sixty", "辞める", "やめる"]
            ],
            [
                [1327, [10386, 116], "tear", "～を引き裂く", []],
                ["<tear> the letter to pieces", "引き裂く", "ひきさく"]
            ]
        ],
        ["tom : 切る", [
                [1328, [11908, 1180], "anatomy", "構造", []],
                ["the <anatomy> of the human brain", "構造", "こうぞう"]
            ],
            [
                [1329, [1188], "atom", "原子", []],
                ["The smallest unit of matter is an <atom>.", "原子", "げんし"]
            ]
        ]
    ],
    ["変形させる", ["flex : 曲げる", [
                [1330, [11162, 1758], "flexible", "柔軟な", []],
                ["have <flexible> thinking", "柔軟な", "じゅうなんな"]
            ],
            [
                [1331, [10064, 416], "reflect", "～を反映する、～を反射する", []],
                ["<reflect> the mood of the times", "反映する", "はんえいする"]
            ]
        ],
        ["tort : ねじる", [
                [1332, [11770, 118], "distort", "歪曲する", []],
                ["<distort> the facts", "歪曲する", "わいきょくする"]
            ],
            [
                [1333, [1667], "torment", "苦痛； ～を苦しめる", []],
                [
                    "The boy has been <tormented> by guilt since he stole his father's money.",
                    "苦しめられている", "くるしめられている"
                ]
            ],
            [
                [1334, [11935, 1666], "torture", "拷問", []],
                ["endure terrible <torture>", "拷問", "ごうもん"]
            ]
        ],
        ["wist : ねじる", [
                [1335, [11427, 126], "twist", "ねじ曲げる", []],
                ["<twist> a wire", "ねじ曲げる", "ねじまげる"]
            ],
            [
                [1336, [1677], "wrist", "手首", []],
                ["wear a fitness tracker on <wrist>", "手首", "てくび"]
            ]
        ],
        ["wr : ねじる", [
                [1337, [10018], "worry", "心配する", []],
                ["<worry> about money", "心配する", "しんぱいする"]
            ],
            [
                [1338, [10265, 1001], "worth", "～の価値がある", []],
                ["The book is <worth> reading.", "価値がある", "かちがある"]
            ]
        ],
        ["wind : 曲がりくねる", [
                [1339, [10392, 1699], "wander", "歩き回る", []],
                ["<wander> around the streets", "歩き回る", "あるきまわる"]
            ],
            [
                [1340, [11218, 1930], "wind", "曲がる", []],
                ["the long and <winding> road", "曲がりくねった", "まがりくねった"]
            ]
        ],
        ["carve : 彫る", [
                [1341, [11381, 2096], "carve", "彫る", []],
                ["<carve> her name in stone", "彫る", "ほる"]
            ],
            [
                [1342, [11376], "crawl", "はって進む", []],
                ["<crawl> into bed", "はって進む", "はってすすむ"]
            ]
        ]
    ],
    ["固定する・緩める", ["band : 結ぶ", [
                [1343, [10907, 95], "bend", "身をかがめる", []],
                ["<bend> down to pick up the can", "身をかがめる", "みをかがめる"]
            ],
            [
                [1344, [11222, 684], "bind", "縛る、束縛する", []],
                ["be <bound> tradition", "縛られている", "しばられている"]
            ],
            [
                [1345, [11070, 1843], "bond", "きずな", []],
                ["strong family <bonds>", "きずな", "きずな"]
            ],
            [
                [
                    1346, [12161], "bound", "きっと、行きだ、縛られる", [
                        [11241, "bounce", "はね返る"]
                    ]
                ],
                ["He is <bound> to fail.", "きっと", "きっと"],
                ["The plane is <bound> for Guam.", "行きだ", "いきだ"],
                ["be <bound> by law", "縛られる", "しばられる"]
            ],
            [
                [1347, [10990, 343], "boundary", "境界", []],
                ["the <boundary> between two countries", "境界", "きょうかい"]
            ]
        ],
        ["close, clude : 閉じる", [
                [1348, [12092], "close", "近い、親しい、綿密な、終わり", []],
                ["very <close> to the city", "近い", "ちかい"],
                ["a <close> friend", "親しい", "したしい"],
                ["a <close> examination", "綿密な", "めんみつな"],
                ["the <close> of the 20th century", "終わり", "おわり"]
            ],
            [
                [1349, [10866, 588], "conclude", "～と結論づける", []],
                ["<conclude> that he is OK", "結論づける", "けつろんづける"]
            ],
            [
                [1350, [11407, 360], "disclose", "暴露する", []],
                ["<disclose> his secret", "暴露する", "ばくろする"]
            ],
            [
                [1351, [11254, 359], "enclose", "囲む", []],
                ["live in an <enclosed> space", "閉ざされた", "とざされた"]
            ],
            [
                [1352, [357], "exclude", "～を(…から)除外する(from…)", []],
                [
                    "We had to <exclude> some relatives from our wedding party because they didn't approve our wedding.",
                    "除外し", "じょがいし"
                ]
            ],
            [
                [1353, [10009, 355], "include", "～を含む、含める", []],
                ["The list <includes> his name.", "含んでいる", "ふくんでいる"]
            ]
        ],
        ["lax, ly : 緩んだ", [
                [1354, [10509], "analysis", "分析", [
                    [586, "analyze", "～を分析する"]
                ]],
                ["<analysis> of DNA", "分析", "ぶんせき"]
            ],
            [
                [1355, [12001, 1153], "paralyze", "麻痺している", []],
                ["be <paralyzed> from the waist down", "麻痺している", "まひしている"]
            ],
            [
                [1356, [1798], "relax", "～をくつろがせる； くつろぐ", []],
                ["talk with a <relaxed> mood", "くつろいだ", "くつろいだ"]
            ],
            [
                [1357, [10142, 149], "release", "～を解放する、～を発表する", []],
                ["<release> him from work", "解放する", "かいほうする"]
            ],
            [
                [1358, [11979], "slender", "すらりとした", []],
                ["a <slender> girl with long hair", "すらりとした", "すらりとした"]
            ],
            [
                [1359, [11190, 25], "slight", "少しの", []],
                ["without the <slightest> doubt", "少しの", "すこしの"]
            ]
        ],
        ["lig : 縛る", [
                [1360, [11301, 1968], "ally", "同盟国", []],
                ["America and its <allies>", "同盟国", "どうめいこく"]
            ],
            [
                [1361, [11335, 1350], "liable", "しがちである、可能性が高い", []],
                ["be <liable> to forget it", "がちである", "がちである"]
            ],
            [
                [1362, [10644, 144], "oblige", "～に強いる", []],
                ["be <obliged> to pay the price", "ざるをえない", "ざるをえない"]
            ],
            [
                [1363, [1969], "rally", "集会； 再結集する", []],
                ["a political <rally>", "集会", "しゅうかい"]
            ],
            [
                [1364, [10468, 1192], "religion", "宗教", []],
                ["science and <religion>", "宗教", "しゅうきょう"]
            ],
            [
                [1365, [10104, 702], "rely", "Aに頼る", []],
                ["<rely> on their power", "頼る", "たよる"]
            ]
        ],
        ["sol : 緩める", [
                [
                    1366, [11193], "absolutely", "絶対に", [
                        [493, "absolute", "絶対的な, 完全な"]
                    ]
                ],
                ["It's <absolutely> necessary.", "絶対に", "ぜったいに"]
            ],
            [
                [1367, [11223, 1502], "dissolve", "溶解する", []],
                ["<dissolve> sugar in water", "溶かす", "とかす"]
            ],
            [
                [1368, [10660, 1020], "resolve", "〈問題など〉を解決する", []],
                ["<resolve> disagreements", "解決する", "かいけつする"]
            ],
            [
                [1369, [10343, 447], "solve", "～を解決する", []],
                ["<solve> the problem", "解決する", "かいけつする"]
            ]
        ],
        ["stri : 締め付ける", [
                [1370, [11827], "constraint", "制約", []],
                ["due to time <constraints>", "制約", "せいやく"]
            ],
            [
                [1371, [10771, 136], "distress", "苦しみ、悲嘆、苦難", []],
                ["be in economic <distress>", "苦難", "くなん"]
            ],
            [
                [1372, [10978, 335], "district", "地区", []],
                ["the city's business <district>", "地区", "ちく"]
            ],
            [
                [1373, [11503, 395], "prestige", "名声", []],
                ["gain wealth and <prestige>", "名声", "めいせい"]
            ],
            [
                [1374, [11377, 138], "restrain", "抑制する", []],
                ["<restrain> inflation", "抑制する", "よくせいする"]
            ],
            [
                [1375, [10618, 134], "restrict", "～を制限する", []],
                ["<restrict> freedom of speech", "制限する", "せいげんする"]
            ],
            [
                [
                    1376, [11624], "straightforward", "わかりやすい", [
                        [1912, "forward", "前方へ； ～(手紙・メール)を転送する"]
                    ]
                ],
                ["<straightforward> language", "わかりやすい", "わかりやすい"]
            ],
            [
                [1377, [10743, 137], "strain", "負担", []],
                ["put a <strain> on the heart", "負担", "ふたん"]
            ],
            [
                [1378, [10102, 18], "stress", "～を強調する", []],
                ["<stress> the need for information", "強調する", "きょうちょうする"]
            ],
            [
                [1379, [10165, 1791], "stretch", "～を広げる", []],
                ["<stretch> my legs", "広げる", "ひろげる"]
            ],
            [
                [1380, [10578, 135], "strict", "厳しい", []],
                ["<strict> rules", "厳しい", "きびしい"]
            ],
            [
                [1381, [133], "string", "ひも, 糸", []],
                ["elastic <string>", "ひも", "ひも"]
            ]
        ],
        ["liber : 自由", [
                [1382, [10146], "deliver", "～を配達する、渡す、～をする", []],
                ["<deliver> a message to a friend", "渡す", "わたす"]
            ],
            [
                [1383, [11179], "liberal", "自由主義の", [
                    [148, "liberty", "自由"]
                ]],
                ["<liberal> politics", "自由主義の", "じゆうしゅぎの"]
            ]
        ]
    ],
    ["争い・力・技術", ["able : 〜できる", [
                [1384, [229], "ability", "能力", []],
                ["His <ability> to focus is impressive.", "能力", "のうりょく"]
            ],
            [
                [1385, [10259, 317], "available", "手に入る、利用できる", []],
                ["information <available> to everyone", "利用できる", "りようできる"]
            ],
            [
                [1386, [10276, 231], "capable", "～する能力がある", []],
                ["He is <capable> of doing the job.", "能力がある", "のうりょくがある"]
            ],
            [
                [1387, [12002, 511], "compatible", "適合する", []],
                ["be <compatible> with their values", "適合する", "てきごうする"]
            ],
            [
                [
                    1388, [10560], "considerable", "かなりの", [
                        [899, "consider", "考慮する； みなす"]
                    ]
                ],
                ["spend <considerable> time", "かなりの", "かなりの"]
            ],
            [
                [1389, [10786], "disability", "障害", []],
                ["people with <disabilities>", "障害", "しょうがい"]
            ],
            [
                [1390, [10352, 455], "enable", "～を可能にする", []],
                ["<enable> people to live longer", "可能にする", "かのうにする"]
            ],
            [
                [1391, [11162, 1758], "flexible", "柔軟な", []],
                ["have <flexible> thinking", "柔軟な", "じゅうなんな"]
            ],
            [
                [1392, [11184, 1198], "incredible", "信じられない", []],
                ["an <incredible> story", "信じられない", "しんじられない"]
            ],
            [
                [1393, [11619, 5], "indispensable", "不可欠な", []],
                ["Water is <indispensable> to life.", "不可欠だ", "ふかけつだ"]
            ],
            [
                [1394, [11139, 938], "inevitable", "避けられない", []],
                ["Change is <inevitable>.", "避けられない", "さけられない"]
            ],
            [
                [1395, [11335, 1350], "liable", "しがちである、可能性が高い", []],
                ["be <liable> to forget it", "がちである", "がちである"]
            ],
            [
                [1396, [10822], "noble", "高貴な", []],
                ["a person of <noble> birth", "高貴な", "こうきな"]
            ],
            [
                [1397, [11665], "notable", "注目すべき", []],
                ["a <notable> exception", "注目すべき", "ちゅうもくすべき"]
            ],
            [
                [1398, [2124], "plausible", "もっともらしい、まことしやかな", []],
                [
                    "You need to come up with a more <plausible> excuse; otherwise no one will believe you.",
                    "もっともらしい", "もっともらしい"
                ]
            ],
            [
                [
                    1399, [10292], "reasonable", "理にかなった", [
                        [863, "reason", "理由、根拠； 理性； 論理的に考える"]
                    ]
                ],
                ["a <reasonable> explanation", "理にかなった", "りにかなった"]
            ],
            [
                [
                    1400, [11634], "respectable", "ちゃんとした", [
                        [43, "respect", "尊敬, 尊重, (in)点, 事項； ～を尊敬する, 尊重する"]
                    ]
                ],
                ["a girl from a <respectable> family", "ちゃんとした", "ちゃんとした"]
            ],
            [
                [
                    1401, [10427], "responsibility", "責任", [
                        [216, "responsible", "(～に対して)責任のある(for～)"]
                    ]
                ],
                ["take <responsibility> for the accident", "責任", "せきにん"]
            ],
            [
                [1402, [11125, 726], "visible", "目に見える", []],
                ["make <visible> progress", "目に見える", "めにみえる"]
            ],
            [
                [1403, [11676, 1754], "vulnerable", "受けやすい", []],
                ["be <vulnerable> to attack", "受けやすい", "うけやすい"]
            ]
        ],
        ["arm : 武器", [
                [1404, [10157], "alarm", "～をぎょっとさせる、おびえさせる", []],
                ["be <alarmed> by the noise", "ぎょっとする", "ぎょっとする"]
            ],
            [
                [1405, [12189, 1957], "arms", "軍備", []],
                ["<arms> control", "軍備", "ぐんび"]
            ],
            [
                [1406, [1956], "army", "陸軍、軍隊", []],
                ["the U.S. <Army>", "陸軍", "りくぐん"]
            ]
        ],
        ["art : 技術", [
                [1407, [12114, 1924], "art", "技術", []],
                ["the <art> of writing", "技術", "ぎじゅつ"]
            ],
            [
                [1408, [12129, 1114], "article", "記事、品物", []],
                ["a newspaper <article>", "記事", "きじ"],
                ["an <article> for sale", "品物", "しなもの"]
            ],
            [
                [
                    1409, [2014], "articulate", "～を(はっきり)言う、発音する； ～をつなぐ", []
                ],
                [
                    "The baby is just six months old, but she can <articulate> a few words.",
                    "はっきり発音する", "はっきりはつおんする"
                ]
            ],
            [
                [1410, [11843], "artifact", "工芸品", []],
                ["Asian art and <artifacts>", "工芸品", "こうげいひん"]
            ],
            [
                [1411, [10558, 1244], "artificial", "人工", []],
                ["<artificial> intelligence", "人工", "じんこう"]
            ]
        ],
        ["cle : 道具", [
                [1412, [11040, 1868], "curriculum", "教育課程", []],
                ["the high school <curriculum>", "教育課程", "きょういくかてい"]
            ],
            [
                [1413, [11002, 220], "obstacle", "障害", []],
                ["an <obstacle> to communication", "障害", "しょうがい"]
            ],
            [
                [1414, [11173, 1752], "ridiculous", "ばかげた", []],
                ["a <ridiculous> error", "ばかげた", "ばかげた"]
            ],
            [
                [1415, [11303, 645], "spectacle", "光景", []],
                ["a dramatic <spectacle>", "光景", "こうけい"]
            ],
            [
                [1416, [10714, 1893], "vehicle", "車、乗り物、手段", []],
                ["a <vehicle> for communication", "手段", "しゅだん"]
            ]
        ],
        ["pos, pow : 力、可能(power)", [
                [1417, [10377, 431], "possess", "～を持っている", []],
                ["<possess> great power", "持っている", "もっている"]
            ],
            [
                [
                    1418, [10315, 1355], "possibly", "ひょっとすると、どうしてもVできない", []
                ],
                ["He will <possibly> come.", "ひょっとすると", "ひょっとすると"]
            ],
            [
                [1419, [12005], "potent", "強力な", []],
                ["a <potent> weapon", "強力な", "きょうりょくな"]
            ],
            [
                [1420, [10554, 233], "potential", "潜在的な", []],
                ["<potential> danger", "潜在的な", "せんざいてきな"]
            ]
        ],
        ["vio : 暴力", [
                [1421, [11228, 809], "violate", "破る、違反する", []],
                ["<violate> the law", "違反する", "いはんする"]
            ],
            [
                [1422, [10457, 806], "violence", "暴力", []],
                ["<violence> on TV", "暴力", "ぼうりょく"]
            ]
        ],
        ["tech : 技術", [
                [1423, [11022, 51], "architecture", "建築", []],
                ["study modern <architecture>", "建築", "けんちく"]
            ],
            [
                [1424, [11484, 600], "arithmetic", "算数", []],
                ["reading, writing, and <arithmetic>", "算数", "さんすう"]
            ],
            [
                [1425, [11849], "hygiene", "衛生", []],
                ["good <hygiene> practices", "衛生", "えいせい"]
            ],
            [
                [1426, [10473, 1784], "technique", "技術", []],
                ["the <technique> of film-making", "技術", "ぎじゅつ"]
            ],
            [
                [1427, [1877], "technology", "科学技術", []],
                ["information <technology>", "科学技術", "かがくぎじゅつ"]
            ]
        ],
        ["fabr : 職人", [
                [1428, [11294, 1407], "fabric", "織物、布", []],
                ["the social <fabric> of Japan", "組織", "そしき"]
            ],
            [
                [1429, [2160], "forge", "～を偽造する", []],
                [
                    "The treaty was supposed to <forge> a close tie between the two countries.",
                    "強化する", "きょうかする"
                ]
            ]
        ],
        ["mai : 力を与える", [
                [1430, [2071], "dismay", "～を動揺させる； 動揺", []],
                [
                    "He was <dismayed> by a sudden change in his friends' attitudes.",
                    "動揺した", "どうようした"
                ]
            ],
            [
                [1431, [12014], "mighty", "強力な", []],
                ["a <mighty> king", "強力な", "きょうりょくな"]
            ]
        ]
    ],
    ["命令・統治", ["cracy : 統治", [
                [1432, [11853, 1052], "aristocracy", "貴族階級", []],
                ["the English <aristocracy>", "貴族階級", "きぞくかいきゅう"]
            ],
            [
                [
                    1433, [11932], "bureaucrat", "官僚", [
                        [1053, "bureaucracy", "官僚、官僚主義"]
                    ]
                ],
                ["government <bureaucrats>", "官僚", "かんりょう"]
            ],
            [
                [1434, [10710, 1049], "democracy", "民主主義、民主国家", []],
                ["a modern <democracy>", "民主国家", "みんしゅこくか"]
            ]
        ],
        ["dom : 支配", [
                [1435, [11510, 374], "domain", "領域", []],
                ["in the <domain> of psychology", "領域", "りょういき"]
            ],
            [
                [1436, [10295, 1415], "domestic", "家庭の、国内の", []],
                ["<domestic> violence", "家庭内", "かていない"]
            ],
            [
                [
                    1437, [10868], "dominate", "～を支配する", [
                        [680, "dominant", "支配的な、より優位にたつ"],
                        [12026, "predominantly", "主に"]
                    ]
                ],
                ["<dominate> the world economy", "支配する", "しはいする"]
            ],
            [
                [1438, [10694], "endanger", "～を危険にさらす", []],
                ["an <endangered> species", "絶滅危惧", "ぜつめつきぐ"]
            ],
            [
                [1439, [10726], "kingdom", "王国", []],
                ["the <kingdom> of Denmark", "王国", "おうこく"]
            ]
        ],
        ["drive : 操縦する", [
                [1440, [11424], "drift", "漂う", []],
                ["<drift> like a cloud", "ただよう", "ただよう"]
            ],
            [
                [1441, [12184], "drive", "追い、駆りたて、欲求", []],
                ["<drive> the dog away", "追い", "おい"],
                ["be <driven> by curiosity", "駆りたて", "かりたて"],
                ["my strong <drive> to succeed", "欲求", "よっきゅう"]
            ]
        ],
        ["govern : 統治する", [
                [
                    1442, [10396], "government", "政府", [
                        [1059, "govern", "統治する； 決定する、左右する"]
                    ]
                ],
                ["the Japanese <government>", "政府", "せいふ"]
            ],
            [
                [1443, [1085], "governor", "知事", []],
                ["The <governor> signed the bill into law.", "知事", "ちじ"]
            ]
        ],
        ["vince, vict : 征服する", [
                [1444, [10099, 627], "convince", "～を納得させる、確信させる", []],
                ["<convince> him that it is true", "確信させる", "かくしんさせる"]
            ],
            [
                [1445, [11526, 2121], "province", "州", []],
                ["the <province> of Quebec", "州", "しゅう"]
            ],
            [
                [1446, [392], "victory", "勝利", []],
                ["The Giants won a 2-1 <victory> over the Tigers.", "勝利",
                    "しょうり"
                ]
            ]
        ],
        ["ban : 禁止する", [
                [1447, [10123, 179], "abandon", "～を捨てる", []],
                ["an <abandoned> pet", "捨てられた", "すてられた"]
            ],
            [
                [1448, [10605, 153], "ban", "（公式に）～を禁止する", []],
                ["<ban> smoking in public places", "禁ずる", "きんずる"]
            ]
        ]
    ],
    ["与える・与えられたもの", ["aim, estim : 評価する", [
                [1449, [10082, 103], "aim", "～をねらう", []],
                ["<aim> at the Asian market", "ねらう", "ねらう"]
            ],
            [
                [1450, [10081, 592], "estimate", "～を推定する", []],
                ["the <estimated> population of Japan", "推定", "すいてい"]
            ],
            [
                [
                    1451, [11485], "self-esteem", "自尊心", [
                        [989, "esteem", "尊敬する、尊重する"]
                    ]
                ],
                ["people with low <self-esteem>", "自尊心", "じそんしん"]
            ]
        ],
        ["dat, dot, der : 与える", [
                [1452, [10337, 853], "add", "～を加える", []],
                ["<add> some milk to the soup", "加える", "くわえる"]
            ],
            [
                [1453, [11252, 1473], "donate", "提供する", []],
                ["<donate> blood and organs", "提供する", "ていきょうする"]
            ],
            [
                [1454, [11609, 1316], "dose", "量", []],
                ["take a large <dose> of vitamin C", "量", "りょう"]
            ],
            [
                [1455, [11031], "editor", "編集者", [
                    [1119, "edit", "～を編集する"]
                ]],
                ["the <editor> of a fashion magazine", "編集長", "へんしゅうちょう"]
            ],
            [
                [1456, [10136], "pardon", "～を許す", []],
                ["<Pardon> me.", "ごめんなさい", "ごめんなさい"]
            ],
            [
                [1457, [11272, 1495], "render", "OをCにする、変える", []],
                ["<render> water undrinkable", "する", "する"]
            ],
            [
                [1458, [11213, 698], "surrender", "降伏する", []],
                ["<surrender> to the US army", "降参する", "こうさんする"]
            ],
            [
                [1459, [10448, 1229], "tradition", "伝統", []],
                ["history and <tradition>", "伝統", "でんとう"]
            ],
            [
                [1460, [11178, 291], "up-to-date", "最新の", []],
                ["<up-to-date> fashions", "最新の", "さいしんの"]
            ]
        ],
        ["give : 与える", [
                [1461, [10171, 156], "forgive", "～を許す", []],
                ["<forgive> him for being late", "許す", "ゆるす"]
            ],
            [
                [
                    1462, [12205], "gifted", "才能ある", [
                        [228, "gift", "贈り物, (生まれつきの)才能"]
                    ]
                ],
                ["a <gifted> pianist", "才能ある", "さいのうある"]
            ],
            [
                [
                    1463, [12171, 1996], "given", "特定の、考慮すると、ことを考慮すると", []
                ],
                ["in a <given> situation", "特定の", "とくていの"],
                ["<given> the present conditions", "考慮すると", "こうりょすると"],
                ["<given> that you are young", "ことを考慮すると", "ことをこうりょすると"]
            ]
        ],
        ["range : 階級", [
                [1464, [10119], "arrange", "～の手はずを整える、～を配列する", []],
                ["<arrange> the meeting", "手はずを整える", "てはずをととのえる"]
            ],
            [
                [1465, [1109], "ranch", "牧場", []],
                ["The boy grew up with a herd of cattle on the <ranch>.", "牧場",
                    "ぼくじょう"
                ]
            ],
            [
                [1466, [10203, 375], "range", "範囲", []],
                ["a wide <range> of information", "範囲", "はんい"]
            ],
            [
                [1467, [10709, 1872], "rank", "地位", []],
                ["a man of high <rank>", "地位", "ちい"]
            ]
        ],
        ["tribute : 割り当てる", [
                [1468, [10657, 670], "attribute", "AはBのおかげだと思う", []],
                ["<attribute> success to luck", "おかげだと思う", "おかげだとおもう"]
            ],
            [
                [
                    1469, [10093, 669], "contribute", "～に貢献する、～の一因となる、AをBに寄付する", []
                ],
                ["<contribute> to world peace", "貢献する", "こうけんする"]
            ],
            [
                [1470, [10890, 668], "distribute", "～を分配する", []],
                ["<distribute> food equally", "分配する", "ぶんぱいする"]
            ],
            [
                [1471, [11005, 1225], "tribe", "部族", []],
                ["a Native American <tribe>", "部族", "ぶぞく"]
            ]
        ]
    ],
    ["法", ["just, jur : 法律", [
                [1472, [10156, 1376], "adjust", "～に慣れる、調節して合わせる", []],
                ["<adjust> to a new school", "慣れる", "なれる"]
            ],
            [
                [1473, [10173, 1660], "injure", "～を傷つける", []],
                ["be <injured> in the accident", "負傷する", "ふしょうする"]
            ],
            [
                [1474, [10061, 798], "judge", "～を判断する", []],
                ["<judge> a person by his looks", "判断する", "はんだんする"]
            ],
            [
                [1475, [11812, 799], "jury", "陪審員", []],
                ["the judge and <jury>", "陪審員", "ばいしんいん"]
            ],
            [
                [1476, [10982, 797], "justice", "正義", []],
                ["a strong sense of <justice>", "正義", "せいぎ"]
            ],
            [
                [1477, [1998], "justly", "正当に、当然のことながら", []],
                ["a <justly> deserved penalty", "当然の", "とうぜんの"]
            ],
            [
                [1478, [10742, 870], "prejudice", "偏見", []],
                ["<prejudice> against women", "偏見", "へんけん"]
            ]
        ],
        ["pen : 刑罰", [
                [1479, [10215], "pain", "苦痛", []],
                ["feel a sharp <pain>", "痛み", "いたみ"]
            ],
            [
                [1480, [11058, 781], "penalty", "刑", []],
                ["the death <penalty>", "刑", "けい"]
            ],
            [
                [1481, [10876, 780], "punish", "～を罰する", []],
                ["<punish> him for the crime", "罰する", "ばっする"]
            ]
        ],
        ["leg : 法", [
                [1482, [10306, 808], "legal", "合法の、法律の", []],
                ["the British <legal> system", "法律の", "ほうりつの"]
            ],
            [
                [
                    1483, [11583], "legislation", "法律", [
                        [1071, "legislate", "法律を制定する"]
                    ]
                ],
                ["gun control <legislation>", "法律", "ほうりつ"]
            ],
            [
                [1484, [11946, 2136], "legitimate", "正当な", []],
                ["a <legitimate> claim", "正当な", "せいとうな"]
            ],
            [
                [1485, [11114, 993], "loyal", "忠実な", []],
                ["a worker <loyal> to the company", "忠実な", "ちゅうじつな"]
            ],
            [
                [1486, [10969, 632], "privilege", "特権", []],
                ["white <privilege>", "特権", "とっけん"]
            ]
        ]
    ],
    ["願望", ["sper : 希望", [
                [1487, [11449, 767], "despair", "絶望", []],
                ["give up in <despair>", "絶望", "ぜつぼう"]
            ],
            [
                [1488, [10831], "desperate", "必死の", []],
                ["a <desperate> attempt", "必死の", "ひっしの"]
            ],
            [
                [1489, [10970], "prosperity", "繁栄", [
                    [388, "prosper", "繁栄する"]
                ]],
                ["economic <prosperity>", "繁栄", "はんえい"]
            ]
        ],
        ["will : 望み", [
                [1490, [12064, 1920], "will", "意思、遺言", []],
                ["against his <will>", "意思", "いし"],
                ["leave a <will>", "遺言", "ゆいごん"]
            ],
            [
                [
                    1491, [10272, 1360], "willing", "～する気がある、～してもかまわない", []
                ],
                ["I am <willing> to pay for good food.", "てもかまわない", "てもかまわない"]
            ]
        ],
        ["wish : 望む", [
                [1492, [694], "win", "勝つ； ～（試合など）に勝つ； を獲得する", []],
                ["<win> a game", "勝つ", "かつ"]
            ],
            [
                [1493, [10019], "wonder", "～かと疑問に思う", []],
                ["<wonder> where he has gone", "思う", "おもう"]
            ]
        ]
    ],
    ["約束", ["fide : 信じる", [
                [1494, [10481, 1196], "confidence", "自信", []],
                ["have <confidence> in my ability", "自信", "じしん"]
            ],
            [
                [1495, [11722, 2057], "defy", "逆らう", []],
                ["<defy> gravity", "逆らう", "さからう"]
            ],
            [
                [1496, [10723, 1193], "faith", "信頼", []],
                ["have <faith> in technology", "信頼", "しんらい"]
            ],
            [
                [1497, [11172, 1077], "federal", "連邦の", []],
                ["the <Federal> Government", "連邦", "れんぽう"]
            ]
        ],
        ["owe, deb : 負う", [
                [1498, [11039, 318], "debt", "借金", []],
                ["pay the <debt>", "借金", "しゃっきん"]
            ],
            [
                [1499, [12122, 418], "due", "せいで、十分な、予定だ、期限だ", []],
                ["He is tired <due> to  lack of sleep.", "せいで", "せいで"],
                ["pay <due> respect", "十分な", "じゅうぶんな"],
                ["The train  is <due> to  arrive at ten.", "予定だ", "よていだ"],
                ["The report is <due> next Wednesday.", "期限だ", "きげんだ"]
            ],
            [
                [1500, [10220, 485], "duty", "義務、関税", []],
                ["It is my <duty> to help you.", "義務", "ぎむ"]
            ],
            [
                [1501, [11315, 236], "endeavor", "活動", []],
                ["every field of human <endeavor>", "活動", "かつどう"]
            ],
            [
                [1502, [10329], "ought", "～すべきである", []],
                ["You <ought> to see a doctor", "べきだ", "べきだ"]
            ],
            [
                [1503, [10168, 319], "owe", "AのことはBのおかげだ", []],
                ["I <owe> my success to you.", "おかげだ", "おかげだ"]
            ],
            [
                [1504, [11700], "owing", "のために", []],
                ["<owing> to lack of fuel", "ために", "ために"]
            ],
            [
                [1505, [10151], "own", "～を所有している", []],
                ["<own> a house", "所有している", "しょゆうしている"]
            ]
        ],
        ["spond : 約束する", [
                [1506, [10655, 508], "correspond", "一致する", []],
                ["The fact <corresponds> to my theory.", "一致する", "いっちする"]
            ],
            [
                [1507, [10059, 1373], "respond", "～に返答する", []],
                ["<respond> to question", "答える", "こたえる"]
            ],
            [
                [
                    1508, [10427], "responsibility", "責任", [
                        [216, "responsible", "(～に対して)責任のある(for～)"]
                    ]
                ],
                ["take <responsibility> for the accident", "責任", "せきにん"]
            ],
            [
                [1509, [11604, 951], "spouse", "配偶者", []],
                ["rely on your <spouse>", "配偶者", "はいぐうしゃ"]
            ]
        ],
        ["vote : 誓う", [
                [1510, [10683, 1036], "devote", "～をささげる", []],
                ["He <devoted> himself to his work.", "ささげた", "ささげた"]
            ],
            [
                [1511, [10241, 1081], "vote", "投票", []],
                ["get 20% of the <vote>", "票", "ひょう"]
            ],
            [
                [1512, [11761, 1303], "vow", "誓う", []],
                ["<vow> to fight", "誓う", "ちかう"]
            ]
        ],
        ["wage : 誓約する", [
                [1513, [10122, 1034], "engage", "Aに従事する、Aを行う", []],
                ["<engage> in volunteer activities", "従事する", "じゅうじする"]
            ],
            [
                [1514, [10936], "wage", "賃金", []],
                ["work for low <wages>", "賃金", "ちんぎん"]
            ]
        ],
        ["peac : 合意", [
                [1515, [10242, 676], "impact", "影響、衝撃", []],
                ["a negative <impact> on the environment", "影響", "えいきょう"]
            ],
            [
                [1516, [12172], "pay", "給料、割に合う", []],
                ["equal <pay> for equal work", "給料", "きゅうりょう"],
                ["Honesty doesn't always <pay>.", "割に合う", "わりにあう"]
            ],
            [
                [1517, [11941, 1103], "peasant", "小作農", []],
                ["landless <peasants> in India", "小作農", "こさくのう"]
            ]
        ],
        ["credit : 信じる", [
                [1518, [12166, 1197], "credit", "功績、単位", []],
                ["<credit> for the discovery", "功績", "こうせき"],
                ["college <credits>", "単位", "たんい"]
            ],
            [
                [1519, [11184, 1198], "incredible", "信じられない", []],
                ["an <incredible> story", "信じられない", "しんじられない"]
            ]
        ]
    ],
    ["道徳・宗教", ["virtue : 美徳", [
                [
                    1520, [11194], "virtually", "ほとんど", [
                        [772, "virtual", "仮想の； 事実上の"]
                    ]
                ],
                ["<virtually> every woman", "ほとんど", "ほとんど"]
            ],
            [
                [1521, [10944, 771], "virtue", "美徳", []],
                ["the <virtue> of hard work", "美徳", "びとく"]
            ]
        ],
        ["sin : 罪", [
                [1522, [11806, 775], "sin", "罪", []],
                ["punishment for <sin>", "罪", "つみ"]
            ],
            [
                [1523, [11727, 2153], "soothe", "なだめる", []],
                ["<soothe> a crying child", "なだめる", "なだめる"]
            ]
        ],
        ["sacr : 神聖な", [
                [1524, [11625, 1209], "sacred", "聖", []],
                ["a land <sacred> to Islam", "聖", "せい"]
            ],
            [
                [1525, [10875, 1210], "sacrifice", "～を犠牲にする", []],
                ["<sacrifice> everything for love", "犠牲にする", "ぎせいにする"]
            ],
            [
                [1526, [11568, 1211], "saint", "聖", []],
                ["<Saint> Valentine", "聖", "せい"]
            ],
            [
                [1527, [2019], "sanction", "制裁； 是認、許可", []],
                ["The U.S. government imposed economic <sanctions> on Iraq.",
                    "制裁", "せいさい"
                ]
            ]
        ]
    ],
    ["移動させる", ["car, char : 積む", [
                [1528, [10454, 919], "career", "経歴", []],
                ["a long <career> as an actress", "経歴", "けいれき"]
            ],
            [
                [1529, [11910], "cargo", "貨物", []],
                ["a <cargo> ship", "貨物", "かもつ"]
            ],
            [
                [1530, [11792], "carriage", "車両", []],
                ["a train <carriage>", "車両", "しゃりょう"]
            ],
            [
                [1531, [12138, 1933], "charge", "料金、請求する、担当、告訴される", []],
                ["free of <charge>", "料金", "りょうきん"],
                ["<charge> a high price", "請求する", "せいきゅうする"],
                ["He is in <charge> of the case.", "担当", "たんとう"],
                ["be <charged> with murder", "告訴される", "こくそされる"]
            ],
            [
                [1532, [11780], "discharge", "放出する", []],
                ["<discharge> waste into rivers", "放出する", "ほうしゅつする"]
            ],
            [
                [1533, [215], "in charge of", "～を担当して, の責任者で", []],
                ["The youngest brother is <in charge of> feeding the ferrets.",
                    "担当している", "たんとうしている"
                ]
            ]
        ],
        ["fer, fort : 運、運ぶ", [
                [1534, [12134, 425], "bear", "耐える、産む、持つ", []],
                ["<bear> the pain", "耐える", "たえる"],
                ["<bear> a child", "産む", "うむ"],
                ["<bear> relation to the matter", "持つ", "もつ"]
            ],
            [
                [1535, [915], "birthrate", "出生率", []],
                ["<Birthrates> are decreasing in most developed countries.",
                    "出生率", "しゅっしょうりつ"
                ]
            ],
            [
                [1536, [10758, 223], "burden", "重荷", []],
                ["become a <burden> on society", "重荷", "おもに"]
            ],
            [
                [1537, [10928, 621], "conference", "会議", []],
                ["an international <conference>", "会議", "かいぎ"]
            ],
            [
                [1538, [10357, 519], "differ", "異なる", []],
                ["My opinion <differs> from hers.", "異なる", "ことなる"]
            ],
            [
                [1539, [11038, 332], "fare", "運賃", []],
                ["pay the bus <fare>", "運賃", "うんちん"]
            ],
            [
                [1540, [925], "farewell", "お別れ", []],
                ["a <farewell> party", "お別れ", "おわかれ"]
            ],
            [
                [1541, [11617, 1094], "fertile", "肥えた", []],
                ["<fertile> soil", "肥えた", "こえた"]
            ],
            [
                [1542, [12075, 301], "fortune", "財産、運", []],
                ["make a <fortune> in oil", "財産", "ざいさん"],
                ["bring good <fortune>", "運", "うん"]
            ],
            [
                [1543, [11142, 1739], "indifferent", "無関心だ", []],
                ["be <indifferent> to politics", "無関心だ", "むかんしんだ"]
            ],
            [
                [
                    1544, [11391], "inferred", "推量する", [
                        [544, "infer", "～を推察する"]
                    ]
                ],
                ["can be <inferred> from the passage", "推量する", "すいりょうする"]
            ],
            [
                [1545, [10014, 183], "offer", "～を申し出る", []],
                ["<offer> help to the poor", "申し出る", "もうしでる"]
            ],
            [
                [1546, [10034, 456], "prefer", "～をより好む", []],
                ["<prefer> tea to coffee", "好む", "このむ"]
            ],
            [
                [1547, [10049, 539], "refer", "～を指示する", []],
                ["What does this word <refer> to?", "指示する", "しじする"]
            ],
            [
                [1548, [10036, 1665], "suffer", "～を経験する、受ける、苦しむ", []],
                ["<suffer> heavy damage", "受ける", "うける"]
            ],
            [
                [1549, [10670, 661], "transfer", "～を移す", []],
                ["He was <transferred> to Osaka", "転勤した", "てんきんした"]
            ],
            [
                [1550, [10720, 1064], "welfare", "福祉", []],
                ["social <welfare>", "福祉", "ふくし"]
            ]
        ],
        ["gest : 運ぶ", [
                [1551, [11220, 1398], "digest", "消化する", []],
                ["<digest> food", "消化する", "しょうかする"]
            ],
            [
                [1552, [10654, 1860], "register", "～を登録する", []],
                ["<register> a new car", "登録する", "とうろくする"]
            ],
            [
                [1553, [10016, 449], "suggest", "～と提案する、～をほのめかす", []],
                ["<suggest> a new way", "提案する", "ていあんする"]
            ]
        ],
        ["mine, mount : 積み重ねる", [
                [1554, [12099, 830], "amount", "量、合計、等しい", []],
                ["a large <amount> of water", "量", "りょう"],
                ["The expenses <amount> to $90.", "合計", "ごうけい"],
                ["This act <amounts> to stealing.", "等しい", "ひとしい"]
            ],
            [
                [1555, [12004, 21], "eminent", "名高い", []],
                ["an <eminent> scientist", "名高い", "なだかい"]
            ],
            [
                [1556, [11865, 712], "menace", "脅威", []],
                ["a <menace> to world peace", "脅威", "きょうい"]
            ],
            [
                [1557, [11273], "mount", "すえつける、乗る", []],
                ["<mount> the engine in the car", "すえつける", "すえつける"]
            ],
            [
                [1558, [11170, 22], "prominent", "有名な", []],
                ["a <prominent> scientist", "有名な", "ゆうめいな"]
            ]
        ],
        ["mit, mis : 送る", [
                [1559, [10063, 655], "admit", "～を認める", []],
                ["I <admit> that I was wrong.", "認める", "みとめる"]
            ],
            [
                [
                    1560, [10610, 656], "commit",
                    "〈罪など〉を犯す、～をゆだねる、委任する、（本気で）取り組む", [
                        [10995, "committee", "委員会"]
                    ]
                ],
                ["<commit> a crime", "犯す", "おかす"]
            ],
            [
                [1561, [11288, 977], "compromise", "妥協", []],
                ["make a small <compromise>", "妥協", "だきょう"]
            ],
            [
                [
                    1562, [10641, 658], "dismiss", "〈考えなど〉を無視する、〈人〉を解雇する、解散する", []
                ],
                ["<dismiss> the idea as nonsense", "無視する", "むしする"]
            ],
            [
                [
                    1563, [11102], "emission", "排出", [
                        [99, "emit", "～を放出する, 排出する"]
                    ]
                ],
                ["greenhouse gas <emissions>", "排出", "はいしゅつ"]
            ],
            [
                [1564, [99], "emit", "～を放出する, 排出する", []],
                ["greenhouse gas <emissions>", "排出", "はいしゅつ"]
            ],
            [
                [1565, [11445, 1331], "mess", "めちゃくちゃ", []],
                ["The room is a <mess>.", "めちゃくちゃ", "めちゃくちゃ"]
            ],
            [
                [1566, [10767, 660], "mission", "使命、任務", []],
                ["carry out a dangerous <mission>", "任務", "にんむ"]
            ],
            [
                [1567, [11385, 657], "omit", "省く", []],
                ["<omit> the word", "省く", "はぶく"]
            ],
            [
                [1568, [10364, 154], "permit", "～を許す", []],
                ["<permit> him to go out", "許す", "ゆるす"]
            ],
            [
                [1569, [11304, 2008], "premise", "前提", []],
                ["the major <premise>", "前提", "ぜんてい"]
            ],
            [
                [1570, [11682], "promising", "前途有望な", []],
                ["a <promising> new actress", "前途有望な", "ぜんとゆうぼうな"]
            ],
            [
                [1571, [11201, 59], "submit", "Aに服従する、提出する", []],
                ["<submit> to authority", "服従する", "ふくじゅうする"]
            ],
            [
                [1572, [10636, 659], "transmit", "～を送る、伝える", []],
                ["<transmit> messages", "伝える", "つたえる"]
            ]
        ],
        ["nav : 船員", [
                [
                    1573, [11396], "navigate", "進路を決める", [
                        [1959, "navigation", "航海"]
                    ]
                ],
                ["<navigate> by the stars", "進路を決める", "しんろをきめる"]
            ],
            [
                [1574, [11523, 1958], "navy", "海軍", []],
                ["the British <Navy>", "海軍", "かいぐん"]
            ]
        ],
        ["port : 運ぶ、港", [
                [1575, [1133], "export", "～を輸出する； 輸出(品)", []],
                ["destination country for <export>", "輸出", "ゆしゅつ"]
            ],
            [
                [1576, [10137, 1132], "import", "～を輸入する", []],
                ["<import> food from abroad", "輸入する", "ゆにゅうする"]
            ],
            [
                [1577, [10412, 486], "opportunity", "機会", []],
                ["an <opportunity> to talk to her", "機会", "きかい"]
            ],
            [
                [1578, [2000], "reportedly", "報じられるところでは", []],
                [
                    "The sea level has <reportedly> been rising due to the melting of polar ice.",
                    "報じられている", "ほうじられている"
                ]
            ],
            [
                [1579, [10025], "support", "～を支持する", []],
                ["<support> the President", "支持する", "しじする"]
            ],
            [
                [
                    1580, [10199], "transportation", "交通機関、輸送", [
                        [662, "transport", "～を輸送する； 輸送、交通手段"]
                    ]
                ],
                ["use public <transportation>", "交通機関", "こうつうきかん"]
            ]
        ],
        ["pos, pone, paus : 置く", [
                [1581, [11041, 84], "component", "構成要素", []],
                ["the <components> of the body", "構成要素", "こうせいようそ"]
            ],
            [
                [1582, [10619, 80], "compose", "～を組み立てる", []],
                ["The body is <composed> of cells.", "構成されている", "こうせいされている"]
            ],
            [
                [1583, [11309], "compound", "化合物", []],
                ["organic <compounds>", "化合物", "かごうぶつ"]
            ],
            [
                [1584, [11279, 323], "deposit", "預金、頭金、堆積物", []],
                ["a large <deposit> in the bank", "預金", "よきん"]
            ],
            [
                [1585, [11345, 2141], "dispose", "処理する", []],
                ["<dispose> of garbage", "処分する", "しょぶんする"]
            ],
            [
                [1586, [10152, 89], "expose", "AをBにさらす", []],
                ["be <exposed> to danger", "さらされる", "さらされる"]
            ],
            [
                [1587, [10661, 90], "impose", "AをBに課す、押し付ける", []],
                ["<impose> rules on students", "押しつける", "おしつける"]
            ],
            [
                [
                    1588, [10368, 501], "oppose", "～に反対する", [
                        [11080, "opponent", "敵"]
                    ]
                ],
                ["<oppose> their marriage", "反対する", "はんたいする"]
            ],
            [
                [1589, [10967, 1803], "pause", "休止", []],
                ["a three-minute <pause>", "休止", "きゅうし"]
            ],
            [
                [1590, [12196, 1805], "pose", "引き起こす、提起する", []],
                ["<pose> a problem", "引き起こす", "ひきおこす"],
                ["<pose> a question", "提起する", "ていきする"]
            ],
            [
                [1591, [10278, 1735], "positive", "積極的な", []],
                ["<positive> thinking", "積極的な", "せっきょくてきな"]
            ],
            [
                [1592, [280], "posterior", "(～より)後の(to～)", []],
                ["the mood <posterior> to it", "後の", "あとの"]
            ],
            [
                [1593, [11423, 286], "postpone", "延期する", []],
                ["<postpone> making a decision", "延期する", "えんきする"]
            ],
            [
                [1594, [11875], "posture", "姿勢", []],
                ["maintain a good <posture>", "姿勢", "しせい"]
            ],
            [
                [1595, [10373, 450], "propose", "～を提案する", []],
                ["<propose> a new way", "提案する", "ていあんする"]
            ],
            [
                [1596, [10402, 196], "purpose", "目的", []],
                ["for peaceful <purposes>", "目的", "もくてき"]
            ],
            [
                [1597, [10130, 1802], "puzzle", "～を当惑させる", []],
                ["be <puzzled> by the problem", "頭を悩ませる", "あたまをなやませる"]
            ],
            [
                [1598, [10032, 448], "suppose", "～だと思う", []],
                ["You are <supposed> to wear a seat belt.", "ことになっている",
                    "ことになっている"
                ]
            ]
        ],
        ["ship : 船", [
                [1599, [10680, 185], "equip", "～を装備させる", []],
                ["The car is <equipped> with AI.", "装備されている", "そうびされている"]
            ],
            [
                [1600, [10463], "equipment", "設備", []],
                ["official <equipment>", "設備", "せつび"]
            ],
            [
                [1601, [11887], "shipping", "発送", []],
                ["packaging and <shipping>", "発想", "はっそう"]
            ],
            [
                [1602, [11221], "skip", "とばす、抜かす", []],
                ["<skip> lunch", "抜く", "ぬく"]
            ]
        ],
        ["thes : 置く", [
                [1603, [11029, 581], "hypothesis", "仮説", []],
                ["test the <hypothesis>", "仮説", "かせつ"]
            ],
            [
                [
                    1604, [11340], "synthetic", "合成の", [
                        [2059, "synthesize", "～を総合する、合成する、合成して作り出す"]
                    ]
                ],
                ["<synthetic> fiber", "合成", "ごうせい"]
            ],
            [
                [1605, [10989, 1820], "theme", "主題、テーマ", []],
                ["the <theme> of the book", "主題", "しゅだい"]
            ],
            [
                [1606, [11937, 584], "thesis", "論文", []],
                ["a graduation <thesis>", "論文", "ろんぶん"]
            ]
        ],
        ["way, vi : 運ぶ", [
                [1607, [10885, 1471], "convey", "～を伝える", []],
                ["<convey> information", "伝える", "つたえる"]
            ],
            [
                [1608, [10269, 40], "obvious", "明白な", []],
                ["an <obvious> mistake", "明白な", "めいはくな"]
            ],
            [
                [1609, [10284, 278], "previous", "前の", []],
                ["from the <previous> year", "前の", "まえの"]
            ],
            [
                [1610, [11679, 12], "trivial", "ささいな", []],
                ["a <trivial> matter", "ささいな", "ささいな"]
            ],
            [
                [1611, [10714, 1893], "vehicle", "車、乗り物、手段", []],
                ["a <vehicle> for communication", "手段", "しゅだん"]
            ],
            [
                [1612, [2038], "velocity", "速度", []],
                ["the <velocity> of light", "速度", "そくど"]
            ],
            [
                [1613, [11699], "via", "経由で", []],
                ["pay bills <via> the Internet", "経由で", "けいゆで"]
            ],
            [
                [1614, [11030], "voyage", "航海", []],
                ["the first <voyage> of Columbus", "航海", "こうかい"]
            ],
            [
                [1615, [12056], "way", "点、距離、方", []],
                ["In some <ways> they are right.", "点", "てん"],
                ["The island is a long <way> off.", "距離", "きょり"],
                ["Come this <way>, please.", "方", "ほう"]
            ],
            [
                [
                    1616, [10449, 1385], "weight", "体重", [
                        [10164, "weigh", "～の重さがある、～を比較検討する、よく考える"]
                    ]
                ],
                ["lose <weight>", "体重", "たいじゅう"]
            ]
        ],
        ["cue : 動かす", [
                [1617, [10345, 605], "discuss", "～を議論する", []],
                ["<discuss> the problem with him", "議論する", "ぎろんする"]
            ],
            [
                [1618, [10881], "rescue", "～を救助する", []],
                ["<rescue> a man from a fire", "救助する", "きゅうじょする"]
            ]
        ]
    ],
    ["移動する", ["amb : 歩き回る", [
                [1619, [11811, 1069], "ambassador", "大使", []],
                ["the French <ambassador> to Japan", "大使", "たいし"]
            ],
            [
                [1620, [11647, 39], "ambiguous", "あいまいな", []],
                ["an <ambiguous> expression", "あいまいな", "あいまいな"]
            ],
            [
                [1621, [10991], "ambition", "熱望", []],
                ["his <ambition> to be a writer", "熱望", "ねつぼう"]
            ],
            [
                [
                    1622, [2085], "ambivalent", "矛盾する、相反する、どちらか決めかねて", []
                ],
                [
                    "Melinda is <ambivalent> about whether or not she should marry Tom.",
                    "矛盾する", "むじゅんする"
                ]
            ],
            [
                [1623, [11562, 1155], "ambulance", "救急車", []],
                ["Call an <ambulance> right away.", "救急車", "きゅうきゅうしゃ"]
            ],
            [
                [1624, [11986, 838], "ample", "豊富に", []],
                ["have <ample> opportunity to learn", "豊富に", "ほうふに"]
            ],
            [
                [1625, [1068], "embassy", "大使館", []],
                ["the British <Embassy>", "大使館", "たいしかん"]
            ]
        ],
        ["cess, cede : 進む", [
                [1626, [10251, 1783], "access", "利用する権利", []],
                ["a have <access> to the Internet", "利用", "りよう"]
            ],
            [
                [1627, [10503, 293], "ancestor", "祖先", []],
                ["the common <ancestors> of all humans", "祖先", "そせん"]
            ],
            [
                [1628, [10604, 168], "cease", "～しなくなる", []],
                ["Some countries <ceased> to exist.", "しなくなった", "しなくなった"]
            ],
            [
                [1629, [649], "concede", "～を認める、譲歩する", []],
                ["He reluctantly <conceded> to their demands.", "認めた", "みとめた"]
            ],
            [
                [1630, [10893, 648], "exceed", "～を超える", []],
                ["Demand <exceeds> supply.", "超える", "こえる"]
            ],
            [
                [
                    1631, [11136], "excessive", "過度の", [
                        [1431, "excess", "超過、過剰な"]
                    ]
                ],
                ["<excessive> use of alcohol", "過度の", "かどの"]
            ],
            [
                [1632, [11694], "necessarily", "必ずしも", []],
                ["not <necessarily> true", "必ずしも", "かならずしも"]
            ],
            [
                [1633, [11271, 279], "precede", "先行する", []],
                ["Speech <precedes> writing.", "先行する", "せんこうする"]
            ],
            [
                [1634, [11820], "predecessor", "前任者", []],
                ["his <predecessor> as manager", "前任", "ぜんにん"]
            ],
            [
                [1635, [10983], "procedure", "手続き", []],
                ["the check-in <procedure>", "手続き", "てつづき"]
            ],
            [
                [
                    1636, [10601, 647], "proceed", "進む", [
                        [12098, "process", "過程、加工する、処理する"]
                    ]
                ],
                ["<proceed> straight ahead", "進む", "すすむ"]
            ],
            [
                [1637, [10435], "professor", "教授", []],
                ["a <professor> at Boston University", "教授", "きょうじゅ"]
            ],
            [
                [1638, [297], "recede", "後退する", []],
                [
                    "Glaciers have been <receding> around the world due to global warming.",
                    "後退している", "こうたいしている"
                ]
            ],
            [
                [1639, [11312, 298], "recession", "不景気、不況", []],
                ["the worst economic <recession>", "不況", "ふきょう"]
            ],
            [
                [1640, [12167, 650], "succeed", "受け継ぐ", []],
                ["<succeed> to the crown", "受け継ぐ", "うけつぐ"]
            ]
        ],
        ["cour : 走る", [
                [1641, [2174], "corridor", "廊下", []],
                [
                    "I walked down the <corridor> and entered the room at the far end.",
                    "廊下", "ろうか"
                ]
            ],
            [
                [1642, [299], "currency", "通貨, 普及", []],
                ["Twelve countries have adopted the euro as their <currency>.",
                    "通貨", "つうか"
                ]
            ],
            [
                [1643, [10273, 289], "current", "最新の", []],
                ["the <current> international situation", "今日の", "きょうの"]
            ],
            [
                [1644, [11040, 1868], "curriculum", "教育課程", []],
                ["the high school <curriculum>", "教育課程", "きょういくかてい"]
            ],
            [
                [1645, [11841, 2010], "discourse", "論説", []],
                ["a <discourse> on politics", "論説", "ろんせつ"]
            ],
            [
                [1646, [10862, 1025], "occur", "起こる", []],
                ["This problem often <occurs>.", "起こる", "おこる"]
            ]
        ],
        ["gres, gra : 歩む", [
                [1647, [11143, 807], "aggressive", "攻撃的な", []],
                ["children's <aggressive> behavior", "攻撃的な", "こうげきてきな"]
            ],
            [
                [1648, [11056, 1072], "congress", "議会", []],
                ["the United States <Congress>", "議会", "ぎかい"]
            ],
            [
                [
                    1649, [11715], "degrade", "悪化させる", [
                        [1870, "grade", "等級、学生； 評価、成績"]
                    ]
                ],
                ["<degrade> the environment", "悪化させる", "あっかさせる"]
            ],
            [
                [1650, [12143, 1422], "degree", "程度、学位", []],
                ["agree to some <degree>", "程度", "ていど"],
                ["get a master's <degree>", "学位", "がくい"]
            ],
            [
                [1651, [10588], "gradually", "だんだん", [
                    [1433, "gradual", "徐々の"]
                ]],
                ["<gradually> become colder", "だんだん", "だんだん"]
            ],
            [
                [1652, [10087], "graduate", "～を卒業する", []],
                ["<graduate> from high school", "卒業する", "そつぎょうする"]
            ],
            [
                [1653, [11028, 1397], "ingredient", "材料", []],
                ["the <ingredients> of the cake", "材料", "ざいりょう"]
            ],
            [
                [1654, [10193, 1045], "progress", "進歩、前進", []],
                ["You've made <progress> in English", "進歩", "しんぽ"]
            ]
        ],
        ["it, ish, rt : 行く", [
                [1655, [10991], "ambition", "熱望", []],
                ["his <ambition> to be a writer", "熱望", "ねつぼう"]
            ],
            [
                [1656, [10428, 582], "experiment", "実験", []],
                ["<experiments> with animals", "実験", "じっけん"]
            ],
            [
                [
                    1657, [11802], "expertise", "専門知識", [
                        [593, "expert", "専門家； (～に)熟達した(at, in～)"]
                    ]
                ],
                ["<expertise> in programming", "専門知識", "せんもんちしき"]
            ],
            [
                [1658, [11156, 276], "initial", "最初の", []],
                ["the <initial> stages of development", "最初の", "さいしょの"]
            ],
            [
                [1659, [11293, 1780], "initiative", "構想、主導権、", []],
                ["a new peace <initiative>", "構想", "こうそう"]
            ],
            [
                [1660, [12045, 421], "issue", "問題、出す、号", []],
                ["a political <issue>", "問題", "もんだい"],
                ["<issue> an order", "出す", "だす"],
                ["the latest <issue> of Time", "号", "ごう"]
            ],
            [
                [1661, [403], "perish", "消滅する, 死ぬ", []],
                ["The people <perished> in the accident.", "亡くなった", "なくなった"]
            ],
            [
                [1662, [11461, 667], "transition", "移り変わり", []],
                ["a seasonal <transition>", "移り変わり", "うつりかわり"]
            ]
        ],
        ["mig, mut, mon : 移動する", [
                [1663, [10254, 14], "common", "共通の、普通の", []],
                ["a <common> language", "共通の", "きょうつうの"]
            ],
            [
                [1664, [954], "communicate", "(～と)意志の疎通をする(with)", []],
                [
                    "By connecting to the Internet, you can <communicate> with people across the world.",
                    "意志の疎通をする", "いしのそつうをする"
                ]
            ],
            [
                [
                    1665, [11838], "communist", "共産主義の", [
                        [1055, "communism", "共産主義"]
                    ]
                ],
                ["former <communist> countries", "共産主義の", "きょうさんしゅぎの"]
            ],
            [
                [1666, [953], "community", "地域社会、共同体", []],
                ["a local <community>", "地域社会", "ちいきしゃかい"]
            ],
            [
                [1667, [11248, 1418], "commute", "通勤する、通学する", []],
                ["<commute> from Chiba to Tokyo", "通勤する", "つうきんする"]
            ],
            [
                [1668, [350], "emigrate", "(国外へ)移住する", []],
                ["My grandparents <emigrated> from Italy.", "移住した", "いじゅうした"]
            ],
            [
                [1669, [10713], "immigrant", "移民", [
                    [349, "immigrate", "移住する"]
                ]],
                ["<immigrants> from Mexico", "移民", "いみん"]
            ],
            [
                [1670, [11157, 1174], "immune", "免疫", []],
                ["the body's <immune> system", "免疫", "めんえき"]
            ],
            [
                [1671, [11367, 348], "migrate", "移住する", []],
                ["<migrate> to California", "移住する", "いじゅうする"]
            ],
            [
                [1672, [11926], "mutation", "突然変異", []],
                ["a genetic <mutation>", "突然変異", "とつぜんへんい"]
            ],
            [
                [1673, [11135, 495], "mutual", "相互の", []],
                ["<mutual> understanding", "相互の", "そうごの"]
            ]
        ],
        ["mov : 動く(move)", [
                [1674, [1894], "automobile", "自動車", []],
                ["purchased a new <automobile> for commuting", "自動車", "じどうしゃ"]
            ],
            [
                [1675, [10474, 748], "emotion", "感情", []],
                ["express <emotions>", "感情", "かんじょう"]
            ],
            [
                [1676, [10575], "mobile", "流動的な", []],
                ["a <mobile> society", "流動的な", "りゅうどうてきな"]
            ],
            [
                [1677, [2037], "momentum", "力、勢い、運動量", []],
                [
                    "After the long recession, Japan's economy is gaining <momentum>.",
                    "勢い", "いきおい"
                ]
            ],
            [
                [1678, [11017, 786], "motive", "動機", []],
                ["the <motive> for the crime", "動機", "どうき"]
            ],
            [
                [1679, [12192], "move", "感動した", []],
                ["She was <moved> by my story.", "感動した", "かんどうした"]
            ],
            [
                [1680, [10361, 186], "promote", "～を促進する", []],
                ["<promote> economic growth", "促進する", "そくしんする"]
            ],
            [
                [1681, [11127, 368], "remote", "へんぴな", []],
                ["live in a <remote> village", "へんぴな", "へんぴな"]
            ],
            [
                [1682, [10089, 173], "remove", "～を移す、取り去る", []],
                ["<remove> the cover", "取り除く", "とりのぞく"]
            ]
        ],
        ["pete : 進む", [
                [1683, [11003, 1391], "appetite", "食欲", []],
                ["have no <appetite>", "食欲", "しょくよく"]
            ],
            [
                [
                    1684, [10388, 705], "compete", "競争する", [
                        [11622, "competent", "有能な"]
                    ]
                ],
                ["<compete> with him for the gold medal", "競争する", "きょうそうする"]
            ],
            [
                [1685, [12019, 258], "perpetual", "永続する", []],
                ["<perpetual> peace", "永続する", "えいぞくする"]
            ]
        ],
        ["quest, quir : 探し求める", [
                [1686, [10073, 246], "acquire", "～を習得する", []],
                ["<acquire> a language", "習得する", "しゅうとくする"]
            ],
            [
                [1687, [10900, 693], "conquer", "～を征服する", []],
                ["<conquer> the world", "征服する", "せいふくする"]
            ],
            [
                [1688, [1730], "exquisite", "精緻な、素晴らしい", []],
                ["an <exquisite> piece of artwork", "精緻な", "せいちな"]
            ],
            [
                [
                    1689, [10768], "inquiry", "調査、質問、問い合わせ", [
                        [
                            578, "inquire",
                            "(～について)尋ねる(about～)； (～を)調査する(into～)"
                        ]
                    ]
                ],
                ["an <inquiry> into the accident", "調査", "ちょうさ"]
            ],
            [
                [1690, [11892], "quest", "探究", []],
                ["the <quest> for the truth", "探究", "たんきゅう"]
            ],
            [
                [1691, [2145], "questionnaire", "アンケート調査", []],
                ["Please fill out the <questionnaire> and email it to us.",
                    "アンケート", "あんけえと"
                ]
            ],
            [
                [1692, [10017, 635], "require", "～を必要とする", []],
                ["<require> more attention", "必要とする", "ひつようとする"]
            ]
        ],
        ["sca : 登る", [
                [1693, [1491], "ascend", "上る", []],
                ["The balloon <ascended> to the height of 1,000 feet.", "上がった",
                    "あがった"
                ]
            ],
            [
                [1694, [10677, 1490], "descend", "下る、降りる", []],
                ["<descend> to the ground", "降りる", "おりる"]
            ],
            [
                [1695, [1424], "scale", "規模、程度", []],
                ["Tropical forest have been cut down on a large <scale>.", "規模",
                    "きぼ"
                ]
            ],
            [
                [1696, [2011], "transcend", "～を越える、超越する", []],
                ["Music <transcends> national boundaries.", "越える", "こえる"]
            ]
        ],
        ["vade : 進んでいく", [
                [1697, [1476], "evade", "～を避ける、回避する", []],
                [
                    "The boy tried to <evade> his responsibility by blaming his younger brother.",
                    "回避しようと", "かいひしようと"
                ]
            ],
            [
                [1698, [10902, 345], "invade", "～に侵入する", []],
                ["<invade> Poland", "侵入する", "しんにゅうする"]
            ]
        ],
        ["vent : 来る", [
                [1699, [11860, 2133], "advent", "出現、到来", []],
                ["the <advent> of the Internet", "出現", "しゅつげん"]
            ],
            [
                [1700, [10553, 479], "convenient", "都合がいい", []],
                ["when it's <convenient> for you", "都合がいい", "つごうがいい"]
            ],
            [
                [1701, [10778, 1232], "convention", "慣習、しきたり、会議、大会", []],
                ["follow social <conventions>", "慣習", "かんしゅう"]
            ],
            [
                [1702, [1021], "event", "(重要な)出来事、事件", []],
                ["a historic <event>", "事件", "じけん"]
            ],
            [
                [1703, [10585, 1444], "eventually", "ついに", []],
                ["He <eventually> became President.", "ついに", "ついに"]
            ],
            [
                [1704, [11576], "intervention", "介入", []],
                ["military <intervention> in Iraq", "介入", "かいにゅう"]
            ],
            [
                [1705, [10360], "invent", "～を発明する", []],
                ["<invent> a time machine", "発明する", "はつめいする"]
            ],
            [
                [1706, [10038, 160], "prevent", "～をさまたげる", []],
                ["<prevent> him from sleeping", "さまたげる", "さまたげる"]
            ],
            [
                [1707, [11603, 328], "revenue", "収入", []],
                ["have <revenue> of $100,000", "収入", "しゅうにゅう"]
            ],
            [
                [1708, [11492, 1421], "souvenir", "みやげ物", []],
                ["a <souvenir> shop in Hong Kong", "みやげ物", "みやげもの"]
            ],
            [
                [1709, [10766], "venture", "冒険的事業", []],
                ["a joint <venture> with Taiwan", "事業", "じぎょう"]
            ]
        ],
        ["lapse : 滑る", [
                [1710, [10648, 406], "collapse", "崩壊する", []],
                ["The building <collapsed>.", "崩壊した", "ほうかいした"]
            ],
            [
                [1711, [2040], "lapse", "(時間の)経過； (ちょっとした)誤り", []],
                ["a <lapse> of time", "経過", "けいか"]
            ]
        ],
        ["run : 走る", [
                [1712, [11176, 1806], "random", "無作為な", []],
                ["a <random> choice", "無作為な", "むさくいな"]
            ],
            [
                [1713, [12028, 1905], "run", "経営する", []],
                ["<run> a big company", "経営する", "けいえいする"]
            ]
        ],
        ["come : 来る", [
                [1714, [10458, 326], "income", "所得", []],
                ["low-<income> families", "所得", "しょとく"]
            ],
            [
                [1715, [11082, 327], "outcome", "結果", []],
                ["the <outcome> of the race", "結果", "けっか"]
            ],
            [
                [1716, [10376, 224], "overcome", "～に打ち勝つ", []],
                ["<overcome> difficulties", "打ち勝つ", "うちかつ"]
            ],
            [
                [1717, [11884], "shortcoming", "欠点", []],
                ["put up with her <shortcomings>", "欠点", "けってん"]
            ]
        ]
    ],
    ["get・keep", ["amp, mpt, sume : 取る", [
                [1718, [12119, 430], "assume", "思い込む、引き受ける", []],
                ["<assume> that money can buy happiness", "思い込む", "おもいこむ"],
                ["<assume> responsibility", "引き受ける", "ひきうける"]
            ],
            [
                [1719, [10387, 1125], "consume", "～を消費する", []],
                ["<consume> a lot of energy", "消費する", "しょうひする"]
            ],
            [
                [
                    1720, [11229], "presume", "推定する、思う", [
                        [2001, "presumably", "おそらく、たぶん"]
                    ]
                ],
                ["He is <presumed> innocent.", "推定される", "すいていされる"]
            ],
            [
                [1721, [10688, 264], "prompt", "～を促す", []],
                ["<prompt> him to speak", "促す", "うながす"]
            ],
            [
                [1722, [11387, 1501], "resume", "再開する", []],
                ["<resume> normal activities", "再開する", "さいかいする"]
            ]
        ],
        ["bar : 借りる(borrow)", [
                [1723, [11509], "bargain", "掘り出し物", []],
                ["This house is a <bargain>.", "掘り出し物", "ほりだしもの"]
            ],
            [
                [1724, [10359], "borrow", "～を借りる", []],
                ["<borrow> a book from a friend", "借りる", "かりる"]
            ]
        ],
        ["cap, cep, chas, ceive, cid : つかみ取る、落ちる、運", [
                [1725, [10333, 438], "accept", "～を受け入れる", []],
                ["<accept> the truth as it is", "受け入れる", "うけいれる"]
            ],
            [
                [
                    1726, [10599], "accidentally", "偶然", [
                        [1023, "accident", "(偶然の)事故、事件； 偶然"]
                    ]
                ],
                ["<accidentally> discover an island", "偶然", "ぐうぜん"]
            ],
            [
                [1727, [11343, 2079], "anticipate", "予想する", []],
                ["<anticipate> the future", "予想する", "よそうする"]
            ],
            [
                [1728, [10276, 231], "capable", "～する能力がある", []],
                ["He is <capable> of doing the job.", "能力がある", "のうりょくがある"]
            ],
            [
                [1729, [10248, 232], "capacity", "能力", []],
                ["man's great <capacity> to learn", "能力", "のうりょく"]
            ],
            [
                [1730, [10672, 150], "capture", "～を捕らえる", []],
                ["<capture> wild animals", "捕らえる", "とらえる"]
            ],
            [
                [1731, [12034, 426], "case", "事実、事件、主張、患者", []],
                ["It is also the <case> with him.", "事実", "じじつ"],
                ["a murder <case>", "事件", "じけん"],
                ["make a <case> for war", "主張", "しゅちょう"],
                ["new <cases> of malaria", "患者", "かんじゃ"]
            ],
            [
                [1732, [10804, 1835], "casual", "形式ばらない、気楽な", []],
                ["wear <casual> clothes", "気楽な", "きらくな"]
            ],
            [
                [1733, [1613], "catch up with", "～に追いつく", []],
                [
                    "After missing school for a week, she had lots of schoolwork to <catch up with>.",
                    "追いつく", "おいつく"
                ]
            ],
            [
                [1734, [2166], "cater", "(食事などを)まかなう、(要求に)応じる", []],
                [
                    "The city has many hotels that <cater> to the increasing number of foreign tourists,",
                    "要望に応じる", "ようぼうにおうじる"
                ]
            ],
            [
                [1735, [12091, 1913], "chance", "可能性", []],
                ["the <chance> of making them angry", "可能性", "かのうせい"]
            ],
            [
                [1736, [10687], "chase", "～を追いかける", []],
                ["<chase> the car", "追跡する", "ついせきする"]
            ],
            [
                [1737, [10681], "cheat", "いかさまをする", []],
                ["<cheat> consumers", "だます", "だます"]
            ],
            [
                [1738, [11231, 284], "coincide", "同時に起きる、重なる", []],
                ["His birthday will <coincides> with mine.", "重なる", "かさなる"]
            ],
            [
                [
                    1739, [11264, 719], "conceive", "想像する", [
                        [11111, "concept", "概念"]
                    ]
                ],
                ["<conceive> of life as a game", "考える", "かんがえる"]
            ],
            [
                [1740, [11111], "concept", "概念", []],
                ["the <concept> of time", "概念", "がいねん"]
            ],
            [
                [1741, [11546, 399], "decay", "腐敗", []],
                ["prevent the <decay> of food", "腐敗", "ふはい"]
            ],
            [
                [1742, [10884, 720], "deceive", "～をだます", []],
                ["It is easy to <deceive> people.", "だます", "だます"]
            ],
            [
                [1743, [10076], "escape", "逃げる", []],
                ["<escape> from reality", "逃避する", "とうひする"]
            ],
            [
                [
                    1744, [10328, 445], "except", "～を除いて", [
                        [10935, "exception", "例外"]
                    ]
                ],
                ["work every day <except> Sunday", "以外", "いがい"]
            ],
            [
                [1745, [11054, 1022], "incident", "出来事", []],
                ["the small <incidents> of everyday life", "出来事", "できごと"]
            ],
            [
                [
                    1746, [10217, 254], "occasion", "場合、機会", [
                        [10317, "occasionally", "時々"]
                    ]
                ],
                ["on special <occasions>", "場合", "ばあい"]
            ],
            [
                [1747, [10724], "occupation", "職業、占領", []],
                ["a well-paid <occupation>", "職業", "しょくぎょう"]
            ],
            [
                [
                    1748, [10150, 347], "occupy", "～を占める", [
                        [10724, "occupation", "職業、占領"],
                        [11976, "preoccupied", "頭がいっぱいだ"]
                    ]
                ],
                ["<occupy> a high position", "占める", "しめる"]
            ],
            [
                [1749, [10166, 1030], "participate", "Aに参加する", []],
                ["<participate> in the meeting", "参加する", "さんかする"]
            ],
            [
                [1750, [10155, 718], "perceive", "～を知覚する", []],
                ["<perceive> danger", "気づく", "きづく"]
            ],
            [
                [1751, [10547], "principal", "主要な", []],
                ["the <principal> cities of Europe", "主要な", "しゅような"]
            ],
            [
                [1752, [10218, 1043], "principle", "原理、原則", []],
                ["the <principle> of free trade", "原則", "げんそく"]
            ],
            [
                [1753, [10887, 315], "purchase", "～を購入する", []],
                ["<purchase> the land", "購入する", "こうにゅうする"]
            ],
            [
                [
                    1754, [11308], "reception", "もてなし", [
                        [437, "receive", "～を受け取る"]
                    ]
                ],
                ["receive a warm <reception>", "もてなし", "もてなし"]
            ],
            [
                [1755, [11548, 1809], "recipe", "秘けつ", []],
                ["a <recipe> for happiness", "秘けつ", "ひけつ"]
            ],
            [
                [1756, [12021, 1352], "susceptible", "かかりやすい", []],
                ["be <susceptible> to disease", "かかりやすい", "かかりやすい"]
            ]
        ],
        ["clip : 集める", [
                [1757, [10638, 2100], "clap", "〈手など〉をたたく", []],
                ["<Clap> your hands as you sing.", "たたき", "たたき"]
            ],
            [
                [1758, [11934, 1308], "clash", "衝突", []],
                ["a <clash> of civilization", "衝突", "しょうとつ"]
            ],
            [
                [1759, [11360, 111], "cling", "固執する", []],
                ["<cling> to tradition", "固執する", "こしつする"]
            ],
            [
                [1760, [10976, 1323], "clue", "手がかり", []],
                ["a <clue> to the mystery", "手がかり", "てがかり"]
            ],
            [
                [1761, [11813, 1455], "cluster", "集団", []],
                ["a <cluster> of neurons", "集団", "しゅうだん"]
            ]
        ],
        ["custom : 慣れる", [
                [1762, [10797, 1231], "accustomed", "慣れた", []],
                ["become <accustomed> to driving", "慣れる", "なれる"]
            ],
            [
                [1763, [10195, 1230], "custom", "習慣、税関", []],
                ["the <custom> of tipping", "習慣", "しゅうかん"]
            ]
        ],
        ["hold : 保つ", [
                [1764, [11382, 169], "halt", "止める", []],
                ["<halt> global warming", "止める", "とめる"]
            ],
            [
                [
                    1765, [12074], "hold", "開く、考える", [
                        [1579, "hold true [good]", "当てはまる、通用する"]
                    ]
                ],
                ["<hold> a meeting", "開く", "ひらく"],
                ["They <hold> that the earth  is flat.", "考える", "かんがえる"]
            ],
            [
                [1766, [10483, 1414], "household", "家庭", []],
                ["<household> goods", "家庭", "かてい"]
            ]
        ],
        ["lect, leg : 集める、選ぶ", [
                [1767, [10507, 1876], "colleague", "同僚", []],
                ["my friends and <colleagues>", "同僚", "どうりょう"]
            ],
            [
                [
                    1768, [11656], "collective", "集団", [
                        [123, "collect", "～を集める； 徴収する"]
                    ]
                ],
                ["take <collective> action", "集団", "しゅうだん"]
            ],
            [
                [1769, [11073, 567], "dialect", "方言", []],
                ["speak the local <dialect>", "方言", "ほうげん"]
            ],
            [
                [1770, [11644], "diligent", "勤勉な", []],
                ["a <diligent> student", "勤勉な", "きんべんな"]
            ],
            [
                [1771, [10669, 1080], "elect", "～を選挙で選ぶ", []],
                ["be <elected> President", "選ばれる", "えらばれる"]
            ],
            [
                [1772, [1792], "elite", "エリート、精鋭； エリートの", []],
                ["the social <elite>", "エリート", "えりいと"]
            ],
            [
                [1773, [10562], "intellectual", "知的な", [
                    [888, "intellect", "知性"]
                ]],
                ["high <intellectual> ability", "知的", "ちてき"]
            ],
            [
                [1774, [889], "intelligence", "知性； 諜報", []],
                [
                    "Still, women are evaluated in terms of their looks, not of their <intelligence>.",
                    "知性", "ちせい"
                ]
            ],
            [
                [1775, [890], "intelligible", "理解可能な、判読可能な", []],
                ["She was so drunk that she was hardly <intelligible>.",
                    "理解できなかった", "りかいできなかった"
                ]
            ],
            [
                [1776, [10489], "lecture", "講義", []],
                ["a <lecture> on history", "講義", "こうぎ"]
            ],
            [
                [1777, [11839, 936], "legacy", "遺産", []],
                ["a <legacy> of the Renaissance", "遺産", "いさん"]
            ],
            [
                [1778, [11019, 1236], "legend", "伝説", []],
                ["the <legend> of Robin Hood", "伝説", "でんせつ"]
            ],
            [
                [1779, [12144], "lesson", "教訓", []],
                ["learn a <lesson> from the failure", "教訓", "きょうくん"]
            ],
            [
                [1780, [10658, 19], "neglect", "～を無視する、怠る", []],
                ["<neglect> human rights", "無視する", "むしする"]
            ],
            [
                [
                    1781, [11902], "recollection", "記憶", [
                        [902, "recollect", "思い出す"]
                    ]
                ],
                ["have no <recollection> of the past", "記憶", "きおく"]
            ],
            [
                [1782, [10370], "select", "～を選ぶ", []],
                ["<select> the best answer", "選ぶ", "えらぶ"]
            ]
        ],
        ["lot : くじ引き", [
                [1783, [12193, 1915], "lot", "場、運命", []],
                ["a parking <lot>", "場", "じょう"],
                ["She accepted her <lot>.", "運命", "うんめい"]
            ],
            [
                [1784, [11491], "lottery", "宝くじ", []],
                ["win the <lottery>", "宝くじ", "たからくじ"]
            ]
        ],
        ["pre, prize : 価値を保つ", [
                [
                    1785, [12131, 986], "appreciate", "高く評価する、鑑賞する、感謝する", []
                ],
                ["<appreciate> his talent", "高く評価する", "たかくひょうかする"],
                ["<appreciate> music", "鑑賞する", "かんしょうする"],
                ["I <appreciate> your help.", "感謝する", "かんしゃする"]
            ],
            [
                [1786, [11845, 2080], "apprehension", "不安", []],
                ["watch with <apprehension>", "不安", "ふあん"]
            ],
            [
                [
                    1787, [11260, 898], "comprehend", "理解する", [
                        [11637, "comprehensive", "包括的な"]
                    ]
                ],
                ["the ability to <comprehend> language", "理解する", "りかいする"]
            ],
            [
                [1788, [11236, 2063], "comprise", "構成される、構成する、占める", []],
                ["The group <comprises> ten members.", "構成される", "こうせいされる"]
            ],
            [
                [1789, [10737, 193], "enterprise", "企業、事業", []],
                ["a private <enterprise>", "企業", "きぎょう"]
            ],
            [
                [1790, [11857, 309], "entrepreneur", "起業家", []],
                ["a successful <entrepreneur>", "起業家", "きぎょうか"]
            ],
            [
                [1791, [10603, 545], "interpret", "～を解釈する", []],
                ["<interpret> the meaning of the word", "解釈する", "かいしゃくする"]
            ],
            [
                [1792, [10371, 978], "praise", "～をほめる", []],
                ["<praise> him for his work", "ほめる", "ほめる"]
            ],
            [
                [1793, [11113], "precious", "貴重な", []],
                ["<precious> jewels", "貴重な", "きちょうな"]
            ],
            [
                [1794, [11572], "predator", "捕食動物", []],
                ["<predators> like lions", "捕食動物", "ほしょくどうぶつ"]
            ],
            [
                [1795, [10765, 1314], "prey", "獲物、えじき", []],
                ["the <prey> of the lion", "えじき", "えじき"]
            ],
            [
                [1796, [10979, 804], "prison", "刑務所", []],
                ["spend two years in <prison>", "刑務所", "けいむしょ"]
            ]
        ],
        ["quali : 質", [
                [1797, [10645, 634], "qualify", "Aに適任である", []],
                ["<qualify> for the position", "適任である", "てきにんである"]
            ],
            [
                [1798, [10406, 828], "quality", "質", []],
                ["the sound <quality> of the CD", "質", "しつ"]
            ]
        ],
        ["serve : 保つ", [
                [
                    1799, [11083], "conservation", "環境保護", [
                        [1044, "conserve", "～を保存する、守る"],
                        [11149, "conservative", "保守"]
                    ]
                ],
                ["<conservation> groups", "環境保護", "かんきょうほご"]
            ],
            [
                [1800, [10926, 1002], "deserve", "当然だ", []],
                ["<deserve> to be punished", "当然だ", "とうぜんだ"]
            ],
            [
                [1801, [12139, 432], "observe", "観測する、述べる、守る", []],
                ["<observe> the comet", "観測する", "かんそくする"],
                ["<observe> that prices would fall", "述べる", "のべる"],
                ["<observe> the rule", "守る", "まもる"]
            ],
            [
                [1802, [10117, 1245], "preserve", "～を保護する", []],
                ["<preserve> forests", "保護する", "ほごする"]
            ],
            [
                [1803, [10139], "reserve", "～を予約する、～を取っておく", []],
                ["<reserve> a room at a hotel", "予約する", "よやくする"]
            ],
            [
                [
                    1804, [10186, 1925], "service", "公共事業、業務", [
                        [12112, "serve", "出す、役立つ、〜に仕える"]
                    ]
                ],
                ["water and gas <service>", "事業", "じぎょう"]
            ]
        ],
        ["tain, tent : 保つ、のばす", [
                [1805, [12038, 414], "attend", "出席する、世話する、注意する", []],
                ["<attend> the meeting", "出席する", "しゅっせきする"],
                ["<attend> to patients", "世話する", "せわする"],
                ["<attend> to what he says", "注意する", "ちゅういする"]
            ],
            [
                [
                    1806, [10344, 356], "contain", "～を含んでいる", [
                        [12070, "content", "内容、満足している"]
                    ]
                ],
                ["Vegetables <contain> a lot of water.", "含んでいる", "ふくんでいる"]
            ],
            [
                [1807, [11712, 2016], "contend", "主張する", []],
                ["<contend> that money cannot buy happiness", "主張する", "しゅちょうする"]
            ],
            [
                [1808, [10929, 1275], "continent", "大陸", []],
                ["cross the American <continent>", "大陸", "たいりく"]
            ],
            [
                [1809, [10008], "continue", "続く、～を続ける", []],
                ["<continue> to grow fast", "続ける", "つづける"]
            ],
            [
                [1810, [789], "detain", "〜を引き留める、勾留する", []],
                ["The suspect was <detained> at the police station for hours.",
                    "勾留された", "こうりゅうされた"
                ]
            ],
            [
                [1811, [10871, 769], "entertain", "～を楽しませる", []],
                ["<entertain> the audience", "楽しませる", "たのしませる"]
            ],
            [
                [1812, [10110, 140], "extend", "～を広げる、延長する", []],
                ["Exercise <extends> life.", "延ばす", "のばす"]
            ],
            [
                [1813, [10525, 1423], "extent", "程度", []],
                ["increase to some <extent>", "程度", "ていど"]
            ],
            [
                [1814, [11151, 141], "intense", "強烈な", []],
                ["feel <intense> pressure", "強烈な", "きょうれつな"]
            ],
            [
                [
                    1815, [12016], "intent", "決意をしている", [
                        [197, "intention", "意図"],
                        [10353, "intend", "つもりだ"]
                    ]
                ],
                ["be <intent> on marrying him", "決意をしている", "けついをしている"]
            ],
            [
                [1816, [12127, 608], "maintain", "維持する、主張する", []],
                ["<maintain> health", "維持する", "いじする"],
                ["<maintain> that he is innocent", "主張する", "しゅちょうする"]
            ],
            [
                [1817, [10354, 244], "obtain", "～を得る", []],
                ["<obtain> information about him", "得る", "える"]
            ],
            [
                [1818, [10383, 451], "pretend", "ふりをする", []],
                ["<pretend> to be asleep", "ふりをする", "ふりをする"]
            ],
            [
                [1819, [10878], "retain", "～を保持する", []],
                ["<retain> the world title", "保持する", "ほじする"]
            ],
            [
                [1820, [10886, 1247], "sustain", "～を維持する", []],
                ["energy to <sustain> life", "維持する", "いじする"]
            ],
            [
                [1821, [10021, 1347], "tend", "～する傾向がある、～しがちである", []],
                ["<tend> to get angry", "がちである", "がちである"]
            ],
            [
                [1822, [11998], "tender", "やさしい", []],
                ["a <tender> smile", "やさしい", "やさしい"]
            ],
            [
                [
                    1823, [11004], "tension", "緊張", [
                        [139, "tense", "緊張した, ぴんと張った"]
                    ]
                ],
                ["relieve <tension>", "緊張", "きんちょう"]
            ]
        ],
        ["take : 手に持つ", [
                [1824, [11459], "intake", "摂取量", []],
                ["reduce salt <intake>", "摂取量", "せっしゅりょう"]
            ],
            [
                [
                    1825, [10040], "mistake", "～を誤解する、まちがえる", [
                        [1999, "mistakenly", "間違って"]
                    ]
                ],
                ["<mistake> salt for sugar", "まちがえる", "まちがえる"]
            ],
            [
                [1826, [11400, 1488], "overtake", "追い越す", []],
                ["<overtake> Japan in PC sales", "追い返す", "おいかえす"]
            ],
            [
                [1827, [11384, 226], "tackle", "取り組む", []],
                ["<tackle> environmental problems", "取り組む", "とりくむ"]
            ],
            [
                [1828, [2180], "take away", "〜を奪う", []],
                ["<take away>", "奪う", "うばう"]
            ],
            [
                [1829, [1519], "take in", "～を取り入れる； 理解する； を騙す", []],
                ["Why don't we open the windows and <take in> some fresh air?",
                    "入れ", "いれ"
                ],
                ["Why don't we open the windows and <take in> some fresh air?",
                    "理解でき", "りかいでき"
                ]
            ],
            [
                [1830, [10673, 207], "undertake", "〈仕事など〉を引き受ける", []],
                ["<undertake> the work", "引き受ける", "ひきうける"]
            ]
        ],
        ["grab : つかむ", [
                [1831, [10915, 108], "grab", "～をつかむ", []],
                ["<grab> him by the arm", "つかむ", "つかむ"]
            ],
            [
                [1832, [10647, 107], "grasp", "～を理解する", []],
                ["<grasp> what he is saying", "理解する", "りかいする"]
            ]
        ],
        ["use, util : 使う", [
                [1833, [10791, 1658], "abuse", "虐待", []],
                ["child <abuse>", "虐待", "ぎゃくたい"]
            ],
            [
                [1834, [11043], "usage", "語法", []],
                ["modern English <usage>", "語法", "ごほう"]
            ],
            [
                [1835, [11250], "utilize", "利用する", []],
                ["<utilize> waste materials", "利用する", "りようする"]
            ]
        ],
        ["opt : 選ぶ", [
                [1836, [10106, 1017], "adopt", "～を採用する", []],
                ["<adopt> a new system", "採用する", "さいようする"]
            ],
            [
                [1837, [553], "opinion", "意見", []],
                ["express one's <opinion> about [on] A", "意見", "いけん"]
            ],
            [
                [1838, [11032, 1016], "option", "選択の自由", []],
                ["have no <option>", "選択の自由", "せんたくのじゆう"]
            ]
        ]
    ],
    ["見る", ["cover, cell : 隠す", [
                [1839, [10522, 1177], "cell", "細胞", []],
                ["the gray <cells> of the brain", "細胞", "さいぼう"]
            ],
            [
                [1840, [11358, 88], "conceal", "隠す", []],
                ["<conceal> the fact from him", "隠す", "かくす"]
            ],
            [
                [
                    1841, [12108, 1900], "cover", "まかなう、報道する、進む", [
                        [11863, "coverage", "報道"]
                    ]
                ],
                ["The insurance <covers> the cost.", "まかなう", "まかなう"],
                ["<cover> the big news", "報道する", "ほうどうする"],
                ["<cover> 120 miles an hour", "進む", "すすむ"]
            ],
            [
                [1842, [10144, 1160], "recover", "Aから回復する", []],
                ["<recover> from illness", "回復する", "かいふくする"]
            ],
            [
                [1843, [11413], "uncover", "明らかにする", []],
                ["<uncover> new evidence", "明らかにする", "あきらかにする"]
            ]
        ],
        ["image : 模倣する", [
                [1844, [1817], "image", "イメージ、画像、映像", []],
                ["a visual <image>", "イメージ", "いめえじ"]
            ],
            [
                [
                    1845, [205], "imagine", "～を想像する", [
                        [11174, "imaginary", "架空の"]
                    ]
                ],
                ["<imagine> a world without war", "想像する", "そうぞうする"]
            ],
            [
                [1846, [10919, 114], "imitate", "～をまねる", []],
                ["<imitate> human behavior", "まねる", "まねる"]
            ]
        ],
        ["look : 目を向ける", [
                [1847, [11314, 876], "outlook", "態度、考え方、見通し、見込み", []],
                ["a positive <outlook> on life", "考え方", "かんがえかた"]
            ],
            [
                [1848, [10649, 157], "overlook", "～を見落とす、～を見逃す", []],
                ["<overlook> the fact", "見逃す", "みのがす"]
            ]
        ],
        ["pear : 現れる", [
                [
                    1849, [10593], "apparently", "一見", [
                        [42, "apparent", "見たところの, 明白な"]
                    ]
                ],
                ["an <apparently> simple question", "一見", "いっけん"]
            ],
            [
                [
                    1850, [10208], "appearance", "外見、様子、出現", [
                        [442, "appear", "現れる, のように見える"]
                    ]
                ],
                ["differ in <appearance>", "外見", "がいけん"]
            ],
            [
                [1851, [11944, 666], "transparent", "透き通った", []],
                ["a <transparent> silk nightgown", "透き通った", "すきとおった"]
            ]
        ],
        ["see, sight : 見る", [
                [1852, [11762], "foresee", "予知する", []],
                ["<foresee> the future", "予知する", "よちする"]
            ],
            [
                [1853, [11010, 896], "insight", "洞察", []],
                ["a deep <insight> into life", "洞察", "どうさつ"]
            ],
            [
                [1854, [10201, 729], "sight", "見ること、光景、視力", []],
                ["love at first <sight>", "一目", "ひとめ"]
            ]
        ],
        ["simul, seem : 似ている", [
                [1855, [11206, 122], "assemble", "組み立てる", []],
                ["<assemble> small parts", "組み立てる", "くみたてる"]
            ],
            [
                [
                    1856, [2048], "assimilate", "～を同化する； 消化・吸収する； 同化する", []
                ],
                [
                    "Immigrants from Europe quickly <assimilated> into a new culture.",
                    "同化した", "どうかした"
                ],
                ["<assimilate> information", "吸収する", "きゅうしゅうする"]
            ],
            [
                [1857, [10385, 517], "resemble", "～に似ている", []],
                ["He <resembles> his father.", "似ている", "にている"]
            ],
            [
                [1858, [11198, 2002], "seemingly", "一見", []],
                ["a <seemingly> impossible task", "一見", "いっけん"]
            ],
            [
                [1859, [10529], "similar", "似ている", []],
                ["be <similar> to each other", "似ている", "にている"]
            ],
            [
                [
                    1860, [11691], "simultaneously", "同時に", [
                        [283, "simultaneous", "同時の, 同時に起こる"]
                    ]
                ],
                ["occur <simultaneously>", "同時に", "どうじに"]
            ]
        ],
        ["spect : 見る", [
                [1861, [10966, 44], "aspect", "側面", []],
                ["unique <aspects> of Japanese culture", "側面", "そくめん"]
            ],
            [
                [1862, [11978, 646], "conspicuous", "顕著な", []],
                ["the most <conspicuous> example", "顕著な", "けんちょな"]
            ],
            [
                [1863, [11430, 967], "despise", "軽蔑する", []],
                ["Don't <despise> poor people.", "軽蔑する", "けいべつする"]
            ],
            [
                [1864, [10600, 1979], "despite", "にもかかわらず", []],
                ["He lost <despite> his efforts.", "にもかかわらず", "にもかかわらず"]
            ],
            [
                [1865, [10004, 444], "expect", "～を予期する", []],
                ["<expect> you to arrive soon", "予期する", "よきする"]
            ],
            [
                [1866, [11383, 640], "inspect", "検査する", []],
                ["<inspect> the car for defects", "検査する", "けんさする"]
            ],
            [
                [1867, [10721, 639], "perspective", "見方", []],
                ["see life from a new <perspective>", "見方", "みかた"]
            ],
            [
                [1868, [10961, 641], "prospect", "見通し", []],
                ["future <prospects>", "見通し", "みとおし"]
            ],
            [
                [
                    1869, [12071, 43], "respect", "点、尊重する", [
                        [11634, "respectable", "ちゃんとした"]
                    ]
                ],
                ["in some <respects>", "点", "てん"],
                ["<respect> the law", "尊重する", "そんちょうする"]
            ],
            [
                [
                    1870, [11634], "respectable", "ちゃんとした", [
                        [43, "respect", "尊敬, 尊重, (in)点, 事項； ～を尊敬する, 尊重する"]
                    ]
                ],
                ["a girl from a <respectable> family", "ちゃんとした", "ちゃんとした"]
            ],
            [
                [1871, [642], "retrospect", "追想、回想", []],
                ["In <retrospect>, I should have studied harder for the exam.",
                    "回想", "かいそう"
                ]
            ],
            [
                [1872, [10633, 596], "specialize", "Aを専門にする、専攻する", []],
                ["<specialize> in Chinese history", "専攻する", "せんこうする"]
            ],
            [
                [1873, [11107, 1239], "species", "種", []],
                ["many <species> of birds", "種", "しゅ"]
            ],
            [
                [
                    1874, [10286], "specific", "特定の", [
                        [34, "specify", "～を特定する"]
                    ]
                ],
                ["a <specific> individual", "特定の", "とくていの"]
            ],
            [
                [1875, [11848, 2119], "specimen", "標本", []],
                ["a <specimen> of a rare plant", "標本", "ひょうほん"]
            ],
            [
                [1876, [11303, 645], "spectacle", "光景", []],
                ["a dramatic <spectacle>", "光景", "こうけい"]
            ],
            [
                [1877, [11319], "spectrum", "変動範囲、領域", []],
                ["a wide <spectrum> of interests", "範囲", "はんい"]
            ],
            [
                [1878, [11410, 644], "speculate", "推測する", []],
                ["<speculate> about the future", "推測する", "すいそくする"]
            ],
            [
                [1879, [10145, 643], "suspect", "～ではないかと思う、～を疑う", []],
                ["I <suspect> that he is a spy.", "ないかと思う", "ないかとおもう"]
            ]
        ],
        ["tuit : 見守る", [
                [1880, [11837, 2024], "intuition", "直感", []],
                ["women's <intuition>", "直感", "ちょっかん"]
            ],
            [
                [1881, [11532], "tuition", "授業料", []],
                ["pay college <tuition>", "授業料", "じゅぎょうりょう"]
            ],
            [
                [
                    1882, [1863], "tutor", "家庭教師、個人電話； ～を(個人的に)教える", []
                ],
                ["I work as a <tutor> for a high school student.", "家庭教師",
                    "かていきょうし"
                ]
            ]
        ],
        ["view, vise, vide : 見る", [
                [1883, [10362], "advise", "～に忠告する", []],
                ["<advise> him to eat vegetables", "忠告する", "ちゅうこくする"]
            ],
            [
                [1884, [10495], "device", "装置", [
                    [728, "devise", "考案する"]
                ]],
                ["an electronic <device>", "装置", "そうち"]
            ],
            [
                [1885, [10355, 91], "divide", "分割する", []],
                ["<divide> the cake into six pieces", "分割する", "ぶんかつする"]
            ],
            [
                [1886, [10686, 963], "envy", "～をうらやむ", []],
                ["<envy> the rich", "うらやむ", "うらやむ"]
            ],
            [
                [1887, [10518], "evidence", "証拠", [
                    [41, "evident", "明白な"]
                ]],
                ["<evidence> of life on Mars", "証拠", "しょうこ"]
            ],
            [
                [1888, [10181, 940], "individual", "個人", []],
                ["<individuals> in society", "個人", "こじん"]
            ],
            [
                [1889, [1842], "interview", "インタビュー、面接", []],
                ["a job <interview>", "面接", "めんせつ"]
            ],
            [
                [1890, [10007, 181], "provide", "～を供給する、与える", []],
                ["<provide> him with information", "与える", "あたえる"]
            ],
            [
                [1891, [1771], "prudent", "慎重な", []],
                ["a <prudent> decision", "慎重な", "しんちょうな"]
            ],
            [
                [1892, [10741, 873], "review", "再検討", []],
                ["a <review> of the law", "再検討", "さいけんとう"]
            ],
            [
                [1893, [11350, 727], "revise", "修正する", []],
                ["<revise> the guidelines", "修正する", "しゅうせいする"]
            ],
            [
                [
                    1894, [11289], "supervisor", "監督者", [
                        [72, "supervise", "～を監視する, 指揮する"]
                    ]
                ],
                ["a production <supervisor>", "監督者", "かんとくしゃ"]
            ],
            [
                [1895, [11501], "surveillance", "監視、見張り", []],
                ["video <surveillance> systems", "監視", "かんし"]
            ],
            [
                [1896, [10485, 577], "survey", "調査", []],
                ["according to a new <survey>", "調査", "ちょうさ"]
            ],
            [
                [1897, [12090, 872], "view", "見解、考える", []],
                ["my <view> of education", "見解", "けんかい"],
                ["<view> Japan as a safe society", "考える", "かんがえる"]
            ],
            [
                [1898, [874], "viewpoint", "観点、見地", []],
                ["from a historical <viewpoint>", "観点", "かんてん"]
            ],
            [
                [1899, [11125, 726], "visible", "目に見える", []],
                ["make <visible> progress", "目に見える", "めにみえる"]
            ],
            [
                [1900, [12169], "vision", "未来像、先見の明、視力", []],
                ["a <vision> of the city", "未来像", "みらいぞう"],
                ["a leader of <vision>", "先見の明", "せんけんのめい"],
                ["have poor <vision>", "視力", "しりょく"]
            ],
            [
                [1901, [725], "visual", "視覚の", []],
                ["a <visual> image", "視覚の", "しかくの"]
            ]
        ],
        ["clar : はっきりした(clear)", [
                [1902, [11701], "clarify", "明らかにする", []],
                ["<clarify> the meaning of the word", "明らかにする", "あきらかにする"]
            ],
            [
                [1903, [10853, 614], "declare", "～を宣言する", []],
                ["<declare> independence from Britain", "宣言する", "せんげんする"]
            ]
        ],
        ["scope : 見る", [
                [1904, [11285, 376], "scope", "範囲", []],
                ["beyond the <scope> of science", "範囲", "はんい"]
            ],
            [
                [1905, [11982, 2026], "skeptical", "懐疑的な", []],
                ["a <skeptical> view of life", "懐疑的な", "かいぎてきな"]
            ],
            [
                [1906, [11085], "telescope", "望遠鏡", []],
                ["NASA's space <telescope>", "望遠鏡", "ぼうえんきょう"]
            ]
        ]
    ],
    ["光・音", ["fan, pha : 光", [
                [1907, [10921, 17], "emphasize", "～を強調する", []],
                ["<emphasize> the importance of health", "強調する", "きょうちょうする"]
            ],
            [
                [1908, [12181, 203], "fancy", "高級、想像する", []],
                ["<fancy> restaurant", "高級", "こうきゅう"],
                ["<fancy> myself a novelist", "想像する", "そうぞうする"]
            ],
            [
                [1909, [10267], "fantastic", "すばらしい", [
                    [202, "fantasy", "空想"]
                ]],
                ["I had a <fantastic> time", "すばらしい", "すばらしい"]
            ],
            [
                [1910, [11566, 270], "phase", "段階", []],
                ["enter a new <phase>", "段階", "だんかい"]
            ],
            [
                [1911, [10475, 1271], "phenomenon", "現象", []],
                ["a natural <phenomenon>", "現象", "げんしょう"]
            ]
        ],
        ["light : 明かり", [
                [1912, [10237, 753], "delight", "大喜び", []],
                ["give a cry of <delight>", "喜び", "よろこび"]
            ],
            [
                [
                    1913, [11958], "enlightened", "進んだ考えの", [
                        [1855, "enlighten", "～を啓蒙・啓発する、に知らせる"]
                    ]
                ],
                ["<enlightened> young people", "進んだ考えの", "すすんだかんがえの"]
            ],
            [
                [1914, [11584], "lightning", "雷", []],
                ["be struck by <lightning>", "雷", "かみなり"]
            ]
        ],
        ["lust, lun : 光", [
                [1915, [11246, 1856], "illuminate", "照らす、解明する", []],
                ["<illuminate> the road", "照らす", "てらす"]
            ],
            [
                [1916, [10625, 591], "illustrate", "～を（例で）示す", []],
                ["This example <illustrates> his ability.", "示す", "しめす"]
            ]
        ],
        ["net : 輝く", [
                [1917, [11628, 1776], "neat", "きちんとした", []],
                ["<neat> clothes", "きちんとした", "きちんとした"]
            ],
            [
                [1918, [1338], "net", "正味の、掛け値なしの", []],
                [
                    "The <net> weight of a product is usually stated on its label.",
                    "正味の", "しょうみの"
                ]
            ]
        ],
        ["soun, tone : 音", [
                [1919, [10653, 463], "astonish", "～を驚嘆させる", []],
                ["an <astonishing> memory", "驚異的な", "きょういてきな"]
            ],
            [
                [1920, [2077], "astound", "～をびっくりさせる", []],
                ["People were <astounded> by the news of the assassination.",
                    "びっくりさせられた", "びっくりさせられた"
                ]
            ],
            [
                [1921, [11985, 819], "monotonous", "単調な", []],
                ["a <monotonous> school life", "単調な", "たんちょうな"]
            ],
            [
                [1922, [941], "personal", "個人的な", []],
                [
                    "She never answers <personal> questions, and she keeps a certain distance from her friend",
                    "個人的な", "こじんてきな"
                ]
            ],
            [
                [1923, [11482, 2143], "personnel", "職員", []],
                ["school <personnel>", "職員", "しょくいん"]
            ],
            [
                [1924, [12055, 1921], "sound", "聞こえる、健全な、ぐっすり", []],
                ["That <sounds> true.", "聞こえる", "きこえる"],
                ["a <sound> body", "健全な", "けんぜんな"],
                ["She is <sound> asleep.", "ぐっすり", "ぐっすり"]
            ],
            [
                [1925, [11747, 2073], "stun", "びっくりさせる", []],
                ["<stun> the audience", "びっくりさせる", "びっくりさせる"]
            ],
            [
                [1926, [10749], "tune", "曲", []],
                ["the beauty of the <tune>", "曲", "きょく"]
            ]
        ],
        ["whis : シューと音を立てる", [
                [1927, [10918, 1719], "whisper", "ささやく", []],
                ["<whisper> in her ear", "ささやく", "ささやく"]
            ],
            [
                [1928, [11496], "whistle", "笛", []],
                ["blow a <whistle>", "笛", "ふえ"]
            ]
        ],
        ["gl : キラキラした", [
                [1929, [10877, 732], "glance", "ちらりと見る", []],
                ["<glance> at the clock", "ちらりと見る", "ちらりとみる"]
            ],
            [
                [1930, [11481, 733], "glimpse", "ちらり", []],
                ["catch a <glimpse> of her face", "ちらり", "ちらり"]
            ],
            [
                [1931, [11521, 391], "glory", "栄光", []],
                ["the <glory> of the British Empire", "栄光", "えいこう"]
            ],
            [
                [1932, [11366, 1311], "glow", "ボーッと光る", []],
                ["<glow> in the dark", "ボーッと光る", "ぼおっとひかる"]
            ]
        ],
        ["di : 暗くする", [
                [1933, [11187, 1341], "deaf", "耳が不自由な", []],
                ["sign language for <deaf> people", "耳が不自由な", "みみがふじゆうな"]
            ],
            [
                [1934, [11945, 1340], "dim", "薄暗い", []],
                ["read in <dim> light", "薄暗い", "うすぐらい"]
            ],
            [
                [1935, [11961, 1150], "dizzy", "めまい", []],
                ["I feel <dizzy> when I stand up.", "めまい", "めまい"]
            ],
            [
                [1936, [10799, 1334], "dull", "退屈させる", []],
                ["very <dull> work", "退屈な", "たいくつな"]
            ],
            [
                [1937, [11950, 1342], "dumb", "ばか", []],
                ["I'm not as <dumb> as I look.", "ばか", "ばか"]
            ],
            [
                [1938, [11588], "dust", "ほこり", []],
                ["tiny <dust> particles", "ほこり", "ほこり"]
            ],
            [
                [1939, [11372, 1401], "dwell", "住む", []],
                ["<dwell> in the forest", "住む", "すむ"]
            ]
        ],
        ["audi : 聞く、従う", [
                [1940, [734], "audible", "聞こえる", []],
                ["<audible> sounds", "聞こえる", "きこえる"]
            ],
            [
                [1941, [10226, 735], "audience", "聴衆、観客", []],
                ["gather a large <audience>", "観客", "かんきゃく"]
            ],
            [
                [1942, [10606, 689], "obey", "～に従う", []],
                ["<obey> the law", "従う", "したがう"]
            ]
        ]
    ],
    ["紙・かく", ["graph : 書く", [
                [1943, [11578], "biography", "伝記", []],
                ["a <biography> of Einstein", "伝記", "でんき"]
            ],
            [
                [1944, [11062, 597], "geography", "地理", []],
                ["history and <geography>", "地理", "ちり"]
            ],
            [
                [1945, [573], "grammar", "文法", []],
                ["English <grammar>", "文法", "ぶんぽう"]
            ]
        ],
        ["litera : 文字", [
                [1946, [12102, 525], "letter", "文字", []],
                ["a word of six <letters>", "文字", "もじ"]
            ],
            [
                [
                    1947, [11197], "literally", "文字通り", [
                        [523, "literal", "文字通りの, 字義通りの"]
                    ]
                ],
                ["There's <literally> nothing there.", "文字通り", "もじどおり"]
            ],
            [
                [1948, [522], "literary", "文学の", [
                    [10462, "literature", "文学"]
                ]],
                ["<literary> works", "文学の", "ぶんがくの"]
            ],
            [
                [1949, [524], "literate", "読み書きができる, 教養のある", []],
                [
                    "As public education spread throughout the country, more and more people became <literate>.",
                    "読み書きができる", "よみかきができる"
                ]
            ]
        ],
        ["scribe : 書く", [
                [1950, [2012], "ascribe", "(…に)～の原因を帰す(to…)", []],
                [
                    "The scientists <ascribed> the recent weather conditions to global warming.",
                    "原因であると考えた", "げんいんであるとかんがえた"
                ]
            ],
            [
                [
                    1951, [10037, 546], "describe", "～を描写する、～の特徴を説明する", []
                ],
                ["<describe> the lost bag", "特徴を言う", "とくちょうをいう"]
            ],
            [
                [1952, [549], "manuscript", "原稿", []],
                ["The <manuscript> is in its final stages.", "原稿", "げんこう"]
            ],
            [
                [1953, [11243, 548], "prescribe", "処方する", []],
                ["<prescribe> medicine", "処方する", "しょほうする"]
            ],
            [
                [1954, [11524], "script", "台本", []],
                ["a movie <script>", "台本", "だいほん"]
            ],
            [
                [
                    1955, [11894], "subscriber", "加入者", [
                        [547, "subscribe", "(～を)定期購読する(to～)"]
                    ]
                ],
                ["<subscribers> to the service", "加入者", "かにゅうしゃ"]
            ]
        ],
        ["story : 物語", [
                [1956, [1934], "history", "歴史、歴史学； 経歴", []],
                ["I study Japanese <history>.", "歴史", "れきし"]
            ],
            [
                [1957, [12191, 1908], "story", "階", []],
                ["a five-<story> building", "階", "かい"]
            ]
        ],
        ["card : 紙", [
                [1958, [10453, 1121], "cartoon", "マンガ", []],
                ["a popular <cartoon> character", "マンガ", "まんが"]
            ],
            [
                [1959, [11398, 178], "discard", "捨てる", []],
                ["<discard> old ideas", "捨てる", "すてる"]
            ]
        ]
    ],
    ["編む", ["line : 糸", [
                [1960, [11514], "deadline", "締め切り", []],
                ["the <deadline> for the report", "締め切り", "しめきり"]
            ],
            [
                [1961, [11475, 1115], "headline", "大見出し", []],
                ["a newspaper <headline>", "大見出し", "おおみだし"]
            ],
            [
                [1962, [12101], "line", "電話、列、短い手紙、種類", []],
                ["The <line> is busy.", "電話", "でんわ"],
                ["wait in <line>", "列", "れつ"],
                ["drop him a <line>", "短い手紙", "みじかいてがみ"],
                ["this <line> of business", "種類", "しゅるい"]
            ]
        ],
        ["pli, ple, plo : 編む、十分な", [
                [1963, [10863, 243], "accomplish", "～をやりとげる", []],
                ["<accomplish> the difficult task", "やりとげる", "やりとげる"]
            ],
            [
                [1964, [11986, 838], "ample", "豊富に", []],
                ["have <ample> opportunity to learn", "豊富に", "ほうふに"]
            ],
            [
                [1965, [11819, 1887], "appliance", "器具", []],
                ["electrical <appliances>", "器具", "きぐ"]
            ],
            [
                [1966, [10053, 415], "apply", "当てはまる、申し込む", []],
                ["<apply> the rule to every case", "当てはめる", "あてはめる"]
            ],
            [
                [1967, [11808], "complement", "補うもの", []],
                ["a <complement> to medical treatment", "補うもの", "おぎなうもの"]
            ],
            [
                [1968, [10530, 247], "complete", "完全な", []],
                ["a <complete> failure", "完全な", "かんぜんな"]
            ],
            [
                [1969, [10271, 85], "complex", "複雑な", []],
                ["a <complex> system", "複雑な", "ふくざつな"]
            ],
            [
                [1970, [11124, 86], "complicated", "複雑な", []],
                ["a <complicated> ploblem", "複雑な", "ふくざつな"]
            ],
            [
                [1971, [11468, 981], "compliment", "ほめ言葉", []],
                ["Thank you for the <compliment>.", "ほめ言葉", "ほめことば"]
            ],
            [
                [1972, [11729, 2058], "comply", "従う", []],
                ["<comply> with the standards", "従う", "したがう"]
            ],
            [
                [1973, [2081], "deplore", "～を嘆く", []],
                ["<deplore> the violence in the city", "嘆く", "なげく"]
            ],
            [
                [1974, [1869], "diploma", "(大学の)学位", []],
                ["proud moment receiving a <diploma>", "卒業証書", "そつぎょうしょうしょ"]
            ],
            [
                [1975, [11657], "diplomatic", "外交の", [
                    [1067, "diplomat", "外交官"]
                ]],
                ["break off <diplomatic> relations", "外交", "がいこう"]
            ],
            [
                [1976, [10124], "display", "～を展示する、～を表す", []],
                ["<display> prices", "示す", "しめす"]
            ],
            [
                [1977, [10121, 1134], "employ", "～を雇う、～を用いる", []],
                ["<employ> foreign workers", "雇う", "やとう"]
            ],
            [
                [1978, [11660], "explicit", "明確な、はっきりした", []],
                ["give <explicit> instructions", "明確な", "めいかくな"]
            ],
            [
                [1979, [11212, 1882], "exploit", "利用する、開発する", []],
                ["<exploit> natural resources", "開発する", "かいはつする"]
            ],
            [
                [1980, [10382, 354], "explore", "～を探検する", []],
                ["<explore> the Amazon River", "探検する", "たんけんする"]
            ],
            [
                [1981, [11224, 1884], "implement", "実行する", []],
                ["<implement> the secret plan", "実行する", "じっこうする"]
            ],
            [
                [1982, [10666, 543], "imply", "～を（暗に）意味する", []],
                ["What does her smile <imply>?", "意味する", "いみする"]
            ],
            [
                [1983, [11402, 2064], "manipulate", "操作する", []],
                ["<manipulate> a computer", "操作する", "そうさする"]
            ],
            [
                [1984, [11263, 855], "multiply", "増やす、増える、掛ける", []],
                ["<multiply> by five", "増える", "ふえる"]
            ],
            [
                [1985, [2075], "perplex", "～を当惑させる", []],
                [
                    "The investigator was <perplexed> because the two witnesses had given contradicting accounts.",
                    "混乱した", "こんらんした"
                ]
            ],
            [
                [1986, [10515], "plenty", "十分な", []],
                ["have <plenty> of time", "十分な", "じゅうぶんな"]
            ],
            [
                [1987, [10074], "reply", "返事をする", []],
                ["<reply> to his letter", "返事をする", "へんじをする"]
            ],
            [
                [1988, [11401, 2140], "supplement", "補う", []],
                ["<supplement> your diet", "補う", "おぎなう"]
            ],
            [
                [1989, [10050, 182], "supply", "～を供給する", []],
                ["<supply> the city with water", "供給する", "きょうきゅうする"]
            ]
        ],
        ["text, til : 織る", [
                [1990, [10738, 572], "context", "文脈、状況", []],
                ["the meaning inthis <context>", "文脈", "ぶんみゃく"]
            ],
            [
                [1991, [11148, 1772], "subtle", "微妙な", []],
                ["a <subtle> difference", "微妙な", "びみょうな"]
            ],
            [
                [1992, [10393, 571], "text", "メールを送る", []],
                ["Don't <text> while driving", "メールを送る", "めえるをおくる"]
            ],
            [
                [1993, [11788], "textile", "織物", []],
                ["the <textile> industry", "織物", "おりもの"]
            ],
            [
                [
                    1994, [11291, 1844], "tissue", "（細胞の）組織；ティッシュペーパー", []
                ],
                ["nerve <tissue>", "組織", "そしき"]
            ]
        ],
        ["weave : 編む", [
                [1995, [11425, 1409], "weave", "織る", []],
                ["<weave> cotton cloth", "織る", "おる"]
            ],
            [
                [1996, [10513, 1840], "web", "巣", []],
                ["be caught in a spider's <web>", "巣", "す"]
            ]
        ]
    ],
    ["働く", ["labo : 働く", [
                [1997, [11183, 1728], "elaborate", "手の込んだ", []],
                ["an <elaborate> system", "手の込んだ", "てのこんだ"]
            ],
            [
                [1998, [10994, 1135], "labor", "労働", []],
                ["do hard <labor>", "労働", "ろうどう"]
            ],
            [
                [1999, [10927, 587], "laboratory", "研究所", []],
                ["a space science <laboratory>", "研究所", "けんきゅうじょ"]
            ]
        ],
        ["ope : 働く", [
                [2000, [10895, 992], "cooperate", "協力する", []],
                ["<cooperate> with each other", "協力する", "きょうりょくする"]
            ],
            [
                [2001, [10200, 491], "official", "役人", []],
                ["a government <official>", "役人", "やくにん"]
            ],
            [
                [
                    2002, [10109, 1161], "operate", "作動する、～を操作する、手術する", []
                ],
                ["<operate> a computer with a mouse", "操作する", "そうさする"]
            ],
            [
                [2003, [11161, 877], "optimistic", "楽観的な", []],
                ["an <optimistic> view of the future", "楽観的な", "らっかんてきな"]
            ]
        ]
    ],
    ["立つ・座る", ["set, sess, sid : 座る", [
                [2004, [11380, 1007], "assess", "評価する", []],
                ["<assess> students' ability", "評価する", "ひょうかする"]
            ],
            [
                [2005, [11971], "obsess", "とりつかれている", []],
                ["be <obsessed> with dieting", "とりつかれている", "とりつかれている"]
            ],
            [
                [2006, [11940], "onset", "発症", []],
                ["the <onset> of dementia", "発症", "はっしょう"]
            ],
            [
                [2007, [10377, 431], "possess", "～を持っている", []],
                ["<possess> great power", "持っている", "もっている"]
            ],
            [
                [2008, [2182], "put on", "〜を身につける", []],
                ["<put on>", "着る", "きる"]
            ],
            [
                [
                    2009, [10211], "resident", "住民", [
                        [1402, "residence", "住居、居住"]
                    ]
                ],
                ["<residents> of New York", "住民", "じゅうみん"]
            ],
            [
                [2010, [10172], "seat", "座っている", []],
                ["be <seated> on the bench", "座っている", "すわっている"]
            ],
            [
                [2011, [11415, 109], "seize", "つかむ", []],
                ["<seize> the opportunity", "つかむ", "つかむ"]
            ],
            [
                [2012, [11318], "session", "期間、討論", []],
                ["a training <session>", "期間", "きかん"]
            ],
            [
                [2013, [12168, 351], "settle", "解決する、定住する、落ち着く", []],
                ["<settle> the dispute", "解決する", "かいけつする"],
                ["<settle> in America", "定住する", "ていじゅうする"],
                ["get married and <settle> down", "落ち着く", "おちつく"]
            ],
            [
                [2014, [10504, 1093], "soil", "土壌", []],
                ["the rich <soil> of the Nile River", "土壌", "どじょう"]
            ],
            [
                [2015, [11872, 2023], "subsidy", "補助金", []],
                ["a government <subsidy>", "補助金", "ほじょきん"]
            ],
            [
                [2016, [10283, 127], "upset", "動揺している", []],
                ["be <upset> by the accident", "動揺している", "どうようしている"]
            ]
        ],
        ["sta, sti, sist : 立つ", [
                [2017, [10626, 788], "arrest", "～を逮捕する", []],
                ["<arrest> him for speeding", "逮捕する", "たいほする"]
            ],
            [
                [2018, [10158], "assist", "～を助ける、～を手伝う", []],
                ["<assist> him in his work", "手伝う", "てつだう"]
            ],
            [
                [2019, [10977, 1029], "circumstance", "状況", []],
                ["under any <circumstances>", "状況", "じょうきょう"]
            ],
            [
                [
                    2020, [10112, 81], "consist", "Aで構成されている", [
                        [10835, "consistent", "矛盾のない、一致した"]
                    ]
                ],
                ["The book <consists> of six lessons.", "構成されている", "こうせいされている"]
            ],
            [
                [2021, [257], "constant", "絶え間ない, 一定の", []],
                [
                    "Things are <constantly> changing in the world, so it's really hard to keep up with them.",
                    "絶え間ない", "たえまない"
                ]
            ],
            [
                [
                    2022, [10664, 52], "constitute", "～を構成する、占める、～である", [
                        [10761, "constitution", "憲法"]
                    ]
                ],
                ["Cars <constitute> 10% of exports.", "占める", "しめる"]
            ],
            [
                [2023, [10442, 504], "contrast", "対比", []],
                ["the <contrast> between light and shadow", "対比", "たいひ"]
            ],
            [
                [2024, [10020, 329], "cost", "～を要する", []],
                ["The car <cost> me $50,000.", "かかった", "かかった"]
            ],
            [
                [
                    2025, [10957, 198], "destination", "目的地", [
                        [11489, "destiny", "運命"]
                    ]
                ],
                ["reach the final <destination>", "目的地", "もくてきち"]
            ],
            [
                [2026, [10420], "distance", "距離", []],
                ["within walking <distance> of my house", "距離", "きょり"]
            ],
            [
                [2027, [10045, 56], "establish", "～を設立する、創立する", []],
                ["<establish> a company", "設立する", "せつりつする"]
            ],
            [
                [2028, [11563, 307], "estate", "不動産", []],
                ["a real <estate> agent", "不動産", "ふどうさん"]
            ],
            [
                [2029, [10335, 443], "exist", "存在する", []],
                ["Does God really <exist>?", "存在する", "そんざいする"]
            ],
            [
                [2030, [1991], "for instance", "例えば", [
                    [10422, "instance", "例"]
                ]],
                ["Many geniuses, <for instance>, Mozart, died young.", "例えば",
                    "たとえば"
                ]
            ],
            [
                [2031, [10090, 611], "insist", "～と主張する、言い張る", []],
                ["<insist> on going to France", "言い張る", "いいはる"]
            ],
            [
                [2032, [11426, 362], "install", "備えつける", []],
                ["<install> solar panels in the roof", "備えつける", "そなえつける"]
            ],
            [
                [2033, [10589], "instantly", "すぐに", []],
                ["<instantly> recognizable songs", "すぐに", "すぐに"]
            ],
            [
                [
                    2034, [10243], "institution", "機関、制度", [
                        [53, "institute", "～(法律・制度)を制定する； 協会, 研究所"]
                    ]
                ],
                ["educational <institutions>", "機関", "きかん"]
            ],
            [
                [2035, [1977], "notwithstanding", "それにもかかわらず", []],
                ["finished the project, <notwithstanding> the difficulties",
                    "にもかかわらず", "にもかかわらず"
                ]
            ],
            [
                [2036, [11002, 220], "obstacle", "障害", []],
                ["an <obstacle> to communication", "障害", "しょうがい"]
            ],
            [
                [2037, [1762], "obstinate", "頑固な", []],
                [
                    "The old man was so <obstinate> [stubborn] that he refused any help from his sons.",
                    "頑固な", "がんこな"
                ]
            ],
            [
                [2038, [11674], "outstanding", "傑出した", []],
                ["an <outstanding> scholar", "傑出した", "けっしゅつした"]
            ],
            [
                [2039, [11262, 237], "persist", "持続する、残る", []],
                ["<persist> throughout life", "残る", "のこる"]
            ],
            [
                [2040, [10608, 690], "resist", "～に抵抗する", []],
                ["<resist> pressure from above", "抵抗する", "ていこうする"]
            ],
            [
                [
                    2041, [12104], "rest", "残り、休息", [
                        [1632, "rest on", "～に頼る； に基づく"]
                    ]
                ],
                ["the <rest> of his life", "残り", "のこり"],
                ["Let's take a <rest>.", "休息", "きゅうそく"]
            ],
            [
                [2042, [1632], "rest on", "～に頼る； に基づく", []],
                ["His argument <rests on> a false assumption.", "基づいている",
                    "もとづいている"
                ]
            ],
            [
                [2043, [11649, 1745], "restless", "落ち着かない", []],
                ["spend a <restless> night", "落ち着かない", "おちつかない"]
            ],
            [
                [2044, [10925, 1497], "restore", "～を修復する", []],
                ["<restore> the old building", "修復する", "しゅうふくする"]
            ],
            [
                [
                    2045, [11691], "simultaneously", "同時に", [
                        [283, "simultaneous", "同時の, 同時に起こる"]
                    ]
                ],
                ["occur <simultaneously>", "同時に", "どうじに"]
            ],
            [
                [2046, [11141, 55], "stable", "安定した", []],
                ["a <stable> condition", "安定した", "あんていした"]
            ],
            [
                [2047, [12032], "stand", "耐え", []],
                ["I can't <stand> this heat.", "耐え", "たえ"]
            ],
            [
                [2048, [10424, 1008], "standard", "水準", []],
                ["the <standard> of living", "水準", "すいじゅん"]
            ],
            [
                [2049, [875], "standpoint", "立場、観点", []],
                ["From my <standpoint>, it's unacceptable.", "立場", "たちば"]
            ],
            [
                [
                    2050, [12065, 424], "state", "状態、述べる、国家", [
                        [10434, "statement", "記述"],
                        [11889, "statesman", "政治家"]
                    ]
                ],
                ["an excited <state> of mind", "状態", "じょうたい"],
                ["<state> an opinion", "述べる", "のべる"],
                ["a <state> secret", "国家", "こっか"]
            ],
            [
                [2051, [11965, 2170], "static", "静的な", []],
                ["<static> electricity", "静", "せい"]
            ],
            [
                [2052, [10736, 585], "statistics", "統計（学）", []],
                ["according to official <statistics>", "統計", "とうけい"]
            ],
            [
                [2053, [11066], "statue", "像", []],
                ["the <Statue> of Liberty", "像", "ぞう"]
            ],
            [
                [2054, [10479, 921], "status", "地位", []],
                ["the social <status> of women", "地位", "ちい"]
            ],
            [
                [2055, [10798, 1434], "steady", "しっかりした", []],
                ["<steady> economic growth", "着実な", "ちゃくじつな"]
            ],
            [
                [2056, [11225], "steer", "操縦する", []],
                ["<steer> the ship", "操縦する", "そうじゅうする"]
            ],
            [
                [2057, [10699, 382], "stem", "Aから生じる、Aに由来する", []],
                ["<stem> from an ancient tradition", "由来する", "ゆらいする"]
            ],
            [
                [2058, [12059, 1918], "still", "まだ、さらに、静かに、それでも", []],
                ["He is <still> working.", "まだ", "まだ"],
                ["a <still> better idea", "さらに", "さらに"],
                ["The water became <still>.", "静かに", "しずかに"],
                ["It's raining. <Still>, I have to go.", "それでも", "それでも"]
            ],
            [
                [2059, [12110], "store", "蓄える", []],
                ["<store> information  in  a computer", "蓄える", "たくわえる"]
            ],
            [
                [
                    2060, [11076, 60], "substance", "物質", [
                        [10839, "substantial", "相当な、多大な"]
                    ]
                ],
                ["a dangerous <substance>", "物質", "ぶっしつ"]
            ],
            [
                [2061, [10621, 54], "substitute", "～を代わりに用いる", []],
                ["<substitute> margarine for butter", "代わりに用いる", "かわりにもちいる"]
            ],
            [
                [2062, [11456, 73], "superstition", "迷信", []],
                ["believe a foolish <superstition>", "迷信", "めいしん"]
            ],
            [
                [2063, [11774, 2139], "withstand", "耐える", []],
                ["<withstand> high temperatures", "耐える", "たえる"]
            ]
        ]
    ],
    ["守る・用心する", ["veal, lap : 覆う", [
                [2064, [10006, 1246], "develop", "発達する、～を発達させる", []],
                ["<develop> a unique ability", "発達させる", "はったつさせる"]
            ],
            [
                [2065, [10438], "envelope", "封筒", []],
                ["put the letter in a pink <envelope>", "封筒", "ふうとう"]
            ],
            [
                [2066, [10646, 308], "invest", "（〈金〉を）投資する", []],
                ["<invest> money in a business", "投資する", "とうしする"]
            ],
            [
                [2067, [1814], "label", "～に(…という)レッテルを貼る(as)", []],
                [
                    "He was <labeled> as a troublemaker after he set fire to his neighbor's cat.",
                    "レッテルを貼られた", "れってるをはられた"
                ]
            ],
            [
                [2068, [11513], "lap", "ひざ", []],
                ["sit on mother's <lap>", "ひざ", "ひざ"]
            ],
            [
                [2069, [10078, 87], "reveal", "～を明らかにする", []],
                ["<reveal> a surprising fact", "明らかにする", "あきらかにする"]
            ]
        ],
        ["ward, ware, guard : 注意する、守る", [
                [2070, [10769, 979], "award", "賞", []],
                ["the <Academy> Award for Best Picture", "賞", "しょう"]
            ],
            [
                [2071, [10534, 879], "aware", "気づいている", []],
                ["be <aware> of the danger", "気づいている", "きづいている"]
            ],
            [
                [2072, [10070], "grant", "～を認める、～を与える", []],
                ["take freedom for <granted>", "当然と考える", "とうぜんとかんがえる"]
            ],
            [
                [2073, [10867, 1829], "guarantee", "～を保証する", []],
                ["<guarantee> your success", "保証する", "ほしょうする"]
            ],
            [
                [2074, [10777], "lord", "神", []],
                ["praise the <Lord>", "神", "かみ"]
            ],
            [
                [
                    2075, [10027, 410], "regard", "AをBだと思う、みなす", [
                        [11434, "disregard", "無視する"],
                        [11199, "regardless", "関係なく"]
                    ]
                ],
                ["<regard> him as a friend", "みなす", "みなす"]
            ],
            [
                [
                    2076, [11199], "regardless", "関係なく", [
                        [
                            410, "regard",
                            "～を(…と)みなす(as…), ～を尊重する, に敬意を払う； 尊敬, 敬意, 点"
                        ],
                        [11434, "disregard", "無視する"]
                    ]
                ],
                ["<regardless> of age", "関係なく", "かんけいなく"]
            ],
            [
                [2077, [10235, 980], "reward", "報酬", []],
                ["a <reward> for hard work", "報酬", "ほうしゅう"]
            ],
            [
                [2078, [11597], "ward", "病棟", []],
                ["patients in the <ward>", "病棟", "びょうとう"]
            ],
            [
                [2079, [10094], "warn", "～に警告する", []],
                ["<warn> him of the danger", "警告する", "けいこくする"]
            ],
            [
                [2080, [2175], "warrant", "～を保証する； 正当化する", []],
                ["There is not enough evidence to <warrant> a conclusion.",
                    "正当性を保証する", "せいとうせいをほしょうする"
                ]
            ]
        ],
        ["sav, san : 安全な、健全な(save)", [
                [
                    2081, [12006], "insane", "正気を失っている", [
                        [1657, "sane", "正気の"]
                    ]
                ],
                ["be completely <insane>", "正気を失っている", "しょうきをうしなっている"]
            ],
            [
                [2082, [11898], "sanitation", "衛生", []],
                ["public <sanitation>", "衛生", "えいせい"]
            ],
            [
                [2083, [12111, 321], "save", "蓄える、省く、除く", []],
                ["<save> money for a new house", "蓄える", "たくわえる"],
                ["<save> time and trouble", "省く", "はぶく"],
                ["answer all the questions <save> one", "除き", "のぞき"]
            ]
        ],
        ["tect : 覆う", [
                [2084, [10690, 583], "detect", "～を探知する、～を発見する", []],
                ["how to <detect> lies", "発見する", "はっけんする"]
            ],
            [
                [2085, [10340], "protect", "～を守る", []],
                ["<protect> children from danger", "守る", "まもる"]
            ]
        ]
    ],
    ["破裂する・跳ねる", ["plau, plo : 破裂", [
                [2086, [11737], "applaud", "拍手する", []],
                ["The audience <applauds>.", "拍手する", "はくしゅする"]
            ],
            [
                [2087, [10350, 623], "complain", "苦情を言う", []],
                ["<complain> about the noise", "苦情を言う", "くじょうをいう"]
            ],
            [
                [2088, [11049], "explosion", "爆発", [
                    [129, "explode", "爆発する"]
                ]],
                ["the population <explosion>", "爆発", "ばくはつ"]
            ],
            [
                [2089, [11298, 1171], "plague", "疫病", []],
                ["prevent the spread of <plague>", "疫病", "えきびょう"]
            ],
            [
                [2090, [2124], "plausible", "もっともらしい、まことしやかな", []],
                [
                    "You need to come up with a more <plausible> excuse; otherwise no one will believe you.",
                    "もっともらしい", "もっともらしい"
                ]
            ]
        ],
        ["rupt : 破れた", [
                [2091, [12024, 265], "abruptly", "不意に", []],
                ["stop <abruptly>", "不意に", "ふいに"]
            ],
            [
                [2092, [11661, 320], "bankrupt", "破産した", []],
                ["His company went <bankrupt>.", "破産した", "はさんした"]
            ],
            [
                [
                    2093, [11601], "corruption", "腐敗", [
                        [398, "corrupt", "頽廃した, 腐敗した； ～を堕落させる"]
                    ]
                ],
                ["political <corruption>", "腐敗", "ふはい"]
            ],
            [
                [2094, [11395, 165], "disrupt", "かき乱す", []],
                ["<disrupt> their lives", "かき乱す", "かきみだす"]
            ],
            [
                [2095, [11912], "eruption", "噴火", [
                    [2047, "erupt", "噴火する"]
                ]],
                ["a massive volcanic <eruption>", "噴火", "ふんか"]
            ],
            [
                [2096, [10623, 164], "interrupt", "～を妨げる", []],
                ["<interrupt> their conversation", "じゃまする", "じゃまする"]
            ]
        ],
        ["sult, sil : 跳ねる", [
                [2097, [11868, 1970], "assault", "攻撃", []],
                ["<assault> on the enemy's base", "攻撃", "こうげき"]
            ],
            [
                [2098, [2050], "exile", "(祖国からの)追放、亡命； ～を追放する", []],
                [
                    "During the war, the Polish movie director was in <exile> in the United States.",
                    "亡命", "ぼうめい"
                ]
            ],
            [
                [2099, [11014, 971], "insult", "侮辱", []],
                ["an <insult> to women", "侮辱", "ぶじょく"]
            ],
            [
                [
                    2100, [2045], "resilient", "弾力性のある； 回復力のある、立ち直りの早い", []
                ],
                ["a <resilient> rubber mat", "弾力性のある", "だんりょくせいのある"]
            ],
            [
                [2101, [10175, 468], "result", "結果", []],
                ["the <result> of the test", "結果", "けっか"]
            ]
        ],
        ["spring : 弾ける", [
                [2102, [11473, 937], "offspring", "子孫", []],
                ["produce <offspring>", "子孫", "しそん"]
            ],
            [
                [2103, [12195], "spring", "出現する", []],
                ["New companies will <spring> up there.", "出現する", "しゅつげんする"]
            ]
        ]
    ],
    ["その他の行動", ["act, age, iga : 行動", [
                [
                    2104, [1037], "act", "行動する； 行動； 法令", [
                        [11855, "activist", "活動家"]
                    ]
                ],
                ["the Animal Welfare <Act>", "法", "ほう"]
            ],
            [
                [
                    2105, [10247], "agency", "機関、代理店", [
                        [1138, "agent", "代理店、代理人、行為者"]
                    ]
                ],
                ["go to a travel <agency>", "代理店", "だいりてん"]
            ],
            [
                [2106, [11939, 2021], "agenda", "課題", []],
                ["a political <agenda>", "課題", "かだい"]
            ],
            [
                [2107, [2082], "agony", "苦悩、苦痛", []],
                ["It was <agony> for the patient even to sit up in bed.", "苦痛",
                    "くつう"
                ]
            ],
            [
                [2108, [11647, 39], "ambiguous", "あいまいな", []],
                ["an <ambiguous> expression", "あいまいな", "あいまいな"]
            ],
            [
                [2109, [10409, 1041], "attitude", "態度", []],
                ["a positive <attitude> toward life", "態度", "たいど"]
            ],
            [
                [2110, [1038], "enact", "～(法律)を制定する", []],
                [
                    "I think the U.S. should <enact> laws to restrict gun ownership.",
                    "制定する", "せいていする"
                ]
            ],
            [
                [2111, [10314], "exactly", "正確に", []],
                ["at <exactly> the same time", "ぴったり", "ぴったり"]
            ],
            [
                [2112, [10091], "examine", "～を調査する", []],
                ["<examine> every record", "調べる", "しらべる"]
            ],
            [
                [2113, [11443, 1671], "fatigue", "疲労", []],
                ["mental <fatigue>", "疲労", "ひろう"]
            ],
            [
                [
                    2114, [10244], "interaction", "交流", [
                        [1375, "interact", "(～と)相互作用する、交流し合う(with)"]
                    ]
                ],
                ["social <interaction> with others", "交流", "こうりゅう"]
            ],
            [
                [
                    2115, [11396], "navigate", "進路を決める", [
                        [1959, "navigation", "航海"]
                    ]
                ],
                ["<navigate> by the stars", "進路を決める", "しんろをきめる"]
            ],
            [
                [2116, [10391, 1374], "react", "反応する", []],
                ["<react> quickly to light", "反応する", "はんのうする"]
            ],
            [
                [
                    2117, [11833], "transaction", "取引", [
                        [2172, "transact", "～(業務・取引)を処理する、行う"]
                    ]
                ],
                ["a <transaction> with the company", "取引", "とりひき"]
            ]
        ],
        ["pract : する", [
                [2118, [10540, 200], "practical", "実用的な", []],
                ["<practical> English", "実用的な", "じつようてきな"]
            ],
            [
                [2119, [12042, 1927], "practice", "実践、習慣、営む", []],
                ["theory and <practice>", "実践", "じっせん"],
                ["business <practice>", "習慣", "しゅうかん"],
                ["<practice> medicine", "営む", "いとなむ"]
            ]
        ],
        ["do : する", [
                [2120, [11466, 1322], "deed", "行い", []],
                ["do a good <deed> a day", "行い", "おこない"]
            ],
            [
                [2121, [12049, 1527], "do", "十分役に立つ、与える", []],
                ["This pen will <do>.", "十分役に立つ", "じゅうぶんやくにたつ"],
                ["<do> harm to the area", "与える", "あたえる"]
            ],
            [
                [2122, [1992], "indeed", "たしかに、本当に", []],
                [
                    "<Indeed> his father is strict; yet it is clear that he is strict for the good of his children.",
                    "たしかに", "たしかに"
                ]
            ]
        ]
    ],
    ["接尾辞", ["ship : 単語を名詞化", [
                [2123, [2055], "censorship", "検閲", []],
                [
                    "When the war broke out, the press was placed under strict government <censorship>.",
                    "検閲", "けんえつ"
                ]
            ],
            [
                [2124, [11520, 222], "hardship", "苦難", []],
                ["face economic <hardship>", "苦難", "くなん"]
            ],
            [
                [2125, [11321, 1194], "worship", "崇拝", []],
                ["the <worship> of God", "崇拝", "すうはい"]
            ]
        ],
        ["th : 単語を名詞化", [
                [2126, [10750], "height", "高さ、最盛期", []],
                ["Summer is at its <height>.", "真っ盛り", "まっさかり"]
            ],
            [
                [2127, [1747], "ruthless", "情け容赦のない、冷酷な", []],
                [
                    "Mr. Palmer is known as a <ruthless> lawyer who attacks without any mercy or compassion.",
                    "冷酷な", "れいこくな"
                ]
            ],
            [
                [2128, [10465], "strength", "強さ", []],
                ["<strength> and weakness", "強さ", "つよさ"]
            ],
            [
                [2129, [10470, 302], "wealth", "富", []],
                ["<wealth> and power", "富", "とみ"]
            ],
            [
                [2130, [10480], "youth", "若者", []],
                ["modern <youth>", "若者", "わかもの"]
            ]
        ],
        ["tude : 単語を名詞化", [
                [2131, [11530, 1280], "altitude", "高度、標高", []],
                ["at an <altitude> of 30,000 feet", "高度", "こうど"]
            ],
            [
                [2132, [10409, 1041], "attitude", "態度", []],
                ["a positive <attitude> toward life", "態度", "たいど"]
            ],
            [
                [2133, [987], "gratitude", "感謝", []],
                ["She expressed her <gratitude> to him.", "感謝", "かんしゃ"]
            ],
            [
                [2134, [11903, 1278], "latitude", "緯", []],
                ["38 degrees north <latitude>", "緯", "い"]
            ],
            [
                [2135, [1279], "longitude", "経度", []],
                ["<Longitude> lines measure east-west locations.", "経度", "けいど"]
            ],
            [
                [2136, [856], "multitude", "多数", []],
                ["a <multitude> of people", "多数", "たすう"]
            ],
            [
                [2137, [817], "solitude", "孤独", [
                    [11655, "solitary", "孤独な"]
                ]],
                ["live in <solitude>", "孤独", "こどく"]
            ]
        ]
    ]
]
