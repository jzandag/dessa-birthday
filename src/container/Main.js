import React, { Component } from 'react';
import image from '../sample.png'
class Main extends Component {
    state = {
        heartClicked: false
    }

    onHeartClick = () => {
        this.setState( prev => {
            return {
                heartClicked: !prev.heartClicked
            }
        })
        console.log('hey girl');
    }

    render() {
        let content = 
            <div className="heart" onClick={this.onHeartClick}>
                <footer id='footer'>
                    <p>From Zid with love</p>
                </footer>
            </div>
        if(this.state.heartClicked){
            document.getElementsByClassName('App').className = 'App light'
            content = 
                <React.Fragment>
                    <div className='letter'>
                        <button className='btn' onClick={this.onHeartClick}><i className="fa fa-arrow-left"></i>&nbsp;
                            Tap to go back
                        </button>

                        <div className='letter-border'>
                            <p> hello baby happy birthday and happy monthsary na din in the next few days. Umabot na tayo ng 1 year and 2 months. I just wanna say thank you sa lahat ng pagtitimpi and paguunawa. Right now naguguluhan ako sa path na kukunin ko and naiistress nako sa recent events happening around us. But I know this is temporary and matatapos din to. Focus lang tayo sa mga  bagay na may control tayo. After covid we will be busy with our lives again and may magbubuil na tayo ng sarisarili nating career. And always tatandaan kahit maging busy man tayo, remember this is for the future din to escape the rat race. </p>
                            <p>
                            Lagi kong pinupush sayo some of my opinions and strat kasi alam ko makakatulong din to sa future natin. And yun happy birthday ginawa ko to using react.js para practice na din though ang simple lng wahahahaha. May we be successful in our career and in the future. I love you.</p>

                            <p>PS amoy ko yung tahong niluluto tas nagugutom nako</p>
                            <img src={image} alt=""/>
                        </div>                        
                    </div>
                </React.Fragment>
        }
        return (
            <div className="d">
                {content}
            </div>
        );
    }
}

export default Main;
