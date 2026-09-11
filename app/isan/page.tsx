import './isan.css'

const isanBenefits = [
  ['01', 'Panoramic glazing', 'Рішення для великих вікон, де опалення має працювати вздовж скла і не ламати композицію інтерʼєру.'],
  ['02', 'Floor integration', 'Корпус конвектора інтегруємо в конструкцію підлоги, а решітку — в чистову геометрію приміщення.'],
  ['03', 'Modular grille', 'Поперечна решітка Modular як базовий візуальний стандарт для наших проєктів ISAN.'],
  ['04', 'Project selection', 'Підбір починається з плану, скління, теплового навантаження, фінішу підлоги та сценарію керування.'],
]

function Logo() {
  return <span className="wordmark" aria-label="the-art.pro"><span>the-art.</span><b>pro</b></span>
}

export default function IsanPage() {
  return (
    <main className="isanLanding">
      <header className="topbar">
        <a href="/" className="logoLink"><Logo /></a>
        <nav className="nav" aria-label="ISAN navigation">
          <a href="#why">Why ISAN</a>
          <a href="#convectors">Floor Convectors</a>
          <a href="#designers">For Designers</a>
          <a href="#technical">Technical</a>
        </nav>
        <a className="navCta isanCta" href="#isan-form">Надіслати планування <span>↗</span></a>
      </header>

      <section className="isanHero" id="top">
        <div className="isanHeroVisual" aria-hidden="true">
          <div className="isanHeroGlass"><i /><i /><i /><i /></div>
          <div className="isanHeroFloor" />
          <div className="isanHeroGrille">{Array.from({length: 30}).map((_, i) => <i key={i} />)}</div>
        </div>
        <div className="isanHeroShade" />
        <div className="isanHeroCopy">
          <a className="backLink" href="/">← THE ART.PRO</a>
          <p className="eyebrow isanKicker">ISAN · SPECIAL DIRECTION</p>
          <h1>ISAN для<br />панорамного<br /><span>вікна.</span></h1>
          <p className="lead">Внутрішньопідлогові конвектори та дизайнерське опалення, інтегровані в архітектуру інтерʼєру.</p>
          <div className="heroActions">
            <a className="button isanButton" href="#isan-form">Підібрати рішення</a>
            <a className="button buttonGhost" href="#convectors">Дивитися принцип</a>
          </div>
        </div>
        <div className="isanHeroMark">ISAN</div>
      </section>

      <section className="section isanWhy" id="why">
        <div className="sectionHeader wide">
          <div><p className="kicker isanKicker">01 / WHY ISAN</p><h2>Техніка повинна<br />зникати в інтерʼєрі.</h2></div>
          <p>Для нас ISAN — не просто товарна позиція. Це спеціалізація на правильній інтеграції опалення біля панорамного скління.</p>
        </div>
        <div className="isanBenefitGrid">
          {isanBenefits.map(([no,title,text]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section isanConvectors" id="convectors">
        <div className="isanProductVisual" aria-hidden="true">
          <div className="productGlass" />
          <div className="productGrille">{Array.from({length: 24}).map((_, i) => <i key={i} />)}</div>
          <span>MODULAR</span>
        </div>
        <div>
          <p className="kicker isanKicker">02 / FLOOR CONVECTORS</p>
          <h2>Решітка. Підлога. Скло.<br />Одна геометрія.</h2>
          <p className="largeCopy">Конвектор проєктуємо разом із вузлом підлоги та привʼязкою до вікна — не після завершення ремонту.</p>
          <div className="technicalList">
            <div><span>01</span><p>Розрахунок по тепловому навантаженню</p></div>
            <div><span>02</span><p>Вибір природної або примусової конвекції</p></div>
            <div><span>03</span><p>Поперечна решітка Modular та фініш</p></div>
            <div><span>04</span><p>Координація з підлогою, шторами та меблями</p></div>
          </div>
        </div>
      </section>

      <section className="section isanDesigners" id="designers">
        <div><p className="kicker isanKicker">03 / FOR DESIGNERS</p><h2>Ви даєте план.<br />Ми закриваємо<br />ISAN частину.</h2></div>
        <div>
          <p className="largeCopy">Підбираємо модель, розміри, решітку, керування і технічну привʼязку до інтерʼєру.</p>
          <div className="technicalList lightList">
            <div><span>01</span><p>Підбір по плануванню</p></div>
            <div><span>02</span><p>Технічна консультація</p></div>
            <div><span>03</span><p>Специфікація та вузли</p></div>
            <div><span>04</span><p>Комплектація та супровід</p></div>
          </div>
        </div>
      </section>

      <section className="section isanTechnical" id="technical">
        <p className="kicker isanKicker">04 / TECHNICAL LOGIC</p>
        <h2>Підбір починається<br />не з ціни, а з плану.</h2>
        <p>Для коректного рішення потрібні планування, розміри панорамного скління, конструкція підлоги, джерело тепла та вимоги до керування. Саме тому ISAN на THE ART.PRO працює як окремий проєктний landing.</p>
      </section>

      <section className="startProject section isanStart" id="isan-form">
        <div className="startTitle">
          <p className="kicker kickerDark">05 / START ISAN PROJECT</p>
          <h2>Є панорамне<br />вікно?<br /><span>Надішли план.</span></h2>
          <p>Ми повернемося з технічними питаннями та логікою підбору.</p>
        </div>
        <form className="projectForm">
          <label><span>Імʼя / компанія</span><input type="text" placeholder="Як до вас звертатися" /></label>
          <label><span>Телефон / Telegram</span><input type="text" placeholder="+380" /></label>
          <label><span>Тип обʼєкта</span><select defaultValue=""><option value="" disabled>Оберіть</option><option>Квартира</option><option>Будинок</option><option>Комерційний обʼєкт</option></select></label>
          <label><span>Стадія</span><select defaultValue=""><option value="" disabled>Оберіть</option><option>Проєктування</option><option>Чорнові роботи</option><option>Комплектація</option><option>Заміна / сервіс</option></select></label>
          <label className="fullField"><span>Коротко про задачу</span><textarea placeholder="Місто, площа, розміри вікон, що вже відомо по опаленню..." /></label>
          <button type="button" className="isanSubmit">Надіслати ISAN проєкт <span>↗</span></button>
        </form>
      </section>

      <footer className="footer">
        <div className="footerBrand"><Logo /><p>ISAN special direction inside THE ART.PRO.</p></div>
        <div className="footerBottom"><span>© 2026 THE ART.PRO · ISAN</span><a href="/">THE ART.PRO</a><a href="#top">UP ↑</a></div>
      </footer>
    </main>
  )
}
