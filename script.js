const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');
const toast = document.querySelector('.toast');
const languageSelect = document.querySelector('#language-select');
const modal = document.querySelector('#exhibition-modal');
const modalTitle = document.querySelector('#modal-title');
const modalDescription = document.querySelector('#modal-description');
const modalDetail = document.querySelector('#modal-detail');

const translations = {
  'zh-Hant': {
    navStories:'Stories', navIndex:'Style Index', navGallery:'Gallery', navNotes:'Art Notes', languageLabel:'語言', mobileStories:'故事', mobileIndex:'風格索引', mobileGallery:'藝廊展覽', mobileNotes:'藝術筆記',
    heroVertical:'風格無國界', heroVerticalSub:'Style has no passport', heroKicker:'Issue No. 05', heroKickerSub:'The Art of Getting Dressed', heroTitle1:'穿著，', heroTitle2:'是一種觀看。', heroIntro:'一份以時尚為主、以藝術為靈感的國際風格誌。從首爾到巴黎、拉各斯到台北，觀察我們如何穿衣，也如何看世界。', heroCta:'Read<br>the issue', heroCredit:'Cover story / Across the frame', heroSide:'GLOBAL STYLE ATLAS', heroAlt:'身穿雕塑感黑色外套的人走過現代美術館',
    editorLabel:"Editor's letter", editorKicker:'This is not a trend report.', editorTitle1:'我們談的不是「流行」，', editorTitle2:'而是風格為何有生命。', editorBody:'一件外套可以來自首爾的剪裁語彙，一個色彩可能源於拉各斯的街景，一幅畫則讓我們重新理解身體與空間的關係。', editorLink:'閱讀本期索引', indexKicker:'Style Index / 01—03', indexTitle:'本期風格索引', indexNote:'不是複製一種風格。<br>是找到自己的觀看方式。', look1Title:'Material Memory', look1Desc:'材質也有自己的地理。', look2Title:'Colour as Attitude', look2Desc:'一個色彩，可以改變整個姿態。', lookAlt:'布料、銀飾、皮鞋與繪畫色塊組成的時尚靜物', paintingAlt:'靠在灰泥牆面的抽象畫布', indexSide:'Seoul / Paris / Lagos<br>Taipei / Everywhere',
    galleryKicker:'Gallery / Curatorial Column', galleryTitle:'藝廊展覽', galleryNote:'把服裝放進展覽空間。<br>讓觀看成為一種編輯。', filterAll:'All', filterPainting:'Painting', filterFashion:'Fashion', filterSpace:'Space', exhibit1Title:'White Noise, Soft Edges', exhibit1Desc:'一場關於白色、留白與身體輪廓的群展。', exhibit1Detail:'策展從白色開始：不是空白，而是所有色彩尚未被命名以前的狀態。展覽以布料、畫布與身體之間的距離，重新提問「極簡」可以有多麼有感。', exhibit2Title:'The Garment as Object', exhibit2Desc:'當衣服不再只是被穿著，而成為空間中的物件。', exhibit2Detail:'本單元將剪裁視為雕塑，把袖子、摺線與重量放到展覽動線中觀察。衣服不只服務於身體，也改變身體所在的房間。', exhibit3Title:'A Room for Looking', exhibit3Desc:'兩座城市之間，一個留給慢觀看的房間。', exhibit3Detail:'一個虛構的首爾—巴黎房間，收集光線、灰塵、銀色金屬與未完成的草圖。請在這裡慢一點，先看見空間，再看見風格。', modalKicker:'Curatorial column', modalMeta:'ATLAS / STYLE · EXHIBITION FILE', modalClose:'關閉',
    quote1:'好的穿搭，', quote2:'讓你看見自己以外的世界。', quoteCredit:'— A note on clothes, colour & looking', notesKicker:'Notes / Around the world', notesTitle:'編輯筆記', notesLink:'訂閱每月信件', note1:'當韓系極簡遇到北非色彩：一件外套的兩種觀看。', note2:'為什麼畫家的工作室，總是比秀場更懂得穿衣？', note3:'灰色不是中立：一份關於低彩度與性格的觀察。', newsletterKicker:'The monthly atlas', newsletterTitle1:'留一點位置，', newsletterTitle2:'給下一個靈感。', emailLabel:'你的 email', emailPlaceholder:'hello@example.com', subscribe:'加入信件', newsletterSmall:'每月一封。關於衣服、藝術、城市與值得慢慢看的事。', footerTag:'衣服、藝術與城市觀看的國際編輯誌。', footerAbout:'About ↗', footerMade:'Made with a little curiosity.', toast:'這是樣式預覽，訂閱功能尚未連接。'
  },
  en: {
    navStories:'Stories', navIndex:'Style Index', navGallery:'Gallery', navNotes:'Art Notes', languageLabel:'Language', mobileStories:'Stories', mobileIndex:'Style Index', mobileGallery:'Gallery', mobileNotes:'Art Notes', heroVertical:'Style has no passport', heroVerticalSub:'A global visual culture journal', heroKicker:'Issue No. 05', heroKickerSub:'The Art of Getting Dressed', heroTitle1:'Getting dressed,', heroTitle2:'is a way of looking.', heroIntro:'An international style journal led by fashion and inspired by art. From Seoul to Paris, Lagos to Taipei, we look at how we dress—and how we see the world.', heroCta:'Read<br>the issue', heroCredit:'Cover story / Across the frame', heroSide:'GLOBAL STYLE ATLAS', heroAlt:'A person in a sculptural black coat walking through a modern museum', editorLabel:"Editor's letter", editorKicker:'This is not a trend report.', editorTitle1:'We are not talking about trends,', editorTitle2:'but why style feels alive.', editorBody:'A coat can carry the language of Seoul tailoring, a colour can come from a Lagos street, and a painting can change how we understand the body in space.', editorLink:'Read the index', indexKicker:'Style Index / 01—03', indexTitle:'This issue’s index', indexNote:'Do not copy a style.<br>Find your way of looking.', look1Title:'Material Memory', look1Desc:'Materials have their own geography.', look2Title:'Colour as Attitude', look2Desc:'One colour can change a whole posture.', lookAlt:'A fashion still life of fabric, silver jewellery, leather shoes and painted colour fields', paintingAlt:'An abstract canvas leaning against a plaster wall', indexSide:'Seoul / Paris / Lagos<br>Taipei / Everywhere', galleryKicker:'Gallery / Curatorial Column', galleryTitle:'Gallery Exhibitions', galleryNote:'Put the garment in the exhibition space.<br>Let looking become an edit.', filterAll:'All', filterPainting:'Painting', filterFashion:'Fashion', filterSpace:'Space', exhibit1Title:'White Noise, Soft Edges', exhibit1Desc:'A group exhibition about white, negative space and the body’s outline.', exhibit1Detail:'The curatorial story begins with white—not emptiness, but the moment before every colour is named. Fabric, canvas and the distance between bodies ask how much feeling minimalism can hold.', exhibit2Title:'The Garment as Object', exhibit2Desc:'When clothing is no longer only worn, but becomes an object in space.', exhibit2Detail:'This chapter treats tailoring as sculpture. Sleeves, folds and weight enter the exhibition route. A garment does not only serve the body; it changes the room around it.', exhibit3Title:'A Room for Looking', exhibit3Desc:'Between two cities, a room reserved for slow looking.', exhibit3Detail:'A fictional Seoul–Paris room gathers light, dust, silver metal and unfinished sketches. Stay a little longer: see the space before you see the style.', modalKicker:'Curatorial column', modalMeta:'ATLAS / STYLE · EXHIBITION FILE', modalClose:'Close', quote1:'Good style,', quote2:'lets you see beyond yourself.', quoteCredit:'— A note on clothes, colour & looking', notesKicker:'Notes / Around the world', notesTitle:'Editor’s notes', notesLink:'Join the monthly letter', note1:'When Korean minimalism meets North African colour: two ways to see one coat.', note2:'Why does an artist’s studio understand dressing better than a runway?', note3:'Grey is not neutral: a note on low saturation and character.', newsletterKicker:'The monthly atlas', newsletterTitle1:'Leave a little room,', newsletterTitle2:'for the next idea.', emailLabel:'Your email', emailPlaceholder:'hello@example.com', subscribe:'Join the letter', newsletterSmall:'One letter each month about clothes, art, cities and things worth looking at slowly.', footerTag:'An international journal of clothes, art and city looking.', footerAbout:'About ↗', footerMade:'Made with a little curiosity.', toast:'This is a visual preview; the newsletter is not connected yet.'
  },
  ko: {
    navStories:'Stories', navIndex:'Style Index', navGallery:'Gallery', navNotes:'Art Notes', languageLabel:'언어', mobileStories:'이야기', mobileIndex:'스타일 인덱스', mobileGallery:'전시 갤러리', mobileNotes:'아트 노트', heroVertical:'스타일에는 국경이 없다', heroVerticalSub:'A global visual culture journal', heroKicker:'Issue No. 05', heroKickerSub:'The Art of Getting Dressed', heroTitle1:'옷을 입는다는 것,', heroTitle2:'바라보는 방식입니다.', heroIntro:'패션을 중심으로 예술에서 영감을 얻는 국제 스타일 저널. 서울에서 파리, 라고스에서 타이베이까지 우리가 입는 방식과 세계를 보는 방식을 관찰합니다.', heroCta:'Read<br>the issue', heroCredit:'Cover story / Across the frame', heroSide:'GLOBAL STYLE ATLAS', heroAlt:'조형적인 검은 코트를 입은 사람이 현대 미술관을 걷는 장면', editorLabel:'편집자의 편지', editorKicker:'This is not a trend report.', editorTitle1:'우리가 말하는 것은 유행이 아니라,', editorTitle2:'스타일이 살아 있는 이유입니다.', editorBody:'한 벌의 코트에는 서울의 테일러링이, 한 가지 색에는 라고스의 거리가, 한 점의 그림에는 몸과 공간을 새롭게 보는 방식이 담길 수 있습니다.', editorLink:'인덱스 읽기', indexKicker:'Style Index / 01—03', indexTitle:'이번 호 스타일 인덱스', indexNote:'스타일을 복사하지 마세요.<br>나만의 시선을 찾아보세요.', look1Title:'Material Memory', look1Desc:'소재에도 고유한 지리가 있습니다.', look2Title:'Colour as Attitude', look2Desc:'하나의 색이 전체의 태도를 바꿉니다.', lookAlt:'패브릭, 실버 주얼리, 가죽 슈즈와 회화 색면으로 구성된 패션 정물', paintingAlt:'회벽에 기대어 있는 추상 캔버스', indexSide:'Seoul / Paris / Lagos<br>Taipei / Everywhere', galleryKicker:'Gallery / Curatorial Column', galleryTitle:'갤러리 전시', galleryNote:'옷을 전시 공간 안에 놓습니다.<br>보는 행위 자체를 편집합니다.', filterAll:'All', filterPainting:'Painting', filterFashion:'Fashion', filterSpace:'Space', exhibit1Title:'White Noise, Soft Edges', exhibit1Desc:'화이트, 여백과 신체의 윤곽에 대한 그룹전.', exhibit1Detail:'기획은 흰색에서 시작합니다. 흰색은 비어 있음이 아니라 모든 색이 이름 붙기 전의 상태입니다. 패브릭과 캔버스, 몸 사이의 거리를 통해 미니멀리즘의 감정을 바라봅니다.', exhibit2Title:'The Garment as Object', exhibit2Desc:'옷이 단순히 입는 것이 아니라 공간 속 오브제가 될 때.', exhibit2Detail:'재단을 조각처럼 바라봅니다. 소매와 주름, 무게가 전시 동선 안으로 들어옵니다. 옷은 몸을 위한 것일 뿐 아니라 몸이 있는 방도 바꿉니다.', exhibit3Title:'A Room for Looking', exhibit3Desc:'두 도시 사이, 천천히 바라보기 위한 방.', exhibit3Detail:'서울과 파리 사이의 가상 공간에 빛, 먼지, 은빛 금속과 미완성 스케치를 모았습니다. 잠시 더 머물며 스타일보다 먼저 공간을 바라보세요.', modalKicker:'Curatorial column', modalMeta:'ATLAS / STYLE · EXHIBITION FILE', modalClose:'닫기', quote1:'좋은 스타일은,', quote2:'나 자신 너머의 세계를 보게 합니다.', quoteCredit:'— A note on clothes, colour & looking', notesKicker:'Notes / Around the world', notesTitle:'에디터 노트', notesLink:'월간 레터 구독', note1:'한국적 미니멀리즘과 북아프리카의 색: 한 벌의 코트를 보는 두 가지 방식.', note2:'왜 화가의 스튜디오는 런웨이보다 옷 입는 법을 잘 알고 있을까?', note3:'회색은 중립적이지 않다: 낮은 채도와 성격에 대한 노트.', newsletterKicker:'The monthly atlas', newsletterTitle1:'조금의 여백을 남겨,', newsletterTitle2:'다음 영감을 위해.', emailLabel:'이메일', emailPlaceholder:'hello@example.com', subscribe:'레터 구독', newsletterSmall:'옷, 예술, 도시와 천천히 바라볼 가치가 있는 것들에 대한 월간 레터.', footerTag:'옷과 예술, 도시를 바라보는 국제 편집 저널.', footerAbout:'About ↗', footerMade:'Made with a little curiosity.', toast:'비주얼 프리뷰입니다. 뉴스레터 기능은 아직 연결되지 않았습니다.'
  }
};

function applyLanguage(locale) {
  const dictionary = translations[locale] || translations['zh-Hant'];
  document.documentElement.lang = locale;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key] !== undefined) element.innerHTML = dictionary[key];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (dictionary[key] !== undefined) element.alt = dictionary[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key] !== undefined) element.placeholder = dictionary[key];
  });
  document.title = locale === 'zh-Hant' ? 'ATLAS / STYLE — 國際風格誌' : locale === 'ko' ? 'ATLAS / STYLE — 국제 스타일 저널' : 'ATLAS / STYLE — International Style Journal';
  document.querySelector('.modal-close')?.setAttribute('aria-label', dictionary.modalClose);
  localStorage.setItem('atlas-style-locale', locale);
  return dictionary;
}

let currentLocale = localStorage.getItem('atlas-style-locale') || 'zh-Hant';
if (languageSelect) { languageSelect.value = currentLocale; languageSelect.addEventListener('change', (event) => { currentLocale = event.target.value; applyLanguage(currentLocale); }); }
applyLanguage(currentLocale);

menuButton?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  mobileNav.setAttribute('aria-hidden', String(!open));
});
document.querySelectorAll('.mobile-nav a, .main-nav a').forEach((link) => link.addEventListener('click', () => { mobileNav?.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false'); mobileNav?.setAttribute('aria-hidden', 'true'); }));

document.querySelectorAll('.filter-button').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.filter-button').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  document.querySelectorAll('.exhibition-card').forEach((card) => card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.type !== filter));
}));

document.querySelectorAll('.exhibition-card').forEach((card) => card.addEventListener('click', () => {
  const dictionary = translations[currentLocale] || translations['zh-Hant'];
  modalTitle.textContent = dictionary[card.dataset.titleKey];
  modalDescription.textContent = dictionary[card.dataset.descriptionKey];
  modalDetail.textContent = dictionary[card.dataset.detailKey];
  if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', '');
}));
document.querySelector('.modal-close')?.addEventListener('click', () => modal.close());
modal?.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });

document.querySelector('.signup-form')?.addEventListener('submit', (event) => { event.preventDefault(); const dictionary = translations[currentLocale] || translations['zh-Hant']; toast.textContent = dictionary.toast; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2800); });
