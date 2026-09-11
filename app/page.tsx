const audiences = [
  ['01', 'Designers', 'Підбір рішень по плануванню та дизайн-проєкту, специфікації, вузли й комплектація.'],
  ['02', 'Architects', 'Технічна інтеграція опалення, сантехніки та інженерії без конфлікту з архітектурою.'],
  ['03', 'Builders', 'Комплектація, координація суміжних систем, технічний супровід і сервіс на обʼєкті.'],
  ['04', 'Wholesale partners', 'Професійна робота з магазинами та партнерами по брендах, продуктах і проєктних запитах.'],
]

const directions = [
  {
    id: 'heating',
    no: '01',
    title: 'Heating',
    subtitle: 'Design heating',
    text: 'Дизайнерські радіатори, внутрішньопідлогові конвектори, електричні рушникосушки та арматура для інтерʼєрних проєктів.',
  },
  {
    id: 'isan',
    no: '02',
    title: 'ISAN',
    subtitle: 'Special direction',
    text: 'Окремий спеціалізований напрям THE ART.PRO для панорамного скління, floor convectors та дизайнерського опалення ISAN.',
    isan: true,
  },
  {
    id: 'santeh',
    no: '03',
    title: 'Santeh & Decor',
    subtitle: 'Interior selection',
    text: 'Преміальна сантехніка, змішувачі, меблі для ванних, дзеркала, аксесуари та декоративні предмети для сучасних інтерʼєрів.',
  },
  {
    id: 'engineering',
    no: '04',
    title: 'Engineering',
    subtitle: 'Systems & installation',
    text: 'Опалення, вода, каналізація, вентиляція, автоматика, smart-рішення, комплектація та монтажний супровід.',
  },
]

const brands = [
  'ISAN', 'IRSAP', 'Antrax IT', 'TERMA', 'GRAZIANO', 'WELAN', 'BREM', 'Cinier',
  'Livingstone', 'Scirocco', 'Cordivari', 'TUBES', 'CEA', 'S.R.', 'Vario Term',
]

const services = [
  {
    name: 'RE:VECT',
    tag: 'SERVICE',
    text: 'Оновлення, модернізація та сервіс внутрішньопідлогових конвекторів: чистка, вентилятори, автоматика, решітки та re:panorama.',
  },
  {
    name: 'FIG.system',
    tag: 'ENGINEERING',
    text: 'Системна інженерія для квартир, будинків і комерційних просторів: від технічної логіки до комплектації та реалізації.',
  },
  {
    name: 'FIG.smart',
    tag: 'SMART / RE:SMART',
    text: 'Автоматизація інженерних систем, smart home та керування кліматом, опаленням і суміжними системами.',
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
          <a href="#heating">Heating</a>
          <a className="isanNav" href="/isan">ISAN</a>
          <a href="#santeh">Santeh & Decor</a>
          <a href="#engineering">Engineering</a>
          <a href="#brands">Brands</a>
          <a href="#services">Services</a>
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
          <p className="lead">THE ART.PRO — B2B-платформа дизайнерських, інженерних та інтерʼєрних рішень для дизайнерів, архітекторів, будівельних компаній та професійних партнерів.</p>
          <div className="heroDirections" aria-label="Основні напрями">
            <a href="#heating">Heating</a>
            <a className="isanPill" href="/isan">ISAN</a>
            <a href="#santeh">Santeh & Decor</a>
            <a href="#engineering">Engineering</a>
          </div>
          <div className="heroActions">
            <a className="button buttonBlue" href="#project-form">Надіслати планування</a>
            <a className="button buttonGhost" href="#platform">Як ми працюємо</a>
          </div>
        </div>
        <div className="heroIndex"><span>B2B</span><small>Brands · Services · Projects</small></div>
      </section>

      <section className="platform section" id="platform">
        <div className="sectionLabel"><span>01</span><p>PLATFORM</p></div>
        <div className="platformGrid">
          <div>
            <p className="kicker">WHO WE ARE</p>
            <h2>Не магазин.<br />Професійна<br /><span>B2B-платформа.</span></h2>
          </div>
          <div className="platformCopy">
            <p className="largeCopy">Ми зводимо в одному проєкті дизайн, продукт і технічну реалізацію.</p>
            <p>Працюємо з рішеннями, які можемо професійно підібрати, технічно підтримати та інтегрувати в реальний обʼєкт. Починаємо з планування, а не з випадкового списку товарів.</p>
            <div className="ruleBlock"><span>RULE 01</span><strong>Нема планування — нема рахування.</strong></div>
          </div>
        </div>
      </section>

      <section className="audience section">
        <div className="sectionHeader">
          <div><p className="kicker">02 / B2B FIRST</p><h2>Для професійного<br />ринку.</h2></div>
          <p>Пріоритет — ті, хто формує, проєктує, будує та комплектує простір.</p>
        </div>
        <div className="audienceGrid">
          {audiences.map(([no, title, text]) => (
            <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="directions section">
        <div className="sectionHeader wide">
          <div><p className="kicker">03 / CORE DIRECTIONS</p><h2>Чотири напрями.<br /><span>Одна платформа.</span></h2></div>
          <p>Архітектура THE ART.PRO: Heating + ISAN + Santeh & Decor + Engineering.</p>
        </div>
        <div className="directionGrid">
          {directions.map((item) => (
            <article className={`directionCard ${item.isan ? 'directionIsan' : ''}`} id={item.id} key={item.id}>
              <div className="cardTop"><span>{item.no}</span><span>{item.subtitle}</span></div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.isan ? <a href="/isan">Відкрити ISAN landing <b>↗</b></a> : <span className="cardLink">Розвиваємо напрям <b>→</b></span>}
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
        <div className="isanFeatureCopy">
          <p className="kicker isanKicker">04 / ISAN SPECIAL DIRECTION</p>
          <h2>ISAN — окремий<br />продуктовий landing<br />всередині THE ART.PRO.</h2>
          <p>Панорамне скління, внутрішньопідлогові конвектори, Modular grille, правильна привʼязка до скла, технічний підбір та рішення для дизайнерів.</p>
          <a className="textLink isanLink" href="/isan">Перейти до ISAN <span>↗</span></a>
        </div>
      </section>

      <section className="brands section" id="brands">
        <div className="sectionHeader">
          <div><p className="kicker">05 / BRANDS</p><h2>Бренди, з якими<br />ми реально працюємо.</h2></div>
          <p>На старті — тільки затверджений портфель. Без випадкових логотипів «для кількості».</p>
        </div>
        <div className="brandGrid">
          {brands.map((brand, i) => <div className={brand === 'ISAN' ? 'brandIsan' : ''} key={brand}><span>{String(i + 1).padStart(2, '0')}</span><strong>{brand}</strong></div>)}
        </div>
      </section>

      <section className="services section" id="services">
        <div className="sectionHeader wide">
          <div><p className="kicker">06 / OUR SERVICES</p><h2>Власні системи<br />та сервіси.</h2></div>
          <p>Тут показуємо тільки те, що є нашим сервісом, компетенцією або системним напрямом.</p>
        </div>
        <div className="serviceGrid">
          {services.map((service, i) => (
            <article key={service.name}>
              <div><span>0{i + 1}</span><small>{service.tag}</small></div>
              <h3>{service.name}</h3>
              <p>{service.text}</p>
              <span className="serviceArrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="santehFeature section">
        <div>
          <p className="kicker">07 / SANTEH & DECOR</p>
          <h2>Не тільки інженерія.<br /><span>Предмети, які формують інтерʼєр.</span></h2>
        </div>
        <div>
          <p className="largeCopy">Сантехнічні та декоративні дизайн-рішення стають окремою частиною платформи.</p>
          <p>Змішувачі, душові системи, ванни, умивальники, меблі, дзеркала, аксесуари та майбутній преміальний портфель разом із профільними партнерами.</p>
          <div className="santehTags"><span>Bathroom</span><span>Furniture</span><span>Mirrors</span><span>Accessories</span><span>Decor</span></div>
        </div>
      </section>

      <section className="projectNote section">
        <p className="kicker">08 / PROJECT LOGIC</p>
        <h2>Plan → Selection → Brands → Engineering → Supply → Service</h2>
        <p>Саме так сайт має читатися: спочатку професійна задача, потім напрям і бренд, далі наша технічна та сервісна участь.</p>
      </section>

      <section className="startProject section" id="project-form">
        <div className="startTitle">
          <p className="kicker kickerDark">09 / START A PROJECT</p>
          <h2>Є планування?<br /><span>Починаємо.</span></h2>
          <p>Форма стане єдиною точкою входу для дизайнерів, архітекторів, будівельників та B2B-партнерів.</p>
        </div>
        <form className="projectForm">
          <label><span>Імʼя / компанія</span><input type="text" placeholder="Як до вас звертатися" /></label>
          <label><span>Телефон / Telegram</span><input type="text" placeholder="+380" /></label>
          <label><span>Хто ви</span><select defaultValue=""><option value="" disabled>Оберіть</option><option>Дизайнер</option><option>Архітектор</option><option>Будівельна компанія</option><option>Оптовий партнер / магазин</option></select></label>
          <label><span>Напрям</span><select defaultValue=""><option value="" disabled>Оберіть</option><option>Heating</option><option>ISAN</option><option>Santeh & Decor</option><option>Engineering</option><option>RE:VECT / FIG</option></select></label>
          <label className="fullField"><span>Коротко про задачу</span><textarea placeholder="Обʼєкт, місто, стадія, що потрібно підібрати або реалізувати..." /></label>
          <button type="button">Надіслати проєкт <span>↗</span></button>
        </form>
      </section>

      <footer className="footer">
        <div className="footerBrand"><Logo width={260} /><p>B2B platform for design, engineering & interior solutions.</p></div>
        <div className="footerDirections"><span>Heating</span><a className="isanFooter" href="/isan">ISAN</a><span>Santeh & Decor</span><span>Engineering</span></div>
        <div className="footerBottom"><span>© 2026 THE ART.PRO · KYIV</span><a href="/studio">CMS / STUDIO</a><a href="#top">UP ↑</a></div>
      </footer>
    </main>
  )
}
