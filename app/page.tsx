const audiences = [
  ['01', 'Designers', 'Підбір рішень по плануванню та дизайн-проєкту, специфікації, вузли й комплектація.'],
  ['02', 'Architects', 'Технічна інтеграція опалення, сантехніки та інженерії без конфлікту з архітектурою.'],
  ['03', 'Builders', 'Комплектація, координація суміжних систем, технічний супровід і сервіс на обʼєкті.'],
  ['04', 'Wholesale partners', 'Професійна робота з магазинами та партнерами по брендах, продуктах і проєктних запитах.'],
]

const directions = [
  {
    id: 'design-heating',
    no: '01',
    title: 'Дизайн Опалення',
    subtitle: 'Design heating',
    text: 'Дизайнерські радіатори, внутрішньопідлогові конвектори, електричні рушникосушки та арматура для інтерʼєрних проєктів.',
  },
  {
    id: 'isan',
    no: '02',
    title: 'ISAN',
    subtitle: 'Special direction',
    text: 'Окремий продуктовий напрям для панорамного скління, floor convectors та дизайнерського опалення ISAN.',
    tone: 'isan',
    href: '/isan',
  },
  {
    id: 'revect',
    no: '03',
    title: 'RE:VECT',
    subtitle: 'Service system',
    text: 'Відновлення, модернізація та переоснащення внутрішньопідлогових конвекторів: clean, fan, control, grille та re:panorama.',
    tone: 'revect',
    href: '/revect',
  },
  {
    id: 'santeh',
    no: '04',
    title: 'Santeh & Decor',
    subtitle: 'Interior selection',
    text: 'Преміальна сантехніка, змішувачі, меблі для ванних, дзеркала, аксесуари та декоративні предмети для сучасних інтерʼєрів.',
  },
  {
    id: 'fig-system',
    no: '05',
    title: 'FIG.system',
    subtitle: 'Engineering system',
    text: 'Системна інженерія: опалення, вода, каналізація, вентиляція, автоматика, комплектація та монтажний супровід.',
  },
]

const brands = [
  'ISAN', 'IRSAP', 'Antrax IT', 'TERMA', 'GRAZIANO', 'WELAN', 'BREM', 'Cinier',
  'Livingstone', 'Scirocco', 'Cordivari', 'TUBES', 'CEA', 'S.R.', 'Vario Term',
]

const services = [
  {
    name: 'RE:VECT',
    tag: 'SERVICE SYSTEM',
    text: 'Оновлення та модернізація існуючих внутрішньопідлогових конвекторів, включно з решітками re:panorama.',
    href: '/revect',
    tone: 'revect',
  },
  {
    name: 'FIG.system',
    tag: 'ENGINEERING',
    text: 'Комплексна інженерія для квартир, будинків і комерційних просторів: від технічної логіки до реалізації.',
    href: '#fig-system',
  },
  {
    name: 'FIG.smart',
    tag: 'SMART / RE:SMART',
    text: 'Автоматизація інженерних систем, smart home та керування кліматом, опаленням і суміжними системами.',
    href: '#fig-system',
  },
]

function Logo({width = 165}: {width?: number}) {
  return <img src="/the-art-pro-logo.svg" alt="the-art.pro" width={width} style={{height: 'auto', display: 'block'}} />
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a href="#top" className="logoLink"><Logo /></a>
        <nav className="nav" aria-label="Головна навігація">
          <a href="#platform">Про нас</a>
          <a href="#b2b">B2B</a>
          <a href="#design-heating">Дизайн Опалення</a>
          <a className="isanNav" href="/isan">ISAN</a>
          <a className="revectNav" href="/revect">RE:VECT</a>
          <a href="#santeh">Santeh & Decor</a>
          <a href="#fig-system">FIG.system</a>
          <a href="#brands">Brands</a>
          <a href="#contacts">Контакти</a>
        </nav>
        <a className="navCta" href="#project-form">Надіслати проєкт <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="heroStage" aria-hidden="true">
          <div className="heroGrid" />
          <div className="heroPanel panelOne" />
          <div className="heroPanel panelTwo" />
          <div className="heroBlue" />
        </div>
        <div className="heroShade" />
        <div className="heroCopy">
          <p className="eyebrow">THE ART.PRO · B2B PLATFORM · KYIV</p>
          <h1>B2B-платформа<br /><span>для сучасних проєктів.</span></h1>
          <p className="lead">Дизайнерські, інженерні та інтерʼєрні рішення для дизайнерів, архітекторів, будівельних компаній та професійних партнерів.</p>
          <div className="heroDirections" aria-label="Основні напрями">
            <a href="#design-heating">Дизайн Опалення</a>
            <a className="isanPill" href="/isan">ISAN</a>
            <a className="revectPill" href="/revect">RE:VECT</a>
            <a href="#santeh">Santeh & Decor</a>
            <a href="#fig-system">FIG.system</a>
          </div>
          <div className="heroActions">
            <a className="button buttonBlue" href="#project-form">Надіслати планування</a>
            <a className="button buttonGhost" href="#platform">Як ми працюємо</a>
          </div>
        </div>
        <div className="heroIndex"><span>B2B</span><small>Brands · Systems · Services</small></div>
      </section>

      <section className="platform section" id="platform">
        <div className="platformGrid">
          <div>
            <p className="kicker">01 / WHO WE ARE</p>
            <h2>Не магазин.<br />Професійна<br /><span>B2B-платформа.</span></h2>
          </div>
          <div className="platformCopy">
            <p className="largeCopy">Ми зводимо в одному проєкті дизайн, продукт і технічну реалізацію.</p>
            <p>Працюємо з рішеннями, які можемо професійно підібрати, технічно підтримати та інтегрувати в реальний обʼєкт. Починаємо з планування, а не з випадкового списку товарів.</p>
            <div className="ruleBlock"><span>RULE 01</span><strong>Нема планування — нема рахування.</strong></div>
          </div>
        </div>
      </section>

      <section className="audience section" id="b2b">
        <div className="sectionHeader">
          <div><p className="kicker">02 / B2B FIRST</p><h2>Для професійного<br />ринку.</h2></div>
          <p>Пріоритет — ті, хто формує, проєктує, будує та комплектує простір.</p>
        </div>
        <div className="audienceGrid">
          {audiences.map(([no, title, text]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="directions section">
        <div className="sectionHeader wide">
          <div><p className="kicker">03 / CORE DIRECTIONS</p><h2>Пʼять напрямів.<br /><span>Одна платформа.</span></h2></div>
          <p>Дизайн Опалення + ISAN + RE:VECT + Santeh & Decor + FIG.system.</p>
        </div>
        <div className="directionGrid">
          {directions.map((item) => (
            <article className={`directionCard ${item.tone === 'isan' ? 'directionIsan' : ''} ${item.tone === 'revect' ? 'directionRevect' : ''}`} id={item.id} key={item.id}>
              <div className="cardTop"><span>{item.no}</span><span>{item.subtitle}</span></div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.href ? <a href={item.href}>Відкрити landing <b>↗</b></a> : <span className="cardLink">Розвиваємо напрям <b>→</b></span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="isanFeature section">
        <div className="isanVisual" aria-hidden="true">
          <div className="glass"><i /><i /><i /></div>
          <div className="floor" />
          <div className="grille">{Array.from({length: 26}).map((_, i) => <i key={i} />)}</div>
          <strong>ISAN</strong>
        </div>
        <div className="featureCopy">
          <p className="kicker isanKicker">04 / ISAN</p>
          <h2>Панорамне скління.<br />Тепло без компромісів.</h2>
          <p>Окремий продуктовий landing про внутрішньопідлогові конвектори, Modular grille, правильну привʼязку до скла та технічний підбір.</p>
          <a className="textLink isanLink" href="/isan">Перейти до ISAN <span>↗</span></a>
        </div>
      </section>

      <section className="revectFeature section">
        <div className="revectVisual" aria-hidden="true">
          <div className="revectOld">OLD</div>
          <div className="revectLine" />
          <div className="revectNew">RE:VECT</div>
          <div className="revectGrille">{Array.from({length: 24}).map((_, i) => <i key={i} />)}</div>
        </div>
        <div className="featureCopy">
          <p className="kicker revectKicker">05 / RE:VECT</p>
          <h2>Не міняти все.<br />Оновити те, що є.</h2>
          <p>Сервісна система для існуючих внутрішньопідлогових конвекторів: очищення, вентилятори, автоматика, решітки, модернізація та re:panorama.</p>
          <a className="textLink revectLink" href="/revect">Перейти до RE:VECT <span>↗</span></a>
        </div>
      </section>

      <section className="brands section" id="brands">
        <div className="sectionHeader">
          <div><p className="kicker">06 / BRANDS</p><h2>Бренди, з якими<br />ми реально працюємо.</h2></div>
          <p>Тільки затверджений портфель. Без випадкових логотипів «для кількості».</p>
        </div>
        <div className="brandGrid">
          {brands.map((brand, i) => <div className={brand === 'ISAN' ? 'brandIsan' : ''} key={brand}><span>{String(i + 1).padStart(2, '0')}</span><strong>{brand}</strong></div>)}
        </div>
      </section>

      <section className="services section" id="services">
        <div className="sectionHeader wide">
          <div><p className="kicker">07 / OUR SYSTEMS</p><h2>Власні системи<br />та сервіси.</h2></div>
          <p>Тільки те, що є нашою компетенцією, системою або сервісним напрямом.</p>
        </div>
        <div className="serviceGrid">
          {services.map((service, i) => (
            <a className={service.tone === 'revect' ? 'serviceCard serviceRevect' : 'serviceCard'} href={service.href} key={service.name}>
              <div><span>0{i + 1}</span><small>{service.tag}</small></div>
              <h3>{service.name}</h3>
              <p>{service.text}</p>
              <span className="serviceArrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="santehFeature section" id="santeh">
        <div>
          <p className="kicker">08 / SANTEH & DECOR</p>
          <h2>Не тільки інженерія.<br /><span>Предмети, які формують інтерʼєр.</span></h2>
        </div>
        <div>
          <p className="largeCopy">Сантехнічні та декоративні дизайн-рішення — окрема частина платформи.</p>
          <p>Змішувачі, душові системи, ванни, умивальники, меблі, дзеркала, аксесуари та майбутній преміальний портфель разом із профільними партнерами.</p>
          <div className="santehTags"><span>Bathroom</span><span>Furniture</span><span>Mirrors</span><span>Accessories</span><span>Decor</span></div>
        </div>
      </section>

      <section className="figFeature section" id="fig-system">
        <div>
          <p className="kicker">09 / FIG.SYSTEM</p>
          <h2>Інженерія як<br />система, а не набір<br />окремих робіт.</h2>
        </div>
        <div className="figList">
          {['Опалення','Водопостачання','Каналізація','Вентиляція','Автоматика','FIG.smart / re:smart'].map((item, i) => <div key={item}><span>0{i+1}</span><strong>{item}</strong><b>↗</b></div>)}
        </div>
      </section>

      <section className="projectNote section">
        <p className="kicker">10 / PROJECT LOGIC</p>
        <h2>Plan → Selection → Brands → System → Supply → Service</h2>
        <p>Спочатку професійна задача, потім напрям і бренд, далі наша технічна та сервісна участь.</p>
      </section>

      <section className="startProject section" id="project-form">
        <div className="startTitle">
          <p className="kicker kickerDark">11 / START A PROJECT</p>
          <h2>Є планування?<br /><span>Починаємо.</span></h2>
          <p>Єдина точка входу для дизайнерів, архітекторів, будівельників та B2B-партнерів.</p>
        </div>
        <form className="projectForm">
          <label><span>Імʼя</span><input type="text" placeholder="Як до вас звертатися" /></label>
          <label><span>Телефон / Telegram</span><input type="text" placeholder="+380" /></label>
          <label><span>Хто ви</span><select defaultValue=""><option value="" disabled>Оберіть</option><option>Дизайнер</option><option>Архітектор</option><option>Будівельна компанія</option><option>Магазин / B2B партнер</option></select></label>
          <label><span>Напрям</span><select defaultValue=""><option value="" disabled>Оберіть</option><option>Дизайн Опалення</option><option>ISAN</option><option>RE:VECT</option><option>Santeh & Decor</option><option>FIG.system</option></select></label>
          <label className="fullField"><span>Коротко про задачу</span><textarea placeholder="Обʼєкт, місто, стадія, що потрібно..." /></label>
          <button type="button">Надіслати проєкт <span>↗</span></button>
        </form>
      </section>

      <footer className="footer" id="contacts">
        <div className="footerMain"><Logo width={205} /><p>B2B platform<br />Kyiv · Ukraine</p></div>
        <div className="footerNav"><a href="#platform">Про нас</a><a href="#b2b">B2B</a><a href="#design-heating">Дизайн Опалення</a><a className="isanNav" href="/isan">ISAN</a><a className="revectNav" href="/revect">RE:VECT</a><a href="#santeh">Santeh & Decor</a><a href="#fig-system">FIG.system</a><a href="#brands">Brands</a><a href="#contacts">Контакти</a></div>
        <div className="footerBottom"><span>© 2026 THE ART.PRO</span><a href="/studio">CMS / STUDIO</a><a href="#top">UP ↑</a></div>
      </footer>
    </main>
  )
}
