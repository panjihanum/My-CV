import React from 'react';
import './App.css';
import './assets/css/animate.css';
import './assets/scss/main.scss';
import $ from 'jquery';


const Header  = React.lazy(() => import('./components/Header'));
const Home = React.lazy(() => import('./components/Home'));
const Quotes = React.lazy(() => import('./components/Quotes'));
const Projects = React.lazy(() => import('./components/Projects'));
// const Skills = React.lazy(() => import('./components/Skills'));
// const Footer = React.lazy(() => import('./components/Footer'));


class App extends React.Component {
  componentDidMount() {
    document.title = 'Panji Hanum Portofolio';
  }
  render(){
    return (
      <div className="container-custom">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Home />
          <Quotes />
          <Projects />
          {/* <Skills />
          <Footer /> */}
        </React.Suspense>
      </div>
    );
  }
}

$(document).ready(function(){
  window.onscroll = function() {myFunction()};

  function myFunction() {
    animateCSS($('.text-animation'), 'bounceInLeft');
    animateCSS($('.text-child-content'), 'bounceInLeft');
    $('.card-custom').each(function(){
      if (window.matchMedia('(min-width: 992px)').matches) {
        animateCSS($(this), 'slideInUp');
      }else{
        animateCSS($(this), 'bounceInLeft');
      }
    })
  }
  function animateCSS(node, animationName, callback) {

      function handleAnimationEnd() {
          node.prop('visibility', 'hidden');
          node.removeClass('animated');
          node.removeClass(animationName);
      }

      node.prop('visibility', 'unset');
      if(!elementInView(node)){
        handleAnimationEnd();
        return ;
      }
      if(node == null ){
        return ;
      }
      node.addClass('animated');
      node.addClass(animationName);
      // node.addClass('delay-1s');
  }

  function elementInView(elem){
    return $(window).scrollTop() < elem.offset().top + elem.height();
  };
})

export default App;
