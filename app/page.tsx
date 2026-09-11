const directions = [
  { no: '01', title: 'Floor Convectors', text: 'Внутрішньопідлогові конвектори для панорамного скління. Підбір, комплектація та монтаж.', accent: true },
  { no: '02', title: 'Design Radiators', text: 'Дизайнерські радіатори як повноцінний елемент архітектури інтерʼєру.' },
  { no: '03', title: 'Towel Warmers', text: 'Електричні рушникосушки з прихованим підключенням та чистою геометрією.' },
  { no: '04', title: 'Underfloor Heating', text: 'Водяна тепла підлога: проєктування, автоматика, колектори та монтаж.' },
  { no: '05', title: 'Water & Plumbing', text: 'Вузли вводу, водоочистка, розподіл води, сантехнічні рішення.' },
  { no: '06', title: 'Ventilation & Climate', text: 'Вентиляція, клімат і автоматика без конфлікту з дизайном.' },
]

const engineering = ['Опалення', 'Водопостачання', 'Каналізація', 'Вентиляція', 'Автоматика', 'Монтаж / Service']
const designerServices = ['Підбір обладнання по плануванню', 'Технічні консультації та вузли', 'DWG / BIM / специфікації', 'Кошторис та комплектація', 'Монтаж і технічний супровід']
const brands = ['ISAN', 'IRSAP', 'ANTRAX IT', 'TERMA', 'BREM', 'CALEIDO', 'CORDIVARI']

function Logo() {
  return (
    <span className="brandMark" aria-label="THE ART.PRO">
      <span className="brandWords"><span>THE</span><span>ART</span></span>
      <span className="brandRule" />
      <span className="brandPro">PRO</span>
    </span>
  )
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a href="#top"><Logo /></a>
        <nav className="nav" aria-label="Головна навігація">
          <a href="#directions">Напрями</a>
          <a href="#isan">ISAN</a>
          <a href="#designers">Дизайнерам</a>
          <a href="#engineering">Engineering</a>
          <a href="#projects">Проєкти</a>
        </nav>
        <a className="navCta" href="#project-form">Надіслати планування <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="heroStage" aria-hidden="true">
          <div className="windowFrame"><div className="windowGlow" /></div>
          <div className="floorLine" />
          <div className="convector"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
          <div className="heroObject" />
        </div>
        <div className="heroShade" />
        <div className="heroCopy">
          <p className="eyebrow">THE ART.PRO · KYIV · ENGINEERING × INTERIOR</p>
          <h1>Інженерія,<br /><em>яку видно.</em></h1>
          <p className="lead">Опалення, конвектори, радіатори, вода, вентиляція та монтаж — технічно правильно і в логіці вашого інтерʼєру.</p>
          <div className="heroActions">
            <a className="button buttonLight" href="#project-form">Надіслати планування</a>
            <a className="button buttonGhost" href="#directions">Дивитися рішення</a>
          </div>
        </div>
        <div className="heroMeta">
          <div><span>01</span><p>European<br />brands</p></div>
          <div><span>02</span><p>Technical<br />selection</p></div>
          <div><span>03</span><p>Supply &<br />installation</p></div>
        </div>
        <div className="scrollHint">SCROLL <span>↓</span></div>
      </section>

      <section className="manifest section">
        <p className="kicker">01 / THE ART</p>
        <div className="manifestGrid">
          <h2>Не продаємо<br />коробки.<br /><span>Будуємо рішення.</span></h2>
          <div className="manifestCopy">
            <p className="largeCopy">THE ART.PRO — B2B-партнер для дизайнерів, архітекторів, забудовників і приватних замовників у складній інженерії інтерʼєру.</p>
            <p>Починаємо з планування. Перевіряємо технічні умови, підбираємо обладнання, узгоджуємо вузли, комплектуємо і супроводжуємо монтаж.</p>
            <div className="ruleBlock"><span>RULE 01</span><strong>Нема планування — нема рахування.</strong></div>
          </div>
        </div>
      </section>

      <section className="section directions" id="directions">
        <div className="sectionHeader">
          <p className="kicker">02 / НАПРЯМИ</p>
          <h2>Інженерія як<br />частина інтерʼєру.</h2>
          <p className="sectionIntro">Від одного дизайнерського радіатора до комплексної інженерії квартири або будинку.</p>
        </div>
        <div className="directionGrid">
          {directions.map((item) => (
            <article className={`directionCard ${item.accent ? 'directionAccent' : ''}`} key={item.no}>
              <div className="cardTop"><span>{item.no}</span><span>↗</span></div>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="isan section" id="isan">
        <div className="isanVisual" aria-hidden="true">
          <div className="isanWindow"><span /><span /><span /></div>
          <div className="isanFloor" />
          <div className="isanGrille">{Array.from({length: 22}).map((_, i) => <i key={i} />)}</div>
          <div className="isanLabel"><small>FLOOR CONVECTORS</small><strong>ISAN</strong></div>
        </div>
        <div className="isanCopy">
          <p className="kicker">03 / ISAN · CZECH REPUBLIC</p>
          <h2>Панорамне<br />вікно без<br />компромісів.</h2>
          <p>Конвектор повинен гріти скло, не заважати шторам і меблям та візуально зникати в підлозі.</p>
          <ul>
            <li><span>01</span> Решітка Modular, поперечні ламелі</li>
            <li><span>02</span> Монтаж у рівень з чистовою підлогою</li>
            <li><span>03</span> Привʼязка до панорамного скління</li>
            <li><span>04</span> Підбір по тепловому навантаженню</li>
          </ul>
          <a className="textLink" href="#project-form">Підібрати конвектор <span>↗</span></a>
        </div>
      </section>

      <section className="designer section" id="designers">
        <div className="designerHeadline">
          <p className="kicker">04 / FOR DESIGNERS & ARCHITECTS</p>
          <h2>Ви створюєте<br />простір.<br /><span>Ми не даємо<br />інженерії його зіпсувати.</span></h2>
        </div>
        <div className="designerBody">
          <p>Працюємо по плануванню та дизайн-проєкту. Підбираємо рішення так, щоб технічна частина не конфліктувала з архітектурою.</p>
          <div className="serviceList">
            {designerServices.map((item, i) => <div key={item}><span>0{i + 1}</span><p>{item}</p><b>→</b></div>)}
          </div>
        </div>
      </section>

      <section className="engineering section" id="engineering">
        <div className="engineeringIntro">
          <p className="kicker">05 / ENGINEERING</p>
          <h2>Один обʼєкт.<br />Одна логіка.<br />Один відповідальний.</h2>
          <p>Координуємо інженерні системи між собою ще до монтажу — щоб колектори, вентиляція, сантехніка й автоматика не почали сперечатися вже на обʼєкті.</p>
        </div>
        <div className="engineeringList">
          {engineering.map((item, i) => <div key={item}><span>0{i + 1}</span><h3>{item}</h3><b>↗</b></div>)}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="sectionHeader compact">
          <p className="kicker">06 / PROJECTS</p>
          <h2>Рішення, які<br />стають частиною простору.</h2>
          <p className="sectionIntro">Тут будуть реальні кейси з Sanity: задача → технічне рішення → обладнання → результат.</p>
        </div>
        <div className="projectGrid">
          <article className="projectCard projectMain"><div className="projectArt artOne" /><div className="projectInfo"><span>FLOOR CONVECTORS</span><h3>Panoramic heating</h3><p>ISAN · Modular grille</p></div></article>
          <article className="projectCard"><div className="projectArt artTwo" /><div className="projectInfo"><span>DESIGN RADIATORS</span><h3>Heating as object</h3><p>Interior integration</p></div></article>
          <article className="projectCard"><div className="projectArt artThree" /><div className="projectInfo"><span>ENGINEERING</span><h3>Hidden systems</h3><p>Full project coordination</p></div></article>
        </div>
      </section>

      <section className="brandStrip section">
        <p className="kicker">07 / SELECTED EUROPEAN BRANDS</p>
        <div className="brands">{brands.map((brand) => <span key={brand}>{brand}</span>)}</div>
        <p className="brandNote">Працюємо з брендами, які можемо технічно підтримати, а не просто додати в прайс.</p>
      </section>

      <section className="startProject section" id="project-form">
        <div className="startTitle">
          <p className="kicker kickerDark">08 / START A PROJECT</p>
          <h2>Є планування?<br /><span>Починаємо.</span></h2>
          <p>Завантаження PDF / DWG підключимо наступним кроком. Зараз закладаємо правильну структуру заявки.</p>
        </div>
        <form className="projectForm">
          <label><span>Імʼя</span><input type="text" placeholder="Як до вас звертатися" /></label>
          <label><span>Телефон / Telegram</span><input type="text" placeholder="+380" /></label>
          <label><span>Обʼєкт</span><select defaultValue=""><option value="" disabled>Оберіть тип</option><option>Квартира</option><option>Приватний будинок</option><option>Комерційний обʼєкт</option></select></label>
          <label><span>Потрібне рішення</span><select defaultValue=""><option value="" disabled>Оберіть напрям</option><option>Внутрішньопідлогові конвектори</option><option>Радіатори / рушникосушки</option><option>Комплексна інженерія</option><option>Консультація по дизайн-проєкту</option></select></label>
          <label className="fullField"><span>Коротко про задачу</span><textarea placeholder="Що проєктуємо, площа, стадія ремонту, місто..." /></label>
          <button type="button">Надіслати проєкт <span>↗</span></button>
        </form>
      </section>

      <footer className="footer">
        <div className="footerMain"><Logo /><p>Engineering × Heating × Interior<br />Kyiv · Ukraine</p></div>
        <div className="footerNav"><a href="#directions">Напрями</a><a href="#designers">Дизайнерам</a><a href="#engineering">Engineering</a><a href="#project-form">Надіслати планування</a></div>
        <div className="footerBottom"><span>© 2026 THE ART.PRO</span><a href="/studio">CMS / STUDIO</a><a href="#top">UP ↑</a></div>
      </footer>
    </main>
  )
}
