const directions = [
  ['01', 'Design Radiators', 'Дизайнерські радіатори як частина архітектури інтерʼєру.'],
  ['02', 'Floor Convectors', 'Внутрішньопідлогові конвектори ISAN для панорамного скління.'],
  ['03', 'Towel Warmers', 'Електричні рушникосушки з прихованим підключенням.'],
  ['04', 'Engineering', 'Опалення, вода, каналізація, вентиляція, автоматика та монтаж.'],
]

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="THE ART.PRO">
          <span className="brandStack"><span>THE</span><span>ART</span></span>
          <span className="brandLine" />
          <span className="brandPro">PRO</span>
        </a>
        <nav className="nav">
          <a href="#directions">Напрями</a>
          <a href="#designers">Дизайнерам</a>
          <a href="#projects">Проєкти</a>
          <a href="#engineering">Engineering</a>
        </nav>
        <a className="navCta" href="#project-form">Надіслати планування</a>
      </header>

      <section className="hero" id="top">
        <div className="heroVisual" />
        <div className="heroShade" />
        <div className="heroCopy">
          <p className="eyebrow">KYIV · UKRAINE · EUROPEAN BRANDS</p>
          <h1>Інженерія,<br/>яку не хочеться<br/>ховати.</h1>
          <p className="lead">Опалення, внутрішньопідлогові конвектори, сантехніка, вентиляція та інженерний супровід для дизайнерів, архітекторів і приватних проєктів.</p>
          <div className="heroActions">
            <a className="button light" href="#project-form">Надіслати планування</a>
            <a className="button ghost" href="#projects">Подивитися проєкти</a>
          </div>
        </div>
      </section>

      <section className="section intro">
        <p className="kicker">01 / THE ART</p>
        <div className="twoCol">
          <h2>Не магазин.<br/>Проєктний партнер.</h2>
          <div className="copy"><p>Ми підбираємо рішення по плануванню, теплових навантаженнях, вузлах підключення та реальних умовах обʼєкта.</p><p>Європейські бренди, прямий контакт з виробництвом і технічний супровід від першої ідеї до монтажу.</p></div>
        </div>
      </section>

      <section className="section" id="directions">
        <p className="kicker">02 / НАПРЯМИ</p>
        <h2 className="sectionTitle">Все, що формує<br/>інженерну частину інтерʼєру.</h2>
        <div className="cards">
          {directions.map(([no, title, text], i) => <article className={`card ${i===1?'featured':''}`} key={title}><span>{no}</span><h3>{title}</h3><p>{text}</p><a href="#">Дивитися напрям →</a></article>)}
        </div>
      </section>

      <section className="section isan">
        <div className="isanVisual"><div className="grille"/><strong>ISAN</strong></div>
        <div><p className="kicker">03 / ISAN</p><h2>Панорамне вікно.<br/>Без компромісів.</h2><p className="copy">Конвектор має працювати технічно правильно і при цьому зникати в архітектурі. Базовий підхід: решітка Modular, монтаж у рівень з підлогою, правильна привʼязка до скла та довжина по геометрії вікна.</p></div>
      </section>

      <section className="section" id="designers">
        <p className="kicker">04 / ДИЗАЙНЕРАМ ТА АРХІТЕКТОРАМ</p>
        <div className="twoCol"><h2>Ви даєте план.<br/>Ми закриваємо технічну частину.</h2><div className="serviceList">{['Підбір обладнання по плануванню','Технічні консультації та вузли','DWG / BIM / специфікації','Кошторис та комплектація','Монтаж і авторський супровід'].map((x,i)=><div key={x}><span>0{i+1}</span><p>{x}</p></div>)}</div></div>
      </section>

      <section className="section" id="projects">
        <p className="kicker">05 / ПРОЄКТИ</p><h2 className="sectionTitle">Рішення в реальних інтерʼєрах.</h2>
        <div className="projectGrid"><article className="project big"><span>KYIV · PRIVATE HOUSE</span><h3>Concrete House / ISAN Floor Convectors</h3></article><article className="project"><span>KYIV · APARTMENT</span><h3>Panoramic View / Hidden Engineering</h3></article><article className="project"><span>UKRAINE · INTERIOR</span><h3>Heating as Architecture</h3></article></div>
      </section>

      <section className="section" id="engineering"><p className="kicker">06 / ENGINEERING</p><div className="twoCol"><h2>Одна система.<br/>Один відповідальний.</h2><div className="serviceList">{['Опалення','Водопостачання','Каналізація','Вентиляція','Автоматика','Монтаж / Service'].map((x,i)=><div key={x}><p>{x}</p><span>0{i+1}</span></div>)}</div></div></section>

      <section className="section formSection" id="project-form"><div><p className="kicker dark">07 / START PROJECT</p><h2>Нема планування —<br/>нема рахування.</h2><p>Надішліть план обʼєкта. Ми повернемось з технічними питаннями та структурою рішення.</p></div><form className="form"><input placeholder="Імʼя"/><input placeholder="Телефон / Telegram"/><select defaultValue=""><option value="" disabled>Тип обʼєкта</option><option>Квартира</option><option>Будинок</option><option>Комерційний обʼєкт</option></select><select defaultValue=""><option value="" disabled>Що потрібно</option><option>Конвектори / радіатори</option><option>Комплексна інженерія</option><option>Підбір для дизайн-проєкту</option></select><textarea placeholder="Коротко про задачу"/><button type="button">Надіслати проєкт</button></form></section>

      <footer className="footer"><div className="brand"><span className="brandStack"><span>THE</span><span>ART</span></span><span className="brandLine"/><span className="brandPro">PRO</span></div><p>© 2026 THE ART.PRO · KYIV</p></footer>
    </main>
  )
}
