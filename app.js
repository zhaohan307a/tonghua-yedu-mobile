const books = [
  {
    slug: "nightingale",
    title: "夜莺",
    author: "安徒生原作故事整理版",
    status: "完整故事",
    hero: "assets/illustrations/nightingale-garden.jpg",
    summary:
      "一只真实的小鸟，用最朴素的歌声打动了皇帝，也让人明白：活的心意，比再精巧的仿造更珍贵。",
    images: [
      {
        src: "assets/illustrations/nightingale-garden.jpg",
        caption: "花园深处，夜莺把夜色唱得明亮起来。",
      },
      {
        src: "assets/illustrations/nightingale-palace-song.jpg",
        caption: "真正的夜莺来到宫殿，用朴素的歌声打动所有人。",
      },
      {
        src: "assets/illustrations/nightingale-mechanical-bird.jpg",
        caption: "金光闪闪的机械鸟会唱固定的曲子，却听不见人的心。",
      },
      {
        src: "assets/illustrations/nightingale-window.jpg",
        caption: "真正的歌声来到窗前，给病中的皇帝带回希望。",
      },
    ],
    chapters: [
      {
        title: "一、花园里的歌声",
        paragraphs: [
          "很久以前，东方有一位皇帝。他的宫殿用最细致的瓷砖砌成，屋檐像云一样轻，回廊长得仿佛永远走不到尽头。宫里有金灯、银钟、会喷香水的花瓶，还有许多穿着丝袍的人，时时刻刻低声说话，生怕惊动了尊贵的主人。",
          "可是，来过这个国家的旅人，写信回家时最爱夸赞的，并不是宫殿。他们说，皇帝的花园大得像一片小森林，花开得一层又一层，湖水一直流到远方的海边。到了夜里，有一只灰褐色的小夜莺站在枝头唱歌，声音清亮得像月光落在水上。",
          "这件事传到皇帝耳朵里时，他很惊讶。他住在宫里，却从不知道自己的花园有这样一位歌手。皇帝立刻命令大臣去找夜莺，说今晚就要听它唱歌。",
        ],
      },
      {
        title: "二、真正的夜莺",
        paragraphs: [
          "大臣们在宫里找来找去，问厨子、问园丁、问守门人，谁也说不清夜莺在哪里。最后，一个小厨房女仆小声说，她每天晚上给生病的母亲送饭，经过树林时，总能听见夜莺唱歌。那声音让她觉得，自己又有力气走很远的路。",
          "大家跟着小女仆走进花园深处。一路上，他们把牛叫声、青蛙声都错认成夜莺，直到真正的歌声从树梢流下来，所有人才安静了。那只小鸟并不华丽，羽毛灰灰的，眼睛却明亮。它听说皇帝想听歌，便轻轻点头，跟着众人来到宫殿。",
          "夜莺站在金架子上唱起来。它唱森林的露水，唱海风，唱小女仆夜路上的思念。皇帝听着听着，眼角落下一滴泪。夜莺说，能唱出让人流泪的歌，就是它最好的奖赏。",
        ],
      },
      {
        title: "三、会发条的鸟",
        paragraphs: [
          "从那以后，夜莺成了宫里的贵客。可是不久，有人从远方送来一只机械鸟。它浑身镶着宝石，只要拧紧发条，就会唱同一支华丽的曲子。宫里的人都围着它赞叹，因为它闪闪发光，还能让大家准确地知道下一句会怎样唱。",
          "真正的夜莺听见机械鸟唱歌，没有争辩，只悄悄飞回了树林。宫里的人发现它不见了，便说它不懂规矩。于是，机械鸟每天在皇帝面前唱三十三遍，直到发条磨损，声音变得断断续续。",
          "过了几年，皇帝病倒了。宫殿里静得可怕，连金灯也像不敢发亮。机械鸟躺在匣子里，因为没有人能把它修好，唱不出一点声音。",
        ],
      },
      {
        title: "四、窗前的礼物",
        paragraphs: [
          "夜深时，皇帝觉得有许多沉重的影子围在床边。他想听一首歌，可身边没有人能给他。就在这时，窗外传来熟悉的声音。真正的夜莺停在枝上，为他唱起森林、湖水和春天。",
          "那些影子慢慢退去了。皇帝的脸上有了血色，呼吸也平稳下来。他请夜莺留在宫里，愿意送它金笼子和最高的荣誉。夜莺却说，它属于树枝、天空和自由的风。它愿意常常飞来唱歌，但不愿被锁住。",
          "清晨，宫里的人以为皇帝再也醒不过来，走进来时却看见他坐起身，微笑着向他们问好。谁也不知道，夜里有一只小鸟来过。只有皇帝明白：有些最珍贵的东西，不靠金子发光，而靠真心发声。",
        ],
      },
    ],
  },
  {
    slug: "six-swans",
    title: "六只天鹅",
    author: "格林兄弟原作故事整理版",
    status: "完整故事",
    hero: "assets/illustrations/six-swans-forest.jpg",
    summary:
      "妹妹为了救回被魔法变成天鹅的哥哥们，学会了忍耐、勇气和沉默中的坚持。",
    images: [
      {
        src: "assets/illustrations/six-swans-forest.jpg",
        caption: "森林黄昏，六只白天鹅从妹妹头顶飞过。",
      },
      {
        src: "assets/illustrations/six-swans-hut.jpg",
        caption: "小屋门前，妹妹终于见到被魔法困住的哥哥们。",
      },
      {
        src: "assets/illustrations/six-swans-sewing.jpg",
        caption: "她不能说话，只能一针一线缝出救人的衣裳。",
      },
      {
        src: "assets/illustrations/six-swans-sunrise.jpg",
        caption: "太阳升起时，魔法终于被勇敢的心解开。",
      },
    ],
    chapters: [
      {
        title: "一、森林中的秘密",
        paragraphs: [
          "从前有一位国王，他有六个儿子和一个小女儿。孩子们的母亲去世后，国王又娶了一位新王后。新王后会一点阴暗的魔法，她不喜欢这些孩子，尤其不愿看见六位王子长大后受到人民爱戴。",
          "国王怕孩子们受伤，悄悄把六个儿子藏到森林深处的一座小屋里。他每天按照一团会滚动的线，找到小屋送去食物。可是新王后发现了这个秘密。她拿到线团，做了六件带魔法的小衬衣。",
          "一天，她走进森林，把衬衣披到六个王子身上。衣服刚碰到他们的肩，六位哥哥就变成了六只白天鹅，拍着翅膀飞走了。",
        ],
      },
      {
        title: "二、妹妹的决定",
        paragraphs: [
          "小公主知道哥哥们不见了，心里又怕又急。她独自跑进森林，走了很久，终于找到那座小屋。夜幕落下时，六只白天鹅飞了回来。太阳一下山，他们就能短暂变回人的模样。",
          "哥哥们告诉她，魔法很难解除。她必须六年不说一句话，也不能笑出声；同时要用星花草一针一线缝出六件衬衣。只要有一件没有完成，对应的哥哥就不能完全变回人。",
          "小公主听完，没有抱怨。她摘下星花草，坐在树下开始缝。针尖扎破手指时，她也只是轻轻吸一口气。她把所有想说的话都藏在心里，变成一针一线的坚持。",
        ],
      },
      {
        title: "三、沉默的王后",
        paragraphs: [
          "后来，邻国的年轻国王在森林里遇见了她。他看见这个姑娘虽然衣衫朴素，却有一双坚定又温柔的眼睛，便把她带回城堡，娶她为王后。小公主依旧不能说话，也不能解释自己的秘密。",
          "城堡里有人不喜欢这位沉默的王后，编造了许多坏话。她受了委屈，仍旧每天缝衣。夜里，别人睡了，她就在月光下继续做针线；白天，她把衬衣藏好，安静地承受所有误会。",
          "六年快要满了，她已经完成五件衬衣，第六件只差一只袖子。可就在最后一天，坏人又陷害她。她被带到众人面前，仍然不能为自己辩解，因为只要说出一个字，哥哥们就再也没有希望。",
        ],
      },
      {
        title: "四、白羽与黎明",
        paragraphs: [
          "火堆已经点起，所有人都以为沉默的王后无话可说。就在太阳升起前，天空传来翅膀声。六只白天鹅飞过城堡，落在她身边。",
          "她把六件衬衣一件件披到天鹅身上。前五只立刻变回英俊的王子，第六只也变回了人，只是因为最后一只袖子还没缝完，他的一只手臂仍保留着白色的天鹅翅膀。",
          "六年期限到了，小公主终于可以说话。她把一切讲清楚，所有误会都消散了。年轻国王紧紧握住她的手，哥哥们也围在她身边。从此以后，大家记得的不是她曾经沉默多久，而是她为了爱和承诺，勇敢坚持了多久。",
        ],
      },
    ],
  },
  {
    slug: "whale-and-fish",
    title: "鲸和小鱼",
    author: "张秋生作品，用户提供文本",
    status: "完整故事",
    hero: "assets/illustrations/whale-and-fish.jpg",
    summary:
      "巨大的鲸和小小的鱼在大海里相遇，真诚让大小悬殊的朋友也能拥有温暖的友谊。",
    images: [
      {
        src: "assets/illustrations/whale-and-fish.jpg",
        caption: "辽阔的大海上，鲸背着小鱼慢慢看世界。",
      },
    ],
    chapters: [
      {
        title: "一、鲸和小鱼",
        paragraphs: [
          "大海里，一条鲸在游来游去。",
          "鲸的个子很大很大，像一艘大轮船那么庞大。",
          "它游过一座小岛的时候，遇见了一条小鱼。",
          "小鱼很小很小，就像一片轻飘飘的树叶。",
          "小鱼怯生生地问鲸：“你会欺负我吗？”",
          "鲸慢悠悠地摇了摇尾巴，温和地说：“才不会呢，我最喜欢和小鱼交朋友。”",
          "就这样，小鱼和鲸成了要好的伙伴。",
          "小鱼提议：“我们来玩捉迷藏好不好？”",
          "鲸摇摇头：“我体型太大啦，藏不住的。”",
          "“那赛跑？”",
          "“也不行，我身子笨重，游不快。”",
          "小鱼歪着头思索片刻：“那我们能玩什么呀？”",
          "鲸笑着说：“我带你环游整片大海，我驮着你，看一看海底森林、彩色珊瑚，看成群的热带鱼赶路，看夕阳落在海面上。”",
          "小鱼开心地跳到鲸鱼宽阔的背上。",
          "辽阔无垠的大海上，巨大的鲸鱼背着小小的鱼儿慢慢前行。",
          "大个子从不傲慢，小个子不必胆怯，真诚相待，大小悬殊也能拥有美好的友谊。",
        ],
      },
      {
        title: "补充",
        paragraphs: [
          "本书为短篇散文合集，均是这类短小诗意的自然小故事，适合低年级积累文字素材。",
        ],
      },
    ],
  },
  {
    slug: "children-carriage",
    title: "孩子的马车",
    author: "王鲁彦作品，用户提供文本",
    status: "完整故事",
    hero: "assets/illustrations/children-carriage.jpg",
    summary:
      "一辆小小的木制马车，装着孩子的欢笑，也装着清贫日子里沉甸甸的父爱。",
    images: [
      {
        src: "assets/illustrations/children-carriage.jpg",
        caption: "家门口的空地上，小马车咕噜噜来回跑动。",
      },
    ],
    chapters: [
      {
        title: "一、孩子的马车",
        paragraphs: [
          "我为了几个孩子，又动了买玩具的念头。",
          "大孩子已经七八岁，第二个也六岁了，最小的才三岁。他们天天望着邻家孩子的木制小马车，眼里满是羡慕。那马车构造简单，四个木轮，一根推杆，拉着走会发出咕噜咕噜的声响。孩子们每次路过，总要停下脚步看上许久。",
          "这天傍晚，孩子们围着我，扯着衣角小声央求：“爸爸，我们也想要一辆马车。”",
          "看着他们亮晶晶的眼睛，我一口答应下来：“好，明天上街给你们买。”",
          "孩子们瞬间欢呼起来，大孩子立刻懂事地说：“买回来我先让弟弟妹妹先玩。”",
          "一旁的妻子连忙拉住我，压低声音提醒：“你别随口许诺，兜里只剩两元生活费，日常开销都紧巴巴，哪里有钱买车？哄得孩子满心期待，最后落空只会更难过。”",
          "我摆摆手：“我自有办法。”",
          "第二天一早，我早早去往集市，寻遍街边杂货铺，终于找到最便宜的木制马车，花光了大半零钱。捧着小小的木车走回家，老远就看见三个孩子守在门口张望。",
          "马车交到孩子们手中，瞬间炸开了欢乐。老大小心翼翼推着，老二拉着推杆奔跑，最小的孩子坐在车厢里笑得手舞足蹈。家门口的空地上，马车咕噜噜来回跑动。",
          "孩子们还兴致勃勃和路过的小汽车比赛。",
          "“预备，一二三，跑！”",
          "木马车轻快地向前奔，笨重的汽车轰鸣着缓缓挪动，转弯还要费力挪动车身。孩子们放声大笑，为自己的小车欢呼。",
          "我和妻子站在门边望着嬉闹的孩子，心底满是温暖。日子清贫，物质匮乏，但倾尽所能满足孩子小小的心愿，平凡生活里细碎的爱意，就是最珍贵的幸福。马车不贵，装着的却是沉甸甸的父爱。",
        ],
      },
      {
        title: "补充",
        paragraphs: [
          "全书收录《故乡的杨梅》《旅人的心》等乡土散文，以童年、亲情、故乡风物为主题。",
        ],
      },
    ],
  },
  {
    slug: "books-night-talk",
    title: "书的夜话",
    author: "叶圣陶作品，用户提供文本",
    status: "完整故事",
    hero: "assets/illustrations/books-night-talk.jpg",
    summary:
      "夜深人静的旧书店里，书本们谈起自己的命运，也说出阅读真正的意义。",
    images: [
      {
        src: "assets/illustrations/books-night-talk.jpg",
        caption: "月光照进旧书店，书本们开始轻声夜话。",
      },
    ],
    chapters: [
      {
        title: "一、书的夜话",
        paragraphs: [
          "旧书店的大门早已关上，夜深人静，月光透过玻璃窗照进书架。安静的书屋中，书本们开启了一场闲谈。",
          "一本蓝色封面的旧书率先开口，对着崭新的几本新书问道：“新来的朋友们，你们问世没多久吧？书页鲜亮娇嫩。”",
          "一本红面新书回答：“我们已经问世二十年了，只是从前的主人格外爱惜，很少翻阅。”",
          "“那为何被卖到旧书店？”",
          "“原本的主人是一位富商，收藏我们只为装点书房门面。满架书本从不翻看，后来商人破产，所有藏书便被旧货商人收购，送到了这里。我们从未发挥书本真正的用处。”",
          "一旁破旧的教科书叹了口气：“我历经三代学子，书页磨损卷边，每一位主人都逐字研读，勾画批注。我看着孩童识字读书，伴着读书人长大，虽然破旧，却活得十分充实。”",
          "这时书架角落一本残破泛黄的古书慢悠悠发言，它已经三千多岁。",
          "“我流转一百三十多位主人，一代代师生相传。有人埋头研读参悟道理；有人随手搁置，落满灰尘。书本本身没有价值，唯有被认真阅读、用心思考，才能活出意义。”",
          "一本华丽的精装回忆录补充：“我曾属于高官贵人，主人只在宾客到访时摆放出来炫耀，内里文字从头到尾不曾读过一页。华丽装帧只是外壳，空空的内里终究毫无用处。”",
          "书本们纷纷诉说各自的经历：有的陪伴主人寒窗苦读，收获学识；有的沦为摆设，虚度一生；有的历经岁月，代代传递知识。",
          "夜色渐深，书本们达成共识：书籍的使命是被阅读。附庸风雅的收藏、闲置封存，都会埋没文字的力量；认真品读、感悟思考，才是书本与读书人最好的相遇。",
        ],
      },
      {
        title: "补充拓展",
        paragraphs: [
          "整套《稻草人》童话集，主打现实温情风格，代表作《稻草人》以田间稻草人视角，讲述旧社会底层农民的苦难，适合二升三感悟生活、提升阅读理解与写作深度。",
        ],
      },
    ],
  },
];

const app = document.querySelector("#app");
const progressBar = document.querySelector("#progressBar");

function mobileImage(src) {
  return src.replace(/\.jpg$/, "-mobile.jpg");
}

function imageAttrs(src) {
  return `src="${src}" srcset="${mobileImage(src)} 800w, ${src} 1200w" sizes="(max-width: 760px) calc(100vw - 28px), 840px"`;
}

function renderHome() {
  document.title = "童话夜读";
  app.innerHTML = `
    <header class="site-header">
      <p class="eyebrow">Dark Reading Library</p>
      <h1>童话夜读</h1>
      <p class="lead">五篇适合二升三阅读的故事与散文，配原创插画和深色护眼排版。适合手机睡前阅读，也适合电脑上慢慢翻看。</p>
    </header>
    <main class="book-grid" aria-label="书目">
      ${books
        .map(
          (book) => `
            <a class="book-card" href="#/${book.slug}">
              <img ${imageAttrs(book.hero)} alt="${book.title}插画" loading="lazy" decoding="async" />
              <div class="book-card-body">
                <div class="meta-row">
                  <span class="pill">${book.status}</span>
                  <span class="pill">${book.author}</span>
                </div>
                <h2>${book.title}</h2>
                <p>${book.summary}</p>
              </div>
            </a>
          `
        )
        .join("")}
    </main>
    <footer class="site-footer">
      本站正文包含公版故事整理版与用户提供文本；不复刻现代出版社版式，插画为原创生成图片。
    </footer>
  `;
}

function renderBook(book) {
  document.title = `${book.title} - 童话夜读`;
  app.innerHTML = `
    <main class="reader-shell">
      <nav class="top-nav" aria-label="阅读导航">
        <a class="nav-link" href="#">返回书目</a>
        <a class="nav-link" href="#/${book.slug}/copyright">版权说明</a>
      </nav>
      <header class="hero">
        <img ${imageAttrs(book.hero)} alt="${book.title}主插画" decoding="async" />
        <div class="meta-row">
          <span class="pill">${book.status}</span>
          <span class="pill">${book.author}</span>
        </div>
        <h1 class="story-title">${book.title}</h1>
        <p class="story-subtitle">${book.summary}</p>
      </header>
      <section class="toc" aria-label="目录">
        <h2>目录</h2>
        <ol>
          ${book.chapters
            .map(
              (chapter, index) =>
                `<li><a href="#/${book.slug}/chapter-${index + 1}">${chapter.title}</a></li>`
            )
            .join("")}
        </ol>
      </section>
      ${book.chapters
        .map((chapter, index) => {
          const figure = book.images[index]
            ? `<figure class="story-figure">
                <img ${imageAttrs(book.images[index].src)} alt="${book.images[index].caption}" loading="lazy" decoding="async" />
                <figcaption>${book.images[index].caption}</figcaption>
              </figure>`
            : "";
          return `
            <section class="chapter" id="chapter-${index + 1}">
              <h2>${chapter.title}</h2>
              ${figure}
              ${chapter.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
            </section>
          `;
        })
        .join("")}
      <aside class="note" id="copyright">
        版权说明：本页正文为公版故事整理版或用户提供文本；不复刻现代出版社版式，插画为原创生成图片。
      </aside>
    </main>
  `;
}

function renderNotFound() {
  document.title = "未找到 - 童话夜读";
  app.innerHTML = `
    <main class="empty-state">
      <h1>没有找到这篇故事</h1>
      <p class="lead">请返回书目重新选择。</p>
      <a class="nav-link" href="#">返回书目</a>
    </main>
  `;
}

function route() {
  const [slug, targetId] = location.hash.replace(/^#\/?/, "").split("/");
  const book = books.find((item) => item.slug === slug);

  if (!slug) {
    renderHome();
  } else if (book) {
    renderBook(book);
  } else {
    renderNotFound();
  }

  requestAnimationFrame(() => {
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    } else {
      window.scrollTo({ top: 0 });
    }
  });
  updateProgress();
}

function updateProgress() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

window.addEventListener("hashchange", route);
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);

route();
