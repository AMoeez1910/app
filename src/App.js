import StepProgress from './pages/StepProgress';
import { Navbar } from './pages/Navbar';
import { Hero } from './pages/Hero';
import { HeroCont } from './pages/HeroCont';
import "./App.css"
import "./assets/css/styles.css"
import './assets/bootstrap/js/bootstrap.min.js'
import { HeroContent } from './pages/HeroContent.jsx';
import { Faq } from './pages/Faq.jsx';
function App() {
  return (
       <div
        className="container py-4 py-xl-5 px-5"
        style={{ paddingBottom: 0, marginBottom: 207, marginTop: 70 }}
      >
      <Navbar/>
      <Hero/>
      <section className="py-4 py-xl-5">
          <HeroCont />
          <StepProgress/>
          <HeroContent />
          <header>
        <h2
          className="text-uppercase fw-bold mb-3"
          style={{
            textAlign: 'center'
          }}
        >
          FAQs
        </h2>
        </header>
            <div
              className="accordion"
              id="accordion-1"
              role="tablist"
              style={{
                '--bs-body-bg': 'transparent',
                background: '#00000000'
              }}
            >
            <Faq textHeader={"What is this place?"} textContent={"fjadb fhdbfh dhf dh fhb fb dfh abjf h "} id={1}/>
            <Faq textHeader={"What is this place?"} textContent={"fjadb fhdbfh dhf dh fhb fb dfh abjf h "} id={2}/>
            <Faq textHeader={"What is this place?"} textContent={"fjadb fhdbfh dhf dh fhb fb dfh abjf h "} id={3}/>
        </div>
      </section>
      </div>
  );
}

export default App;
