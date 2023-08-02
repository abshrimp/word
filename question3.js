const questions = [
    ['重要な・ささいな', ['viv / vit : 生命', [
                [1, [10793, 1], 'vital', 'きわめて重要な、必要な、活気のある', []],
                ['be <vital> to human health', 'きわめて重要だ', 'きわめてじゅうようだ']
            ],
            [
                [2, [10837, 2], 'vivid', '鮮やかな', []],
                ['have <vivid> memories', '鮮やかな', 'あざやかな']
            ],
            [
                [3, [11392, 3], 'revive', '生き返らせる', []],
                ['<revive> the British economy', '生き返らせる', 'いきかえらせる']
            ],
            [
                [4, [11164], 'lively', '生き生きとした', []],
                ['a <lively> conversation', '生き生きとした', 'いきいきとした']
            ]
        ],
        ['vitalの類義語', [
                [5, [10537, 4], 'essential', '不可欠だ', []],
                ['Water is <essential> to life.', '不可欠だ', 'ふかけつだ']
            ],
            [
                [6, [11619, 5], 'indispensable', '不可欠な', []],
                ['Water is <indispensable> to life.', '不可欠だ', 'ふかけつだ']
            ],
            [
                [7, [11159, 6], 'crucial', '重大な', []],
                ['play a <crucial> role', '重大な', 'じゅうだいな']
            ]
        ],
        ['重要性・結果', [
                [8, [10280], 'significant', '重要な', [
                    [7, 'significance', '重要性']
                ]],
                ['a <significant> difference', '重要な', 'じゅうような']
            ],
            [
                [9, [10519, 8], 'consequence', '結果', [
                    [11278, 'sequence', '連続、順番、順序']
                ]],
                ['have serious <consequences>', '結果', 'けっか']
            ]
        ],
        ['動詞表現', [
                [10, [12068, 9], 'matter', '重要な、物質、異常', []],
                ["It doesn't <matter>  what he says.", '重要で', 'じゅうようで'],
                ['soft <matter>', '物質', 'ぶっしつ'],
                ['Something is the <matter> with my car.', '異常', 'いじょう']
            ],
            [
                [11, [12130, 10], 'count', '重要な', []],
                ["That's what <counts>.", '重要な', 'じゅうような']
            ],
            [
                [12, [11], 'make a difference', '重要である', []],
                ['Money <makes a difference> in politics.', '重要である', 'じゅうようである']
            ]
        ],
        ['ささいな・ありふれた', [
                [13, [11679, 12], 'trivial', 'ささいな', []],
                ['a <trivial> matter', 'ささいな', 'ささいな']
            ],
            [
                [14, [13], 'trifle', 'ささいな事, くだらない事', []],
                ['Get rid of all the <trifles> that fill up your mind!', 'くだらない事', 'くだらないこと']
            ],
            [
                [15, [10254, 14], 'common', '共通の、普通の', []],
                ['a <common> language', '共通の', 'きょうつうの']
            ]
        ],
        ['通常の・よく知っている', [
                [16, [11132], 'extraordinary', '並外れた', [
                    [15, 'ordinary', '普通の, 通常の, ありふれた']
                ]],
                ['a man of <extraordinary> talent', '並はずれた', 'なみはずれた']
            ],
            [
                [17, [10263, 16], 'familiar', '熟知している、くわしい', []],
                ['be <familiar> with Japanese culture', 'くわしい', 'くわしい']
            ]
        ],
        ['強調・無視', [
                [18, [10921, 17], 'emphasize', '～を強調する', []],
                ['<emphasize> the importance of health', '強調する', 'きょうちょうする']
            ],
            [
                [19, [10102, 18], 'stress', '～を強調する', []],
                ['<stress> the need for information', '強調する', 'きょうちょうする']
            ],
            [
                [20, [10658, 19], 'neglect', '～を無視する、怠る', []],
                ['<neglect> human rights', '無視する', 'むしする']
            ],
            [
                [21, [10346, 20], 'ignore', '～を無視する', [
                    [11191, 'ignorant', '無知な']
                ]],
                ["<ignore> the doctor's advice", '無視する', 'むしする']
            ]
        ],
        ['その他の関連語', [
                [22, [12004, 21], 'eminent', '名高い', []],
                ['an <eminent> scientist', '名高い', 'なだかい']
            ],
            [
                [23, [11170, 22], 'prominent', '有名な', []],
                ['a <prominent> scientist', '有名な', 'ゆうめいな']
            ],
            [
                [24, [10811], 'prime', '最も重要な、主要な', [
                    [23, 'primary', '第1の, 主要な']
                ]],
                ['the <prime> cause', '主要な', 'しゅような']
            ],
            [
                [25, [10559, 24], 'tiny', 'ちっちゃな', []],
                ['a <tiny> kitten', 'ちっちゃな', 'ちっちゃな']
            ],
            [
                [26, [11190, 25], 'slight', '少しの', []],
                ['without the <slightest> doubt', '少しの', 'すこしの']
            ],
            [
                [27, [10547], 'principal', '主要な', []],
                ['the <principal> cities of Europe', '主要な', 'しゅような']
            ],
            [
                [28, [11130], 'striking', 'いちじるしい', []],
                ['a <striking> contrast', 'いちじるしい', 'いちじるしい']
            ],
            [
                [29, [12007], 'staple', '主要な', []],
                ['a <staple> food', '主', 'しゅ']
            ]
        ]
    ],
    ['特徴・明確さ・点', ['特徴', [
                [30, [12052, 26], 'character', '性格、人物、登場人物', [
                    [10214, 'characteristic', '特徴']
                ]],
                ['his true <character>', '性格', 'せいかく'],
                ["He's an odd <character>.", '人物', 'じんぶつ'],
                ['the <characters> of the novel', '登場人物', 'とうじょうじんぶつ']
            ],
            [
                [31, [10176, 27], 'feature', '特徴', []],
                ['<features> of human language', '特徴', 'とくちょう']
            ],
            [
                [32, [11069, 28], 'trait', '特徴', []],
                ['personality <traits>', '特徴', 'とくちょう']
            ]
        ],
        ['典型・特有', [
                [33, [10545, 29], 'typical', '典型的な', []],
                ['a <typical> American family', '典型的な', 'てんけいてきな']
            ],
            [
                [34, [30], 'unique', '(～に)特有の(to～), 独自の； 唯一の', []],
                ['This tofu burger is <unique> to this restaurant.', '独自の', 'どくじの']
            ],
            [
                [35, [10819, 31], 'peculiar', '独特の、固有の', []],
                ['expressions <peculiar> to English', '特有の', 'とくゆうの']
            ]
        ],
        ['特定↔︎全般', [
                [36, [10258, 32], 'particular', 'ある特定の、特有の', []],
                ['a <particular> character', '特有の', 'とくゆうの']
            ],
            [
                [37, [10527, 33], 'general', '一般', []],
                ['the <general> public', '一般', 'いっぱん']
            ]
        ],
        ['particularの類義語 : 特定の・明確な', [
                [38, [10286], 'specific', '特定の', [
                    [34, 'specify', '～を特定する']
                ]],
                ['a <specific> individual', '特定の', 'とくていの']
            ],
            [
                [39, [10859, 35], 'distinguish', '～を見分ける', []],
                ['<distinguish> a lie from the truth', '見分ける', 'みわける']
            ],
            [
                [40, [10883, 36], 'define', '定義する', [
                    [10594, 'definitely', '絶対']
                ]],
                ['<define> s day as twenty-four hours', '定義する', 'ていぎする']
            ]
        ],
        ['曖昧な', [
                [41, [11119, 37], 'vague', '漠然とした', []],
                ['a <vague> feeling of uneasiness', '漠然とした', 'ばくぜんとした']
            ],
            [
                [42, [11328, 38], 'obscure', 'わかりにくい', []],
                ['for some <obscure> reason', 'はっきりとわからない', 'はっきりとわからない']
            ],
            [
                [43, [11647, 39], 'ambiguous', 'あいまいな', []],
                ['an <ambiguous> expression', 'あいまいな', 'あいまいな']
            ]
        ],
        ['明白な', [
                [44, [10269, 40], 'obvious', '明白な', []],
                ['an <obvious> mistake', '明白な', 'めいはくな']
            ],
            [
                [45, [10518], 'evidence', '証拠', [
                    [41, 'evident', '明白な']
                ]],
                ['<evidence> of life on Mars', '証拠', 'しょうこ']
            ],
            [
                [46, [10593], 'apparently', '一見', [
                    [42, 'apparent', '見たところの, 明白な']
                ]],
                ['an <apparently> simple question', '一見', 'いっけん']
            ],
            [
                [47, [10836], 'plain', '明白な、わかりやすい', []],
                ['be written in <plain> English', '平易な', 'へいいな']
            ]
        ],
        ['点', [
                [48, [12071, 43], 'respect', '点、尊重する', [
                    [11634, 'respectable', 'ちゃんとした']
                ]],
                ['in some <respects>', '点', 'てん'],
                ['<respect> the law', '尊重する', 'そんちょうする']
            ],
            [
                [49, [10966, 44], 'aspect', '側面', []],
                ['unique <aspects> of Japanese culture', '側面', 'そくめん']
            ],
            [
                [50, [10419, 45], 'detail', '細部', []],
                ['remember the <details> of the story', '細部', 'さいぶ']
            ],
            [
                [51, [10753], 'dimension', '側面、要素、次元', []],
                ['the moral <dimension> of science', '側面', 'そくめん']
            ]
        ],
        ['正確さ', [
                [52, [10843], 'precisely', '正確に、まさに、ちょうど', [
                    [46, 'precise', '正確な']
                ]],
                ['<precisely> at noon', 'ちょうど', 'ちょうど']
            ],
            [
                [53, [10565, 47], 'accurate', '正確な', []],
                ['<accurate> information', '正確な', 'せいかくな']
            ],
            [
                [54, [10314], 'exactly', '正確に', []],
                ['at <exactly> the same time', 'ぴったり', 'ぴったり']
            ]
        ]
    ],
    ['構造・構成', ['struct : 組み立てる', [
                [55, [10447, 48], 'structure', '構造', []],
                ['changes in social <structure>', '構造', 'こうぞう']
            ],
            [
                [56, [10488], 'construction', '建設', [
                    [49, 'construct', '～を建設する, 組み立てる']
                ]],
                ['a bridge under <construction>', '建設', 'けんせつ']
            ],
            [
                [57, [10052, 50], 'destroy', '～を破壊する', []],
                ['<destroy> forests', '破壊する', 'はかいする']
            ],
            [
                [58, [11022, 51], 'architecture', '建築', []],
                ['study modern <architecture>', '建築', 'けんちく']
            ]
        ],
        ['stitute : 立てる', [
                [59, [10664, 52], 'constitute', '～を構成する、占める、～である', [
                    [10761, 'constitution', '憲法']
                ]],
                ['Cars <constitute> 10% of exports.', '占める', 'しめる']
            ],
            [
                [60, [10243], 'institution', '機関、制度', [
                    [53, 'institute', '～(法律・制度)を制定する； 協会, 研究所']
                ]],
                ['educational <institutions>', '機関', 'きかん']
            ],
            [
                [61, [10621, 54], 'substitute', '～を代わりに用いる', []],
                ['<substitute> margarine for butter', '代わりに用いる', 'かわりにもちいる']
            ]
        ],
        ['sta : 立つ', [
                [62, [11141, 55], 'stable', '安定した', []],
                ['a <stable> condition', '安定した', 'あんていした']
            ],
            [
                [63, [10045, 56], 'establish', '～を設立する、創立する', []],
                ['<establish> a company', '設立する', 'せつりつする']
            ],
            [
                [64, [10158], 'assist', '～を助ける、～を手伝う', []],
                ['<assist> him in his work', '手伝う', 'てつだう']
            ],
            [
                [65, [11066], 'statue', '像', []],
                ['the <Statue> of Liberty', '像', 'ぞう']
            ]
        ],
        ['sub- : 下・副次的', [
                [66, [12103, 57], 'subject', '支配される、かかりやすい、話題、学科、被験者', [
                    [11957, 'subjective', '主観的な']
                ]],
                ['People are <subject> to the law.', '支配される', 'しはいされる'],
                ['I am <subject> to illness.', 'かかりやすい', 'かかりやすい'],
                ["Let's change the <subject>.", '話題', 'わだい'],
                ['My favorite <subject> is math.', '学科', 'がっか'],
                ['the <subject> of the experiment', '被験者', 'ひけんしゃ']
            ],
            [
                [67, [58], 'subdue', '～を征服する, 支配する, 抑える', []],
                ['The king <subdue> the people with absolute power.', '支配した', 'しはいした']
            ],
            [
                [68, [11201, 59], 'submit', 'Aに服従する、提出する', []],
                ['<submit> to authority', '服従する', 'ふくじゅうする']
            ],
            [
                [69, [11076, 60], 'substance', '物質', [
                    [10839, 'substantial', '相当な、多大な']
                ]],
                ['a dangerous <substance>', '物質', 'ぶっしつ']
            ]
        ],
        ['fund / found : 基礎・底', [
                [70, [10290, 61], 'fundamental', '基本的な', [
                    [10825, 'underlying', '根本的な']
                ]],
                ['<fundamental> human rights', '基本的', 'きほんてき']
            ],
            [
                [71, [10988, 62], 'fund', '資金', []],
                ['lack of <funds>', '資金', 'しきん']
            ],
            [
                [72, [10637, 63], 'found', '～を創立する、設立する', []],
                ['<found> a computer company', '設立する', 'せつりつする']
            ],
            [
                [73, [64], 'foundation', '基盤, 基礎, 土台', []],
                ['Without a firm <foundation> in grammar, one can neither speak nor write.', '基礎', 'きそ']
            ],
            [
                [74, [11147, 65], 'profound', '深い', []],
                ['a <profound> meaning', '深い', 'ふかい']
            ]
        ],
        ['base / ground : 基礎・土台', [
                [75, [10028, 66], 'base', 'AがBに基づいている', []],
                ['This story is <based> on fact.', '基づいている', 'もとづいている']
            ],
            [
                [76, [10759, 67], 'basis', '基礎、根拠、方式、やり方', []],
                ['the scientific <basis> of his theory', '根拠', 'こんきょ']
            ],
            [
                [77, [12118, 68], 'ground', '根拠', []],
                ['On what <grounds> do you say that?', '根拠', 'こんきょ']
            ]
        ],
        ['super- : 上', [
                [78, [11631, 69], 'superficial', '表面的な', []],
                ['a <superficial> difference', '表面的な', 'ひょうめんてきな']
            ],
            [
                [79, [11629, 70], 'shallow', '浅い', []],
                ['a <shallow> river', '浅い', 'あさい']
            ],
            [
                [80, [71], 'superb', 'すばらしい, 見事な', []],
                ['According to the newspaper, the musical performance was <superb>.', 'すばらしかった', 'すばらしかった']
            ],
            [
                [81, [11289], 'supervisor', '監督者', [
                    [72, 'supervise', '～を監視する, 指揮する']
                ]],
                ['a production <supervisor>', '監督者', 'かんとくしゃ']
            ],
            [
                [82, [11456, 73], 'superstition', '迷信', []],
                ['believe a foolish <superstition>', '迷信', 'めいしん']
            ],
            [
                [83, [11296], 'summit', '頂上、頂点、首脳会議', []],
                ['reach the <summit>', '頂上', 'ちょうじょう']
            ],
            [
                [84, [11623], 'supreme', '最高の', []],
                ['<supreme> joy', '最高の', 'さいこうの']
            ]
        ],
        ['中心↔︎外側', [
                [85, [10781, 74], 'core', '中心、核心', []],
                ['the <core> of the problem', '核心', 'かくしん']
            ],
            [
                [86, [10437, 75], 'surface', '表面', []],
                ['the <surface> of the earth', '表面', 'ひょうめん']
            ],
            [
                [87, [10803, 76], 'internal', '内部の、国内の', []],
                ['<internal> medicine', '内', 'ない']
            ],
            [
                [88, [77], 'external', '外側の', []],
                ['In a dream, the <external> world is completely replaced by the internal world.', '外側の', 'そとがわの']
            ],
            [
                [89, [10128, 78], 'concentrate', '集中する', []],
                ['<concentrate> on what he is saying', '集中する', 'しゅうちゅうする']
            ],
            [
                [90, [10097, 79], 'focus', '焦点を合わせる', []],
                ['<focus> on the problem', '焦点を合わせる', 'しょうてんをあわせる']
            ],
            [
                [91, [10834], 'inner', '内側の', []],
                ['her <inner> self', '内なる', 'うちなる']
            ]
        ],
        ['構成・組織', [
                [92, [10619, 80], 'compose', '～を組み立てる', []],
                ['The body is <composed> of cells.', '構成されている', 'こうせいされている']
            ],
            [
                [93, [10112, 81], 'consist', 'Aで構成されている', [
                    [10835, 'consistent', '矛盾のない、一致した']
                ]],
                ['The book <consists> of six lessons.', '構成されている', 'こうせいされている']
            ],
            [
                [94, [10439], 'organization', '組織', [
                    [82, 'organize', '～を組織する']
                ]],
                ['an international <organization>', '組織', 'そしき']
            ],
            [
                [95, [10227, 83], 'element', '要素、元素', []],
                ['the most important <element>', '要素', 'ようそ']
            ],
            [
                [96, [11041, 84], 'component', '構成要素', [
                    [11309, 'compound', '化合物']
                ]],
                ['the <components> of the body', '構成要素', 'こうせいようそ']
            ]
        ],
        ['複雑さ', [
                [97, [10271, 85], 'complex', '複雑な', []],
                ['a <complex> system', '複雑な', 'ふくざつな']
            ],
            [
                [98, [11124, 86], 'complicated', '複雑な', []],
                ['a <complicated> ploblem', '複雑な', 'ふくざつな']
            ]
        ]
    ],
    ['動詞をイメージする・1', ['reveal / conceal / expose / impose', [
                [99, [10078, 87], 'reveal', '～を明らかにする', []],
                ['<reveal> a surprising fact', '明らかにする', 'あきらかにする']
            ],
            [
                [100, [11358, 88], 'conceal', '隠す', []],
                ['<conceal> the fact from him', '隠す', 'かくす']
            ],
            [
                [101, [10152, 89], 'expose', 'AをBにさらす', []],
                ['be <exposed> to danger', 'さらされる', 'さらされる']
            ],
            [
                [102, [10661, 90], 'impose', 'AをBに課す、押し付ける', []],
                ['<impose> rules on students', '押しつける', 'おしつける']
            ],
            [
                [103, [11413], 'uncover', '明らかにする', []],
                ['<uncover> new evidence', '明らかにする', 'あきらかにする']
            ],
            [
                [104, [11701], 'clarify', '明らかにする', []],
                ['<clarify> the meaning of the word', '明らかにする', 'あきらかにする']
            ]
        ],
        ['divide / diffuse / scatter / spread', [
                [105, [10355, 91], 'divide', '分割する', []],
                ['<divide> the cake into six pieces', '分割する', 'ぶんかつする']
            ],
            [
                [106, [92], 'diffuse', '～をまき散らす, 分散する； 拡散する', []],
                ['The toxic gas did not quickly <diffuse> because there was no wind.', '拡散し', 'かくさんし']
            ],
            [
                [107, [10904, 93], 'scatter', '～をばらまく', []],
                ['<scatter> toys on the floor', 'ばらまく', 'ばらまく']
            ],
            [
                [108, [10048, 94], 'spread', '～を広げる；広がる', [
                    [11123, 'widespread', '広まっている']
                ]],
                ['<spread> the tablecloth', '広げる', 'ひろげる']
            ],
            [
                [109, [10675], 'split', '～を割る、分裂する', []],
                ['<split> into two groups', '分裂する', 'ぶんれつする']
            ]
        ],
        ['bend / inclined / lean / erect', [
                [110, [10907, 95], 'bend', '身をかがめる', []],
                ['<bend> down to pick up the can', '身をかがめる', 'みをかがめる']
            ],
            [
                [111, [10828], 'inclined', 'Vする傾向がある、Vしたい気がある', [
                    [96, 'incline', '～を傾ける, (…したい)気持ちにさせる(to do)']
                ]],
                ['I am <inclined> to believe him.', '気がする', 'きがする']
            ],
            [
                [112, [10620, 97], 'lean', 'よりかかる、もたれる', []],
                ['<lean> against the wall', 'もたれる', 'もたれる']
            ],
            [
                [113, [11716, 98], 'erect', '築く', []],
                ['<erect> barriers', '築く', 'きずく']
            ]
        ],
        ['emit / absorb / attract / extract', [
                [114, [11102], 'emission', '排出', [
                    [99, 'emit', '～を放出する, 排出する']
                ]],
                ['greenhouse gas <emissions>', '排出', 'はいしゅつ']
            ],
            [
                [115, [10384, 100], 'absorb', '～を吸収する', []],
                ['<absorb> a lot of water', '吸収する', 'きゅうしゅうする']
            ],
            [
                [116, [10103, 101], 'attract', '～を引きつける', []],
                ['<attract> his attention', '引きつける', 'ひきつける']
            ],
            [
                [117, [11428, 102], 'extract', '取り出す', []],
                ['<extract> DNA from blood', '取り出す', 'とりだす']
            ],
            [
                [118, [11766], 'suck', '吸う', []],
                ['<suck> blood from humans', '吸う', 'すう']
            ],
            [
                [119, [11780], 'discharge', '放出する', []],
                ['<discharge> waste into rivers', '放出する', 'ほうしゅつする']
            ]
        ],
        ['aim / penetrate / thrust / insert', [
                [120, [10082, 103], 'aim', '～をねらう', []],
                ['<aim> at the Asian market', 'ねらう', 'ねらう']
            ],
            [
                [121, [11238, 104], 'penetrate', '入り込む', []],
                ['<penetrate> deep into the jungle', '入り込む', 'はいりこむ']
            ],
            [
                [122, [11777, 105], 'thrust', '押し込む', []],
                ['<thrust> the money into his pocket', '押し込む', 'おしこむ']
            ],
            [
                [123, [11355, 106], 'insert', '差し込む', []],
                ['<insert> the key into the hole', '差し込む', 'さしこむ']
            ],
            [
                [124, [11730], 'pierce', '穴をあける', []],
                ['<pierce> my ears', '穴をあける', 'あなをあける']
            ],
            [
                [125, [11742], 'poke', '突く', []],
                ['<poke> him in the ribs', '突く', 'つく']
            ]
        ],
        ['grasp / grab / seize / drag', [
                [126, [10647, 107], 'grasp', '～を理解する', []],
                ['<grasp> what he is saying', '理解する', 'りかいする']
            ],
            [
                [127, [10915, 108], 'grab', '～をつかむ', []],
                ['<grab> him by the arm', 'つかむ', 'つかむ']
            ],
            [
                [128, [11415, 109], 'seize', 'つかむ', []],
                ['<seize> the opportunity', 'つかむ', 'つかむ']
            ],
            [
                [129, [11349, 110], 'drag', '引きずる', []],
                ['<drag> a heavy bag to the car', '引きずる', 'ひきずる']
            ]
        ],
        ['cling / stick / attach / imitate', [
                [130, [11360, 111], 'cling', '固執する', []],
                ['<cling> to tradition', '固執する', 'こしつする']
            ],
            [
                [131, [12135, 112], 'stick', '守る、動けなく、突き出す、残る', []],
                ['<stick> to the schedule', '守る', 'まもる'],
                ['get <stuck> on a crowded train', '動けなく', 'うごけなく'],
                ['<stick> out my tongue', '突き出す', 'つきだす'],
                ['The song <stuck> in my mind.', '残った', 'のこった']
            ],
            [
                [132, [10616, 113], 'attach', 'AをBにくっつける', [
                    [11972, 'detached', '切り離された']
                ]],
                ['a bookcase <attached> to the wall', '取り付けられた', 'とりつけられた']
            ],
            [
                [133, [10919, 114], 'imitate', '～をまねる', []],
                ['<imitate> human behavior', 'まねる', 'まねる']
            ]
        ],
        ['fold / tear / mold / distort', [
                [134, [10916, 115], 'fold', '～を折りたたむ', []],
                ['<fold> a piece of paper', '折りたたむ', 'おりたたむ']
            ],
            [
                [135, [10386, 116], 'tear', '～を引き裂く', []],
                ['<tear> the letter to pieces', '引き裂く', 'ひきさく']
            ],
            [
                [136, [11388, 117], 'mold', '作る', []],
                ['<mold> plastic products', '作る', 'つくる']
            ],
            [
                [137, [11770, 118], 'distort', '歪曲する', []],
                ['<distort> the facts', '歪曲する', 'わいきょくする']
            ]
        ],
        ['expand / shrink / swell', [
                [138, [10116, 119], 'expand', '拡大する', []],
                ['<expand> the market', '拡大する', 'かくだいする']
            ],
            [
                [139, [11234, 120], 'shrink', '縮む、縮ませる、減る', []],
                ['The shirts will <shrink>.', '縮む', 'ちぢむ']
            ],
            [
                [140, [11216, 121], 'swell', 'ふくらむ', []],
                ['<swell> like a balloon', 'ふくらむ', 'ふくらむ']
            ]
        ],
        ['assemble / collect / cram', [
                [141, [11206, 122], 'assemble', '組み立てる', []],
                ['<assemble> small parts', '組み立てる', 'くみたてる']
            ],
            [
                [142, [11656], 'collective', '集団', [
                    [123, 'collect', '～を集める； 徴収する']
                ]],
                ['take <collective> action', '集団', 'しゅうだん']
            ],
            [
                [143, [11871, 124], 'cram', '塾', []],
                ['go to <cram> school', '塾', 'じゅく']
            ]
        ],
        ['rotate / twist / upset / stir', [
                [144, [11394, 125], 'rotate', '回転する', []],
                ['The earth <rotates> once a day.', '回転する', 'かいてんする']
            ],
            [
                [145, [11427, 126], 'twist', 'ねじ曲げる', []],
                ['<twist> a wire', 'ねじ曲げる', 'ねじまげる']
            ],
            [
                [146, [10283, 127], 'upset', '動揺している', []],
                ['be <upset> by the accident', '動揺している', 'どうようしている']
            ],
            [
                [147, [11267, 128], 'stir', 'かきたてる', []],
                ['<stir> emotions', 'かきたてる', 'かきたてる']
            ]
        ],
        ['explode / burst / melt / leak', [
                [148, [11049], 'explosion', '爆発', [
                    [129, 'explode', '爆発する']
                ]],
                ['the population <explosion>', '爆発', 'ばくはつ']
            ],
            [
                [149, [10639, 130], 'burst', '破裂する、突然～しだす', []],
                ['<burst> into tears', '急に', 'きゅうに']
            ],
            [
                [150, [10901, 131], 'melt', '溶ける', []],
                ['The snow will <melt> soon.', '溶ける', 'とける']
            ],
            [
                [151, [11257, 132], 'leak', '漏れる、漏らす', []],
                ['Oil <leaked> from the tank.', '漏れた', 'もれた']
            ]
        ]
    ],
    ['制約・強制・禁止', ['str : 縛る', [
                [152, [133], 'string', 'ひも, 糸', []],
                ['elastic <string>', 'ひも', 'ひも']
            ],
            [
                [153, [10618, 134], 'restrict', '～を制限する', []],
                ['<restrict> freedom of speech', '制限する', 'せいげんする']
            ],
            [
                [154, [10578, 135], 'strict', '厳しい', []],
                ['<strict> rules', '厳しい', 'きびしい']
            ],
            [
                [155, [10771, 136], 'distress', '苦しみ、悲嘆、苦難', []],
                ['be in economic <distress>', '苦難', 'くなん']
            ],
            [
                [156, [10743, 137], 'strain', '負担', []],
                ['put a <strain> on the heart', '負担', 'ふたん']
            ],
            [
                [157, [11377, 138], 'restrain', '抑制する', []],
                ['<restrain> inflation', '抑制する', 'よくせいする']
            ],
            [
                [158, [11827], 'constraint', '制約', []],
                ['due to time <constraints>', '制約', 'せいやく']
            ]
        ],
        ['tend / tens : 伸ばす', [
                [159, [11004], 'tension', '緊張', [
                    [139, 'tense', '緊張した, ぴんと張った']
                ]],
                ['relieve <tension>', '緊張', 'きんちょう']
            ],
            [
                [160, [10110, 140], 'extend', '～を広げる、延長する', []],
                ['Exercise <extends> life.', '延ばす', 'のばす']
            ],
            [
                [161, [11151, 141], 'intense', '強烈な', []],
                ['feel <intense> pressure', '強烈な', 'きょうれつな']
            ],
            [
                [162, [10008], 'continue', '続く、～を続ける', []],
                ['<continue> to grow fast', '続ける', 'つづける']
            ],
            [
                [163, [11998], 'tender', 'やさしい', []],
                ['a <tender> smile', 'やさしい', 'やさしい']
            ]
        ],
        ['力・強制', [
                [164, [10013, 142], 'force', '～を強制する', [
                    [11232, 'enforce', '施行する'],
                    [11436, 'reinforce', '強める']
                ]],
                ['be <forced> to work', '強制される', 'きょうせいされる']
            ],
            [
                [165, [11258, 143], 'compel', '強制する', []],
                ['be <compelled> to work hard', '強制される', 'きょうせいされる']
            ],
            [
                [166, [10644, 144], 'oblige', '～に強いる', []],
                ['be <obliged> to pay the price', 'ざるをえない', 'ざるをえない']
            ],
            [
                [167, [10465], 'strength', '強さ', []],
                ['<strength> and weakness', '強さ', 'つよさ']
            ],
            [
                [168, [12005], 'potent', '強力な', []],
                ['a <potent> weapon', '強力な', 'きょうりょくな']
            ],
            [
                [169, [12014], 'mighty', '強力な', []],
                ['a <mighty> king', '強力な', 'きょうりょくな']
            ]
        ],
        ['自発', [
                [170, [10250], 'volunteer', 'ボランティア', [
                    [145, 'voluntary', '自発的な']
                ]],
                ['a hospital <volunteer>', 'ボランティア', 'ぼらんていあ']
            ],
            [
                [171, [11677, 146], 'spontaneous', '自然に起こる', []],
                ['<spontaneous> laughter', '自然に起こる', 'しぜんにおこる']
            ]
        ],
        ['自由・解散↔︎捕獲', [
                [172, [12087, 147], 'free', '無い、解放する', []],
                ['a life <free> from stress', '無い', 'ない'],
                ['<free> them from work', '解放する', 'かいほうする']
            ],
            [
                [173, [11179], 'liberal', '自由主義の', [
                    [148, 'liberty', '自由']
                ]],
                ['<liberal> politics', '自由主義の', 'じゆうしゅぎの']
            ],
            [
                [174, [10142, 149], 'release', '～を解放する、～を発表する', []],
                ['<release> him from work', '解放する', 'かいほうする']
            ],
            [
                [175, [10672, 150], 'capture', '～を捕らえる', []],
                ['<capture> wild animals', '捕らえる', 'とらえる']
            ],
            [
                [176, [11844], 'outlet', 'はけ口', []],
                ['an <outlet> for frustration', 'はけ口', 'はけぐち']
            ]
        ],
        ['禁止', [
                [177, [10643, 151], 'prohibit', '〈法・団体が〉～を禁じる', []],
                ['<prohibit> children from working', '禁じる', 'きんじる']
            ],
            [
                [178, [10873, 152], 'forbid', '～を禁じる', []],
                ['<forbid> him to go out', '禁じる', 'きんじる']
            ],
            [
                [179, [10605, 153], 'ban', '（公式に）～を禁止する', []],
                ['<ban> smoking in public places', '禁ずる', 'きんずる']
            ]
        ],
        ['許容', [
                [180, [10364, 154], 'permit', '～を許す', []],
                ['<permit> him to go out', '許す', 'ゆるす']
            ],
            [
                [181, [10012, 155], 'allow', '～を許可する', [
                    [11474, 'allowance', 'こづかい']
                ]],
                ['<allow> him to go out', '許可する', 'きょかする']
            ],
            [
                [182, [10171, 156], 'forgive', '～を許す', []],
                ['<forgive> him for being late', '許す', 'ゆるす']
            ],
            [
                [183, [10649, 157], 'overlook', '～を見落とす、～を見逃す', []],
                ['<overlook> the fact', '見逃す', 'みのがす']
            ]
        ],
        ['寛容', [
                [184, [11116, 158], 'generous', '気前のよい', []],
                ['a <generous> offer', '気前のよい', 'きまえのよい']
            ],
            [
                [185, [11431, 159], 'tolerate', '我慢する', []],
                ['<tolerate> pain', '我慢する', 'がまんする']
            ]
        ]
    ],
    ['阻害・除去・供給・促進', ['予防・回避', [
                [186, [10038, 160], 'prevent', '～をさまたげる', []],
                ['<prevent> him from sleeping', 'さまたげる', 'さまたげる']
            ],
            [
                [187, [10338, 161], 'avoid', '～を避ける', []],
                ['<avoid> making mistakes', '避ける', 'さける']
            ],
            [
                [188, [11732, 162], 'hinder', 'さまたげる', []],
                ['<hinder> economic development', 'さまたげる', 'さまたげる']
            ],
            [
                [189, [11346, 163], 'refrain', '控える', []],
                ['<refrain> from smoking', '控える', 'ひかえる']
            ]
        ],
        ['中断・妨害', [
                [190, [10623, 164], 'interrupt', '～を妨げる', []],
                ['<interrupt> their conversation', 'じゃまする', 'じゃまする']
            ],
            [
                [191, [11395, 165], 'disrupt', 'かき乱す', []],
                ['<disrupt> their lives', 'かき乱す', 'かきみだす']
            ],
            [
                [192, [10120, 166], 'disturb', '～を妨げる', []],
                ['<disturb> his sleep', 'さまたげる', 'さまたげる']
            ],
            [
                [193, [10691, 167], 'interfere', 'Aを邪魔する', []],
                ['<interfere> with his work', 'じゃまする', 'じゃまする']
            ]
        ],
        ['中止・停止', [
                [194, [10604, 168], 'cease', '～しなくなる', []],
                ['Some countries <ceased> to exist.', 'しなくなった', 'しなくなった']
            ],
            [
                [195, [11382, 169], 'halt', '止める', []],
                ['<halt> global warming', '止める', 'とめる']
            ]
        ],
        ['剥奪', [
                [196, [10652, 170], 'deprive', 'AからBを奪う', []],
                ['<deprive> him of the chance', '奪う', 'うばう']
            ],
            [
                [197, [10671, 171], 'rob', 'AからBを奪う', []],
                ['<rob> the bank of $50,000', '奪う', 'うばう']
            ],
            [
                [198, [10770, 172], 'strip', '細長い一片', []],
                ['a long <strip> of paper', '切れ', 'きれ']
            ]
        ],
        ['除去', [
                [199, [10089, 173], 'remove', '～を移す、取り去る', []],
                ['<remove> the cover', '取り除く', 'とりのぞく']
            ],
            [
                [200, [10607, 174], 'eliminate', '〈不要なもの〉を除去する', []],
                ['<eliminate> the need for paper', '無くす', 'なくす']
            ]
        ],
        ['処分', [
                [201, [10922], 'rid', '～を取り除く', [
                    [175, 'get rid of', '～を取り除く, 処分する']
                ]],
                ['get <rid> of stress', '取り除く', 'とりのぞく']
            ],
            [
                [202, [176], 'dispose of', '～を処分する, 取り除く', []],
                ['Can you <dispose of> the trash that is in your room?', '取り除いて', 'とりのぞいて']
            ],
            [
                [203, [177], 'do away with', '～を捨てる, 廃止する', []],
                ['The office decided to <do away with> files dating back for more than a decade.', '捨てる', 'すてる']
            ],
            [
                [204, [11398, 178], 'discard', '捨てる', []],
                ['<discard> old ideas', '捨てる', 'すてる']
            ],
            [
                [205, [10123, 179], 'abandon', '～を捨てる', []],
                ['an <abandoned> pet', '捨てられた', 'すてられた']
            ],
            [
                [206, [10238, 180], 'desert', '砂漠', []],
                ['a <desert>ed road in the <desert>', '砂漠', 'さばく']
            ],
            [
                [207, [11750], 'dump', '捨てる', []],
                ['<dump> garbage in the street', '捨てる', 'すてる']
            ]
        ],
        ['供給', [
                [208, [10007, 181], 'provide', '～を供給する、与える', []],
                ['<provide> him with information', '与える', 'あたえる']
            ],
            [
                [209, [10050, 182], 'supply', '～を供給する', []],
                ['<supply> the city with water', '供給する', 'きょうきゅうする']
            ],
            [
                [210, [10014, 183], 'offer', '～を申し出る', []],
                ['<offer> help to the poor', '申し出る', 'もうしでる']
            ]
        ],
        ['装備', [
                [211, [10231], 'furniture', '家具', [
                    [184, 'furnish', '～に(…[家具など]を)備え付ける(with…)'],
                    [10463, 'equipment', '設備']
                ]],
                ['a room with little <furniture>', '家具', 'かぐ']
            ],
            [
                [212, [10680, 185], 'equip', '～を装備させる', []],
                ['The car is <equipped> with AI.', '装備されている', 'そうびされている']
            ]
        ],
        ['促進', [
                [213, [10361, 186], 'promote', '～を促進する', []],
                ['<promote> economic growth', '促進する', 'そくしんする']
            ],
            [
                [214, [10891, 187], 'enhance', '～を向上させる', []],
                ['<enhance> the quality of life', '向上させる', 'こうじょうさせる']
            ],
            [
                [215, [11371, 188], 'accelerate', '加速する', []],
                ['<accelerate> the process of reform', '加速する', 'かそくする']
            ],
            [
                [216, [11348, 189], 'boost', '活気づける', []],
                ['<boost> the economy', '活気づける', 'かっきづける']
            ],
            [
                [217, [10685, 190], 'urge', '～に強く迫る、～を説得する', [
                    [11128, 'urgent', '緊急の']
                ]],
                ['<urge> him to go home', '説得する', 'せっとくする']
            ],
            [
                [218, [10042, 191], 'encourage', 'はげます', [
                    [10945, 'courage', '勇気']
                ]],
                ['<encourage> children to read', 'すすめる', 'すすめる']
            ],
            [
                [219, [10035], 'cheer', '～を励ます', []],
                ['<cheer> up the patients', '元気づける', 'げんきづける']
            ]
        ]
    ],
    ['目的・実行・達成', ['企画・目的', [
                [220, [10206, 192], 'project', '計画', []],
                ['a business <project>', '計画', 'けいかく']
            ],
            [
                [221, [10737, 193], 'enterprise', '企業、事業', []],
                ['a private <enterprise>', '企業', 'きぎょう']
            ],
            [
                [222, [11013, 194], 'scheme', '計画', []],
                ['a training <scheme> for pilots', '計画', 'けいかく']
            ],
            [
                [223, [10191, 195], 'attempt', '試み', []],
                ['an <attempt> to break the record', '試み', 'こころみ']
            ],
            [
                [224, [10402, 196], 'purpose', '目的', []],
                ['for peaceful <purposes>', '目的', 'もくてき']
            ],
            [
                [225, [12016], 'intent', '決意をしている', [
                    [197, 'intention', '意図'],
                    [10353, 'intend', 'つもりだ']
                ]],
                ['be <intent> on marrying him', '決意をしている', 'けついをしている']
            ],
            [
                [226, [10957, 198], 'destination', '目的地', [
                    [11489, 'destiny', '運命']
                ]],
                ['reach the final <destination>', '目的地', 'もくてきち']
            ],
            [
                [227, [10766], 'venture', '冒険的事業', []],
                ['a joint <venture> with Taiwan', '事業', 'じぎょう']
            ]
        ],
        ['理想と現実', [
                [228, [10546, 199], 'ideal', '理想的な', []],
                ['an <ideal> place to live', '理想的な', 'りそうてきな']
            ],
            [
                [229, [10540, 200], 'practical', '実用的な', []],
                ['<practical> English', '実用的な', 'じつようてきな']
            ],
            [
                [230, [10015], 'realize', '～を悟る', [
                    [201, 'real', '本当の, 本物の, 現実の']
                ]],
                ['<realize> the error', '悟る', 'さとる']
            ]
        ],
        ['空想・幻想', [
                [231, [10267], 'fantastic', 'すばらしい', [
                    [202, 'fantasy', '空想']
                ]],
                ['I had a <fantastic> time', 'すばらしい', 'すばらしい']
            ],
            [
                [232, [12181, 203], 'fancy', '高級、想像する', []],
                ['<fancy> restaurant', '高級', 'こうきゅう'],
                ['<fancy> myself a novelist', '想像する', 'そうぞうする']
            ],
            [
                [233, [11457, 204], 'illusion', '幻想、錯覚', []],
                ['the <illusion> that Japan is safe', '幻想', 'げんそう']
            ],
            [
                [234, [205], 'imagine', '～を想像する', [
                    [11174, 'imaginary', '架空の']
                ]],
                ['<imagine> a world without war', '想像する', 'そうぞうする']
            ]
        ],
        ['任務の着手', [
                [235, [10425, 206], 'task', '仕事', []],
                ['a difficult <task>', '仕事', 'しごと']
            ],
            [
                [236, [10673, 207], 'undertake', '〈仕事など〉を引き受ける', []],
                ['<undertake> the work', '引き受ける', 'ひきうける']
            ],
            [
                [237, [10693], 'launch', '〈ロケットなど〉を打ち上げる', [
                    [208, 'cage', '檻, かご']
                ]],
                ['<launch> a space shuttle', '発射する', 'はっしゃする']
            ],
            [
                [238, [11760, 209], 'embark', '乗り出す', []],
                ['<embark> on a new adventure', '乗り出す', 'のりだす']
            ],
            [
                [239, [10864, 210], 'hesitate', 'ためらう', []],
                ["Don't <hesitate> to ask questions.", 'ためらう', 'ためらう']
            ],
            [
                [240, [10611, 211], 'pursue', '～を追求する', []],
                ['<pursue> the American Dream', '追い求める', 'おいもとめる']
            ],
            [
                [241, [10054, 212], 'seek', '～を求める', []],
                ['<seek> help from the police', '求める', 'もとめる']
            ],
            [
                [242, [11437, 213], 'strive', '努力する', []],
                ['<strive> to survive', '努力する', 'どりょくする']
            ]
        ],
        ['割り当て・責任', [
                [243, [10667, 214], 'assign', '〈仕事・物〉を割り当てる', []],
                ['<assign> work to each member', '割り当てる', 'わりあてる']
            ],
            [
                [244, [215], 'in charge of', '～を担当して, の責任者で', []],
                ['The youngest brother is <in charge of> feeding the ferrets.', '担当している', 'たんとうしている']
            ],
            [
                [245, [10427], 'responsibility', '責任', [
                    [216, 'responsible', '(～に対して)責任のある(for～)']
                ]],
                ['take <responsibility> for the accident', '責任', 'せきにん']
            ]
        ],
        ['実行', [
                [246, [11412, 217], 'execute', '処刑する', [
                    [10981, 'executive', '執行責任者']
                ]],
                ['<execute> the murderer', '処刑する', 'しょけいする']
            ],
            [
                [247, [10065, 218], 'perform', '～を行う、～を遂行する', []],
                ['<perform> the job', '遂行する', 'すいこうする']
            ],
            [
                [248, [219], 'carry out', '〜を実行する、果たす', []],
                ['The spy successfully <carried out> the mission.', '実行した', 'じっこうした']
            ]
        ],
        ['障害・取り組み', [
                [249, [11002, 220], 'obstacle', '障害', []],
                ['an <obstacle> to communication', '障害', 'しょうがい']
            ],
            [
                [250, [11947, 221], 'adverse', '悪', []],
                ['the <adverse> effect of global warming', '悪', 'あく']
            ],
            [
                [251, [11520, 222], 'hardship', '苦難', []],
                ['face economic <hardship>', '苦難', 'くなん']
            ],
            [
                [252, [10758, 223], 'burden', '重荷', []],
                ['become a <burden> on society', '重荷', 'おもに']
            ],
            [
                [253, [10376, 224], 'overcome', '～に打ち勝つ', []],
                ['<overcome> difficulties', '打ち勝つ', 'うちかつ']
            ],
            [
                [254, [10861], 'cope', 'うまく対処する', [
                    [225, 'cope with', '～に取り組む, 対処する']
                ]],
                ['<cope> with problems', 'うまく対処する', 'うまくたいしょする']
            ],
            [
                [255, [11384, 226], 'tackle', '取り組む', []],
                ['<tackle> environmental problems', '取り組む', 'とりくむ']
            ],
            [
                [256, [10372], 'handle', '～に対処する', []],
                ['how to <handle> problems', '対処する', 'たいしょする']
            ],
            [
                [257, [10786], 'disability', '障害', []],
                ['people with <disabilities>', '障害', 'しょうがい']
            ]
        ],
        ['任務遂行に必要なもの1 : 能力・努力', [
                [258, [10523, 227], 'talent', '才能', []],
                ['have musical <talent>', '才能', 'さいのう']
            ],
            [
                [259, [12205], 'gifted', '才能ある', [
                    [228, 'gift', '贈り物, (生まれつきの)才能']
                ]],
                ['a <gifted> pianist', '才能ある', 'さいのうある']
            ],
            [
                [260, [229], 'ability', '能力', []],
                ['His <ability> to focus is impressive.', '能力', 'のうりょく']
            ],
            [
                [261, [10405, 230], 'skill', '技術', []],
                ['learn basic <skills>', '技術', 'ぎじゅつ']
            ],
            [
                [262, [10276, 231], 'capable', '～する能力がある', []],
                ['He is <capable> of doing the job.', '能力がある', 'のうりょくがある']
            ],
            [
                [263, [10248, 232], 'capacity', '能力', []],
                ["man's great <capacity> to learn", '能力', 'のうりょく']
            ],
            [
                [264, [10554, 233], 'potential', '潜在的な', []],
                ['<potential> danger', '潜在的な', 'せんざいてきな']
            ],
            [
                [265, [10399, 234], 'effort', '努力', []],
                ['make an <effort> to help him', '努力', 'どりょく']
            ],
            [
                [266, [10118, 235], 'struggle', '苦闘する、もがく', []],
                ['<struggle> to get free', 'もがく', 'もがく']
            ],
            [
                [267, [11315, 236], 'endeavor', '活動', []],
                ['every field of human <endeavor>', '活動', 'かつどう']
            ],
            [
                [268, [10831], 'desperate', '必死の', []],
                ['a <desperate> attempt', '必死の', 'ひっしの']
            ],
            [
                [269, [10971], 'genius', '天才', []],
                ['a musical <genius>', '天才', 'てんさい']
            ]
        ],
        ['任務遂行に必要なもの2 : ねばり・効率', [
                [270, [11262, 237], 'persist', '持続する、残る', []],
                ['<persist> throughout life', '残る', 'のこる']
            ],
            [
                [271, [238], 'persevere', 'ねばる', []],
                ['She will <persevere> until she succeeds.', 'ねばる', 'ねばる']
            ],
            [
                [272, [10289, 239], 'efficient', '効率がいい', []],
                ['an <efficient> use of energy', '効率のよい', 'こうりつのよい']
            ]
        ],
        ['目標達成', [
                [273, [10635, 240], 'fulfill', '〈約束・夢など〉を果たす', []],
                ['<fulfill> the promise', '果たす', 'はたす']
            ],
            [
                [274, [11418, 241], 'attain', '達成する', []],
                ['<attain> the goal', '達成する', 'たっせいする']
            ],
            [
                [275, [10351, 242], 'achieve', '～を達成する', []],
                ['finally <achieve> the goal', '達成する', 'たっせいする']
            ],
            [
                [276, [10863, 243], 'accomplish', '～をやりとげる', []],
                ['<accomplish> the difficult task', 'やりとげる', 'やりとげる']
            ],
            [
                [277, [10354, 244], 'obtain', '～を得る', []],
                ['<obtain> information about him', '得る', 'える']
            ],
            [
                [278, [10051, 245], 'gain', '～を得る', []],
                ['<gain> useful knowledge', '得る', 'える']
            ],
            [
                [279, [10073, 246], 'acquire', '～を習得する', []],
                ['<acquire> a language', '習得する', 'しゅうとくする']
            ],
            [
                [280, [10530, 247], 'complete', '完全な', []],
                ['a <complete> failure', '完全な', 'かんぜんな']
            ]
        ]
    ],
    ['時間', ['temp : 時', [
                [281, [10569, 248], 'temporary', '一時的な', []],
                ['<temporary> loss of memory', '一時的な', 'いちじてきな']
            ],
            [
                [282, [10795, 249], 'contemporary', '現代の', []],
                ['<contemporary> Japanese society', '現代の', 'げんだいの']
            ],
            [
                [283, [10571, 250], 'permanent', '永久', []],
                ['<permanent> teeth', '永久', 'えいきゅう']
            ],
            [
                [284, [11662, 251], 'eternal', '永遠の', []],
                ['the hope of <eternal> life', '永遠の', 'えいえんの']
            ]
        ],
        ['頻度', [
                [285, [10557, 252], 'rare', '珍しい', []],
                ['a <rare> stamp', '珍しい', 'めずらしい']
            ],
            [
                [286, [253], 'once in a while', 'たまに', []],
                ["Why don't you take a day off <once in a while> and enjoy life?", 'たまに', 'たまに']
            ],
            [
                [287, [10217, 254], 'occasion', '場合、機会', [
                    [10317, 'occasionally', '時々']
                ]],
                ['on special <occasions>', '場合', 'ばあい']
            ],
            [
                [288, [255], 'now and then', '時々', []],
                ['I think about her <now and then>, but I know she will never come back to me.', '時々', 'ときどき']
            ],
            [
                [289, [10586], 'frequently', 'しばしば', [
                    [256, 'frequency', '頻度, 頻繁； 周波数']
                ]],
                ['a <frequently> used word', 'しばしば', 'しばしば']
            ],
            [
                [290, [257], 'constant', '絶え間ない, 一定の', []],
                ["Things are <constantly> changing in the world, so it's really hard to keep up with them.", '絶え間ない', 'たえまない']
            ],
            [
                [291, [12019, 258], 'perpetual', '永続する', []],
                ['<perpetual> peace', '永続する', 'えいぞくする']
            ]
        ],
        ['今のところは', [
                [292, [259], 'at the moment', '今のところは', []],
                ["Sam is away from his desk <at the moment>, so I'll have him call you back later.", '今', 'いま']
            ],
            [
                [293, [260], 'at present', '今のところは', []],
                ['<At present> there still is no effective cure for this disease.', '今のところは', 'いまのところは']
            ],
            [
                [294, [261], 'for the time being', 'ここしばらくは', []],
                ['The doctor told me to stay in bed <for the time being>.', 'ここしばらくは', 'ここしばらくは']
            ]
        ],
        ['速度・迅速さ', [
                [295, [10550, 262], 'rapid', '急速な', []],
                ['<rapid> economic growth', '急速な', 'きゅうそくな']
            ],
            [
                [296, [10584], 'immediately', 'すぐに', [
                    [263, 'immediate', '即座の； 直接の']
                ]],
                ['leave <immediately> after lunch', 'すぐに', 'すぐに']
            ],
            [
                [297, [10688, 264], 'prompt', '～を促す', []],
                ['<prompt> him to speak', '促す', 'うながす']
            ],
            [
                [298, [12024, 265], 'abruptly', '不意に', []],
                ['stop <abruptly>', '不意に', 'ふいに']
            ],
            [
                [299, [10589], 'instantly', 'すぐに', []],
                ['<instantly> recognizable songs', 'すぐに', 'すぐに']
            ],
            [
                [300, [11948], 'swift', 'すばやい', []],
                ['a <swift> reaction', 'すばやい', 'すばやい']
            ]
        ],
        ['期間・時代', [
                [301, [10400, 266], 'period', '時代', []],
                ['the Cold War <period>', '時代', 'じだい']
            ],
            [
                [302, [10302], 'aged', '年老いた', [
                    [267, 'age', '年齢, 時代']
                ]],
                ['his <aged> parents', '年老いた', 'としおいた']
            ],
            [
                [303, [10951, 268], 'era', '時代', []],
                ['the beginning of a new <era>', '時代', 'じだい']
            ],
            [
                [304, [269], 'epoch', '新時代, 時代の幕開け', []],
                ['The Internet marked a new <epoch> in the information technology era.', '新時代', 'しんじだい']
            ],
            [
                [305, [11566, 270], 'phase', '段階', []],
                ['enter a new <phase>', '段階', 'だんかい']
            ],
            [
                [306, [10430, 271], 'decade', '10年', []],
                ['only a <decade> ago', '10年', 'じゅうねん']
            ],
            [
                [307, [10796, 272], 'annual', '年に１度の、１年間の', []],
                ['his <annual> income', '年', 'ねん']
            ],
            [
                [308, [11470, 273], 'anniversary', '記念日', []],
                ['celebrate their wedding <anniversary>', '記念日', 'きねんび']
            ],
            [
                [309, [11450, 274], 'interval', '間隔', []],
                ['at <intervals> of ten minutes', '間隔', 'かんかく']
            ],
            [
                [310, [10752], 'span', '期間', []],
                ['the average life <span>', '寿命', 'じゅみょう']
            ],
            [
                [311, [11318], 'session', '期間、討論', []],
                ['a training <session>', '期間', 'きかん']
            ]
        ],
        ['始まり', [
                [312, [10461, 275], 'origin', '起源', []],
                ['the <origin> of language', '起源', 'きげん']
            ],
            [
                [313, [11156, 276], 'initial', '最初の', []],
                ['the <initial> stages of development', '最初の', 'さいしょの']
            ]
        ],
        ['時間の前後関係', [
                [314, [10281, 277], 'former', '前の', []],
                ['the <former> President', '前', 'ぜん']
            ],
            [
                [315, [10284, 278], 'previous', '前の', []],
                ['from the <previous> year', '前の', 'まえの']
            ],
            [
                [316, [11271, 279], 'precede', '先行する', []],
                ['Speech <precedes> writing.', '先行する', 'せんこうする']
            ],
            [
                [317, [280], 'posterior', '(～より)後の(to～)', []],
                ['the mood <posterior> to it', '後の', 'あとの']
            ],
            [
                [318, [11180, 281], 'prior', '前の', [
                    [11001, 'priority', '優先']
                ]],
                ['the period <prior> to the war', '前の', 'まえの']
            ],
            [
                [319, [10187, 282], 'advance', '前進、進歩', []],
                ['<advances> in technology', '進歩', 'しんぽ']
            ],
            [
                [320, [11691], 'simultaneously', '同時に', [
                    [283, 'simultaneous', '同時の, 同時に起こる']
                ]],
                ['occur <simultaneously>', '同時に', 'どうじに']
            ],
            [
                [321, [11231, 284], 'coincide', '同時に起きる、重なる', []],
                ['His birthday will <coincides> with mine.', '重なる', 'かさなる']
            ]
        ],
        ['予定', [
                [322, [11411, 285], 'prolong', '延ばす', []],
                ['<prolong> life', '延ばす', 'のばす']
            ],
            [
                [323, [11423, 286], 'postpone', '延期する', []],
                ['<postpone> making a decision', '延期する', 'えんきする']
            ],
            [
                [324, [10133, 287], 'delay', '～を遅らせる', []],
                ['<delay> his arrival', '遅らせる', 'おくらせる']
            ],
            [
                [325, [11654, 288], 'punctual', '時間をきっちり守る', []],
                ['be <punctual> for an appointment', '時間をきっちり守る', 'じかんをきっちりまもる']
            ]
        ],
        ['新・旧', [
                [326, [10273, 289], 'current', '最新の', []],
                ['the <current> international situation', '今日の', 'きょうの']
            ],
            [
                [327, [290], 'out of date', '時代遅れの', []],
                ['As these rules are <out of date>, it is time we abolished them.', '時代遅れ', 'じだいおくれ']
            ],
            [
                [328, [11178], 'up-to-date', '最新の', [
                    [291, 'up to date', '最新の']
                ]],
                ['<up-to-date> fashions', '最新の', 'さいしんの']
            ],
            [
                [329, [10535, 292], 'ancient', '古代の', []],
                ['<ancient> Greece and Rome', '古代の', 'こだいの']
            ],
            [
                [330, [10503, 293], 'ancestor', '祖先', []],
                ['the common <ancestors> of all humans', '祖先', 'そせん']
            ],
            [
                [331, [10570, 294], 'primitive', '原始的な', []],
                ['a <primitive> society', '原始的な', 'げんしてきな']
            ],
            [
                [332, [10309], 'recent', '最近の', []],
                ['according to a <recent> study', '最近の', 'さいきんの']
            ],
            [
                [333, [10576], 'latest', '最新の', []],
                ['the <latest> news from China', '最新の', 'さいしんの']
            ],
            [
                [334, [10846], 'lately', '最近', []],
                ['Have you seen him <lately>?', '最近', 'さいきん']
            ],
            [
                [335, [11341], 'classical', 'クラシックの', []],
                ['<classical> music', 'クラシック', 'くらしっく']
            ]
        ]
    ],
    ['金・経済', ['経済', [
                [336, [10197, 295], 'economy', '経済', []],
                ['the market <economy>', '経済', 'けいざい']
            ],
            [
                [337, [10555], 'financial', '財政的な', [
                    [296, 'finance', '財政, 資金, 融資']
                ]],
                ['<financial> support from the US', '財政的', 'ざいせいてき']
            ]
        ],
        ['経済状況', [
                [338, [297], 'recede', '後退する', []],
                ['Glaciers have been <receding> around the world due to global warming.', '後退している', 'こうたいしている']
            ],
            [
                [339, [11312, 298], 'recession', '不景気、不況', [
                    [10630, 'depress', '～を憂鬱にさせる']
                ]],
                ['the worst economic <recession>', '不況', 'ふきょう']
            ],
            [
                [340, [299], 'currency', '通貨, 普及', []],
                ['Twelve countries have adopted the euro as their <currency>.', '通貨', 'つうか']
            ],
            [
                [341, [10706, 300], 'stock', '株（式）', []],
                ['the Tokyo <stock> market', '株', 'かぶ']
            ]
        ],
        ['富', [
                [342, [12075, 301], 'fortune', '財産、運', []],
                ['make a <fortune> in oil', '財産', 'ざいさん'],
                ['bring good <fortune>', '運', 'うん']
            ],
            [
                [343, [10470, 302], 'wealth', '富', []],
                ['<wealth> and power', '富', 'とみ']
            ],
            [
                [344, [303], 'well off', '裕福な, 暮らし向きがいい', []],
                ['Today, most young people say their goal is to be <well off> financially.', '裕福に', 'ゆうふくに']
            ],
            [
                [345, [10932, 304], 'poverty', '貧乏', []],
                ['live in <poverty>', '貧乏', 'びんぼう']
            ],
            [
                [346, [10234, 305], 'property', '財産', []],
                ['private <property>', '財産', 'ざいさん']
            ],
            [
                [347, [11305, 306], 'asset', '財産', []],
                ['a valuable <asset>', '財産', 'ざいさん']
            ],
            [
                [348, [11563, 307], 'estate', '不動産', []],
                ['a real <estate> agent', '不動産', 'ふどうさん']
            ],
            [
                [349, [11359], 'enrich', '豊かにする', []],
                ['Art <enriches> our lives.', '豊かにする', 'ゆたかにする']
            ],
            [
                [350, [11916], 'millionaire', '百万長者', []],
                ['how to marry a <millionaire>', '百万長者', 'ひゃくまんちょうじゃ']
            ]
        ],
        ['投資・利益', [
                [351, [10646, 308], 'invest', '（〈金〉を）投資する', []],
                ['<invest> money in a business', '投資する', 'とうしする']
            ],
            [
                [352, [11857, 309], 'entrepreneur', '起業家', []],
                ['a successful <entrepreneur>', '起業家', 'きぎょうか']
            ],
            [
                [353, [12164, 310], 'capital', '首都、資本', []],
                ['the <capital> of Australia', '首都', 'しゅと'],
                ['labor and <capital>', '資本', 'しほん']
            ],
            [
                [354, [12093, 311], 'interest', '利益、利', []],
                ["protect workers' <interests>", '利益', 'りえき'],
                ['lend money at high <interest> rates', '利', 'り']
            ],
            [
                [355, [10472, 312], 'profit', 'もうけ', []],
                ['make a $2 million <profit>', 'もうけ', 'もうけ']
            ],
            [
                [356, [10210, 313], 'benefit', '利益', []],
                ['costs and <benefits> of the business', '利益', 'りえき']
            ],
            [
                [357, [11810], 'stake', '危険にさらされて； 問題となって', [
                    [1647, 'at stake', '賭け金']
                ]],
                ['a high-<stakes> poker game', '賭け金', 'かけきん']
            ]
        ],
        ['予算・借金', [
                [358, [11006, 314], 'budget', '予算', []],
                ['cut the defense <budget>', '予算', 'よさん']
            ],
            [
                [359, [10887, 315], 'purchase', '～を購入する', []],
                ['<purchase> the land', '購入する', 'こうにゅうする']
            ],
            [
                [360, [10085, 316], 'afford', '～をする余裕がある', []],
                ["can't <afford> to buy a Ford", '余裕がない', 'よゆうがない']
            ],
            [
                [361, [10259, 317], 'available', '手に入る、利用できる', []],
                ['information <available> to everyone', '利用できる', 'りようできる']
            ],
            [
                [362, [11039, 318], 'debt', '借金', []],
                ['pay the <debt>', '借金', 'しゃっきん']
            ],
            [
                [363, [10168, 319], 'owe', 'AのことはBのおかげだ', []],
                ['I <owe> my success to you.', 'おかげだ', 'おかげだ']
            ],
            [
                [364, [11661, 320], 'bankrupt', '破産した', []],
                ['His company went <bankrupt>.', '破産した', 'はさんした']
            ]
        ],
        ['お金を貯めるには…', [
                [365, [12111, 321], 'save', '蓄える、省く、除く', []],
                ['<save> money for a new house', '蓄える', 'たくわえる'],
                ['<save> time and trouble', '省く', 'はぶく'],
                ['answer all the questions <save> one', '除き', 'のぞき']
            ],
            [
                [366, [12163, 322], 'spare', '余分な、割く、省く、惜しむ', []],
                ['have no <spare> money', '余分な', 'よぶんな'],
                ['<spare> him a few minutes', '割く', 'さく'],
                ['<spare> him the trouble', '省く', 'はぶく'],
                ['<spare> no effort to help her', '惜しま', 'おしま']
            ],
            [
                [367, [11279, 323], 'deposit', '預金、頭金、堆積物', []],
                ['a large <deposit> in the bank', '預金', 'よきん']
            ],
            [
                [368, [10689, 324], 'withdraw', '～を引っ込める、引きこもる、退く、〈預金など〉を引き出す', []],
                ['<withdraw> my hand', '引っ込める', 'ひっこめる']
            ],
            [
                [369, [325], 'extravagant', '金遣いの荒い, 過度の, 法外な', []],
                ["I can't accept such an <extravagant> gift.", '過度の', 'かどの']
            ]
        ],
        ['収入', [
                [370, [10458, 326], 'income', '所得', []],
                ['low-<income> families', '所得', 'しょとく']
            ],
            [
                [371, [11082, 327], 'outcome', '結果', []],
                ['the <outcome> of the race', '結果', 'けっか']
            ],
            [
                [372, [11603, 328], 'revenue', '収入', []],
                ['have <revenue> of $100,000', '収入', 'しゅうにゅう']
            ],
            [
                [373, [10936], 'wage', '賃金', []],
                ['work for low <wages>', '賃金', 'ちんぎん']
            ]
        ],
        ['料金', [
                [374, [10020, 329], 'cost', '～を要する', []],
                ['The car <cost> me $50,000.', 'かかった', 'かかった']
            ],
            [
                [375, [10532], 'expensive', '高価な', [
                    [330, 'expense', '出費']
                ]],
                ['an <expensive> restaurant', '高価な', 'こうかな']
            ],
            [
                [376, [10183, 331], 'fee', '謝礼、料金', []],
                ['charge a <fee> for service', '料', 'りょう']
            ],
            [
                [377, [11038, 332], 'fare', '運賃', []],
                ['pay the bus <fare>', '運賃', 'うんちん']
            ],
            [
                [378, [11532], 'tuition', '授業料', []],
                ['pay college <tuition>', '授業料', 'じゅぎょうりょう']
            ]
        ]
    ],
    ['場所・領域・範囲', ['地域・地区', [
                [379, [333], 'area', '地域, 領域', []],
                ['the urban <area>', '地域', 'ちいき']
            ],
            [
                [380, [10213, 334], 'region', '地域', []],
                ['a mountain <region>', '地方', 'ちほう']
            ],
            [
                [381, [10978, 335], 'district', '地区', []],
                ["the city's business <district>", '地区', 'ちく']
            ],
            [
                [382, [10230, 336], 'quarter', '4分の1', []],
                ['the first <quarter> of this century', '4分の1', 'よんぶんのいち']
            ]
        ],
        ['地方・都会', [
                [383, [337], 'local', '地域の, 地元の； 地元の人', []],
                ['Sometimes conflicts arise between tourists and <local> residents.', '地元の', 'じもとの']
            ],
            [
                [384, [338], 'global', '地球全体の', []],
                ['<global> warming', '地球', 'ちきゅう']
            ],
            [
                [385, [10568, 339], 'urban', '都会の', []],
                ['<urban> life', '都会の', 'とかいの']
            ],
            [
                [386, [11122, 340], 'rural', '田舎の', []],
                ['move to a small <rural> town', '田舎の', 'いなかの']
            ],
            [
                [387, [11021, 341], 'suburb', '郊外', []],
                ['live in the <suburbs> of London', '郊外', 'こうがい']
            ]
        ],
        ['国境・領土', [
                [388, [10735, 342], 'border', '国境地帯', []],
                ['cross the Russian <border>', '国境', 'こっきょう']
            ],
            [
                [389, [10990, 343], 'boundary', '境界', []],
                ['the <boundary> between two countries', '境界', 'きょうかい']
            ],
            [
                [390, [10733, 344], 'territory', '領土、なわ張り', []],
                ['defend a <territory>', 'なわ張り', 'なわばり']
            ],
            [
                [391, [10902, 345], 'invade', '～に侵入する', []],
                ['<invade> Poland', '侵入する', 'しんにゅうする']
            ],
            [
                [392, [11768, 346], 'intrude', '立ち入る', []],
                ['<intrude> on his privacy', '立ち入る', 'たちいる']
            ],
            [
                [393, [10150, 347], 'occupy', '～を占める', [
                    [10724, 'occupation', '職業、占領'],
                    [11976, 'preoccupied', '頭がいっぱいだ']
                ]],
                ['<occupy> a high position', '占める', 'しめる']
            ]
        ],
        ['移住・開拓', [
                [394, [11367, 348], 'migrate', '移住する', []],
                ['<migrate> to California', '移住する', 'いじゅうする']
            ],
            [
                [395, [10713], 'immigrant', '移民', [
                    [349, 'immigrate', '移住する']
                ]],
                ['<immigrants> from Mexico', '移民', 'いみん']
            ],
            [
                [396, [350], 'emigrate', '(国外へ)移住する', []],
                ['My grandparents <emigrated> from Italy.', '移住した', 'いじゅうした']
            ],
            [
                [397, [12168, 351], 'settle', '解決する、定住する、落ち着く', []],
                ['<settle> the dispute', '解決する', 'かいけつする'],
                ['<settle> in America', '定住する', 'ていじゅうする'],
                ['get married and <settle> down', '落ち着く', 'おちつく']
            ],
            [
                [398, [10783, 352], 'frontier', '国境', []],
                ["America's last <frontier>", '辺境', 'へんきょう']
            ],
            [
                [399, [11068, 353], 'pioneer', '先駆者', []],
                ["a rock'n'roll <pioneer>", '先駆者', 'せんくしゃ']
            ],
            [
                [400, [10382, 354], 'explore', '～を探検する', []],
                ['<explore> the Amazon River', '探検する', 'たんけんする']
            ]
        ],
        ['含む・除外する', [
                [401, [10009, 355], 'include', '～を含む、含める', []],
                ['The list <includes> his name.', '含んでいる', 'ふくんでいる']
            ],
            [
                [402, [10344, 356], 'contain', '～を含んでいる', [
                    [12070, 'content', '内容、満足している']
                ]],
                ['Vegetables <contain> a lot of water.', '含んでいる', 'ふくんでいる']
            ],
            [
                [403, [357], 'exclude', '～を(…から)除外する(from…)', []],
                ["We had to <exclude> some relatives from our wedding party because they didn't approve our wedding.", '除外し', 'じょがいし']
            ],
            [
                [404, [11115], 'isolated', '孤立している', [
                    [358, 'isolate', '～を隔離する']
                ]],
                ['be <isolated> from the world', '孤立している', 'こりつしている']
            ]
        ],
        ['囲む', [
                [405, [11254, 359], 'enclose', '囲む', []],
                ['live in an <enclosed> space', '閉ざされた', 'とざされた']
            ],
            [
                [406, [11407, 360], 'disclose', '暴露する', []],
                ['<disclose> his secret', '暴露する', 'ばくろする']
            ],
            [
                [407, [10079, 361], 'surround', '～を取り囲む', []],
                ['Japan is <surrounded> by the sea.', '囲まれている', 'かこまれている']
            ]
        ],
        ['設置・導入', [
                [408, [11426, 362], 'install', '備えつける', []],
                ['<install> solar panels in the roof', '備えつける', 'そなえつける']
            ],
            [
                [409, [363], 'introduce', '～を紹介する, ～を(初めて)導入する', []],
                ['The solar calendar was <introduced> into Japan in the 19th century.', '導入された', 'どうにゅうされた']
            ],
            [
                [410, [11273], 'mount', 'すえつける、乗る', []],
                ['<mount> the engine in the car', 'すえつける', 'すえつける']
            ]
        ],
        ['場所の特定・探索', [
                [411, [10148, 364], 'locate', '位置する', []],
                ['The office is <located> in the area.', 'ある', 'ある']
            ],
            [
                [412, [365], 'spot', '場所； ～(の位置)を突き止める, 見つける', []],
                ['Peter quickly <spotted> his father in the crowed at the train station.', '見つけた', 'みつけた']
            ],
            [
                [413, [10055, 366], 'search', '～を捜す', []],
                ['<search> for the stolen car', '捜す', 'さがす']
            ]
        ],
        ['接近・遠隔・置換', [
                [414, [10062, 367], 'approach', '～に接近する；～に取り組む；方法', []],
                ['The plane is <approaching> Chicago.', '接近している', 'せっきんしている']
            ],
            [
                [415, [11127, 368], 'remote', 'へんぴな', []],
                ['live in a <remote> village', 'へんぴな', 'へんぴな']
            ],
            [
                [416, [369], 'apart', '(～から)離れて(from～)', []],
                ['The boy lives <apart> from his parents.', '離れて', 'はなれて']
            ],
            [
                [417, [370], 'aside', '脇に', []],
                ['<aside> from A', 'さておき', 'さておき']
            ],
            [
                [418, [10077, 371], 'replace', '～に取って代わる、～を取り替える', [
                    [11233, 'displace', 'とってかわる、故郷から追い出す']
                ]],
                ['<replace> the old system', '取って代わる', 'とってかわる']
            ]
        ],
        ['場所・領域', [
                [419, [10455, 372], 'site', '用地', []],
                ['a <site> for a new hotel', '用地', 'ようち']
            ],
            [
                [420, [11918, 373], 'realm', '領域', []],
                ['outside the <realm> of science', '領域', 'りょういき']
            ],
            [
                [421, [11510, 374], 'domain', '領域', []],
                ['in the <domain> of psychology', '領域', 'りょういき']
            ],
            [
                [422, [10203, 375], 'range', '範囲', []],
                ['a wide <range> of information', '範囲', 'はんい']
            ],
            [
                [423, [11285, 376], 'scope', '範囲', []],
                ['beyond the <scope> of science', '範囲', 'はんい']
            ],
            [
                [424, [10941, 377], 'category', '範ちゅう', []],
                ['fall into the same <category>', '範ちゅう', 'はんちゅう']
            ],
            [
                [425, [378], 'genre', '（芸術・文学の）ジャンル、酒類', []],
                ['a new <genre> of literature', 'ジャンル', 'じゃんる']
            ],
            [
                [426, [11577, 379], 'margin', '差', []],
                ['win by a wide <margin>', '差', 'さ']
            ],
            [
                [427, [10726], 'kingdom', '王国', []],
                ['the <kingdom> of Denmark', '王国', 'おうこく']
            ],
            [
                [428, [11044], 'castle', '城', []],
                ['a sand <castle>', '城', 'しろ']
            ],
            [
                [429, [11595], 'palace', '宮殿', []],
                ['Buckingham Palace', '宮殿', 'きゅうでん']
            ]
        ]
    ],
    ['発生・繁栄・衰退・消滅', ['発生', [
                [430, [10682, 380], 'emerge', '〈隠れていたものが〉現れる', [
                    [10711, 'emergency', '緊急事態']
                ]],
                ['A new problem has <emerged>.', '出現した', 'しゅつげんした']
            ],
            [
                [431, [10855, 381], 'arise', '生じる', []],
                ['Problems <arise> from carelessness.', '生じる', 'しょうじる']
            ],
            [
                [432, [10699, 382], 'stem', 'Aから生じる、Aに由来する', []],
                ['<stem> from an ancient tradition', '由来する', 'ゆらいする']
            ],
            [
                [433, [10253, 383], 'branch', '枝、支店、支局、部門、分野', []],
                ['a <branch> of science', '分野', 'ぶんや']
            ],
            [
                [434, [10908, 384], 'derive', '由来する', []],
                ['The world <derives> from Latin.', '由来する', 'ゆらいする']
            ],
            [
                [435, [10394, 385], 'generate', '～を生み出す', [
                    [10426, 'generation', '世代']
                ]],
                ['<generate> electricity', '生み出す', 'うみだす']
            ]
        ],
        ['繁栄', [
                [436, [11433], 'flourishing', '栄えている', [
                    [386, 'flourish', '繁栄する']
                ]],
                ['The European economy is <flourishing>', '栄えている', 'さかえている']
            ],
            [
                [437, [11354, 387], 'bloom', '咲く', [
                    [10950, 'blossom', '花']
                ]],
                ['when roses <bloom>', '咲く', 'さく']
            ],
            [
                [438, [10970], 'prosperity', '繁栄', [
                    [388, 'prosper', '繁栄する']
                ]],
                ['economic <prosperity>', '繁栄', 'はんえい']
            ],
            [
                [439, [11209, 389], 'thrive', '繁栄する', []],
                ['a <thriving> economy', '繁栄する', 'はんえいする']
            ],
            [
                [440, [11255, 390], 'prevail', '普及している、広まる', []],
                ['the <prevailing> view', '広まっている', 'ひろまっている']
            ]
        ],
        ['栄光、そして…', [
                [441, [11521, 391], 'glory', '栄光', []],
                ['the <glory> of the British Empire', '栄光', 'えいこう']
            ],
            [
                [442, [392], 'victory', '勝利', []],
                ['The Giants won a 2-1 <victory> over the Tigers.', '勝利', 'しょうり']
            ],
            [
                [443, [11483, 393], 'triumph', '勝利', []],
                ['the <triumph> of science', '勝利', 'しょうり']
            ],
            [
                [444, [11444, 394], 'fame', '名声', []],
                ['win <fame> and fortune', '名声', 'めいせい']
            ],
            [
                [445, [11503, 395], 'prestige', '名声', []],
                ['gain wealth and <prestige>', '名声', 'めいせい']
            ],
            [
                [446, [10888, 396], 'fade', '薄れる', []],
                ['Memories of the war <fade> away.', '薄れる', 'うすれる']
            ],
            [
                [447, [10084, 397], 'decline', '衰退する、低下する、～を辞退する', []],
                ['My memory began to <decline>.', '低下し', 'ていかし']
            ],
            [
                [448, [11943], 'renowned', '有名な', []],
                ['a world-<renowned> singer', '有名な', 'ゆうめいな']
            ]
        ],
        ['腐敗', [
                [449, [11601], 'corruption', '腐敗', [
                    [398, 'corrupt', '頽廃した, 腐敗した； ～を堕落させる']
                ]],
                ['political <corruption>', '腐敗', 'ふはい']
            ],
            [
                [450, [11546, 399], 'decay', '腐敗', []],
                ['prevent the <decay> of food', '腐敗', 'ふはい']
            ],
            [
                [451, [11650], 'rotten', '腐った', [
                    [400, 'rot', '腐る, 腐敗する']
                ]],
                ['smell like <rotten> eggs', '腐った', 'くさった']
            ],
            [
                [452, [11911, 401], 'bribe', 'わいろ', []],
                ['take a <bribe>', 'わいろ', 'わいろ']
            ],
            [
                [453, [402], 'fraud', '詐欺、不正行為', []],
                ['credit card <fraud>', '詐欺', 'さぎ']
            ]
        ],
        ['消滅', [
                [454, [403], 'perish', '消滅する, 死ぬ', []],
                ['The people <perished> in the accident.', '亡くなった', 'なくなった']
            ],
            [
                [455, [10924, 404], 'vanish', '消える', []],
                ['<vanish> from sight', '消える', 'きえる']
            ],
            [
                [456, [10614, 405], 'ruin', '～を台無しにする、破壊する', []],
                ['<ruin> his life', '破滅させる', 'はめつさせる']
            ],
            [
                [457, [10648, 406], 'collapse', '崩壊する', []],
                ['The building <collapsed>.', '崩壊した', 'ほうかいした']
            ],
            [
                [458, [11771, 407], 'extinguish', '消す', [
                    [11046, 'extinction', '絶滅']
                ]],
                ['<extinguish> the fire', '消す', 'けす']
            ],
            [
                [459, [11825, 408], 'catastrophe', '大災害', []],
                ['prevent a <catastrophe>', '大災害', 'だいさいがい']
            ],
            [
                [460, [10067, 409], 'survive', '生き残る', []],
                ['<survive> in the jungle', '生き残る', 'いきのこる']
            ],
            [
                [461, [10674], 'drown', 'おぼれ死ぬ', []],
                ['save a <drowning> child', 'おぼれて', 'おぼれて']
            ],
            [
                [462, [11091], 'suicide', '自殺', []],
                ['commit <suicide>', '自殺', 'じさつ']
            ],
            [
                [463, [11292], 'breakdown', '崩壊', []],
                ['the <breakdown> of the family', '崩壊', 'ほうかい']
            ],
            [
                [464, [11462], 'misery', '悲惨さ', [
                    [10838, 'miserable', '惨めな']
                ]],
                ['the <misery> of war', '悲惨さ', 'ひさんさ']
            ],
            [
                [465, [11759], 'expire', '期限が切れる', [
                    [11514, 'deadline', '締め切り']
                ]],
                ['My license <expires> next month.', '期限が切れる', 'きげんがきれる']
            ]
        ]
    ],
    ['多義語・1', ['多義語・1', [
            [466, [10027, 410], 'regard', 'AをBだと思う、みなす', [
                [11434, 'disregard', '無視する'],
                [11199, 'regardless', '関係なく']
            ]],
            ['<regard> him as a friend', 'みなす', 'みなす']
        ],
        [
            [467, [12113, 411], 'account', '占める、原因、説明する', []],
            ['Black people <account> for 10% of the population.', '占める', 'しめる'],
            ['This <accounts> for the failure.', '原因だ', 'げんいんだ'],
            ['<account> for the difference', '説明する', 'せつめいする']
        ],
        [
            [468, [12057, 412], 'concern', '不安、思いやり、関係する、重要', []],
            ['<concern> about the future', '不安', 'ふあん'],
            ['<concern> for others', '思いやり', 'おもいやり'],
            ['This problem  <concerns> everyone.', '関係する', 'かんけいする'],
            ['a matter of great <concern>', '重要', 'じゅうよう']
        ],
        [
            [469, [10303, 413], 'anxious', '心配して、切望して', []],
            ['I am <anxious> about your health.', '心配だ', 'しんぱいだ']
        ],
        [
            [470, [12038, 414], 'attend', '出席する、世話する、注意する', []],
            ['<attend> the meeting', '出席する', 'しゅっせきする'],
            ['<attend> to patients', '世話する', 'せわする'],
            ['<attend> to what he says', '注意する', 'ちゅういする']
        ],
        [
            [471, [10053, 415], 'apply', '当てはまる、申し込む', []],
            ['<apply> the rule to every case', '当てはめる', 'あてはめる']
        ],
        [
            [472, [10064, 416], 'reflect', '～を反映する、～を反射する', []],
            ['<reflect> the mood of the times', '反映する', 'はんえいする']
        ],
        [
            [473, [11356], 'awaiting', '待つ', [
                [417, 'wait', '(～を)待つ(for～), (～に)仕える, 給仕する(on[upon]～)']
            ]],
            ['patients <awaiting> a heart transplant', '待つ', 'まつ']
        ],
        [
            [474, [12122, 418], 'due', 'せいで、十分な、予定だ、期限だ', []],
            ['He is tired <due> to  lack of sleep.', 'せいで', 'せいで'],
            ['pay <due> respect', '十分な', 'じゅうぶんな'],
            ['The train  is <due> to  arrive at ten.', '予定だ', 'よていだ'],
            ['The report is <due> next Wednesday.', '期限だ', 'きげんだ']
        ],
        [
            [475, [11133, 419], 'odd', 'おかしな', []],
            ['the <odd> couple', 'おかしな', 'おかしな']
        ],
        [
            [476, [11487, 420], 'odds', '可能性', []],
            ['the <odds> of successful treatment', '可能性', 'かのうせい']
        ],
        [
            [477, [12045, 421], 'issue', '問題、出す、号', []],
            ['a political <issue>', '問題', 'もんだい'],
            ['<issue> an order', '出す', 'だす'],
            ['the latest <issue> of Time', '号', 'ごう']
        ],
        [
            [478, [12041, 422], 'term', '用語、期、仲', []],
            ['use scientific <terms>', '用語', 'ようご'],
            ['long-<term> planning', '期', 'き'],
            ['I am on good <terms> with him.', '仲', 'なか']
        ],
        [
            [479, [12051, 423], 'figure', '数字、人物、スタイル、思う', []],
            ['Tell me the exact <figures>.', '数字', 'すうじ'],
            ['historical <figures>', '人物', 'じんぶつ'],
            ['She has a beautiful <figure>.', 'スタイル', 'すたいる'],
            ['I <figure> you are busy.', '思う', 'おもう']
        ],
        [
            [480, [12065, 424], 'state', '状態、述べる、国家', [
                [10434, 'statement', '記述'],
                [11889, 'statesman', '政治家']
            ]],
            ['an excited <state> of mind', '状態', 'じょうたい'],
            ['<state> an opinion', '述べる', 'のべる'],
            ['a <state> secret', '国家', 'こっか']
        ],
        [
            [481, [12134, 425], 'bear', '耐える、産む、持つ', []],
            ['<bear> the pain', '耐える', 'たえる'],
            ['<bear> a child', '産む', 'うむ'],
            ['<bear> relation to the matter', '持つ', 'もつ']
        ],
        [
            [482, [12034, 426], 'case', '事実、事件、主張、患者', []],
            ['It is also the <case> with him.', '事実', 'じじつ'],
            ['a murder <case>', '事件', 'じけん'],
            ['make a <case> for war', '主張', 'しゅちょう'],
            ['new <cases> of malaria', '患者', 'かんじゃ']
        ],
        [
            [483, [12060, 427], 'mean', 'つもりだった、本気で言ってる、意地悪だ', []],
            ['I <meant> to call you sooner.', 'つもりだった', 'つもりだった'],
            ['I love you. I <mean> it.', '本気で言ってる', 'ほんきでいってる'],
            ['He is <mean> to me.', '意地悪だ', 'いじわるだ']
        ],
        [
            [484, [12069, 428], 'means', '手段、資産', []],
            ['a <means> of communication', '手段', 'しゅだん'],
            ['a man of <means>', '資産', 'しさん']
        ],
        [
            [485, [10068, 429], 'represent', '～を表す', []],
            ['Words <represent> ideas.', '表す', 'あらわす']
        ],
        [
            [486, [12119, 430], 'assume', '思い込む、引き受ける', []],
            ['<assume> that money can buy happiness', '思い込む', 'おもいこむ'],
            ['<assume> responsibility', '引き受ける', 'ひきうける']
        ],
        [
            [487, [10377, 431], 'possess', '～を持っている', []],
            ['<possess> great power', '持っている', 'もっている']
        ],
        [
            [488, [12139, 432], 'observe', '観測する、述べる、守る', []],
            ['<observe> the comet', '観測する', 'かんそくする'],
            ['<observe> that prices would fall', '述べる', 'のべる'],
            ['<observe> the rule', '守る', 'まもる']
        ],
        [
            [489, [433], 'swallow', '飲み込む、鵜呑みにする、信じる； ツバメ', []],
            ['<swallow> the medicine with water', '飲み込む', 'のみこむ']
        ],
        [
            [490, [12037, 434], 'company', '仲間、一緒にいること、来客', [
                [10609, 'accompany', '〈人〉に同伴する']
            ]],
            ['keep bad <company>', '仲間', 'なかま'],
            ['I enjoy your <company>.', '一緒にいること', 'いっしょにいること'],
            ['We have <company> today.', '来客', 'らいきゃく']
        ],
        [
            [491, [12128, 435], 'firm', '会社、堅い', [
                [10869, 'confirm', '～を裏付ける']
            ]],
            ['work for a big <firm>', '会社', 'かいしゃ'],
            ['a <firm> belief', '堅い', 'かたい']
        ]
    ]],
    ['基本単語の確認', ['派生語を覚える', [
                [492, [436], 'enter', '～に入る', []],
                ['I <entered> the building.', '入った', 'はいった']
            ],
            [
                [493, [11308], 'reception', 'もてなし', [
                    [437, 'receive', '～を受け取る']
                ]],
                ['receive a warm <reception>', 'もてなし', 'もてなし']
            ],
            [
                [494, [10333, 438], 'accept', '～を受け入れる', []],
                ['<accept> the truth as it is', '受け入れる', 'うけいれる']
            ],
            [
                [495, [10058, 439], 'refuse', '～を断る', []],
                ['<refuse> to give up hope', '拒む', 'こばむ']
            ],
            [
                [496, [10098, 440], 'reject', '～を断る', []],
                ['<reject> the proposal', '拒否する', 'きょひする']
            ],
            [
                [497, [12145, 441], 'deny', '否定する、与えない', []],
                ['<deny> the existence of God', '否定する', 'ひていする'],
                ['<deny> them their civil rights', '与えない', 'あたえない']
            ],
            [
                [498, [10208], 'appearance', '外見、様子、出現', [
                    [442, 'appear', '現れる, のように見える']
                ]],
                ['differ in <appearance>', '外見', 'がいけん']
            ],
            [
                [499, [10335, 443], 'exist', '存在する', []],
                ['Does God really <exist>?', '存在する', 'そんざいする']
            ],
            [
                [500, [10004, 444], 'expect', '～を予期する', []],
                ['<expect> you to arrive soon', '予期する', 'よきする']
            ],
            [
                [501, [10328, 445], 'except', '～を除いて', [
                    [10935, 'exception', '例外']
                ]],
                ['work every day <except> Sunday', '以外', 'いがい']
            ],
            [
                [502, [10029, 446], 'improve', '～を向上させる', []],
                ['<improve> living conditions', '向上させる', 'こうじょうさせる']
            ],
            [
                [503, [10343, 447], 'solve', '～を解決する', []],
                ['<solve> the problem', '解決する', 'かいけつする']
            ]
        ],
        ['用法に注意する動詞', [
                [504, [10032, 448], 'suppose', '～だと思う', []],
                ['You are <supposed> to wear a seat belt.', 'ことになっている', 'ことになっている']
            ],
            [
                [505, [10016, 449], 'suggest', '～と提案する、～をほのめかす', []],
                ['<suggest> a new way', '提案する', 'ていあんする']
            ],
            [
                [506, [10373, 450], 'propose', '～を提案する', []],
                ['<propose> a new way', '提案する', 'ていあんする']
            ],
            [
                [507, [10383, 451], 'pretend', 'ふりをする', []],
                ['<pretend> to be asleep', 'ふりをする', 'ふりをする']
            ],
            [
                [508, [452], 'doubt', '疑い、～を疑う', []],
                ['I <doubt> that she wrote this.', '疑う', 'うたがう']
            ],
            [
                [509, [10072, 453], 'belong', '所属している', []],
                ['The book <belongs> to Howard.', 'ものだ', 'ものだ']
            ],
            [
                [510, [12094, 454], 'fail', 'できない', []],
                ['<fail> to understand him', 'できない', 'できない']
            ],
            [
                [511, [10352, 455], 'enable', '～を可能にする', []],
                ['<enable> people to live longer', '可能にする', 'かのうにする']
            ],
            [
                [512, [10034, 456], 'prefer', '～をより好む', []],
                ['<prefer> tea to coffee', '好む', 'このむ']
            ],
            [
                [513, [10339, 457], 'marry', '～と結婚する', []],
                ['<marry> Mary', '結婚する', 'けっこんする']
            ],
            [
                [514, [10105, 458], 'regret', '～を後悔する', []],
                ['<regret> leaving home', '後悔する', 'こうかいする']
            ]
        ],
        ['受動・能動の意味に注意', [
                [515, [10349, 459], 'satisfy', '～を満たす', []],
                ['<satisfy> the needs of students', '満たす', 'みたす']
            ],
            [
                [516, [10115, 460], 'disappoint', '～を失望させる', []],
                ['be <disappointed> with the test results', '失望する', 'しつぼうする']
            ],
            [
                [517, [10066, 461], 'bore', '～をうんざりさせる', []],
                ['a very <boring> movie', '退屈な', 'たいくつな']
            ],
            [
                [518, [10140, 462], 'amaze', '～を驚嘆させる', []],
                ['at an <amazing> speed', '驚異的な', 'きょういてきな']
            ],
            [
                [519, [10653, 463], 'astonish', '～を驚嘆させる', []],
                ['an <astonishing> memory', '驚異的な', 'きょういてきな']
            ],
            [
                [520, [10141, 464], 'frighten', '～をおびえさせる', []],
                ['<frightening> experiences', 'ぞっとするような', 'ぞっとするような']
            ],
            [
                [521, [10663, 465], 'scare', '～をおびえさせる', []],
                ['The noise <scares> him.', 'おびえさせる', 'おびえさせる']
            ]
        ],
        ['原因・結果', [
                [522, [12073, 466], 'cause', '原因、引き起こす、運動', []],
                ['the <cause> of the failure', '原因', 'げんいん'],
                ['<cause> a lot of trouble', '引き起こす', 'ひきおこす'],
                ['advance the <cause> of peace', '運動', 'うんどう']
            ],
            [
                [523, [11063, 467], 'factor', '要因', []],
                ['an important <factor> in success', '要因', 'よういん']
            ],
            [
                [524, [10175, 468], 'result', '結果', []],
                ['the <result> of the test', '結果', 'けっか']
            ],
            [
                [525, [12082, 469], 'lead', '引き起こす、送る、一流の', [
                    [11339, 'misleading', '誤解を招く']
                ]],
                ['One thing <leads> to another.', '引き起こす', 'ひきおこす'],
                ['<lead> a happy life', '送る', 'おくる'],
                ['<leading> artists', '一流の', 'いちりゅうの']
            ]
        ],
        ['熟語を覚える名詞', [
                [526, [10207, 470], 'favor', '好意', [
                    [10542, 'favorite', 'いちばん好きな']
                ]],
                ['Would you do me a <favor>', '頼み', 'たのみ']
            ],
            [
                [527, [10246, 471], 'harm', '害', []],
                ['do no <harm> to children', '害', 'がい']
            ],
            [
                [528, [10209, 472], 'risk', '危険', []],
                ['run the <risk> of losing money', '危険', 'きけん']
            ],
            [
                [529, [12177, 473], 'board', '乗り込む、委員会', []],
                ['<board> a plane', '乗り込む', 'のりこむ'],
                ['the school <board>', '委員会', 'いいんかい']
            ]
        ],
        ['混同しやすい語', [
                [530, [474], 'rise', '上がる, 増える； 上昇', []],
                ['Internet crime is on the <rise> in Japan.', '増えている', 'ふえている']
            ],
            [
                [531, [10033, 475], 'raise', '～を上げる、～を育てる', []],
                ['<raise> both hands', '上げる', 'あげる']
            ],
            [
                [532, [476], 'lie', '横たわる； 存在する', []],
                ['Happiness <lies> in the joy of achievement.', '存在する', 'そんざいする']
            ],
            [
                [533, [477], 'lay', '～を横たえる； 置く', []],
                ['<lay> an ambush', '置く', 'おく']
            ]
        ],
        ['正しく書けますか？', [
                [534, [10167, 478], 'exhibit', '～を展示する', [
                    [10124, 'display', '～を展示する、～を表す']
                ]],
                ["<exhibit> Picasso's works", '展示する', 'てんじする']
            ],
            [
                [535, [10553, 479], 'convenient', '都合がいい', []],
                ["when it's <convenient> for you", '都合がいい', 'つごうがいい']
            ],
            [
                [536, [10543], 'comfortable', '快適な', [
                    [480, 'comfort', '快適さ； ～を慰める, 元気づける']
                ]],
                ['enjoy a <comfortable> life', '快適な', 'かいてきな']
            ],
            [
                [537, [10262, 481], 'correct', '正しい', []],
                ['the <correct> answer', '正しい', 'ただしい']
            ],
            [
                [538, [482], 'salary', '給料', []],
                ['He has a small [large] <salary>.', '給料', 'きゅうりょう']
            ]
        ],
        ['名詞', [
                [539, [10943, 483], 'reputation', '評判', []],
                ["the restaurant's <reputation>", '評判', 'ひょうばん']
            ],
            [
                [540, [11587, 484], 'rumor', 'うわさ', []],
                ['spread a <rumor> about a ghost', 'うわさ', 'うわさ']
            ],
            [
                [541, [10220, 485], 'duty', '義務、関税', []],
                ['It is my <duty> to help you.', '義務', 'ぎむ']
            ],
            [
                [542, [10412, 486], 'opportunity', '機会', []],
                ['an <opportunity> to talk to her', '機会', 'きかい']
            ]
        ],
        ['形容詞', [
                [543, [11331, 487], 'idle', '（仕事がなくて）何もしていない', []],
                ['sit <idle> all day', '何もせず', 'なにもせず']
            ],
            [
                [544, [10285, 488], 'calm', '冷静な', []],
                ['keep <calm>', '冷静で', 'れいせいで']
            ],
            [
                [545, [10307, 489], 'curious', '好奇心の強い', []],
                ['be <curious> about everything', '好奇心を持つ', 'こうきしんをもつ']
            ],
            [
                [546, [11154, 490], 'cruel', '残酷な', []],
                ['<cruel> treatment of animals', '残酷な', 'ざんこくな']
            ],
            [
                [547, [10200, 491], 'official', '役人', []],
                ['a government <official>', '役人', 'やくにん']
            ]
        ]
    ],
    ['関係・対立・一致', ['関係・相対・絶対', [
                [548, [10046, 492], 'relate', '関係がある', [
                    [10212, 'relative', '親族、親戚'],
                    [10592, 'relatively', '比較的']
                ]],
                ['stress-<related> illness', '関係のある', 'かんけいのある']
            ],
            [
                [549, [11193], 'absolutely', '絶対に', [
                    [493, 'absolute', '絶対的な, 完全な']
                ]],
                ["It's <absolutely> necessary.", '絶対に', 'ぜったいに']
            ]
        ],
        ['関連性', [
                [550, [10827, 494], 'relevant', '関連のある', []],
                ['be <relevant> to the question', '関係がある', 'かんけいがある']
            ],
            [
                [551, [11135, 495], 'mutual', '相互の', []],
                ['<mutual> understanding', '相互の', 'そうごの']
            ],
            [
                [552, [10100, 496], 'associate', 'AをBに関連づける、AからBを連想する', []],
                ['Health is <associated> with happiness.', '関連している', 'かんれんしている']
            ]
        ],
        ['対立', [
                [553, [10968, 497], 'conflict', '対立', []],
                ['the <conflict> between the two sides', '対立', 'たいりつ']
            ],
            [
                [554, [11554, 498], 'collision', '衝突、対立', []],
                ['<collision> with the earth', '衝突', 'しょうとつ']
            ],
            [
                [555, [11904, 499], 'friction', '摩擦', []],
                ['<friction> between the two countries', '摩擦', 'まさつ']
            ],
            [
                [556, [10624, 500], 'confront', '～の前に立ちふさがる、～に立ち向かう', []],
                ['<confront> a difficult problem', '立ち向かう', 'たちむかう']
            ],
            [
                [557, [11441], 'combat', '戦う', []],
                ['<combat> global warming', '戦う', 'たたかう']
            ],
            [
                [558, [11598], 'outbreak', 'ぼっ発', []],
                ['at the <outbreak> of the war', 'ぼっ発', 'ぼっぱつ']
            ]
        ],
        ['反対', [
                [559, [10368, 501], 'oppose', '～に反対する', [
                    [11080, 'opponent', '敵']
                ]],
                ['<oppose> their marriage', '反対する', 'はんたいする']
            ],
            [
                [560, [12116, 502], 'object', '物体、対象、反対する', [
                    [10728, 'objective', '目的、目標、客観的な']
                ]],
                ['a strange flying <object>', '物体', 'ぶったい'],
                ['an <object> of study', '対象', 'たいしょう'],
                ['<object> to his drinking', '反対する', 'はんたいする']
            ]
        ],
        ['contra- : 反対の', [
                [561, [10316, 503], 'contrary', '反対に', []],
                ['<contrary> to expectations', '反して', 'はんして']
            ],
            [
                [562, [10442, 504], 'contrast', '対比', []],
                ['the <contrast> between light and shadow', '対比', 'たいひ']
            ],
            [
                [563, [11242, 505], 'contradict', '矛盾する', []],
                ['<contradict> what he said', '矛盾する', 'むじゅんする']
            ],
            [
                [564, [12025], 'conversely', '逆に', []],
                ["He's a dog lover. <Conversely>, I'm a cat lover.", '逆に', 'ぎゃくに']
            ]
        ],
        ['賛成・是認', [
                [565, [10163, 506], 'approve', '賛成する；～を承認する', []],
                ['<approve> of their marriage', '承認する', 'しょうにんする']
            ],
            [
                [566, [11579, 507], 'consent', '同意', []],
                ['marry without parental <consent>', '同意', 'どうい']
            ],
            [
                [567, [10070], 'grant', '～を認める、～を与える', []],
                ['take freedom for <granted>', '当然と考える', 'とうぜんとかんがえる']
            ]
        ],
        ['対応・一致', [
                [568, [10655, 508], 'correspond', '一致する', []],
                ['The fact <corresponds> to my theory.', '一致する', 'いっちする']
            ],
            [
                [569, [11931, 509], 'accord', '一致', [
                    [10849, 'accordingly', 'それ相応に']
                ]],
                ['His opinion is in <accord> with mine.', '一致', 'いっち']
            ],
            [
                [570, [11204, 510], 'conform', '従う', []],
                ['<conform> to the rules', '従う', 'したがう']
            ],
            [
                [571, [12002, 511], 'compatible', '適合する', []],
                ['be <compatible> with their values', '適合する', 'てきごうする']
            ]
        ],
        ['比較・混同・同等', [
                [572, [10047, 512], 'compare', '～を比較する、～をたとえる', []],
                ['<compare> Japan with China', '比較する', 'ひかくする']
            ],
            [
                [573, [10086, 513], 'confuse', '～を当惑させる', []],
                ['be <confused> by her anger', '当惑する', 'とうわくする']
            ],
            [
                [574, [514], 'equal', '(～と)等しい, 匹敵する, するだけの能力がある(to～)； ～に等しい', []],
                ['Everyone was certain that he was <equal> to the assignment.', 'こなす能力がある', 'こなすのうりょくがある']
            ],
            [
                [575, [10727, 515], 'equivalent', '同等のもの、相当するもの', []],
                ["There's no English <equivalent> to haiku.", '相当するもの', 'そうとうするもの']
            ],
            [
                [576, [11317, 516], 'counterpart', '相当するもの', []],
                ['Chinese children work harder than\ntheir Japanese <counterparts>.', '子供', 'こども']
            ],
            [
                [577, [10385, 517], 'resemble', '～に似ている', []],
                ['He <resembles> his father.', '似ている', 'にている']
            ]
        ],
        ['多様性', [
                [578, [11060], 'diversity', '多様性', [
                    [518, 'diverse', '多様な']
                ]],
                ['American cultural <diversity>', '多様性', 'たようせい']
            ],
            [
                [579, [10357, 519], 'differ', '異なる', []],
                ['My opinion <differs> from hers.', '異なる', 'ことなる']
            ],
            [
                [580, [10088, 520], 'vary', '変わる、さまざまである', [
                    [10528, 'various', 'さまざまな']
                ]],
                ['<vary> from country to country', '変わる', 'かわる']
            ],
            [
                [581, [11933], 'array', '多彩', []],
                ['a vast <array> of spices', '多彩', 'たさい']
            ]
        ]
    ],
    ['言語・文学', ['lingu : 言語', [
            [582, [11158, 521], 'linguistic', '言語の', [
                [10260, 'bilingual', '二言語使用の']
            ]],
            ['the <linguistic> ability of children', '言語', 'げんご']
        ]],
        ['liter : 文字・文学', [
                [583, [522], 'literary', '文学の', [
                    [10462, 'literature', '文学']
                ]],
                ['<literary> works', '文学の', 'ぶんがくの']
            ],
            [
                [584, [11197], 'literally', '文字通り', [
                    [523, 'literal', '文字通りの, 字義通りの']
                ]],
                ["There's <literally> nothing there.", '文字通り', 'もじどおり']
            ],
            [
                [585, [524], 'literate', '読み書きができる, 教養のある', []],
                ['As public education spread throughout the country, more and more people became <literate>.', '読み書きができる', 'よみかきができる']
            ],
            [
                [586, [12102, 525], 'letter', '文字', []],
                ['a word of six <letters>', '文字', 'もじ']
            ]
        ],
        ['log : 言葉・学問', [
                [587, [11589, 526], 'dialogue', '対話', []],
                ['a <dialogue> between two students', '対話', 'たいわ']
            ],
            [
                [588, [527], 'monologue', '独白', []],
                ['She delivered a powerful <monologue>.', '独白', 'どくはく']
            ],
            [
                [589, [11025, 528], 'logic', '論理', []],
                ['persuade him with <logic>', '論理', 'ろんり']
            ],
            [
                [590, [10366], 'apologize', '謝る', [
                    [529, 'apology', '謝罪']
                ]],
                ['<apologize> to him for being late', '謝る', 'あやまる']
            ],
            [
                [591, [11990, 530], 'eloquent', '雄弁な', []],
                ['an <eloquent> speech', '雄弁な', 'ゆうべんな']
            ],
            [
                [592, [10581], 'biological', '生物', [
                    [531, 'biology', '生物学']
                ]],
                ['<biological> weapons', '生物', 'せいぶつ']
            ],
            [
                [593, [10993, 532], 'psychology', '心理学', []],
                ['study social <psychology>', '心理学', 'しんりがく']
            ],
            [
                [594, [11861, 533], 'analogy', '類似点', []],
                ['an <analogy> between the heart and a pump', '類似点', 'るいじてん']
            ]
        ],
        ['言葉・言葉を発する', [
                [595, [11160], 'verbal', '言葉による', [
                    [534, 'verb', '動詞']
                ]],
                ['<verbal> communication', '言葉による', 'ことばによる']
            ],
            [
                [596, [535], 'adjective', '形容詞', []],
                ['Beautiful is an <adjective>.', '形容詞', 'けいようし']
            ],
            [
                [597, [11467, 536], 'proverb', 'ことわざ', []],
                ['an old Chinese <proverb>', 'ことわざ', 'ことわざ']
            ],
            [
                [598, [11648, 537], 'oral', '口述の', []],
                ['an <oral> examination', '口述の', 'こうじゅつの']
            ],
            [
                [599, [11419, 538], 'utter', '発する', [
                    [11692, 'utterly', 'まったく']
                ]],
                ['<utter> a word', '発する', 'はっする']
            ],
            [
                [600, [11182], 'fluent', '流ちょうな', []],
                ['be <fluent> in English', '流ちょうだ', 'りゅうちょうだ']
            ]
        ],
        ['言及・参照', [
                [601, [10049, 539], 'refer', '～を指示する', []],
                ['What does this word <refer> to?', '指示する', 'しじする']
            ],
            [
                [602, [10629, 540], 'consult', '～に相談する、～を参照する', []],
                ['<consult> a doctor for advice', '相談して', 'そうだんして']
            ],
            [
                [603, [541], 'look up', '～(単語など)を調べる', []],
                ['<look up> a word in a dictionary', '調べる', 'しらべる']
            ],
            [
                [604, [10060, 542], 'mention', '～について述べる', []],
                ['Never <mention> it again.', '口にする', 'くちにする']
            ]
        ],
        ['意味・解釈', [
                [605, [10666, 543], 'imply', '～を（暗に）意味する', [
                    [11660, 'explicit', '明確な、はっきりした']
                ]],
                ['What does her smile <imply>?', '意味する', 'いみする']
            ],
            [
                [606, [11391], 'inferred', '推量する', [
                    [544, 'infer', '～を推察する']
                ]],
                ['can be <inferred> from the passage', '推量する', 'すいりょうする']
            ],
            [
                [607, [10603, 545], 'interpret', '～を解釈する', []],
                ['<interpret> the meaning of the word', '解釈する', 'かいしゃくする']
            ]
        ],
        ['scribe / script : 書く', [
                [608, [10037, 546], 'describe', '～を描写する、～の特徴を説明する', []],
                ['<describe> the lost bag', '特徴を言う', 'とくちょうをいう']
            ],
            [
                [609, [11894], 'subscriber', '加入者', [
                    [547, 'subscribe', '(～を)定期購読する(to～)']
                ]],
                ['<subscribers> to the service', '加入者', 'かにゅうしゃ']
            ],
            [
                [610, [11243, 548], 'prescribe', '処方する', []],
                ['<prescribe> medicine', '処方する', 'しょほうする']
            ],
            [
                [611, [549], 'manuscript', '原稿', []],
                ['The <manuscript> is in its final stages.', '原稿', 'げんこう']
            ],
            [
                [612, [11524], 'script', '台本', []],
                ['a movie <script>', '台本', 'だいほん']
            ]
        ],
        ['crit : 決定を下す', [
                [613, [10375, 550], 'criticize', '～を非難する', []],
                ['<criticize> him for being late', '非難する', 'ひなんする']
            ],
            [
                [614, [551], 'critical', '決定的な, 批評の', []],
                ['The boxer received a <critical> blow and lost consciousness.', '決定的な', 'けっていてきな']
            ],
            [
                [615, [10491, 552], 'crisis', '危機', []],
                ['get over the economic <crisis>', '危機', 'きき']
            ],
            [
                [616, [11519], 'criteria', '基準', []],
                ['meet the <criteria> for safety', '基準', 'きじゅん']
            ]
        ],
        ['意見', [
                [617, [553], 'opinion', '意見', []],
                ["express one's <opinion> about [on] A", '意見', 'いけん']
            ],
            [
                [618, [10138, 554], 'remark', '述べる', [
                    [10299, 'remarkable', 'すばらしい']
                ]],
                ['<remark> that he is kind', '述べる', 'のべる']
            ],
            [
                [619, [555], 'comment', '意見, 論評； (意見を)述べる', []],
                ["The teacher's severe <comment> on the test made the student cry.", '論評', 'ろんぴょう']
            ]
        ],
        ['文の種類・技法', [
                [620, [11787, 556], 'prose', '散文', []],
                ['write <prose> and poetry', '散文', 'さんぶん']
            ],
            [
                [621, [557], 'verse', '韻文, 詩', []],
                ['write in <verse>', '韻文', 'いんぶん']
            ],
            [
                [622, [558], 'poetry', '詩', []],
                ['She finds solace in writing <poetry>.', '詩', 'し']
            ],
            [
                [623, [10471, 559], 'document', '文書', []],
                ['sign an official <document>', '文書', 'ぶんしょ']
            ],
            [
                [624, [11823, 560], 'narrative', '話', []],
                ['a <narrative> of his journey', '話', 'はなし']
            ],
            [
                [625, [11284, 561], 'plot', '筋、たくらみ、陰謀', []],
                ['the <plot> of the movie', '筋', 'すじ']
            ],
            [
                [626, [11353, 562], 'quote', '引用する', []],
                ['<quote> the Bible', '引用する', 'いんようする']
            ],
            [
                [627, [11856, 563], 'rhetoric', '美辞麗句', []],
                ['empty <rhetoric>', '美辞麗句', 'びじれいく']
            ],
            [
                [628, [11582, 564], 'metaphor', '比喩', []],
                ['the <metaphor> of the "melting pot"', '比喩', 'ひゆ']
            ],
            [
                [629, [11542, 565], 'irony', '皮肉', []],
                ['the <irony> of fate', '皮肉', 'ひにく']
            ],
            [
                [630, [11290, 566], 'paradox', '逆説', []],
                ['a strange <paradox>', '逆説', 'ぎゃくせつ']
            ],
            [
                [631, [11302], 'draft', '下書き、草稿', []],
                ['the first <draft> of his novel', '草稿', 'そうこう']
            ]
        ],
        ['言葉に関する語', [
                [632, [11073, 567], 'dialect', '方言', []],
                ['speak the local <dialect>', '方言', 'ほうげん']
            ],
            [
                [633, [12185, 568], 'accent', 'なまり', []],
                ['English with an Italian <accent>', 'なまり', 'なまり']
            ],
            [
                [634, [10679, 569], 'pronounce', '〈単語など〉を発音する', []],
                ['<pronounce> the word correctly', '発音する', 'はつおんする']
            ],
            [
                [635, [12165, 570], 'tongue', '言葉', []],
                ['speak in a foreign <tongue>', '言葉', 'ことば']
            ],
            [
                [636, [10393, 571], 'text', 'メールを送る', []],
                ["Don't <text> while driving", 'メールを送る', 'めえるをおくる']
            ],
            [
                [637, [10738, 572], 'context', '文脈、状況', []],
                ['the meaning inthis <context>', '文脈', 'ぶんみゃく']
            ],
            [
                [638, [573], 'grammar', '文法', []],
                ['English <grammar>', '文法', 'ぶんぽう']
            ],
            [
                [639, [10486, 574], 'vocabulary', '語彙', []],
                ['a <vocabulary> of 5,000 words', '語彙', 'ごい']
            ],
            [
                [640, [10196], 'passage', '一節、経過、通行', []],
                ['Read the following <passage>', '一節', 'いっせつ']
            ],
            [
                [641, [11043], 'usage', '語法', []],
                ['modern English <usage>', '語法', 'ごほう']
            ],
            [
                [642, [11874], 'slang', '俗語', []],
                ['<slang> expressions', '俗語', 'ぞくご']
            ]
        ]
    ],
    ['調査・研究', ['調査・研究', [
                [643, [10411, 575], 'research', '研究', []],
                ['scientific <research>', '研究', 'けんきゅう']
            ],
            [
                [644, [10858, 576], 'investigate', '～を調査する', []],
                ['<investigate> the cause of the failure', '調査する', 'ちょうさする']
            ],
            [
                [645, [10485, 577], 'survey', '調査', []],
                ['according to a new <survey>', '調査', 'ちょうさ']
            ],
            [
                [646, [10768], 'inquiry', '調査、質問、問い合わせ', [
                    [578, 'inquire', '(～について)尋ねる(about～)； (～を)調査する(into～)']
                ]],
                ['an <inquiry> into the accident', '調査', 'ちょうさ']
            ]
        ],
        ['仮説から理論へ', [
                [647, [10433, 579], 'theory', '理論', []],
                ['the <theory> of relativity', '理論', 'りろん']
            ],
            [
                [648, [10417, 580], 'method', '方法', []],
                ['a <method> of teaching English', '方法', 'ほうほう']
            ],
            [
                [649, [11029, 581], 'hypothesis', '仮説', []],
                ['test the <hypothesis>', '仮説', 'かせつ']
            ],
            [
                [650, [10428, 582], 'experiment', '実験', []],
                ['<experiments> with animals', '実験', 'じっけん']
            ],
            [
                [651, [10690, 583], 'detect', '～を探知する、～を発見する', []],
                ['how to <detect> lies', '発見する', 'はっけんする']
            ],
            [
                [652, [11937, 584], 'thesis', '論文', []],
                ['a graduation <thesis>', '論文', 'ろんぶん']
            ],
            [
                [653, [10736, 585], 'statistics', '統計（学）', []],
                ['according to official <statistics>', '統計', 'とうけい']
            ],
            [
                [654, [10509], 'analysis', '分析', [
                    [586, 'analyze', '～を分析する']
                ]],
                ['<analysis> of DNA', '分析', 'ぶんせき']
            ],
            [
                [655, [10927, 587], 'laboratory', '研究所', []],
                ['a space science <laboratory>', '研究所', 'けんきゅうじょ']
            ],
            [
                [656, [10866, 588], 'conclude', '～と結論づける', []],
                ['<conclude> that he is OK', '結論づける', 'けつろんづける']
            ],
            [
                [657, [11077], 'finding', '発見', []],
                ['recent research <findings>', '発見', 'はっけん']
            ],
            [
                [658, [11928], 'paradigm', '理論的枠組', []],
                ['propose a new <paradigm>', '理論的枠組', 'りろんてきわくぐみ']
            ],
            [
                [659, [12013], 'demographic', '人口統計の', []],
                ['<demographic> changes', '人口統計の', 'じんこうとうけいの']
            ]
        ],
        ['証明・見積もり', [
                [660, [10043, 589], 'prove', '～だとわかる', []],
                ['<prove> to be true', 'わかる', 'わかる']
            ],
            [
                [661, [10612, 590], 'demonstrate', '〈証明などが〉～を明らかに示す', []],
                ['<demonstrate> that it is impossible', '示す', 'しめす']
            ],
            [
                [662, [10625, 591], 'illustrate', '～を（例で）示す', []],
                ['This example <illustrates> his ability.', '示す', 'しめす']
            ],
            [
                [663, [10081, 592], 'estimate', '～を推定する', []],
                ['the <estimated> population of Japan', '推定', 'すいてい']
            ]
        ],
        ['専門・学術', [
                [664, [11802], 'expertise', '専門知識', [
                    [593, 'expert', '専門家； (～に)熟達した(at, in～)']
                ]],
                ['<expertise> in programming', '専門知識', 'せんもんちしき']
            ],
            [
                [665, [10484, 594], 'scholar', '学者', []],
                ['a great <scholar>', '学者', 'がくしゃ']
            ],
            [
                [666, [595], 'academic', '学問の, 大学の', []],
                ['<academic> achievement', '学問の', 'がくもんの']
            ],
            [
                [667, [10633, 596], 'specialize', 'Aを専門にする、専攻する', []],
                ['<specialize> in Chinese history', '専攻する', 'せんこうする']
            ]
        ],
        ['学問分野', [
                [668, [11062, 597], 'geography', '地理', []],
                ['history and <geography>', '地理', 'ちり']
            ],
            [
                [669, [11686], 'geological', '地質学的な', [
                    [598, 'geology', '地質学']
                ]],
                ['divisions of <geological> time', '地質学的な', 'ちしつがくてきな']
            ],
            [
                [670, [599], 'geometry', '幾何学', []],
                ['She excels in math and <geometry>.', '幾何学', 'きかがく']
            ],
            [
                [671, [11484, 600], 'arithmetic', '算数', []],
                ['reading, writing, and <arithmetic>', '算数', 'さんすう']
            ],
            [
                [672, [11074, 601], 'astronomy', '天文学', []],
                ["Galileo's <astronomy>", '天文学', 'てんもんがく']
            ],
            [
                [673, [602], 'astrology', '占星術', []],
                ['Some people believe in <astrology>.', '占星術', 'せんせいじゅつ']
            ],
            [
                [674, [11905], 'botanist', '植物学者', [
                    [603, 'botany', '植物学']
                ]],
                ['Botanists study plants.', '植物学者', 'しょくぶつがくしゃ']
            ],
            [
                [675, [11035], 'anthropologist', '人類学者', [
                    [604, 'anthropology', '人類学']
                ]],
                ['Anthropologists study people.', '人類学者', 'じんるいがくしゃ']
            ]
        ]
    ],
    ['議論・主張・要求', ['話し合い・意見の一致／不一致', [
                [676, [10345, 605], 'discuss', '～を議論する', []],
                ['<discuss> the problem with him', '議論する', 'ぎろんする']
            ],
            [
                [677, [12096, 606], 'agree', '同意する、同じ考えである', []],
                ['<agree> to his proposal', '同意する', 'どういする'],
                ['I <agree> with you.', '同じ考えである', 'おなじかんがえである']
            ]
        ],
        ['主張する', [
                [678, [10069, 607], 'argue', '～と主張する', []],
                ['<argue> that he is right', '主張する', 'しゅちょうする']
            ],
            [
                [679, [12127, 608], 'maintain', '維持する、主張する', []],
                ['<maintain> health', '維持する', 'いじする'],
                ['<maintain> that he is innocent', '主張する', 'しゅちょうする']
            ],
            [
                [680, [10914, 609], 'assert', '～と主張する', []],
                ['<assert> that it is impossible', '主張する', 'しゅちょうする']
            ],
            [
                [681, [10056, 610], 'claim', '～と主張する', []],
                ['He <claims> that he saw a UFO.', '主張する', 'しゅちょうする']
            ],
            [
                [682, [10090, 611], 'insist', '～と主張する、言い張る', []],
                ['<insist> on going to France', '言い張る', 'いいはる']
            ]
        ],
        ['宣言・告知', [
                [683, [11368, 612], 'exclaim', '叫ぶ', []],
                ['<exclaim> in surprise', '叫ぶ', 'さけぶ']
            ],
            [
                [684, [11736, 613], 'proclaim', '宣言する', []],
                ['<proclaim> that Japan is safe', '宣言する', 'せんげんする']
            ],
            [
                [685, [10853, 614], 'declare', '～を宣言する', []],
                ['<declare> independence from Britain', '宣言する', 'せんげんする']
            ],
            [
                [686, [10390, 615], 'announce', '～を発表する', []],
                ['<announce> a new plan', '発表する', 'はっぴょうする']
            ]
        ],
        ['誇張・自慢', [
                [687, [10899, 616], 'exaggerate', '～を誇張する', []],
                ['<exaggerate> the size of the fish', '誇張する', 'こちょうする']
            ],
            [
                [688, [11432, 617], 'boast', '自慢する', []],
                ['<boast> of being rich', '自慢する', 'じまんする']
            ]
        ],
        ['論争・討論', [
                [689, [11171], 'controversial', '物議を呼ぶ', [
                    [618, 'controversy', '論争, 議論']
                ]],
                ['a <controversial> social issue', '論議を呼ぶ', 'ろんぎをよぶ']
            ],
            [
                [690, [10952, 619], 'dispute', '紛争', []],
                ['settle international <disputes>', '紛争', 'ふんそう']
            ],
            [
                [691, [10505, 620], 'debate', '討論', []],
                ['a <debate> on education', '討論', 'とうろん']
            ],
            [
                [692, [10928, 621], 'conference', '会議', []],
                ['an international <conference>', '会議', 'かいぎ']
            ],
            [
                [693, [11261, 622], 'negotiate', '交渉する', []],
                ['<negotiate> for peace', '交渉をする', 'こうしょうをする']
            ]
        ],
        ['不満・和解', [
                [694, [10350, 623], 'complain', '苦情を言う', []],
                ['<complain> about the noise', '苦情を言う', 'くじょうをいう']
            ],
            [
                [695, [624], 'grumble', '不満を言う', []],
                ['The old man <grumbled> to his daughter about how he was being treated.', '不満を言う', 'ふまんをいう']
            ],
            [
                [696, [10964, 625], 'quarrel', '口論', []],
                ['a <quarrel> with my wife', '口論', 'こうろん']
            ],
            [
                [697, [11725, 626], 'reconcile', '調和させる', []],
                ['<reconcile> religion with science', '調和させる', 'ちょうわさせる']
            ],
            [
                [698, [11417], 'scold', 'しかる', []],
                ['<scold> my son for being lazy', 'しかる', 'しかる']
            ]
        ],
        ['説得', [
                [699, [10099, 627], 'convince', '～を納得させる、確信させる', []],
                ['<convince> him that it is true', '確信させる', 'かくしんさせる']
            ],
            [
                [700, [10113, 628], 'persuade', '～を説得する', []],
                ['<persuade> them to go back', '説得して', 'せっとくして']
            ],
            [
                [701, [629], 'talk ～ into doing', '～に説得する', []],
                ['I <talked> my parents <into> buy<ing> me a car.', '説得した', 'せっとくした']
            ]
        ],
        ['権利・資格', [
                [702, [10416, 630], 'advantage', '利点', []],
                ['the <advantage> of membership', '利点', 'りてん']
            ],
            [
                [703, [12030, 631], 'right', '権利、善、すぐ', []],
                ['the <right> to vote', '権利', 'けんり'],
                ['<right> and wrong', '善', 'ぜん'],
                ['<right> in front of my house', 'すぐ', 'すぐ']
            ],
            [
                [704, [10969, 632], 'privilege', '特権', []],
                ['white <privilege>', '特権', 'とっけん']
            ],
            [
                [705, [11324], 'entitled', '得る権利がある、題された', [
                    [633, 'entitle', '～に資格/権利を与える']
                ]],
                ['be <entitled> to the money', '権利がある', 'けんりがある']
            ],
            [
                [706, [10645, 634], 'qualify', 'Aに適任である', []],
                ['<qualify> for the position', '適任である', 'てきにんである']
            ]
        ],
        ['要求', [
                [707, [10017, 635], 'require', '～を必要とする', []],
                ['<require> more attention', '必要とする', 'ひつようとする']
            ],
            [
                [708, [636], 'call for', '～を要求する, 必要とする', []],
                ['The tasks <call for> great discipline and skill.', '必要とする', 'ひつようとする']
            ],
            [
                [709, [10423, 637], 'desire', '願望', []],
                ['a strong <desire> to be a singer', '願望', 'がんぼう']
            ],
            [
                [710, [10024, 638], 'demand', '～を要求する', []],
                ['<demand> more freedom', '要求する', 'ようきゅうする']
            ],
            [
                [711, [11704], 'summon', '呼ぶ', []],
                ['<summon> the police', '呼ぶ', 'よぶ']
            ],
            [
                [712, [11778], 'plead', '嘆願する', []],
                ['<plead> with her to come back', '嘆願する', 'たんがんする']
            ],
            [
                [713, [11892], 'quest', '探究', []],
                ['the <quest> for the truth', '探究', 'たんきゅう']
            ]
        ]
    ],
    ['語源から覚える', ['spect : 見る', [
                [714, [10721, 639], 'perspective', '見方', []],
                ['see life from a new <perspective>', '見方', 'みかた']
            ],
            [
                [715, [11383, 640], 'inspect', '検査する', []],
                ['<inspect> the car for defects', '検査する', 'けんさする']
            ],
            [
                [716, [10961, 641], 'prospect', '見通し', []],
                ['future <prospects>', '見通し', 'みとおし']
            ],
            [
                [717, [642], 'retrospect', '追想、回想', []],
                ['In <retrospect>, I should have studied harder for the exam.', '回想', 'かいそう']
            ],
            [
                [718, [10145, 643], 'suspect', '～ではないかと思う、～を疑う', []],
                ['I <suspect> that he is a spy.', 'ないかと思う', 'ないかとおもう']
            ],
            [
                [719, [11410, 644], 'speculate', '推測する', []],
                ['<speculate> about the future', '推測する', 'すいそくする']
            ],
            [
                [720, [11303, 645], 'spectacle', '光景', []],
                ['a dramatic <spectacle>', '光景', 'こうけい']
            ],
            [
                [721, [11978, 646], 'conspicuous', '顕著な', []],
                ['the most <conspicuous> example', '顕著な', 'けんちょな']
            ],
            [
                [722, [11319], 'spectrum', '変動範囲、領域', []],
                ['a wide <spectrum> of interests', '範囲', 'はんい']
            ]
        ],
        ['cede / ceed : 行く', [
                [723, [279], 'precede', '～より先行する', []],
                ['Speech <precedes> writing.', '先行する', 'せんこうする']
            ],
            [
                [724, [297], 'recede', '後退する', []],
                ['Glaciers have been <receding> around the world due to global warming.', '後退している', 'こうたいしている']
            ],
            [
                [725, [10601, 647], 'proceed', '進む', [
                    [12098, 'process', '過程、加工する、処理する']
                ]],
                ['<proceed> straight ahead', '進む', 'すすむ']
            ],
            [
                [726, [10893, 648], 'exceed', '～を超える', []],
                ['Demand <exceeds> supply.', '超える', 'こえる']
            ],
            [
                [727, [649], 'concede', '～を認める、譲歩する', []],
                ['He reluctantly <conceded> to their demands.', '認めた', 'みとめた']
            ],
            [
                [728, [12167, 650], 'succeed', '受け継ぐ', []],
                ['<succeed> to the crown', '受け継ぐ', 'うけつぐ']
            ],
            [
                [729, [10983], 'procedure', '手続き', []],
                ['the check-in <procedure>', '手続き', 'てつづき']
            ],
            [
                [730, [11820], 'predecessor', '前任者', []],
                ['his <predecessor> as manager', '前任', 'ぜんにん']
            ]
        ],
        ['dict / dic : 言う・話す', [
                [731, [505], 'contradict', '～を否定する, に反論する, と矛盾する', []],
                ['<contradict> what he said', '矛盾する', 'むじゅんする']
            ],
            [
                [732, [10378, 651], 'predict', '～を予言する', []],
                ['<predict> the future', '予言する', 'よげんする']
            ],
            [
                [733, [10071, 652], 'indicate', '～を指し示す', []],
                ['The data <indicate> that he is right.', '示す', 'しめす']
            ],
            [
                [734, [11211, 653], 'dictate', '命じる、要求する、決定する', []],
                ['The market <dictates> prices.', '決める', 'きめる']
            ],
            [
                [735, [11207, 654], 'dedicate', 'ささげる', []],
                ['I am <dedicated> to my work,', '身をささげている', 'みをささげている']
            ]
        ],
        ['mit : 送る', [
                [736, [59], 'submit', '（～に)服従する, 身を任せる(to～)； ～を服従させる, を提出する', []],
                ['<submit> to authority', '服従する', 'ふくじゅうする']
            ],
            [
                [737, [99], 'emit', '～を放出する, 排出する', []],
                ['greenhouse gas <emissions>', '排出', 'はいしゅつ']
            ],
            [
                [738, [154], 'permit', '～を許す, ～に(…するのを)許可する(to do)', []],
                ['<permit> him to go out', '許す', 'ゆるす']
            ],
            [
                [739, [10063, 655], 'admit', '～を認める', []],
                ['I <admit> that I was wrong.', '認める', 'みとめる']
            ],
            [
                [740, [10610, 656], 'commit', '〈罪など〉を犯す、～をゆだねる、委任する、（本気で）取り組む', [
                    [10995, 'committee', '委員会']
                ]],
                ['<commit> a crime', '犯す', 'おかす']
            ],
            [
                [741, [11385, 657], 'omit', '省く', []],
                ['<omit> the word', '省く', 'はぶく']
            ],
            [
                [742, [10641, 658], 'dismiss', '〈考えなど〉を無視する、〈人〉を解雇する、解散する', []],
                ['<dismiss> the idea as nonsense', '無視する', 'むしする']
            ],
            [
                [743, [10636, 659], 'transmit', '～を送る、伝える', []],
                ['<transmit> messages', '伝える', 'つたえる']
            ],
            [
                [744, [10767, 660], 'mission', '使命、任務', []],
                ['carry out a dangerous <mission>', '任務', 'にんむ']
            ],
            [
                [745, [11682], 'promising', '前途有望な', []],
                ['a <promising> new actress', '前途有望な', 'ぜんとゆうぼうな']
            ]
        ],
        ['trans- : 越えて', [
                [746, [10670, 661], 'transfer', '～を移す', []],
                ['He was <transferred> to Osaka', '転勤した', 'てんきんした']
            ],
            [
                [747, [10199], 'transportation', '交通機関、輸送', [
                    [662, 'transport', '～を輸送する； 輸送、交通手段'],
                    [11887, 'shipping', '発送']
                ]],
                ['use public <transportation>', '交通機関', 'こうつうきかん']
            ],
            [
                [748, [10856, 663], 'transform', '変える', []],
                ['<transform> food into energy', '変える', 'かえる']
            ],
            [
                [749, [10153, 664], 'translate', '～を翻訳する', []],
                ['<translate> a novel into English', '翻訳する', 'ほんやくする']
            ],
            [
                [750, [11106, 665], 'transplant', '移植', []],
                ['a heart <transplant> operation', '移植', 'いしょく']
            ],
            [
                [751, [11944, 666], 'transparent', '透き通った', []],
                ['a <transparent> silk nightgown', '透き通った', 'すきとおった']
            ],
            [
                [752, [11461, 667], 'transition', '移り変わり', []],
                ['a seasonal <transition>', '移り変わり', 'うつりかわり']
            ]
        ],
        ['tribute : 与える', [
                [753, [10890, 668], 'distribute', '～を分配する', []],
                ['<distribute> food equally', '分配する', 'ぶんぱいする']
            ],
            [
                [754, [10093, 669], 'contribute', '～に貢献する、～の一因となる、AをBに寄付する', []],
                ['<contribute> to world peace', '貢献する', 'こうけんする']
            ],
            [
                [755, [10657, 670], 'attribute', 'AはBのおかげだと思う', []],
                ['<attribute> success to luck', 'おかげだと思う', 'おかげだとおもう']
            ],
            [
                [756, [10023], 'share', '～を分け合う、共有する', []],
                ['<share> a room with a friend', '共有する', 'きょうゆうする']
            ],
            [
                [757, [11710], 'allocate', '配分する', []],
                ['<allocate> resources', '配分する', 'はいぶんする']
            ]
        ],
        ['-sure- を含む語', [
                [758, [10628, 671], 'assure', '（～を）保証する', []],
                ['<assure> you that you will win', '保証する', 'ほしょうする']
            ],
            [
                [759, [11375, 672], 'reassure', '安心させる', []],
                ['<reassure> the patient', '安心させる', 'あんしんさせる']
            ],
            [
                [760, [10602, 673], 'ensure', '～を確実にする', []],
                ['<ensure> the safety of drivers', '確保する', 'かくほする']
            ],
            [
                [761, [10930, 674], 'insurance', '保険', []],
                ['national health <insurance>', '保険', 'ほけん']
            ]
        ]
    ],
    ['力関係', ['影響', [
                [762, [10182, 675], 'influence', '影響', []],
                ['have a bad <influence> on children', '影響', 'えいきょう']
            ],
            [
                [763, [10242, 676], 'impact', '影響、衝撃', []],
                ['a negative <impact> on the environment', '影響', 'えいきょう']
            ]
        ],
        ['affect とその派生語', [
                [764, [10341, 677], 'affect', '～に影響する', []],
                ['Alcohol <affects> the brain.', '影響する', 'えいきょうする']
            ],
            [
                [765, [10180, 678], 'effect', '効果、影響、結果', []],
                ['the greenhouse <effect> of CO2', '効果', 'こうか']
            ],
            [
                [766, [10998, 679], 'affection', '愛情', []],
                ['a deep <affection> for animals', '愛情', 'あいじょう']
            ]
        ],
        ['支配・規制', [
                [767, [10868], 'dominate', '～を支配する', [
                    [680, 'dominant', '支配的な、より優位にたつ'],
                    [12026, 'predominantly', '主に']
                ]],
                ['<dominate> the world economy', '支配する', 'しはいする']
            ],
            [
                [768, [12097, 681], 'rule', '支配、普通', []],
                ['British colonial <rule>', '支配', 'しはい'],
                ['Small families are the <rule> in Japan.', '普通', 'ふつう']
            ],
            [
                [769, [10889, 682], 'regulate', '～を規制する', []],
                ['<regulate> traffic', '規制する', 'きせいする']
            ],
            [
                [770, [12199, 683], 'control', '規制、対照', []],
                ['gun <control> laws', '規制', 'きせい'],
                ['<control> group', '対照', 'たいしょう']
            ],
            [
                [771, [11222, 684], 'bind', '縛る、束縛する', []],
                ['be <bound> tradition', '縛られている', 'しばられている']
            ],
            [
                [772, [11087], 'code', '規則', []],
                ['a strict dress <code>', '規則', 'きそく']
            ]
        ],
        ['権力・行使', [
                [773, [12200, 685], 'authority', '当局、権力、権威', []],
                ['the school <authorities>', '当局', 'とうきょく'],
                ['the <authority> of the state', '権力', 'けんりょく'],
                ['an <authority> on biology', '権威', 'けんい']
            ],
            [
                [774, [10410, 686], 'author', '筆者', []],
                ['the <author> of this passage', '筆者', 'ひっしゃ']
            ],
            [
                [775, [11369, 687], 'exert', '及ぼす', []],
                ['<exert> a strong influence', '及ぼす', 'およぼす']
            ],
            [
                [776, [12126, 688], 'exercise', '運動、用いる', []],
                ['get regular <exercise>', '運動', 'うんどう'],
                ['<exercise> power over people', '用いる', 'もちいる']
            ]
        ],
        ['従属・抵抗', [
                [777, [10606, 689], 'obey', '～に従う', []],
                ['<obey> the law', '従う', 'したがう']
            ],
            [
                [778, [10608, 690], 'resist', '～に抵抗する', []],
                ['<resist> pressure from above', '抵抗する', 'ていこうする']
            ],
            [
                [779, [10712, 691], 'protest', '抗議', []],
                ['a <protest> against war', '抗議', 'こうぎ']
            ],
            [
                [780, [11581, 692], 'rebel', '反逆者', []],
                ['anti-government <rebels>', '反逆者', 'はんぎゃくしゃ']
            ]
        ],
        ['征服・敗北', [
                [781, [10900, 693], 'conquer', '～を征服する', []],
                ['<conquer> the world', '征服する', 'せいふくする']
            ],
            [
                [782, [694], 'win', '勝つ； ～（試合など）に勝つ； を獲得する', []],
                ['<win> a game', '勝つ', 'かつ']
            ],
            [
                [783, [10857, 695], 'defeat', '～を打ち負かす', []],
                ['<defeat> the champion', '打ち負かす', 'うちまかす']
            ],
            [
                [784, [12152, 696], 'beat', '勝つ', []],
                ['<beat> the champion', '勝つ', 'かつ']
            ],
            [
                [785, [10431], 'loss', '損失', [
                    [697, 'lose', '負ける； ～を失う； （試合など）に負ける']
                ]],
                ['a <loss> of $5,000', '損失', 'そんしつ']
            ],
            [
                [786, [11213, 698], 'surrender', '降伏する', []],
                ['<surrender> to the US army', '降参する', 'こうさんする']
            ],
            [
                [787, [12179, 699], 'yield', '産出する、屈する、取って代わられた', []],
                ['<yield> food and wood', '産出する', 'さんしゅつする'],
                ['<yield> to pressure', '屈する', 'くっする'],
                ['Radio <yielded> to television.', '取って代わられた', 'とってかわられた']
            ]
        ],
        ['依存', [
                [788, [10022, 700], 'depend', '～に依存する、～しだいで決まる', []],
                ['Everything <depends> on him.', 'しだいだ', 'しだいだ']
            ],
            [
                [789, [10277, 701], 'independent', '独立した', []],
                ['He is <independent> 0f his parents.', '独立している', 'どくりつしている']
            ],
            [
                [790, [10104, 702], 'rely', 'Aに頼る', []],
                ['<rely> on their power', '頼る', 'たよる']
            ],
            [
                [791, [703], 'count on', '～をあてにする、頼りにする', []],
                ['You can <count on> me.', 'あてにして', 'あてにして']
            ],
            [
                [792, [10369, 704], 'trust', '～を信用する', []],
                ['<trust> an old friend', '信用する', 'しんようする']
            ]
        ],
        ['競争', [
            [793, [10388, 705], 'compete', '競争する', [
                [11622, 'competent', '有能な']
            ]],
            ['<compete> with him for the gold medal', '競争する', 'きょうそうする']
        ]],
        ['press : 圧迫する', [
                [794, [12149, 706], 'press', '出版、切迫して', []],
                ['the freedom of the <press>', '出版', 'しゅっぱん'],
                ['be <pressed> for time', '切迫して', 'せっぱくして']
            ],
            [
                [795, [10452], 'impression', '印象', [
                    [707, 'impress', '印象づける、感動させる']
                ]],
                ['make a good <impression> on him', '印象', 'いんしょう']
            ],
            [
                [796, [10336, 708], 'express', '～を表現する', []],
                ['<express> my feelings', '表現する', 'ひょうげんする']
            ],
            [
                [797, [11244, 709], 'oppress', 'しいたげる', []],
                ['<oppress> small nations', 'しいたげる', 'しいたげる']
            ],
            [
                [798, [11362, 710], 'suppress', '抑える', []],
                ['<suppress> anger', '抑える', 'おさえる']
            ]
        ],
        ['脅す・飼い慣らす', [
                [799, [10615], 'threaten', '～を脅迫する', [
                    [711, 'threat', '脅し、脅威']
                ]],
                ['<threaten> to tell the police', 'おどす', 'おどす']
            ],
            [
                [800, [11865, 712], 'menace', '脅威', []],
                ['a <menace> to world peace', '脅威', 'きょうい']
            ],
            [
                [801, [11755, 713], 'tame', '飼いならす', []],
                ['<tame> wild animals', '飼いならす', 'かいならす']
            ]
        ],
        ['優劣・優れる', [
                [802, [10288, 714], 'superior', 'よりすぐれている', []],
                ['be <superior> to others', 'よりすぐれている', 'よりすぐれている']
            ],
            [
                [803, [715], 'inferior', '～より劣っている(to)', []],
                ['Our performance was <inferior> to that of the other team.', '劣っていた', 'おとっていた']
            ],
            [
                [804, [11361, 716], 'surpass', 'まさる', []],
                ['<surpass> the US in technology', 'まさる', 'まさる']
            ],
            [
                [805, [10552], 'excellent', 'すばらしい', [
                    [717, 'excel', '優れる']
                ]],
                ['an <excellent> idea', 'すばらしい', 'すばらしい']
            ],
            [
                [806, [11621], 'splendid', 'すばらしい', []],
                ['a <splendid> view', 'すばらしい', 'すばらしい']
            ],
            [
                [807, [11674], 'outstanding', '傑出した', []],
                ['an <outstanding> scholar', '傑出した', 'けっしゅつした']
            ],
            [
                [808, [11790], 'masterpiece', '傑作', []],
                ['<masterpieces> of French art', '傑作', 'けっさく']
            ]
        ]
    ],
    ['知覚・感覚・感情', ['ceive : 取る', [
                [809, [10155, 718], 'perceive', '～を知覚する', []],
                ['<perceive> danger', '気づく', 'きづく']
            ],
            [
                [810, [11264, 719], 'conceive', '想像する', [
                    [11111, 'concept', '概念']
                ]],
                ['<conceive> of life as a game', '考える', 'かんがえる']
            ],
            [
                [811, [10884, 720], 'deceive', '～をだます', []],
                ['It is easy to <deceive> people.', 'だます', 'だます']
            ]
        ],
        ['sense : 感覚', [
                [812, [12048, 721], 'sense', '意味、正気', []],
                ['In a <sense>, it is right.', '意味', 'いみ'],
                ['He came to his <senses>.', '正気', 'しょうき']
            ],
            [
                [813, [10561, 722], 'sensitive', '敏感な', []],
                ['Her skin is <sensitive> to sunlight.', '敏感だ', 'びんかんだ']
            ],
            [
                [814, [723], 'sensible', '分別のある、賢明な', []],
                ['It was <sensible> of her to bring an umbrella.', '賢明だった', 'けんめいだった']
            ],
            [
                [815, [11311, 724], 'sensation', '感覚、感じ', []],
                ['the <sensation> of flying', '感覚', 'かんかく']
            ],
            [
                [816, [11497], 'sentiment', '感情', []],
                ['public <sentiment> against slavery', '感情', 'かんじょう']
            ]
        ],
        ['視覚1 : vis「見る」', [
                [817, [725], 'visual', '視覚の', []],
                ['a <visual> image', '視覚の', 'しかくの']
            ],
            [
                [818, [11125, 726], 'visible', '目に見える', []],
                ['make <visible> progress', '目に見える', 'めにみえる']
            ],
            [
                [819, [11350, 727], 'revise', '修正する', []],
                ['<revise> the guidelines', '修正する', 'しゅうせいする']
            ],
            [
                [820, [10495], 'device', '装置', [
                    [728, 'devise', '考案する']
                ]],
                ['an electronic <device>', '装置', 'そうち']
            ],
            [
                [821, [10201, 729], 'sight', '見ること、光景、視力', []],
                ['love at first <sight>', '一目', 'ひとめ']
            ],
            [
                [822, [10362], 'advise', '～に忠告する', []],
                ['<advise> him to eat vegetables', '忠告する', 'ちゅうこくする']
            ],
            [
                [823, [11501], 'surveillance', '監視、見張り', []],
                ['video <surveillance> systems', '監視', 'かんし']
            ]
        ],
        ['視覚2 : 視覚に関する動詞', [
                [824, [10920, 730], 'stare', 'じっと見る', []],
                ['stop and <stare> at her', 'じっと見る', 'じっとみる']
            ],
            [
                [825, [10910, 731], 'gaze', '見つめる', []],
                ['<gaze> at the stars', '見つめる', 'みつめる']
            ],
            [
                [826, [10877, 732], 'glance', 'ちらりと見る', []],
                ['<glance> at the clock', 'ちらりと見る', 'ちらりとみる']
            ],
            [
                [827, [11481, 733], 'glimpse', 'ちらり', []],
                ['catch a <glimpse> of her face', 'ちらり', 'ちらり']
            ]
        ],
        ['聴覚・嗅覚・味覚', [
                [828, [734], 'audible', '聞こえる', []],
                ['<audible> sounds', '聞こえる', 'きこえる']
            ],
            [
                [829, [10226, 735], 'audience', '聴衆、観客', []],
                ['gather a large <audience>', '観客', 'かんきゃく']
            ],
            [
                [830, [11613, 736], 'scent', '香り', []],
                ['the sweet <scent> of roses', '香り', 'かおり']
            ],
            [
                [831, [737], 'odor', 'におい', []],
                ['an offensive <odor>', 'におい', 'におい']
            ],
            [
                [832, [11088, 738], 'flavor', '風味', []],
                ['the <flavor> of fresh fruit', '風味', 'ふうみ']
            ]
        ],
        ['刺激・衝動', [
                [833, [11270, 739], 'arouse', '刺激する、かき立てる', []],
                ['<arouse> her curiosity', 'かきたてる', 'かきたてる']
            ],
            [
                [834, [11784, 740], 'evoke', '呼び起こす', []],
                ['<evoke> a response', '呼び起こす', 'よびおこす']
            ],
            [
                [835, [11210, 741], 'provoke', '引き起こす', []],
                ['<provoke> a reaction', '引き起こす', 'ひきおこす']
            ],
            [
                [836, [10627, 742], 'stimulate', '～を刺激する', []],
                ['<stimulate> the imagination', '刺激する', 'しげきする']
            ],
            [
                [837, [11018, 743], 'instinct', '本能', []],
                ['human <instinct> to fight', '本能', 'ほんのう']
            ],
            [
                [838, [11453, 744], 'impulse', '衝動', []],
                ['feel an <impulse> to shout', '衝動', 'しょうどう']
            ]
        ],
        ['恥・恥ずかしい', [
                [839, [10162, 745], 'embarrass', '～を困惑させる、～に恥ずかしい思いをさせる', []],
                ['be <embarrassed> by the mistake', '恥ずかしい', 'はずかしい']
            ],
            [
                [840, [12182, 746], 'shame', '恥、残念なこと', [
                    [11137, 'ashamed', '恥ずかしい']
                ]],
                ['feel no <shame>', '恥', 'はじ'],
                ['What a <shame>!', '残念なこと', 'ざんねんなこと']
            ],
            [
                [841, [10293], 'nervous', '神経質な、不安な', [
                    [747, 'nerve', '神経']
                ]],
                ['feel <nervous> about the future', '不安に', 'ふあんに']
            ],
            [
                [842, [11145], 'shy', '内気な', []],
                ['a quiet, <shy> girl', '内気な', 'うちきな']
            ]
        ],
        ['感情・機嫌', [
                [843, [10474, 748], 'emotion', '感情', []],
                ['express <emotions>', '感情', 'かんじょう']
            ],
            [
                [844, [11023, 749], 'passion', '情熱', []],
                ['love and <passion>', '情熱', 'じょうねつ']
            ],
            [
                [845, [750], 'compassion', '同情、あわれみ', []],
                ['Susan lent money to her ex-husband out of <compassion>.', '同情', 'どうじょう']
            ],
            [
                [846, [10820, 751], 'passive', '受動的な、消極的な', []],
                ['a <passive> attitude', '消極的な', 'しょうきょくてきな']
            ],
            [
                [847, [10745, 752], 'temper', '気性', [
                    [11817, 'temperament', '気質']
                ]],
                ['have a quick <temper>', '気性', 'きしょう']
            ],
            [
                [848, [11168], 'ugly', 'みにくい', []],
                ['an <ugly> duckling', 'みにくい', 'みにくい']
            ],
            [
                [849, [11846], 'melancholy', '憂うつ', []],
                ['a mood of <melancholy>', '憂うつ', 'ゆううつ']
            ],
            [
                [850, [11951], 'gloomy', '暗い', []],
                ['<gloomy> prospects', '暗い', 'くらい']
            ]
        ],
        ['喜', [
                [851, [10237, 753], 'delight', '大喜び', []],
                ['give a cry of <delight>', '喜び', 'よろこび']
            ],
            [
                [852, [11709, 754], 'rejoice', '喜ぶ', []],
                ['<rejoice> in the success', '喜ぶ', 'よろこぶ']
            ],
            [
                [853, [755], 'gratify', '喜ばせる', []],
                ['a <gratifying> result', '満足させる', 'まんぞくさせる']
            ]
        ],
        ['怒', [
                [854, [756], 'anger', '怒り', []],
                ['express <anger>', '怒り', 'いかり']
            ],
            [
                [855, [11282, 757], 'rage', '激怒、怒り', []],
                ['feel a great <rage>', '怒り', 'いかり']
            ],
            [
                [856, [11952], 'furious', '激怒した', [
                    [758, 'fury', '怒り']
                ]],
                ['My father was <furious> with me.', '激怒した', 'げきどした']
            ],
            [
                [857, [11378, 759], 'resent', '腹を立てる', []],
                ['<resent> being called foreigners', '腹を立てる', 'はらをたてる']
            ],
            [
                [858, [10356, 760], 'annoy', '～をいらいらさせる', []],
                ['The noise <annoys> me.', 'いらだたせる', 'いらだたせる']
            ],
            [
                [859, [10678, 761], 'irritate', '～をいらだたせる', []],
                ['<irritating> noise', 'いらいらさせる', 'いらいらさせる']
            ],
            [
                [860, [10651, 762], 'frustrate', '〈人〉を欲求不満にさせる', []],
                ['be <frustrated> by the lack of money', '欲求不満になる', 'よっきゅうふまんになる']
            ],
            [
                [861, [11854], 'revenge', '復讐', []],
                ['take <revenge> on an enemy', '復讐', 'ふくしゅう']
            ],
            [
                [862, [11999], 'outraged', '憤慨している', []],
                ['be <outraged> by his behavior', '憤慨している', 'ふんがいしている']
            ]
        ],
        ['哀', [
                [863, [11008, 763], 'sorrow', '悲しみ', []],
                ['joy and <sorrow>', '悲しみ', 'かなしみ']
            ],
            [
                [864, [11570, 764], 'grief', '悲しみ', []],
                ['feel deep <grief> over his death', '悲しみ', 'かなしみ']
            ],
            [
                [865, [11707, 765], 'lament', '嘆く', []],
                ['<lament> the shortness of life', '嘆く', 'なげく']
            ],
            [
                [866, [11703, 766], 'mourn', '悲しむ', []],
                ["<mourn> Gandhi's death", '悲しむ', 'かなしむ']
            ],
            [
                [867, [11449, 767], 'despair', '絶望', []],
                ['give up in <despair>', '絶望', 'ぜつぼう']
            ],
            [
                [868, [11239, 768], 'devastate', '壊滅させる', []],
                ['a <devastating> effect on nature', '壊滅的な', 'かいめつてきな']
            ]
        ],
        ['楽', [
                [869, [10871, 769], 'entertain', '～を楽しませる', []],
                ['<entertain> the audience', '楽しませる', 'たのしませる']
            ],
            [
                [870, [10126, 770], 'amuse', '～を楽しませる', []],
                ['<amuse> students with jokes', '笑わせる', 'わらわせる']
            ],
            [
                [871, [10188], 'laughter', '笑い', []],
                ['Laughter is the best medicine', '笑い', 'わらい']
            ],
            [
                [872, [10279], 'pleasant', '楽しい', []],
                ['a <pleasant> experience', '楽しい', 'たのしい']
            ]
        ]
    ],
    ['善悪・犯罪', ['善と悪', [
                [873, [10944, 771], 'virtue', '美徳', []],
                ['the <virtue> of hard work', '美徳', 'びとく']
            ],
            [
                [874, [11194], 'virtually', 'ほとんど', [
                    [772, 'virtual', '仮想の； 事実上の']
                ]],
                ['<virtually> every woman', 'ほとんど', 'ほとんど']
            ],
            [
                [875, [12190, 773], 'vice', '悪徳、副', []],
                ['virtue and <vice>', '悪徳', 'あくとく'],
                ['<vice> president', '副', 'ふく']
            ],
            [
                [876, [10300, 774], 'evil', '悪い', []],
                ['drive away <evil> spirits', '悪い', 'わるい']
            ],
            [
                [877, [11956], 'wicked', '邪悪な', []],
                ['a <wicked> desire', '邪悪な', 'じゃあくな']
            ]
        ],
        ['罪・倫理・罰', [
                [878, [11806, 775], 'sin', '罪', []],
                ['punishment for <sin>', '罪', 'つみ']
            ],
            [
                [879, [10506, 776], 'crime', '犯罪', []],
                ['a violent <crime>', '犯罪', 'はんざい']
            ],
            [
                [880, [10788], 'ethic', '倫理（学）', [
                    [777, 'ethics', '倫理']
                ]],
                ['a question of medical <ethics>', '倫理', 'りんり']
            ],
            [
                [881, [10297, 778], 'moral', '道徳的な', []],
                ['make a <moral> judgment', '道徳的な', 'どうとくてきな']
            ],
            [
                [882, [11422, 779], 'confess', '告白する', []],
                ['<confess> that I did it', '告白する', 'こくはくする']
            ],
            [
                [883, [10876, 780], 'punish', '～を罰する', []],
                ['<punish> him for the crime', '罰する', 'ばっする']
            ],
            [
                [884, [11058, 781], 'penalty', '刑', []],
                ['the death <penalty>', '刑', 'けい']
            ]
        ],
        ['犯罪・動機・目撃', [
                [885, [10955, 782], 'murder', '殺人', []],
                ['mass <murder>', '殺人', 'さつじん']
            ],
            [
                [886, [10501, 783], 'victim', '犠牲者', []],
                ['<victims> of the war', '犠牲者', 'ぎせいしゃ']
            ],
            [
                [887, [11421], 'offending', '怒らせる', [
                    [784, 'offend', '怒らせる']
                ]],
                ['avoid <offending> others', '怒らせる', 'いからせる']
            ],
            [
                [888, [10872, 785], 'defend', '～を守る', []],
                ['<defend> ourselves against attack', '守る', 'まもる']
            ],
            [
                [889, [11017, 786], 'motive', '動機', []],
                ['the <motive> for the crime', '動機', 'どうき']
            ],
            [
                [890, [10725, 787], 'witness', '証人、目撃者', []],
                ['a <witness> to the accident', '目撃者', 'もくげきしゃ']
            ],
            [
                [891, [11567], 'thief', '泥棒', []],
                ['a car <thief>', '泥棒', 'どろぼう']
            ],
            [
                [892, [11834], 'burglar', '強盗', []],
                ['A <burglar> broke into the house.', '強盗', 'ごうとう']
            ]
        ],
        ['逮捕・勾留・告訴', [
                [893, [10626, 788], 'arrest', '～を逮捕する', []],
                ['<arrest> him for speeding', '逮捕する', 'たいほする']
            ],
            [
                [894, [789], 'detain', '〜を引き留める、勾留する', []],
                ['The suspect was <detained> at the police station for hours.', '勾留された', 'こうりゅうされた']
            ],
            [
                [895, [10650, 790], 'accuse', '～を非難する', []],
                ['<accuse> him of lying', '非難する', 'ひなんする']
            ],
            [
                [896, [10111, 791], 'blame', '～を非難する、～のせいにする', []],
                ['<blame> others for the failure', 'せいにする', 'せいにする']
            ],
            [
                [897, [12121, 792], 'fault', '責任、欠点', []],
                ["If he fails, it'll be my <fault>.", '責任', 'せきにん'],
                ['He has a lot of <faults>.', '欠点', 'けってん']
            ],
            [
                [898, [11781, 793], 'condemn', '非難する', []],
                ['<condemn> his behavior', '非難する', 'ひなんする']
            ],
            [
                [899, [11884], 'shortcoming', '欠点', []],
                ['put up with her <shortcomings>', '欠点', 'けってん']
            ]
        ],
        ['裁判・判決', [
                [900, [12160, 794], 'court', '裁判', []],
                ['The case went to <court>.', '裁判', 'さいばん']
            ],
            [
                [901, [11499, 795], 'courtesy', '礼儀', []],
                ['be treated with <courtesy>', '礼儀', 'れいぎ']
            ],
            [
                [902, [10731, 796], 'trial', '試み、裁判', []],
                ['<trial> and error', '試行', 'しこう']
            ],
            [
                [903, [10982, 797], 'justice', '正義', []],
                ['a strong sense of justice', '正義', 'せいぎ']
            ],
            [
                [904, [10061, 798], 'judge', '～を判断する', []],
                ['<judge> a person by his looks', '判断する', 'はんだんする']
            ],
            [
                [905, [11812, 799], 'jury', '陪審員', []],
                ['the judge and <jury>', '陪審員', 'ばいしんいん']
            ],
            [
                [906, [11717, 800], 'testify', '証言する', []],
                ['<testify> in court', '証言する', 'しょうげんする']
            ],
            [
                [907, [10792, 801], 'guilty', '有罪の、罪の意識がある', []],
                ['feel <guilty> about leaving him', '罪の意識', 'つみのいしき']
            ],
            [
                [908, [10824, 802], 'innocent', '無罪の、罪のない、無邪気な', []],
                ['blame <innocent> people', '罪のない', 'つみのない']
            ],
            [
                [909, [12204, 803], 'sentence', '判決', []],
                ['a death <sentence>', '判決', 'はんけつ']
            ],
            [
                [910, [10979, 804], 'prison', '刑務所', []],
                ['spend two years in <prison>', '刑務所', 'けいむしょ']
            ]
        ],
        ['犯罪防止・合法・違法', [
                [911, [805], 'deter', '抑止する', []],
                ['<deter> crime', '抑止する', 'よくしする']
            ],
            [
                [912, [10457, 806], 'violence', '暴力', []],
                ['<violence> on TV', '暴力', 'ぼうりょく']
            ],
            [
                [913, [11143, 807], 'aggressive', '攻撃的な', []],
                ["children's <aggressive> behavior", '攻撃的な', 'こうげきてきな']
            ],
            [
                [914, [10306, 808], 'legal', '合法の、法律の', []],
                ['the British <legal> system', '法律の', 'ほうりつの']
            ],
            [
                [915, [11228, 809], 'violate', '破る、違反する', []],
                ['<violate> the law', '違反する', 'いはんする']
            ]
        ]
    ],
    ['数・量', ['uni : 1', [
                [916, [30], 'unique', '(～に)特有の(to～), 独自の； 唯一の', []],
                ['This tofu burger is <unique> to this restaurant.', '独自の', 'どくじの']
            ],
            [
                [917, [10897, 810], 'unite', '～を団結させる', []],
                ['<unite> the Arab world', '団結させる', 'だんけつさせる']
            ],
            [
                [918, [811], 'unify', '〜を統合する', []],
                ['Some economists stress the needs to create a <unified> Asian currency.', '統合された', 'とうごうされた']
            ],
            [
                [919, [812], 'uniform', '一様な、均一の', []],
                ['These boxes are <uniform> in size and color.', '均一だ', 'きんいつだ']
            ],
            [
                [920, [10510], 'universe', '宇宙', [
                    [813, 'universal', '普遍的な']
                ]],
                ['stars in the <universe>', '宇宙', 'うちゅう']
            ],
            [
                [921, [10947, 814], 'union', '組合', []],
                ['a labor <union>', '組合', 'くみあい']
            ],
            [
                [922, [815], 'reunion', '再開、同窓会', []],
                ['a school <reunion>', '同窓会', 'どうそうかい']
            ],
            [
                [923, [10942], 'unit', '単位', []],
                ['the family as a social <unit>', '単位', 'たんい']
            ]
        ],
        ['sol, mono : 1', [
                [924, [527], 'monologue', '独白', []],
                ['She delivered a powerful <monologue>.', '独白', 'どくはく']
            ],
            [
                [925, [10260], 'bilingual', '二言語使用の', []],
                ['<bilingual> children', '二言語使用の', 'にげんごしようの']
            ],
            [
                [926, [11663, 816], 'sole', '唯一の', []],
                ['the <sole> survivor', '唯一の', 'ゆいいつの']
            ],
            [
                [927, [11655], 'solitary', '孤独な', [
                    [817, 'solitude', '孤独']
                ]],
                ['a <solitary> old man', '孤独な', 'こどくな']
            ],
            [
                [928, [818], 'console', '慰める', []],
                ['The sole reason he came to the party was to <console> his broken heart.', '慰める', 'なぐさめる']
            ],
            [
                [929, [11985, 819], 'monotonous', '単調な', []],
                ['a <monotonous> school life', '単調な', 'たんちょうな']
            ],
            [
                [930, [11851, 820], 'monopoly', '独占', []],
                ['a <monopoly> on the tea market', '独占', 'どくせん']
            ],
            [
                [931, [10132, 821], 'combine', '～を結合させる', []],
                ['<combine> song and dance', '結合させる', 'けつごうさせる']
            ]
        ],
        ['bi, du : 2', [
                [932, [822], 'dual', '２つの、二重の', []],
                ['<Dual> citizenship is not permitted under Japanese law.', '二重の', 'にじゅうの']
            ],
            [
                [933, [823], 'duplicate', '複製する', []],
                ['The DNA is <duplicated> every time a cell divides.', '複製される', 'ふくせいされる']
            ]
        ],
        ['num : 数・無限', [
                [934, [11121, 824], 'numerous', 'たくさんの', []],
                ['<numerous> species of birds', 'たくさんの', 'たくさんの']
            ],
            [
                [935, [11968, 825], 'innumerable', '無数の', []],
                ['differ in <innumerable> ways', '無数の', 'むすうの']
            ],
            [
                [936, [11636, 826], 'infinite', '無限の', []],
                ['an <infinite> number of stars', '無限の', 'むげんの']
            ],
            [
                [937, [11687], 'countless', '無数の', []],
                ['<countless> species of insects', '無数の', 'むすうの']
            ]
        ],
        ['総数・総量', [
                [938, [10252, 827], 'quantity', '量', []],
                ['large <quantities> of data', '量', 'りょう']
            ],
            [
                [939, [10406, 828], 'quality', '質', []],
                ['the sound <quality> of the CD', '質', 'しつ']
            ],
            [
                [940, [10949, 829], 'volume', '冊', []],
                ['a 10,000-<volume> library', '冊', 'さつ']
            ],
            [
                [941, [12099, 830], 'amount', '量、合計、等しい', []],
                ['a large <amount> of water', '量', 'りょう'],
                ['The expenses <amount> to $90.', '合計', 'ごうけい'],
                ['This act <amounts> to stealing.', '等しい', 'ひとしい']
            ],
            [
                [942, [10708, 831], 'sum', '金額、合計、要約', []],
                ['a large <sum> of money', '額', 'がく']
            ],
            [
                [943, [832], 'total', '完全な； 合計の：合計', []],
                ['Our school has students in <total>.', '合計で', 'ごうけいで']
            ]
        ],
        ['大きい', [
                [944, [11120, 833], 'vast', '広大な', []],
                ['the <vast> land of Russia', '広大な', 'こうだいな']
            ],
            [
                [945, [10538, 834], 'huge', '巨大な', []],
                ['a <huge> city', '巨大な', 'きょだいな']
            ],
            [
                [946, [10556, 835], 'enormous', '莫大な', []],
                ['an <enormous> amount of damage', 'ばく大な', 'ばくだいな']
            ],
            [
                [947, [11652, 836], 'immense', '莫大な', []],
                ['an <immense> amount of information', '莫大な', 'ばくだいな']
            ]
        ],
        ['豊富な・十分な', [
                [948, [11166, 837], 'abundant', '豊富な', []],
                ['an <abundant> supply of food', '豊富な', 'ほうふな']
            ],
            [
                [949, [11986, 838], 'ample', '豊富に', []],
                ['have <ample> opportunity to learn', '豊富に', 'ほうふに']
            ],
            [
                [950, [11666, 839], 'affluent', '裕福な', []],
                ['an <affluent> society', '裕福な', 'ゆうふくな']
            ],
            [
                [951, [10567, 840], 'sufficient', '十分な', []],
                ['pay <sufficient> attention', '十分な', 'じゅうぶんな']
            ],
            [
                [952, [11131, 841], 'adequate', '十分な', []],
                ['provide <adequate> food', '十分な', 'じゅうぶんな']
            ],
            [
                [953, [10515], 'plenty', '十分な', []],
                ['have <plenty> of time', '十分な', 'じゅうぶんな']
            ]
        ],
        ['大・小', [
                [954, [12095, 842], 'major', '主要な、専攻する', [
                    [10460, 'majority', '大多数']
                ]],
                ['a <major> problem', '主要な', 'しゅような'],
                ['<major> in economics', '専攻する', 'せんこうする']
            ],
            [
                [955, [10544, 843], 'minor', '小さい', []],
                ['a <minor> problem', '小さい', 'ちいさい']
            ],
            [
                [956, [844], 'maximum', '最大', []],
                ['to the <maximum>', '最大', 'さいだい']
            ],
            [
                [957, [10815, 845], 'minimum', '最小限の', []],
                ['<minimum> effort', '最小の', 'さいしょうの']
            ],
            [
                [958, [11635, 846], 'magnificent', 'すばらしい', []],
                ['a <magnificent> view', 'すばらしい', 'すばらしい']
            ],
            [
                [959, [10696, 847], 'diminish', '減少する、衰える、～を減らす', []],
                ['His power <diminished>.', '衰えた', 'おとろえた']
            ],
            [
                [960, [12010, 848], 'utmost', '最も', []],
                ['be of the <utmost> importance', '最も', 'もっとも']
            ],
            [
                [961, [10595], 'largely', '主に', []],
                ['<largely> because of the problem', '主に', 'おもに']
            ]
        ],
        ['増減', [
                [962, [397], 'decline', '衰退する； ～(招待・申し出)を断る', []],
                ['My memory began to <decline>.', '低下し', 'ていかし']
            ],
            [
                [963, [10003, 849], 'increase', '増える、～を増やす', []],
                ['<increase> by 20%', '増加する', 'ぞうかする']
            ],
            [
                [964, [850], 'decrease', '減る； 減らす； 減少', []],
                ['The birthrate is on the <decrease>.', '減少', 'げんしょう']
            ],
            [
                [965, [10039, 851], 'reduce', '～を減らす', []],
                ['<reduce> energy costs', '減らす', 'へらす']
            ],
            [
                [966, [11347, 852], 'accumulate', '蓄積する', []],
                ['<accumulate> knowledge', '蓄積する', 'ちくせきする']
            ]
        ],
        ['算数・数値', [
                [967, [91], 'divide', '～を分割する', []],
                ['<divide> the cake into six pieces', '分割する', 'ぶんかつする']
            ],
            [
                [968, [10337, 853], 'add', '～を加える', []],
                ['<add> some milk to the soup', '加える', 'くわえる']
            ],
            [
                [969, [854], 'subtract', '引く', []],
                ['To find the answer, <subtract> 7 from 12.', '引く', 'ひく']
            ],
            [
                [970, [11263, 855], 'multiply', '増やす、増える、掛ける', []],
                ['<multiply> by five', '増える', 'ふえる']
            ],
            [
                [971, [856], 'multitude', '多数', []],
                ['a <multitude> of people', '多数', 'たすう']
            ],
            [
                [972, [10879, 857], 'calculate', '～を計算する', []],
                ['<calculate> the cost', '計算する', 'けいさんする']
            ],
            [
                [973, [858], 'average', '平均の、普通の； 平均', []],
                ['On <average>, woman live five years longer than men.', '平均', 'へいきん']
            ],
            [
                [974, [10845, 859], 'altogether', '完全に', []],
                ['disappear <altogether>', '完全に', 'かんぜんに']
            ],
            [
                [975, [10809, 860], 'overall', '全面的な、全体的な', []],
                ['part of an <overall> plan', '全体的な', 'ぜんたいてきな']
            ],
            [
                [976, [10597, 861], 'approximately', 'およそ', []],
                ['<approximately> 10,000 years ago', 'およそ', 'およそ']
            ],
            [
                [977, [11599], 'equation', '方程式', []],
                ['solve a difficult <equation>', '方程式', 'ほうていしき']
            ],
            [
                [978, [11938], 'digit', '桁', []],
                ['a four-<digit> number', '桁', 'けた']
            ]
        ]
    ],
    ['思考・認識・知', ['理性', [
                [979, [11155, 862], 'rational', '理性的な', []],
                ['<rational> thought', '理性的な', 'りせいてきな']
            ],
            [
                [980, [12072, 863], 'reason', '推理する、理性', [
                    [10292, 'reasonable', '理にかなった']
                ]],
                ['the ability to <reason>', '推理する', 'すいりする'],
                ['He lost his <reason>.', '理性', 'りせい']
            ],
            [
                [981, [11455, 864], 'beast', '野獣', []],
                ['Beauty and the Beast', '野獣', 'やじゅう']
            ],
            [
                [982, [11960], 'brutal', '残忍な', [
                    [865, 'brute', '獣、動物']
                ]],
                ['a <brutal> murder', '残忍な', 'ざんにんな']
            ],
            [
                [983, [11988], 'savage', '野蛮な', []],
                ['<savage> violence', '野蛮な', 'やばんな']
            ]
        ],
        ['概念・偏見', [
                [984, [11111], 'concept', '概念', []],
                ['the <concept> of time', '概念', 'がいねん']
            ],
            [
                [985, [10499, 866], 'notion', '概念', []],
                ['the <notion> of freedom', '概念', 'がいねん']
            ],
            [
                [986, [11134, 867], 'abstract', '抽象的な', []],
                ['an <abstract> concept', '抽象的な', 'ちゅうしょうてきな']
            ],
            [
                [987, [10806, 868], 'concrete', '具体的な', []],
                ['give a <concrete> example', '具体的な', 'ぐたいてきな']
            ],
            [
                [988, [10774, 869], 'stereotype', '典型的なイメージ、類型、固定観念', []],
                ['a <stereotype> of Americans', '型にはまったイメージ', 'かたにはまったいめえじ']
            ],
            [
                [989, [10742, 870], 'prejudice', '偏見', []],
                ['<prejudice> against women', '偏見', 'へんけん']
            ],
            [
                [990, [11507, 871], 'bias', '偏見', []],
                ['have a personal <bias> against women', '偏見', 'へんけん']
            ]
        ],
        ['考え・意見', [
                [991, [12090, 872], 'view', '見解、考える', []],
                ['my <view> of education', '見解', 'けんかい'],
                ['<view> Japan as a safe society', '考える', 'かんがえる']
            ],
            [
                [992, [10741, 873], 'review', '再検討', []],
                ['a <review> of the law', '再検討', 'さいけんとう']
            ],
            [
                [993, [874], 'viewpoint', '観点、見地', []],
                ['from a historical <viewpoint>', '観点', 'かんてん']
            ],
            [
                [994, [875], 'standpoint', '立場、観点', []],
                ["From my <standpoint>, it's unacceptable.", '立場', 'たちば']
            ],
            [
                [995, [11314, 876], 'outlook', '態度、考え方、見通し、見込み', []],
                ['a positive <outlook> on life', '考え方', 'かんがえかた']
            ]
        ],
        ['楽観・悲観', [
                [996, [11161, 877], 'optimistic', '楽観的な', []],
                ['an <optimistic> view of the future', '楽観的な', 'らっかんてきな']
            ],
            [
                [997, [878], 'pessimistic', '悲観的な', []],
                ["Don't be so <pessimistic>.", '悲観的に', 'ひかんてきに']
            ]
        ],
        ['意識・sci : 知る', [
                [998, [10534, 879], 'aware', '気づいている', []],
                ['be <aware> of the danger', '気づいている', 'きづいている']
            ],
            [
                [999, [11689, 880], 'alert', '用心する', []],
                ['be <alert> to every sound', '用心する', 'ようじんする']
            ],
            [
                [1000, [10287, 881], 'conscious', '意識している', []],
                ['health-<conscious> Americans', '意識する', 'いしきする']
            ],
            [
                [1001, [11471, 882], 'conscience', '良心', []],
                ['Follow your <conscience>.', '良心', 'りょうしん']
            ],
            [
                [1002, [10157], 'alarm', '～をぎょっとさせる、おびえさせる', []],
                ['be <alarmed> by the noise', 'ぎょっとする', 'ぎょっとする']
            ],
            [
                [1003, [10301], 'awake', '目を覚まして', []],
                ['stay <awake> all night', '目が覚めて', 'めがさめて']
            ]
        ],
        ['gn / know : 知る', [
                [1004, [20], 'ignore', '～を無視する, ～を知らないふりをする', []],
                ["<ignore> the doctor's advice", '無視する', 'むしする']
            ],
            [
                [1005, [10030, 883], 'recognize', '～を認める', []],
                ['<recognize> the importance', '認める', 'みとめる']
            ],
            [
                [1006, [11192], 'cognitive', '認知', [
                    [884, 'cognition', '認識']
                ]],
                ["children's <cognitive> abilities", '認知', 'にんち']
            ],
            [
                [1007, [10397, 885], 'knowledge', '知識', []],
                ['have little <knowledge> of English', '知識', 'ちしき']
            ],
            [
                [1008, [11215, 886], 'acknowledge', '認める', []],
                ['<acknowledge> that a problem exists', '認める', 'みとめる']
            ],
            [
                [1009, [10031], 'notice', '～に気づく', []],
                ['<notice> the color change', '気付く', 'きづく']
            ],
            [
                [1010, [11665], 'notable', '注目すべき', []],
                ['a <notable> exception', '注目すべき', 'ちゅうもくすべき']
            ]
        ],
        ['認識・同一性', [
            [1011, [10147, 887], 'identify', '～の正体をつきとめる、Aと共感する', []],
            ['<identify> people by their eyes', '本人確認をする', 'ほんにんかくにんをする']
        ]],
        ['知性・頭の良さ', [
                [1012, [10562], 'intellectual', '知的な', [
                    [888, 'intellect', '知性']
                ]],
                ['high <intellectual> ability', '知的', 'ちてき']
            ],
            [
                [1013, [889], 'intelligence', '知性； 諜報', []],
                ['Still, women are evaluated in terms of their looks, not of their <intelligence>.', '知性', 'ちせい']
            ],
            [
                [1014, [890], 'intelligible', '理解可能な、判読可能な', []],
                ['She was so drunk that she was hardly <intelligible>.', '理解できなかった', 'りかいできなかった']
            ],
            [
                [1015, [10937, 891], 'wisdom', '知恵', []],
                ['knowledge and <wisdom>', '知恵', 'ちえ']
            ],
            [
                [1016, [12158, 892], 'bright', '賢い', []],
                ['Meg is a <bright> girl.', '賢い', 'かしこい']
            ],
            [
                [1017, [10830, 893], 'brilliant', 'すばらしい', []],
                ["That's a <brilliant> idea!", 'すばらしい', 'すばらしい']
            ],
            [
                [1018, [894], 'smart', '利口な', []],
                ['He is a <smart> kid.', '賢い', 'かしこい']
            ],
            [
                [1019, [11517, 895], 'wit', '機知', []],
                ['a conversation full of <wit>', '機知', 'きち']
            ],
            [
                [1020, [11010, 896], 'insight', '洞察', []],
                ['a deep <insight> into life', '洞察', 'どうさつ']
            ],
            [
                [1021, [10997, 897], 'philosophy', '哲学', []],
                ['his <philosophy> of life', '哲学', 'てつがく']
            ]
        ],
        ['理解・考慮', [
                [1022, [11260, 898], 'comprehend', '理解する', [
                    [11637, 'comprehensive', '包括的な']
                ]],
                ['the ability to <comprehend> language', '理解する', 'りかいする']
            ],
            [
                [1023, [10002, 899], 'consider', '～を考慮する', [
                    [10560, 'considerable', 'かなりの']
                ]],
                ['<consider> the problem seriously', '考える', 'かんがえる']
            ],
            [
                [1024, [11393], 'contemplate', '考える', [
                    [900, 'contemplation', '熟考、沈思']
                ]],
                ['<contemplate> marrying him', '考える', 'かんがえる']
            ],
            [
                [1025, [11893], 'meditation', '瞑想', [
                    [901, 'meditate', '瞑想する、深く考える']
                ]],
                ['Buddhist <meditation>', '瞑想', 'めいそう']
            ]
        ],
        ['思い出す・知らせる', [
                [1026, [11902], 'recollection', '記憶', [
                    [902, 'recollect', '思い出す']
                ]],
                ['have no <recollection> of the past', '記憶', 'きおく']
            ],
            [
                [1027, [10381, 903], 'recall', '～を思い出す', []],
                ['<recall> the good old days', '思い出す', 'おもいだす']
            ],
            [
                [1028, [10367, 904], 'inform', '～に知らせる', []],
                ["<inform> him of his son's success", '知らせる', 'しらせる']
            ],
            [
                [1029, [10092, 905], 'remind', 'AにBを思い出させる', []],
                ['<remind> him of the promise', '思い出させる', 'おもいださせる']
            ]
        ]
    ],
    ['人・人生', ['幼児から大人へ', [
                [1030, [10520, 906], 'infant', '幼児', []],
                ['the mother-<infant> relationship', '幼児', 'ようじ']
            ],
            [
                [1031, [907], 'toddler', '幼児', []],
                ['The <toddler> is learning to walk.', '幼児', 'ようじ']
            ],
            [
                [1032, [11177, 908], 'adolescent', '思春期の', []],
                ['<adolescent> boys and girls', '思春期の', 'ししゅんきの']
            ],
            [
                [1033, [11992, 909], 'juvenile', '青少年の', []],
                ['a rise in <juvenile> crime', '青少年の', 'せいしょうねんの']
            ],
            [
                [1034, [910], 'adult', '大人； 大人の', []],
                ['grow up to be an <adult>', '大人', 'おとな']
            ],
            [
                [1035, [10572, 911], 'elderly', '高齢の', []],
                ['the care of <elderly> people', '高齢', 'こうれい']
            ],
            [
                [1036, [10216], 'twin', '双子の一方、双生児', []],
                ['a pair of identical <twins>', '双生児', 'そうせいじ']
            ],
            [
                [1037, [10310], 'senior', '上級の、先輩の', []],
                ['a <senior> member of the club', '先輩の', 'せんぱいの']
            ],
            [
                [1038, [10480], 'youth', '若者', []],
                ['modern <youth>', '若者', 'わかもの']
            ],
            [
                [1039, [11075], 'youngster', '子供', []],
                ["today's <youngsters>", '子供', 'こども']
            ],
            [
                [1040, [11922], 'orphan', '孤児', []],
                ['look after <orphans>', '孤児', 'こじ']
            ]
        ],
        ['成熟', [
                [1041, [10805, 912], 'mature', '成熟した', []],
                ['<mature> adults', '成熟した', 'せいじゅくした']
            ],
            [
                [1042, [11334, 913], 'pregnant', '妊娠している', []],
                ['his <pregnant> wife', '妊娠している', 'にんしんしている']
            ],
            [
                [1043, [914], 'maternity', '母性', []],
                ['take <maternity> leave', '出産の', 'しゅっさんの']
            ],
            [
                [1044, [915], 'birthrate', '出生率', []],
                ['<Birthrates> are decreasing in most developed countries.', '出生率', 'しゅっしょうりつ']
            ],
            [
                [1045, [916], 'abortion', '妊娠中絶', []],
                ['The issue of <abortion> is controversial.', '妊娠中絶', 'にんしんちゅうぜつ']
            ],
            [
                [1046, [10748, 917], 'divorce', '離婚', []],
                ['an increase in the <divorce> rate', '離婚', 'りこん']
            ],
            [
                [1047, [10169, 918], 'celebrate', '～を祝う', []],
                ['<celebrate> his birthday', '祝う', 'いわう']
            ],
            [
                [1048, [11575], 'bride', '花嫁', []],
                ['the <bride> and her father', '花嫁', 'はなよめ']
            ]
        ],
        ['職歴, 引退, そして死へ', [
                [1049, [10454, 919], 'career', '経歴', []],
                ['a long <career> as an actress', '経歴', 'けいれき']
            ],
            [
                [1050, [10239, 920], 'background', '背景、生い立ち、経歴', []],
                ['people from different <backgrounds>', '経歴', 'けいれき']
            ],
            [
                [1051, [10479, 921], 'status', '地位', []],
                ['the social <status> of women', '地位', 'ちい']
            ],
            [
                [1052, [11203, 922], 'resign', '辞職する', []],
                ['The president will <resign> soon.', '辞任する', 'じにんする']
            ],
            [
                [1053, [10363, 923], 'retire', '辞める', []],
                ['<retire> from work at sixty', '辞める', 'やめる']
            ],
            [
                [1054, [10389, 924], 'quit', '～をやめる', []],
                ['<quit> smoking', 'やめる', 'やめる']
            ],
            [
                [1055, [925], 'farewell', 'お別れ', []],
                ['a <farewell> party', 'お別れ', 'おわかれ']
            ],
            [
                [1056, [11525, 926], 'pension', '年金', []],
                ['the old-age <pension>', '年金', 'ねんきん']
            ],
            [
                [1057, [11913, 927], 'funeral', '葬式', []],
                ['wedding and <funerals>', '葬式', 'そうしき']
            ],
            [
                [1058, [11556, 928], 'tomb', '墓', []],
                ['the <tomb> of the unknown soldier', '墓', 'はか']
            ],
            [
                [1059, [10860, 929], 'bury', '～を埋める', []],
                ['<bury> treasure', '埋める', 'うめる']
            ],
            [
                [1060, [930], 'coffin', '棺桶', []],
                ['She came home in a <coffin>.', '棺桶', 'かんおけ']
            ],
            [
                [1061, [931], 'corpse', '死体', []],
                ['An unidentified <corpse> was discovered.', '死体', 'したい']
            ],
            [
                [1062, [11606], 'mortality', '死亡', [
                    [932, 'mortal', '死ぬ運命にある']
                ]],
                ["America's infant <mortality> rate", '死亡', 'しぼう']
            ],
            [
                [1063, [10985], 'heaven', '天国', []],
                ['go to <heaven>', '天国', 'てんごく']
            ]
        ],
        ['死後・遺産', [
                [1064, [10896, 933], 'inherit', '～を受け継ぐ', []],
                ['<inherit> genes from our parents', '受け継ぐ', 'うけつぐ']
            ],
            [
                [1065, [11796, 934], 'heir', '相続人', []],
                ['the <heir> to a fortune', '相続人', 'そうぞくにん']
            ],
            [
                [1066, [11059, 935], 'heritage', '遺産', []],
                ['Japanese cultural <heritage>', '遺産', 'いさん']
            ],
            [
                [1067, [11839, 936], 'legacy', '遺産', []],
                ['a <legacy> of the Renaissance', '遺産', 'いさん']
            ],
            [
                [1068, [11473, 937], 'offspring', '子孫', []],
                ['produce <offspring>', '子孫', 'しそん']
            ]
        ],
        ['運命', [
                [1069, [11139, 938], 'inevitable', '避けられない', []],
                ['Change is <inevitable>.', '避けられない', 'さけられない']
            ],
            [
                [1070, [11012, 939], 'fate', '運命', []],
                ['decide the <fate> of the world', '運命', 'うんめい']
            ]
        ],
        ['個人', [
                [1071, [10181, 940], 'individual', '個人', []],
                ['<individuals> in society', '個人', 'こじん']
            ],
            [
                [1072, [941], 'personal', '個人的な', []],
                ['She never answers <personal> questions, and she keeps a certain distance from her friend', '個人的な', 'こじんてきな']
            ],
            [
                [1073, [10268, 942], 'private', '個人の、私的な', []],
                ['her <private> life', '私', 'し']
            ],
            [
                [1074, [943], 'self', '自己', [
                    [11167, 'selfish', '利己的な']
                ]],
                ['Children build up their concept of <self> through play.', '自己', 'じこ']
            ],
            [
                [1075, [10794, 944], 'fellow', '仲間の', []],
                ['his <fellow> workers', '仲間', 'なかま']
            ],
            [
                [1076, [10444], 'mate', '連れ合い', []],
                ['look for a <mate>', '連れ合い', 'つれあい']
            ]
        ],
        ['男女', [
                [1077, [10274, 945], 'male', '男の', []],
                ['<male> workers', '男性の', 'だんせいの']
            ],
            [
                [1078, [946], 'female', '女性の； 女性', []],
                ['the <female> brain', '女性の', 'じょせいの']
            ],
            [
                [1079, [947], 'masculine', '男の、男らしい', []],
                ['a <masculine> occupation', '男らしい', 'おとこらしい']
            ],
            [
                [1080, [11669, 948], 'feminine', '女性の', []],
                ['<feminine> beauty', '女性の', 'じょせいの']
            ],
            [
                [1081, [11096, 949], 'gender', '性別', []],
                ['age and <gender>', '性別', 'せいべつ']
            ],
            [
                [1082, [950], 'sibling', '兄弟', []],
                ['Children with older <siblings> tend to have greater social skills.', '兄弟', 'きょうだい']
            ],
            [
                [1083, [11604, 951], 'spouse', '配偶者', []],
                ['rely on your <spouse>', '配偶者', 'はいぐうしゃ']
            ],
            [
                [1084, [11536], 'nephew', '甥', []],
                ['his son and <nephew>', '甥', 'おい']
            ]
        ]
    ],
    ['人間関係', ['社会', [
                [1085, [10177, 952], 'society', '社会、協会、団体', []],
                ['the problems of modern <society>', '社会', 'しゃかい']
            ],
            [
                [1086, [953], 'community', '地域社会、共同体', []],
                ['a local <community>', '地域社会', 'ちいきしゃかい']
            ],
            [
                [1087, [954], 'communicate', '(～と)意志の疎通をする(with)', []],
                ['By connecting to the Internet, you can <communicate> with people across the world.', '意志の疎通をする', 'いしのそつうをする']
            ]
        ],
        ['知人・親密・敵対', [
                [1088, [10757], 'acquaintance', '知人', [
                    [955, 'acquainted', '知り合いである']
                ]],
                ['friends and <acquaintances>', '知人', 'ちじん']
            ],
            [
                [1089, [10814, 956], 'intimate', '親密な', []],
                ['an <intimate> relationship', '親密な', 'しんみつな']
            ],
            [
                [1090, [11618, 957], 'hostile', '反感を持つ', []],
                ['be <hostile> to the government', '反感を持つ', 'はんかんをもつ']
            ],
            [
                [1091, [11822, 958], 'hospitality', 'もてなし', []],
                ['receive warm <hospitality>', 'もてなし', 'もてなし']
            ]
        ],
        ['同情・嫉妬', [
                [1092, [10946, 959], 'sympathy', '同情', []],
                ['feel <sympathy> for the victim', '同情', 'どうじょう']
            ],
            [
                [1093, [11873, 960], 'empathy', '共感', []],
                ['<empathy> for others', '共感', 'きょうかん']
            ],
            [
                [1094, [12151, 961], 'pity', '同情、残念なこと', []],
                ['feel <pity> for the victims', '同情', 'どうじょう'],
                ["It's a <pity> that he can't come.", '残念なこと', 'ざんねんなこと']
            ],
            [
                [1095, [11316, 962], 'mercy', '慈悲、情け', []],
                ['war without <mercy>', '情け', 'なさけ']
            ],
            [
                [1096, [10686, 963], 'envy', '～をうらやむ', []],
                ['<envy> the rich', 'うらやむ', 'うらやむ']
            ],
            [
                [1097, [11333, 964], 'jealous', '嫉妬深い、羨ましい', []],
                ['be <jealous> of his success', 'ねたむ', 'ねたむ']
            ]
        ],
        ['軽蔑・嫌悪', [
                [1098, [11907, 965], 'contempt', '軽蔑', []],
                ['<contempt> for authority', '軽蔑', 'けいべつ']
            ],
            [
                [1099, [11803, 966], 'scorn', '軽蔑', []],
                ['a look of <scorn>', '軽蔑', 'けいべつ']
            ],
            [
                [1100, [11430, 967], 'despise', '軽蔑する', []],
                ["Don't <despise> poor people.", '軽蔑する', 'けいべつする']
            ],
            [
                [1101, [968], 'look down on', '軽蔑する', []],
                ['<look down on> the homeless', '軽蔑する', 'けいべつする']
            ],
            [
                [1102, [11287, 969], 'disgust', '嫌悪', []],
                ['look at them in <disgust>', '反感', 'はんかん']
            ],
            [
                [1103, [11869, 970], 'hatred', '憎しみ', []],
                ['<hatred> of war', '憎しみ', 'にくしみ']
            ],
            [
                [1104, [11014, 971], 'insult', '侮辱', []],
                ['an <insult> to women', '侮辱', 'ぶじょく']
            ],
            [
                [1105, [11779, 972], 'humiliate', '恥をかかせる', []],
                ['<humiliate> him in front of others', '恥をかかせる', 'はじをかかせる']
            ],
            [
                [1106, [11877, 973], 'curse', '災いのもと', []],
                ['Wealth can be a <curse>.', '災いのもと', 'わざわいのもと']
            ]
        ],
        ['耐える・妥協', [
                [1107, [10865, 974], 'endure', '～に耐える', []],
                ['<endure> great pain', '耐える', 'たえる']
            ],
            [
                [1108, [975], 'durable', '耐久性のある', [
                    [11880, 'duration', '期間']
                ]],
                ['The shoes are <durable> and long-lasting.', '耐久性がある', 'たいきゅうせいがある']
            ],
            [
                [1109, [976], 'put up with', '耐える、我慢する', []],
                ['During my flight, I had to <put up with> endless snoring from the man seated next to me.', '耐え', 'たえ']
            ],
            [
                [1110, [11288, 977], 'compromise', '妥協', []],
                ['make a small <compromise>', '妥協', 'だきょう']
            ]
        ],
        ['賞賛・お世辞・祝福', [
                [1111, [10371, 978], 'praise', '～をほめる', []],
                ['<praise> him for his work', 'ほめる', 'ほめる']
            ],
            [
                [1112, [10769, 979], 'award', '賞', []],
                ['the <Academy> Award for Best Picture', '賞', 'しょう']
            ],
            [
                [1113, [10235, 980], 'reward', '報酬', []],
                ['a <reward> for hard work', '報酬', 'ほうしゅう']
            ],
            [
                [1114, [11468, 981], 'compliment', 'ほめ言葉', []],
                ['Thank you for the <compliment>.', 'ほめ言葉', 'ほめことば']
            ],
            [
                [1115, [11786, 982], 'flatter', 'お世辞を言う', []],
                ['<flatter> the boss', 'おせじを言う', 'おせじをいう']
            ],
            [
                [1116, [10160, 983], 'spoil', '～を台無しにする', []],
                ['<spoil> the party', '台無しにする', 'だいなしにする']
            ],
            [
                [1117, [11226, 984], 'congratulate', '祝福する', []],
                ['<congratulate> you on your success', '祝福する', 'しゅくふくする']
            ],
            [
                [1118, [10732], 'honor', '名誉', []],
                ["It's a great <honor> to work here.", '名誉', 'めいよ']
            ]
        ],
        ['感謝', [
                [1119, [11163, 985], 'grateful', '感謝している', []],
                ["I'm <grateful> for your help.", '感謝している', 'かんしゃしている']
            ],
            [
                [1120, [12131, 986], 'appreciate', '高く評価する、鑑賞する、感謝する', []],
                ['<appreciate> his talent', '高く評価する', 'たかくひょうかする'],
                ['<appreciate> music', '鑑賞する', 'かんしょうする'],
                ['I <appreciate> your help.', '感謝する', 'かんしゃする']
            ],
            [
                [1121, [987], 'gratitude', '感謝', []],
                ['She expressed her <gratitude> to him.', '感謝', 'かんしゃ']
            ]
        ],
        ['関心・敬愛', [
                [1122, [10114, 988], 'admire', '～に感心する', []],
                ['<admire> her work', '感嘆する', 'かんたんする']
            ],
            [
                [1123, [11485], 'self-esteem', '自尊心', [
                    [989, 'esteem', '尊敬する、尊重する']
                ]],
                ['people with low <self-esteem>', '自尊心', 'じそんしん']
            ],
            [
                [1124, [11763, 990], 'adore', '崇拝する', []],
                ['<adore> him as a god', '崇拝する', 'すうはいする']
            ],
            [
                [1125, [11446, 991], 'dignity', '尊厳', []],
                ['death with <dignity>', '尊厳', 'そんげん']
            ]
        ],
        ['努力・裏切り', [
                [1126, [10895, 992], 'cooperate', '協力する', []],
                ['<cooperate> with each other', '協力する', 'きょうりょくする']
            ],
            [
                [1127, [11114, 993], 'loyal', '忠実な', []],
                ['a worker <loyal> to the company', '忠実な', 'ちゅうじつな']
            ],
            [
                [1128, [11235, 994], 'betray', '裏切る、もらす', []],
                ['<betray> a good friend', '裏切る', 'うらぎる']
            ]
        ],
        ['いじめ・迷惑', [
                [1129, [995], 'make fun of', 'からかう', []],
                ["Everyone in the class <made fun of> the girl's hairstyle, but she didn't seem to care.", 'からかった', 'からかった']
            ],
            [
                [1130, [11435, 996], 'tease', 'からかう', []],
                ["Don't <tease> me!", 'からかう', 'からかう']
            ],
            [
                [1131, [11093], 'bullying', 'いじめ', [
                    [997, 'bully', 'いじめる']
                ]],
                ['<bullying> in schools', 'いじめ', 'いじめ']
            ],
            [
                [1132, [10127, 998], 'bother', '～に面倒をかける、困らせる', []],
                ['Sorry to <bother> you, but …', 'おじゃまして', 'おじゃまして']
            ],
            [
                [1133, [11518, 999], 'nuisance', '迷惑', []],
                ['a <nuisance> to others', '迷惑', 'めいわく']
            ],
            [
                [1134, [10692], 'kid', '冗談を言う、からかう', []],
                ['You must be <kidding>.', '冗談', 'じょうだん']
            ]
        ]
    ],
    ['価値・基準・選択・出来事・参加', ['価値', [
                [1135, [10179, 1000], 'value', '価値', []],
                ['put a high <value> on education', '価値', 'かち']
            ],
            [
                [1136, [10265, 1001], 'worth', '～の価値がある', []],
                ['The book is <worth> reading.', '価値がある', 'かちがある']
            ],
            [
                [1137, [10926, 1002], 'deserve', '当然だ', []],
                ['<deserve> to be punished', '当然だ', 'とうぜんだ']
            ],
            [
                [1138, [11113], 'precious', '貴重な', []],
                ['<precious> jewels', '貴重な', 'きちょうな']
            ]
        ],
        ['大事にする', [
                [1139, [11245, 1003], 'cherish', '胸に抱く', []],
                ['<cherish> a dream', '胸に抱く', 'むねにだく']
            ],
            [
                [1140, [10705, 1004], 'treasure', '財宝', []],
                ['discover <treasure>', '財宝', 'ざいほう']
            ]
        ],
        ['評価・測定', [
                [1141, [10906, 1005], 'evaluate', '～を評価する', []],
                ['<evaluate> online information', '評価する', 'ひょうかする']
            ],
            [
                [1142, [12132, 1006], 'measure', '手段、程度', []],
                ['take strong <measures>', '手段', 'しゅだん'],
                ['a <measure> of respect', '程度', 'ていど']
            ],
            [
                [1143, [11380, 1007], 'assess', '評価する', []],
                ["<assess> students' ability", '評価する', 'ひょうかする']
            ]
        ],
        ['基準', [
                [1144, [10424, 1008], 'standard', '水準', []],
                ['the <standard> of living', '水準', 'すいじゅん']
            ],
            [
                [1145, [11286, 1009], 'norm', '規範', []],
                ['the socially accepted <norm>', '規範', 'きはん']
            ],
            [
                [1146, [1010], 'criterion', '基準、指標', []],
                ['We select our staff members according to very strict <criteria>.', '基準', 'きじゅん']
            ],
            [
                [1147, [1011], 'test', 'テスト、判断基準', []],
                ['The <test> of a good movie is that you want to see it again and again.', '判断基準', 'はんだんきじゅん']
            ]
        ],
        ['分類', [
                [1148, [12085, 1012], 'class', '階級、授業', [
                    [10913, 'classify', '分類する']
                ]],
                ['middle-<class> families', '階級', 'かいきゅう'],
                ['sleep in <class>', '授業', 'じゅぎょう']
            ],
            [
                [1149, [12159, 1013], 'sort', '種、分類する', []],
                ['a <sort> of bird', '種', 'しゅ'],
                ['<sort> papers by date', '分類する', 'ぶんるいする']
            ]
        ],
        ['選択肢', [
                [1150, [10854, 1014], 'alter', '～を変える', []],
                ['<alter> the pattern of behavior', '変える', 'かえる']
            ],
            [
                [1151, [10245, 1015], 'alternative', '代わりのもの', []],
                ['an <alternative> to oil', '代わりになるもの', 'かわりになるもの']
            ],
            [
                [1152, [11032, 1016], 'option', '選択の自由', []],
                ['have no <option>', '選択の自由', 'せんたくのじゆう']
            ],
            [
                [1153, [10106, 1017], 'adopt', '～を採用する', []],
                ['<adopt> a new system', '採用する', 'さいようする']
            ]
        ],
        ['決定', [
                [1154, [10005, 1018], 'decide', '～することを決意する', []],
                ['<decide> to tell the truth', '決意をする', 'けついをする']
            ],
            [
                [1155, [10342, 1019], 'determine', '～を決定する', []],
                ['<determine> your future', '決定する', 'けっていする']
            ],
            [
                [1156, [10660, 1020], 'resolve', '〈問題など〉を解決する', []],
                ['<resolve> disagreements', '解決する', 'かいけつする']
            ]
        ],
        ['出来事', [
                [1157, [1021], 'event', '(重要な)出来事、事件', []],
                ['a historic <event>', '事件', 'じけん']
            ],
            [
                [1158, [11054, 1022], 'incident', '出来事', []],
                ['the small <incidents> of everyday life', '出来事', 'できごと']
            ],
            [
                [1159, [10599], 'accidentally', '偶然', [
                    [1023, 'accident', '(偶然の)事故、事件； 偶然']
                ]],
                ['<accidentally> discover an island', '偶然', 'ぐうぜん']
            ],
            [
                [1160, [10934, 1024], 'affair', '情勢', []],
                ['international <affairs>', '情勢', 'じょうせい']
            ]
        ],
        ['起こる', [
                [1161, [10862, 1025], 'occur', '起こる', []],
                ['This problem often <occurs>.', '起こる', 'おこる']
            ],
            [
                [1162, [1026], 'take place', '(予定されていたことが)起こる、行われる', []],
                ["Nobody came to the party since it <took place> on April Fool's Day.", '行われた', 'おこなわれた']
            ]
        ],
        ['状況・環境', [
                [1163, [1027], 'situation', '(物・人が置かれている)状況', []],
                ["John liked Cindy, but she fell in love with John's best friend, which made the <situation> complicated.", '状況', 'じょうきょう']
            ],
            [
                [1164, [12211, 1028], 'condition', '慣らされている、左右されている', []],
                ["We've been <conditioned> to believe that busier is better.", '慣らされている', 'ならされている'],
                ['Our lives are <conditioned> by technology.', '左右されている', 'さゆうされている']
            ],
            [
                [1165, [10977, 1029], 'circumstance', '状況', []],
                ['under any <circumstances>', '状況', 'じょうきょう']
            ]
        ],
        ['参加・従事', [
                [1166, [10166, 1030], 'participate', 'Aに参加する', []],
                ['<participate> in the meeting', '参加する', 'さんかする']
            ],
            [
                [1167, [1031], 'take part', '参加する(in～)', []],
                ['More than people <took part> [participated] in the marathon race.', '参加した', 'さんかした']
            ],
            [
                [1168, [10266], 'involved', '～に関係している、参加している', [
                    [1032, 'involve', '～を(必然的に)含む、関与させる、巻き込む、伴う、必要とする、もたらす']
                ]],
                ['be <involved> in the accident', '巻き込まれている', 'まきこまれている']
            ],
            [
                [1169, [1033], 'entail', '～を伴う、必要とする； を含意する', []],
                ['This job <entails> certain risks.', '伴う', 'ともなう']
            ],
            [
                [1170, [10122, 1034], 'engage', 'Aに従事する、Aを行う', []],
                ['<engage> in volunteer activities', '従事する', 'じゅうじする']
            ],
            [
                [1171, [11237, 1035], 'indulge', 'ふける', []],
                ['<indulge> in bad habits', 'ふける', 'ふける']
            ],
            [
                [1172, [10683, 1036], 'devote', '～をささげる', []],
                ['He <devoted> himself to his work.', 'ささげた', 'ささげた']
            ]
        ],
        ['行動', [
                [1173, [1037], 'act', '行動する； 行動； 法令', [
                    [11855, 'activist', '活動家']
                ]],
                ['the Animal Welfare <Act>', '法', 'ほう']
            ],
            [
                [1174, [1038], 'enact', '～(法律)を制定する', []],
                ['I think the U.S. should <enact> laws to restrict gun ownership.', '制定する', 'せいていする']
            ],
            [
                [1175, [10403], 'behavior', '行動', [
                    [1039, 'behave', '行動する、ふるまう']
                ]],
                ['study human <behavior>', '行動', 'こうどう']
            ],
            [
                [1176, [12140, 1040], 'conduct', '行う、行動、伝える', []],
                ['<conduct> an experiment', '行う', 'おこなう'],
                ['the standards of <conduct>', '行動', 'こうどう'],
                ['<conduct> electricity', '伝える', 'つたえる']
            ],
            [
                [1177, [10409, 1041], 'attitude', '態度', []],
                ['a positive <attitude> toward life', '態度', 'たいど']
            ],
            [
                [1178, [11875], 'posture', '姿勢', []],
                ['maintain a good <posture>', '姿勢', 'しせい']
            ]
        ]
    ],
    ['政治', ['政治・主義', [
                [1179, [10533], 'political', '政治的な', [
                    [1042, 'politics', '政治、政治学']
                ]],
                ['a <political> leader', '政治的な', 'せいじてきな']
            ],
            [
                [1180, [10218, 1043], 'principle', '原理、原則', []],
                ['the <principle> of free trade', '原則', 'げんそく']
            ]
        ],
        ['保守・革新', [
                [1181, [11083], 'conservation', '環境保護', [
                    [1044, 'conserve', '～を保存する、守る'],
                    [11149, 'conservative', '保守']
                ]],
                ['<conservation> groups', '環境保護', 'かんきょうほご']
            ],
            [
                [1182, [10193, 1045], 'progress', '進歩、前進', []],
                ["You've made <progress> in English", '進歩', 'しんぽ']
            ],
            [
                [1183, [11185, 1046], 'radical', '根本的な', []],
                ['<radical> changes', '根本的な', 'こんぽんてきな']
            ],
            [
                [1184, [10959, 1047], 'reform', '改革', []],
                ['political <reform>', '改革', 'かいかく']
            ]
        ],
        ['政治体制', [
                [1185, [1048], 'regime', '政治体制', []],
                ['The Tokugawa <regime> lasted for more than 250 years.', '政治体制', 'せいじたいせい']
            ],
            [
                [1186, [10710, 1049], 'democracy', '民主主義、民主国家', []],
                ['a modern <democracy>', '民主国家', 'みんしゅこくか']
            ],
            [
                [1187, [11508, 1050], 'republic', '共和国', []],
                ['the Republic of Ireland', '共和国', 'きょうわこく']
            ],
            [
                [1188, [11826], 'monarch', '君主、皇帝', [
                    [1051, 'monarchy', '君主政治']
                ]],
                ['the British <monarch>', '君主', 'くんしゅ']
            ],
            [
                [1189, [11853, 1052], 'aristocracy', '貴族階級', []],
                ['the English <aristocracy>', '貴族階級', 'きぞくかいきゅう']
            ],
            [
                [1190, [11932], 'bureaucrat', '官僚', [
                    [1053, 'bureaucracy', '官僚、官僚主義']
                ]],
                ['government <bureaucrats>', '官僚', 'かんりょう']
            ],
            [
                [1191, [10822], 'noble', '高貴な', []],
                ['a person of <noble> birth', '高貴な', 'こうきな']
            ]
        ],
        ['イデオロギー', [
                [1192, [11876], 'Ideology', 'イデオロギー', [
                    [1054, 'ideology', 'イデオロギー、思考傾向']
                ]],
                ['a political ideology', 'イデオロギー', 'いでおろぎい']
            ],
            [
                [1193, [11838], 'communist', '共産主義の', [
                    [1055, 'communism', '共産主義']
                ]],
                ['former <communist> countries', '共産主義の', 'きょうさんしゅぎの']
            ],
            [
                [1194, [1056], 'socialism', '社会主義', []],
                ['Some countries practice <socialism>.', '社会主義', 'しゃかいしゅぎ']
            ],
            [
                [1195, [10398], 'nation', '国', [
                    [1057, 'nationalism', '国家主義']
                ]],
                ['the Asian <nations>', '国', 'くに']
            ],
            [
                [1196, [12003], 'patriotic', '愛国的な', [
                    [1058, 'patriotism', '愛国主義']
                ]],
                ['shout <patriotic> slogans', '愛国的な', 'あいこくてきな']
            ]
        ],
        ['統治する', [
                [1197, [10396], 'government', '政府', [
                    [1059, 'govern', '統治する； 決定する、左右する']
                ]],
                ['the Japanese <government>', '政府', 'せいふ']
            ],
            [
                [1198, [11936, 1060], 'reign', '統治', []],
                ["Queen Victoria's <reign>", '統治', 'とうち']
            ],
            [
                [1199, [11835, 1061], 'tyranny', '圧政', []],
                ['put up with <tyranny>', '圧政', 'あっせい']
            ]
        ],
        ['行政', [
                [1200, [10762], 'administration', '経営、行政', [
                    [1062, 'administer', '～を管理する、運営する']
                ]],
                ['business <administration>', '経営', 'けいえい']
            ],
            [
                [1201, [10440, 1063], 'policy', '政策', []],
                ["Japan's foreign <policy>", '政策', 'せいさく']
            ],
            [
                [1202, [10720, 1064], 'welfare', '福祉', []],
                ['social <welfare>', '福祉', 'ふくし']
            ]
        ],
        ['省庁・外交', [
                [1203, [1065], 'ministry', '省庁', []],
                ['the <Ministry> of Foreign Affairs', '省庁', 'しょうちょう']
            ],
            [
                [1204, [10249, 1066], 'minister', '大臣', []],
                ['the Italian foreign <minister>', '大臣', 'だいじん']
            ],
            [
                [1205, [11657], 'diplomatic', '外交の', [
                    [1067, 'diplomat', '外交官']
                ]],
                ['break off <diplomatic> relations', '外交', 'がいこう']
            ],
            [
                [1206, [1068], 'embassy', '大使館', []],
                ['the British <Embassy>', '大使館', 'たいしかん']
            ],
            [
                [1207, [11811, 1069], 'ambassador', '大使', []],
                ['the French <ambassador> to Japan', '大使', 'たいし']
            ],
            [
                [1208, [11476, 1070], 'treaty', '条約', []],
                ['sign a peace <treaty>', '条約', 'じょうやく']
            ],
            [
                [1209, [11072], 'secretary', '秘書', []],
                ["？his <secretary>'s desk", '秘書', 'ひしょ']
            ],
            [
                [1210, [11929], 'protocol', '議定書', []],
                ['the Kyoto Protocol', '議定書', 'ぎていしょ']
            ]
        ],
        ['立法', [
                [1211, [11583], 'legislation', '法律', [
                    [1071, 'legislate', '法律を制定する']
                ]],
                ['gun control <legislation>', '法律', 'ほうりつ']
            ],
            [
                [1212, [11056, 1072], 'congress', '議会', []],
                ['the United States Congress', '議会', 'ぎかい']
            ],
            [
                [1213, [11888], 'senator', '上院議員', [
                    [1073, 'Senate', '上院']
                ]],
                ['a United States Senator', '上院議員', 'じょういんぎいん']
            ],
            [
                [1214, [1074], 'parliament', '国会', []],
                ['The bill passed in <Parliament>.', '国会', 'こっかい']
            ],
            [
                [1215, [1075], 'Diet', '国会、議会', []],
                ['an ordinary session of the Japanese <Diet>', '国会', 'こっかい']
            ],
            [
                [1216, [11095, 1076], 'council', '議会', []],
                ['the New York City Council', '議会', 'ぎかい']
            ],
            [
                [1217, [11172, 1077], 'federal', '連邦の', []],
                ['the Federal Government', '連邦', 'れんぽう']
            ],
            [
                [1218, [12175, 1078], 'bill', '請求書、紙幣、法案', []],
                ['an electricity <bill>', '請求書', 'せいきゅうしょ'],
                ['a ten dollar <bill>', '紙幣', 'しへい'],
                ['pass a <bill>', '法案', 'ほうあん']
            ],
            [
                [1219, [11416, 1079], 'abolish', '廃止する', []],
                ['<abolish> slavery', '廃止する', 'はいしする']
            ]
        ],
        ['選挙', [
                [1220, [10669, 1080], 'elect', '～を選挙で選ぶ', []],
                ['be <elected> President', '選ばれる', 'えらばれる']
            ],
            [
                [1221, [10241, 1081], 'vote', '投票', []],
                ['get 20% of the <vote>', '票', 'ひょう']
            ],
            [
                [1222, [11280, 1082], 'poll', '世論調査、投票', []],
                ['an opinion <poll>', '調査', 'ちょうさ']
            ],
            [
                [1223, [1083], 'run for', '～に出馬する', []],
                ['<run for> the Senate [presidency]', '出馬する', 'しゅつばする']
            ],
            [
                [1224, [11500, 1084], 'mayor', '市長', []],
                ['the New York City <mayor>', '市長', 'しちょう']
            ],
            [
                [1225, [1085], 'governor', '知事', []],
                ['The <governor> signed the bill into law.', '知事', 'ちじ']
            ]
        ]
    ],
    ['産業', ['産業', [
                [1226, [10190, 1086], 'industry', '工業', []],
                ['a center of heavy <industry>', '工業', 'こうぎょう']
            ],
            [
                [1227, [1087], 'sector', '部門', []],
                ['the service [agricultural] <sector>', '部門', 'ぶもん']
            ],
            [
                [1228, [11644], 'diligent', '勤勉な', []],
                ['a <diligent> student', '勤勉な', 'きんべんな']
            ]
        ],
        ['農業・農耕', [
                [1229, [10516, 1088], 'agriculture', '農業', []],
                ['land suitable for <agriculture>', '農業', 'のうぎょう']
            ],
            [
                [1230, [10634, 1089], 'cultivate', '〈植物〉を栽培する、〈感情・能力などを〉育む', []],
                ['<cultivate> plants', '栽培する', 'さいばいする']
            ],
            [
                [1231, [1090], 'culture', '文化； 教養； 栽培', []],
                ['a man of <culture>', '教養', 'きょうよう'],
                ['<culture> of cotton', '栽培', 'さいばい']
            ]
        ],
        ['農業関連', [
                [1232, [10493, 1091], 'crop', '作物', []],
                ['grow various <crops>', '作物', 'さくもつ']
            ],
            [
                [1233, [11027, 1092], 'harvest', '収穫', []],
                ['a good <harvest> of rice', '収穫', 'しゅうかく']
            ],
            [
                [1234, [10504, 1093], 'soil', '土壌', []],
                ['the rich <soil> of the Nile River', '土壌', 'どじょう']
            ],
            [
                [1235, [11617, 1094], 'fertile', '肥えた', []],
                ['<fertile> soil', '肥えた', 'こえた']
            ],
            [
                [1236, [1095], 'barren', '不毛な', []],
                ['To involve yourself in a <barren> argument is a waste of time.', '不毛な', 'ふもうな']
            ],
            [
                [1237, [11862, 1096], 'irrigation', '灌漑', []],
                ['<irrigation> systems', 'かんがい', 'かんがい']
            ],
            [
                [1238, [10740, 1097], 'grain', '穀物', []],
                ['world <grain> production', '穀物', 'こくもつ']
            ],
            [
                [1239, [11042, 1098], 'wheat', '小麦', []],
                ['plant <wheat> and corn', '小麦', 'こむぎ']
            ],
            [
                [1240, [1099], 'weed', '雑草', []],
                ['<Weeds> rob crops of vital nutrients.', '雑草', 'ざっそう']
            ],
            [
                [1241, [10972, 1100], 'seed', '種', []],
                ['plant pumpkin <seeds>', '種', 'たね']
            ],
            [
                [1242, [1101], 'sow', '～(種)をまく', []],
                ['Farmers <sow> seeds in spring.', 'まく', 'まく']
            ],
            [
                [1243, [11920, 1102], 'plow', 'すき', []],
                ['a farmer with his <plow>', 'すき', 'すき']
            ],
            [
                [1244, [11941, 1103], 'peasant', '小作農', []],
                ['landless <peasants> in India', '小作農', 'こさくのう']
            ],
            [
                [1245, [10075, 1104], 'feed', '～にエサをやる', []],
                ['<feed> a large family', '養う', 'やしなう']
            ],
            [
                [1246, [10642, 1105], 'breed', '～を繁殖させる、繁殖する', []],
                ['how to <breed> animals', '繁殖させる', 'はんしょくさせる']
            ],
            [
                [1247, [11109, 1106], 'cattle', '牛', []],
                ['raise sheep and <cattle>', '牛', 'うし']
            ],
            [
                [1248, [1107], 'herd', '(牛などの)群れ', []],
                ['a <herd> of cattle', '群れ', 'むれ']
            ],
            [
                [1249, [11297, 1108], 'flock', '群れ', []],
                ['a <flock> of white sheep', '群れ', 'むれ']
            ],
            [
                [1250, [1109], 'ranch', '牧場', []],
                ['The boy grew up with a herd of cattle on the <ranch>.', '牧場', 'ぼくじょう']
            ],
            [
                [1251, [11815], 'meadow', '牧草地', []],
                ['the green <meadow>', '牧草地', 'ぼくそうち']
            ],
            [
                [1252, [11842], 'dairy', '乳製品、酪農', []],
                ['<dairy> products', '乳製品', 'にゅうせいひん']
            ],
            [
                [1253, [11919], 'plantation', '農園', []],
                ['workers on banana <plantations>', '農園', 'のうえん']
            ]
        ],
        ['新聞・メディア', [
                [1254, [1110], 'media', 'メディア、媒体', []],
                ['the mass <media>', 'メディア', 'めでいあ']
            ],
            [
                [1255, [10225, 1111], 'mass', '一般大衆、多くの', []],
                ['<mass> production', '大量', 'たいりょう']
            ],
            [
                [1256, [10874, 1112], 'broadcast', '～を放送する', []],
                ['<broadcast> the concert live', '放送する', 'ほうそうする']
            ],
            [
                [1257, [1113], 'journalism', 'ジャーナリズム、報道', []],
                ['I have been in <journalism> for twenty years.', 'ジャーナリズム界', 'じゃあなりずむかい']
            ],
            [
                [1258, [12129, 1114], 'article', '記事、品物', []],
                ['a newspaper <article>', '記事', 'きじ'],
                ['an <article> for sale', '品物', 'しなもの']
            ],
            [
                [1259, [11475, 1115], 'headline', '大見出し', []],
                ['a newspaper <headline>', '大見出し', 'おおみだし']
            ],
            [
                [1260, [1116], 'Internet', 'インターネット', []],
                ['The school library provides free access to the <Internet>.', 'インターネット', 'いんたあねっと']
            ],
            [
                [1261, [11586], 'column', 'コラム', []],
                ['write a newspaper <column>', 'コラム', 'こらむ']
            ]
        ],
        ['広告・出版', [
                [1262, [10524], 'advertising', '広告', [
                    [1117, 'advertisement', '広告']
                ]],
                ['newspaper <advertising>', '広告', 'こうこく']
            ],
            [
                [1263, [10379, 1118], 'publish', '～を出版する', []],
                ['<publish> a book', '出版する', 'しゅっぱんする']
            ],
            [
                [1264, [11031], 'editor', '編集者', [
                    [1119, 'edit', '～を編集する']
                ]],
                ['the <editor> of a fashion magazine', '編集長', 'へんしゅうちょう']
            ],
            [
                [1265, [11745, 1120], 'compile', 'まとめる', []],
                ['<compile> a list of customers', 'まとめる', 'まとめる']
            ],
            [
                [1266, [10453, 1121], 'cartoon', 'マンガ', []],
                ['a popular <cartoon> character', 'マンガ', 'まんが']
            ],
            [
                [1267, [11295], 'publicity', '宣伝、広告', []],
                ['newspaper <publicity>', '広告', 'こうこく']
            ]
        ],
        ['製造・消費', [
                [1268, [10149, 1122], 'manufacture', '～を製造する', []],
                ['a car <manufacturing> company', '製造する', 'せいぞうする']
            ],
            [
                [1269, [10334, 1123], 'produce', '～を生産する', [
                    [11214, 'reproduce', '再生する、複製する、繁殖する[させる]']
                ]],
                ['<produce> enough food', '生産する', 'せいさんする']
            ],
            [
                [1270, [1124], 'create', '～を創造する、生み出す', [
                    [10446, 'creature', '動物']
                ]],
                ['The scientist <created> a terrible monster and kept it in his laboratory.', '生み出し', 'うみだし']
            ],
            [
                [1271, [10387, 1125], 'consume', '～を消費する', []],
                ['<consume> a lot of energy', '消費する', 'しょうひする']
            ],
            [
                [1272, [10776], 'output', '生産高', []],
                ["the factory's <output>", '生産高', 'せいさんだか']
            ]
        ],
        ['貿易・販売', [
                [1273, [10192, 1126], 'trade', '貿易', []],
                ['US <trade> with France', '貿易', 'ぼうえき']
            ],
            [
                [1274, [12089, 1127], 'deal', '処理する、大量、取引', []],
                ['<deal> with the problem', '処理する', 'しょりする'],
                ['a great <deal> of data', '大量', 'たいりょう'],
                ['make a <deal> with Microsoft', '取引', 'とりひき']
            ],
            [
                [1275, [11539, 1128], 'commerce', '商業', []],
                ['industry and <commerce>', '商業', 'しょうぎょう']
            ],
            [
                [1276, [11052, 1129], 'merchant', '商人', []],
                ['The Merchant of Venice', '商人', 'しょうにん']
            ],
            [
                [1277, [11564, 1130], 'commodity', '商品', []],
                ['an export <commodity>', '商品', 'しょうひん']
            ],
            [
                [1278, [11608, 1131], 'retail', '小売り', []],
                ['the <retail> price', '小売り', 'こうり']
            ],
            [
                [1279, [10137, 1132], 'import', '～を輸入する', []],
                ['<import> food from abroad', '輸入する', 'ゆにゅうする']
            ],
            [
                [1280, [1133], 'export', '～を輸出する； 輸出(品)', []],
                ['destination country for <export>', '輸出', 'ゆしゅつ']
            ],
            [
                [1281, [10083], 'earn', '～をもうける、かせぐ', []],
                ['<earn> money for the family', 'かせぐ', 'かせぐ']
            ],
            [
                [1282, [10445], 'goods', '商品', []],
                ['buying and selling <goods>', '商品', 'しょうひん']
            ],
            [
                [1283, [11921], 'vending', '販売', []],
                ['buy a drink from a <vending> machine', '販売', 'はんばい']
            ]
        ],
        ['労働・雇用', [
                [1284, [10121, 1134], 'employ', '～を雇う、～を用いる', []],
                ['<employ> foreign workers', '雇う', 'やとう']
            ],
            [
                [1285, [10994, 1135], 'labor', '労働', []],
                ['do hard <labor>', '労働', 'ろうどう']
            ],
            [
                [1286, [12117, 1136], 'manage', 'なんとか、経営する', []],
                ['<manage> to catch the train', 'なんとか', 'なんとか'],
                ['<manage> a big company', '経営する', 'けいえいする']
            ],
            [
                [1287, [10703, 1137], 'contract', '契約', []],
                ['sign a <contract> with Google', '契約', 'けいやく']
            ],
            [
                [1288, [10247], 'agency', '機関、代理店', [
                    [1138, 'agent', '代理店、代理人、行為者']
                ]],
                ['go to a travel <agency>', '代理店', 'だいりてん']
            ],
            [
                [1289, [10026], 'hire', '～を雇う', []],
                ['<hire> many young people', '雇う', 'やとう']
            ],
            [
                [1290, [10775], 'client', '依頼人', []],
                ['a lawyer and his <client>', '依頼人', 'いらいにん']
            ],
            [
                [1291, [11230], 'recruit', '〈新人など〉を入れる', []],
                ['<recruit> new staff', '入れる', 'はいれる']
            ]
        ]
    ],
    ['医学・化学', ['医学', [
                [1292, [10536], 'medical', '医学の', [
                    [1139, 'medicine', '薬； 医学']
                ]],
                ['a <medical> study', '医学の', 'いがくの']
            ],
            [
                [1293, [1140], 'pharmacy', '薬局', []],
                ['a <pharmacy> student', '薬局', 'やっきょく']
            ],
            [
                [1294, [11097, 1141], 'surgery', '手術', []],
                ['have open heart <surgery>', '手術', 'しゅじゅつ']
            ],
            [
                [1295, [11840, 1142], 'vein', '静脈', []],
                ['the <veins> in the forehead', '静脈', 'じょうみゃく']
            ],
            [
                [1296, [1143], 'artery', '動脈', []],
                ['The <artery> was blocked.', '動脈', 'どうみゃく']
            ],
            [
                [1297, [10264, 1144], 'physical', '身体の、肉体の', [
                    [10996, 'physician', '医者']
                ]],
                ['<physical> beauty', '肉体', 'にくたい']
            ],
            [
                [1298, [10232], 'brain', '脳', []],
                ['the human <brain>', '脳', 'のう']
            ],
            [
                [1299, [10374], 'breathe', '～を呼吸する', []],
                ['<breathe> fresh air', '呼吸する', 'こきゅうする']
            ],
            [
                [1300, [10785], 'vessel', '血管、船、器', []],
                ['blood <vessels>', '血管', 'けっかん']
            ],
            [
                [1301, [11037], 'antibiotic', '抗生物質', []],
                ['resistance to <antibiotics>', '抗生物質', 'こうせいぶっしつ']
            ],
            [
                [1302, [11549], 'skeleton', '骨格', []],
                ['the human <skeleton>', '骨格', 'こっかく']
            ],
            [
                [1303, [11615], 'pill', '薬', []],
                ['take sleeping <pills>', '薬', 'くすり']
            ],
            [
                [1304, [11683], 'physiological', '生理的な', []],
                ['<physiological> reactions', '生理的な', 'せいりてきな']
            ],
            [
                [1305, [11684], 'clinical', '臨床', []],
                ['<clinical> trials of new drugs', '臨床', 'りんしょう']
            ],
            [
                [1306, [11923], 'neuron', '神経細胞', []],
                ['connections between <neurons>', 'ニューロン', 'にゅうろん']
            ],
            [
                [1307, [11967], 'respiratory', '呼吸器に関する、呼吸の', []],
                ['acute <respiratory> disease', '呼吸器', 'こきゅうき']
            ],
            [
                [1308, [12020], 'spinal', '脊椎の', []],
                ['a <spinal> injury', '脊椎の', 'せきついの']
            ]
        ],
        ['症状', [
                [1309, [1145], 'disease', '病気', []],
                ['a contagious <disease>', '病', 'やまい']
            ],
            [
                [1310, [10973, 1146], 'symptom', '症状', []],
                ['<symptoms> of a cold', '症状', 'しょうじょう']
            ],
            [
                [1311, [11397, 1147], 'ache', '痛む', []],
                ['My whole body <aches>.', '痛む', 'いたむ']
            ],
            [
                [1312, [11330, 1148], 'acute', '〈問題が〉深刻な、〈感覚・痛みが〉鋭い', []],
                ['the most <acute> problem', '深刻な', 'しんこくな']
            ],
            [
                [1313, [11645, 1149], 'sore', '痛い', []],
                ['have a <sore> throat', '痛い', 'いたい']
            ],
            [
                [1314, [11961, 1150], 'dizzy', 'めまい', []],
                ['I feel <dizzy> when I stand up.', 'めまい', 'めまい']
            ],
            [
                [1315, [11011, 1151], 'cough', 'せき', []],
                ['have a bad <cough>', 'せき', 'せき']
            ],
            [
                [1316, [10432, 1152], 'fever', '熱', []],
                ['have a high <fever>', '熱', 'ねつ']
            ],
            [
                [1317, [12001, 1153], 'paralyze', '麻痺している', []],
                ['be <paralyzed> from the waist down', '麻痺している', 'まひしている']
            ],
            [
                [1318, [10215], 'pain', '苦痛', []],
                ['feel a sharp <pain>', '痛み', 'いたみ']
            ],
            [
                [1319, [11940], 'onset', '発症', []],
                ['the <onset> of dementia', '発症', 'はっしょう']
            ]
        ],
        ['治療', [
                [1320, [10205, 1154], 'patient', '患者、忍耐強い', []],
                ['a doctor and a <patient>', '患者', 'かんじゃ']
            ],
            [
                [1321, [11562, 1155], 'ambulance', '救急車', []],
                ['Call an <ambulance> right away.', '救急車', 'きゅうきゅうしゃ']
            ],
            [
                [1322, [11538], 'diagnosis', '診断', [
                    [1156, 'diagnose', '～を診断する']
                ]],
                ['the <diagnosis> of disease', '診断', 'しんだん']
            ],
            [
                [1323, [10154, 1157], 'cure', '～を治療する', []],
                ['<cure> him of his illness', '治す', 'なおす']
            ],
            [
                [1324, [10684, 1158], 'heal', '〈けがなど〉を治す、治る', []],
                ['Time <heals> all wounds.', 'いやす', 'いやす']
            ],
            [
                [1325, [10044, 1159], 'treat', '～をあつかう', []],
                ['<treat> him like a child', 'あつかう', 'あつかう']
            ],
            [
                [1326, [10144, 1160], 'recover', 'Aから回復する', []],
                ['<recover> from illness', '回復する', 'かいふくする']
            ],
            [
                [1327, [10109, 1161], 'operate', '作動する、～を操作する、手術する', []],
                ['<operate> a computer with a mouse', '操作する', 'そうさする']
            ],
            [
                [1328, [11479, 1162], 'remedy', '治療法', []],
                ['a good <remedy> for colds', '治療法', 'ちりょうほう']
            ],
            [
                [1329, [11090], 'nursing', '看護', []],
                ['24-hour <nursing>', '看護', 'かんご']
            ],
            [
                [1330, [11307], 'therapy', '療法、治療法', []],
                ['gene <therapy>', '療法', 'りょうほう']
            ],
            [
                [1331, [11557], 'injection', '注射', []],
                ['take daily <injections>', '注射', 'ちゅうしゃ']
            ],
            [
                [1332, [11597], 'ward', '病棟', []],
                ['patients in the <ward>', '病棟', 'びょうとう']
            ]
        ],
        ['病気の種類・原因', [
                [1333, [11024, 1163], 'cancer', 'ガン', []],
                ['the treatment of <cancer>', 'がん', 'がん']
            ],
            [
                [1334, [11878, 1164], 'tumor', '腫瘍', []],
                ['have a brain <tumor>', '腫瘍', 'しゅよう']
            ],
            [
                [1335, [11591, 1165], 'diabetes', '糖尿病', []],
                ['a patient with type 2 <diabetes>', '糖尿病', 'とうにょうびょう']
            ],
            [
                [1336, [10782, 1166], 'stroke', '脳卒中、発作、打撃、一撃、なでる', []],
                ['have a <stroke>', '脳卒中', 'のうそっちゅう']
            ],
            [
                [1337, [11065, 1167], 'virus', 'ウイルス', []],
                ['the flu <virus>', 'ウイルス', 'ういるす']
            ],
            [
                [1338, [11602, 1168], 'germ', '細菌', []],
                ['<germs> and viruses', '細菌', 'さいきん']
            ],
            [
                [1339, [10698, 1169], 'infect', '〈人〉に感染する', []],
                ['be <infected> with the virus', '感染している', 'かんせんしている']
            ],
            [
                [1340, [11605, 1170], 'epidemic', '流行', []],
                ['cholera <epidemic>', '流行', 'りゅうこう']
            ],
            [
                [1341, [11298, 1171], 'plague', '疫病', []],
                ['prevent the spread of <plague>', '疫病', 'えきびょう']
            ],
            [
                [1342, [1172], 'vaccine', 'ワクチン', []],
                ['An effective <vaccine> against HIV is not yet available.', 'ワクチン', 'わくちん']
            ],
            [
                [1343, [11544, 1173], 'defect', '欠陥', []],
                ['a <defect> in the structure', '欠陥', 'けっかん']
            ],
            [
                [1344, [11157, 1174], 'immune', '免疫', []],
                ["the body's <immune> system", '免疫', 'めんえき']
            ],
            [
                [1345, [1175], 'allergy', 'アレルギー', []],
                ['She has an <allergy> to peanuts.', 'アレルギー', 'あれるぎい']
            ],
            [
                [1346, [11552], 'dementia', '認知症', []],
                ['the symptoms of <dementia>', '認知症', 'にんちしょう']
            ],
            [
                [1347, [11607], 'syndrome', '症候群', []],
                ['economy class <syndrome>', '症候群', 'しょうこうぐん']
            ],
            [
                [1348, [11614], 'inflammation', '炎症', []],
                ['reduce <inflammation> in the eye', '炎症', 'えんしょう']
            ]
        ],
        ['最新医学・生物学', [
                [1349, [10517, 1176], 'gene', '遺伝子', []],
                ['the <gene> for eye color', '遺伝子', 'いでんし']
            ],
            [
                [1350, [10522, 1177], 'cell', '細胞', []],
                ['the gray <cells> of the brain', '細胞', 'さいぼう']
            ],
            [
                [1351, [11051, 1178], 'organism', '生物', [
                    [10764, 'organ', '臓器、器官']
                ]],
                ['marine <organisms>', '生物', 'せいぶつ']
            ],
            [
                [1352, [1179], 'clone', 'クローン； ～のクローンを作る', []],
                ['The scientists performed <cloning> even though the majority thought it was against ethics.', 'クローンを作る', 'くろおんをつくる']
            ],
            [
                [1353, [11908, 1180], 'anatomy', '構造', []],
                ['the <anatomy> of the human brain', '構造', 'こうぞう']
            ],
            [
                [1354, [11486], 'microbe', '微生物', []],
                ['<microbes> in the soil', '微生物', 'びせいぶつ']
            ],
            [
                [1355, [11612], 'hybrid', '交配種', []],
                ['a <hybrid> of two plants', '交配種', 'こうはいしゅ']
            ],
            [
                [1356, [11926], 'mutation', '突然変異', []],
                ['a genetic <mutation>', '突然変異', 'とつぜんへんい']
            ]
        ],
        ['化学', [
                [1357, [10282], 'chemical', '化学的な', [
                    [1181, 'chemistry', '科学']
                ]],
                ['a <chemical> reaction', '化学', 'かがく']
            ],
            [
                [1358, [11642, 1182], 'toxic', '有毒な', []],
                ['a <toxic> gas', '有毒な', 'ゆうどくな']
            ],
            [
                [1359, [10579, 1183], 'solid', '固体の', []],
                ['a <solid> state', '固体の', 'こたいの']
            ],
            [
                [1360, [1184], 'liquid', '液体の', []],
                ['Water is in a solid state below 0℃, becomes <liquid> above 0℃, and evaporates at 100℃.', '液体の', 'えきたいの']
            ],
            [
                [1361, [11800, 1185], 'vapor', '蒸気', []],
                ['Water changes into <vapor>.', '蒸気', 'じょうき']
            ],
            [
                [1362, [1186], 'hydrogen', '水素', []],
                ['<Hydrogen> is the most abundant element.', '水素', 'すいそ']
            ],
            [
                [1363, [10987, 1187], 'oxygen', '酸素', []],
                ['<oxygen> in the air', '酸素', 'さんそ']
            ],
            [
                [1364, [1188], 'atom', '原子', []],
                ['The smallest unit of matter is an <atom>.', '原子', 'げんし']
            ],
            [
                [1365, [10305, 1189], 'nuclear', '核の、原子力の', []],
                ['<nuclear> energy', '原子力', 'げんしりょく']
            ],
            [
                [1366, [11104, 1190], 'molecule', '分子', []],
                ['a single DNA <molecule>', '分子', 'ぶんし']
            ],
            [
                [1367, [11463, 1191], 'radiation', '放射線', []],
                ['dangerous <radiation>', '放射線', 'ほうしゃせん']
            ],
            [
                [1368, [10760], 'poison', '毒', []],
                ['<poison> gas', '毒', 'どく']
            ],
            [
                [1369, [11897], 'rust', 'さび', []],
                ['be covered with <rust>', 'さび', 'さび']
            ]
        ]
    ],
    ['宗教・民族・慣習', ['宗教・信仰', [
                [1370, [10468, 1192], 'religion', '宗教', []],
                ['science and <religion>', '宗教', 'しゅうきょう']
            ],
            [
                [1371, [10723, 1193], 'faith', '信頼', []],
                ['have <faith> in technology', '信頼', 'しんらい']
            ],
            [
                [1372, [11321, 1194], 'worship', '崇拝', []],
                ['the <worship> of God', '崇拝', 'すうはい']
            ],
            [
                [1373, [1195], 'doctrine', '教義、学説', []],
                ['The Christian <doctrine> regards suicide as a sin.', '教義', 'きょうぎ']
            ]
        ],
        ['信用', [
                [1374, [10481, 1196], 'confidence', '自信', []],
                ['have <confidence> in my ability', '自信', 'じしん']
            ],
            [
                [1375, [12166, 1197], 'credit', '功績、単位', []],
                ['<credit> for the discovery', '功績', 'こうせき'],
                ['college <credits>', '単位', 'たんい']
            ],
            [
                [1376, [11184, 1198], 'incredible', '信じられない', []],
                ['an <incredible> story', '信じられない', 'しんじられない']
            ]
        ],
        ['宗教関連', [
                [1377, [1199], 'Buddhism', '仏教', []],
                ['<Buddhism> came to China by way of the Silk Road.', '仏教', 'ぶっきょう']
            ],
            [
                [1378, [11342, 1200], 'Muslim', 'イスラム教の', []],
                ['in the <Muslim> world', 'イスラム', 'いすらむ']
            ],
            [
                [1379, [1201], 'Christianity', 'キリスト教', []],
                ['<Christianity> found its way into Japan in the 16th century.', 'キリスト教', 'きりすときょう']
            ],
            [
                [1380, [1202], 'Catholic', 'カトリックの、カトリック教徒', []],
                ['Under the Roman <Catholic> Church, heretics were persecuted and often converted.', 'カトリックの', 'かとりっくの']
            ],
            [
                [1381, [1203], 'Protestant', 'プロテスタントの； 新教徒', []],
                ['He is a <Protestant> minister.', 'プロテスタントの', 'ぷろてすたんとの']
            ],
            [
                [1382, [11067, 1204], 'priest', '神父', []],
                ['a <priest> in the church', '神父', 'しんぷ']
            ],
            [
                [1383, [1205], 'clergy', '聖職者', []],
                ['The <clergy> gathered for a meeting.', '聖職者', 'せいしょくしゃ']
            ],
            [
                [1384, [11772, 1206], 'preach', '説教する', []],
                ['<preach> to the crowd', '説教する', 'せっきょうする']
            ],
            [
                [1385, [1207], 'pilgrim', '巡礼者', []],
                ['The <pilgrims> traveled to Mecca.', '巡礼者', 'じゅんれいしゃ']
            ]
        ],
        ['神', [
                [1386, [11997, 1208], 'divine', '神聖なる', []],
                ['the <divine> right of kings', '神聖なる', 'しんせいなる']
            ],
            [
                [1387, [11625, 1209], 'sacred', '聖', []],
                ['a land <sacred> to Islam', '聖', 'せい']
            ],
            [
                [1388, [10875, 1210], 'sacrifice', '～を犠牲にする', []],
                ['<sacrifice> everything for love', '犠牲にする', 'ぎせいにする']
            ],
            [
                [1389, [11568, 1211], 'saint', '聖', []],
                ['<Saint> Valentine', '聖', 'せい']
            ],
            [
                [1390, [1212], 'holy', '神聖な', []],
                ['pilgrimage to <holy> sites', '神聖な', 'しんせいな']
            ],
            [
                [1391, [10777], 'lord', '神', []],
                ['praise the <Lord>', '神', 'かみ']
            ]
        ],
        ['神社・儀式', [
                [1392, [1213], 'shrine', '神社', []],
                ['The <shrine> is a place of worship.', '神社', 'じんじゃ']
            ],
            [
                [1393, [1214], 'temple', '寺院、神殿', []],
                ['Kyoto attracts tourists because of its many old shrines and <temples>.', '寺院', 'じいん']
            ],
            [
                [1394, [11081, 1215], 'ritual', '儀式', []],
                ['a religious <ritual>', '儀式', 'ぎしき']
            ],
            [
                [1395, [1216], 'ceremony', '儀式、式典', []],
                ['The Japanese tea <ceremony> has developed into a highly refined art form.', '式', 'しき']
            ],
            [
                [1396, [11713, 1217], 'swear', '誓う', []],
                ['<swear> never to drink again', '誓う', 'ちかう']
            ],
            [
                [1397, [11310], 'blessing', 'ありがたいもの、恵み', [
                    [1218, 'bless', '祝福する']
                ]],
                ['the <blessings> of nature', '恵み', 'めぐみ']
            ]
        ],
        ['魔術', [
                [1398, [1219], 'enchant', '魔法をかける； 魅了する', []],
                ['The beautiful princess was <enchanted> and slept for a hundred years.', '魔法をかけられた', 'まほうをかけられた']
            ],
            [
                [1399, [11799, 1220], 'witch', '魔女', []],
                ['an evil <witch>', '魔女', 'まじょ']
            ],
            [
                [1400, [12208, 1221], 'spell', '魔法、続き', []],
                ['She cast a <spell> on me.', '魔法', 'まほう'],
                ['a long dry <spell>', '続き', 'つづき']
            ],
            [
                [1401, [11743], 'haunted', 'つきまとわれる', [
                    [1222, 'haunt', '出没する']
                ]],
                ['be <haunted> by memories of war', 'つきまとわれる', 'つきまとわれる']
            ],
            [
                [1402, [11735], 'stalk', '忍び寄る', []],
                ['<stalk> the prey', '忍び寄る', 'しのびよる']
            ],
            [
                [1403, [11971], 'obsess', 'とりつかれている', []],
                ['be <obsessed> with dieting', 'とりつかれている', 'とりつかれている']
            ]
        ],
        ['人種・民族', [
                [1404, [12044, 1223], 'race', '人種', [
                    [11169, 'racial', '人種の']
                ]],
                ['a <race> problem', '人種', 'じんしゅ']
            ],
            [
                [1405, [11064], 'discrimination', '差別', [
                    [1224, 'discriminate', '差別する、区別する']
                ]],
                ['<discrimination> against women', '差別', 'さべつ']
            ],
            [
                [1406, [11005, 1225], 'tribe', '部族', []],
                ['a Native American <tribe>', '部族', 'ぶぞく']
            ],
            [
                [1407, [10821, 1226], 'ethnic', '民族的な、民族の', []],
                ['different <ethnic> groups', '民族', 'みんぞく']
            ],
            [
                [1408, [1227], 'nationality', '国籍', []],
                ['People of many different <nationalities> have immigrated to the United States.', '国籍', 'こくせき']
            ],
            [
                [1409, [10270, 1228], 'native', '母国の', []],
                ['a <native> language', '母', 'ぼ']
            ]
        ],
        ['伝統・慣習', [
                [1410, [10448, 1229], 'tradition', '伝統', []],
                ['history and <tradition>', '伝統', 'でんとう']
            ],
            [
                [1411, [10195, 1230], 'custom', '習慣、税関', []],
                ['the <custom> of tipping', '習慣', 'しゅうかん']
            ],
            [
                [1412, [10797, 1231], 'accustomed', '慣れた', []],
                ['become <accustomed> to driving', '慣れる', 'なれる']
            ],
            [
                [1413, [10778, 1232], 'convention', '慣習、しきたり、会議、大会', []],
                ['follow social <conventions>', '慣習', 'かんしゅう']
            ],
            [
                [1414, [11831, 1233], 'hierarchy', '階級制度', []],
                ['the top of the <hierarchy>', '階級制度', 'かいきゅうせいど']
            ]
        ],
        ['伝承・神話', [
                [1415, [11048, 1234], 'folk', '民族', []],
                ['English <folk> music', '民族', 'みんぞく']
            ],
            [
                [1416, [11053, 1235], 'myth', '神話', []],
                ['ancient Greek <myths>', '神話', 'しんわ']
            ],
            [
                [1417, [11019, 1236], 'legend', '伝説', []],
                ['the <legend> of Robin Hood', '伝説', 'でんせつ']
            ],
            [
                [1418, [11036, 1237], 'tragedy', '悲劇', []],
                ['Greek <tragedy>', '悲劇', 'ひげき']
            ]
        ]
    ],
    ['自然・環境', ['環境・進化', [
                [1419, [10407, 1238], 'environment', '環境', []],
                ['the natural <environment>', '環境', 'かんきょう']
            ],
            [
                [1420, [11107, 1239], 'species', '種', []],
                ['many <species> of birds', '種', 'しゅ']
            ],
            [
                [1421, [10939], 'evolution', '進化', [
                    [1240, 'evolve', '進化する、発展する']
                ]],
                ['human <evolution>', '進化', 'しんか']
            ],
            [
                [1422, [11189], 'ecological', '生態', [
                    [1241, 'ecology', '生態(系)、自然環境、環境保護']
                ]],
                ['protect the <ecological> system', '生態', 'せいたい']
            ]
        ],
        ['自然 vs 人工', [
                [1423, [12147, 1242], 'nature', '本質', [
                    [12086, 'natural', 'うまれながらの']
                ]],
                ['the <nature> of language', '本質', 'ほんしつ']
            ],
            [
                [1424, [11681, 1243], 'inherent', '元から伴う', []],
                ['dangers <inherent> in the sport', '元から伴う', 'もとからともなう']
            ],
            [
                [1425, [10558, 1244], 'artificial', '人工', []],
                ['<artificial> intelligence', '人工', 'じんこう']
            ]
        ],
        ['環境 vs 開発', [
                [1426, [10117, 1245], 'preserve', '～を保護する', []],
                ['<preserve> forests', '保護する', 'ほごする']
            ],
            [
                [1427, [10006, 1246], 'develop', '発達する、～を発達させる', []],
                ['<develop> a unique ability', '発達させる', 'はったつさせる']
            ],
            [
                [1428, [10886, 1247], 'sustain', '～を維持する', []],
                ['energy to <sustain> life', '維持する', 'いじする']
            ],
            [
                [1429, [10878], 'retain', '～を保持する', []],
                ['<retain> the world title', '保持する', 'ほじする']
            ],
            [
                [1430, [11881], 'deforestation', '森林破壊', []],
                ['<deforestation> in the Amazon', '森林破壊', 'しんりんはかい']
            ]
        ],
        ['大気・汚染', [
                [1431, [10233, 1248], 'atmosphere', '大気、雰囲気', []],
                ["CO2 in the earth's <atmosphere>", '大気', 'たいき']
            ],
            [
                [1432, [10469], 'pollution', '汚染', [
                    [1249, 'pollute', '～を汚染する']
                ]],
                ['environmental <pollution>', '汚染', 'おせん']
            ],
            [
                [1433, [12183, 1250], 'waste', '浪費する、廃棄物', []],
                ['<waste> money', '浪費する', 'ろうひする'],
                ['industrial <waste>', '廃棄物', 'はいきぶつ']
            ],
            [
                [1434, [10526, 1251], 'garbage', 'ごみ', []],
                ['take out <garbage>', 'ゴミ', 'ごみ']
            ],
            [
                [1435, [11502, 1252], 'trash', 'ごみ', []],
                ['a big black <trash> bag', 'ゴミ', 'ごみ']
            ],
            [
                [1436, [1253], 'rubbish', 'ゴミ、くだらないこと', []],
                ['What you are saying is <rubbish>; I will not trust one word of it.', 'くだらない', 'くだらない']
            ],
            [
                [1437, [1254], 'litter', '散らかす、ゴミ', []],
                ['Tons of plastic bags end up as <litter> every day.', 'ゴミ', 'ごみ']
            ],
            [
                [1438, [10956, 1255], 'landscape', '風景', []],
                ['<landscape> painting', '風景', 'ふうけい']
            ],
            [
                [1439, [11320], 'junk', 'くず、がらくた', []],
                ['avoid <junk> food', 'ジャンク', 'じゃんく']
            ],
            [
                [1440, [11588], 'dust', 'ほこり', []],
                ['tiny <dust> particles', 'ほこり', 'ほこり']
            ],
            [
                [1441, [11896], 'rag', 'ぼろ', []],
                ['be dressed in <rags>', 'ぼろ', 'ぼろ']
            ],
            [
                [1442, [11917], 'ash', '灰', []],
                ['be burned to <ashes>', '灰', 'はい']
            ]
        ],
        ['資源', [
                [1443, [10441, 1256], 'resource', '資源', [
                    [10413, 'source', '源']
                ]],
                ['natural <resources>', '資源', 'しげん']
            ],
            [
                [1444, [11016], 'fossil', '化石', [
                    [1257, 'fossile', '化石']
                ]],
                ['burn <fossil> fuels', '化石', 'かせき']
            ],
            [
                [1445, [10502, 1258], 'fuel', '燃料', []],
                ['run out of <fuel>', '燃料', 'ねんりょう']
            ],
            [
                [1446, [11798, 1259], 'petroleum', '石油', []],
                ['import <petroleum>', '石油', 'せきゆ']
            ],
            [
                [1447, [10808], 'exhausted', '疲れ切っている', [
                    [1260, 'exhaust', '～を使い果たす、疲れさせる']
                ]],
                ['be <exhausted> from overwork', '疲れ切っている', 'つかれきっている']
            ],
            [
                [1448, [11464], 'log', '丸太', []],
                ['a <log> cabin', '丸太', 'まるた']
            ],
            [
                [1449, [11789], 'timber', '材木', []],
                ['cut <timber>', '材木', 'ざいもく']
            ]
        ],
        ['環境キーワード', [
                [1450, [1261], 'global warming', '地球温暖化', []],
                ['prevent <global warming>', '地球温暖化', 'ちきゅうおんだんか']
            ],
            [
                [1451, [1262], 'greenhouse effect', '温室効果', []],
                ['caused by the <greenhouse effect>', '温室効果', 'おんしつこうか']
            ],
            [
                [1452, [10414], 'carbon', '炭素', [
                    [1263, 'carbon dioxide', '二酸化炭素']
                ]],
                ['<carbon> dioxide', '炭素', 'たんそ']
            ],
            [
                [1453, [11117], 'tropical', '熱帯', [
                    [1264, 'tropical rain forest', '熱帯雨林']
                ]],
                ['<tropical> rain forests', '熱帯', 'ねったい']
            ],
            [
                [1454, [1265], 'acid rain', '酸性雨', [
                    [11186, 'acid', '酸性の']
                ]],
                ['The main causes of <acid rain> are air pollution from factories and exhaust gases from automobiles.', '酸性雨', 'さんせいう']
            ],
            [
                [1455, [10975], 'layer', '層', [
                    [1266, 'ozone layer', 'オゾン層']
                ]],
                ['destroy the ozone <layer>', '層', 'そう']
            ]
        ],
        ['自然関連', [
                [1456, [10228, 1267], 'climate', '気候', []],
                ['global <climate> change', '気候', 'きこう']
            ],
            [
                [1457, [10459, 1268], 'temperature', '気温', []],
                ['the average <temperature> in Paris', '気温', 'きおん']
            ],
            [
                [1458, [11673, 1269], 'humid', '蒸し暑い', []],
                ['<humid> summer weather', '蒸し暑い', 'むしあつい']
            ],
            [
                [1459, [11528], 'moisture', '水分', [
                    [1270, 'moist', '湿った']
                ]],
                ['add <moisture> to the skin', '水分', 'すいぶん']
            ],
            [
                [1460, [10475, 1271], 'phenomenon', '現象', []],
                ['a natural <phenomenon>', '現象', 'げんしょう']
            ],
            [
                [1461, [11448, 1272], 'drought', '干ばつ', []],
                ['a long <drought> in Africa', '干ばつ', 'かんばつ']
            ],
            [
                [1462, [11101, 1273], 'disaster', '災害', []],
                ['prepare for natural <disaster>', '災害', 'さいがい']
            ],
            [
                [1463, [10443], 'flood', '洪水', []],
                ['a <flood> of information', '洪水', 'こうずい']
            ],
            [
                [1464, [10497], 'earthquake', '地震', []],
                ['predict <earthquakes>', '地震', 'じしん']
            ],
            [
                [1465, [10514], 'storm', '嵐', []],
                ['a heavy <storm>', '嵐', 'あらし']
            ],
            [
                [1466, [10790], 'tide', '潮流、潮の干満', []],
                ['swim against the <tide>', '潮流', 'ちょうりゅう']
            ],
            [
                [1467, [11531], 'thermometer', '温度計', []],
                ['The <thermometer> shows ０℃.', '温度計', 'おんどけい']
            ],
            [
                [1468, [11580], 'volcano', '火山', []],
                ['a smoking <volcano>', '火山', 'かざん']
            ],
            [
                [1469, [11584], 'lightning', '雷', []],
                ['be struck by <lightning>', '雷', 'かみなり']
            ],
            [
                [1470, [11805], 'breeze', 'そよ風', []],
                ['a cool <breeze> from the sea', 'そよ風', 'そよかぜ']
            ],
            [
                [1471, [11964], 'damp', '湿った', []],
                ['wipe with a <damp> towel', '湿った', 'しめった']
            ]
        ],
        ['地球', [
                [1472, [11033, 1274], 'hemisphere', '半球', [
                    [11277, 'sphere', '領域、範囲']
                ]],
                ['the southern <hemisphere>', '半球', 'はんきゅう']
            ],
            [
                [1473, [10929, 1275], 'continent', '大陸', []],
                ['cross the American <continent>', '大陸', 'たいりく']
            ],
            [
                [1474, [1276], 'Arctic', '北極地方', []],
                ['The <Arctic> is home to many polar bears.', '北極地方', 'ほっきょくちほう']
            ],
            [
                [1475, [11313, 1277], 'pole', '棒、極', []],
                ['the North <Pole>', '極', 'きょく']
            ],
            [
                [1476, [11903, 1278], 'latitude', '緯', []],
                ['38 degrees north <latitude>', '緯', 'い']
            ],
            [
                [1477, [1279], 'longitude', '経度', []],
                ['<Longitude> lines measure east-west locations.', '経度', 'けいど']
            ],
            [
                [1478, [11530, 1280], 'altitude', '高度、標高', []],
                ['at an <altitude> of 30,000 feet', '高度', 'こうど']
            ],
            [
                [1479, [11797, 1281], 'equator', '赤道', []],
                ['a jungle at the <equator>', '赤道', 'せきどう']
            ]
        ]
    ],
    ['短い単語', ['身体動作を表す動詞', [
                [1480, [10668, 1282], 'nod', 'うなずく', []],
                ['<nod> and say "yes"', 'うなずいて', 'うなずいて']
            ],
            [
                [1481, [10640, 1283], 'bow', 'おじぎする', []],
                ['<bow> to the queen', 'おじぎをする', 'おじぎをする']
            ],
            [
                [1482, [11256, 1284], 'sigh', 'ため息をつく', []],
                ['<sigh> deeply', 'ため息をつく', 'ためいきをつく']
            ],
            [
                [1483, [11344, 1285], 'rub', 'こする', []],
                ['<rub> the skin with a towel', 'こする', 'こする']
            ],
            [
                [1484, [11379, 1286], 'yell', '大声で叫ぶ', []],
                ['<yell> at the children', '大声で叫ぶ', 'おおごえでさけぶ']
            ],
            [
                [1485, [10898, 1287], 'leap', '跳ぶ', []],
                ['Look before you <leap>.', '跳ぶ', 'とぶ']
            ]
        ],
        ['動きを表す動詞', [
                [1486, [12136, 1288], 'fix', '固定された、修理する、作って', []],
                ['a <fixed> point', '固定された', 'こていされた'],
                ['<fix> a broken car', '修理する', 'しゅうりする'],
                ['I’ll <fix> you a drink.', '作って', 'つくって']
            ],
            [
                [1487, [10923, 1289], 'pour', '～を注ぐ', []],
                ['<pour> wine into the glass', '注ぐ', 'そそぐ']
            ],
            [
                [1488, [11775, 1290], 'dip', '浸す', []],
                ['<dip> the meat in the sauce', 'ひたす', 'ひたす']
            ],
            [
                [1489, [11268, 1291], 'soak', '浸す、びしょぬれにする、吸収する', []],
                ['<soak> a towel in hot water', '浸す', 'ひたす']
            ],
            [
                [1490, [1292], 'sip', '～を一口飲む', []],
                ['<sip> coffee [wine]', '一口飲む', 'ひとくちのむ']
            ],
            [
                [1491, [10656, 1293], 'cast', '～を投げる', []],
                ['<cast> a shadow on the wall', '投げかける', 'なげかける']
            ],
            [
                [1492, [11217, 1294], 'shed', '落とす', []],
                ['Trees <shed> their leaves.', '落とす', 'おとす']
            ],
            [
                [1493, [11718, 1295], 'spur', '駆りたてる', []],
                ['<spur> him into action', '駆りたてる', 'かりたてる']
            ],
            [
                [1494, [11726, 1296], 'blur', 'ぼやかす', []],
                ['<blur> the distinction', 'ぼやかす', 'ぼやかす']
            ]
        ],
        ['その他の短い動詞', [
                [1495, [11219, 1297], 'cite', '引き合いに出す', [
                    [11776, 'recite', '暗唱する']
                ]],
                ['<cite> two examples', '引き合いに出す', 'ひきあいにだす']
            ],
            [
                [1496, [12180, 1298], 'rear', '後部、育てる', []],
                ['a <rear> seat', '後部', 'こうぶ'],
                ['<rear> three children', '育てる', 'そだてる']
            ],
            [
                [1497, [10882, 1299], 'beg', '～と乞う', []],
                ['<beg> him to come back', '乞う', 'こう']
            ],
            [
                [1498, [10613, 1300], 'bet', 'きっと～だと思う', []],
                ["I <bet> you'll win.", 'きっと', 'きっと']
            ],
            [
                [1499, [11769, 1301], 'sue', '訴える', []],
                ['<sue> a doctor', '訴える', 'うったえる']
            ],
            [
                [1500, [11357, 1302], 'dread', '恐れる', []],
                ['<dread> going to the dentist', '恐れる', 'おそれる']
            ],
            [
                [1501, [11761, 1303], 'vow', '誓う', []],
                ['<vow> to fight', '誓う', 'ちかう']
            ],
            [
                [1502, [11818, 1304], 'chill', '寒気', []],
                ['feel a <chill>', '寒気', 'かんき']
            ]
        ],
        ['混同しやすい語', [
                [1503, [1305], 'staff', '社員、職員', []],
                ['The new chief received a cordial greeting from the <staff>.', 'スタッフ', 'すたっふ']
            ],
            [
                [1504, [10716, 1306], 'stuff', '物', []],
                ['write really good <stuff>', 'もの', 'もの']
            ],
            [
                [1505, [10631, 1307], 'crash', '激突する', []],
                ['<crash> into the wall', '激突する', 'げきとつする']
            ],
            [
                [1506, [11934, 1308], 'clash', '衝突', []],
                ['a <clash> of civilization', '衝突', 'しょうとつ']
            ],
            [
                [1507, [11259, 1309], 'crush', '押しつぶす', []],
                ['be <crushed> by the pressure', '押しつぶされる', 'おしつぶされる']
            ],
            [
                [1508, [11553, 1310], 'flesh', '肉', []],
                ['<flesh> and blood', '肉', 'にく']
            ],
            [
                [1509, [11366, 1311], 'glow', 'ボーッと光る', []],
                ['<glow> in the dark', 'ボーッと光る', 'ぼおっとひかる']
            ],
            [
                [1510, [10739, 1312], 'load', '荷物', []],
                ['carry a heavy <load>', '荷物', 'にもつ']
            ],
            [
                [1511, [10911, 1313], 'pray', '祈る', []],
                ['<pray> for a sick child', '祈る', 'いのる']
            ],
            [
                [1512, [10765, 1314], 'prey', '獲物、えじき', []],
                ['the <prey> of the lion', 'えじき', 'えじき']
            ],
            [
                [1513, [11420, 1315], 'flee', '逃げる', []],
                ['<flee> to free countries', '逃げる', 'にげる']
            ],
            [
                [1514, [11609, 1316], 'dose', '量', []],
                ['take a large <dose> of vitamin C', '量', 'りょう']
            ],
            [
                [1515, [10408, 1317], 'role', '役割', []],
                ['play an important <role>', '役割', 'やくわり']
            ],
            [
                [1516, [1318], 'roll', '転がる； ～を転がす、巻く', []],
                ['The ball gained speed as it <rolled> down the slope.', '転がる', 'ころがる']
            ],
            [
                [1517, [10958, 1319], 'tale', '話', []],
                ['tell a fairy <tale>', '話', 'はなし']
            ]
        ],
        ['短い名詞', [
                [1518, [10807], 'awful', 'ひどい', [
                    [1320, 'awe', '畏敬、畏怖； 畏怖させる']
                ]],
                ['How <awful>!', 'ひどい', 'ひどい']
            ],
            [
                [1519, [11816, 1321], 'feat', '偉業', []],
                ['accomplish a remarkable <feat>', '偉業', 'いぎょう']
            ],
            [
                [1520, [11466, 1322], 'deed', '行い', []],
                ['do a good <deed> a day', '行い', 'おこない']
            ],
            [
                [1521, [10976, 1323], 'clue', '手がかり', []],
                ['a <clue> to the mystery', '手がかり', 'てがかり']
            ],
            [
                [1522, [10496, 1324], 'path', '道', []],
                ['the <path> to victory', '道', 'みち']
            ],
            [
                [1523, [11830, 1325], 'aisle', '通路', []],
                ['walk down the <aisle>', '通路', 'つうろ']
            ],
            [
                [1524, [10984, 1326], 'ray', '光線', []],
                ["the sun's <rays>", '光線', 'こうせん']
            ],
            [
                [1525, [11814, 1327], 'lump', 'こぶ', []],
                ['a <lump> on the head', 'こぶ', 'こぶ']
            ],
            [
                [1526, [11915, 1328], 'bulk', '大部分', []],
                ['the <bulk> of the population', '大部分', 'だいぶぶん']
            ],
            [
                [1527, [10729, 1329], 'pile', '積み重ね', []],
                ['put the plates in a <pile>', '積み重ね', 'つみかさね']
            ],
            [
                [1528, [1330], 'heap', '(雑然と積み重なった)山', []],
                ['a <heap> of wreckage', '山', 'やま']
            ],
            [
                [1529, [11445, 1331], 'mess', 'めちゃくちゃ', []],
                ['The room is a <mess>.', 'めちゃくちゃ', 'めちゃくちゃ']
            ],
            [
                [1530, [11794, 1332], 'fuss', '大騒ぎ', []],
                ['make a <fuss> about nothing', '大騒ぎ', 'おおさわぎ']
            ]
        ],
        ['短い形容詞', [
                [1531, [11196], 'merely', '単に', [
                    [1333, 'mere', '単なる、ほんの']
                ]],
                ['It is <merely> bad lack', '単に', 'たんに']
            ],
            [
                [1532, [10799, 1334], 'dull', '退屈させる', []],
                ['very <dull> work', '退屈な', 'たいくつな']
            ],
            [
                [1533, [1335], 'ripe', '熟した、成熟した', []],
                ['<ripe> fruit', '熟した', 'じゅくした']
            ],
            [
                [1534, [10847], 'barely', 'かろうじて', [
                    [1336, 'bare', '裸の、むき出しの； 最低限の、ギリギリの']
                ]],
                ['<barely> survive the war', 'かろうじて', 'かろうじて']
            ],
            [
                [1535, [11126, 1337], 'raw', '生の', []],
                ['eat <raw> meat', '生の', 'せいの']
            ],
            [
                [1536, [1338], 'net', '正味の、掛け値なしの', []],
                ['The <net> weight of a product is usually stated on its label.', '正味の', 'しょうみの']
            ],
            [
                [1537, [11639, 1339], 'gross', '総', []],
                ['the <gross> domestic product', '総', 'そう']
            ],
            [
                [1538, [11945, 1340], 'dim', '薄暗い', []],
                ['read in <dim> light', '薄暗い', 'うすぐらい']
            ],
            [
                [1539, [11187, 1341], 'deaf', '耳が不自由な', []],
                ['sign language for <deaf> people', '耳が不自由な', 'みみがふじゆうな']
            ],
            [
                [1540, [11950, 1342], 'dumb', 'ばか', []],
                ["I'm not as <dumb> as I look.", 'ばか', 'ばか']
            ],
            [
                [1541, [1343], 'weird', '変な、奇妙な', []],
                ['Something really <weird> happened to me yesterday.', '奇妙な', 'きみょうな']
            ]
        ],
        ['熟語表現', [
                [1542, [1344], 'sake', 'ため、目的', []],
                ["For the <sake> of his children [For his children's <sake>], the father decided to remarry.", 'ため', 'ため']
            ],
            [
                [1543, [10823, 1345], 'vain', 'むだな', []],
                ['make a <vain> effort', 'むだな', 'むだな']
            ],
            [
                [1544, [10719, 1346], 'dawn', '夜明け', []],
                ['leave home at <dawn>', '夜明け', 'よあけ']
            ]
        ]
    ],
    ['傾向・可能性・反応', ['傾向', [
                [1545, [10021, 1347], 'tend', '～する傾向がある、～しがちである', []],
                ['<tend> to get angry', 'がちである', 'がちである']
            ],
            [
                [1546, [10240, 1348], 'trend', '傾向', []],
                ['a <trend> toward fewer children', '傾向', 'けいこう']
            ],
            [
                [1547, [11322, 1349], 'apt', 'しがちである、する傾向がある', []],
                ['be <apt> to forget names', 'やすい', 'やすい']
            ],
            [
                [1548, [11335, 1350], 'liable', 'しがちである、可能性が高い', []],
                ['be <liable> to forget it', 'がちである', 'がちである']
            ],
            [
                [1549, [11994, 1351], 'prone', 'やすい', []],
                ['be <prone> to catch fire', 'やすい', 'やすい']
            ],
            [
                [1550, [12021, 1352], 'susceptible', 'かかりやすい', []],
                ['be <susceptible> to disease', 'かかりやすい', 'かかりやすい']
            ]
        ],
        ['可能性', [
                [1551, [10256, 1353], 'likely', 'ありそうな、～する可能性が高い', []],
                ['He is <likely> to win.', '可能性が高い', 'かのうせいがたかい']
            ],
            [
                [1552, [10582], 'probably', 'おそらく', [
                    [1354, 'probable', 'じゅうぶんありえる']
                ]],
                ["Probably he won't come.", 'おそらく', 'おそらく']
            ],
            [
                [1553, [10315, 1355], 'possibly', 'ひょっとすると、どうしてもVできない', []],
                ['He will <possibly> come.', 'ひょっとすると', 'ひょっとすると']
            ]
        ],
        ['今にも…', [
                [1554, [1356], 'be about to do', '今にも～しそうである', []],
                ['The concert <is about to> start.', '今にもしそうである', 'いまにも']
            ],
            [
                [1555, [11859], 'verge', '瀬戸際', [
                    [1357, 'on the verge of', '今にも～しそうである']
                ]],
                ['be on the <verge> of extinction', '瀬戸際', 'せとぎわ']
            ],
            [
                [1556, [1358], 'on the brink of', '今にも～しそうである', []],
                ['Some species are <on the brink of> extinction.', '瀕している', 'ひんしている']
            ]
        ],
        ['したい・したくない', [
                [1557, [10298, 1359], 'eager', '熱望している', []],
                ['be <eager> to study in the US', '熱望する', 'ねつぼうする']
            ],
            [
                [1558, [10272, 1360], 'willing', '～する気がある、～してもかまわない', []],
                ['I am <willing> to pay for good food.', 'てもかまわない', 'てもかまわない']
            ],
            [
                [1559, [11118, 1361], 'reluctant', 'したがらない', []],
                ['be <reluctant> to talk about the past', 'したがらない', 'したがらない']
            ],
            [
                [1560, [11620], 'orient', '志向の', []],
                ['an information-<oriented> society', '志向の', 'しこうの']
            ]
        ],
        ['熱意', [
                [1561, [10722], 'enthusiasm', '熱意、情熱', [
                    [1362, 'enthusiastic', '(～に対し)熱意がある、熱心な(about)']
                ]],
                ['his <enthusiasm> for soccer', '情熱', 'じょうねつ']
            ],
            [
                [1562, [10800, 1363], 'keen', '熱望して、鋭い', []],
                ["I'm <keen> to talk to him", 'したい', 'したい']
            ],
            [
                [1563, [1364], 'intent', '(～に)熱心な、一生懸命の(on[upon])', []],
                ['All the team members were <intent> on winning.', '懸命に', 'けんめいに']
            ],
            [
                [1564, [11953, 1365], 'earnest', 'まじめな', []],
                ['make an <earnest> effort', 'まじめな', 'まじめな']
            ]
        ],
        ['熱望', [
                [1565, [11885], 'aspiration', '熱望', [
                    [1366, 'aspire', '(～することを)熱望する(to do, for)']
                ]],
                ['<aspirations> to be an artist', '熱望', 'ねつぼう']
            ],
            [
                [1566, [11764, 1367], 'yearn', '切望する', []],
                ['<yearn> for freedom', '切望する', 'せつぼうする']
            ],
            [
                [1567, [12100], 'long', '切望する', [
                    [1368, 'long for', '～を待ち望む； 懐かしく思う']
                ]],
                ['<long> for world peace', '切望する', 'せつぼうする']
            ],
            [
                [1568, [10991], 'ambition', '熱望', []],
                ['his <ambition> to be a writer', '熱望', 'ねつぼう']
            ]
        ],
        ['誘惑・魅力', [
                [1569, [11202, 1369], 'tempt', '誘惑する、する気にさせる', []],
                ['be <tempted> to call her', 'たくなる', 'たくなる']
            ],
            [
                [1570, [10135, 1370], 'fascinate', '～を夢中にさせる', []],
                ['a <fascinating> story', '夢中にさせる', 'むちゅうにさせる']
            ],
            [
                [1571, [10131, 1371], 'appeal', 'Aに訴える、～を引きつける', []],
                ['<appeal> to his feelings', '訴えかける', 'うったえかける']
            ],
            [
                [1572, [10763, 1372], 'charm', '魅力', []],
                ['a city full of <charm>', '魅力', 'みりょく']
            ],
            [
                [1573, [11721], 'lure', '呼び込む', []],
                ['<lure> tourists to Japan', '呼び込む', 'よびこむ']
            ]
        ],
        ['反応', [
                [1574, [10059, 1373], 'respond', '～に返答する', []],
                ['<respond> to question', '答える', 'こたえる']
            ],
            [
                [1575, [10391, 1374], 'react', '反応する', []],
                ['<react> quickly to light', '反応する', 'はんのうする']
            ],
            [
                [1576, [10244], 'interaction', '交流', [
                    [1375, 'interact', '(～と)相互作用する、交流し合う(with)']
                ]],
                ['social <interaction> with others', '交流', 'こうりゅう']
            ],
            [
                [1577, [10074], 'reply', '返事をする', []],
                ['<reply> to his letter', '返事をする', 'へんじをする']
            ]
        ],
        ['適合・順応', [
                [1578, [10156, 1376], 'adjust', '～に慣れる、調節して合わせる', []],
                ['<adjust> to a new school', '慣れる', 'なれる']
            ],
            [
                [1579, [10129, 1377], 'adapt', '～を適応させる、適応する', []],
                ['<adapt> to a new culture', '適応する', 'てきおうする']
            ],
            [
                [1580, [10161, 1378], 'shift', '～を変える', []],
                ['<shift> gears', '変える', 'かえる']
            ]
        ],
        ['合う', [
                [1581, [12197, 1379], 'fit', '適する、健康で', []],
                ['the water is <fit> to drink', '適する', 'てきする'],
                ['go to the gym to keep it', '健康で', 'けんこうで']
            ],
            [
                [1582, [10080, 1380], 'suit', '～に合う', []],
                ['The job <suits> you.', '合っている', 'あっている']
            ],
            [
                [1583, [10096, 1381], 'match', '～に匹敵する、～に調和する', []],
                ['<match> him in power', '匹敵する', 'ひってきする']
            ],
            [
                [1584, [1382], 'go with', '～と(組み合わせが)合う； ～に同意する、を受け入れる', []],
                ["I think I'll <go with> your suggestion, then.", '受け入れる', 'うけいれる']
            ]
        ]
    ],
    ['衣食住・日常', ['食・栄養', [
                [1585, [12155, 1383], 'diet', '', []],
                ['an ordinary session of the Japanese <Diet>', '国会', 'こっかい']
            ],
            [
                [1586, [11592], 'obesity', '肥満', [
                    [1384, 'obese', '肥満した']
                ]],
                ['the risk of <obesity>', '肥満', 'ひまん']
            ],
            [
                [1587, [10449, 1385], 'weight', '体重', [
                    [10164, 'weigh', '～の重さがある、～を比較検討する、よく考える']
                ]],
                ['lose <weight>', '体重', 'たいじゅう']
            ],
            [
                [1588, [11100, 1386], 'nutrition', '栄養', []],
                ['enough sleep and <nutrition>', '栄養', 'えいよう']
            ],
            [
                [1589, [11099], 'protein', 'タンパク質', []],
                ['high-<protein> food', 'タンパク質', 'たんぱくしつ']
            ],
            [
                [1590, [11386], 'chew', 'かむ', []],
                ['<chew> food well', 'かむ', 'かむ']
            ],
            [
                [1591, [11459], 'intake', '摂取量', []],
                ['reduce salt <intake>', '摂取量', 'せっしゅりょう']
            ],
            [
                [1592, [11611], 'Metabolism', '新陳代謝', []],
                ['regulate metabolism', '新陳代謝', 'しんちんたいしゃ']
            ],
            [
                [1593, [11864], 'cuisine', '料理', []],
                ['traditional French <cuisine>', '料理', 'りょうり']
            ]
        ],
        ['育てる', [
                [1594, [11403, 1387], 'nourish', '養う', []],
                ["<nourish> children's abilities", '養う', 'やしなう']
            ],
            [
                [1595, [11409, 1388], 'nurture', '育てる', []],
                ['<nurture> new technology', '育てる', 'そだてる']
            ],
            [
                [1596, [10695, 1389], 'foster', '～を促進する、育成する', []],
                ['<foster> creativity', '養う', 'やしなう']
            ]
        ],
        ['食欲', [
                [1597, [11460, 1390], 'feast', '宴会', []],
                ['invite guests to the <feast>', '宴会', 'えんかい']
            ],
            [
                [1598, [11003, 1391], 'appetite', '食欲', []],
                ['have no <appetite>', '食欲', 'しょくよく']
            ],
            [
                [1599, [10659, 1392], 'starve', '飢える', []],
                ['feed <starving> children', '飢えた', 'うえた']
            ],
            [
                [1600, [1393], 'hunger', '空腹', []],
                ['The refugees suffered from <hunger> and thirst.', '空腹', 'くうふく']
            ],
            [
                [1601, [10563], 'thirsty', 'のどが渇く', [
                    [1394, 'thirst', '喉の渇き']
                ]],
                ['Salty food makes you <thirsty>', 'のどが渇く', 'のどがかわく']
            ],
            [
                [1602, [11678], 'greedy', '貪欲な', [
                    [1395, 'greed', '貪欲']
                ]],
                ['be <greedy> for money', 'どん欲だ', 'どんよくだ']
            ],
            [
                [1603, [11045, 1396], 'famine', '飢饉', []],
                ['a terrible <famine> in Africa', '飢饉', 'ききん']
            ]
        ],
        ['食関連', [
                [1604, [11028, 1397], 'ingredient', '材料', []],
                ['the <ingredients> of the cake', '材料', 'ざいりょう']
            ],
            [
                [1605, [11220, 1398], 'digest', '消化する', []],
                ['<digest> food', '消化する', 'しょうかする']
            ],
            [
                [1606, [11610, 1399], 'beverage', '飲み物', []],
                ['alcoholic <beverages>', '飲料', 'いんりょう']
            ]
        ],
        ['住む', [
                [1607, [11092, 1400], 'habitat', '生息地', [
                    [11015, 'inhabitant', '住民']
                ]],
                ['the natural <habitat> of bears', '生息地', 'せいそくち']
            ],
            [
                [1608, [11372, 1401], 'dwell', '住む', []],
                ['<dwell> in the forest', '住む', 'すむ']
            ],
            [
                [1609, [10211], 'resident', '住民', [
                    [1402, 'residence', '住居、居住']
                ]],
                ['<residents> of New York', '住民', 'じゅうみん']
            ]
        ],
        ['宿泊・避難', [
                [1610, [11389, 1403], 'accommodate', '収容できる', []],
                ['can <accommodate> 800 people', '収容できる', 'しゅうようできる']
            ],
            [
                [1611, [11086], 'refugee', '難民', [
                    [1404, 'refuge', '避難、避難所']
                ]],
                ['<refugee> camps in Palestine', '難民', 'なんみん']
            ],
            [
                [1612, [10730, 1405], 'shelter', '避難（所）', []],
                ['find <shelter> from the cold', '逃れる場所', 'のがれるばしょ']
            ],
            [
                [1613, [11740], 'evacuate', '避難した', []],
                ['People were <evacuated> from the area.', '避難した', 'ひなんした']
            ]
        ],
        ['衣', [
                [1614, [1406], 'clothes', '衣服', []],
                ['The refugees needed food, <clothes>, shelter and medical care.', '衣服', 'いふく']
            ],
            [
                [1615, [11294, 1407], 'fabric', '織物、布', []],
                ['the social <fabric> of Japan', '組織', 'そしき']
            ],
            [
                [1616, [11458, 1408], 'thread', '糸', []],
                ['cotton <thread>', '糸', 'いと']
            ],
            [
                [1617, [11425, 1409], 'weave', '織る', []],
                ['<weave> cotton cloth', '織る', 'おる']
            ],
            [
                [1618, [12106, 1410], 'wear', 'すり減って', []],
                ['My shoes have worn thin.', 'すり減って', 'すりへって']
            ],
            [
                [1619, [11370, 1411], 'disguise', '隠す', []],
                ['<disguise> anger with a smile', '隠す', 'かくす']
            ],
            [
                [1620, [11667, 1412], 'naked', '裸の', []],
                ['a <naked> man', '裸の', 'はだかの']
            ],
            [
                [1621, [12137, 1413], 'fashion', 'やり方、作る', []],
                ['in a similar <fashion>', 'やり方', 'やりかた'],
                ['<fashion> a new world', '作る', 'つくる']
            ],
            [
                [1622, [11442], 'knit', '編む', []],
                ['<knit> a sweater', '編む', 'あむ']
            ],
            [
                [1623, [11529], 'patch', 'あて布', []],
                ['a leather elbow <patch>', '当て', 'あて']
            ],
            [
                [1624, [11537], 'garment', '衣服、衣類', []],
                ['wear a silk <garment>', '衣服', 'いふく']
            ],
            [
                [1625, [11559], 'leather', '革', []],
                ['a <leather> bag', '革', 'かわ']
            ],
            [
                [1626, [11788], 'textile', '織物', []],
                ['the <textile> industry', '織物', 'おりもの']
            ]
        ],
        ['家庭・日常', [
                [1627, [10483, 1414], 'household', '家庭', []],
                ['<household> goods', '家庭', 'かてい']
            ],
            [
                [1628, [10295, 1415], 'domestic', '家庭の、国内の', []],
                ['<domestic> violence', '家庭内', 'かていない']
            ],
            [
                [1629, [10715, 1416], 'routine', '決まりきった仕事、日課', []],
                ['a healthy daily <routine>', '日課', 'にっか']
            ],
            [
                [1630, [11498, 1417], 'chore', '雑用', []],
                ['share household <chores>', '雑用', 'ざつよう']
            ],
            [
                [1631, [11248, 1418], 'commute', '通勤する、通学する', []],
                ['<commute> from Chiba to Tokyo', '通勤する', 'つうきんする']
            ],
            [
                [1632, [11071, 1419], 'grocery', '食料品', []],
                ['go to the <grocery> store', '食料品', 'しょくりょうひん']
            ],
            [
                [1633, [10870, 1420], 'greet', '～にあいさつする', []],
                ['<greet> people with a smile', 'あいさつする', 'あいさつする']
            ],
            [
                [1634, [11492, 1421], 'souvenir', 'みやげ物', []],
                ['a <souvenir> shop in Hong Kong', 'みやげ物', 'みやげもの']
            ]
        ]
    ],
    ['程度・割合', ['程度', [
                [1635, [12143, 1422], 'degree', '程度、学位', []],
                ['agree to some <degree>', '程度', 'ていど'],
                ["get a master's <degree>", '学位', 'がくい']
            ],
            [
                [1636, [10525, 1423], 'extent', '程度', []],
                ['increase to some <extent>', '程度', 'ていど']
            ],
            [
                [1637, [1424], 'scale', '規模、程度', []],
                ['Tropical forest have been cut down on a large <scale>.', '規模', 'きぼ']
            ]
        ],
        ['程度を表す語', [
                [1638, [11181, 1425], 'moderate', '適度な', []],
                ['do <moderate> exercise', '適度な', 'てきどな']
            ],
            [
                [1639, [1426], 'temperate', '適度の、節度のある； 穏やかな', []],
                ['a <temperate> climate', '温暖な', 'おんだんな']
            ],
            [
                [1640, [10275, 1427], 'proper', '適切な', []],
                ['the <proper> use of words', '適切な', 'てきせつな']
            ],
            [
                [1641, [10548, 1428], 'appropriate', '適切な', []],
                ['the most <appropriate> word', '適切な', 'てきせつな']
            ],
            [
                [1642, [10587], 'extremely', '非常に', [
                    [1429, 'extreme', '極端な 極端、極限']
                ]],
                ['an <extremely> difficult problem', '非常に', 'ひじょうに']
            ],
            [
                [1643, [11138, 1430], 'tremendous', 'とてつもない', []],
                ['a <tremendous> amount of energy', 'とてつもない', 'とてつもない']
            ],
            [
                [1644, [11136], 'excessive', '過度の', [
                    [1431, 'excess', '超過、過剰な']
                ]],
                ['<excessive> use of alcohol', '過度の', 'かどの']
            ],
            [
                [1645, [1432], 'extra', '余分な、臨時の', []],
                ['Is there an <extra> charge wrapping?', '追加の', 'ついかの']
            ],
            [
                [1646, [11527], 'surplus', '余剰', []],
                ['a <surplus> of food', '余剰', 'よじょう']
            ]
        ],
        ['＊＊な増加', [
                [1647, [10588], 'gradually', 'だんだん', [
                    [1433, 'gradual', '徐々の']
                ]],
                ['<gradually> become colder', 'だんだん', 'だんだん']
            ],
            [
                [1648, [10798, 1434], 'steady', 'しっかりした', []],
                ['<steady> economic growth', '着実な', 'ちゃくじつな']
            ],
            [
                [1649, [10531], 'sharp', '急激な', [
                    [1435, 'sharply', '急速に']
                ]],
                ['a <sharp> rise in prices', '急激な', 'きゅうげきな']
            ],
            [
                [1650, [11638, 1436], 'steep', '険しい', []],
                ['a <steep> slope', '険しい', 'けわしい']
            ],
            [
                [1651, [1437], 'marked', '著しい、顕著な', []],
                ['a <marked> difference', '顕著な', 'けんちょな']
            ]
        ],
        ['＊＊に理解する', [
                [1652, [1438], 'partly', '部分的に、一部には', []],
                ['The mechanism of the human brain is only <partly> clarified.', '部分的に', 'ぶぶんてきに']
            ],
            [
                [1653, [10541, 1439], 'entire', '全', []],
                ['the <entire> world', '全', 'ぜん']
            ],
            [
                [1654, [1440], 'fully', '全く、完全に', []],
                ["I'm not sure I <fully> understand the meaning of the sentence.", '完全に', 'かんぜんに']
            ],
            [
                [1655, [11200], 'thoroughly', '徹底的に', [
                    [1441, 'thorough', '完全な、徹底的な']
                ]],
                ['<thoroughly> enjoy the party', '徹底的に', 'てっていてきに']
            ]
        ],
        ['究極・最終', [
                [1656, [11144, 1442], 'ultimate', '究極の', []],
                ['the <ultimate> goal', '究極の', 'きゅうきょくの']
            ],
            [
                [1657, [10789, 1443], 'terminal', '終点', []],
                ['a railroad <terminal>', '終点', 'しゅうてん']
            ],
            [
                [1658, [10585, 1444], 'eventually', 'ついに', []],
                ['He <eventually> became President.', 'ついに', 'ついに']
            ],
            [
                [1659, [1445], 'end up', '結局～になる（doing）', []],
                ['After fifteen years of marriage, they <ended up> getting divorced.', '結局', 'けっきょく']
            ],
            [
                [1660, [1446], 'in the long run', '長い目で見れば、結局は', []],
                ['The money you invest in education will pay off <in the long run>.', '長い目で見れば', 'ながいめでみれば']
            ],
            [
                [1661, [1447], 'for good', '永遠に', []],
                ['At the age of he left his homeland <for good>.', '永遠に', 'えいえんに']
            ]
        ],
        ['割合・比率', [
                [1662, [10184, 1448], 'rate', '割合、速度', []],
                ['at the <rate> of 40% a year', '割合', 'わりあい']
            ],
            [
                [1663, [10702, 1449], 'proportion', '比率', []],
                ['the <proportion> of boys to girls', '比率', 'ひりつ']
            ],
            [
                [1664, [11494, 1450], 'ratio', '比率', []],
                ['a <ratio> of 10 to 1', '比率', 'ひりつ']
            ]
        ],
        ['部分', [
                [1665, [11541, 1451], 'fraction', 'ほんの一部', []],
                ['a small <fraction> of the money', 'ほんの一部', 'ほんのいちぶ']
            ],
            [
                [1666, [11050, 1452], 'portion', '部分', []],
                ['a large <portion> of your salary', '部分', 'ぶぶん']
            ],
            [
                [1667, [11511, 1453], 'fragment', '破片', []],
                ['a <fragment> of blue glass', '破片', 'はへん']
            ],
            [
                [1668, [11824, 1454], 'segment', '部分、区分', []],
                ['a small <segment> of the population', '部分', 'ぶぶん']
            ],
            [
                [1669, [11813, 1455], 'cluster', '集団', []],
                ['a <cluster> of neurons', '集団', 'しゅうだん']
            ],
            [
                [1670, [12050], 'part', '役割、側、手放す', [
                    [1456, 'partial', '部分的な； 偏った、不公平な']
                ]],
                ['play a <part> in the economy', '役割', 'やくわり'],
                ['a fault on our <part>', '側', 'がわ'],
                ['<part> with the car', '手放す', 'てばなす']
            ],
            [
                [1671, [11883], 'bunch', 'ひとたばの', []],
                ['a <bunch> of flowers', 'ひとたばの', 'ひとたばの']
            ]
        ],
        ['熟語表現', [
                [1672, [1457], 'all in all', '全般的に見て、概して', []],
                ['<All in all>, the Japanese are a hardworking people.', '全般的に見て', 'ぜんぱんてきにみて']
            ],
            [
                [1673, [1458], 'on the whole', '概して、全般的に', []],
                ['<On the whole> [By and large], women are more jealous than men.', '概して', 'がいして']
            ],
            [
                [1674, [10596], 'mostly', '大部分は', [
                    [1459, 'by and large', '概して、全般的に']
                ]],
                ['The class is <mostly> Japanese.', '大部分は', 'だいぶぶんは']
            ],
            [
                [1675, [1460], 'at large', '全体の； 逃走中で', []],
                ['The president was respected by the population <at large>.', '全体の', 'ぜんたいの']
            ],
            [
                [1676, [1461], 'at length', '長々と、詳細にわたって； ついには', []],
                ['talk <at length>', '長々と', 'ながながと']
            ]
        ],
        ['欠如・欠乏', [
                [1677, [10404, 1462], 'lack', '不足', []],
                ['<lack> of food', '不足', 'ふそく']
            ],
            [
                [1678, [1463], 'devoid', '(～が)欠けている(of)', []],
                ['His works are <devoid> of originality.', '欠ける', 'かける']
            ],
            [
                [1679, [1464], 'run out of', '～を切らす、使い果たす', []],
                ['We were <running out of> gas and hurried to the gas station.', '切れてきた', 'きれてきた']
            ],
            [
                [1680, [1465], 'short of', '～が不足している', [
                    [10933, 'shortage', '不足']
                ]],
                ['We are <short of> sugar. = Sugar is running short.', '不足している', 'ふそくしている']
            ],
            [
                [1681, [11914, 1466], 'deficit', '赤字', []],
                ["America's trade <deficit>", '赤字', 'あかじ']
            ],
            [
                [1682, [10848], 'scarcely', 'ほとんど～ない', [
                    [1467, 'scarce', '不十分な、乏しい']
                ]],
                ['I could <scarcely> believe it.', 'ほとんど', 'ほとんど']
            ],
            [
                [1683, [11670, 1468], 'vacant', '空いている', []],
                ['sit down in a <vacant> seat', '空いている', 'あいている']
            ],
            [
                [1684, [1469], 'for want of', '～がないので、不足して', []],
                ['I failed <for want of> experience.', '不足していた', 'ふそくしていた']
            ],
            [
                [1685, [11110], 'density', '密度', [
                    [1470, 'dense', '密集した、密度の濃い']
                ]],
                ['high population <density>', '密度', 'みつど']
            ],
            [
                [1686, [10549], 'empty', 'からの', []],
                ['an <empty> bottle', 'からの', 'からの']
            ],
            [
                [1687, [10583], 'hardly', 'ほとんど～ない', []],
                ['I <hardly> know Bill.', 'ほとんど', 'ほとんど']
            ],
            [
                [1688, [11795], 'deficiency', '欠乏', []],
                ['a vitamin <deficiency>', '欠乏', 'けつぼう']
            ],
            [
                [1689, [11891], 'vacuum', '空白', []],
                ['fill the <vacuum>', '空白', 'くうはく']
            ]
        ]
    ],
    ['動詞をイメージする・2', ['与える・伝える', [
                [1690, [10885, 1471], 'convey', '～を伝える', []],
                ['<convey> information', '伝える', 'つたえる']
            ],
            [
                [1691, [1472], 'impart', '～を(…に)与える、伝える(to …)', []],
                ["Helen <imparted> her husband's secret to her neighbor.", '伝えた', 'つたえた']
            ],
            [
                [1692, [11252, 1473], 'donate', '提供する', []],
                ['<donate> blood and organs', '提供する', 'ていきょうする']
            ],
            [
                [1693, [11708, 1474], 'endow', '恵まれる', []],
                ['be <endowed> with a talent', '恵まれる', 'めぐまれる']
            ]
        ],
        ['そらす', [
                [1694, [11406, 1475], 'distract', 'そらす', []],
                ['<distract> attention from the problem', 'そらす', 'そらす']
            ],
            [
                [1695, [1476], 'evade', '～を避ける、回避する', []],
                ['The boy tried to <evade> his responsibility by blaming his younger brother.', '回避しようと', 'かいひしようと']
            ],
            [
                [1696, [11754, 1477], 'divert', 'そらす', []],
                ['<divert> attention from the fact', 'そらす', 'そらす']
            ],
            [
                [1697, [10662, 1478], 'convert', '～を転換する', []],
                ['<convert> sunlight into electricity', '転換する', 'てんかんする']
            ]
        ],
        ['追い出し・分散・循環', [
                [1698, [1479], 'expel', '～を追い出す', []],
                ['After he was caught using drugs, the student was immediately <expelled> from school.', '追い出された', 'おいだされた']
            ],
            [
                [1699, [1480], 'repel', '～を追い払う、退ける', []],
                ['The army was ready to <repel> the enemy.', '追い払う', 'おいはらう']
            ],
            [
                [1700, [1481], 'disperse', '～を散らす', []],
                ['The police fired in the air to <disperse> the crowd.', '散らす', 'ちらす']
            ],
            [
                [1701, [10772], 'circulation', '循環、流通、発行部数', [
                    [1482, 'circulate', '循環する； ～を循環させる； 流通させる']
                ]],
                ['increase blood <circulation>', '循環', 'じゅんかん']
            ]
        ],
        ['出くわす・たどる', [
                [1702, [10125, 1483], 'encounter', '～に偶然出会う', []],
                ['<encounter> many difficulties', '出会う', 'であう']
            ],
            [
                [1703, [11429], 'bump', 'ぶつかる', [
                    [1484, 'bump into', '～にばったりと出会う']
                ]],
                ['<bump> into someone', 'ぶつかる', 'ぶつかる']
            ],
            [
                [1704, [1485], 'come across', '～に偶然出会う、を偶然見つける', []],
                ['I <came across> an interesting article in the newspaper.', '偶然見つけた', 'ぐうぜんみつけた']
            ],
            [
                [1705, [10622, 1486], 'trace', '～の跡をたどる', []],
                ['<trace> human history', 'たどる', 'たどる']
            ],
            [
                [1706, [10001], 'follow', '～の後に続く、～に従う', []],
                ['<follow> her advice', '従う', 'したがう']
            ]
        ],
        ['over / under', [
                [1707, [11165], 'overwhelming', '圧倒的な', [
                    [1487, 'overwhelm', '～を圧倒する、打ちのめす']
                ]],
                ['an <overwhelming> majority', '圧倒的な', 'あっとうてきな']
            ],
            [
                [1708, [11400, 1488], 'overtake', '追い越す', []],
                ['<overtake> Japan in PC sales', '追い返す', 'おいかえす']
            ],
            [
                [1709, [10905, 1489], 'undergo', '～を経験する', []],
                ['<undergo> great changes', '経験する', 'けいけんする']
            ]
        ],
        ['上昇・下降', [
                [1710, [10677, 1490], 'descend', '下る、降りる', []],
                ['<descend> to the ground', '降りる', 'おりる']
            ],
            [
                [1711, [1491], 'ascend', '上る', []],
                ['The balloon <ascended> to the height of 1,000 feet.', '上がった', 'あがった']
            ],
            [
                [1712, [11240, 1492], 'plunge', '突っ込む', []],
                ['<plunge> into the water', '突っ込む', 'つっこむ']
            ]
        ],
        ['信奉・具体化', [
                [1713, [10701, 1493], 'embrace', '受け入れる、含む', []],
                ['<embrace> a new idea', '受け入れる', 'うけいれる']
            ],
            [
                [1714, [11734, 1494], 'embody', '具現する', []],
                ['<embody> the spirit of the age', '具現する', 'ぐげんする']
            ],
            [
                [1715, [11272, 1495], 'render', 'OをCにする、変える', []],
                ['<render> water undrinkable', 'する', 'する']
            ]
        ],
        ['修正・回復・解放', [
                [1716, [10903, 1496], 'modify', '～を修正する', []],
                ['<modify> the plan', '修正する', 'しゅうせいする']
            ],
            [
                [1717, [10925, 1497], 'restore', '～を修復する', []],
                ['<restore> the old building', '修復する', 'しゅうふくする']
            ],
            [
                [1718, [12176], 'relief', '安心、救済、除去', [
                    [1498, 'relieve', '～を解放する； 安心させる']
                ]],
                ['breathe a sigh of <relief>', '安心', 'あんしん'],
                ['<relief> from proverty', '救済', 'きゅうさい'],
                ['<relief> from stress', '除去', 'じょきょ']
            ],
            [
                [1719, [11741], 'undone', '元に戻る', []],
                ['What is done cannot be <undone>.', '元に戻ら', 'もとにもどりら']
            ]
        ],
        ['退却・回収・再開', [
                [1720, [11274, 1499], 'retreat', '退く', []],
                ['<retreat> to a safe distance', '退く', 'しりぞく']
            ],
            [
                [1721, [11782, 1500], 'retrieve', '検索する', []],
                ['<retrieve> information', '検索する', 'けんさくする']
            ],
            [
                [1722, [11387, 1501], 'resume', '再開する', []],
                ['<resume> normal activities', '再開する', 'さいかいする']
            ]
        ],
        ['溶解・消去・中止', [
                [1723, [11223, 1502], 'dissolve', '溶解する', []],
                ['<dissolve> sugar in water', '溶かす', 'とかす']
            ],
            [
                [1724, [11390, 1503], 'erase', '消す', []],
                ['<erase> the data', '消す', 'けす']
            ],
            [
                [1725, [11752, 1504], 'delete', '削除する', []],
                ['<delete> old emails', '削除する', 'さくじょする']
            ],
            [
                [1726, [1505], 'wipe out', '～を消し去る、絶滅させる', []],
                ['It is argued that a huge meteor may have <wiped out> the dinosaurs.', '絶滅させた', 'ぜつめつさせた']
            ],
            [
                [1727, [11266, 1506], 'suspend', '中止する、つるす', []],
                ['<suspend> the project', '中止する', 'ちゅうしする']
            ]
        ],
        ['窒息させる・絞る・こぼす', [
                [1728, [11748, 1507], 'choke', 'のどがつまる', []],
                ['<choke> on a piece of food', 'のどがつまる', 'のどがつまる']
            ],
            [
                [1729, [1508], 'suffocate', '～を窒息させる', []],
                ['The tobacco smoke is <suffocating>.', '窒息させる', 'ちっそくさせる']
            ],
            [
                [1730, [11404, 1509], 'squeeze', 'しぼる', []],
                ['<squeeze> an orange', 'しぼる', 'しぼる']
            ],
            [
                [1731, [10697, 1510], 'spill', '～をこぼす', []],
                ['<spill> coffee on the keyboard', 'こぼす', 'こぼす']
            ]
        ]
    ],
    ['基本動詞を用いた熟語表現・1', ['make', [
                [1732, [1511], 'make up', '(～を)埋め合せる、取り戻す(for)； (～と)仲直りする； ～(話)をでっち上げる； 化粧する', []],
                ['We worked hard to <make up> for lost time.', '埋め合せる', 'うめあわせる'],
                ['Edgar <made up> with his ex-girlfriend.', 'よりを戻した', 'よりをもどした'],
                ['Most of his stories are <made up>.', 'でっち上げる', 'でっちあげる']
            ],
            [
                [1733, [11265, 1512], 'compensate', '埋め合わせる', []],
                ['<compensate> for the loss', '埋め合わせる', 'うめあわせる']
            ],
            [
                [1734, [1513], 'make out', '～を理解する、判読する', []],
                ["I can't <make out> what is written on the blackboard from my seat.", '判読でき', 'はんどくでき']
            ],
            [
                [1735, [1514], 'make for', '～へ向かう； ～(の実現)に役立つ、～を可能にする', []],
                ["It's time we <made for> his house, or else we will be late.", '向かう', 'むかう'],
                ['What <makes for> a happy marriage?', '可能にする', 'かのうにする']
            ]
        ],
        ['turn', [
                [1736, [12033], 'turn', '番、変わり目', []],
                ["Now it's your <turn>.", '番', 'ばん'],
                ['the <turn> of the century', '変わり目', 'かわりめ']
            ],
            [
                [1737, [2177], 'turn on', '〜をつける', []],
                ['<turn on> a radio', 'つける', 'つける']
            ],
            [
                [1738, [2178], 'turn off', '〜を消す', []],
                ['<turn off> a radio', '消す', 'けす']
            ],
            [
                [1739, [2179], 'turn into', '〜に変化する', []],
                ['<turn into> a surplus', '変化する', 'へんかする']
            ],
            [
                [1740, [1515], 'turn out', '～であることが分かる、判読する', []],
                ['The rumor <turned out> [proved] (to be) false.', '分かった', 'わかった']
            ],
            [
                [1741, [1516], 'turn up', '現れる、登場する', []],
                ["She <turned up> at the party at 8 o'clock sharp.", '現れた', 'あらわれた']
            ],
            [
                [1742, [1517], 'turn down', '～(誘い・要求)を断る； の音量を下げる', []],
                ['Could you <turn down> the music?', '音量を下げて', 'おんりょうをさげて']
            ],
            [
                [1743, [1518], 'turn to', '～に頼る', []],
                ['When I faced financial difficulties, I had no choice but to <turn to> my father for help.', '頼る', 'たよる']
            ]
        ],
        ['take', [
                [1744, [2180], 'take away', '〜を奪う', []],
                ['<take away>', '奪う', 'うばう']
            ],
            [
                [1745, [2181], 'take off', '〜を脱ぐ；離陸する', []],
                ["<take off> one's clothes", '脱ぐ', 'ぬぐ']
            ],
            [
                [1746, [1519], 'take in', '～を取り入れる； 理解する； を騙す', []],
                ["Why don't we open the windows and <take in> some fresh air?", '入れ', 'いれ'],
                ["Why don't we open the windows and <take in> some fresh air?", '理解でき', 'りかいでき']
            ],
            [
                [1747, [1520], 'take on', '～(意味・重要性)を帯びる； (仕事)を引き受ける', []],
                ['Words <take on> new meanings as they are used over long periods.', '帯びてくる', 'おびてくる'],
                ['<take on> a task [the responsibility]', '引き受ける', 'ひきうける']
            ],
            [
                [1748, [1521], 'take after', '～に似る', []],
                ["She doesn't like to be told that she <takes after> her father.", '似ている', 'にている']
            ],
            [
                [1749, [1522], 'take up', '～を占める； を取り上げる', []],
                ['The piano <takes up> a lot of space in our living room.', '占める', 'しめる']
            ],
            [
                [1750, [1523], 'take over', '～(仕事)を引き継ぐ', []],
                ['After my father died, I decided to <take over> his business.', '引き継ごう', 'ひきつごう']
            ],
            [
                [1751, [1524], 'take to', '～が好きになる、習慣になる', []],
                ['He <took to> drinking after the death of his beloved wife.', '習慣になった', 'しゅうかんになった']
            ]
        ],
        ['put', [
                [1752, [2182], 'put on', '〜を身につける', []],
                ['<put on>', '着る', 'きる']
            ],
            [
                [1753, [2183], 'put off', '〜を延期する', []],
                ['<put off>', '延期する', 'えんきする']
            ],
            [
                [1754, [2184], 'put together', '〜を合わせる、合計する', []],
                ['<put together> a model ship', '組み立てる', 'くみたてる']
            ],
            [
                [1755, [976], 'put up with', '耐える、我慢する', []],
                ['During my flight, I had to <put up with> endless snoring from the man seated next to me.', '耐え', 'たえ']
            ],
            [
                [1756, [1525], 'put out', '～を消す', []],
                ['The fire was <put out> quickly by the firefighters.', '消された', 'けされた']
            ],
            [
                [1757, [1526], 'to put it … / put …', '…言うと', []],
                ['<to put it> simply', '言うと', 'いうと']
            ],
            [
                [1758, [2185], 'do with', '〜を扱う；〜で済ませる', []],
                ["She didn't know what to <do with> the problem.", '扱う', 'あつかう']
            ],
            [
                [1759, [2186], 'do without', '〜なしで済ませる', []],
                ['<do without>', 'なしで済ませる', 'なしですませる']
            ],
            [
                [1760, [177], 'do away with', '～を捨てる, 廃止する', []],
                ['The office decided to <do away with> files dating back for more than a decade.', '捨てる', 'すてる']
            ]
        ],
        ['do', [
                [1761, [12049, 1527], 'do', '十分役に立つ、与える', []],
                ['This pen will <do>.', '十分役に立つ', 'じゅうぶんやくにたつ'],
                ['<do> harm to the area', '与える', 'あたえる']
            ],
            [
                [1762, [1528], 'make do with', '～で間に合わせる', []],
                ['Since I bought a new car, I have to <make do with> $40 a month.', '間に合わせ', 'まにあわせ']
            ]
        ],
        ['give', [
                [1763, [2187], 'give up', '〜を諦める', []],
                ['<give up>', '諦める', 'あきらめる']
            ],
            [
                [1764, [1529], 'give away', '～を(ただで)譲る、(秘密・気持ち)を明かす', []],
                ['When I left the apartment, I sold or <gave away> most of our possessions.', '譲った', 'ゆずった'],
                ['<give away> a secret', '明かす', 'あかす']
            ],
            [
                [1765, [1530], 'give way', '(～)に屈する、取って代わられる(to)', []],
                ['The cloud sky <gave way> to bright sunshine.', '取って代わられた', 'とってかわられた']
            ],
            [
                [1766, [1531], 'give in', '(～)に屈する(to)', []],
                ["In the end, the government <gave in> to the terrorists' demands.", '屈した', 'くっした']
            ],
            [
                [1767, [1532], 'give off', '～(光・熱・期待)を発する', []],
                ['Plants <give off> oxygen and take in carbon dioxide.', '発し', 'はっし']
            ]
        ],
        ['come', [
                [1768, [2188], 'come true', '実現する', []],
                ['<come true>', '実現する', 'じつげんする']
            ],
            [
                [1769, [1485], 'come across', '～に偶然出会う、を偶然見つける', []],
                ['I <came across> an interesting article in the newspaper.', '偶然見つけた', 'ぐうぜんみつけた']
            ],
            [
                [1770, [1533], 'come up with', '～を思いつく', []],
                ['You need to <come up with> a more plausible excuse; otherwise no one will believe you.', '思いついた', 'おもいついた']
            ],
            [
                [1771, [1534], 'come about', '生じる、起こる', []],
                ['How did such a thing <come about>?', '起こった', 'おこった']
            ],
            [
                [1772, [1535], 'come into being', '生じる', []],
                ['A number of conflicting theories have been developed as to how the universe <came into being>.', '生まれた', 'うまれた']
            ],
            [
                [1773, [1536], 'come to', '意識を戻す； (全部で)～になる', []],
                ['When he <came to>, he found himself wrapped in newspapers.', '意識が戻る', 'いしきがもどる'],
                ['"How much does it all <come to>?" "Twelve dollars."', 'なり', 'なり']
            ],
            [
                [1774, [1537], 'come in handy', '便利である、役に立つ', []],
                ['Read this book. It might <come in handy> someday.', '役に立つ', 'やくにたつ']
            ],
            [
                [1775, [1538], 'Come on.', 'おいおい、冗談だろ', []],
                ["<Come on.> Don't be so mean to me.", 'おいおい', 'おいおい']
            ]
        ],
        ['go', [
                [1776, [1382], 'go with', '～と(組み合わせが)合う； ～に同意する、を受け入れる', []],
                ["I think I'll <go with> your suggestion, then.", '受け入れる', 'うけいれる']
            ],
            [
                [1777, [2189], 'go on doing', '〜し続ける', []],
                ['<go on doing>', 'し続ける', 'しつづける']
            ],
            [
                [1778, [2190], 'go through', '〜を経験する', []],
                ['<go through>', '経験する', 'けいけんする']
            ],
            [
                [1779, [1539], 'go on to do', 'さらに続けて～する', []],
                ['They <went on to> talk about the next topic.', '続けて', 'つづけて']
            ],
            [
                [1780, [1540], 'go off', '爆発する', []],
                ['The bomb <went off> and killed thousands of people.', '爆発した', 'ばくはつした']
            ],
            [
                [1781, [1541], 'Go ahead.', 'どうぞ', []],
                ['"Do you mind if I smoke here?" "No, <go ahead>."', 'どうぞ', 'どうぞ']
            ]
        ],
        ['bring', [
                [1782, [2191], 'bring up', '〜を育てる；〜を持ち出す', []],
                ['<bring up> the subject of breaking up', '持ち出す', 'もちだす']
            ],
            [
                [1783, [1542], 'bring about', '～を引き起こす、もたらす', []],
                ['Technological advances <brought about> improvements in food production and health care.', 'もたらした', 'もたらした']
            ],
            [
                [1784, [1543], 'bring oneself to do', '～する気になる', []],
                ["Even though I mostly agreed, somehow I couldn't <bring myself to> say yes.", '気になれない', 'きになれない']
            ],
            [
                [1785, [1544], 'bring A home to B', 'AをBに分からせる、実感させる', []],
                ["My three years' experience overseas <brought home to> me the importance of intercultural exchanges.", '実感させた', 'じっかんさせた']
            ]
        ],
        ['get', [
                [1786, [2192], 'get on', '〜に乗る', []],
                ['<get on>', '乗る', 'のる']
            ],
            [
                [1787, [2193], 'get off', '〜から降りる', []],
                ['<get off>', '降りる', 'おりる']
            ],
            [
                [1788, [10076], 'escape', '逃げる', [
                    [2194, 'get out', '逃げる']
                ]],
                ['<escape> from reality', '逃避する', 'とうひする']
            ],
            [
                [1789, [2195], 'get to', '〜に着く', []],
                ['<get to>', '着く', 'つく']
            ],
            [
                [1790, [1545], 'get at', '～を言おうとする', []],
                ["I still don't see your point. What are you <getting at>?", '言おうとしている', 'いおうとしている']
            ],
            [
                [1791, [1546], 'get by', 'なんとかやりくりする', []],
                ["I'll <get by> on the wages from my temporary job.", 'なんとかやりくりし', 'なんとかやりくりし']
            ],
            [
                [1792, [1547], 'get ～ across', '～を伝える、分かってもらう', []],
                ['The professor tried to <get> the point <across> to the students.', '伝えようと', 'つたえようと']
            ],
            [
                [1793, [1548], 'get away with', '（罰を受けずに・ばれずに）逃げおおせる', []],
                ['He cheated on the exam and <got away with> it.', 'ばれずに済んだ', 'ばれずにすんだ']
            ]
        ],
        ['let / pull', [
                [1794, [1549], 'let go of', '～を手放す', []],
                ["The little girl held on to her mother's hand and would not <let go of> it.", '放そうと', 'はなそうと']
            ],
            [
                [1795, [1550], 'let ～ in', '～を中に入れる', []],
                ['The door is locked. Please <let> me <in>.', '中に入れて', 'なかにいれて']
            ],
            [
                [1796, [1551], 'let alone', 'ましてや…ない', []],
                ["The baby can't even crawl, <let alone> walk.", 'ましてや', 'ましてや']
            ],
            [
                [1797, [1552], 'pull up [over]', '車をを止める', []],
                ['<pull up> at a red light', '車を止める', 'くるまをとめる']
            ]
        ],
        ['it / that', [
                [1798, [1553], 'make it', '(約束・予定通り)やり遂げる、都合がつく、間に合う', []],
                ['I <made it> to the appointment barely in time.', '間に合った', 'まにあった']
            ],
            [
                [1799, [1554], "That's it", 'もう終わりだ； まさにそれだ、その通りだ', []],
                ["<That's it> for today's lesson.", 'もう終わり', 'もうおわり']
            ],
            [
                [1800, [1555], 'That is that', 'それでおしまいだ、それだけのこと', []],
                ["<That's it> for today's lesson.", 'これでおしまい', 'これでおしまい'],
                ["<That's it>! That's exactly what I have been looking for.", 'まさにそれだ', 'まさにそれだ']
            ]
        ]
    ],
    ['熟語表現・2', ['make 〜 of', [
                [1801, [1556], 'make ～ of A', 'Aを～と評価する、判断する', []],
                ['The royal family was criticized for <making> much <of> only male heirs.', '評価している', 'ひょうかしている'],
                ['What do you <make of> this message from John?', '判断する', 'はんだんする']
            ],
            [
                [1802, [1557], 'make the most of', '～を最大限利用する', []],
                ["What's important is to <make the most of> your abilities and talents.", '最大限利用する', 'さいだいげんりようする']
            ],
            [
                [1803, [1558], 'make the best of', '～をできる限り利用する', []],
                ['<make the best of> a bad situation', 'なんとか最善を尽くす', 'なんとかさいぜんをつくす']
            ]
        ],
        ['make', [
                [1804, [12186], 'make', 'なる', []],
                ['He will <make> a good teacher.', 'なる', 'なる']
            ],
            [
                [1805, [1559], 'make sure', '確実に～する； ～を確かめる', []],
                ['<Make sure> he is dead before calling the police.', '確実に', 'かくじつに']
            ],
            [
                [1806, [1560], 'make ends meet', 'やりくりする、帳尻を合わせる', []],
                ["With my six children and the housing loan, it's really hard to <make ends meet>.", 'やりくりする', 'やりくりする']
            ],
            [
                [1807, [1561], 'make believe', '～のふりをする、真似をする', []],
                ['The kids <made believe> they were doctors and nurses.', 'ふりをした', 'ふりをした']
            ],
            [
                [1808, [1562], 'make a scene', 'ひと騒ぎする、醜態を晒す', []],
                ['Jessica <made a scene> in the restaurant when she found a hair in her soup.', 'ひと騒動を起こした', 'ひとそうどうをおこした']
            ]
        ],
        ['think / thought', [
                [1809, [1563], 'think much of', '～を高く評価する', []],
                ["I don't <think much of> this film.", 'あまりいいと思わ', 'あまりいいとおもわ']
            ],
            [
                [1810, [1564], 'think better of', '～を考え直す、見直す', []],
                ['Fred was about to say something but seemed to <think better of> it.', '考え直した', 'かんがえなおした']
            ],
            [
                [1811, [1565], 'think twice', 'よく考える', []],
                ['<Think twice> before you act.', 'よく考えろ', 'よくかんがえろ']
            ],
            [
                [1812, [1566], 'on second thought', '考え直して、やっぱり', []],
                ["I'll have a Coke. No <on second thought>, I'll have a Pepsi.", 'やっぱり', 'やっぱり']
            ]
        ],
        ['show / see', [
                [1813, [1567], 'show off', '～を見せびらかせる、誇示する', []],
                ['Nicole went to the party just to <show off> her new boyfriend.', '見せびらかせる', 'みせびらかせる']
            ],
            [
                [1814, [1568], 'show up', '現れる、登場する', []],
                ["I waited for two hours, but she didn't <show up>.", '現れ', 'あらわれ']
            ],
            [
                [1815, [1569], 'see to', '～に対処する、の世話をする、を手配する', []],
                ["We'll <see to> it that your suitcase is in your room as soon as possible.", '手配する', 'てはいする']
            ],
            [
                [1816, [1570], 'see through', '～（嘘など）を見抜く； ～を最後までやり通す； (人)を最後まで助ける', []],
                ['I <saw through> her obvious lie.', '見抜いた', 'みぬいた'],
                ['I wonder if I can <see> this job <through>.', 'やり通す', 'やりとおす']
            ]
        ],
        ['way', [
                [1817, [12056], 'way', '点、距離、方', []],
                ['In some <ways> they are right.', '点', 'てん'],
                ['The island is a long <way> off.', '距離', 'きょり'],
                ['Come this <way>, please.', '方', 'ほう']
            ],
            [
                [1818, [2196], "have one's own way", '自分の思い通りにやる', []],
                ["<have one's own way>", '自分の思い通りにやる', 'じぶんのおもいどおりにやる']
            ],
            [
                [1819, [2197], "on the [one's] way to", '〜に向かっている', []],
                ["<on the [one's] way to>", '向かっている', 'むかっている']
            ],
            [
                [1820, [1571], "in the way of A / in A's way", 'Aの邪魔になって', []],
                ['You are standing <in the [my] way>. Please step aside.', '邪魔になる', 'じゃまになる']
            ],
            [
                [1821, [1572], "make one's way", '前進する', []],
                ['He slowly <made his way> to the door and got out.', '前進した', 'ぜんしんした']
            ],
            [
                [1822, [1573], "find one's way", 'たどり着く、入ってくる', []],
                ['Christianity <found its way> into Japan in the 16th century.', '入ってきた', 'はいってきた']
            ],
            [
                [1823, [1574], "go out of one's way to do", 'わざわざ～する', []],
                ['My neighbor <went out of her way to> take care of my kids when I was ill in bed.', 'わざわざ', 'わざわざ']
            ],
            [
                [1824, [11699], 'via', '経由で', [
                    [1575, 'by way of', '～を経由して、～によって']
                ]],
                ['pay bills <via> the Internet', '経由で', 'けいゆで']
            ],
            [
                [1825, [1576], 'have a way of doing', '～する癖がある、傾向がある', []],
                ['My grandpa <has a way of> exaggerating thing.', '癖がある', 'くせがある']
            ],
            [
                [1826, [1577], 'under way', '進行中で', []],
                ['Our new project is now <under way>.', '進行中です', 'しんこうちゅうです']
            ]
        ],
        ['true', [
                [1827, [2188], 'come true', '実現する', []],
                ['<come true>', '実現する', 'じつげんする']
            ],
            [
                [1828, [1578], 'true for [of]', '～に当てはまる', []],
                ['Japan has been in long-term recession, but the same is <true for [of]> many other countries.', 'あてはまる', 'あてはまる']
            ],
            [
                [1829, [1579], 'hold true [good]', '当てはまる、通用する', []],
                ['What the Greek philosopher said thousands of years ago still <holds true [good]> today.', '通用する', 'つうようする']
            ],
            [
                [1830, [1580], 'true to life', '実物そっくりの', []],
                ['The wax dolls were extremely <true to life>.', '実物そっくり', 'じつぶつそっくり']
            ]
        ],
        ['give / put 〜 to', [
                [1831, [1581], 'give rise to', '～を生じる、引き起こす', []],
                ['The earthquake <gave rise to> a tsunami.', '引き起こした', 'ひきおこした']
            ],
            [
                [1832, [1582], 'give birth to', '～を産む； 生じる、引き起こす', []],
                ['On average, a Japanese woman <gives birth to> 1.children in her life time.', '産む', 'うむ']
            ],
            [
                [1833, [1583], 'put an end to', '～を終わらせる', []],
                ['<put an end to> the war', '終わらせる', 'おわらせる']
            ]
        ],
        ['turn / return', [
                [1834, [1584], 'take turns', '交替する、順番にやる', []],
                ['During the long trip we <took turns> driving.', '交替で', 'こうたいで']
            ],
            [
                [1835, [1585], 'in turn', 'それが今度は', []],
                ["Lack of sleep stress, which <in turn> leads to lower efficiency in one's work.", 'それが今度は', 'それがこんどは']
            ],
            [
                [1836, [1586], 'in return', '(～の)お返しに(for)', []],
                ['Parents often encourage children with a small allowance <in return> for simple chores.', 'お返しに', 'おかえしに']
            ]
        ],
        ['question', [
                [1837, [1587], 'out of the question', '論外である、話にならない', []],
                ["It's <out of the question> to raise consumption tax to 30%.", '論外だ', 'ろんがいだ']
            ],
            [
                [1838, [1588], 'in question', '問題になっている、当の', []],
                ['The name of the artist <in question> is George Winston.', '問題になっている', 'もんだいになっている']
            ]
        ],
        ['続けて・〜まで', [
                [1839, [1589], 'on end', '続けて', []],
                ['We had rain for weeks <on end>.', '続けて', 'つづけて']
            ],
            [
                [1840, [10717], 'row', '列', [
                    [1590, 'in a row', '続けて']
                ]],
                ['sit in the front <row>', '列', 'れつ']
            ],
            [
                [1841, [1591], 'so far', 'これ(それ)までのところは', []],
                ['The marriage is going fine <so far>.', 'これまでのところ', 'これまでのところ']
            ],
            [
                [1842, [1592], 'go so far as to do', '～までする', []],
                ["I wouldn't <go so far as to> say it's impossible, but I think it's very difficult to carry out the plan.", 'までは', 'までは']
            ],
            [
                [1843, [1593], 'up to', '(最大で)～まで； ～次第で； ～(良くないこと)に従事して、～を企んで', []],
                ['He is so generous that he can lend me <up to> $2,000 without interest.', 'まで', 'まで'],
                ["It's <up to> you to decide which restaurant we will be dining at.", '決めていい', 'きめていい'],
                ['God knows what he has been <up to> recently.', '企んでいる', 'たくらんでいる']
            ]
        ],
        ['leave / rule', [
                [1844, [1594], 'leave behind', '～を置き忘れる、残していく', []],
                ['Please do not <leave behind> any of your belongings when you leave.', '置き忘れ', 'おきわすれ']
            ],
            [
                [1845, [1595], 'leave out', '～を省く、除外する、のけ者にする', []],
                ['The girl student felt <left out> by her classmates.', 'のけ者にされた', 'のけものにされた']
            ],
            [
                [1846, [1596], 'rule out', '～を除外する', []],
                ['The possibility that the medicine may have some side effects cannot be <ruled out>.', '除外できない', 'じょがいできない']
            ]
        ],
        ['対句表現', [
                [1847, [1597], 'back and forth', '行ったり来たり', []],
                ['A lot of people go <back and forth> between Japan and Korea every day.', '行ったり来たり', 'いったりきたり']
            ],
            [
                [1848, [1598], 'upside down', '上下逆さまに', []],
                ['I knew he was illiterate since he was reading the book <upside down>.', '上下逆さまに', 'じょうげさかさまに']
            ],
            [
                [1849, [1599], 'inside out', '裏返しに', []],
                ['The shirt is <inside out>.', '裏返しだ', 'うらがえしだ']
            ],
            [
                [1850, [1600], 'vice versa', 'その逆、逆もまた同様', []],
                ['Whenever I say yes, my wife says no, and <vice versa>.', 'その逆もまた同様', 'そのぎゃくもまたどうよう']
            ],
            [
                [1851, [1601], 'other way around', 'あべこべ、逆', []],
                ['Will you take a bath and then have dinner, or the <other way around>?', '逆', 'ぎゃく']
            ],
            [
                [1852, [1602], 'this and that', 'あれこれ、様々なこと', []],
                ['We talked about <this and that> in the cafe.', 'あれこれ', 'あれこれ']
            ]
        ]
    ],
    ['熟語表現・3', ['good', [
                [1853, [12173], 'good', 'かなり、利益', []],
                ['a <good> many people', 'かなり', 'かなり'],
                ['work for the public <good>', '利益', 'りえき']
            ],
            [
                [1854, [2198], 'do 〜 good', '〜のため・利益になる', []],
                ['Do you think it will <do> any <good>?', '役に立つ', 'やくにたつ']
            ],
            [
                [1855, [1603], 'for the good of', '～のために、利益となるように', []],
                ['I jog every morning <for the good of> my health.', 'ために', 'ために']
            ],
            [
                [1856, [1604], 'as good as', '～も同然', []],
                ['He is <as good as> his word.', 'も同然だ', 'もどうぜんだ']
            ]
        ],
        ['better / best / least', [
                [1857, [1605], 'get the better of', '～に勝る、打ち勝つ', []],
                ['Curiosity <got the better of> me, and I opened her diary.', '勝って', 'かって']
            ],
            [
                [1858, [1606], 'know better', '～するほど馬鹿ではない、もっと分別がある', []],
                ['You should <know better> than to pick up a hitchhiker.', '馬鹿なことはすべきではなかった', 'ばかなことはすべきではなかった']
            ],
            [
                [1859, [1607], 'to the best of my knowledge', '私の知る限りでは', []],
                ['<To the best of my knowledge>, Kate has nothing to do with the crime.', '私の知る限りでは', 'わたしのしるかぎりでは']
            ],
            [
                [1860, [1608], 'to say the least', '控えめに言っても', []],
                ['The film was boring, <to say the least>.', '控えめに言っても', 'ひかえめにいっても']
            ]
        ],
        ['take : 受け止める', [
                [1861, [1609], 'take ～ for granted', '当然とみなす', []],
                ["I hope you don't <take> my help <for granted>.", '当たり前だと思わ', 'あたりまえだとしわ']
            ],
            [
                [1862, [1610], "take one's word for it", '～の言うことを信じる', []],
                ["That's what really happened. <Take my word for it>.", '信じて', 'しんじて']
            ],
            [
                [1863, [1611], 'take it easy', '気楽にやる', []],
                ["We still have a long way to go, so let's <take it easy>.", '気楽にやる', 'きらくにやる']
            ]
        ],
        ['追いつく・遅れる', [
                [1864, [1533], 'come up with', '～を思いつく', []],
                ['You need to <come up with> a more plausible excuse; otherwise no one will believe you.', '思いついた', 'おもいついた']
            ],
            [
                [1865, [976], 'put up with', '耐える、我慢する', []],
                ['During my flight, I had to <put up with> endless snoring from the man seated next to me.', '耐え', 'たえ']
            ],
            [
                [1866, [1612], 'keep up with', '～に遅れずについていく', []],
                ["I'm years old, and it is rather difficult for me to <keep up with> the times.", '遅れずに付いていく', 'おくれずについていく']
            ],
            [
                [1867, [1613], 'catch up with', '～に追いつく', []],
                ['After missing school for a week, she had lots of schoolwork to <catch up with>.', '追いつく', 'おいつく']
            ],
            [
                [1868, [11306], 'lag', '遅れ', [
                    [1614, 'fall behind', '遅れる']
                ]],
                ['suffer from jet <lag>', '時差ぼけ', 'じさぼけ']
            ],
            [
                [1869, [12142], 'touch', '連絡、感動させた、少し', [
                    [1615, 'keep [stay] in touch with', '～と連絡を取り合う']
                ]],
                ['get in <touch> with him by phone', '連絡', 'れんらく'],
                ['The story <touched> him deeply.', '感動させた', 'かんどうさせた'],
                ['add a <touch> of spice', '少し', 'すこし']
            ]
        ],
        ['look : 見る', [
                [1870, [2199], 'look after', '〜の面倒を見る', []],
                ['<look after>', '面倒を見る', 'めんどうをみる']
            ],
            [
                [1871, [2200], 'look up to', '〜を尊敬する', []],
                ['<look up to>', '尊敬する', 'そんけいする']
            ],
            [
                [1872, [2201], 'look forward to', '〜を楽しみにする', []],
                ['<look forward to>', '楽しみにする', 'たのしみにする']
            ],
            [
                [1873, [1616], 'look into', '調べる、検討する', []],
                ['I promise to <look into> the matter and give you an answer one of these days.', '検討して', 'けんとうして']
            ],
            [
                [1874, [1617], 'look over', '～にざっと目を通す', []],
                ['She quickly <looked over> the catalogue and placed an order.', 'ざっと目を通し', 'ざっとめをとおし']
            ],
            [
                [1875, [1618], 'look on [upon]', '～を（…と）みなす(as)', []],
                ['I <look upon> these hardships not as obstacles, but as a challenge.', 'みなしている', 'みなしている']
            ]
        ],
        ['pass : 渡す／過ぎる', [
                [1876, [2202], 'pass by', '（時が）過ぎる、通り過ぎる', []],
                ['The years <pass by> quickly.', '過ぎる', 'すぎる']
            ],
            [
                [1877, [1619], 'pass on [down]', '～を（…に）手渡す、伝える(to)', []],
                ['The folk tale has been <passed on> from generation to generation.', '伝わっている', 'つたわっている']
            ],
            [
                [1878, [1620], 'pass for [as]', '～として（世間に）通る、通用する', []],
                ['My mother could <pass for> thirty, though actually she is in her mid-fifties.', '通用する', 'つうようする']
            ],
            [
                [1879, [1621], 'pass out', '気絶する', []],
                ['They <passed out> one after another from the heat.', '気絶した', 'きぜつした']
            ],
            [
                [1880, [1622], 'pass away', '亡くなる', []],
                ['My father <passed away> at the age of 88.', '亡くなった', 'なくなった']
            ]
        ],
        ['reach / set / work', [
                [1881, [10011], 'reach', '～に着く、～に達する', []],
                ['<reach> the mountain top', '達する', 'たっする']
            ],
            [
                [1882, [1623], 'reach (out) for', '～に手を伸ばす', []],
                ['He <reached (out) for> the phone and picked up the receiver.', '手を伸ばして', 'てをのばして']
            ],
            [
                [1883, [1624], 'set out [off]', '(～へ)出発する(for)', []],
                ['We <set out> for the mountain at 6 a.m.', '出発した', 'しゅっぱつした']
            ],
            [
                [1884, [1625], 'set ～ free', '～を解放する', []],
                ['The bank robber <set> the hostage <free> and came out of the building with his hands up.', '解放し', 'かいほうし']
            ],
            [
                [1885, [12081], 'work', '作品、うまく行く', []],
                ['<works> of art', '作品', 'さくひん'],
                ['This plan will <work>.', 'うまく行く', 'うまくいく']
            ],
            [
                [1886, [1626], 'work out', '～を解く、考え出す； うまくいく； トレーニングをする', []],
                ["We'll <work out> the best possible solution.", '考え出す', 'かんがえだす'],
                ["Don't worry. Everything is going <work out> fine.", 'うまくいく', 'うまくいく'],
                ['I <work out> at the gym twice a week.', 'トレーニングをして', 'とれえにんぐをして']
            ],
            [
                [1887, [1627], 'work on', '～(仕事)に取り組む', []],
                ['They have been <working on> this project for years.', '取り組んでいる', 'とりくんでいる']
            ]
        ],
        ['pick / part', [
                [1888, [1628], 'pick up', '～を拾う、取り上げる； ～を車に乗せる、車で迎える； ～を買う； ～(言語・知識など)を身に付ける', []],
                ['Please <pick> me <up> at the airport at ten.', '車に乗せて', 'くるまにのせて'],
                ['I <picked up> milk at the supermarket.', '買った', 'かった'],
                ['<pick up> French', '身に付ける', 'みにつける']
            ],
            [
                [1889, [1629], 'part with', '～を手放す、と別れる', []],
                ['For lack of room, I had to <part with> some of my books.', '手放さ', 'てばなさ']
            ]
        ],
        ['on : 依存', [
                [1890, [1630], 'live on', '～に頼って生きる； を主食とする', []],
                ['I can hardly <live on> 20,000 yen a month.', '生活でき', 'せいかつでき'],
                ['The Japanese live on rice.', '主食としている', 'しゅしょくとしている']
            ],
            [
                [1891, [1631], 'fall back on', '～に頼る、を最後の拠り所とする', []],
                ["As I'm unemployed, I have to <fall back on> my savings.", '頼ら', 'たよら']
            ],
            [
                [1892, [1632], 'rest on', '～に頼る； に基づく', []],
                ['His argument <rests on> a false assumption.', '基づいている', 'もとづいている']
            ],
            [
                [1893, [1633], 'cut down on', '～を減らす、削減する', []],
                ['You should <cut down on> fatty foods for the sake of your health.', '減らす', 'へらす']
            ]
        ],
        ['point', [
                [1894, [12153, 1634], 'point', '指摘する、意味、主張', []],
                ['<point> out that it is wrong', '指摘する', 'してきする'],
                ["There's no <point> in writing it.", '意味', 'いみ'],
                ['prove his <point>', '主張', 'しゅちょう']
            ],
            [
                [1895, [1635], 'to the point', '的を射ている', []],
                ['His presentation was brief and <to the point>.', '的を射ていた', 'まとをいていた']
            ],
            [
                [1896, [1636], 'make a point of doing', '必ず～することにしている； ～を重視する', []],
                ['I <make a point of> sleeping at least ten hours a day.', 'ことにしている', 'ことにしている']
            ]
        ],
        ['a ＋顔のパーツ', [
                [1897, [1637], 'keep an eye on', '～を見張る', []],
                ["Please <keep an eye on> my boy while I'm away.", '見張って', 'みはって']
            ],
            [
                [1898, [1638], 'have an eye for', '～を見る目がある、鑑賞眼がある', []],
                ['Pablo <has an eye for> beauty.', '見る目がある', 'みるめがある']
            ],
            [
                [1899, [1639], 'turn a deaf ear to', '～を聞こうとしない', []],
                ["The boy <turned a death ear to> his father's preaching.", '聞こうとしなかった', 'きこうとしなかった']
            ],
            [
                [1900, [1640], 'make a face', '顔をしかめる', []],
                ['He <made a face> at the disgusting smell in the room.', '顔をしかめた', 'かおをしかめた']
            ]
        ],
        ['まだ〜していない', [
                [1901, [10010], 'remain', 'ままでいる', [
                    [1641, 'remain to do', 'まだ～していない']
                ]],
                ['<remain> silent', 'ままでいる', 'ままでいる']
            ],
            [
                [1902, [1642], 'have [be] yet to do', 'まだ～していない', []],
                ["Scientists <have [are] yet to> find any clear evidence that mobile phones are harmful to one's health.", 'まだ', 'まだ']
            ]
        ],
        ['諸々の熟語表現', [
                [1903, [11452], 'behalf', '代表して', [
                    [1643, 'on behalf of', '～に代わって、を代表して']
                ]],
                ['on <behalf> of the class', '代表して', 'だいひょうして']
            ],
            [
                [1904, [1644], 'second to none', '誰にも負けない', []],
                ['When it comes to mathematics, Bill is <second to none> in the class.', '誰にも負けない', 'だれにもまけない']
            ],
            [
                [1905, [1645], 'once and for all', 'これを最後に、きっぱりと', []],
                ['"I quit smoking <once and for all>," said my father for the fifth time this month.', 'きっぱりと', 'きっぱりと']
            ],
            [
                [1906, [1646], 'for once', '今回だけは、１回でいいから', []],
                ["I hope you won't be late <for once>.", '今回だけは', 'こんかいだけは']
            ],
            [
                [1907, [1647], 'at stake', '危険にさらされて； 問題となって', []],
                ['The future of our company is now <at stake>.', '危機にさらされている', 'ききにさらされている']
            ],
            [
                [1908, [1648], 'in the wake of', '～の後に続いて', []],
                ['The country faced a financial crisis <in the wake of> the massive earthquake.', '後で', 'あとで']
            ]
        ],
        ['会話の定型表現', [
                [1909, [1649], 'Beats me.', '分からない', []],
                ['"When will we arrive?" "<Beats me.>"', '分からない', 'わからない']
            ],
            [
                [1910, [1650], 'Serves you right.', 'ざまあみろ、当然の報いだ', []],
                ['You cheated on the exam and failed. (It) <Serves you right.>', '当然の報いだ', 'とうぜんのむくいだ']
            ],
            [
                [1911, [1651], 'Give me a break.', 'よしてくれ', []],
                ['"I forgot my homework because my dog ate it." "<Give me a break>, boy."', '冗談はよしなさい', 'じょうだんはよしなさい']
            ],
            [
                [1912, [1652], 'call it a day', '今日はもう終わり', []],
                ["We have learned a lot. Let's <call it a day>.", '今日はもう終わり', 'きょうはもうおわり']
            ]
        ]
    ],
    ['心・身体', ['精神・心', [
                [1913, [10551, 1653], 'mental', '精神の', []],
                ['a <mental> illness', '精神の', 'せいしんの']
            ],
            [
                [1914, [10223, 1654], 'spirit', '精神', []],
                ['the <spirit> of fair play', '精神', 'せいしん']
            ],
            [
                [1915, [12188, 1655], 'soul', '魂、1人', []],
                ['her body and <soul>', '魂', 'たましい'],
                ['There was not a <soul> there.', '1人', 'ひとり']
            ],
            [
                [1916, [10189, 1656], 'material', '物質', []],
                ['produce new <materials>', '物質', 'ぶっしつ']
            ]
        ],
        ['精神の異常', [
                [1917, [12006], 'insane', '正気を失っている', [
                    [1657, 'sane', '正気の']
                ]],
                ['be completely <insane>', '正気を失っている', 'しょうきをうしなっている']
            ],
            [
                [1918, [10791, 1658], 'abuse', '虐待', []],
                ['child <abuse>', '虐待', 'ぎゃくたい']
            ],
            [
                [1919, [11675, 1659], 'addict', '中毒である', []],
                ['be <addicted> to drugs', '中毒である', 'ちゅうどくである']
            ]
        ],
        ['負傷', [
                [1920, [10173, 1660], 'injure', '～を傷つける', []],
                ['be <injured> in the accident', '負傷する', 'ふしょうする']
            ],
            [
                [1921, [10747, 1661], 'wound', '傷', []],
                ['a knife <wound>', '傷', 'きず']
            ],
            [
                [1922, [1662], 'bleed', '出血する', []],
                ['"What happened? Your hand is <bleeding>." "Don\'t worry. It\'s only a scratch."', '出血している', 'しゅっけつしている']
            ],
            [
                [1923, [11351, 1663], 'scratch', 'かく', []],
                ['<scratch> your back', 'かく', 'かく']
            ],
            [
                [1924, [1664], 'bruise', 'あざ、打撲傷 ～に打撲を負わせる', []],
                ['Gabriel wore sunglasses to conceal the <bruise> around her eye.', 'あざ', 'あざ']
            ],
            [
                [1925, [10108], 'hurt', '～を傷つける', []],
                ['<hurt> her feelings', '傷つける', 'きずつける']
            ],
            [
                [1926, [12015], 'intact', '無傷の', []],
                ['The building remains <intact>.', '無傷の', 'むきずの']
            ]
        ],
        ['苦痛', [
                [1927, [10036, 1665], 'suffer', '～を経験する、受ける、苦しむ', []],
                ['<suffer> heavy damage', '受ける', 'うける']
            ],
            [
                [1928, [11935, 1666], 'torture', '拷問', []],
                ['endure terrible <torture>', '拷問', 'ごうもん']
            ],
            [
                [1929, [1667], 'torment', '苦痛； ～を苦しめる', []],
                ["The boy has been <tormented> by guilt since he stole his father's money.", '苦しめられている', 'くるしめられている']
            ]
        ],
        ['疲労・退屈', [
                [1930, [11651], 'vigorous', '精力的な', [
                    [1668, 'vigor', '活力']
                ]],
                ['<vigorous> activity', '精力的な', 'せいりょくてきな']
            ],
            [
                [1931, [1669], 'feeble', '弱々しい', []],
                ["The old man was so <feeble> that he couldn't so much as stand up.", '弱々しく', 'よわよわしく']
            ],
            [
                [1932, [11112, 1670], 'pale', '青白い', []],
                ['You look <pale>', '青白い', 'あおじろい']
            ],
            [
                [1933, [11443, 1671], 'fatigue', '疲労', []],
                ['mental <fatigue>', '疲労', 'ひろう']
            ],
            [
                [1934, [1672], 'weary', '(～)に疲れている、飽き飽きしている(of)', []],
                ["I'm <weary> of answering the same question over and over again.", '飽き飽きしている', 'あきあきしている']
            ],
            [
                [1935, [1673], 'tedious', '退屈な', []],
                ['a <tedious> speech', '退屈な', 'たいくつな']
            ],
            [
                [1936, [1674], 'dreary', '退屈な； ものわびしい', []],
                ['a wet, <dreary> Saturday afternoon', '退屈な', 'たいくつな']
            ]
        ],
        ['身体のパーツ', [
                [1937, [11061, 1675], 'thumb', '親指', []],
                ['the <thumb> of my left hand', '親指', 'おやゆび']
            ],
            [
                [1938, [1676], 'palm', '手のひら', []],
                ["on one's <palm>", '手のひら', 'てのひら']
            ],
            [
                [1939, [1677], 'wrist', '手首', []],
                ['wear a fitness tracker on <wrist>', '手首', 'てくび']
            ],
            [
                [1940, [1678], 'fist', '握りこぶし', []],
                ['clenched <fist> of anger', '握りこぶし', 'にぎりこぶし']
            ],
            [
                [1941, [1679], 'elbow', 'ひじ', []],
                ['rest <elbow> on the table', 'ひじ', 'ひじ']
            ],
            [
                [1942, [10960, 1680], 'muscle', '筋肉', []],
                ['<muscle> a and bones', '筋肉', 'きんにく']
            ],
            [
                [1943, [1681], 'thigh', '大股', []],
                ['pulled a muscle in <thigh>', '太もも', 'ふともも']
            ],
            [
                [1944, [1682], 'knee', '膝', []],
                ['scraped <knee> from falling', '膝', 'ひざ']
            ],
            [
                [1945, [1683], 'heel', 'かかと', []],
                ['a shoe with a low <heel>', 'かかと', 'かかと']
            ],
            [
                [1946, [1684], 'ankle', '足首', []],
                ['twisted <ankle> while hiking', '足首', 'あしくび']
            ],
            [
                [1947, [1685], 'toe', '足の指、つま先', []],
                ['stubbed my <toe> on the dresser', 'つま先', 'つまさき']
            ],
            [
                [1948, [1686], "to one's feet", '立って、立った状態で', []],
                ["rise <to one's feet>", '立つ', 'たつ']
            ],
            [
                [1949, [10704, 1687], 'chest', '胸', []],
                ['have <chest> pains', '胸', 'むね']
            ],
            [
                [1950, [11867, 1688], 'limb', '手足', []],
                ['have long <limbs>', '手足', 'てあし']
            ],
            [
                [1951, [11513], 'lap', 'ひざ', []],
                ["sit on mother's <lap>", 'ひざ', 'ひざ']
            ]
        ],
        ['顔のパーツ', [
                [1952, [1689], 'forehead', 'ひたい', []],
                ['<forehead> wrinkles from stress', 'ひたい', 'ひたい']
            ],
            [
                [1953, [1690], 'eyebrow', '眉毛', []],
                ['raised an <eyebrow> in surprise', '眉毛', 'まゆげ']
            ],
            [
                [1954, [1691], 'eyelid', 'まぶた', []],
                ['heavy <eyelids> after a long day', 'まぶた', 'まぶた']
            ],
            [
                [1955, [1692], 'eyelash', 'まつげ', []],
                ['false <eyelashes> for a night out', 'まつげ', 'まつげ']
            ],
            [
                [1956, [1693], 'beard', 'あごひげ', []],
                ['grew a bushy <beard> in quarantine', 'あごひげ', 'あごひげ']
            ],
            [
                [1957, [1694], 'jaw', 'あご', []],
                ['sore <jaw> from grinding teeth', 'あご', 'あご']
            ],
            [
                [1958, [1695], 'chin', 'あご(の先端)', []],
                ['a double <chin>', 'あご', 'あご']
            ],
            [
                [1959, [1696], 'cheek', '頬', []],
                ['pinched my <cheek> to stay awake', '頬', 'ほほ']
            ]
        ],
        ['震える', [
                [1960, [11414, 1697], 'tremble', '震える', []],
                ['<tremble> with fear', 'ふるえる', 'ふるえる']
            ],
            [
                [1961, [1698], 'shiver', '(寒さで)震える', []],
                ['He stood <shivering> in the cold.', '震えながら', 'ふるえながら']
            ],
            [
                [1962, [10107], 'shake', '～を振る', []],
                ['<shake> the bottle well', '振る', 'ふる']
            ],
            [
                [1963, [11724], 'rattle', 'がたがた鳴らす', []],
                ['<rattle> the windows', 'がたがた鳴らす', 'がたがたならす']
            ]
        ],
        ['歩く', [
                [1964, [10392, 1699], 'wander', '歩き回る', []],
                ['<wander> around the streets', '歩き回る', 'あるきまわる']
            ],
            [
                [1965, [11719, 1700], 'roam', '歩き回る', []],
                ['<roam> the streets freely', '歩き回る', 'あるきまわる']
            ],
            [
                [1966, [11723, 1701], 'stroll', 'ぶらつく', []],
                ['<stroll> in the park', 'ぶらつく', 'ぶらつく']
            ],
            [
                [1967, [1702], 'stride', 'ひとまたぎ； 進歩； 大股で歩く', []],
                ['With the spread of the Internet, information technology has made a great <stride> forward.', '進歩', 'しんぽ']
            ],
            [
                [1968, [11731, 1703], 'stumble', 'つまずく', []],
                ['<stumble> on the stairs', 'つまずく', 'つまずく']
            ],
            [
                [1969, [1704], 'creep', '這う、こっそり進む', []],
                ["The mother <crept> out of the room so that she wouldn't wake her baby up.", 'こっそり進んだ', 'こっそりすすんだ']
            ],
            [
                [1970, [11706, 1705], 'linger', '残る', []],
                ['<linger> in my memory', '残る', 'のこる']
            ],
            [
                [1971, [11376], 'crawl', 'はって進む', []],
                ['<crawl> into bed', 'はって進む', 'はってすすむ']
            ]
        ],
        ['鼻', [
                [1972, [1706], 'sniff', 'くんくん嗅ぐ； ～のにおいを嗅ぐ', []],
                ['This dog is trained to <sniff> out drugs.', '嗅ぎ分ける', 'かぎわける']
            ],
            [
                [1973, [1707], 'sneeze', 'くしゃみをする', []],
                ['The dust made me <sneeze>.', 'くしゃみをする', 'くしゃみをする']
            ],
            [
                [1974, [1708], 'snore', 'いびきをかく', []],
                ["Wake up! You're <snoring>.", 'いびきをかく', 'いびきをかく']
            ],
            [
                [1975, [1709], 'sneer', '(～を)あざ笑う、鼻で笑う(at)', []],
                ['Tom <sneer>ed at my proposal.', 'あざ笑った', 'あざわらった']
            ]
        ],
        ['ジェスチャー・表情', [
                [1976, [11783, 1710], 'shrug', '肩をすくめる', []],
                ['<shrug> your shoulders', 'すくめる', 'すくめる']
            ],
            [
                [1977, [1711], "clear one's throat", '咳払いする', []],
                ['The man <cleared his throat> before he began his speech.', '咳払いをした', 'せきばらいをした']
            ],
            [
                [1978, [11720, 1712], 'frown', 'まゆをひそめる', []],
                ['<frown> on smoking', 'まゆをひそめる', 'まゆをひそめる']
            ],
            [
                [1979, [1713], 'grimace', 'しかめ面をする； しかめ面', []],
                ['make a <grimace> with pain', '顔をしかめる', 'かおをしかめる']
            ],
            [
                [1980, [1714], 'blink', 'まばたきをする； まばたき', []],
                ['I always <blink> when my photo is being taken.', 'まばたきをする', 'まばたきをする']
            ],
            [
                [1981, [11439, 1715], 'yawn', 'あくびをする', []],
                ['<yawn> when you are bored', 'あくびをする', 'あくびをする']
            ]
        ],
        ['声', [
                [1982, [1716], 'mutter', 'つぶやく', []],
                ["What are you <muttering> [murmuring, mumbling]? I can't even hear you.", 'つぶやいている', 'つぶやいている']
            ],
            [
                [1983, [11751, 1717], 'murmur', 'つぶやく', []],
                ['<murmur> in a low voice', 'つぶやく', 'つぶやく']
            ],
            [
                [1984, [1718], 'mumble', 'つぶやく', []],
                ['<mumble> a few words', 'つぶやく', 'つぶやく']
            ],
            [
                [1985, [10918, 1719], 'whisper', 'ささやく', []],
                ['<whisper> in her ear', 'ささやく', 'ささやく']
            ],
            [
                [1986, [1720], 'shriek', '金切り声を上げる、叫ぶ', []],
                ['She <shrieked> whenever she saw a snake.', '叫んだ', 'さけんだ']
            ],
            [
                [1987, [1721], 'sob', 'すすり泣く', []],
                ['She fell down on the floor and started <sobbing>.', 'すすり泣き', 'すすりなき']
            ],
            [
                [1988, [10909], 'screaming', '悲鳴をあげる', []],
                ['a girl <screaming> for help', '悲鳴をあげる', 'ひめいをあげる']
            ],
            [
                [1989, [11668], 'vocal', '発声', []],
                ['the <vocal> organ', '発声', 'はっせい']
            ]
        ]
    ],
    ['コロケーションで覚える形容詞', ['本物・偽物', [
                [1990, [10812, 1722], 'genuine', '本物の、真の、心からの', []],
                ['a <genuine> interest in science', '真の', 'しんの']
            ],
            [
                [1991, [11959, 1723], 'authentic', '本物の', []],
                ['<authentic> Italian food', '本物の', 'ほんものの']
            ],
            [
                [1992, [11630, 1724], 'fake', '偽物の', []],
                ['make a <fake> cake', 'にせ物の', 'にせものの']
            ],
            [
                [1993, [10841, 1725], 'false', 'まちがいの', []],
                ['True or <false>?', 'まちがい', 'まちがい']
            ],
            [
                [1994, [11641, 1726], 'sincere', '心からの', []],
                ['my <sincere> apologies', '心からの', 'こころからの']
            ],
            [
                [1995, [11962, 1727], 'sheer', 'まったくの', []],
                ['<sheer> good luck', 'まったくの', 'まったくの']
            ]
        ],
        ['精巧・精緻・熟達', [
                [1996, [11183, 1728], 'elaborate', '手の込んだ', []],
                ['an <elaborate> system', '手の込んだ', 'てのこんだ']
            ],
            [
                [1997, [12012, 1729], 'intricate', '複雑な', []],
                ['<intricate> pattern', '複雑な', 'ふくざつな']
            ],
            [
                [1998, [1730], 'exquisite', '精緻な、素晴らしい', []],
                ['an <exquisite> piece of artwork', '精緻な', 'せいちな']
            ],
            [
                [1999, [10816, 1731], 'sophisticated', '高度な', []],
                ['<sophisticated> computer technology', '高度な', 'こうどな']
            ],
            [
                [2000, [11901], 'proficiency', '検定', [
                    [1732, 'proficient', '熟達した']
                ]],
                ['an English <proficiency> test', '検定', 'けんてい']
            ],
            [
                [2001, [11140], 'pure', '純', []],
                ['<pure> gold', '純', 'じゅん']
            ]
        ],
        ['対義語', [
                [2002, [10296, 1733], 'negative', '否定の', []],
                ['a <negative> answer', '否定的な', 'ひていてきな']
            ],
            [
                [2003, [11757], 'affirm', '断言する', [
                    [1734, 'affirmative', '肯定の、積極的な']
                ]],
                ['<affirm> that it is true', '断言する', 'だんげんする']
            ],
            [
                [2004, [10278, 1735], 'positive', '積極的な', []],
                ['<positive> thinking', '積極的な', 'せっきょくてきな']
            ],
            [
                [2005, [11955, 1736], 'vertical', '垂直な', []],
                ['a <vertical> wall of rock', '垂直な', 'すいちょくな']
            ],
            [
                [2006, [10756], 'horizon', '地平線', [
                    [1737, 'horizontal', '水平の']
                ]],
                ['the moon rising on the <horizon>', '地平線', 'ちへいせん']
            ],
            [
                [2007, [10755, 1738], 'parallel', '類似（物）、匹敵するもの', []],
                ['have no <parallel> in history', '匹敵するもの', 'ひってきするもの']
            ]
        ],
        ['in- / un-', [
                [2008, [11142, 1739], 'indifferent', '無関心だ', []],
                ['be <indifferent> to politics', '無関心だ', 'むかんしんだ']
            ],
            [
                [2009, [1740], 'infamous', '悪名高い、評判が悪い', []],
                ['Japanese students are <infamous> [notorious] for being too shy and reluctant to speak in language classes.', '評判が悪い', 'ひょうばんがわるい']
            ],
            [
                [2010, [11983, 1741], 'notorious', '悪名高い', []],
                ['a <notorious> crime', '悪名高い', 'あくめいたかい']
            ],
            [
                [2011, [11627, 1742], 'uneasy', '不安な', []],
                ['feel <uneasy> about the future', '不安な', 'ふあんな']
            ],
            [
                [2012, [10829, 1743], 'awkward', '気まずい', []],
                ['an <awkward> silence', '気まずい', 'きまずい']
            ],
            [
                [2013, [11969, 1744], 'clumsy', '不器用な', []],
                ['my <clumsy> fingers', '不器用な', 'ぶきような']
            ]
        ],
        ['-less', [
                [2014, [11649, 1745], 'restless', '落ち着かない', []],
                ['spend a <restless> night', '落ち着かない', 'おちつかない']
            ],
            [
                [2015, [1746], 'relentless', '執拗な、情け容赦のない', []],
                ['The story depicts the <relentless> battle between two politicians.', '執拗な', 'しつような']
            ],
            [
                [2016, [1747], 'ruthless', '情け容赦のない、冷酷な', []],
                ['Mr. Palmer is known as a <ruthless> lawyer who attacks without any mercy or compassion.', '冷酷な', 'れいこくな']
            ],
            [
                [2017, [11974, 1748], 'reckless', '無謀な', []],
                ['his <reckless> driving', '無謀な', 'むぼうな']
            ],
            [
                [2018, [10327], 'unless', '～しない限り', []],
                ["I'll leave tomorrow <unless> it rains.", 'ない限り', 'ないかぎり']
            ],
            [
                [2019, [11659], 'helpless', '無力な', []],
                ['a <helpless> baby', '無力な', 'むりょくな']
            ]
        ],
        ['ばかげた', [
                [2020, [10580, 1749], 'stupid', 'ばかな', []],
                ['say <stupid> things', 'ばかな', 'ばかな']
            ],
            [
                [2021, [11129, 1750], 'silly', 'ばかな', []],
                ['tell <silly> jokes', 'ばかな', 'ばかな']
            ],
            [
                [2022, [11632, 1751], 'absurd', 'ばかげた', []],
                ['a completely <absurd> idea', 'ばかげた', 'ばかげた']
            ],
            [
                [2023, [11173, 1752], 'ridiculous', 'ばかげた', []],
                ['a <ridiculous> error', 'ばかげた', 'ばかげた']
            ]
        ],
        ['強度・柔軟性', [
                [2024, [11633, 1753], 'fragile', '壊れやすい', []],
                ['<fragile> items', '壊れやすい', 'こわれやすい']
            ],
            [
                [2025, [11676, 1754], 'vulnerable', '受けやすい', []],
                ['be <vulnerable> to attack', '受けやすい', 'うけやすい']
            ],
            [
                [2026, [10802, 1755], 'delicate', '繊細な、微妙で難しい', []],
                ['the <delicate> balance of nature', '微妙な', 'びみょうな']
            ],
            [
                [2027, [11327, 1756], 'stiff', '堅い', []],
                ['a <stiff> reply', '堅苦しい', 'かたくるしい']
            ],
            [
                [2028, [11672, 1757], 'rigid', '厳格な', []],
                ['<rigid> rules', '厳格な', 'げんかくな']
            ],
            [
                [2029, [11162, 1758], 'flexible', '柔軟な', []],
                ['have <flexible> thinking', '柔軟な', 'じゅうなんな']
            ]
        ],
        ['傲慢・うぬぼれ・頑固', [
                [2030, [11975, 1759], 'arrogant', '傲慢な', []],
                ['his <arrogant> attitude', 'ごう慢な', 'ごうまんな']
            ],
            [
                [2031, [11323, 1760], 'humble', '謙虚な、粗末な', []],
                ['a <humble> attitude', '謙虚な', 'けんきょな']
            ],
            [
                [2032, [11336, 1761], 'stubborn', '頑固な', []],
                ['a <stubborn> father', '頑固な', 'がんこな']
            ],
            [
                [2033, [1762], 'obstinate', '頑固な', []],
                ['The old man was so <obstinate> [stubborn] that he refused any help from his sons.', '頑固な', 'がんこな']
            ],
            [
                [2034, [10813], 'modest', '控えめな、謙虚な、わずかな', []],
                ['a <modest> dress', '控えめな', 'ひかえめな']
            ]
        ],
        ['激しさ・厳しさ・勇敢さ', [
                [2035, [11329, 1763], 'fierce', '激しい', []],
                ['survive the <fierce> competition', '激しい', 'はげしい']
            ],
            [
                [2036, [11175, 1764], 'harsh', '厳しい', []],
                ['the <harsh> realities of life', '厳しい', 'きびしい']
            ],
            [
                [2037, [1765], 'stern', '厳格な、険しい', []],
                ['Returning home at midnight, Sarah saw her father standing in front of the door with a <stern> look.', '険しい', 'けわしい']
            ],
            [
                [2038, [11150, 1766], 'brave', '勇敢な', []],
                ['a <brave> young soldier', '勇敢な', 'ゆうかんな']
            ],
            [
                [2039, [11626, 1767], 'bold', '大胆な', []],
                ['take <bold> action', '大胆な', 'だいたんな']
            ],
            [
                [2040, [1768], 'timid', '臆病な', []],
                ['Japanese are too <timid> when speaking foreign languages.', '臆病すぎる', 'おくびょうすぎる']
            ],
            [
                [2041, [10255], 'rough', '荒い、大雑把な', []],
                ['a <rough> sketch', '大雑把な', 'おおざっぱな']
            ],
            [
                [2042, [11276], 'dare', 'する勇気がある', []],
                ['No one <dares> to tell the truth.', '勇気がある', 'ゆうきがある']
            ]
        ],
        ['慎重さ', [
                [2043, [10850], 'deliberately', 'わざと', [
                    [1769, 'deliberate', '意図的な、故意の； 慎重な']
                ]],
                ['<deliberately> ignore him', 'わざと', 'わざと']
            ],
            [
                [2044, [1770], 'discreet', '慎重な', []],
                ['I watched from a <discreet> distance, trying to figure out what was going on.', '慎重に', 'しんちょうに']
            ],
            [
                [2045, [1771], 'prudent', '慎重な', []],
                ['a <prudent> decision', '慎重な', 'しんちょうな']
            ],
            [
                [2046, [11281], 'caution', '用心', [
                    [11882, 'precaution', '用心']
                ]],
                ['proceed with <caution>', '慎重', 'しんちょう']
            ]
        ],
        ['微妙な・劇的な・不可欠な・有効な', [
                [2047, [11148, 1772], 'subtle', '微妙な', []],
                ['a <subtle> difference', '微妙な', 'びみょうな']
            ],
            [
                [2048, [11693], 'drastically', '劇的に', [
                    [1773, 'drastic', '劇的な、徹底的な']
                ]],
                ['change <drastically>', '劇的に', 'げきてきに']
            ],
            [
                [2049, [12011, 1774], 'integral', '不可欠な', [
                    [11909, 'integrity', '誠実']
                ]],
                ['an <integral> part of society', '不可欠な', 'ふかけつな']
            ],
            [
                [2050, [11337, 1775], 'decent', 'まともな', []],
                ['make a <decent> living', 'まともな', 'まともな']
            ],
            [
                [2051, [11628, 1776], 'neat', 'きちんとした', []],
                ['<neat> clothes', 'きちんとした', 'きちんとした']
            ],
            [
                [2052, [11981, 1777], 'tidy', 'きちんと', []],
                ['keep the room <tidy>', 'きちんと', 'きちんと']
            ],
            [
                [2053, [11332, 1778], 'crude', '粗末な、粗野な', []],
                ['<crude> stone tools', '粗末な', 'そまつな']
            ],
            [
                [2054, [11325, 1779], 'valid', '妥当な、正当な', []],
                ['a <valid> reason for being late', '正当な', 'せいとうな']
            ],
            [
                [2055, [11987], 'trim', 'こぎれいな', []],
                ['a <trim> appearance', 'こぎれいな', 'こぎれいな']
            ]
        ]
    ],
    ['カタカナ英語', ['カタカナ英語', [
                [2056, [11293, 1780], 'initiative', '構想、主導権、', []],
                ['a new peace initiative', '構想', 'こうそう']
            ],
            [
                [2057, [10236, 1781], 'security', '安全', []],
                ['national <security>', '安全', 'あんぜん']
            ],
            [
                [2058, [10974, 1782], 'merit', '長所', []],
                ['his greatest <merit>', '長所', 'ちょうしょ']
            ],
            [
                [2059, [10251, 1783], 'access', '利用する権利', []],
                ['a have <access> to the Internet', '利用', 'りよう']
            ],
            [
                [2060, [10473, 1784], 'technique', '技術', []],
                ['the <technique> of film-making', '技術', 'ぎじゅつ']
            ],
            [
                [2061, [10476, 1785], 'horror', '恐怖', []],
                ['a <horror> movie', '恐怖', 'きょうふ']
            ],
            [
                [2062, [10539], 'terrible', 'ひどい', [
                    [1786, 'terror', '恐怖'],
                    [11954, 'terrific', 'すばらしい']
                ]],
                ['a <terrible> accident', 'ひどい', 'ひどい']
            ],
            [
                [2063, [1787], 'symbol', '象徴', []],
                ['The dove is a <symbol> of peace.', '象徴', 'しょうちょう']
            ],
            [
                [2064, [10940, 1788], 'barrier', '壁', []],
                ['the language <barrier>', '壁', 'かべ']
            ],
            [
                [2065, [1789], 'gap', '隔たり、差', []],
                ['There is a wide <gap> between the demand and supply of goods.', '隔たり', 'へだたり']
            ],
            [
                [2066, [1790], 'dilemma', 'ジレンマ、板挾み、難題', []],
                ['faced with a moral <dilemma>', 'ジレンマ', 'じれんま']
            ],
            [
                [2067, [10165, 1791], 'stretch', '～を広げる', []],
                ['<stretch> my legs', '広げる', 'ひろげる']
            ],
            [
                [2068, [1792], 'elite', 'エリート、精鋭； エリートの', []],
                ['the social <elite>', 'エリート', 'えりいと']
            ],
            [
                [2069, [1793], 'series', '連続', []],
                ['a <series> of incidents', '一連', 'いちれん']
            ],
            [
                [2070, [1794], 'serial', '連続した', []],
                ['a <serial> murder', '連続した', 'れんぞくした']
            ],
            [
                [2071, [1795], 'cereal', '穀物、穀物加工食品', []],
                ['<cereal> agriculture', '穀物', 'こくもつ']
            ],
            [
                [2072, [1796], 'irregular', '不規則な', []],
                ['<irregular> heartbeat', '不規則な', 'ふきそくな']
            ],
            [
                [2073, [12150, 1797], 'item', '品物、記事', []],
                ['an expensive <item>', '品物', 'しなもの'],
                ['the top news <item>', '記事', 'きじ']
            ],
            [
                [2074, [1798], 'relax', '～をくつろがせる； くつろぐ', []],
                ['talk with a <relaxed> mood', 'くつろいだ', 'くつろいだ']
            ],
            [
                [2075, [1799], 'mood', '気分、雰囲気', []],
                ['talk with a relaxed <mood>', '気分', 'きぶん']
            ],
            [
                [2076, [10810, 1800], 'tight', '引き締まった、きつい', []],
                ['<tight> jeans', 'きつい', 'きつい']
            ],
            [
                [2077, [10573, 1801], 'severe', '厳しい', []],
                ['<severe> winter weather', '厳しい', 'きびしい']
            ],
            [
                [2078, [10130, 1802], 'puzzle', '～を当惑させる', []],
                ['be <puzzled> by the problem', '頭を悩ませる', 'あたまをなやませる']
            ],
            [
                [2079, [10967, 1803], 'pause', '休止', []],
                ['a three-minute <pause>', '休止', 'きゅうし']
            ],
            [
                [2080, [10617, 1804], 'reverse', '～を反対にする、逆転する', []],
                ['<reverse> the positions', '逆転する', 'ぎゃくてんする']
            ],
            [
                [2081, [12196, 1805], 'pose', '引き起こす、提起する', []],
                ['<pose> a problem', '引き起こす', 'ひきおこす'],
                ['<pose> a question', '提起する', 'ていきする']
            ],
            [
                [2082, [11176, 1806], 'random', '無作為な', []],
                ['a <random> choice', '無作為な', 'むさくいな']
            ],
            [
                [2083, [10818, 1807], 'bitter', '苦い、つらい、腹を立てた', []],
                ['a <bitter> experience', '苦い', 'にがい']
            ],
            [
                [2084, [10380], 'floating', '浮かぶ', [
                    [1808, 'float', '(水中・空中に)浮く； ～を浮かべる']
                ]],
                ['leaves <floating> on the river', '浮かぶ', 'うかぶ']
            ],
            [
                [2085, [11548, 1809], 'recipe', '秘けつ', []],
                ['a <recipe> for happiness', '秘けつ', 'ひけつ']
            ],
            [
                [2086, [10986, 1810], 'luxury', '贅沢', []],
                ['lead a life of <luxury>', 'ぜいたく', 'ぜいたく']
            ],
            [
                [2087, [10450, 1811], 'charity', '慈善', []],
                ['give money to <charity>', '慈善', 'じぜん']
            ],
            [
                [2088, [10429, 1812], 'athlete', '運動選手', []],
                ['a professional <athlete>', '運動選手', 'うんどうせんしゅ']
            ],
            [
                [2089, [11596, 1813], 'laundry', '洗濯', []],
                ['do the <laundry>', '洗濯', 'せんたく']
            ],
            [
                [2090, [10304], 'tough', 'たくましい、骨の折れる', []],
                ['a <tough> boxer', 'たくましい', 'たくましい']
            ]
        ],
        ['発音要注意！', [
                [2091, [1814], 'label', '～に(…という)レッテルを貼る(as)', []],
                ["He was <labeled> as a troublemaker after he set fire to his neighbor's cat.", 'レッテルを貼られた', 'れってるをはられた']
            ],
            [
                [2092, [10801, 1815], 'loose', 'ゆるい', []],
                ['wear <loose> clothes', 'ゆったりとした', 'ゆったりとした']
            ],
            [
                [2093, [1816], 'humor', 'ユーモア； 機嫌', []],
                ['He is in a bad <humor>.', '機嫌', 'きげん']
            ],
            [
                [2094, [1817], 'image', 'イメージ、画像、映像', []],
                ['a visual <image>', 'イメージ', 'いめえじ']
            ],
            [
                [2095, [1818], 'amateur', 'アマチュア、素人', []],
                ['an <amateur> photographer', 'アマチュア', 'あまちゅあ']
            ],
            [
                [2096, [10833], 'thrilled', 'とてもうれしい', [
                    [1819, 'thrill', '～をわくわくさせる； 興奮']
                ]],
                ["I'm <thrilled> to hear your voice.", 'とてもうれしい', 'とてもうれしい']
            ],
            [
                [2097, [10989, 1820], 'theme', '主題、テーマ', []],
                ['the <theme> of the book', '主題', 'しゅだい']
            ],
            [
                [2098, [10521, 1821], 'leisure', '暇', []],
                ['have no <leisure> time for sports', '暇', 'ひま']
            ],
            [
                [2099, [11152], 'alcoholic', 'アルコールの', [
                    [1822, 'alcohol', 'アルコール、酒']
                ]],
                ['<alcoholic> drinks like wine', 'アルコール', 'あるこおる']
            ],
            [
                [2100, [1823], 'vitamin', 'ビタミン', []],
                ['taking a daily <vitamin> for health', 'ビタミン', 'びたみん']
            ],
            [
                [2101, [1824], 'liver', '肝臓', []],
                ['a piece of <liver>', '肝臓', 'かんぞう']
            ],
            [
                [2102, [1825], 'kidney', '腎臓', []],
                ['donated a <kidney> to save a life', '腎臓', 'じんぞう']
            ],
            [
                [2103, [11488, 1826], 'chaos', '混沌', []],
                ['a society in <chaos>', '混沌', 'こんとん']
            ],
            [
                [2104, [11079], 'lung', '肺', []],
                ['his heart and <lungs>', '肺', 'はい']
            ]
        ],
        ['略形', [
                [2105, [10095, 1827], 'connect', '～をつなぐ', []],
                ['<connect> the computer to the Internet', 'つなぐ', 'つなぐ']
            ],
            [
                [2106, [10665, 1828], 'appoint', '～を任命する', [
                    [10204, 'appointment', '約束、予約']
                ]],
                ['be <appointed> to an important post', '任命される', 'にんめいされる']
            ],
            [
                [2107, [10867, 1829], 'guarantee', '～を保証する', []],
                ['<guarantee> your success', '保証する', 'ほしょうする']
            ],
            [
                [2108, [11970, 1830], 'aesthetic', '美的', []],
                ['<aesthetic> sensibility', '美的', 'びてき']
            ],
            [
                [2109, [1831], 'celebrity', '有名人', []],
                ['He became a <celebrity> overnight.', '有名人', 'ゆうめいじん']
            ],
            [
                [2110, [1832], 'animate', '～を活気づける、に生命を与える', []],
                ['<animated> movie with colorful characters', '活気づけられた', 'かっきづけられた']
            ],
            [
                [2111, [10219, 1833], 'department', '部門、学科', []],
                ['the history <department>', '学科', 'がっか']
            ],
            [
                [2112, [11565], 'departure', '出発', [
                    [1834, 'depart', '出発する']
                ]],
                ['check the <departure> time', '出発', 'しゅっぱつ']
            ]
        ],
        ['意味に要注意！', [
                [2113, [10804, 1835], 'casual', '形式ばらない、気楽な', []],
                ['wear <casual> clothes', '気楽な', 'きらくな']
            ],
            [
                [2114, [12043, 1836], 'challenge', '難問、異議をとなえる', []],
                ['face a new <challenge>', '難問', 'なんもん'],
                ['<challenge> the theory', '異議をとなえる', 'いぎをとなえる']
            ],
            [
                [2115, [11949, 1837], 'naive', '世間知らずの', []],
                ['<naive> young people', '世間知らずの', 'せけんしらずの']
            ],
            [
                [2116, [10826, 1838], 'alien', '外国の、異質な', [
                    [11671, 'exotic', '外来の']
                ]],
                ['an <alien> species', '外来', 'がいらい']
            ],
            [
                [2117, [10676, 1839], 'resort', 'Aに訴える', []],
                ['<resort> to violence', '訴える', 'うったえる']
            ],
            [
                [2118, [10513, 1840], 'web', '巣', []],
                ["be caught in a spider's <web>", '巣', 'す']
            ],
            [
                [2119, [11326, 1841], 'faint', 'かすかな', []],
                ['see a <faint> light', 'かすかな', 'かすかな']
            ],
            [
                [2120, [1842], 'interview', 'インタビュー、面接', []],
                ['a job <interview>', '面接', 'めんせつ']
            ],
            [
                [2121, [11070, 1843], 'bond', 'きずな', []],
                ['strong family <bonds>', 'きずな', 'きずな']
            ],
            [
                [2122, [11291, 1844], 'tissue', '（細胞の）組織；ティッシュペーパー', []],
                ['nerve <tissue>', '組織', 'そしき']
            ],
            [
                [2123, [11007, 1845], 'campaign', '運動、キャンペーン', []],
                ['the <campaign> to promote tourism', '運動', 'うんどう']
            ],
            [
                [2124, [1846], 'boss', '上司', []],
                ['kind <boss>', '上司', 'じょうし']
            ],
            [
                [2125, [1847], 'cafeteria', '社員食堂、学食', []],
                ['ate lunch in the school <cafeteria>', '食堂', 'しょくどう']
            ],
            [
                [2126, [10980, 1848], 'companion', '仲間', []],
                ['my traveling <companion>', '仲間', 'なかま']
            ],
            [
                [2127, [1849], 'mode', '様式、方式、形態', []],
                ['mode of <life>', '様式', 'ようしき']
            ],
            [
                [2128, [10779], 'mine', '鉱山', [
                    [1850, 'mineral', '鉱物']
                ]],
                ['discover a gold <mine>', '鉱', 'こう']
            ],
            [
                [2129, [11991, 1851], 'foul', '不快な', []],
                ['a <foul>-smelling gas', '不快な', 'ふかいな']
            ]
        ]
    ],
    ['教育・テクノロジー', ['教育・しつけ', [
                [2130, [10358, 1852], 'educate', '～を教育する', []],
                ['how to <educate> children', '教育する', 'きょういくする']
            ],
            [
                [2131, [12174, 1853], 'discipline', '規律、分野', []],
                ['teach students <discipline>', '規律', 'きりつ'],
                ['scientists of many <disciplines>', '分野', 'ぶんや']
            ],
            [
                [2132, [10490], 'instruction', '指示', [
                    [1854, 'instruct', 'Aに～するように指示する']
                ]],
                ['follow his <instructions>', '指示', 'しじ']
            ]
        ],
        ['啓蒙・啓発・意欲', [
                [2133, [11958], 'enlightened', '進んだ考えの', [
                    [1855, 'enlighten', '～を啓蒙・啓発する、に知らせる']
                ]],
                ['<enlightened> young people', '進んだ考えの', 'すすんだかんがえの']
            ],
            [
                [2134, [11246, 1856], 'illuminate', '照らす、解明する', []],
                ['<illuminate> the road', '照らす', 'てらす']
            ],
            [
                [2135, [10632, 1857], 'inspire', '～を奮起させる、やる気にさせる', []],
                ['<inspire> him to write a poem', '気を起こさせる', 'きをおこさせる']
            ],
            [
                [2136, [11574, 1858], 'incentive', 'はげみ', []],
                ['an <incentive> to work', 'はげみ', 'はげみ']
            ]
        ],
        ['学校関連', [
                [2137, [11408, 1859], 'enroll', '入学する', []],
                ['<enroll> in medical school', '入学する', 'にゅうがくする']
            ],
            [
                [2138, [10654, 1860], 'register', '～を登録する', []],
                ['<register> a new car', '登録する', 'とうろくする']
            ],
            [
                [2139, [10185], 'sign', '印、兆候', [
                    [1861, 'sign up', '（～に）登録する(for)']
                ]],
                ['a <sign> of spring', 'きざし', 'きざし']
            ],
            [
                [2140, [11532, 1862], 'tuition', '授業料', []],
                ['pay college <tuition>', '授業料', 'じゅぎょうりょう']
            ],
            [
                [2141, [1863], 'tutor', '家庭教師、個人電話； ～を(個人的に)教える', []],
                ['I work as a <tutor> for a high school student.', '家庭教師', 'かていきょうし']
            ],
            [
                [2142, [10751, 1864], 'faculty', '学部、能力', []],
                ['the science <faculty>', '学部', 'がくぶ']
            ],
            [
                [2143, [10707, 1865], 'facility', '設備、施設', []],
                ['public <facilities>', '施設', 'しせつ']
            ],
            [
                [2144, [1866], 'sophomore', '(高校・大学の)二年生', []],
                ['a <sophomore> in college', '2年生', 'にねんせい']
            ],
            [
                [2145, [1867], 'semester', '(2学期制の)学期', []],
                ['the fall <semester>', '学期', 'がっき']
            ],
            [
                [2146, [11040, 1868], 'curriculum', '教育課程', []],
                ['the high school <curriculum>', '教育課程', 'きょういくかてい']
            ],
            [
                [2147, [1869], 'diploma', '(大学の)学位', []],
                ['proud moment receiving a <diploma>', '卒業証書', 'そつぎょうしょうしょ']
            ],
            [
                [2148, [10087], 'graduate', '～を卒業する', []],
                ['<graduate> from high school', '卒業する', 'そつぎょうする']
            ],
            [
                [2149, [10435], 'professor', '教授', []],
                ['a <professor> at Boston University', '教授', 'きょうじゅ']
            ],
            [
                [2150, [10489], 'lecture', '講義', []],
                ['a <lecture> on history', '講義', 'こうぎ']
            ],
            [
                [2151, [11590], 'kindergarten', '幼稚園', []],
                ['learn English in <kindergarten>', '幼稚園', 'ようちえん']
            ]
        ],
        ['成績', [
                [2152, [2203], 'achievement', '実績', []],
                ["have one's <achievement>", '実績', 'じっせき']
            ],
            [
                [2153, [11715], 'degrade', '悪化させる', [
                    [1870, 'grade', '等級、学生； 評価、成績']
                ]],
                ['<degrade> the environment', '悪化させる', 'あっかさせる']
            ],
            [
                [2154, [1871], 'mark', '成績； 印、指標； ～を印す', []],
                ['get good <marks> on [in] an exam', '成績', 'せいせき']
            ],
            [
                [2155, [10709, 1872], 'rank', '地位', []],
                ['a man of high <rank>', '地位', 'ちい']
            ],
            [
                [2156, [10724], 'occupation', '職業、占領', []],
                ['a well-paid <occupation>', '職業', 'しょくぎょう']
            ],
            [
                [2157, [10395], 'score', '～を取る', []],
                ['<score> 10 goals', '取る', 'とる']
            ]
        ],
        ['職業', [
                [2158, [10965, 1873], 'profession', '職業', []],
                ['an intellectual <profession>', '職業', 'しょくぎょう']
            ],
            [
                [2159, [1874], 'vocation', '天職', []],
                ['Acting is my <vocation>.', '天職', 'てんしょく']
            ],
            [
                [2160, [10999, 1875], 'candidate', '候補', []],
                ['a <candidate> for President', '候補', 'こうほ']
            ],
            [
                [2161, [10507, 1876], 'colleague', '同僚', []],
                ['my friends and <colleagues>', '同僚', 'どうりょう']
            ]
        ],
        ['科学技術', [
                [2162, [1877], 'technology', '科学技術', []],
                ['information <technology>', '科学技術', 'かがくぎじゅつ']
            ],
            [
                [2163, [11098, 1878], 'innovation', '革新', []],
                ['technological <innovation>', '革新', 'かくしん']
            ],
            [
                [2164, [11847], 'novelty', '目新しさ', [
                    [1879, 'novel', '小説； 斬新な、新奇な']
                ]],
                ['the quest for <novelty>', '目新しさ', 'めあたらしさ']
            ],
            [
                [2165, [11593, 1880], 'patent', '特許', []],
                ['get a <patent> for a new invention', '特許', 'とっきょ']
            ],
            [
                [2166, [11558, 1881], 'breakthrough', '飛躍的進歩', []],
                ['a <breakthrough> in technology', '飛躍的進歩', 'ひやくてきしんぽ']
            ],
            [
                [2167, [11212, 1882], 'exploit', '利用する、開発する', []],
                ['<exploit> natural resources', '開発する', 'かいはつする']
            ]
        ],
        ['道具・機械', [
                [2168, [10463], 'equipment', '設備', []],
                ['official <equipment>', '設備', 'せつび']
            ],
            [
                [2169, [10495], 'device', '装置', []],
                ['an electronic <device>', '装置', 'そうち']
            ],
            [
                [2170, [1883], 'tool', '道具、工具', []],
                ['Email has become an indispensable communication <tool>.', '道具', 'どうぐ']
            ],
            [
                [2171, [11224, 1884], 'implement', '実行する', []],
                ['<implement> the secret plan', '実行する', 'じっこうする']
            ],
            [
                [2172, [10492, 1885], 'instrument', '器具', []],
                ["a dentist's <instrument>", '道具', 'どうぐ']
            ],
            [
                [2173, [1886], 'machinery', '機械類', []],
                ['a piece of <machinery>', '機械', 'きかい']
            ],
            [
                [2174, [11819, 1887], 'appliance', '器具', []],
                ['electrical <appliances>', '器具', 'きぐ']
            ],
            [
                [2175, [11793, 1888], 'apparatus', '装置', []],
                ['breathing <apparatus>', '装置', 'そうち']
            ],
            [
                [2176, [1889], 'gadget', '機械器具', []],
                ['an electronic <gadget>', '機器', 'きき']
            ],
            [
                [2177, [10436, 1890], 'function', '機能', []],
                ['the basic <functions> of a computer', '機能', 'きのう']
            ],
            [
                [2178, [10511], 'electricity', '電気', [
                    [1891, 'electric', '電気の']
                ]],
                ['a machine run by <electricity>', '電気', 'でんき']
            ],
            [
                [2179, [1892], 'electronic', '電子の', []],
                ['an <electronic> dictionary', '電子の', 'でんしの']
            ]
        ],
        ['乗り物・交通', [
                [2180, [10714, 1893], 'vehicle', '車、乗り物、手段', []],
                ['a <vehicle> for communication', '手段', 'しゅだん']
            ],
            [
                [2181, [1894], 'automobile', '自動車', []],
                ['purchased a new <automobile> for commuting', '自動車', 'じどうしゃ']
            ],
            [
                [2182, [10178, 1895], 'wheel', '車輪、ハンドル', []],
                ['a water <wheel>', '車', 'くるま']
            ],
            [
                [2183, [11516, 1896], 'pedestrian', '歩行者', [
                    [11472, 'expedition', '探検']
                ]],
                ['the safety of <pedestrians>', '歩行者', 'ほこうしゃ']
            ],
            [
                [2184, [11522], 'pavement', '歩道', [
                    [1897, 'pave', '～を舗装する']
                ]],
                ['walk along the <pavement>', '歩道', 'ほどう']
            ],
            [
                [2185, [11153, 1898], 'manual', '手を使う', []],
                ['<manual> work', '手を使う', 'てをつかう']
            ],
            [
                [2186, [1899], 'automatic', '自動の', []],
                ['an <automatic> washing machine', '自動の', 'じどうの']
            ],
            [
                [2187, [10222], 'jam', '渋滞', []],
                ['avoid traffic <jams>', '渋滞', 'じゅうたい']
            ],
            [
                [2188, [10456], 'passenger', '乗客', []],
                ['train <passengers>', '乗客', 'じょうきゃく']
            ],
            [
                [2189, [10931], 'crew', '乗組員たち', []],
                ['the <crew> of the space shuttle', '乗組員たち', 'のりくみいんたち']
            ],
            [
                [2190, [11571], 'lane', '車線', []],
                ['drive in the fast <lane>', '車線', 'しゃせん']
            ],
            [
                [2191, [11792], 'carriage', '車両', []],
                ['a train <carriage>', '車両', 'しゃりょう']
            ],
            [
                [2192, [11879], 'intersection', '交差点', []],
                ['turn right at the <intersection>', '交差点', 'こうさてん']
            ]
        ]
    ],
    ['多義語・2', ['超基本単語の注意すべき意味', [
                [2193, [12108, 1900], 'cover', 'まかなう、報道する、進む', [
                    [11863, 'coverage', '報道']
                ]],
                ['The insurance <covers> the cost.', 'まかなう', 'まかなう'],
                ['<cover> the big news', '報道する', 'ほうどうする'],
                ['<cover> 120 miles an hour', '進む', 'すすむ']
            ],
            [
                [2194, [12105, 1901], 'fine', '罰金、罰金を科さ、細かい', [
                    [11205, 'confine', '限定する'],
                    [11269, 'refine', '洗練する、磨きをかける']
                ]],
                ['the <fine> for speeding', '罰金', 'ばっきん'],
                ['be <fined> $60', '罰金を科さ', 'ばっきんをかさ'],
                ['<fine> sand on the beach', '細かい', 'こまかい']
            ],
            [
                [2195, [12061, 1902], 'leave', '置き忘れる、放置する、残り、休暇', []],
                ['<leave> an umbrella on the train', '置き忘れる', 'おきわすれる'],
                ['<leave> the door open', '放置する', 'ほうちする'],
                ['There is little time <left>.', '残り', 'のこり'],
                ['take paid parental <leave>', '休暇', 'きゅうか']
            ],
            [
                [2196, [12029, 1903], 'meet', '満たす、対処する', []],
                ["<meet> people's needs", '満たす', 'みたす'],
                ['how to <meet> the problem', '対処する', 'たいしょする']
            ],
            [
                [2197, [12125, 1904], 'strike', '印象を与えた、浮かんだ、襲った', []],
                ['The man <struck> me as strange.', '印象を与えた', 'いんしょうをあたえた'],
                ['Suddenly an idea <struck> him.', '浮かんだ', 'うかんだ'],
                ['The typhoon <struck> Osaka.', '襲った', 'おそった']
            ],
            [
                [2198, [12028, 1905], 'run', '経営する', []],
                ['<run> a big company', '経営する', 'けいえいする']
            ],
            [
                [2199, [12207, 1906], 'coin', '作り出す', []],
                ['<coin> a new term', '作り出す', 'つくりだす']
            ],
            [
                [2200, [12047, 1907], 'room', '余地', []],
                ['There is no <room> for doubt.', '余地', 'よち']
            ],
            [
                [2201, [12191, 1908], 'story', '階', []],
                ['a five-<story> building', '階', 'かい']
            ],
            [
                [2202, [12123, 1909], 'manner', '方法、態度、行儀', []],
                ['in a scientific <manner>', '方法', 'ほうほう'],
                ['her friendly <manner>', '態度', 'たいど'],
                ["It's bad <manners> to spit.", '行儀', 'ぎょうぎ']
            ],
            [
                [2203, [12148, 1910], 'address', '宛てられた、取り組む、呼びかける、演説', []],
                ['a letter <addressed> to him', '宛てられた', 'あてられた'],
                ['<address> climate change', '取り組む', 'とりくむ'],
                ['<address> the audience', '呼びかける', 'よびかける'],
                ['the opening <address>', '演説', 'えんぜつ']
            ],
            [
                [2204, [12157, 1911], 'check', '小切手、勘定書、預ける', []],
                ['cash a <check>', '小切手', 'こぎって'],
                ['a dinner <check>', '勘定書', 'かんじょうがき'],
                ['<check> bags at the airport', '預ける', 'あずける']
            ],
            [
                [2205, [11624], 'straightforward', 'わかりやすい', [
                    [1912, 'forward', '前方へ； ～(手紙・メール)を転送する']
                ]],
                ['<straightforward> language', 'わかりやすい', 'わかりやすい']
            ],
            [
                [2206, [12091, 1913], 'chance', '可能性', []],
                ['the <chance> of making them angry', '可能性', 'かのうせい']
            ],
            [
                [2207, [12209, 1914], 'air', '様子', []],
                ['an <air> of confidence', '様子', 'ようす']
            ],
            [
                [2208, [12193, 1915], 'lot', '場、運命', []],
                ['a parking <lot>', '場', 'じょう'],
                ['She accepted her <lot>.', '運命', 'うんめい']
            ],
            [
                [2209, [12079, 1916], 'change', '小銭、おつり', [
                    [10348, 'exchange', '交換する']
                ]],
                ['I have no <change> with me.', '小銭', 'こぜに'],
                ['Keep the <change>.', 'おつり', 'おつり']
            ],
            [
                [2210, [1917], 'second', '二番目の、秒、(-s)おかわり', []],
                ['Please hold on for a <second>.', 'ちょっと', 'ちょっと']
            ],
            [
                [2211, [12059, 1918], 'still', 'まだ、さらに、静かに、それでも', []],
                ['He is <still> working.', 'まだ', 'まだ'],
                ['a <still> better idea', 'さらに', 'さらに'],
                ['The water became <still>.', '静かに', 'しずかに'],
                ["It's raining. <Still>, I have to go.", 'それでも', 'それでも']
            ],
            [
                [2212, [1919], 'cross', '～を横切る； 機嫌の悪い', []],
                ["Don't be so <cross> with me.", '怒ら', 'おこら']
            ],
            [
                [2213, [12064, 1920], 'will', '意思、遺言', []],
                ['against his <will>', '意思', 'いし'],
                ['leave a <will>', '遺言', 'ゆいごん']
            ],
            [
                [2214, [12055, 1921], 'sound', '聞こえる、健全な、ぐっすり', []],
                ['That <sounds> true.', '聞こえる', 'きこえる'],
                ['a <sound> body', '健全な', 'けんぜんな'],
                ['She is <sound> asleep.', 'ぐっすり', 'ぐっすり']
            ],
            [
                [2215, [12202, 1922], 'fast', 'ぐっすり', []],
                ['She is <fast> asleep', 'ぐっすり', 'ぐっすり']
            ]
        ],
        ['訳語に注意！', [
                [2216, [12083, 1923], 'life', '生物', []],
                ['There is no <life> on the moon.', '生物', 'せいぶつ']
            ],
            [
                [2217, [12114, 1924], 'art', '技術', []],
                ['the <art> of writing', '技術', 'ぎじゅつ']
            ],
            [
                [2218, [10186, 1925], 'service', '公共事業、業務', [
                    [12112, 'serve', '出す、役立つ、〜に仕える']
                ]],
                ['water and gas <service>', '事業', 'じぎょう']
            ],
            [
                [2219, [12054, 1926], 'order', '注文する、命令、秩序、順', []],
                ['<order> a book from England', '注文する', 'ちゅうもんする'],
                ['carry out his <order>', '命令', 'めいれい'],
                ['law and <order>', '秩序', 'ちつじょ'],
                ['in alphabetical <order>', '順', 'じゅん']
            ],
            [
                [2220, [12042, 1927], 'practice', '実践、習慣、営む', []],
                ['theory and <practice>', '実践', 'じっせん'],
                ['business <practice>', '習慣', 'しゅうかん'],
                ['<practice> medicine', '営む', 'いとなむ']
            ]
        ],
        ['発音に注意！', [
                [2221, [12203, 1928], 'minute', '細かい', []],
                ['<minute> differences', '細かい', 'こまかい']
            ],
            [
                [2222, [10194, 1929], 'excuse', '言い訳', []],
                ['make an <excuse> to leave early', '言い訳', 'いいわけ']
            ],
            [
                [2223, [11218, 1930], 'wind', '曲がる', []],
                ['the long and <winding> road', '曲がりくねった', 'まがりくねった']
            ],
            [
                [2224, [1931], 'grind', '～を（粉に）挽く、すりつぶす', []],
                ['<grind> coffee [corn]', '挽く', 'ひく']
            ]
        ],
        ['代表的な多義語', [
                [2225, [12133, 1932], 'command', 'あやつる能力、を見わたせる、集める', []],
                ['have a good <command> of English', 'あやつる能力', 'あやつるのうりょく'],
                ['The hill <commands> a fine view.', '見わたせる', 'みわたせる'],
                ['<command> great respect', '集める', 'あつめる']
            ],
            [
                [2226, [12138, 1933], 'charge', '料金、請求する、担当、告訴される', []],
                ['free of <charge>', '料金', 'りょうきん'],
                ['<charge> a high price', '請求する', 'せいきゅうする'],
                ['He is in <charge> of the case.', '担当', 'たんとう'],
                ['be <charged> with murder', '告訴される', 'こくそされる']
            ]
        ],
        ['シス単より', [
                [2227, [12031], 'last', '続いた、待つ、最も、最近', []],
                ['The war <lasted> four years.', '続いた', 'つづいた'],
                ['Our food will <last> a week.', '待つ', 'まつ'],
                ['the <last> man  who  would tell  a lie', '最も', 'もっとも'],
                ["He's moved twice in the <last> year.", '最近', 'さいきん']
            ],
            [
                [2228, [12032], 'stand', '耐え', []],
                ["I can't <stand> this heat.", '耐え', 'たえ']
            ],
            [
                [2229, [12035], 'face', '直面する、迫っている、面目', [
                    [1640, 'make a face', '顔をしかめる']
                ]],
                ['<face> a problem', '直面する', 'ちょくめんする'],
                ['problems <facing> Japan', '迫っている', 'せまっている'],
                ['lose <face>', '面目', 'めんもく']
            ],
            [
                [2230, [12036], 'certain', 'ある、確信している、確実だ', []],
                ['a <certain> amount of time', 'ある', 'ある'],
                ['I am <certain> of his success.', '確信している', 'かくしんしている'],
                ['He is <certain> to come.', '確実だ', 'かくじつだ']
            ],
            [
                [2231, [12040], 'miss', '乗り遅れる、恋しい、見逃す', []],
                ['<miss> the last train', '乗り遅れる', 'のりおくれる'],
                ['I sometimes <miss> Japan.', '恋しい', 'こいしい'],
                ["You can't <miss> it.", '見逃す', 'みのがす']
            ],
            [
                [2232, [12046], 'party', '党、団、相手', []],
                ['the Democratic <Party>', '党', 'とう'],
                ['a <party> of tourists', '団', 'だん'],
                ['Your <party> is on the line.', '相手', 'あいて']
            ],
            [
                [2233, [12058], 'even', 'さらに', []],
                ['This is <even> better.', 'さらに', 'さらに']
            ],
            [
                [2234, [12062], 'most', 'たいていの、非常に', [
                    [1557, 'make the most of', '～を最大限利用する']
                ]],
                ['<Most> people think so.', 'たいていの', 'たいていの'],
                ['a <most> important point', '非常に', 'ひじょうに']
            ],
            [
                [2235, [12063], 'things', '状況', []],
                ['<Things> have changed.', '状況', 'じょうきょう']
            ],
            [
                [2236, [12066], 'mind', 'いやで、人々', []],
                ["I don't <mind> walking.", 'いやで', 'いやで'],
                ['talented <minds>', '人々', 'ひとびと']
            ],
            [
                [2237, [12067], 'help', 'ずにはいられない', []],
                ['I cannot <help> laughing.', 'ずにはいられない', 'ずにはいられない']
            ],
            [
                [2238, [12074], 'hold', '開く、考える', [
                    [1579, 'hold true [good]', '当てはまる、通用する']
                ]],
                ['<hold> a meeting', '開く', 'ひらく'],
                ['They <hold> that the earth  is flat.', '考える', 'かんがえる']
            ],
            [
                [2239, [12076], 'humanity', '人類、人文科学', []],
                ['the future of <humanity>', '人類', 'じんるい'],
                ['science and the <humanities>', '人文科学', 'じんぶんかがく']
            ],
            [
                [2240, [12077], 'end', '目的', []],
                ['a means to an <end>', '目的', 'もくてき']
            ],
            [
                [2241, [12078], 'form', '作る、用紙、一種', []],
                ['<form> a new company', '作る', 'つくる'],
                ['fill out the application <form>', '用紙', 'ようし'],
                ['Knowledge is a <form> of power.', '一種', 'いっしゅ']
            ],
            [
                [2242, [12080], 'present', '現在の、現在、出席している、提示する、紹介する、与える', [
                    [260, 'at present', '今のところは']
                ]],
                ['my <present> address', '現在の', 'げんざいの'],
                ['the <present> and future', '現在', 'げんざい'],
                ['the people <present>', '出席している', 'しゅっせきしている'],
                ['<present> a plan to the president', '提示する', 'ていじする'],
                ['<present> Mr. Boyd to you', '紹介する', 'しょうかいする'],
                ['<present> the winner with the prize', '与える', 'あたえる']
            ],
            [
                [2243, [12084], 'care', '気にし、世話', []],
                ["I don't <care> what you say.", '気にし', 'きにし'],
                ['A baby requires a constant <care>.', '世話', 'せわ']
            ],
            [
                [2244, [12088], 'head', '向かう、率いられた', []],
                ['<head> straight for Paris', '向かう', 'むかう'],
                ['a team <headed> by a woman', '率いられた', 'ひきいられた']
            ],
            [
                [2245, [12092], 'close', '近い、親しい、綿密な、終わり', []],
                ['very <close> to the city', '近い', 'ちかい'],
                ['a <close> friend', '親しい', 'したしい'],
                ['a <close> examination', '綿密な', 'めんみつな'],
                ['the <close> of the 20th century', '終わり', 'おわり']
            ],
            [
                [2246, [12101], 'line', '電話、列、短い手紙、種類', []],
                ['The <line> is busy.', '電話', 'でんわ'],
                ['wait in <line>', '列', 'れつ'],
                ['drop him a <line>', '短い手紙', 'みじかいてがみ'],
                ['this <line> of business', '種類', 'しゅるい']
            ],
            [
                [2247, [12104], 'rest', '残り、休息', [
                    [1632, 'rest on', '～に頼る； に基づく']
                ]],
                ['the <rest> of his life', '残り', 'のこり'],
                ["Let's take a <rest>.", '休息', 'きゅうそく']
            ],
            [
                [2248, [12107], 'remember', 'よろしく伝えて、忘れずに', []],
                ['Please <remember> me to your wife.', 'よろしく伝えて', 'よろしくつたえて'],
                ['<remember> to lock the door', '忘れずに', 'わすれずに']
            ],
            [
                [2249, [12109], 'book', '予約する', []],
                ['<book> a flight', '予約する', 'よやくする']
            ],
            [
                [2250, [12110], 'store', '蓄える', []],
                ['<store> information  in  a computer', '蓄える', 'たくわえる']
            ],
            [
                [2251, [12115], 'fire', 'クビになった、発砲する', []],
                ['He was <fired> from his job.', 'クビになった', 'くびになった'],
                ['<fire> into the crowd', '発砲する', 'はっぽうする']
            ],
            [
                [2252, [12120], 'direct', '直接の、向ける、道を教える、指図する', []],
                ['<direct> contact', '直接の', 'ちょくせつの'],
                ['<direct> his attention to the fact', '向ける', 'むける'],
                ['<direct> her to the station', '道を教える', 'みちをおしえる'],
                ['<direct> the workers', '指図する', 'さしずする']
            ],
            [
                [2253, [12124], 'pretty', 'かなり', []],
                ['a <pretty> long time', 'かなり', 'かなり']
            ],
            [
                [2254, [12141], 'word', '約束、話', [
                    [1610, "take one's word for it", '～の言うことを信じる']
                ]],
                ["I'll keep my <word>.", '約束', 'やくそく'],
                ['Could I have a <word> with you?', '話', 'はなし']
            ],
            [
                [2255, [12144], 'lesson', '教訓', []],
                ['learn a <lesson> from the failure', '教訓', 'きょうくん']
            ],
            [
                [2256, [12146], 'break', '休み', []],
                ['take a <break> for a cup of tea', '休み', 'やすみ']
            ],
            [
                [2257, [12154], 'once', 'かつて、すぐ', []],
                ['I lived there <once>.', 'かつて', 'かつて'],
                ['<Once> she arrives, we can  start.', 'すぐ', 'すぐ']
            ],
            [
                [2258, [12156], 'paper', '論文', []],
                ['write a <paper> on economics', '論文', 'ろんぶん']
            ],
            [
                [2259, [12161], 'bound', 'きっと、行きだ、縛られる', [
                    [11241, 'bounce', 'はね返る']
                ]],
                ['He is <bound> to fail.', 'きっと', 'きっと'],
                ['The plane is <bound> for Guam.', '行きだ', 'いきだ'],
                ['be <bound> by law', '縛られる', 'しばられる']
            ],
            [
                [2260, [12162], 'flat', '平らな、アパート', []],
                ['a <flat> surface', '平らな', 'たいらな'],
                ['live in a <flat> in London', 'アパート', 'あぱあと']
            ],
            [
                [2261, [12169], 'vision', '未来像、先見の明、視力', []],
                ['a <vision> of the city', '未来像', 'みらいぞう'],
                ['a leader of <vision>', '先見の明', 'せんけんのめい'],
                ['have poor <vision>', '視力', 'しりょく']
            ],
            [
                [2262, [12170], 'but', 'だけ、除いて', []],
                ['I have <but> one question.', 'だけ', 'だけ'],
                ['They all went out <but> me.', '除いて', 'のぞいて']
            ],
            [
                [2263, [12172], 'pay', '給料、割に合う', []],
                ['equal <pay> for equal work', '給料', 'きゅうりょう'],
                ["Honesty doesn't always <pay>.", '割に合う', 'わりにあう']
            ],
            [
                [2264, [12178], 'mad', '腹を立てた', []],
                ['She got <mad> at me.', '腹を立てた', 'はらをたてた']
            ],
            [
                [2265, [12184], 'drive', '追い、駆りたて、欲求', []],
                ['<drive> the dog away', '追い', 'おい'],
                ['be <driven> by curiosity', '駆りたて', 'かりたて'],
                ['my strong <drive> to succeed', '欲求', 'よっきゅう']
            ],
            [
                [2266, [12187], 'late', '終わりごろ、故', []],
                ['in his <late> thirties', '終わりごろ', 'おわりごろ'],
                ['the <late> Mr.Ford', '故', 'こ']
            ],
            [
                [2267, [12192], 'move', '感動した', []],
                ['She was <moved> by my story.', '感動した', 'かんどうした']
            ],
            [
                [2268, [12194], 'trick', '芸、コツ、いたずら、だまして、たくらみ', []],
                ['teach the dolphin new <tricks>', '芸', 'げい'],
                ['a <trick> for memorizing words', 'コツ', 'こつ'],
                ['play a <trick> on the teacher', 'いたずら', 'いたずら'],
                ['<trick> him into buying the pot', 'だまして', 'だまして'],
                ['a clever <trick>', 'たくらみ', 'たくらみ']
            ],
            [
                [2269, [12195], 'spring', '出現する', []],
                ['New companies will <spring> up there.', '出現する', 'しゅつげんする']
            ],
            [
                [2270, [12198], 'note', 'メモ、書いた、注意しなさい、有名だ、紙幣', []],
                ['take <notes> on what you hear', 'メモ', 'めも'],
                ['He <noted> that America is a big country.', '書いた', 'かいた'],
                ['<Note> that the book is non-fiction.', '注意しなさい', 'ちゅういしなさい'],
                ['He is <noted> for his intelligence.', '有名だ', 'ゆうめいだ'],
                ['a ten-pound <note>', '紙幣', 'しへい']
            ],
            [
                [2271, [12206], 'like', 'など', []],
                ['apples,peaches,and the <like>', 'など', 'など']
            ],
            [
                [2272, [12210], 'game', '獲物', []],
                ['go hunting for big <game>', '獲物', 'えもの']
            ]
        ]
    ],
    ['歴史・軍事', ['歴史1 : 有史以前', [
                [2273, [294], 'primitive', '原始的な, 未開の, 野蛮な', []],
                ['a <primitive> society', '原始的な', 'げんしてきな']
            ],
            [
                [2274, [292], 'ancient', '古代の, 大昔の', []],
                ['<ancient> Greece and Rome', '古代の', 'こだいの']
            ],
            [
                [2275, [1934], 'history', '歴史、歴史学； 経歴', []],
                ['I study Japanese <history>.', '歴史', 'れきし']
            ],
            [
                [2276, [11094, 1935], 'dinosaur', '恐竜', []],
                ['Dinosaurs died out.', '恐竜', 'きょうりゅう']
            ],
            [
                [2277, [11103, 1936], 'ape', '類人猿', []],
                ['monkeys and <apes>', '類人猿', 'るいじんえん']
            ],
            [
                [2278, [11534, 1937], 'primate', '霊長類', []],
                ['humans and other <primates>', '霊長類', 'れいちょうるい']
            ],
            [
                [2279, [11084, 1938], 'mammal', '哺乳類', []],
                ['whales and other sea <mammals>', '哺乳類', 'ほにゅうるい']
            ],
            [
                [2280, [12023, 1939], 'upright', 'まっすぐに', []],
                ['stand <upright>', 'まっすぐに', 'まっすぐに']
            ],
            [
                [2281, [11600], 'archaeologist', '考古学者', [
                    [1940, 'archaeology', '考古学']
                ]],
                ['bones found by an <archaeologist>', '考古学者', 'こうこがくしゃ']
            ]
        ],
        ['歴史2 : ルネサンスまで', [
                [2282, [10948, 1941], 'civilization', '文明', []],
                ['Western <civilization>', '文明', 'ぶんめい']
            ],
            [
                [2283, [10308, 1942], 'civil', '一般市民の', []],
                ['<civil> rights', '市民', 'しみん']
            ],
            [
                [2284, [11188, 1943], 'medieval', '中世の', []],
                ['a <medieval> castle', '中世の', 'ちゅうせいの']
            ],
            [
                [2285, [1944], 'feudal', '封建制の', []],
                ['<feudal> system in medieval Europe', '封建制の', 'ほうけんせいの']
            ],
            [
                [2286, [1945], 'Renaissance', '(the)ルネサンス', []],
                ['During the <Renaissance>, there was a renewed interest in Greek and Roman culture.', 'ルネサンス', 'るねさんす']
            ],
            [
                [2287, [10451], 'citizen', '市民', []],
                ['the average American <citizen>', '市民', 'しみん']
            ]
        ],
        ['歴史3 : 産業革命以降', [
                [2288, [10229, 1946], 'revolution', '革命', []],
                ['the French Revolution', '革命', 'かくめい']
            ],
            [
                [2289, [11020, 1947], 'empire', '帝国', []],
                ['the Roman Empire', '帝国', 'ていこく']
            ],
            [
                [2290, [1948], 'imperial', '帝国の', []],
                ['<imperial> palace in Tokyo', '帝国の', 'ていこくの']
            ],
            [
                [2291, [10963, 1949], 'colony', '植民地', []],
                ['a former British <colony>', '植民地', 'しょくみんち']
            ],
            [
                [2292, [10746, 1950], 'slave', '奴隷', []],
                ['a black <slave>', '奴隷', 'どれい']
            ]
        ],
        ['歴史4 : そして現代へ', [
                [2293, [1951], 'modern', '現代の', []],
                ['Obesity, divorce and higher suicide rates are side effects of <modern>ization.', '現代の', 'げんだいの']
            ],
            [
                [2294, [11653], 'metropolitan', '大都市の', [
                    [1952, 'metropolis', '大都市']
                ]],
                ['<metropolitan> areas', '大都市', 'だいとし']
            ],
            [
                [2295, [1953], 'bustle', '喧噪', []],
                ['Living in the <bustle> of a large city, I sometimes feel like going to a deserted island.', '喧噪', 'けんそう']
            ],
            [
                [2296, [11930, 1954], 'skyscraper', '高層ビル', []],
                ['build a hundred-story <skyscraper>', '高層ビル', 'こうそうびる']
            ]
        ],
        ['軍事関連', [
                [2297, [10577, 1955], 'military', '軍事的な', []],
                ['<military> aid to Israel', '軍事的', 'ぐんじてき']
            ],
            [
                [2298, [1956], 'army', '陸軍、軍隊', []],
                ['the U.S. <Army>', '陸軍', 'りくぐん']
            ],
            [
                [2299, [12189, 1957], 'arms', '軍備', []],
                ['<arms> control', '軍備', 'ぐんび']
            ],
            [
                [2300, [11523, 1958], 'navy', '海軍', []],
                ['the British Navy', '海軍', 'かいぐん']
            ],
            [
                [2301, [11396], 'navigate', '進路を決める', [
                    [1959, 'navigation', '航海']
                ]],
                ['<navigate> by the stars', '進路を決める', 'しんろをきめる']
            ],
            [
                [2302, [1960], 'soldier', '軍人、兵士', []],
                ['a wounded <soldier>', '兵士', 'へいし']
            ],
            [
                [2303, [11533, 1961], 'troop', '軍隊', []],
                ['send Japanese <troops> abroad', '軍隊', 'ぐんたい']
            ],
            [
                [2304, [1962], 'hostage', '捕虜', []],
                ['The <hostages> were released.', '人質', 'ひとじち']
            ],
            [
                [2305, [10494, 1963], 'weapon', '兵器', []],
                ['a laser <weapon>', '兵器', 'へいき']
            ],
            [
                [2306, [11495, 1964], 'sword', '剣', []],
                ['fight with a <sword>', '剣', 'けん']
            ],
            [
                [2307, [11078, 1965], 'strategy', '戦略', []],
                ['British military <strategy>', '戦略', 'せんりゃく']
            ],
            [
                [2308, [11850, 1966], 'tactics', '戦術', []],
                ['use guerrilla <tactics>', '戦術', 'せんじゅつ']
            ],
            [
                [2309, [11643, 1967], 'neutral', '中立の', []],
                ['take a <neutral> position', '中立の', 'ちゅうりつの']
            ],
            [
                [2310, [11301, 1968], 'ally', '同盟国', []],
                ['America and its <allies>', '同盟国', 'どうめいこく']
            ],
            [
                [2311, [1969], 'rally', '集会； 再結集する', []],
                ['a political <rally>', '集会', 'しゅうかい']
            ],
            [
                [2312, [11868, 1970], 'assault', '攻撃', []],
                ["<assault> on the enemy's base", '攻撃', 'こうげき']
            ],
            [
                [2313, [1971], 'raid', '急襲', []],
                ['The town was completely destroyed in air <raids>.', '襲撃', 'しゅうげき']
            ],
            [
                [2314, [1972], 'assassination', '暗殺', []],
                ['the <assassination> of John F. Kennedy', '暗殺', 'あんさつ']
            ],
            [
                [2315, [11000], 'bomb', '爆弾', []],
                ['an atomic <bomb>', '爆弾', 'ばくだん']
            ],
            [
                [2316, [11030], 'voyage', '航海', []],
                ['the first <voyage> of Columbus', '航海', 'こうかい']
            ],
            [
                [2317, [11057], 'bay', '湾', []],
                ['a boat in Tokyo <bay>', '湾', 'わん']
            ],
            [
                [2318, [11225], 'steer', '操縦する', []],
                ['<steer> the ship', '操縦する', 'そうじゅうする']
            ],
            [
                [2319, [11447], 'canal', '運河', []],
                ['the Panama Canal', '運河', 'うんが']
            ],
            [
                [2320, [11515], 'bullet', '弾丸', []],
                ['faster than a <bullet>', '弾丸', 'だんがん']
            ],
            [
                [2321, [11576], 'intervention', '介入', []],
                ['military <intervention> in Iraq', '介入', 'かいにゅう']
            ],
            [
                [2322, [11925], 'warrior', '戦士', []],
                ['a brave <warrior>', '戦士', 'せんし']
            ]
        ]
    ],
    ['接続詞・副詞・前置詞', ['結果・因果関係', [
                [2323, [10320, 1973], 'thus', 'それゆえ、そのように', []],
                ['This is smaller and <thus> cheaper.', 'したがって', 'したがって']
            ],
            [
                [2324, [11698, 1974], 'hence', 'だから', []],
                ['He tried hard, <hence> his success.', 'だから', 'だから']
            ],
            [
                [2325, [10313], 'therefore', 'それゆえに', []],
                ['The car is small and <therefore> cheap.', 'それゆえ', 'それゆえ']
            ],
            [
                [2326, [11700], 'owing', 'のために', []],
                ['<owing> to lack of fuel', 'ために', 'ために']
            ]
        ],
        ['逆説', [
                [2327, [10590, 1975], 'nevertheless', 'それにもかかわらず', []],
                ['He is rich; <nevertheless> he is unhappy.', 'それにもかかわらず', 'それにもかかわらず']
            ],
            [
                [2328, [1976], 'nonetheless', 'それにもかかわらず', []],
                ['He told me it would not rain. <Nonetheless> [Nevertheless], I brought my umbrella just in case.', 'それにもかかわらず', 'それにもかかわらず']
            ],
            [
                [2329, [1977], 'notwithstanding', 'それにもかかわらず', []],
                ['finished the project, <notwithstanding> the difficulties', 'にもかかわらず', 'にもかかわらず']
            ],
            [
                [2330, [1978], 'all the same', 'それでもやはり、それにもかかわらず', []],
                ['Although he has many weaknesses, I like him <all the same>.', 'それでもやはり', 'それでもやはり']
            ],
            [
                [2331, [10600, 1979], 'despite', 'にもかかわらず', []],
                ['He lost <despite> his efforts.', 'にもかかわらず', 'にもかかわらず']
            ]
        ],
        ['追加', [
                [2332, [10323, 1980], 'besides', '～に加えて', []],
                ['Besides being rich, he is kind.', '上に', 'うえに']
            ],
            [
                [2333, [10591, 1981], 'moreover', 'その上', []],
                ["He's kind; <moreover>, he's strong.", 'その上', 'そのうえ']
            ],
            [
                [2334, [1982], 'furthermore', 'さらに', []],
                ['The continuous rain flooded the river. <Furthermore> [Moreover], it caused a landslide.', 'さらに', 'さらに']
            ]
        ],
        ['対照', [
                [2335, [10852, 1983], 'whereas', '～だが一方', []],
                ['The British say "lift," <whereas> Americans say "elevator."', 'が', 'が']
            ],
            [
                [2336, [1984], 'on the other hand', 'その一方で', []],
                ['Americans push a saw in order to cut. <On the other hand>, Japanese pull a saw toward the body.', 'その一方で', 'そのいっぽうで']
            ],
            [
                [2337, [10844, 1985], 'meanwhile', 'その間に', []],
                ['She was cooking. <Meanwhile>, I was drinking.', 'その間', 'そのあいだ']
            ],
            [
                [2338, [1986], 'in the meantime', 'その間に', []],
                ['<in the meantime>', 'その間に', 'そのあいだに']
            ]
        ],
        ['同格・例示', [
                [2339, [1987], 'that is (to say)', 'すなわち、つまり', []],
                ['The population is aging. <That is (to say)>, the number of people over the age of is increasing.', 'すなわち', 'すなわち']
            ],
            [
                [2340, [11697, 1988], 'namely', 'すなわち', []],
                ['the two cities, <namely>, Paris and Tokyo', 'すなわち', 'すなわち']
            ],
            [
                [2341, [1989], 'in short', '手短に言うと、つまりは', []],
                ["We haven't seen any positive results. <In short>, the experiment was a total failure.", 'つまり', 'つまり']
            ],
            [
                [2342, [12201, 1990], 'say', 'たとえば、仮定しよう、どうですか', []],
                ['Consider  a fruit, <say>, an  orange.', 'たとえば', 'たとえば'],
                ["Let's <say> you have a million dollars.", '仮定しよう', 'かていしよう'],
                ['What do you <say> to going on a trip?', 'どうですか', 'どうですか']
            ],
            [
                [2343, [1991], 'for instance', '例えば', [
                    [10422, 'instance', '例']
                ]],
                ['Many geniuses, <for instance>, Mozart, died young.', '例えば', 'たとえば']
            ]
        ],
        ['譲歩の構文', [
            [2344, [1992], 'indeed', 'たしかに、本当に', []],
            ['<Indeed> his father is strict; yet it is clear that he is strict for the good of his children.', 'たしかに', 'たしかに']
        ]],
        ['要注意の副詞・前置詞', [
                [2345, [11195, 1993], 'somewhat', '多少', []],
                ['<somewhat> better than last year', '多少', 'たしょう']
            ],
            [
                [2346, [10318, 1994], 'somehow', 'どういうわけか、なぜか', []],
                ['Somehow I feel lonely.', 'なぜか', 'なぜか']
            ],
            [
                [2347, [12039, 1995], 'otherwise', 'さもなければ、その他の点では、ちがう、ちがう方法で', []],
                ['He worked hard; <otherwise> he would have failed.', 'さもなければ', 'さもなければ'],
                ['He is poor  but <otherwise> happy.', 'その他の点では', 'そのたのてんでは'],
                ['He is honest, but people think <otherwise>.', 'ちがう', 'ちがう'],
                ["I can't do it <otherwise>.", 'ちがう方法で', 'ちがうほうほうで']
            ],
            [
                [2348, [12171, 1996], 'given', '特定の、考慮すると、ことを考慮すると', []],
                ['in a <given> situation', '特定の', 'とくていの'],
                ['<given> the present conditions', '考慮すると', 'こうりょすると'],
                ['<given> that you are young', 'ことを考慮すると', 'ことをこうりょすると']
            ]
        ],
        ['文修飾の副詞', [
                [2349, [1997], 'rightly', '正当に、当然のことながら', []],
                ['The man <rightly> predicted that there would be a great earthquake in Pakistan.', 'それは正しかった', 'それはただしかった'],
                ['He is <rightly> [justly] proud of his achievement.', '当然のことだ', 'とうぜんのことだ']
            ],
            [
                [2350, [1998], 'justly', '正当に、当然のことながら', []],
                ['a <justly> deserved penalty', '当然の', 'とうぜんの']
            ],
            [
                [2351, [10040], 'mistake', '～を誤解する、まちがえる', [
                    [1999, 'mistakenly', '間違って']
                ]],
                ['<mistake> salt for sugar', 'まちがえる', 'まちがえる']
            ],
            [
                [2352, [2000], 'reportedly', '報じられるところでは', []],
                ['The sea level has <reportedly> been rising due to the melting of polar ice.', '報じられている', 'ほうじられている']
            ],
            [
                [2353, [11229], 'presume', '推定する、思う', [
                    [2001, 'presumably', 'おそらく、たぶん']
                ]],
                ['He is <presumed> innocent.', '推定される', 'すいていされる']
            ],
            [
                [2354, [11198, 2002], 'seemingly', '一見', []],
                ['a <seemingly> impossible task', '一見', 'いっけん']
            ]
        ],
        ['その他の副詞・前置詞', [
                [2355, [2003], 'as a matter of fact', '実は', []],
                ['"Who is in charge of this?" "<As a matter of fact>, I am."', '実は', 'じつは']
            ],
            [
                [2356, [2004], 'for that matter', 'さらに言えば', []],
                ['I hate women, or people <for that matter>.', 'さらに言えば', 'さらにいえば']
            ],
            [
                [2357, [11695, 2005], 'thereby', 'そうすることで', []],
                ['He always tells the truth, <thereby> avoiding trouble.', 'そうすることで', 'そうすることで']
            ],
            [
                [2358, [2006], 'whatsoever', '全く、少しでも', []],
                ['The candidate has no chance <whatsoever> [whatever] of winning the election.', '全く', 'まったく']
            ],
            [
                [2359, [10851, 2007], 'beneath', '～の下で', []],
                ['<beneath> the surface of the water', '下で', 'したで']
            ]
        ]
    ],
    ['難単語・1', ['思想・哲学系', [
                [2360, [11304, 2008], 'premise', '前提', []],
                ['the major <premise>', '前提', 'ぜんてい']
            ],
            [
                [2361, [11821, 2009], 'entity', '存在', []],
                ['a child as a separate <entity>', '存在', 'そんざい']
            ],
            [
                [2362, [11841, 2010], 'discourse', '論説', []],
                ['a <discourse> on politics', '論説', 'ろんせつ']
            ],
            [
                [2363, [2011], 'transcend', '～を越える、超越する', []],
                ['Music <transcends> national boundaries.', '越える', 'こえる']
            ],
            [
                [2364, [2012], 'ascribe', '(…に)～の原因を帰す(to…)', []],
                ['The scientists <ascribed> the recent weather conditions to global warming.', '原因であると考えた', 'げんいんであるとかんがえた']
            ],
            [
                [2365, [12000, 2013], 'intrinsic', '本来の', []],
                ['the <intrinsic> value of gold', '本来の', 'ほんらいの']
            ],
            [
                [2366, [2014], 'articulate', '～を(はっきり)言う、発音する； ～をつなぐ', []],
                ['The baby is just six months old, but she can <articulate> a few words.', 'はっきり発音する', 'はっきりはつおんする']
            ],
            [
                [2367, [11283, 2015], 'formula', '式、公式、方法、秘訣、解決策', []],
                ['a mathematical <formula>', '式', 'しき']
            ]
        ],
        ['政治系', [
                [2368, [11712, 2016], 'contend', '主張する', []],
                ['<contend> that money cannot buy happiness', '主張する', 'しゅちょうする']
            ],
            [
                [2369, [11208, 2017], 'advocate', '主張する', []],
                ['<advocate> peace', '主張する', 'しゅちょうする']
            ],
            [
                [2370, [2018], 'delegation', '代表派遣、使節', []],
                ['Japan sent a large <delegation> to the international peace conference.', '代表団', 'だいひょうだん']
            ],
            [
                [2371, [2019], 'sanction', '制裁； 是認、許可', []],
                ['The U.S. government imposed economic <sanctions> on Iraq.', '制裁', 'せいさい']
            ],
            [
                [2372, [11767, 2020], 'pledge', '誓う', []],
                ['<pledge> to support them', '誓う', 'ちかう']
            ],
            [
                [2373, [11939, 2021], 'agenda', '課題', []],
                ['a political <agenda>', '課題', 'かだい']
            ],
            [
                [2374, [11828], 'amendment', '改正、修正', [
                    [2022, 'amend', '～を修正する、改正する']
                ]],
                ['an <amendment> to the law', '改正', 'かいせい']
            ],
            [
                [2375, [11872, 2023], 'subsidy', '補助金', []],
                ['a government <subsidy>', '補助金', 'ほじょきん']
            ]
        ],
        ['直感・認識', [
                [2376, [11837, 2024], 'intuition', '直感', []],
                ["women's <intuition>", '直感', 'ちょっかん']
            ],
            [
                [2377, [11714, 2025], 'discern', '識別する', []],
                ['can <discern> the difference', '識別する', 'しきべつする']
            ],
            [
                [2378, [11982, 2026], 'skeptical', '懐疑的な', []],
                ['a <skeptical> view of life', '懐疑的な', 'かいぎてきな']
            ]
        ],
        ['善悪・悪化', [
                [2379, [2027], 'benign', '良性の、害のない； 有益な', []],
                ['The tumor turned out to be <benign>.', '良性だ', 'りょうせいだ']
            ],
            [
                [2380, [2028], 'malicious', '悪意のある', []],
                ['The girls indulged in <malicious> gossip about their new classmate.', '悪意に満ちた', 'あくいにみちた']
            ],
            [
                [2381, [2029], 'hypocrisy', '偽善', []],
                ["It's <hypocrisy> to talk about how to save energy while you are in an air-conditioned room.", '偽善', 'ぎぜん']
            ],
            [
                [2382, [11765, 2030], 'undermine', '弱める', []],
                ['<undermine> the US position', '弱める', 'よわめる']
            ],
            [
                [2383, [11728, 2031], 'impair', '低下させる', []],
                ['<impair> learning ability', '低下させる', 'ていかさせる']
            ],
            [
                [2384, [11749, 2032], 'deteriorate', '悪化する', []],
                ['His health will <deteriorate>.', '悪化する', 'あっかする']
            ],
            [
                [2385, [11753], 'inhibit', '阻害する', []],
                ['<inhibit> the growth of bacteria', '阻害する', 'そがいする']
            ]
        ],
        ['誘発・誘惑', [
                [2386, [11247, 2033], 'trigger', 'きっかけになる', []],
                ['<trigger> war', '引き金を引く', 'ひきがねをひく']
            ],
            [
                [2387, [11249, 2034], 'induce', '誘う', []],
                ['<induce> deep sleep', '誘う', 'さそう']
            ],
            [
                [2388, [2035], 'deduce', '～(結論)を導き出す、推論する', []],
                ['Which of the following statements can be <deduced> from the last paragraph?', '導き出せ', 'みちびきだせ']
            ],
            [
                [2389, [12017], 'intriguing', '興味深い', [
                    [2036, 'intrigue', '～の興味をそそる； 陰謀']
                ]],
                ['a very <intriguing> question', '興味深い', 'きょうみぶかい']
            ]
        ],
        ['物理関係', [
                [2390, [2037], 'momentum', '力、勢い、運動量', []],
                ["After the long recession, Japan's economy is gaining <momentum>.", '勢い', 'いきおい']
            ],
            [
                [2391, [2038], 'velocity', '速度', []],
                ['the <velocity> of light', '速度', 'そくど']
            ],
            [
                [2392, [11685, 2039], 'chronic', '慢性の', []],
                ['<chronic> disease', '慢性の', 'まんせいの']
            ],
            [
                [2393, [2040], 'lapse', '(時間の)経過； (ちょっとした)誤り', []],
                ['a <lapse> of time', '経過', 'けいか']
            ],
            [
                [2394, [10787, 2041], 'gravity', '重力', [
                    [11616, 'grave', '重大な']
                ]],
                ['zero <gravity> in space', '重力', 'じゅうりょく']
            ],
            [
                [2395, [11506, 2042], 'orbit', '軌道', []],
                ["the earth's <orbit> around the sun", '軌道', 'きどう']
            ],
            [
                [2396, [2043], 'axis', '軸', []],
                ['the horizontal [vertical] <axis>', '軸', 'じく']
            ],
            [
                [2397, [11573, 2044], 'fluid', '流体', []],
                ['<fluids> like water and air', '流体', 'りゅうたい']
            ],
            [
                [2398, [2045], 'resilient', '弾力性のある； 回復力のある、立ち直りの早い', []],
                ['a <resilient> rubber mat', '弾力性のある', 'だんりょくせいのある']
            ],
            [
                [2399, [11547], 'erosion', '浸食', [
                    [2046, 'erode', '腐食する； ～を腐食する、侵食する']
                ]],
                ['prevent soil <erosion>', '浸食', 'しんしょく']
            ],
            [
                [2400, [11912], 'eruption', '噴火', [
                    [2047, 'erupt', '噴火する']
                ]],
                ['a massive volcanic <eruption>', '噴火', 'ふんか']
            ],
            [
                [2401, [10575], 'mobile', '流動的な', []],
                ['a <mobile> society', '流動的な', 'りゅうどうてきな']
            ]
        ]
    ],
    ['難単語・2', ['動きをイメージする', [
                [2402, [2048], 'assimilate', '～を同化する； 消化・吸収する； 同化する', []],
                ['Immigrants from Europe quickly <assimilated> into a new culture.', '同化した', 'どうかした'],
                ['<assimilate> information', '吸収する', 'きゅうしゅうする']
            ],
            [
                [2403, [11744, 2049], 'adhere', '固く守る', []],
                ['<adhere> the international standards', '固く守る', 'かたくまもる']
            ],
            [
                [2404, [2050], 'exile', '(祖国からの)追放、亡命； ～を追放する', []],
                ['During the war, the Polish movie director was in <exile> in the United States.', '亡命', 'ぼうめい']
            ]
        ],
        ['検査・調査', [
                [2405, [11801, 2051], 'probe', '探査機', []],
                ['a space <probe>', '探査機', 'たんさき']
            ],
            [
                [2406, [2052], 'scrutinize', '～を綿密に調べる', []],
                ['The immigration officer <scrutinized> my passport.', '細かく調べた', 'こまかくしらべた']
            ],
            [
                [2407, [12053], 'very', 'まさにその', [
                    [2053, 'verify', '～を(正しいと)証明する、確かめる']
                ]],
                ['the <very> man I was looking for', 'まさにその', 'まさにその']
            ],
            [
                [2408, [11858, 2054], 'census', '国勢調査', []],
                ['take a <census> every ten years', '国勢調査', 'こくせいちょうさ']
            ],
            [
                [2409, [2055], 'censorship', '検閲', []],
                ['When the war broke out, the press was placed under strict government <censorship>.', '検閲', 'けんえつ']
            ],
            [
                [2410, [2056], 'index', '指標、指針、指数； 見出し', []],
                ['a price <index>', '指数', 'しすう']
            ],
            [
                [2411, [10091], 'examine', '～を調査する', []],
                ['<examine> every record', '調べる', 'しらべる']
            ]
        ],
        ['力関係・統合', [
                [2412, [11722, 2057], 'defy', '逆らう', []],
                ['<defy> gravity', '逆らう', 'さからう']
            ],
            [
                [2413, [11729, 2058], 'comply', '従う', []],
                ['<comply> with the standards', '従う', 'したがう']
            ],
            [
                [2414, [11340], 'synthetic', '合成の', [
                    [2059, 'synthesize', '～を総合する、合成する、合成して作り出す']
                ]],
                ['<synthetic> fiber', '合成', 'ごうせい']
            ],
            [
                [2415, [11438, 2060], 'coordinate', '合わせる', []],
                ['<coordinate> movements with each other', '合わせる', 'あわせる']
            ],
            [
                [2416, [11890, 2061], 'subordinate', '部下', []],
                ['instruct a <subordinate>', '部下', 'ぶか']
            ],
            [
                [2417, [11399, 2062], 'incorporate', '取り入れる', [
                    [10962, 'corporation', '企業']
                ]],
                ['<incorporate> the Internet into the classroom', '取り入れる', 'とりいれる']
            ],
            [
                [2418, [11236, 2063], 'comprise', '構成される、構成する、占める', []],
                ['The group <comprises> ten members.', '構成される', 'こうせいされる']
            ],
            [
                [2419, [11373], 'integrate', '融けこませる', []],
                ['<integrate> immigrants into society', '融けこませる', 'とけこませる']
            ]
        ],
        ['語源から', [
                [2420, [11402, 2064], 'manipulate', '操作する', []],
                ['<manipulate> a computer', '操作する', 'そうさする']
            ],
            [
                [2421, [2065], 'tangible', '触れることができる； 明白な、具体的な', []],
                ["They still haven't found <tangible> evidence against the suspect.", '具体的な', 'ぐたいてきな']
            ],
            [
                [2422, [11227, 2066], 'designate', '指定する', []],
                ['a <designated> smoking area', '指定された', 'していされた']
            ],
            [
                [2423, [11405, 2067], 'depict', '描く', [
                    [11363, 'portray', '描く']
                ]],
                ['<depict> him as a hero', '描く', 'えがく']
            ],
            [
                [2424, [11996, 2068], 'ingenious', '独創的な', []],
                ['an <ingenious> design', '独創的な', 'どくそうてきな']
            ],
            [
                [2425, [2069], 'ingenuous', '純真な、無邪気な', []],
                ['an <ingenuous> smile [answer]', '無邪気な', 'むじゃきな']
            ],
            [
                [2426, [2070], 'proximity', '(～に)近いこと(to)', []],
                ['I chose the hotel because of its <proximity> to the station.', '近さ', 'ちかさ']
            ]
        ],
        ['驚き・動揺', [
                [2427, [2071], 'dismay', '～を動揺させる； 動揺', []],
                ["He was <dismayed> by a sudden change in his friends' attitudes.", '動揺した', 'どうようした']
            ],
            [
                [2428, [2072], 'appall', '～をぎょっとさせる', []],
                ['The results of the examination were <appalling>.', 'ぎょっとさせる', 'ぎょっとさせる']
            ],
            [
                [2429, [11747, 2073], 'stun', 'びっくりさせる', []],
                ['<stun> the audience', 'びっくりさせる', 'びっくりさせる']
            ],
            [
                [2430, [11338], 'marvelous', '驚くべき', [
                    [2074, 'marvel', '(～に)驚く、驚き(at～)； 驚き']
                ]],
                ['a <marvelous> record', '驚くべき', 'おどろくべき']
            ],
            [
                [2431, [2075], 'perplex', '～を当惑させる', []],
                ['The investigator was <perplexed> because the two witnesses had given contradicting accounts.', '混乱した', 'こんらんした']
            ],
            [
                [2432, [2076], 'bewilder', '～を当惑させる', []],
                ['The student was <bewildered> by the complexity of the problem.', '当惑した', 'とうわくした']
            ],
            [
                [2433, [2077], 'astound', '～をびっくりさせる', []],
                ['People were <astounded> by the news of the assassination.', 'びっくりさせられた', 'びっくりさせられた']
            ],
            [
                [2434, [11275, 2078], 'startle', '驚かせる', []],
                ['<startling> results', '驚くような', 'おどろくような']
            ]
        ],
        ['予期・不安・苦悩', [
                [2435, [11343, 2079], 'anticipate', '予想する', []],
                ['<anticipate> the future', '予想する', 'よそうする']
            ],
            [
                [2436, [11845, 2080], 'apprehension', '不安', []],
                ['watch with <apprehension>', '不安', 'ふあん']
            ],
            [
                [2437, [2081], 'deplore', '～を嘆く', []],
                ['<deplore> the violence in the city', '嘆く', 'なげく']
            ],
            [
                [2438, [2082], 'agony', '苦悩、苦痛', []],
                ['It was <agony> for the patient even to sit up in bed.', '苦痛', 'くつう']
            ],
            [
                [2439, [11738, 2083], 'inflict', '与える', []],
                ['<inflict> pain on other people', '与える', 'あたえる']
            ],
            [
                [2440, [2084], 'afflict', '～を苦しめる', []],
                ["He was <afflicted> with Alzheimer's disease.", '苦しんだ', 'くるしんだ']
            ],
            [
                [2441, [10992], 'forecast', '予報', []],
                ['the weather <forecast>', '予報', 'よほう']
            ],
            [
                [2442, [11762], 'foresee', '予知する', []],
                ['<foresee> the future', '予知する', 'よちする']
            ]
        ]
    ],
    ['難単語・3', ['意思決定', [
                [2443, [2085], 'ambivalent', '矛盾する、相反する、どちらか決めかねて', []],
                ['Melinda is <ambivalent> about whether or not she should marry Tom.', '矛盾する', 'むじゅんする']
            ],
            [
                [2444, [11995, 2086], 'arbitrary', '勝手な', []],
                ['an <arbitrary> decision', '勝手な', 'かってな']
            ],
            [
                [2445, [2087], 'unanimous', '満場一致の', []],
                ['They finally reached a <unanimous> agreement on the agenda.', '満場一致の', 'まんじょういっちの']
            ],
            [
                [2446, [11465, 2088], 'consensus', '合意', []],
                ['reach <consensus> on the issue', '合意', 'ごうい']
            ]
        ],
        ['思考・考案', [
                [2447, [2089], 'ponder', '～をじっくり考える', []],
                ['Lately I have been continually <pondering> how I should quit my job.', '考えている', 'かんがえている']
            ],
            [
                [2448, [2090], 'reckon', '～を推定する、と考える', []],
                ['I <reckon> I will go back to sleep.', '考える', 'かんがえる']
            ],
            [
                [2449, [10347], 'guess', '～を推測する', []],
                ['<guess> how old she is', '推測する', 'すいそくする']
            ]
        ],
        ['短い語', [
                [2450, [11364], 'soaring', '急上昇する', [
                    [2091, 'soar', '急上昇する、高く舞い上がる']
                ]],
                ['the <soaring> price of oil', '急上昇する', 'きゅうじょうしょうする']
            ],
            [
                [2451, [11352, 2092], 'roar', 'ほえる', []],
                ['<roar> like a lion', 'ほえる', 'ほえる']
            ],
            [
                [2452, [10784, 2093], 'peer', '同僚、じっと見る', []],
                ["He's popular with his <peers>.", '同僚', 'どうりょう']
            ],
            [
                [2453, [11756, 2094], 'reap', '手に入れる', []],
                ['<reap> large rewards', '手に入れる', 'てにはいれる']
            ],
            [
                [2454, [11773, 2095], 'curb', '抑制する', []],
                ['<curb> population growth', '抑制する', 'よくせいする']
            ],
            [
                [2455, [11381, 2096], 'carve', '彫る', []],
                ['<carve> her name in stone', '彫る', 'ほる']
            ],
            [
                [2456, [11561, 2097], 'cue', '合図', []],
                ['read nonverbal <cues>', '合図', 'あいず']
            ],
            [
                [2457, [11809, 2098], 'queue', '列', []],
                ['wait in a <queue>', '列', 'れつ']
            ],
            [
                [2458, [11711, 2099], 'slap', 'ピシャリと打つ', []],
                ['<slap> his face', 'ピシャリと打つ', 'ぴしゃりとうつ']
            ],
            [
                [2459, [10638, 2100], 'clap', '〈手など〉をたたく', [
                    [11737, 'applaud', '拍手する']
                ]],
                ['Clap your hands as you sing.', 'たたき', 'たたき']
            ],
            [
                [2460, [11253, 2101], 'hatch', '〈卵・ヒナ〉をかえす、かえる', []],
                ['a newly <hatched> chick', 'かえった', 'かえった']
            ],
            [
                [2461, [11973], 'wrecked', '難破した', [
                    [2102, 'wreck', '～を大破させる、台なしにする； 難破、（破損した）残骸']
                ]],
                ['a <wrecked> ship', '難破した', 'なんぱした']
            ],
            [
                [2462, [11365, 2103], 'drain', '排出する', []],
                ['<drain> water from the tank', '排出する', 'はいしゅつする']
            ],
            [
                [2463, [11927, 2104], 'sewage', '下水', []],
                ["the city's <sewage> system", '下水', 'げすい']
            ],
            [
                [2464, [10174, 2105], 'sew', '～を縫う', []],
                ['<sew> a wedding dress', '縫う', 'ぬう']
            ],
            [
                [2465, [2106], 'sober', 'しらふの； ありのままの', []],
                ['a <sober> fact', 'ありのままの', 'ありのままの']
            ],
            [
                [2466, [2107], 'kin', '血縁、親族', []],
                ["We're <kin> to the President.", '親族', 'しんぞく']
            ],
            [
                [2467, [11739, 2108], 'merge', '合併する', []],
                ['<merge> with the company', '合併する', 'がっぺいする']
            ],
            [
                [2468, [11791, 2109], 'riot', '暴動', []],
                ['an anti-government <riot>', '暴動', 'ぼうどう']
            ]
        ],
        ['天文・科学系', [
                [2469, [11512, 2110], 'galaxy', '星雲', []],
                ['the Andromeda Galaxy', '星雲', 'せいうん']
            ],
            [
                [2470, [11829, 2111], 'cosmos', '宇宙', []],
                ['the structure of the <cosmos>', '宇宙', 'うちゅう']
            ],
            [
                [2471, [2112], 'celestial', '天体の', []],
                ['<celestial> mechanics', '天体の', 'てんたいの']
            ],
            [
                [2472, [2113], 'asteroid', '小惑星の', []],
                ['obtain resources from <asteroids>', '小惑星', 'しょうわくせい']
            ],
            [
                [2473, [2114], 'comet', '彗星', []],
                ['The icy <comet> melts in the sunlight and releases dust particles, which form a long tail.', '彗星', 'すいせい']
            ],
            [
                [2474, [11089, 2115], 'particle', '粒子', []],
                ['the <particles> of light', '粒子', 'りゅうし']
            ],
            [
                [2475, [11454, 2116], 'debris', '破片', []],
                ['<debris> from an explosion', '破片', 'はへん']
            ],
            [
                [2476, [11886], 'psychiatrist', '精神科医', [
                    [2117, 'psychiatric', '精神医学の']
                ]],
                ['psychologists and <psychiatrists>', '精神科医', 'せいしんかい']
            ],
            [
                [2477, [11646], 'contaminated', '汚染された', [
                    [2118, 'contaminate', '～を汚染する']
                ]],
                ['drink <contaminated> water', '汚染された', 'おせんされた']
            ],
            [
                [2478, [11848, 2119], 'specimen', '標本', []],
                ['a <specimen> of a rare plant', '標本', 'ひょうほん']
            ],
            [
                [2479, [10466], 'planet', '惑星', []],
                ['the <planet> Earth', '惑星', 'わくせい']
            ],
            [
                [2480, [11009], 'satellite', '衛星', []],
                ['a communications <satellite>', '衛星', 'えいせい']
            ],
            [
                [2481, [11085], 'telescope', '望遠鏡', []],
                ["NASA's space <telescope>", '望遠鏡', 'ぼうえんきょう']
            ],
            [
                [2482, [11146], 'solar', '太陽', []],
                ['<solar> energy', '太陽', 'たいよう']
            ],
            [
                [2483, [11942], 'ultraviolet', '紫外', []],
                ['harmful <ultraviolet> light', '紫外', 'しがい']
            ]
        ],
        ['地域・危険', [
                [2484, [12009, 2120], 'indigenous', '先住', []],
                ['<indigenous> peoples of Australia', '先住', 'せんじゅう']
            ],
            [
                [2485, [11526, 2121], 'province', '州', []],
                ['the <province> of Quebec', '州', 'しゅう']
            ],
            [
                [2486, [11866, 2122], 'peril', '危険', []],
                ['the <perils> of the road', '危険', 'きけん']
            ],
            [
                [2487, [11555, 2123], 'hazard', '危険なもの', []],
                ['a <hazard> to health', '危険なもの', 'きけんなもの']
            ],
            [
                [2488, [10694], 'endanger', '～を危険にさらす', []],
                ['an <endangered> species', '絶滅危惧', 'ぜつめつきぐ']
            ]
        ],
        ['形容詞', [
                [2489, [2124], 'plausible', 'もっともらしい、まことしやかな', []],
                ['You need to come up with a more <plausible> excuse; otherwise no one will believe you.', 'もっともらしい', 'もっともらしい']
            ],
            [
                [2490, [2125], 'preliminary', '予備の、事前の', []],
                ['a <preliminary> election [experiment]', '予備の', 'よびの']
            ],
            [
                [2491, [11984, 2126], 'anonymous', '匿名の', []],
                ['an <anonymous> letter', '匿名の', 'とくめいの']
            ],
            [
                [2492, [2127], 'obsolete', 'すたれた、時代遅れの', []],
                ['Computer hardware becomes <obsolete> as soon as new models come out.', '時代遅れに', 'じだいおくれに']
            ],
            [
                [2493, [11688, 2128], 'innate', '先天的な', []],
                ['<innate> ability to learn', '先天的な', 'せんてんてきな']
            ]
        ]
    ],
    ['難単語・4', ['別単語と関連づけて', [
                [2494, [11640, 2129], 'subsequent', '次に起こる', []],
                ['prepare for <subsequent> events', '次に起こる', 'つぎにおこる']
            ],
            [
                [2495, [2130], 'alleviate', '～を軽くする、軽減する', []],
                ['Maintaining good posture will help to <alleviate> your back pain.', '軽減する', 'けいげんする']
            ],
            [
                [2496, [12022, 2131], 'mandatory', '義務的な', [
                    [11993, 'compulsory', '義務的な']
                ]],
                ['<mandatory> standards for safety', '義務的な', 'ぎむてきな']
            ],
            [
                [2497, [2132], 'imperative', '必須の、急務の', []],
                ['Immediate action is <imperative> to prevent global warming.', '急務である', 'きゅうむである']
            ],
            [
                [2498, [11860, 2133], 'advent', '出現、到来', []],
                ['the <advent> of the Internet', '出現', 'しゅつげん']
            ],
            [
                [2499, [11906, 2134], 'heredity', '遺伝', []],
                ["Mendel's laws of <heredity>", '遺伝', 'いでん']
            ],
            [
                [2500, [11989, 2135], 'coherent', '一貫した', []],
                ['a logically <coherent> system', '一貫した', 'いっかんした']
            ],
            [
                [2501, [11946, 2136], 'legitimate', '正当な', []],
                ['a <legitimate> claim', '正当な', 'せいとうな']
            ],
            [
                [2502, [11545, 2137], 'certificate', '証明書', []],
                ['a birth <certificate>', '証明書', 'しょうめいしょ']
            ],
            [
                [2503, [11870, 2138], 'autonomy', '自主性', [
                    [11690, 'autonomous', '自動運転']
                ]],
                ['patient <autonomy>', '自主性', 'じしゅせい']
            ],
            [
                [2504, [11774, 2139], 'withstand', '耐える', []],
                ['<withstand> high temperatures', '耐える', 'たえる']
            ],
            [
                [2505, [11401, 2140], 'supplement', '補う', [
                    [11808, 'complement', '補うもの']
                ]],
                ['<supplement> your diet', '補う', 'おぎなう']
            ]
        ],
        ['類似単語と区別する', [
                [2506, [11345, 2141], 'dispose', '処理する', []],
                ['<dispose> of garbage', '処分する', 'しょぶんする']
            ],
            [
                [2507, [2142], 'humane', '思いやりのある、人道的な', []],
                ['The purpose of our group is to promote <humane> treatment of animals raised for food.', '思いやりのある', 'おもいやりのある']
            ],
            [
                [2508, [11482, 2143], 'personnel', '職員', []],
                ['school <personnel>', '職員', 'しょくいん']
            ],
            [
                [2509, [2144], 'maxim', '格言、原理', []],
                ['His favorite <maxim> is "Practice makes perfect."', '格言', 'かくげん']
            ],
            [
                [2510, [2145], 'questionnaire', 'アンケート調査', []],
                ['Please fill out the <questionnaire> and email it to us.', 'アンケート', 'あんけえと']
            ],
            [
                [2511, [11980, 2146], 'manifest', '明らかな', []],
                ['a <manifest> mistake', '明らかな', 'あきらかな']
            ]
        ],
        ['思想・言語', [
                [2512, [2147], 'connotation', '言外の意味、含蓄', []],
                ['The word "home" has a <connotation> of security.', '言外の意味', 'げんがいのいみ']
            ],
            [
                [2513, [2148], 'dogma', '教義、定説； 独断', []],
                ['He bravely challenged the <dogma> that the Earth was the center of the universe.', '定説', 'ていせつ']
            ],
            [
                [2514, [11804, 2149], 'prophet', '預言者', []],
                ['the <prophets> of the Bible', '預言者', 'よげんしゃ']
            ]
        ],
        ['図形', [
                [2515, [2150], 'symmetry', '左右対称、対称', []],
                ['The structure of the castle is in perfect <symmetry>.', '左右対称', 'さゆうたいしょう']
            ],
            [
                [2516, [2151], 'rectangular', '長方形の', []],
                ['a <rectangular> box', '長方形の', 'ちょうほうけいの']
            ],
            [
                [2517, [11490, 2152], 'diameter', '直径', []],
                ['a disk five inches in <diameter>', '直径', 'ちょっけい']
            ]
        ],
        ['動きをイメージする', [
                [2518, [11727, 2153], 'soothe', 'なだめる', []],
                ['<soothe> a crying child', 'なだめる', 'なだめる']
            ],
            [
                [2519, [11746, 2154], 'wither', 'しぼむ', []],
                ['The flowers will <wither> in the cold.', 'しぼむ', 'しぼむ']
            ],
            [
                [2520, [11807, 2155], 'surge', '急増', []],
                ['a <surge> in blood sugar', '急増', 'きゅうぞう']
            ],
            [
                [2521, [2156], 'proliferate', '急増する、繁殖する', []],
                ['Cancer causes mutated cells to <proliferate> out of control.', '増殖する', 'ぞうしょくする']
            ],
            [
                [2522, [11785, 2157], 'fetch', '取ってくる', []],
                ['<fetch> water from the river', '取ってくる', 'とってくる']
            ],
            [
                [2523, [11758, 2158], 'immerse', '浸る', []],
                ['be <immersed> in a different culture', '浸る', 'ひたる']
            ],
            [
                [2524, [2159], 'hamper', '～を妨げる', []],
                ['The search for the missing crew members was <hampered> by the thick fog.', '妨げられた', 'さまたげられた']
            ],
            [
                [2525, [2160], 'forge', '～を偽造する', []],
                ['The treaty was supposed to <forge> a close tie between the two countries.', '強化する', 'きょうかする']
            ]
        ],
        ['短い単語', [
                [2526, [11852, 2161], 'token', '印', []],
                ['as a <token> of our friendship', '印', 'しるし']
            ],
            [
                [2527, [11733, 2162], 'mock', 'あざける', []],
                ['<mock> her efforts', 'あざける', 'あざける']
            ],
            [
                [2528, [11832, 2163], 'toll', '通行料', []],
                ['an expressway <toll>', '通行料', 'つうこうりょう']
            ],
            [
                [2529, [11966, 2164], 'doom', '運命にある', []],
                ['The plan is <doomed> to failure.', '運命にある', 'うんめいにある']
            ],
            [
                [2530, [11535, 2165], 'flaw', '欠陥', []],
                ['find <flaws> in his argument', '欠陥', 'けっかん']
            ],
            [
                [2531, [2166], 'cater', '(食事などを)まかなう、(要求に)応じる', []],
                ['The city has many hotels that <cater> to the increasing number of foreign tourists,', '要望に応じる', 'ようぼうにおうじる']
            ]
        ],
        ['形容詞', [
                [2532, [2167], 'edible', '食べられる', []],
                ['There are over thousand different species of plants on the Earth, and thousand of them are <edible>.', '食べられる', 'たべられる']
            ],
            [
                [2533, [2168], 'delinquent', '非行の', []],
                ['a <delinquent> act', '非行の', 'ひこうの']
            ],
            [
                [2534, [11977, 2169], 'gigantic', '巨大な', []],
                ['a <gigantic> spaceship', '巨大な', 'きょだいな']
            ],
            [
                [2535, [11965, 2170], 'static', '静的な', []],
                ['<static> electricity', '静', 'せい']
            ],
            [
                [2536, [11540], 'antiquity', '古代、古物', [
                    [2171, 'antique', '古い、骨董の']
                ]],
                ['the art of <antiquity>', '古代', 'こだい']
            ]
        ],
        ['最後の仕上げ！', [
                [2537, [11833], 'transaction', '取引', [
                    [2172, 'transact', '～(業務・取引)を処理する、行う']
                ]],
                ['a <transaction> with the company', '取引', 'とりひき']
            ],
            [
                [2538, [10170], 'decorate', '～を装飾する', [
                    [2173, 'ornament', '装飾']
                ]],
                ['trees <decorated> with lights', '飾られた', 'かざられた']
            ],
            [
                [2539, [2174], 'corridor', '廊下', []],
                ['I walked down the <corridor> and entered the room at the far end.', '廊下', 'ろうか']
            ],
            [
                [2540, [2175], 'warrant', '～を保証する； 正当化する', []],
                ['There is not enough evidence to <warrant> a conclusion.', '正当性を保証する', 'せいとうせいをほしょうする']
            ],
            [
                [2541, [11900, 2176], 'mischief', 'いたずら', []],
                ['childhood <mischief>', 'いたずら', 'いたずら']
            ],
            [
                [2542, [11963], 'naughty', 'いたずらな', []],
                ['a <naughty> little boy', 'いたずらな', 'いたずらな']
            ]
        ]
    ],
    ['シス単より', ['生物', [
                [2543, [10512], 'insect', '昆虫', []],
                ['social <insects> like ants', '昆虫', 'こんちゅう']
            ],
            [
                [2544, [11055], 'wildlife', '野生生物', []],
                ['protect <wildlife>', '野生生物', 'やせいせいぶつ']
            ],
            [
                [2545, [11478], 'worm', '虫', []],
                ['a <worm> in the apple', '虫', 'むし']
            ],
            [
                [2546, [11572], 'predator', '捕食動物', []],
                ['<predators> like lions', '捕食動物', 'ほしょくどうぶつ']
            ],
            [
                [2547, [11585], 'pesticide', '殺虫剤', []],
                ['the use of <pesticides>', '殺虫剤', 'さっちゅうざい']
            ],
            [
                [2548, [11836], 'parasite', '寄生生物', []],
                ['an animal <parasite>', '寄生生物', 'きせいせいぶつ']
            ],
            [
                [2549, [11924], 'vegetation', '植生', []],
                ['destroy the <vegetation> in the area', '植生', 'しょくせい']
            ]
        ],
        ['人', [
                [2550, [10401], 'population', '人口', []],
                ['<population> growth', '人口', 'じんこう']
            ],
            [
                [2551, [10421], 'crowd', '群衆', []],
                ['A large <crowd> gathered.', '群衆', 'ぐんしゅう']
            ],
            [
                [2552, [10464], 'stranger', '見知らぬ人', []],
                ['talk to a <stranger>', '見知らぬ人', 'みしらぬひと']
            ],
            [
                [2553, [10487], 'enemy', '敵', []],
                ['a natural <enemy>', '敵', 'てき']
            ],
            [
                [2554, [10954], 'mankind', '人類', []],
                ['the history of <mankind>', '人類', 'じんるい']
            ],
            [
                [2555, [11680], 'per capita', '一人当たりの', []],
                ["Japan's <per capita> income", '一人当たりの', 'ひとりあたりの']
            ]
        ],
        ['本', [
                [2556, [10467], 'fiction', '小説', []],
                ['Truth is stranger than <fiction>', '小説', 'しょうせつ']
            ],
            [
                [2557, [10508], 'shelf', '棚', []],
                ['take a book from the <shelf>', 'たな', 'たな']
            ],
            [
                [2558, [11480], 'encyclopedia', '百科事典', []],
                ['a 20-volume <encyclopedia>', '百科事典', 'ひゃっかじてん']
            ],
            [
                [2559, [11578], 'biography', '伝記', []],
                ['a <biography> of Einstein', '伝記', 'でんき']
            ],
            [
                [2560, [11594], 'chapter', '章', []],
                ['the first <chapter> of The Tale of Genji', '章', 'しょう']
            ]
        ],
        ['荷物', [
                [2561, [10146], 'deliver', '～を配達する、渡す、～をする', []],
                ['<deliver> a message to a friend', '渡す', 'わたす']
            ],
            [
                [2562, [10438], 'envelope', '封筒', []],
                ['？put the letter in a pink <envelope>', '封筒', 'ふうとう']
            ],
            [
                [2563, [11451], 'luggage', '荷物', []],
                ['help him with his <luggage>', '荷物', 'にもつ']
            ],
            [
                [2564, [11910], 'cargo', '貨物', []],
                ['a <cargo> ship', '貨物', 'かもつ']
            ]
        ],
        ['用意', [
                [2565, [10041], 'prepare', '～の準備をする', []],
                ['<prepare> a room for a guest', '準備する', 'じゅんびする']
            ],
            [
                [2566, [10119], 'arrange', '～の手はずを整える、～を配列する', []],
                ['<arrange> the meeting', '手はずを整える', 'てはずをととのえる']
            ],
            [
                [2567, [10139], 'reserve', '～を予約する、～を取っておく', []],
                ['<reserve> a room at a hotel', '予約する', 'よやくする']
            ],
            [
                [2568, [10261], 'ready', '用意ができた', []],
                ['I am <ready> to start.', '用意ができている', 'よういができている']
            ]
        ],
        ['掃除', [
                [2569, [10894], 'wipe', '～をふく', [
                    [1505, 'wipe out', '']
                ]],
                ['<wipe> the table', 'ふく', 'ふく']
            ],
            [
                [2570, [10912], 'polish', '～を磨く', []],
                ['<polish> the shoes', '磨く', 'みがく']
            ],
            [
                [2571, [10917], 'sweep', '～を掃く', []],
                ['<sweep> the floor', '掃く', 'はく']
            ]
        ],
        ['味', [
                [2572, [10202], 'taste', '味、好み', []],
                ['a <taste> of lemon', '味', 'あじ']
            ],
            [
                [2573, [11664], 'sour', 'すっぱい', []],
                ['<sour> grapes', 'すっぱい', 'すっぱい']
            ]
        ],
        ['数', [
                [2574, [10478], 'billion', '十億', []],
                ['8 <billion> people', '十億', 'じゅうおく']
            ],
            [
                [2575, [11026], 'dozen', 'ダース', []],
                ['two <dozen> eggs', 'ダース', 'だあす']
            ]
        ],
        ['観光', [
                [2576, [10953], 'tourism', '観光', []],
                ['the <tourism> industry in Japan', '観光', 'かんこう']
            ],
            [
                [2577, [11551], 'landmark', '名所', []],
                ['visit some Paris <landmarks>', '名所', 'めいしょ']
            ]
        ],
        ['工芸', [
                [2578, [10780], 'craft', '工芸、技術、巧みに作る', []],
                ['a traditional Japanese <craft>', '工芸', 'こうげい']
            ],
            [
                [2579, [11843], 'artifact', '工芸品', []],
                ['Asian art and <artifacts>', '工芸品', 'こうげいひん']
            ]
        ],
        ['小道', [
                [2580, [10198], 'track', '小道、足跡', []],
                ['the <track> of a lion', '足跡', 'あしあと']
            ],
            [
                [2581, [11493], 'trail', '小道', []],
                ['walk along a mountain <trail>', '小道', 'こみち']
            ]
        ],
        ['動詞', [
                [2582, [10018], 'worry', '心配する', []],
                ['<worry> about money', '心配する', 'しんぱいする']
            ],
            [
                [2583, [10019], 'wonder', '～かと疑問に思う', []],
                ['<wonder> where he has gone', '思う', 'おもう']
            ],
            [
                [2584, [10025], 'support', '～を支持する', []],
                ['<support> the President', '支持する', 'しじする']
            ],
            [
                [2585, [10057], 'draw', '～を引っぱる', []],
                ['<draw> a map', '描く', 'えがく']
            ],
            [
                [2586, [10094], 'warn', '～に警告する', []],
                ['<warn> him of the danger', '警告する', 'けいこくする']
            ],
            [
                [2587, [10101], 'rush', '急いで行く', []],
                ['<rush> into the hospital', '急いで行く', 'いそいでいく']
            ],
            [
                [2588, [10134], 'repair', '～を修理する', []],
                ['<repair> the car', '修理する', 'しゅうりする']
            ],
            [
                [2589, [10136], 'pardon', '～を許す', []],
                ['<Pardon> me.', 'ごめんなさい', 'ごめんなさい']
            ],
            [
                [2590, [10143], 'rent', '～を賃借りする', []],
                ['<rent> an apartment', '借りる', 'かりる']
            ],
            [
                [2591, [10151], 'own', '～を所有している', []],
                ['<own> a house', '所有している', 'しょゆうしている']
            ],
            [
                [2592, [10159], 'freeze', '凍りつく', []],
                ['a <frozen> stream', '凍った', 'こおった']
            ],
            [
                [2593, [10172], 'seat', '座っている', []],
                ['be <seated> on the bench', '座っている', 'すわっている']
            ],
            [
                [2594, [10332], 'explain', '～を説明する', []],
                ['<explain> why he was late', '説明する', 'せつめいする']
            ],
            [
                [2595, [10340], 'protect', '～を守る', []],
                ['<protect> children from danger', '守る', 'まもる']
            ],
            [
                [2596, [10359], 'borrow', '～を借りる', []],
                ['<borrow> a book from a friend', '借りる', 'かりる']
            ],
            [
                [2597, [10360], 'invent', '～を発明する', []],
                ['<invent> a time machine', '発明する', 'はつめいする']
            ],
            [
                [2598, [10365], 'recommend', '～を勧める', []],
                ['<recommend> this book to you', '勧める', 'すすめる']
            ],
            [
                [2599, [10370], 'select', '～を選ぶ', []],
                ['<select> the best answer', '選ぶ', 'えらぶ']
            ],
            [
                [2600, [10681], 'cheat', 'いかさまをする', []],
                ['<cheat> consumers', 'だます', 'だます']
            ],
            [
                [2601, [10687], 'chase', '～を追いかける', []],
                ['<chase> the car', '追跡する', 'ついせきする']
            ],
            [
                [2602, [10700], 'tap', '～を軽くたたく', []],
                ['<tap> her on the shoulder', '軽くたたく', 'かるくたたく']
            ],
            [
                [2603, [10880], 'sinking', '沈む', []],
                ['leave a <sinking> ship', '沈む', 'しずむ']
            ],
            [
                [2604, [10881], 'rescue', '～を救助する', []],
                ['<rescue> a man from a fire', '救助する', 'きゅうじょする']
            ],
            [
                [2605, [10892], 'chat', 'おしゃべりする', []],
                ['<chat> with friends', 'おしゃべりする', 'おしゃべりする']
            ],
            [
                [2606, [11221], 'skip', 'とばす、抜かす', []],
                ['<skip> lunch', '抜く', 'ぬく']
            ],
            [
                [2607, [11250], 'utilize', '利用する', []],
                ['<utilize> waste materials', '利用する', 'りようする']
            ],
            [
                [2608, [11251], 'snap', 'ポキンと折れる、ポキンと折る', []],
                ['The stick <snapped>.', 'ポキンと折れた', 'ぽきんとおれた']
            ],
            [
                [2609, [11374], 'weep', '泣く', []],
                ['<weep> all night long', '泣く', 'なく']
            ],
            [
                [2610, [11424], 'drift', '漂う', []],
                ['<drift> like a cloud', 'ただよう', 'ただよう']
            ],
            [
                [2611, [11440], 'hug', '抱きしめる', []],
                ['<hug> and kiss him', '抱きしめ', 'だきしめ']
            ],
            [
                [2612, [11702], 'smash', '粉々に砕く', []],
                ['<smash> a bottle', '粉々に砕く', 'こなごなにくだく']
            ],
            [
                [2613, [11705], 'shatter', '粉々にする', []],
                ['<shatter> windows', '粉々にする', 'こなごなにする']
            ]
        ],
        ['名詞', [
                [2614, [10221], 'scene', '場面、現場', [
                    [1562, 'make a scene', 'ひと騒ぎする、醜態を晒す']
                ]],
                ['the <scene> of the accident', '現場', 'げんば']
            ],
            [
                [2615, [10224], 'medium', '手段', []],
                ['the <medium> of communication', '手段', 'しゅだん']
            ],
            [
                [2616, [10415], 'shape', '形', []],
                ['the <shape> of her nose', '形', 'かたち']
            ],
            [
                [2617, [10418], 'habit', '習慣', []],
                ['be in the <habit> of reading in bed', '習慣', 'しゅうかん']
            ],
            [
                [2618, [10420], 'distance', '距離', []],
                ['within walking <distance> of my house', '距離', 'きょり']
            ],
            [
                [2619, [10477], 'ladder', 'はしご', []],
                ['climb a <ladder>', 'はしご', 'はしご']
            ],
            [
                [2620, [10482], 'edge', '周辺', []],
                ['the <edge> of the Pacific Ocean', '周辺', 'しゅうへん']
            ],
            [
                [2621, [10498], 'stream', '小川', []],
                ['a clear mountain <stream>', '小川', 'おがわ']
            ],
            [
                [2622, [10500], 'yard', '庭', []],
                ['a tree in the <yard>', '庭', 'にわ']
            ],
            [
                [2623, [10718], 'profile', 'プロフィール、人物紹介、横顔', []],
                ['your online <profile>', 'プロフィール', 'ぷろふいいる']
            ],
            [
                [2624, [10734], 'frame', 'わく', []],
                ['a window <frame>', 'わく', 'わく']
            ],
            [
                [2625, [10744], 'trap', 'わな、閉じ込められる、わなにかける', []],
                ['fall into a <trap>', 'わな', 'わな']
            ],
            [
                [2626, [10749], 'tune', '曲', []],
                ['the beauty of the <tune>', '曲', 'きょく']
            ],
            [
                [2627, [10750], 'height', '高さ、最盛期', []],
                ['Summer is at its <height>.', '真っ盛り', 'まっさかり']
            ],
            [
                [2628, [10754], 'version', '型、...版、翻訳、説明', []],
                ['the latest <version> of the software', '版', 'ばん']
            ],
            [
                [2629, [10773], 'shade', '陰、日陰', []],
                ['keep the beer in the <shade>', '日陰', 'ひかげ']
            ],
            [
                [2630, [10938], 'tax', '税金', []],
                ['pay <taxes> on the land', '税金', 'ぜいきん']
            ],
            [
                [2631, [11034], 'mechanism', '仕組み', []],
                ['the <mechanism> of a clock', '仕組み', 'しくみ']
            ],
            [
                [2632, [11047], 'purse', '財布', []],
                ['take money out of the <purse>', '財布', 'さいふ']
            ],
            [
                [2633, [11105], 'sweat', '汗', []],
                ['the smell of <sweat>', '汗', 'あせ']
            ],
            [
                [2634, [11108], 'tip', '先', []],
                ['the <tip> of my finger', '先', 'さき']
            ],
            [
                [2635, [11299], 'haste', '急ぐこと', []],
                ['write a letter in <haste>', 'あわてて', 'あわてて']
            ],
            [
                [2636, [11300], 'nap', 'うたた寝', []],
                ['take a <nap> in the afternoon', 'うたた寝', 'うたたね']
            ],
            [
                [2637, [11469], 'flame', '炎', []],
                ['watch the candle <flame>', '炎', 'ほのお']
            ],
            [
                [2638, [11477], 'monument', '記念碑', []],
                ['a historical <monument>', '記念碑', 'きねんひ']
            ],
            [
                [2639, [11491], 'lottery', '宝くじ', []],
                ['win the <lottery>', '宝くじ', 'たからくじ']
            ],
            [
                [2640, [11496], 'whistle', '笛', []],
                ['blow a <whistle>', '笛', 'ふえ']
            ],
            [
                [2641, [11504], 'headquarters', '本部、本社', []],
                ['police <headquarters>', '本部', 'ほんぶ']
            ],
            [
                [2642, [11505], 'wilderness', '荒野', []],
                ['explore the vast <wilderness>', '荒野', 'こうや']
            ],
            [
                [2643, [11509], 'bargain', '掘り出し物', []],
                ['This house is a <bargain>.', '掘り出し物', 'ほりだしもの']
            ],
            [
                [2644, [11543], 'nightmare', '悪夢', []],
                ['have a <nightmare>', '悪夢', 'あくむ']
            ],
            [
                [2645, [11550], 'grace', '優雅さ', []],
                ['the <grace> of her movements', '優雅さ', 'ゆうがさ']
            ],
            [
                [2646, [11560], 'jewelry', '宝石', []],
                ['a <jewelry> store', '宝石', 'ほうせき']
            ],
            [
                [2647, [11569], 'sculpture', '彫刻', []],
                ['painting and <sculpture>', '彫刻', 'ちょうこく']
            ],
            [
                [2648, [11849], 'hygiene', '衛生', []],
                ['good <hygiene> practices', '衛生', 'えいせい']
            ],
            [
                [2649, [11895], 'riddle', '謎', []],
                ['solve a <riddle>', '謎', 'なぞ']
            ],
            [
                [2650, [11898], 'sanitation', '衛生', []],
                ['public <sanitation>', '衛生', 'えいせい']
            ],
            [
                [2651, [11899], 'midst', 'まっただ中', []],
                ['in the <midst> of the lecture', 'まっただ中', 'まっただなか']
            ]
        ],
        ['形容詞', [
                [2652, [10257], 'serious', '深刻な', []],
                ['<serious> social problems', '深刻な', 'しんこくな']
            ],
            [
                [2653, [10291], 'narrow', '狭い', []],
                ['a <narrow> street', '狭い', 'せまい']
            ],
            [
                [2654, [10294], 'alike', '似ている', []],
                ['The brothers look <alike>.', '似ている', 'にている']
            ],
            [
                [2655, [10529], 'similar', '似ている', []],
                ['be <similar> to each other', '似ている', 'にている']
            ],
            [
                [2656, [10564], 'polite', '礼儀正しい', []],
                ['be <polite> to ladies', '礼儀正しい', 'れいぎただしい']
            ],
            [
                [2657, [10566], 'rude', '失礼な', []],
                ['<rude> behavior', '失礼な', 'しつれいな']
            ],
            [
                [2658, [10574], 'brief', '簡潔な', []],
                ['a <brief> explanation', '簡潔な', 'かんけつな']
            ],
            [
                [2659, [10832], 'refreshing', 'さわやかな', []],
                ['a <refreshing> drink', 'さわやかな', 'さわやかな']
            ],
            [
                [2660, [10840], 'fond', 'Aが好きだ', []],
                ['She is very <fond> of reading', '大好きだ', 'だいすきだ']
            ],
            [
                [2661, [10842], 'lazy', '怠惰な', []],
                ['a <lazy> student', '怠惰な', 'たいだな']
            ],
            [
                [2662, [11658], 'nasty', '不快な', []],
                ['a <nasty> smell', '不快な', 'ふかいな']
            ],
            [
                [2663, [11979], 'slender', 'すらりとした', []],
                ['a <slender> girl with long hair', 'すらりとした', 'すらりとした']
            ],
            [
                [2664, [12008], 'secondhand', '間接', []],
                ['<secondhand> smoke', '間接', 'かんせつ']
            ],
            [
                [2665, [12018], 'merry', '陽気な', []],
                ['marry <merry> Mary', '陽気な', 'ようきな']
            ]
        ],
        ['副詞', [
                [2666, [10311], 'afterward', 'その後', []],
                ['Soon <afterward>, he left', 'その後', 'そのあと']
            ],
            [
                [2667, [10312], 'nearly', 'ほとんど', []],
                ['<nearly> 30 years ago', '近く', 'ちかく']
            ],
            [
                [2668, [10319], 'seldom', 'めったに～ない', []],
                ['I <seldom> see him.', 'めったにない', 'めったにない']
            ],
            [
                [2669, [10321], 'throughout', 'いたる所に', []],
                ['people <throughout> the world', '中', 'なか']
            ],
            [
                [2670, [10322], 'unlike', '～と違って', []],
                ['Unlike my wife, I get up early.', '違って', 'ちがって']
            ],
            [
                [2671, [10324], 'beyond', '～の向こうに；～できる範囲をこえて', []],
                ["It's <beyond> my understanding.", 'こえて', 'こえて']
            ],
            [
                [2672, [10325], 'within', '～以内で', []],
                ['<within> a mile of the station', '以内で', 'いないで']
            ],
            [
                [2673, [10326], 'nor', '～もない', []],
                ['have neither time <nor> money', 'もない', 'もない']
            ],
            [
                [2674, [10329], 'ought', '～すべきである', []],
                ['You <ought> to see a doctor', 'べきだ', 'べきだ']
            ],
            [
                [2675, [10330], 'in spite of', '～にもかかわらず', []],
                ['<in spite of> difficulties', 'にもかかわらず', 'にもかかわらず']
            ],
            [
                [2676, [10331], 'whether', '～かどうか、～であろうとなかろうと', []],
                ["I don't know <whether> it is true or not.", 'かどうか', 'かどうか']
            ],
            [
                [2677, [10598], 'overnight', '一晩', []],
                ['stay <overnight> in his house', '一晩', 'ひとばん']
            ],
            [
                [2678, [10817], 'latter', '後者の', []],
                ['I have a dog and a cat. The <latter> is bigger.', '後者の', 'こうしゃの']
            ],
            [
                [2679, [11694], 'necessarily', '必ずしも', []],
                ['not <necessarily> true', '必ずしも', 'かならずしも']
            ],
            [
                [2680, [11696], 'frankly', '率直に', []],
                ['speak <frankly>', '率直に', 'そっちょくに']
            ],
            [
                [2681, [12027], 'lest', '～しないように', []],
                ['He wrote it down <lest> he forget.', 'ないように', 'ないように']
            ]
        ]
    ]
]
