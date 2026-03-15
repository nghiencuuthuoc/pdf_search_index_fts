const pptxgen = require('pptxgenjs');
const { imageSizingContain, imageSizingCrop, warnIfSlideHasOverlaps, warnIfSlideElementsOutOfBounds } = require('/home/oai/skills/slides/pptxgenjs_helpers');

const FOOTER = '© 2009-2026 • Pharma R&D Platforms • PharmApp • Discover • Design • Develop • Validate • Deliver | www.nghiencuuthuoc.com | Zalo: +84888999311 | www.pharmapp.dev';
const ASSET = '/mnt/data/pharmapp_guides/assets';

function addBase(slide, pptx, title) {
  slide.background = { color: 'F8F2E8' };
  slide.addText(title, { x: 0.55, y: 0.28, w: 8.8, h: 0.38, fontFace: 'Arial', fontSize: 24, bold: true, color: '174349', margin: 0 });
  slide.addShape(pptx.ShapeType.line, { x: 0.55, y: 0.78, w: 12.2, h: 0, line: { color: 'D6C2A7', pt: 1 } });
  slide.addText(FOOTER, { x: 0.45, y: 7.1, w: 12.4, h: 0.2, fontFace: 'Arial', fontSize: 8.3, color: '6C6256', align: 'center', margin: 0 });
}

function addDeck(lang) {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'OpenAI';
  pptx.company = 'PharmApp';
  pptx.subject = 'End-user guide';
  pptx.title = lang === 'en' ? 'PharmApp PDF Search Index v3 - End-User Guide' : 'PharmApp PDF Search Index v3 - Hướng dẫn người dùng cuối';
  pptx.lang = lang;
  pptx.theme = {
    headFontFace: 'Arial', bodyFontFace: 'Arial', lang: lang,
  };

  const t = lang === 'en' ? {
    deck: 'PharmApp PDF Search Index v3',
    subtitle: 'End-User Guide',
    s2: 'Getting started',
    s3: 'Search and open results',
    s4: 'Use the PDF viewer',
    s5: 'Translation, profiles, and explorer',
    bullets2: [
      'Launch pdf_search_index_v3.exe.',
      'Add a folder, PDF, or index.json in Dynamic path manager.',
      'A new dataset tab is created for each unique folder.',
      'If available, the app may prepare index_fts.db automatically for faster search.'
    ],
    bullets3: [
      'Enter a keyword in the dataset search box or Shared keyword.',
      'Review file name, page, type, snippet, and path in the result grid.',
      'Select a result and click Open selected PDF to jump to the matched page.',
      'Use Refresh after dataset files are changed.'
    ],
    bullets4: [
      'Modes: Single Page, Facing, Book View, and Continuous.',
      'Back / Next and Go help you navigate quickly.',
      'Zoom, rotation, presentation, and fullscreen support review sessions.',
      'Use Presentation for clean page display during teaching or meetings.'
    ],
    bullets5: [
      'Translate terms and search translated PDF names.',
      'Save and restore profiles for different users or workflows.',
      'Browse Files and Folders in the dataset explorer.',
      'Check Log and Details to confirm search mode and status.'
    ],
    hero: 'Search large PDF libraries, open the right file fast, and review the exact page in one workspace.'
  } : {
    deck: 'PharmApp PDF Search Index v3',
    subtitle: 'Hướng dẫn người dùng cuối',
    s2: 'Bắt đầu nhanh',
    s3: 'Tìm kiếm và mở kết quả',
    s4: 'Sử dụng trình xem PDF',
    s5: 'Dịch, profile và explorer',
    bullets2: [
      'Mở pdf_search_index_v3.exe.',
      'Thêm thư mục, PDF hoặc index.json trong Dynamic path manager.',
      'Mỗi thư mục duy nhất sẽ tạo một tab dataset mới.',
      'Nếu có, ứng dụng có thể tự chuẩn bị index_fts.db để tìm nhanh hơn.'
    ],
    bullets3: [
      'Nhập từ khóa trong ô tìm kiếm của dataset hoặc Shared keyword.',
      'Xem tên file, trang, loại, snippet và đường dẫn trong bảng kết quả.',
      'Chọn kết quả và bấm Open selected PDF để mở đúng trang khớp.',
      'Dùng Refresh sau khi dữ liệu trong dataset thay đổi.'
    ],
    bullets4: [
      'Chế độ xem: Một trang, Hai trang, Dạng sách và Liên tục.',
      'Back / Next và Go giúp điều hướng nhanh.',
      'Zoom, xoay, trình chiếu và toàn màn hình hỗ trợ rà soát tài liệu.',
      'Dùng Presentation khi cần trình bày sạch trong đào tạo hoặc họp.'
    ],
    bullets5: [
      'Dịch thuật ngữ và tìm theo tên PDF đã dịch.',
      'Lưu và khôi phục profile cho từng người dùng hoặc từng quy trình.',
      'Duyệt Files và Folders trong explorer của dataset.',
      'Xem Log và Details để biết chế độ tìm kiếm và trạng thái hiện tại.'
    ],
    hero: 'Tìm nhanh trong thư viện PDF lớn, mở đúng file và rà soát đúng trang trong một không gian làm việc.'
  };

  // slide 1
  let slide = pptx.addSlide();
  slide.background = { color: 'F8F2E8' };
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.333, h: 1.2, fill: { color: '174349' }, line: { color: '174349', pt: 0 } });
  slide.addText(t.deck, { x: 0.7, y: 0.38, w: 7.8, h: 0.32, fontFace: 'Arial', fontSize: 24, bold: true, color: 'FFF7E9', margin: 0 });
  slide.addText(t.subtitle, { x: 0.7, y: 0.74, w: 4.2, h: 0.22, fontFace: 'Arial', fontSize: 13, color: 'F2E7D6', margin: 0 });
  slide.addImage({ path: `${ASSET}/full.png`, ...imageSizingCrop(`${ASSET}/full.png`, 0.68, 1.45, 8.1, 4.85) });
  slide.addText(t.hero, { x: 9.15, y: 1.7, w: 3.45, h: 1.3, fontFace: 'Arial', fontSize: 20, bold: true, color: '174349', valign: 'mid', margin: 0.03 });
  slide.addText(lang === 'en' ? 'Core functions' : 'Chức năng chính', { x: 9.15, y: 3.35, w: 2.2, h: 0.25, fontFace: 'Arial', fontSize: 14, bold: true, color: '174349', margin: 0 });
  slide.addText((lang === 'en' ? [
    'Search indexed PDF content', 'Open exact matching pages', 'Review in presentation or fullscreen', 'Translate terms and manage profiles'
  ] : [
    'Tìm trong nội dung PDF đã lập chỉ mục', 'Mở đúng trang khớp', 'Rà soát ở chế độ trình chiếu hoặc toàn màn hình', 'Dịch thuật ngữ và quản lý profile'
  ]).map(s => ({ text: s, options: { bullet: { indent: 10 } } })),
  { x: 9.15, y: 3.7, w: 3.6, h: 1.8, fontFace: 'Arial', fontSize: 15.5, color: '2A2A2A', breakLine: true, margin: 0.03 });
  slide.addText(FOOTER, { x: 0.45, y: 7.1, w: 12.4, h: 0.2, fontFace: 'Arial', fontSize: 8.3, color: '6C6256', align: 'center', margin: 0 });
  warnIfSlideHasOverlaps(slide, pptx); warnIfSlideElementsOutOfBounds(slide, pptx);

  // slide 2
  slide = pptx.addSlide();
  addBase(slide, pptx, t.s2);
  slide.addImage({ path: `${ASSET}/left_search.png`, ...imageSizingCrop(`${ASSET}/left_search.png`, 0.65, 1.15, 5.55, 4.9) });
  slide.addText(t.bullets2.map(s => ({ text: s, options: { bullet: { indent: 12 } } })), { x: 6.6, y: 1.35, w: 5.9, h: 3.4, fontFace: 'Arial', fontSize: 18, color: '2A2A2A', breakLine: true, margin: 0.04 });
  slide.addText(lang === 'en' ? 'Tip: use a folder that already contains index.json for the best first-run experience.' : 'Mẹo: nên dùng thư mục đã có index.json để có trải nghiệm tốt nhất ngay từ lần chạy đầu.', { x: 6.6, y: 5.1, w: 5.8, h: 0.8, fontFace: 'Arial', fontSize: 14.5, color: '6C6256', italic: true, margin: 0.02 });
  warnIfSlideHasOverlaps(slide, pptx); warnIfSlideElementsOutOfBounds(slide, pptx);

  // slide 3
  slide = pptx.addSlide();
  addBase(slide, pptx, t.s3);
  slide.addText(t.bullets3.map(s => ({ text: s, options: { bullet: { indent: 12 } } })), { x: 0.7, y: 1.2, w: 4.4, h: 3.55, fontFace: 'Arial', fontSize: 17.5, color: '2A2A2A', breakLine: true, margin: 0.04 });
  slide.addImage({ path: `${ASSET}/left_search.png`, ...imageSizingCrop(`${ASSET}/left_search.png`, 5.35, 1.15, 7.3, 4.95) });
  warnIfSlideHasOverlaps(slide, pptx); warnIfSlideElementsOutOfBounds(slide, pptx);

  // slide 4
  slide = pptx.addSlide();
  addBase(slide, pptx, t.s4);
  slide.addImage({ path: `${ASSET}/right_viewer.png`, ...imageSizingCrop(`${ASSET}/right_viewer.png`, 0.68, 1.15, 7.2, 4.95) });
  slide.addText(t.bullets4.map(s => ({ text: s, options: { bullet: { indent: 12 } } })), { x: 8.25, y: 1.25, w: 4.3, h: 3.8, fontFace: 'Arial', fontSize: 17, color: '2A2A2A', breakLine: true, margin: 0.04 });
  warnIfSlideHasOverlaps(slide, pptx); warnIfSlideElementsOutOfBounds(slide, pptx);

  // slide 5
  slide = pptx.addSlide();
  addBase(slide, pptx, t.s5);
  slide.addText(t.bullets5.map(s => ({ text: s, options: { bullet: { indent: 12 } } })), { x: 0.75, y: 1.3, w: 4.5, h: 3.55, fontFace: 'Arial', fontSize: 17.5, color: '2A2A2A', breakLine: true, margin: 0.04 });
  slide.addImage({ path: `${ASSET}/bottom_explorer.png`, ...imageSizingCrop(`${ASSET}/bottom_explorer.png`, 5.55, 1.15, 6.9, 4.75) });
  slide.addText(lang === 'en' ? 'Need help? Ask your administrator which dataset folder should be added first.' : 'Cần hỗ trợ? Hãy hỏi quản trị viên xem nên thêm thư mục dataset nào trước.', { x: 0.75, y: 6.05, w: 11.5, h: 0.28, fontFace: 'Arial', fontSize: 13, color: '6C6256', italic: true, margin: 0.02 });
  warnIfSlideHasOverlaps(slide, pptx); warnIfSlideElementsOutOfBounds(slide, pptx);

  const out = `/mnt/data/pharmapp_guides/pharmapp_pdf_search_index_v3_end_user_guide_${lang === 'en' ? 'english' : 'vietnamese'}.pptx`;
  return pptx.writeFile({ fileName: out }).then(()=>out);
}

(async()=>{
  const outEn = await addDeck('en');
  const outVi = await addDeck('vi');
  console.log(outEn);
  console.log(outVi);
})();
