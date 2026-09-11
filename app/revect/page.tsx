import type {Metadata} from 'next'
import './revect.css'
import './light.css'

export const metadata: Metadata = {
  title: 'RE:VECT SYSTEM — модернізація внутрішньопідлогових конвекторів | THE ART.PRO',
  description: 'RE:VECT SYSTEM by THE ART.PRO — очищення, модернізація, заміна вентиляторів, автоматики та решіток внутрішньопідлогових конвекторів.',
}

const modules = [
  ['01', 'RE:CLEAN', 'Глибоке очищення корпусу, теплообмінника, каналів та зони монтажу без демонтажу всієї системи.'],
  ['02', 'RE:FAN', 'Діагностика та заміна вентиляторів, оновлення електричної частини й відновлення нормальної продуктивності.'],
  ['03', 'RE:CONTROL', 'Оновлення керування, автоматики та сценаріїв роботи існуючого конвектора.'],
  ['04', 'RE:GRILLE', 'Нова решітка, зміна кольору, геометрії та візуального характеру конвектора.'],
  ['05', 'RE:PANORAMA', 'Заміна або адаптація решіток і видимих елементів конвекторів інших брендів під новий інтерʼєр.'],
]

const steps = [
  ['01', 'Фото / розміри', 'Отримуємо фото, бренд, габарити та короткий опис проблеми.'],
  ['02', 'Діагностика', 'Розуміємо, що можна залишити, що варто замінити і де модернізація має сенс.'],
  ['03', 'Рішення', 'Формуємо склад робіт, комплект компонентів і візуальне рішення.'],
  ['04', 'RE:VECT', 'Виконуємо сервіс, модернізацію або заміну видимих елементів системи.'],
]

function Logo({width = 165}: {width?: number}) {
  return <img src="/the-art-pro-logo.svg" alt="the-art.pro" width={width} style={{height: 'auto', display: 'block'}} />
}

export default function RevectPage() {
  return (
    <main className="revectLanding">
      <header className="topbar">
        <div className="revectBrandWrap">
          <a href="/" className="logoLink"><Logo /></a>
          <div className="subBrandLock" aria-label="RE:VECT SYSTEM by THE ART.PRO"><b>RE:VECT</b><small>SYSTEM</small></div>
        </div>
        <nav className="nav" aria-label="RE:VECT navigation">
          <a href="#system">Про систему</a><a href="#modules">Сервіси</a><a href="#panorama">re:panorama</a><a href="#process">Як працюємо</a><a href="#revect-form">Контакти</a>
        </nav>
        <a className="navCta revectCta" href="#revect-form">Надіслати фото <span>↗</span></a>
      </header>

      <section className="revectHero" id="top">
        <div className="revectHeroVisual" aria-hidden="true"><div className="rvGrid" /><div className="rvOld"><span>BEFORE</span></div><div className="rvAxis" /><div className="rvNew"><span>AFTER</span></div><div className="rvHeroGrille">{Array.from({length: 30}).map((_, i) => <i key={i} />)}</div></div>
        <div className="revectHeroShade" />
        <div className="revectHeroCopy">
          <a className="backLink" href="/">← THE ART.PRO</a>
          <p className="eyebrow revectKicker">RE:VECT SYSTEM · SERVICE BY THE ART.PRO</p>
          <h1>Не міняти все.<br /><span>Оновити те, що є.</span></h1>
          <p className="lead">Система відновлення, модернізації та візуального оновлення внутрішньопідлогових конвекторів — без зайвого демонтажу і без руйнування готового інтерʼєру.</p>
          <div className="heroActions"><a className="button revectButton" href="#revect-form">Отримати рішення</a><a className="button buttonGhost" href="#modules">Що можемо оновити</a></div>
        </div>
        <div className="revectHeroMark">RE:VECT</div>
      </section>

      <section className="section revectManifest" id="system">
        <div><p className="kicker revectKicker">01 / SYSTEM</p><h2>Старий конвектор<br />не завжди треба<br />викидати.</h2></div>
        <div><p className="largeCopy">Спочатку визначаємо ресурс існуючої системи. Потім міняємо тільки те, що реально потребує оновлення.</p><p>Корпус і теплообмінник можуть залишатися, а вентилятори, автоматика, решітка та зовнішній вигляд — оновлюватися. Це зменшує обсяг робіт, ризик пошкодження підлоги і бюджет модернізації.</p></div>
      </section>

      <section className="section revectModules" id="modules">
        <div className="sectionHeader wide"><div><p className="kicker revectKicker">02 / MODULES</p><h2>Оновлюємо<br /><span>по модулях.</span></h2></div><p>RE:VECT — не одна послуга, а набір незалежних сервісних модулів під конкретний стан конвектора.</p></div>
        <div className="revectModuleGrid">{modules.map(([no, title, text]) => <article key={title}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section panorama" id="panorama">
        <div className="panoramaVisual" aria-hidden="true"><div className="pWindow" /><div className="pFloor" /><div className="pOldGrille" /><div className="pNewGrille">{Array.from({length: 25}).map((_, i) => <i key={i} />)}</div><span>re:panorama</span></div>
        <div><p className="kicker revectKicker">03 / RE:PANORAMA</p><h2>Нова решітка.<br />Новий вигляд<br />усього вікна.</h2><p className="revectBody">Окремий напрям для заміни та адаптації решіток існуючих конвекторів — у тому числі інших виробників. Підбираємо геометрію, колір і логіку інтеграції в чистову підлогу.</p><a className="textLink revectLink" href="#revect-form">Запитати re:panorama <span>↗</span></a></div>
      </section>

      <section className="section revectProcess" id="process">
        <div className="sectionHeader wide"><div><p className="kicker revectKicker">04 / PROCESS</p><h2>Від фото<br />до готового рішення.</h2></div><p>На старті нам не потрібен складний проєкт — достатньо зрозуміти, що у вас встановлено зараз.</p></div>
        <div className="revectSteps">{steps.map(([no, title, text]) => <article key={title}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section revectWhy">
        <p className="kicker revectKicker">05 / WHY RE:VECT</p><h2>Менше демонтажу.<br />Менше втручання.<br /><span>Більше контролю.</span></h2>
        <div className="revectWhyGrid"><p>Зберігаємо те, що ще має ресурс.</p><p>Оновлюємо слабкі або застарілі компоненти.</p><p>Повертаємо конвектору нормальну продуктивність.</p><p>Підтягуємо зовнішній вигляд до нового інтерʼєру.</p></div>
      </section>

      <section className="startProject section revectStart" id="revect-form">
        <div className="startTitle"><p className="kicker kickerDark">06 / START RE:VECT</p><h2>Покажіть,<br /><span>що стоїть зараз.</span></h2><p>Надішліть фото, орієнтовні розміри, бренд конвектора та коротко опишіть проблему. З цього починається діагностика.</p></div>
        <form className="projectForm"><label><span>Імʼя</span><input type="text" placeholder="Як до вас звертатися" /></label><label><span>Телефон / Telegram</span><input type="text" placeholder="+380" /></label><label><span>Бренд конвектора</span><input type="text" placeholder="Якщо відомий" /></label><label><span>Що потрібно</span><select defaultValue=""><option value="" disabled>Оберіть</option><option>Чистка / сервіс</option><option>Заміна вентиляторів</option><option>Автоматика</option><option>Нова решітка</option><option>re:panorama</option><option>Повна модернізація</option></select></label><label className="fullField"><span>Коротко про проблему</span><textarea placeholder="Розміри, стан, шум, не гріє, пошкоджена решітка, ремонт інтерʼєру..." /></label><button type="button">Надіслати запит <span>↗</span></button></form>
      </section>

      <footer className="footer"><div className="footerMain"><Logo width={205} /><p>RE:VECT SYSTEM by THE ART.PRO<br />Kyiv · Ukraine</p></div><div className="footerNav"><a href="/">THE ART.PRO</a><a href="/isan" className="isanNav">ISAN</a><a href="#modules" className="revectNav">RE:VECT</a><a href="#panorama">re:panorama</a><a href="#revect-form">Запит на сервіс</a></div><div className="footerBottom"><span>© 2026 THE ART.PRO · RE:VECT</span><a href="#top">UP ↑</a></div></footer>
    </main>
  )
}
