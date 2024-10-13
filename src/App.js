import React, { Component, Suspense } from 'react';
import './App.css'; 
import favicon from './favicon.ico';
import Page1 from './components/Page1';
// part 1 - No code splitting
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';
// part 3 - Clener Code splitting
// import asyncCompoenent from './components/AsyncComponent';
// part 4 - React.lazy
const Page2Lazy = React.lazy(() => import('./components/Page2'));
const Page3Lazy = React.lazy(() => import('./components/Page3'));

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      // part 2 - code splitting - manual
      // component: null,
    }
  }
  onRouteChange = (route) => {
    // part 1 - No code splitting:
    this.setState({route:route});

    // part 2 - Code splitting - manual
    // With Code Splitting:
    // if(route==='page1') {
    //   this.setState({ 
    //     route:route,
    //   });
    // } else if(route==='page2'){
    //   import('./components/Page2').then((Page2) => {
    //     console.log(Page2.default);
    //     this.setState({ 
    //       route:route,
    //       component: Page2.default,
    //     })
    //   })
    // } else if(route==='page3'){
    //   import('./components/Page3').then((Page3) => {
    //     this.setState({ 
    //       route:route,
    //       component: Page3.default,
    //     })
    //   })
    // }
    
  }
  
  render () {
    // part 1 - No code splitting
    //   if(this.state.route==='page1'){
    //     return <Page1 onRouteChange={this.onRouteChange}/>
    //   } else if(this.state.route==='page2'){
    //     return <Page2 onRouteChange={this.onRouteChange}/>
    //   } else{  
    //     return <Page3 onRouteChange={this.onRouteChange}/>
    //   }  
    // }

    // part 2 - Code splitting - manual
    // if(this.state.route ==='page1'){
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } else{
    //   return <this.state.component onRouteChange={this.onRouteChange} />
    // }

    // part 3 - Clener Code splitting
      // if(this.state.route==='page1'){
      //   return <Page1 onRouteChange={this.onRouteChange}/>
      // } else if(this.state.route==='page2'){
      //   const AsyncPage2 = asyncCompoenent(()=> import('./components/Page2'))
      //   return <AsyncPage2 onRouteChange={this.onRouteChange} />
      // } else{  
      //   const AsyncPage3 = asyncCompoenent(()=> import('./components/Page3'))
      //   return <AsyncPage3 onRouteChange={this.onRouteChange} />
      // }

    // part 4 - React.lazy
    if(this.state.route==='page1'){
      return <Page1 onRouteChange={this.onRouteChange}/>
    } else if(this.state.route==='page2'){
      return(
        <Suspense fallback={<div>Loading...</div>}>
          return <Page2Lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    } else{  
      return(
        <Suspense fallback={<div>Loading...</div>}>
          return <Page3Lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    }

    }
}

export default App;